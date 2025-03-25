"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function DashboardOverview() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month")

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          {["week", "month", "year"].map((timeframe) => (
            <motion.button
              key={timeframe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                selectedTimeframe === timeframe
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Clock, Users, AlertCircle } from "lucide-react"

const stats = [
  { title: "Total Projects", value: 24, change: "+2 from last month", icon: BarChart3, progress: 65, color: "bg-primary" },
  { title: "Active Projects", value: 12, change: "+8.2%", icon: Clock, progress: 50, color: "bg-blue-500" },
  { title: "Team Members", value: 36, change: "+12.5%", icon: Users, progress: 75, color: "bg-green-500" },
  { title: "At Risk Projects", value: 3, change: "-2.5%", icon: AlertCircle, progress: 12.5, color: "bg-red-500" }
]

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ title, value, change, icon: Icon, progress, color }, index) => (
        <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-xs text-muted-foreground">{change}</p>
              <div className="mt-4 h-1 w-full rounded-full bg-muted">
                <div className={`h-1 rounded-full ${color}`} style={{ width: `${progress}%` }} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

import { ProjectsOverviewChart } from "@/components/dashboard/projects-overview-chart"
import { ProjectStatusChart } from "@/components/dashboard/project-status-chart"
import { WorkloadChart } from "@/components/dashboard/workload-chart"

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <motion.div className="col-span-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Projects Overview</CardTitle>
            <CardDescription>Project completion and timeline status</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ProjectsOverviewChart />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Distribution by current status</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectStatusChart />
          </CardContent>
        </Card>
      </motion.div>
    </div>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <motion.div className="col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Team Workload</CardTitle>
            <CardDescription>Resource allocation across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <WorkloadChart />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

