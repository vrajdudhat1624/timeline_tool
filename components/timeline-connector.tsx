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
