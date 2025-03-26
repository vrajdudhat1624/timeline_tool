"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Clock, CheckCircle, AlertCircle, Users, Calendar, BarChart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const startDate = formatDate(project.startDate)
  const endDate = formatDate(project.endDate)

  return (
    <motion.div
      layout
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        "border bg-card",
        isExpanded ? "shadow-lg" : "shadow-sm hover:shadow-md",
        project.status === "completed" ? "opacity-75" : "opacity-100",
        project.status === "active" ? "ring-2 ring-primary/20" : "",
      )}
      initial={false}
      animate={{
        y: isExpanded ? -5 : 0,
        scale: isExpanded ? 1.02 : 1,
        zIndex: isExpanded ? 10 : 0,
      }}
      whileHover={{ y: -3 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <motion.div className="p-5" layout="position">
        <div className="flex justify-between items-start mb-3">
          <div>
            <motion.h3 className="font-semibold text-lg" layout="position">
              {project.title}
            </motion.h3>
            <motion.p className="text-muted-foreground text-sm" layout="position">
              {project.client}
            </motion.p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <motion.div className="flex items-center text-sm text-muted-foreground mb-4" layout="position">
          <Calendar className="w-4 h-4 mr-1" />
          <span>
            {startDate} - {endDate}
          </span>
        </motion.div>

        <motion.p className="text-muted-foreground mb-4" layout="position">
          {project.description}
        </motion.p>

        <motion.div className="flex justify-between items-center mb-1" layout="position">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-muted-foreground">
            {completedMilestones} of {project.milestones.length}
          </span>
        </motion.div>

        <motion.div layout="position" className="mb-4">
          <Progress value={progress} className="h-2" />
        </motion.div>

        <motion.div layout="position">
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

              <motion.div
                className="mt-4 pt-4 border-t"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-2">
                  <BarChart className="w-4 h-4 mr-2 text-muted-foreground" />
                  <h4 className="font-medium">Project Analytics</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-background/80 p-3 rounded-lg">
                    <div className="text-2xl font-semibold text-primary">{Math.round(progress)}%</div>
                    <div className="text-xs text-muted-foreground">Completion</div>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg">
                    <div className="text-2xl font-semibold">{getDaysRemaining(project.endDate)}</div>
                    <div className="text-xs text-muted-foreground">Days Remaining</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

function getDaysRemaining(endDateStr: string): number {
  const today = new Date()
  const endDate = new Date(endDateStr)
  const diffTime = endDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > 0 ? diffDays : 0
}