"use client";

import Link from "next/link";
import { ShieldX } from "lucide-react";
import { ThemeProvider } from "next-themes";

export default function Unauthorized() {
  return (
    <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center
      bg-white text-black
      dark:bg-[#111111] dark:text-white"
    >
      {/* Icon */}
      <div className="mb-6">
        <ShieldX className="w-16 h-16 text-red-500" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight mb-2">
        401
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        You are not authorized to access this page.
      </p>

      {/* Action buttons */}
      <div className="flex gap-3">
        <Link
          href="/signin"
          className="px-5 py-2 rounded-full text-sm font-medium
            bg-black text-white hover:bg-zinc-800
            dark:bg-zinc-200 dark:text-black dark:hover:bg-white"
        >
          Go to Login
        </Link>

        <Link
          href="/"
          className="px-5 py-2 rounded-full text-sm font-medium border
            border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-black
            dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-white dark:hover:border-zinc-500"
        >
          Back Home
        </Link>
      </div>
    </div>
        </ThemeProvider>
  );
}