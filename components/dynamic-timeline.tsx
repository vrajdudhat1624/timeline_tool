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
