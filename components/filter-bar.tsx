"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, AlertCircle, Filter } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "active", label: "Active", icon: Clock },
    { id: "completed", label: "Completed", icon: CheckCircle },
    { id: "at-risk", label: "At Risk", icon: AlertCircle },
    { id: "planned", label: "Planned", icon: Clock },
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          className={cn("relative", activeFilter === filter.id ? "" : "text-slate-600")}
          onClick={() => onFilterChange(filter.id)}
        >
          <filter.icon className="w-4 h-4 mr-2" />
          {filter.label}
          {activeFilter === filter.id && (
            <motion.div
              layoutId="activeFilterIndicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
        </Button>
      ))}
    </div>
  )
}