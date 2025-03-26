"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Milestone {
  title: string
  date: string
  completed: boolean
}

interface Project {
  id: number
  title: string
  client: string
  startDate: string
  endDate: string
  status: string
  description: string
  consultants: string[]
  milestones: Milestone[]
}

interface ProjectCardProps {
  project: Project
  isExpanded: boolean
  onToggle: () => void
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const completedMilestones = project.milestones.filter((m) => m.completed).length
  const progress = (completedMilestones / project.milestones.length) * 100

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const startDate = formatDate(project.startDate)
  const endDate = formatDate(project.endDate)

  return (
    <motion.div className={cn("rounded-xl overflow-hidden transition-all duration-300", "border bg-card")}>
      <motion.div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <motion.h3 className="font-semibold text-lg">{project.title}</motion.h3>
            <motion.p className="text-muted-foreground text-sm">{project.client}</motion.p>
          </div>
        </div>
        <motion.div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{startDate} - {endDate}</span>
        </motion.div>
        <motion.p className="text-muted-foreground mb-4">{project.description}</motion.p>
        <motion.div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-muted-foreground">{completedMilestones} of {project.milestones.length}</span>
        </motion.div>
        <motion.div className="mb-4">
          <Progress value={progress} className="h-2" />
        </motion.div>
        <motion.div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-center text-muted-foreground hover:text-foreground mt-2"
            onClick={onToggle}
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show details</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
