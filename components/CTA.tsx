import { motion, cubicBezier } from "framer-motion";
import { GlowOrb } from "./Reusable/ReusableComponents";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <GlowOrb className="h-125 w-125 bg-violet-700 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-2xl rounded-3xl border border-violet-500/20 bg-white/2 p-16 text-center backdrop-blur-sm shadow-[0_0_100px_rgba(139,92,246,0.1)]"
      >
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-tight mb-5">
          Start removing<br />backgrounds today.
        </h2>
        <p className="text-zinc-500 mb-10 text-base max-w-sm mx-auto">
          Join 40,000+ teams using Zenvy to ship polished visuals in record time.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/waitlist"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Get started free
          </a>
          <a
            href="/waitlist"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
          >
            View docs →
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-700">No credit card · Free forever plan · SOC 2 compliant</p>
      </motion.div>
    </section>
  );
}
