"use client"

const recentProjects = [
  {
    id: 1,
    title: "Digital Transformation Strategy",
    client: "TechVision Inc",
    status: "active",
    progress: 65,
    dueDate: "Jun 30, 2023",
    lastUpdate: "2 hours ago",
  },
  {
    id: 2,
    title: "Brand Repositioning",
    client: "Luxury Brands Co",
    status: "at-risk",
    progress: 42,
    dueDate: "Aug 20, 2023",
    lastUpdate: "Yesterday",
  },
]

export function RecentProjects() {
  return <div className="space-y-4"></div>
}

import { motion } from "framer-motion"

export function RecentProjects() {
  return (
    <div className="space-y-4">
      {recentProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
        >
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.client}</p>
        </motion.div>
      ))}
    </div>
  )
}
