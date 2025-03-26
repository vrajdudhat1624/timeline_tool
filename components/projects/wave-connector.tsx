"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WaveConnectorProps {
  position: "left" | "right"
  status: string
}

export function WaveConnector({ position, status }: WaveConnectorProps) {
  // Status-based styling
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-200 dark:text-green-900/50"
      case "active":
        return "text-primary/40"
      case "at-risk":
        return "text-amber-200 dark:text-amber-900/50"
      case "planned":
        return "text-muted"
      default:
        return "text-muted"
    }
  }

  const statusColor = getStatusColor(status)

  return (
    <div
      className={cn(
        "absolute h-16 z-0",
        position === "left"
          ? "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2"
          : "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2",
      )}
    >
      <svg
        width="54"
        height="64"
        viewBox="0 0 54 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("absolute top-[54px]", position === "left" ? "-left-[26px]" : "-left-[26px]")}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M27 0C27 0 27 16 27 32C27 48 27 64 27 64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={statusColor}
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          d="M27 16C22 16 22 24 27 24C32 24 32 32 27 32C22 32 22 40 27 40C32 40 32 48 27 48"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={statusColor}
        />
      </svg>
    </div>
  )
}