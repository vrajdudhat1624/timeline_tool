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
