"use client"

interface WaveConnectorProps {
  position: "left" | "right"
  status: string
}

export function WaveConnector({ position, status }: WaveConnectorProps) {
  return <div>Wave Connector</div>
}
