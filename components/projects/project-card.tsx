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
function StatusBadge({ status }: { status: string }) {
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    hover: { scale: 1.05 },
  }

  switch (status) {
    case "completed":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        </motion.div>
      )
    case "active":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/30">
            <Clock className="w-3 h-3 mr-1" />
            Active
          </Badge>
        </motion.div>
      )
    case "at-risk":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/30">
            <AlertCircle className="w-3 h-3 mr-1" />
            At Risk
          </Badge>
        </motion.div>
      )
    case "planned":
      return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" whileHover="hover">
          <Badge className="bg-muted text-muted-foreground hover:bg-muted">
            <Clock className="w-3 h-3 mr-1" />
            Planned
          </Badge>
        </motion.div>
      )
    default:
      return null
  }
}
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="overflow-hidden border-t"
    >
      <div className="p-5 bg-muted/50">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Users className="w-4 h-4 mr-2 text-muted-foreground" />
            <h4 className="font-medium">Consultants</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.consultants.map((consultant, i) => (
              <Badge key={i} variant="outline" className="bg-background/80">
                {consultant}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Milestones</h4>
          <div className="space-y-3">
            {project.milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {milestone.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                ) : (
                  <Clock className="w-5 h-5 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-medium">{milestone.title}</div>
                  <div className="text-sm text-muted-foreground">{formatDate(milestone.date)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
