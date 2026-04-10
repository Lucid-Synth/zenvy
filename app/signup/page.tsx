"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Label from "@radix-ui/react-label";
import * as Separator from "@radix-ui/react-separator";
import * as Checkbox from "@radix-ui/react-checkbox";
import { authClient, signIn } from "@/app/lib/auth-client";

function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] opacity-25 ${className}`}
    />
  );
}

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
}

function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  autoComplete,
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <Label.Root
        htmlFor={id}
        className="text-xs font-medium text-zinc-400 tracking-wide"
      >
        {label}
      </Label.Root>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full rounded-xl border bg-white/4 py-3 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200
            ${icon ? "pl-10" : "pl-4"}
            ${
              error
                ? "border-red-500/50 focus:border-red-500/80"
                : focused
                  ? "border-violet-500/60 shadow-[0_0_0_3px_rgba(139,92,246,0.12)]"
                  : "border-white/8 hover:border-white/[0.14]"
            }
          `}
        />
        <AnimatePresence>
          {focused && !error && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-violet-500/20"
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M6 4v3M6 8.5v.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// Social Button
function SocialButton({
  icon,
  label,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => Promise<void> | void
}) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={onClick}
      className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-white/8 bg-white/4 py-3 text-sm text-zinc-400 hover:border-white/15 hover:bg-white/[0.07] hover:text-white transition-all duration-200"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </motion.button>
  );
}

// Password Strength
function PasswordStrength({ password }: { password: string }) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const strength = checks.filter(Boolean).length;
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "",
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-emerald-400",
  ];
  const textColors = [
    "",
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-emerald-400",
  ];

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col gap-2 overflow-hidden"
    >
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: strength >= i ? "100%" : "0%" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`h-full rounded-full ${strength >= i ? colors[strength] : ""}`}
            />
          </div>
        ))}
      </div>
      <p className={`text-xs ${textColors[strength]}`}>
        {labels[strength]} password
      </p>
    </motion.div>
  );
}

