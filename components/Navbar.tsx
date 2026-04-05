import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br from-[#a78bfa] to-[#6366f1] text-white text-sm font-black">
            Z
          </span>
          <span className="font-semibold tracking-tight text-white text-lg">
            Zenvy
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {["Features", "Pricing", "Workflow"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/waitlist"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="/waitlist"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Try free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line
                  x1="3"
                  y1="3"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="19"
                  y1="3"
                  x2="3"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <line
                  x1="2"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="2"
                  y1="11"
                  x2="20"
                  y2="11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="2"
                  y1="16"
                  x2="20"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 pb-6 pt-4 space-y-4"
          >
            {["Features", "Pricing","Workflow"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm text-zinc-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="http://localhost:3000/waitlist"
              className="block rounded-full bg-white text-center px-4 py-2 text-sm font-semibold text-zinc-900"
            >
              Try free
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glass blur line */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/5" />
    </motion.header>
  );
}
