"use client"

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return <div className="flex gap-2"></div>
}

import { CheckCircle, Clock, AlertCircle, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "active", label: "Active", icon: Clock },
  { id: "completed", label: "Completed", icon: CheckCircle },
  { id: "at-risk", label: "At Risk", icon: AlertCircle },
  { id: "planned", label: "Planned", icon: Clock },
]

{filters.map((filter) => (
  <Button key={filter.id} onClick={() => onFilterChange(filter.id)}>
    {filter.label}
  </Button>
))}
