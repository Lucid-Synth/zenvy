// "use client";

// import { useState, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as Progress from "@radix-ui/react-progress";

// // ─── Types ─────────────────────────────────────────
// type UploadState = "idle" | "dragging" | "uploading" | "processing" | "done" | "error";

// // ─── Glow Background ───────────────────────────────
// function GlowOrb({ className }: { className?: string }) {
//   return (
//     <div
//       aria-hidden
//       className={`pointer-events-none absolute rounded-full blur-[140px] opacity-20 ${className}`}
//     />
//   );
// }

// // ─── Upload Zone ───────────────────────────────────
// function UploadZone() {
//   const [state, setState] = useState<UploadState>("idle");
//   const [progress, setProgress] = useState(0);
//   const [fileName, setFileName] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);

//   const processFile = useCallback(async (file: File) => {
//     if (!file.type.startsWith("image/")) {
//       setState("error");
//       return;
//     }

//     setFileName(file.name);
//     setState("uploading");
//     setProgress(0);

//     for (let i = 0; i <= 60; i += 10) {
//       await new Promise((r) => setTimeout(r, 80));
//       setProgress(i);
//     }

//     setState("processing");

//     for (let i = 60; i <= 100; i += 5) {
//       await new Promise((r) => setTimeout(r, 60));
//       setProgress(i);
//     }

//     setState("done");
//   }, []);

//   const handleDrop = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setState("idle");
//     const file = e.dataTransfer.files[0];
//     if (file) processFile(file);
//   }, [processFile]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) processFile(file);
//   };

//   const reset = () => {
//     setState("idle");
//     setProgress(0);
//     setFileName("");
//   };

//   return (
//     <div className="relative w-full max-w-xl">
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={handleFileChange}
//       />

//       <AnimatePresence mode="wait">
//         {(state === "idle" || state === "dragging" || state === "error") && (
//           <motion.div
//             key="drop"
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             onDragOver={(e) => {
//               e.preventDefault();
//               setState("dragging");
//             }}
//             onDragLeave={() => setState("idle")}
//             onDrop={handleDrop}
//             onClick={() => inputRef.current?.click()}
//             className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed cursor-pointer transition-all py-16 px-8 text-center
//               ${
//                 state === "dragging"
//                   ? "border-violet-500/60 bg-violet-500/[0.07]"
//                   : state === "error"
//                   ? "border-red-500/40 bg-red-500/4"
//                   : "border-white/9 bg-white/2 hover:border-violet-500/40 hover:bg-violet-500/4"
//               }`}
//           >
//             <p className="text-sm font-semibold text-white mb-2">
//               {state === "dragging" ? "Drop it!" : "Drop your image here"}
//             </p>
//             <p className="text-xs text-zinc-600 mb-5">
//               PNG, JPG, WebP · Up to 25 MB
//             </p>

//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 inputRef.current?.click();
//               }}
//               className="rounded-full bg-violet-600 px-5 py-2 text-xs font-semibold text-white hover:bg-violet-500"
//             >
//               Upload image
//             </button>
//           </motion.div>
//         )}

//         {(state === "uploading" || state === "processing") && (
//           <motion.div
//             key="uploading"
//             className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-white/2 py-16 px-8 text-center gap-6"
//           >
//             <div className="text-violet-400 font-bold">{progress}%</div>

//             <div>
//               <p className="text-sm text-white">
//                 {state === "uploading" ? "Uploading…" : "Processing…"}
//               </p>
//               <p className="text-xs text-zinc-600">{fileName}</p>
//             </div>

//             <div className="w-full max-w-xs">
//               <Progress.Root className="h-1.5 w-full bg-white/[0.07] rounded-full">
//                 <Progress.Indicator
//                   className="h-full bg-violet-500 rounded-full"
//                   style={{ width: `${progress}%` }}
//                 />
//               </Progress.Root>
//             </div>
//           </motion.div>
//         )}

//         {state === "done" && (
//           <motion.div
//             key="done"
//             className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/4 py-12 px-8 text-center gap-5"
//           >
//             <p className="text-white font-semibold">Done 🎉</p>

//             <button
//               onClick={reset}
//               className="rounded-full border border-white/1 px-5 py-2 text-xs text-zinc-400 hover:text-white"
//             >
//               Upload another
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── Page ─────────────────────────────────────────
// export default function Page() {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-[#080808] text-white overflow-hidden">
      
//       {/* Glow background */}
//       <GlowOrb className="h-100 w-100 bg-violet-700 -top-20 -right-20" />
//       <GlowOrb className="h-75 w-75 bg-indigo-700 bottom-10 left-1/3" />

//       <div className="relative z-10 w-full flex justify-center px-6">
//         <UploadZone />
//       </div>
//     </div>
//   );
// }


