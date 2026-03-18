import { motion, cubicBezier } from "framer-motion";
import { FEATURES } from "../Data/Data";

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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <GlowOrb className="h-100 w-100 bg-indigo-700 -right-32 top-1/4" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <motion.div variants={fadeUp}><Chip>Features</Chip></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-lg leading-tight">
            Everything you need. Nothing you don't.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-500 max-w-md text-base">
            Zenvy is opinionated about simplicity — but not at the cost of power.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-white/[0.07] bg-white/3 p-7 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-2xl text-violet-400 mb-4 block">{f.icon}</span>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}