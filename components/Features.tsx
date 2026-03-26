import { motion, cubicBezier } from "framer-motion";
import { FEATURES } from "../app/Data/Data";
import { Chip, fadeUp, GlowOrb, stagger } from "./Reusable/ReusableComponents";

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