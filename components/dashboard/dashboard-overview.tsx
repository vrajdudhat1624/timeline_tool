"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle, AlertTriangle, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

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
  {
    id: 3,
    title: "Supply Chain Optimization",
    client: "Global Logistics Ltd",
    status: "active",
    progress: 78,
    dueDate: "Jul 15, 2023",
    lastUpdate: "3 days ago",
  },
  {
    id: 4,
    title: "Market Research Analysis",
    client: "Acme Corporation",
    status: "completed",
    progress: 100,
    dueDate: "Mar 20, 2023",
    lastUpdate: "2 weeks ago",
  },
]

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
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.client}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>

          <div className="space-y-2 mt-3">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>

          <div className="flex justify-between mt-3 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              Due: {project.dueDate}
            </div>
            <div>Updated {project.lastUpdate}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30">
          <CheckCircle className="w-3 h-3 mr-1" />
          Completed
        </Badge>
      )
    case "active":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/30">
          <Clock className="w-3 h-3 mr-1" />
          Active
        </Badge>
      )
    case "at-risk":
      return (
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/30">
          <AlertTriangle className="w-3 h-3 mr-1" />
          At Risk
        </Badge>
      )
    default:
      return null
  }
}