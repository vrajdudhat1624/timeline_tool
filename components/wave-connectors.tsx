"use client"

interface WaveConnectorProps {
  position: "left" | "right"
  status: string
}

export function WaveConnector({ position, status }: WaveConnectorProps) {
  return <div>Wave Connector</div>
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
    "absolute h-16 z-0",
    position === "left"
      ? "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2"
      : "left-[26px] md:left-1/2 md:transform md:-translate-x-1/2",
  )}
></div>
