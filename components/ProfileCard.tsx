"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Mail, Calendar, User } from "lucide-react";

export default function ProfileCard({ user }: { user: any }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6
      bg-white text-black
      dark:bg-[#111111] dark:text-white"
    >
      <div className="w-full max-w-2xl rounded-3xl border p-8
        bg-white border-zinc-200
        dark:bg-[#111111] dark:border-zinc-800
        shadow-md"
      >
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="w-20 h-20 ring-2 ring-zinc-300 dark:ring-zinc-700">
            <AvatarImage src={user.image} />
            <AvatarFallback>
              {user.name?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">
              {user.name}
            </h1>

            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Mail className="w-4 h-4" />
              {user.email}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mb-6" />

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">

          {/* Email verified */}
          <div className="flex items-center justify-between sm:block">
            <span className="text-zinc-500 dark:text-zinc-400">
              Email Status
            </span>

            <div className="flex items-center gap-1 mt-1 text-green-600 dark:text-green-400">
              <BadgeCheck className="w-4 h-4" />
              {user.emailVerified ? "Verified" : "Not Verified"}
            </div>
          </div>

          {/* Joined */}
          <div className="flex items-center justify-between sm:block">
            <span className="text-zinc-500 dark:text-zinc-400">
              Joined
            </span>

            <div className="flex items-center gap-1 mt-1">
              <Calendar className="w-4 h-4 text-zinc-500" />
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>

          {/* User ID */}
          <div className="sm:col-span-2">
            <span className="text-zinc-500 dark:text-zinc-400">
              User ID
            </span>

            <div className="mt-1 flex items-center gap-2">
              <User className="w-4 h-4 text-zinc-500" />
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 break-all">
                {user.id}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <button className="flex-1 rounded-xl py-2 text-sm font-medium
            bg-black text-white hover:bg-zinc-800
            dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Edit Profile
          </button>

          <button className="flex-1 rounded-xl py-2 text-sm font-medium border
            border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-black
            dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-white dark:hover:border-zinc-500"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}