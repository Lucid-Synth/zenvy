import { useRef, useState } from "react";
import { Chip, fadeUp, GlowOrb, stagger } from "./Reusable/ReusableComponents";
import { motion } from "framer-motion";
import { Separator } from "radix-ui";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  interface Plan {
  name: string;
  price: string;
  unit: string;
  highlight: boolean;
  features: string[];
  cta: string;
}

  const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    unit: "/ forever",
    highlight: true,
    features: ["10 images / month", "HD resolution", "PNG export"],
    cta: "Start free",
  },
  // {
  //   name: "Pro",
  //   price: "$7",
  //   unit: "/ month",
  //   highlight: true,
  //   features: ["2,000 images / month", "4K resolution", "All export formats", "API access (2K calls/mo)", "Priority queue", "Bulk upload"],
  //   cta: "Get Pro",
  // },
  // {
  //   name: "Business",
  //   price: "$35",
  //   unit: "/ month",
  //   highlight: false,
  //   features: ["Unlimited images", "4K resolution", "All export formats", "Unlimited API", "Dedicated support", "Custom model fine-tuning"],
  //   cta: "Contact us",
  // },
];

  // return (
  //   <section id="pricing" className="relative py-32 px-6">
  //     <GlowOrb className="h-100 w-100 bg-violet-700 left-1/2 -translate-x-1/2 top-0" />

  //     <div className="mx-auto max-w-6xl relative">
  //       <motion.div
  //         variants={stagger}
  //         initial="hidden"
  //         whileInView="show"
  //         viewport={{ once: true, margin: "-100px" }}
  //         className="flex flex-col items-center text-center gap-4 mb-16"
  //       >
  //         <motion.div variants={fadeUp}><Chip>Pricing</Chip></motion.div>
  //         <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-md leading-tight">
  //           Simple, transparent pricing.
  //         </motion.h2>
  //         <motion.p variants={fadeUp} className="text-zinc-500 text-base max-w-sm">
  //           No hidden fees. Start free and scale as you grow.
  //         </motion.p>

  //         {/* Toggle */}
  //         <motion.div variants={fadeUp} className="flex items-center gap-3 mt-2">
  //           <span className={`text-sm ${!annual ? "text-white" : "text-zinc-500"}`}>Monthly</span>
  //           <button
  //             onClick={() => setAnnual(!annual)}
  //             className={`relative h-6 w-11 rounded-full border transition-colors duration-200 ${annual ? "bg-violet-600 border-violet-500" : "bg-white/10 border-white/10"}`}
  //           >
  //             <motion.div
  //               animate={{ x: annual ? 20 : 2 }}
  //               transition={{ type: "spring", stiffness: 500, damping: 30 }}
  //               className="h-4 w-4 rounded-full bg-white absolute top-0.5"
  //             />
  //           </button>
  //           <span className={`text-sm ${annual ? "text-white" : "text-zinc-500"}`}>
  //             Annual <span className="text-violet-400 text-xs ml-1">~20%</span>
  //           </span>
  //         </motion.div>
  //       </motion.div>

  //       <motion.div
  //         variants={stagger}
  //         initial="hidden"
  //         whileInView="show"
  //         viewport={{ once: true, margin: "-80px" }}
  //         className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
  //       >
  //         {PLANS.map((p, i) => (
  //           <motion.div
  //             key={p.name}
  //             variants={fadeUp}
  //             custom={i}
  //             className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
  //               p.highlight
  //                 ? "border border-violet-500/50 bg-violet-950/40 shadow-[0_0_60px_rgba(139,92,246,0.15)]"
  //                 : "border border-white/[0.07] bg-white/3"
  //             }`}
  //           >
  //             {p.highlight && (
  //               <div className="absolute -top-3 left-1/2 -translate-x-1/2">
  //                 <span className="rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white shadow-lg">Most popular</span>
  //               </div>
  //             )}
  //             <div>
  //               <p className="text-sm text-zinc-500 mb-2">{p.name}</p>
  //               <div className="flex items-end gap-1">
  //                 <span className="text-4xl font-black text-white">{annual && p.price !== "$0" ? `$${Math.round(parseInt(p.price.slice(1)) * 0.8)}` : p.price}</span>
  //                 <span className="text-zinc-500 text-sm mb-1">{p.unit}</span>
  //               </div>
  //             </div>

  //             <Separator.Root className="bg-white/5 h-px w-full" />

  //             <ul className="flex flex-col gap-3">
  //               {p.features.map((f) => (
  //                 <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-400">
  //                   <svg className="h-4 w-4 shrink-0 text-violet-400" viewBox="0 0 16 16" fill="none">
  //                     <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  //                   </svg>
  //                   {f}
  //                 </li>
  //               ))}
  //             </ul>

  //             <a
  //               href="#"
  //               className={`mt-auto rounded-full py-2.5 text-center text-sm font-semibold transition-all duration-200 ${
  //                 p.highlight
  //                   ? "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
  //                   : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
  //               }`}
  //             >
  //               {p.cta}
  //             </a>
  //           </motion.div>
  //         ))}
  //       </motion.div>
  //     </div>
  //   </section>
  // );

    return (
    <section id="pricing" className="relative py-32 px-6">
      <GlowOrb className="h-100 w-100 bg-violet-700 left-1/2 -translate-x-1/2 top-0" />

      <div className="mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.div variants={fadeUp}>
            <Chip>Pricing</Chip>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-md leading-tight"
          >
            Simple, transparent pricing.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-zinc-500 text-base max-w-sm"
          >
            No hidden fees. Start free and scale as you grow.
          </motion.p>

          {/* Toggle */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mt-2"
          >
            <span
              className={`text-sm ${
                !annual ? "text-white" : "text-zinc-500"
              }`}
            >
              Monthly
            </span>

            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-6 w-11 rounded-full border transition-colors duration-200 ${
                annual
                  ? "bg-violet-600 border-violet-500"
                  : "bg-white/10 border-white/10"
              }`}
            >
              <motion.div
                animate={{ x: annual ? 20 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="h-4 w-4 rounded-full bg-white absolute top-0.5"
              />
            </button>

            <span
              className={`text-sm ${
                annual ? "text-white" : "text-zinc-500"
              }`}
            >
              Annual{" "}
              <span className="text-violet-400 text-xs ml-1">~20%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`grid grid-cols-1 ${
            PLANS.length === 1 ? "place-items-center" : "md:grid-cols-3"
          } gap-4 items-start`}
        >
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 w-full max-w-sm ${
                p.highlight
                  ? "border border-violet-500/50 bg-violet-950/40 shadow-[0_0_60px_rgba(139,92,246,0.15)]"
                  : "border border-white/[0.07] bg-white/3"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white shadow-lg">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div>
                <p className="text-sm text-zinc-500 mb-2">{p.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">
                    {annual && p.price !== "$0"
                      ? `$${Math.round(
                          parseInt(p.price.slice(1)) * 0.8
                        )}`
                      : p.price}
                  </span>
                  <span className="text-zinc-500 text-sm mb-1">
                    {p.unit}
                  </span>
                </div>
              </div>

              <Separator.Root className="bg-white/5 h-px w-full" />

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
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
                href="/waitlist"
                className={`mt-auto rounded-full py-2.5 text-center text-sm font-semibold transition-all duration-200 ${
                  p.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}