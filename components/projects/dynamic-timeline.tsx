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
}

// Scroll-based animations
const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start start", "end end"],
})
