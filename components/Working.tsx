import { motion, cubicBezier } from "framer-motion";
import { Chip, fadeUp, GlowOrb, stagger } from "./Reusable/ReusableComponents";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Upload your image", desc: "Drag and drop or click to upload. Supports PNG, JPG, WebP, TIFF — up to 25 MB." },
    { num: "02", title: "AI processes it", desc: "Our model runs inference in under 2 seconds. No queues on Pro and Business plans." },
    { num: "03", title: "Download & ship", desc: "Get a transparent PNG or swap the background. Ready for your product, app, or workflow." },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <GlowOrb className="h-75 w-75 bg-purple-700 -left-20 top-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <motion.div variants={fadeUp}><Chip>How it works</Chip></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-md leading-tight">
            Three steps. Two seconds. Done.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-linear-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0" />

          {steps.map((s, i) => (
            <motion.div key={s.num} variants={fadeUp} custom={i} className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center">
                  <span className="font-black text-violet-400 text-sm tracking-tight">{s.num}</span>
                </div>
                {i < 2 && <div className="md:hidden absolute top-1/2 -right-6 w-12 h-px bg-violet-500/30" />}
              </div>
              <h3 className="font-semibold text-white text-base">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}