export default function SignupPage() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");

  const set = (field: string) => (v: string) => {
    setForm((f) => ({ ...f, [field]: v }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Enter a valid email address.";
    if (form.password.length < 8)
      e.password = "Password must be at least 8 characters.";
    if (!agreed) e.agreed = "You must accept the terms.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await authClient.signUp.email(
        {
          email: form.email,
          password: form.password,
          name: form.name,
        },
        {
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        },
      );

      if (error) return;

      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const SignIn = async (provider: "google" | "github") => {
    console.log(`${provider} clicked`);
    try {
      await authClient.signIn.social({
        provider,
      });
    } catch (err: any) {
      console.error(err);
      setGlobalError(err.message || `${provider} sign-in failed`);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-white antialiased overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200 flex flex-col items-center justify-center px-6 py-16">
      {/* Orbs */}
      <GlowOrb className="h-125 w-125 bg-violet-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb className="h-62.5 w-62.5 bg-indigo-600 -top-10 right-0" />
      <GlowOrb className="h-50 w-50 bg-purple-700 bottom-0 -left-10" />

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-8"
      >
        <a href="/" className="inline-flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-[#a78bfa] to-[#6366f1] text-white text-sm font-black shadow-lg shadow-violet-500/30">
            Z
          </span>
          <span className="font-semibold tracking-tight text-white text-xl">
            Zenvy
          </span>
        </a>
      </motion.div>

      {/* Card */}
      <AnimatePresence mode="wait">
        {submitted ? (
          /* Success state */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm rounded-2xl border border-white/8 bg-white/3 p-10 backdrop-blur-sm flex flex-col items-center text-center gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: 0.1,
              }}
              className="h-20 w-20 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center"
            >
              <motion.svg
                className="h-9 w-9 text-violet-400"
                viewBox="0 0 36 36"
                fill="none"
              >
                <motion.path
                  d="M7 18l7 7 15-15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                />
              </motion.svg>
            </motion.div>
            <div>
              <h2 className="text-2xl font-black tracking-tighter text-white mb-2">
                You're in.{" "}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Welcome to Zenvy,{" "}
                <span className="text-zinc-300 font-medium">
                  {form.name.split(" ")[0]}
                </span>
              </p>
            </div>
            <a
              href="/dashboard"
              className="w-full rounded-xl bg-violet-600 py-3 text-center text-sm font-semibold text-white hover:bg-violet-500 transition-colors shadow-[0_0_24px_rgba(139,92,246,0.35)]"
            >
              Go to dashboard →
            </a>
          </motion.div>
        ) : (
          /* Form card */
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm shadow-[0_0_80px_rgba(139,92,246,0.07)]"
          >
            {/* Header */}
            <div className="mb-7">
              <h1 className="text-2xl font-black tracking-tighter text-white mb-1.5">
                Create your account
              </h1>
              <p className="text-sm text-zinc-500">
                Already have one?{" "}
                <a
                  href="/signin"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>

            {/* Social auth */}
            <div className="flex gap-3 mb-6">
              <SocialButton
                label="Google"
                onClick={() => SignIn("google")}
                icon={
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                }
              />
              <SocialButton
                label="GitHub"
                onClick={() => SignIn("github")}
                icon={
                  <svg
                    className="h-4 w-4 text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <Separator.Root className="flex-1 bg-white/[0.07] h-px" />
              <span className="text-xs text-zinc-600 shrink-0">
                or continue with email
              </span>
              <Separator.Root className="flex-1 bg-white/[0.07] h-px" />
            </div>

            {/* Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              noValidate
            >
              <InputField
                id={nameId}
                label="Full name"
                placeholder="Ada Lovelace"
                value={form.name}
                onChange={set("name")}
                error={errors.name}
                autoComplete="name"
                icon={
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <circle
                      cx="8"
                      cy="5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <InputField
                id={emailId}
                label="Email address"
                type="email"
                placeholder="ada@example.com"
                value={form.email}
                onChange={set("email")}
                error={errors.email}
                autoComplete="email"
                icon={
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1.5"
                      y="3.5"
                      width="13"
                      height="9"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1.5 6l5.97 3.5a1 1 0 0 0 1.06 0L14.5 6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <div className="flex flex-col gap-1.5">
                <InputField
                  id={passwordId}
                  label="Password"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={set("password")}
                  error={errors.password}
                  autoComplete="new-password"
                  icon={
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <rect
                        x="3"
                        y="7"
                        width="10"
                        height="7"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M5 7V5a3 3 0 0 1 6 0v2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                    </svg>
                  }
                />
                <AnimatePresence>
                  {form.password && (
                    <PasswordStrength password={form.password} />
                  )}
                </AnimatePresence>
              </div>

              {/* Terms */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-3">
                  <Checkbox.Root
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(v) => {
                      setAgreed(!!v);
                      setErrors((e) => ({ ...e, agreed: "" }));
                    }}
                    className={`mt-0.5 shrink-0 rounded border transition-all duration-200 flex items-center justify-center
                      ${
                        agreed
                          ? "border-violet-500 bg-violet-600"
                          : errors.agreed
                            ? "border-red-500/60 bg-white/4"
                            : "border-white/12 bg-white/4 hover:border-white/20"
                      }`}
                    style={{ height: 18, width: 18 }}
                  >
                    <Checkbox.Indicator>
                      <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label
                    htmlFor="terms"
                    className="text-xs text-zinc-500 leading-relaxed cursor-pointer"
                  >
                    I agree to Zenvy's{" "}
                    <a
                      href="#"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Terms & Condition
                    </a>
                  </label>
                </div>
                <AnimatePresence>
                  {errors.agreed && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-xs text-red-400 flex items-center gap-1 pl-7"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M6 4v3M6 8.5v.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {errors.agreed}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="relative mt-1 w-full overflow-hidden rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_32px_rgba(139,92,246,0.5)]"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="rgba(255,255,255,0.25)"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M12 3a9 9 0 0 1 9 9"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                      Creating account…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-1.5"
                    >
                      Create free account
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* Footer note */}
            <p className="mt-5 text-center text-[11px] text-zinc-700 leading-relaxed">
              Protected by reCAPTCHA ·{" "}
              <a
                href="/terms"
                className="underline underline-offset-2 hover:text-zinc-500 transition-colors"
              >
                Terms & Condition
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
