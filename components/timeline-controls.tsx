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

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const [isOpen, setIsOpen] = useState(false)

return (
  <div className="sm:hidden w-full">
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <div className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            {activeFilterLabel}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {filters.map((filter) => (
          <DropdownMenuItem
            key={filter.id}
            onClick={() => {
              onFilterChange(filter.id)
              setIsOpen(false)
            }}
          >
            <filter.icon className="w-4 h-4 mr-2" />
            {filter.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

<div className="hidden sm:flex flex-wrap gap-2">
  {filters.map((filter) => (
    <Button
      key={filter.id}
      variant={activeFilter === filter.id ? "default" : "outline"}
      size="sm"
      onClick={() => onFilterChange(filter.id)}
    >
      <filter.icon className="w-4 h-4 mr-2" />
      {filter.label}
    </Button>
  ))}
</div>

import { motion, AnimatePresence } from "framer-motion"

<AnimatePresence>
  {filters.map((filter) => (
    <motion.div
      key={filter.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant={activeFilter === filter.id ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange(filter.id)}
      >
        <filter.icon className="w-4 h-4 mr-2" />
        {filter.label}
      </Button>
    </motion.div>
  ))}
</AnimatePresence>
