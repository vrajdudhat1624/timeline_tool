"use client"

import { useState } from "react"

export function DynamicTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  return <div className="space-y-6"></div>
}

import { useEffect, useState } from "react"
import { projectsData } from "@/lib/data"

const [visibleProjects, setVisibleProjects] = useState(projectsData)

useEffect(() => {
  let filtered = projectsData

  if (filter !== "all") {
    filtered = filtered.filter((project) => project.status === filter)
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase()
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(term) ||
        project.client.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term),
    )
  }

  setVisibleProjects(filtered)
}, [filter, searchTerm])

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const timelineRef = useRef<HTMLDivElement>(null)

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start start", "end end"],
})

<motion.div
  className="absolute top-0 w-full bg-primary rounded-full"
  style={{
    height: scrollYProgress,
    scaleY: scrollYProgress,
  }}
/>

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TimelineControls } from "@/components/timeline-controls"

<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
  <div className="relative w-full sm:w-64 md:w-80">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
    <Input
      placeholder="Search projects..."
      className="pl-9 bg-white"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <TimelineControls activeFilter={filter} onFilterChange={setFilter} />
</div>

import { motion, AnimatePresence } from "framer-motion"

<AnimatePresence>
  {visibleProjects.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      layout
      className="relative"
    >
      <ProjectCard
        project={project}
        isExpanded={expandedId === project.id}
        onToggle={() => handleCardToggle(project.id)}
      />
    </motion.div>
  ))}
</AnimatePresence>

{visibleProjects.length === 0 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col items-center justify-center py-20 text-center"
  >
    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
      <Filter className="w-8 h-8 text-slate-400" />
    </div>
    <h3 className="text-xl font-medium text-slate-700 mb-2">No projects found</h3>
    <p className="text-slate-500 max-w-md">
      Try adjusting your filters or search terms to find what you're looking for.
    </p>
    <Button variant="outline" className="mt-6" onClick={() => { setFilter("all"); setSearchTerm("") }}>
      Reset filters
    </Button>
  </motion.div>
)}
