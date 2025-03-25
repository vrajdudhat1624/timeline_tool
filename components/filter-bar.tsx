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

import { cn } from "@/lib/utils"

<Button
  variant={activeFilter === filter.id ? "default" : "outline"}
  size="sm"
  className={cn("relative", activeFilter === filter.id ? "" : "text-slate-600")}
>
  <filter.icon className="w-4 h-4 mr-2" />
  {filter.label}
</Button>

import { motion } from "framer-motion"

{activeFilter === filter.id && (
  <motion.div
    layoutId="activeFilterIndicator"
    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
    transition={{ type: "spring", duration: 0.5 }}
  />
)}
