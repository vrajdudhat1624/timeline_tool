"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import {
  BarChart3,
  Clock,
  Users,
  AlertTriangle,
  TrendingUp,
  Calendar,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

// Sample data for charts and stats
const projectsData = {
  total: 24,
  active: 12,
  teamMembers: 36,
  atRisk: 3,
  totalChange: "+2",
  activeChange: "+8.2%",
  teamChange: "+12.5%",
  riskChange: "-2.5%",
}

const monthlyData = [
  { name: "Jan", Completed: 3, Active: 5, Planned: 0 },
  { name: "Feb", Completed: 5, Active: 8, Planned: 0 },
  { name: "Mar", Completed: 7, Active: 8, Planned: 1 },
  { name: "Apr", Completed: 6, Active: 9, Planned: 0 },
  { name: "May", Completed: 9, Active: 10, Planned: 0 },
  { name: "Jun", Completed: 8, Active: 9, Planned: 1 },
]

const statusData = [
  { name: "Completed", value: 9, color: "#1E293B" },
  { name: "Active", value: 12, color: "#3B82F6" },
  { name: "At Risk", value: 3, color: "#EF4444" },
  { name: "Planned", value: 5, color: "#6B7280" },
]

const workloadData = [
  { name: "Development", value: 40, color: "#1E293B" },
  { name: "Design", value: 25, color: "#374151" },
  { name: "Marketing", value: 15, color: "#4B5563" },
  { name: "Research", value: 20, color: "#6B7280" },
]

const recentProjects = [
  {
    name: "Digital Transformation Strategy",
    company: "TechVision Inc",
    progress: 65,
    dueDate: "Jun 30, 2023",
    status: "Active",
    updatedTime: "2 hours ago",
  },
  {
    name: "Brand Repositioning",
    company: "Luxury Brands Co",
    progress: 42,
    dueDate: "Jul 15, 2023",
    status: "At Risk",
    updatedTime: "5 hours ago",
  },
]

const teamPerformanceData = [
  { name: "Design", value1: 92, value2: 85 },
  { name: "Dev", value1: 88, value2: 92 },
  { name: "Marketing", value1: 76, value2: 82 },
  { name: "Research", value1: 94, value2: 78 },
]

export function DashboardOverview() {
  const [timeframe, setTimeframe] = useState("Month")

  return (
    <div className="container py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Tabs defaultValue="Month" onValueChange={setTimeframe}>
          <TabsList>
            <TabsTrigger value="Week">Week</TabsTrigger>
            <TabsTrigger value="Month">Month</TabsTrigger>
            <TabsTrigger value="Year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectsData.total}</div>
            <p className="text-xs text-muted-foreground">{projectsData.totalChange} from last month</p>
            <div className="mt-4 h-1 w-full bg-[#1E293B]/20">
              <div className="h-1 w-1/2 bg-[#1E293B]" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectsData.active}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
              {projectsData.activeChange} from last month
            </p>
            <div className="mt-4 h-1 w-full bg-blue-500/20">
              <div className="h-1 w-3/4 bg-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectsData.teamMembers}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
              {projectsData.teamChange} from last month
            </p>
            <div className="mt-4 h-1 w-full bg-green-500/20">
              <div className="h-1 w-4/5 bg-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">At Risk Projects</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectsData.atRisk}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
              {projectsData.riskChange} from last month
            </p>
            <div className="mt-4 h-1 w-full bg-red-500/20">
              <div className="h-1 w-1/4 bg-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Projects Overview</CardTitle>
            <p className="text-sm text-muted-foreground">Project completion and timeline status</p>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="Completed" stackId="a" fill="#1E293B" />
                <Bar dataKey="Active" stackId="a" fill="#3B82F6" />
                <Bar dataKey="Planned" stackId="a" fill="#6B7280" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <p className="text-sm text-muted-foreground">Distribution by current status</p>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value})`}
                  labelLine={false}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Second Row of Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Team Workload</CardTitle>
            <p className="text-sm text-muted-foreground">Resource allocation across departments</p>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workloadData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={90}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {workloadData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              {workloadData.map((item) => (
                <div key={item.name} className="text-sm">
                  {item.name} ({item.value}%)
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>AI-Powered Insights</CardTitle>
            <p className="text-sm text-muted-foreground">Predictive analytics and recommendations</p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4 flex-wrap">
              <Button
                variant="default"
                size="sm"
                className="rounded-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Prediction
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <AlertCircle className="mr-2 h-4 w-4" />
                Risk
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                Optimization
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Users className="mr-2 h-4 w-4" />
                Suggestion
              </Button>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="text-blue-500 mr-2 h-5 w-5" />
                <h3 className="font-semibold text-lg">Project Success Prediction</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Digital Transformation Strategy has a 92% chance of on-time completion based on current progress and
                resource allocation.
              </p>
              <Link href="#" className="text-blue-500 text-sm flex items-center">
                View details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects and Team Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <p className="text-sm text-muted-foreground">Latest updates and activities</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </div>
                    <Badge
                      variant={project.status === "Active" ? "default" : "destructive"}
                      className={project.status === "Active" ? "bg-blue-500" : ""}
                    >
                      {project.status === "Active" ? (
                        <Clock className="mr-1 h-3 w-3" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3" />
                      )}
                      {project.status}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      Due: {project.dueDate}
                    </div>
                    <div>Updated {project.updatedTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <p className="text-sm text-muted-foreground">Productivity and efficiency metrics</p>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamPerformanceData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <RechartsTooltip />
                <Bar dataKey="value1" fill="#1E293B" />
                <Bar dataKey="value2" fill="#4B5563" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

