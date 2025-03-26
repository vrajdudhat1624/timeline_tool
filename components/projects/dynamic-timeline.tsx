"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { Filter, Search, SlidersHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/projects/project-card"
import { WaveConnector } from "@/components/projects/wave-connector"
import { TimelineControls } from "@/components/projects/timeline-controls"
import { projectsData } from "@/lib/data"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { TimelineFilters } from "@/components/projects/timeline-filters"

export function DynamicTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleProjects, setVisibleProjects] = useState(projectsData)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  })

  // Filter and search projects
  useEffect(() => {
    let filtered = projectsData

    // Apply status filter
    if (filter !== "all") {
      filtered = filtered.filter((project) => project.status === filter)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.client.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term),
      )
    }

    // Animate the transition of filtered projects
    setVisibleProjects(filtered)
  }, [filter, searchTerm])

  // Handle card expansion
  const handleCardToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64 md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <TimelineControls activeFilter={filter} onFilterChange={setFilter} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:flex hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Projects</SheetTitle>
                <SheetDescription>Apply advanced filters to your project timeline</SheetDescription>
              </SheetHeader>
              <TimelineFilters />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div ref={timelineRef} className="relative min-h-[60vh] pt-4">
        {/* Timeline center line with scroll progress indicator */}
        <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-muted md:left-1/2 md:transform md:-translate-x-px">
          <motion.div
            className="absolute top-0 w-full bg-primary rounded-full"
            style={{
              height: scrollYProgress,
              scaleY: scrollYProgress,
            }}
          />
        </div>

        <AnimatePresence>
          {visibleProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground max-w-md">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setFilter("all")
                  setSearchTerm("")
                }}
              >
                Reset filters
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  layout
                  className="relative"
                >
                  {/* Timeline date marker */}
                  <motion.div
                    className="absolute left-0 w-[54px] h-[54px] rounded-full bg-background shadow-md flex items-center justify-center z-10 md:left-1/2 md:transform md:-translate-x-1/2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        project.status === "completed"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : project.status === "active"
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : project.status === "at-risk"
                              ? "bg-amber-100 dark:bg-amber-900/30"
                              : "bg-muted",
                      )}
                    >
                      {getStatusIcon(project.status)}
                    </motion.div>
                  </motion.div>

                  {/* Project card with alternating layout on desktop */}
                  <div
                    className={cn(
                      "ml-[70px] md:w-[calc(50%-40px)]",
                      index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0",
                    )}
                  >
                    <ProjectCard
                      project={project}
                      isExpanded={expandedId === project.id}
                      onToggle={() => handleCardToggle(project.id)}
                    />
                  </div>

                  {/* Wave connector (only between items) */}
                  {index < visibleProjects.length - 1 && (
                    <WaveConnector position={index % 2 === 0 ? "right" : "left"} status={project.status} />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    case "active":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    case "at-risk":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
  }
}