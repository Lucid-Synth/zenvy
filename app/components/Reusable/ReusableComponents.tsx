import { cubicBezier } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: cubicBezier(0.22, 1, 0.36, 1) } }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Reusable components ──────────────────────────────────────────────────────
export function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] opacity-30 ${className}`}
    />
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium tracking-widest text-zinc-400 uppercase">
      {children}
    </span>
  );
}