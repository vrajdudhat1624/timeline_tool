"use client"

import { useState } from "react"

interface TimelineControlsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function TimelineControls({ activeFilter, onFilterChange }: TimelineControlsProps) {
  return <div>Timeline Controls Component</div>
}

import { CheckCircle, Clock, AlertCircle, Filter } from "lucide-react"

const filters = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "active", label: "Active", icon: Clock },
  { id: "completed", label: "Completed", icon: CheckCircle },
  { id: "at-risk", label: "At Risk", icon: AlertCircle },
  { id: "planned", label: "Planned", icon: Clock },
]

const activeFilterLabel = filters.find((f) => f.id === activeFilter)?.label || "All Projects"
