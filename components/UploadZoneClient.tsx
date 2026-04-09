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
    setProgress(10);

    try{
      const formData = new FormData();
      formData.append("file",file);

      const res = await fetch("/api/upload",{
        method: "POST",
        body: formData
      })

      setProgress(60);
      setState("processing");

      const data = await res.json();

      setProgress(100);
      setState("done");

      console.log("Processed Image URL: ", data.url)
    }catch(error){
      console.log(error);
      setState("error")
    }
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
                  ? "border-zinc-400 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/40"
                  : state === "error"
                  ? "border-red-500/40 bg-red-500/10"
                  : "border-zinc-300 bg-zinc-100 hover:border-zinc-400 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
              }`}
          >
            <p className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
              {state === "dragging" ? "Drop it!" : "Drop your image here"}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
              PNG, JPG, WebP · Up to 25 MB
            </p>

            <Button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="rounded-full px-5 py-2 text-sm font-mono transition
                bg-black text-white hover:bg-zinc-800
                dark:bg-zinc-200 dark:text-black dark:hover:bg-white"
            >
              Upload image
            </Button>
          </motion.div>
        )}

        {(state === "uploading" || state === "processing") && (
          <motion.div
            key="uploading"
            className="flex flex-col items-center justify-center rounded-2xl border py-16 px-8 text-center gap-6
              bg-zinc-100 border-zinc-300
              dark:bg-zinc-900 dark:border-zinc-800"
          >
            <div className="text-zinc-900 dark:text-white font-bold">
              {progress}%
            </div>

            <div>
              <p className="text-sm text-zinc-900 dark:text-white">
                {state === "uploading" ? "Uploading…" : "Processing…"}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {fileName}
              </p>
            </div>

            <div className="w-full max-w-xs">
              <Progress.Root className="h-1.5 w-full bg-zinc-300 dark:bg-zinc-800 rounded-full">
                <Progress.Indicator
                  className="h-full bg-black dark:bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </Progress.Root>
            </div>
          </motion.div>
        )}

        {state === "done" && (
          <motion.div
            key="done"
            className="flex flex-col items-center justify-center rounded-2xl border py-12 px-8 text-center gap-5
              bg-zinc-100 border-zinc-300
              dark:bg-zinc-900 dark:border-zinc-700"
          >
            <p className="text-zinc-900 dark:text-white font-semibold">
              Done ✓
            </p>

            <button
              onClick={reset}
              className="rounded-full border px-5 py-2 text-xs transition
                border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-400
                dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-white dark:hover:border-zinc-500"
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
    <div className="flex items-center justify-center min-h-screen px-6
      bg-white text-black
      dark:bg-[#111111] dark:text-white"
    >
      <UploadZone />
    </div>
  );
}