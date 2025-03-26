"use client"

interface TimelineConnectorProps {
  position: "left" | "right"
  status: string
}

export function TimelineConnector({ position, status }: TimelineConnectorProps) {
  return <div className="absolute h-12 z-0"></div>
}
