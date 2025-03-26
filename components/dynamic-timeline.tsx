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
