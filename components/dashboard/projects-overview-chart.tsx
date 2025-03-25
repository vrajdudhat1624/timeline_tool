"use client"

const data = [
  { name: "Jan", completed: 3, active: 4, planned: 2 },
  { name: "Feb", completed: 5, active: 6, planned: 3 },
  { name: "Mar", completed: 7, active: 5, planned: 4 },
  { name: "Apr", completed: 4, active: 8, planned: 3 },
  { name: "May", completed: 6, active: 7, planned: 5 },
  { name: "Jun", completed: 8, active: 6, planned: 4 },
]

export function ProjectsOverviewChart() {
  return <div className="h-[350px] w-full"></div>
}

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

export function ProjectsOverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="completed" fill="green" />
        <Bar dataKey="active" fill="blue" />
        <Bar dataKey="planned" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
  )
}
<XAxis dataKey="name" className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
<YAxis className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />

<Bar dataKey="completed" fill="var(--green-500)" radius={[4, 4, 0, 0]} />
<Bar dataKey="active" fill="var(--blue-500)" radius={[4, 4, 0, 0]} />
<Bar dataKey="planned" fill="var(--amber-500)" radius={[4, 4, 0, 0]} />

import { CartesianGrid, Tooltip } from "recharts"

<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />

<Tooltip
  contentStyle={{
    backgroundColor: "var(--background)",
    borderColor: "var(--border)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  }}
  itemStyle={{ color: "var(--foreground)" }}
  labelStyle={{ color: "var(--foreground)", fontWeight: "bold", marginBottom: "4px" }}
/>
