"use client"

export function AiInsightsPanel() {
  return <div></div>
}

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, AlertTriangle, CheckCircle, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const insights = [
  {
    id: 1,
    type: "prediction",
    title: "Project Success Prediction",
    description:
      "Digital Transformation Strategy has a 92% chance of on-time completion based on current progress and resource allocation.",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: 2,
    type: "risk",
    title: "Risk Alert",
    description:
      "Brand Repositioning project is at risk due to resource constraints. Consider reallocating 2 team members from completed projects.",
    icon: AlertTriangle,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    id: 3,
    type: "optimization",
    title: "Resource Optimization",
    description:
      "Team workload is unbalanced. Marketing team is overallocated by 23% while Research team has 15% capacity available.",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    id: 4,
    type: "suggestion",
    title: "Process Improvement",
    description:
      "Based on historical data, implementing weekly stand-ups could improve project completion rates by 18%.",
    icon: Lightbulb,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
]
