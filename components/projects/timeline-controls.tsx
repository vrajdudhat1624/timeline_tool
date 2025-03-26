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

      {/* Desktop buttons */}
      <div className="hidden sm:flex flex-wrap gap-2">
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
                className={cn("relative", activeFilter === filter.id ? "" : "text-muted-foreground")}
                onClick={() => onFilterChange(filter.id)}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-foreground rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
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
  const [isOpen, setIsOpen] = useState(false)
