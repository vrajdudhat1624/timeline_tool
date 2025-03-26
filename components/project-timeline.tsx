"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/project-card"
import { TimelineConnector } from "@/components/timeline-connector"
import { FilterBar } from "@/components/filter-bar"

export function ProjectTimeline() {
  return <div className="space-y-8">Project Timeline Component</div>
}

const projectsData = [
  {
    id: 1,
    title: "Market Research Analysis",
    client: "Acme Corporation",
    startDate: "2023-01-15",
    endDate: "2023-03-20",
    status: "completed",
    description: "Comprehensive market analysis for new product launch",
    consultants: ["Alex Morgan", "Sarah Chen"],
    milestones: [
      { title: "Initial Research", date: "2023-01-20", completed: true },
      { title: "Competitor Analysis", date: "2023-02-10", completed: true },
      { title: "Final Report", date: "2023-03-15", completed: true },
    ],
  },
]
export function ProjectTimeline() {
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true
    return project.status === filter
  })

  return (
    <div className="space-y-8">
      <FilterBar activeFilter={filter} onFilterChange={setFilter} />
    </div>
  )
}
return (
  <div className="space-y-8">
    <FilterBar activeFilter={filter} onFilterChange={setFilter} />

    <div className="relative">
      {/* Timeline center line */}
      <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-slate-200 md:left-1/2 md:transform md:-translate-x-px" />
    </div>
  </div>
)
