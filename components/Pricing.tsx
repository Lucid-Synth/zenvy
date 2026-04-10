import { Chip, fadeUp, GlowOrb, stagger } from "./Reusable/ReusableComponents";
import { motion } from "framer-motion";
import { Separator } from "radix-ui";

export default function Pricing() {
  const PLAN = {
    name: "Free Plan",
    tagline: "Everything you need to get started",
    features: [
      "HD resolution",
      "PNG export",
    ],
  };

  return (
    <section id="pricing" className="relative py-32 px-6">
      <GlowOrb className="h-100 w-100 bg-violet-700 left-1/2 -translate-x-1/2 top-0" />

      <div className="mx-auto max-w-4xl relative">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.div variants={fadeUp}>
            <Chip>Free</Chip>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-md leading-tight"
          >
            Everything you need. Completely free.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-zinc-500 text-base max-w-sm"
          >
            No subscriptions. No hidden fees. No credit card required.
          </motion.p>
        </motion.div>

        {/* Free Plan Card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl p-10 flex flex-col gap-6 w-full max-w-md border border-violet-500/50 bg-violet-950/40 shadow-[0_0_60px_rgba(139,92,246,0.15)]"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white shadow-lg">
                Start free
              </span>
            </div>

            {/* Plan Info */}
            <div className="text-center">
              <p className="text-sm text-zinc-500 mb-2">{PLAN.name}</p>
              <p className="text-2xl font-bold text-white">
                {PLAN.tagline}
              </p>
            </div>

            <Separator.Root className="bg-white/5 h-px w-full" />

            {/* Features */}
            <ul className="flex flex-col gap-3">
              {PLAN.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-zinc-400"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-violet-400"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/signup"
              className="mt-4 rounded-full py-3 text-center text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Start for free
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}