import { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] opacity-30 ${className}`}
    />
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium tracking-widest text-zinc-400 uppercase">
      {children}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: cubicBezier(0.22, 1, 0.36, 1) } }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center pb-15">
      {/* Orbs */}
      <GlowOrb className="h-125 w-125 bg-violet-600 -top-32 left-1/2 -translate-x-1/2" />
      <GlowOrb className="h-75 w-75 bg-indigo-500 top-1/3 -left-20" />
      <GlowOrb className="h-50 w-50 bg-purple-700 bottom-0 right-10" />

      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Chip>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-3 bg-indigo-600"></span>
            </span> 
            Powered by deep AI — not just a mask</Chip>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white"
        >
          Remove backgrounds.{" "}
          <span className="bg-linear-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Instantly.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
        >
          Zenvy removes image backgrounds in under 2 seconds with pixel-perfect precision. Built for designers, developers, and e-commerce teams who don't have time to waste.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/waitlist"
            className="group relative inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Start for free
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            See how it works
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="text-xs text-zinc-600"
        >
          No credit card required · 50 free images/month · Cancel anytime
        </motion.p>
      </motion.div>

      {/* Demo visual */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        className="relative z-10 mt-20 w-full max-w-3xl"
      >
        <div className="rounded-2xl border border-white/10 bg-white/3 p-1 shadow-[0_0_80px_rgba(139,92,246,0.15)] backdrop-blur-sm">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <div className="ml-4 flex-1 rounded-full bg-white/5 py-1 px-3 text-xs text-zinc-600">app.zenvy.ai</div>
          </div>
          {/* Content */}
          <div className="grid grid-cols-2 gap-0 rounded-xl overflow-hidden min-h-65">
            {/* Before */}
            <div className="relative bg-zinc-900 flex flex-col items-center justify-center p-8 gap-4">
              <span className="absolute top-3 left-3 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Before</span>
              <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-linear-to-br from-zinc-700 to-zinc-600 flex items-center justify-center">
                  {/* Fake person silhouette */}
                  <svg viewBox="0 0 80 80" className="w-20 h-20 opacity-40" fill="none">
                    <circle cx="40" cy="22" r="12" fill="white" />
                    <path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="white" />
                    <rect x="8" y="12" width="64" height="56" rx="4" fill="white" opacity="0.08" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-zinc-500">original.jpg</span>
            </div>
            {/* After */}
            <div className="relative flex flex-col items-center justify-center p-8 gap-4"
              style={{ background: "repeating-conic-gradient(#ffffff08 0% 25%, transparent 0% 50%) 0 0 / 16px 16px" }}>
              <span className="absolute top-3 left-3 text-[10px] text-zinc-500 font-mono uppercase tracking-widest">After</span>
              <motion.div
                animate={{ boxShadow: ["0 0 0px rgba(139,92,246,0.3)", "0 0 40px rgba(139,92,246,0.6)", "0 0 0px rgba(139,92,246,0.3)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 rounded-xl overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
                    <circle cx="40" cy="22" r="12" fill="white" />
                    <path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="white" />
                  </svg>
                </div>
              </motion.div>
              <span className="text-xs text-violet-400">✓ background removed</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-zinc-700"
        >
        </motion.div>
      </motion.div>
    </section>
  );
}