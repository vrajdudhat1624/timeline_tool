"use client"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return <div></div>
}

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="ghost" size="icon" className="relative">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end"></DropdownMenuContent>
    </DropdownMenu>
  )
}

<DropdownMenuContent align="end">
  <DropdownMenuItem onClick={() => setTheme("light")}>
    <Sun className="mr-2 h-4 w-4" />
    <span>Light</span>
  </DropdownMenuItem>
  <DropdownMenuItem onClick={() => setTheme("dark")}>
    <Moon className="mr-2 h-4 w-4" />
    <span>Dark</span>
  </DropdownMenuItem>
  <DropdownMenuItem onClick={() => setTheme("system")}>
    <span>System</span>
  </DropdownMenuItem>
</DropdownMenuContent>

import { motion } from "framer-motion"

{theme === "light" && (
  <motion.div
    layoutId="theme-indicator"
    className="ml-auto h-1 w-1 rounded-full bg-primary"
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  />
)}

{theme === "dark" && (
  <motion.div
    layoutId="theme-indicator"
    className="ml-auto h-1 w-1 rounded-full bg-primary"
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  />
)}

{theme === "system" && (
  <motion.div
    layoutId="theme-indicator"
    className="ml-auto h-1 w-1 rounded-full bg-primary"
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  />
)}
