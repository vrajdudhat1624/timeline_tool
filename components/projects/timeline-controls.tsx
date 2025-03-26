"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Clock, AlertCircle, Filter, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TimelineControlsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function TimelineControls({ activeFilter, onFilterChange }: TimelineControlsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "active", label: "Active", icon: Clock },
    { id: "completed", label: "Completed", icon: CheckCircle },
    { id: "at-risk", label: "At Risk", icon: AlertCircle },
    { id: "planned", label: "Planned", icon: Clock },
  ]

  const activeFilterLabel = filters.find((f) => f.id === activeFilter)?.label || "All Projects"

  return (
    <>
      {/* Mobile dropdown */}
      <div className="sm:hidden w-full">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                {activeFilterLabel}
              </div>
              <ChevronDown className="w-4 h-4 ml-2" />
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
                className={cn("flex items-center", activeFilter === filter.id ? "bg-muted" : "")}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
