"use client"

interface TimelineConnectorProps {
  position: "left" | "right"
  status: string
}

export function TimelineConnector({ position, status }: TimelineConnectorProps) {
  return <div className="absolute h-12 z-0"></div>
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-200"
    case "active":
      return "text-primary/40"
    case "at-risk":
      return "text-amber-200"
    case "planned":
      return "text-slate-200"
    default:
      return "text-slate-200"
  }
}

const statusColor = getStatusColor(status)

import { cn } from "@/lib/utils"

<div
  className={cn(
    "absolute h-12 z-0",
    position === "left"
      ? "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2"
      : "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2",
  )}
>
</div>

import { motion } from "framer-motion"

<svg
  width="54"
  height="48"
  viewBox="0 0 54 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={cn("absolute top-[54px]", position === "left" ? "-left-[26px]" : "-left-[26px]")}
>
  <motion.path
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    d="M27 0C27 0 27 24 27 48"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={statusColor}
  />
</svg>
