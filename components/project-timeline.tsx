"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/project-card"
import { TimelineConnector } from "@/components/timeline-connector"
import { FilterBar } from "@/components/filter-bar"

// Sample project data
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
  {
    id: 2,
    title: "Digital Transformation Strategy",
    client: "TechVision Inc",
    startDate: "2023-02-10",
    endDate: "2023-06-30",
    status: "active",
    description: "Enterprise-wide digital transformation initiative",
    consultants: ["James Wilson", "Maria Rodriguez", "David Kim"],
    milestones: [
      { title: "Discovery Phase", date: "2023-02-20", completed: true },
      { title: "Strategy Development", date: "2023-04-15", completed: true },
      { title: "Implementation Plan", date: "2023-05-30", completed: false },
      { title: "Final Handoff", date: "2023-06-25", completed: false },
    ],
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    client: "Global Logistics Ltd",
    startDate: "2023-03-05",
    endDate: "2023-07-15",
    status: "active",
    description: "End-to-end supply chain efficiency improvement",
    consultants: ["Robert Chen", "Emma Davis"],
    milestones: [
      { title: "Current State Assessment", date: "2023-03-15", completed: true },
      { title: "Process Redesign", date: "2023-05-01", completed: true },
      { title: "Pilot Implementation", date: "2023-06-10", completed: false },
      { title: "Performance Measurement", date: "2023-07-10", completed: false },
    ],
  },
  {
    id: 4,
    title: "Brand Repositioning",
    client: "Luxury Brands Co",
    startDate: "2023-04-10",
    endDate: "2023-08-20",
    status: "at-risk",
    description: "Strategic brand repositioning for luxury market segment",
    consultants: ["Sophia Martinez", "Thomas Johnson"],
    milestones: [
      { title: "Market Research", date: "2023-04-25", completed: true },
      { title: "Brand Strategy", date: "2023-06-01", completed: false },
      { title: "Creative Development", date: "2023-07-15", completed: false },
      { title: "Launch Plan", date: "2023-08-10", completed: false },
    ],
  },
  {
    id: 5,
    title: "Financial Systems Upgrade",
    client: "First National Bank",
    startDate: "2023-05-15",
    endDate: "2023-11-30",
    status: "planned",
    description: "Modernization of core financial systems",
    consultants: ["Michael Chang", "Jennifer Smith", "Kevin Brown"],
    milestones: [
      { title: "Requirements Gathering", date: "2023-06-15", completed: false },
      { title: "Vendor Selection", date: "2023-07-30", completed: false },
      { title: "System Implementation", date: "2023-10-15", completed: false },
      { title: "User Training", date: "2023-11-15", completed: false },
    ],
  },
]

export function ProjectTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true
    return project.status === filter
  })

  return (
    <div className="space-y-8">
      <FilterBar activeFilter={filter} onFilterChange={setFilter} />

      <div className="relative">
        {/* Timeline center line */}
        <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-slate-200 md:left-1/2 md:transform md:-translate-x-px" />

        {filteredProjects.map((project, index) => (
          <div key={project.id} className="mb-12 relative">
            {/* Timeline date marker */}
            <div className="absolute left-0 w-[54px] h-[54px] rounded-full bg-white shadow-md flex items-center justify-center z-10 md:left-1/2 md:transform md:-translate-x-1/2">
              <Calendar className="w-6 h-6 text-slate-600" />
            </div>

            {/* Project card with alternating layout on desktop */}
            <div
              className={cn(
                "ml-[70px] md:w-[calc(50%-40px)]",
                index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0",
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  isExpanded={expandedId === project.id}
                  onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                />
              </motion.div>
            </div>

            {/* Wave connector (only between items) */}
            {index < filteredProjects.length - 1 && (
              <TimelineConnector position={index % 2 === 0 ? "right" : "left"} status={project.status} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}