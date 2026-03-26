"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Progress from "@radix-ui/react-progress";
import { Button } from "@/components/ui/button";

type UploadState =
  | "idle"
  | "dragging"
  | "uploading"
  | "processing"
  | "done"
  | "error";

function UploadZone() {
  const [state, setState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setState("error");
      return;
    }

    setFileName(file.name);
    setState("uploading");
    setProgress(0);

    for (let i = 0; i <= 60; i += 10) {
      await new Promise((r) => setTimeout(r, 80));
      setProgress(i);
    }

    setState("processing");

    for (let i = 60; i <= 100; i += 5) {
      await new Promise((r) => setTimeout(r, 60));
      setProgress(i);
    }

    setState("done");
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setState("idle");
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const reset = () => {
    setState("idle");
    setProgress(0);
    setFileName("");
  };

  return (
    <div className="relative w-full max-w-xl">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <AnimatePresence mode="wait">
        {(state === "idle" || state === "dragging" || state === "error") && (
          <motion.div
            key="drop"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={(e) => {
              e.preventDefault();
              setState("dragging");
            }}
            onDragLeave={() => setState("idle")}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed cursor-pointer transition-all py-16 px-8 text-center
              ${
                state === "dragging"
                  ? "border-zinc-500 bg-zinc-800/40"
                  : state === "error"
                    ? "border-red-500/40 bg-red-500/10"
                    : "border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800"
              }`}
          >
            <p className="text-2xl font-semibold text-white mb-2">
              {state === "dragging" ? "Drop it!" : "Drop your image here"}
            </p>
            <p className="text-sm text-zinc-500 mb-5">
              PNG, JPG, WebP · Up to 25 MB
            </p>

            <Button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="rounded-full bg-zinc-200 text-black px-5 py-2 text-sm font-mono hover:bg-white transition"
            >
              Upload image
            </Button>
          </motion.div>
        )}

        {(state === "uploading" || state === "processing") && (
          <motion.div
            key="uploading"
            className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 py-16 px-8 text-center gap-6"
          >
            <div className="text-white font-bold">{progress}%</div>

            <div>
              <p className="text-sm text-white">
                {state === "uploading" ? "Uploading…" : "Processing…"}
              </p>
              <p className="text-xs text-zinc-500">{fileName}</p>
            </div>

            <div className="w-full max-w-xs">
              <Progress.Root className="h-1.5 w-full bg-zinc-800 rounded-full">
                <Progress.Indicator
                  className="h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </Progress.Root>
            </div>
          </motion.div>
        )}

        {state === "done" && (
          <motion.div
            key="done"
            className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 py-12 px-8 text-center gap-5"
          >
            <p className="text-white font-semibold">Done ✓</p>

            <button
              onClick={reset}
              className="rounded-full border border-zinc-700 px-5 py-2 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition"
            >
              Upload another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111] text-white px-6">
      <UploadZone />
    </div>
  );
}
