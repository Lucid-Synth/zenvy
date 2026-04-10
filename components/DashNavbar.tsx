// components/DashNavbar.tsx

"use client";

import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";

export default function DashNavbar({ session }: { session: any }) {
  const { setTheme } = useTheme();

  return (
    <nav className="p-3 flex items-center justify-between bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <SidebarTrigger />

      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        {/* Theme toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] dark:scale-0 dark:-rotate-90 transition-all" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100 dark:rotate-0 transition-all" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {session?.user?.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                {session?.user?.email}
              </DropdownMenuLabel>

              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link href='/dashboard/profile'>Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem variant="destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}