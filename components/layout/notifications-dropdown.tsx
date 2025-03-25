"use client"

import * as React from "react"

export function NotificationsDropdown() {
  const [open, setOpen] = React.useState(false)

  return <div></div>
}

import { Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const notifications = [
  {
    id: 1,
    title: "Project deadline approaching",
    description: "Digital Transformation Strategy due in 3 days",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "New team member added",
    description: "Sarah Chen joined Supply Chain Optimization",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    title: "Milestone completed",
    description: "Brand Strategy milestone marked as complete",
    time: "2 days ago",
    unread: false,
  },
]
