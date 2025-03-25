"use client"

const data = [
  { name: "Completed", value: 9, color: "var(--green-500)" },
  { name: "Active", value: 12, color: "var(--blue-500)" },
  { name: "At Risk", value: 3, color: "var(--red-500)" },
  { name: "Planned", value: 5, color: "var(--amber-500)" },
]

export function ProjectStatusChart() {
  return <div className="flex flex-col items-center justify-center h-[300px]"></div>
}

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export function ProjectStatusChart() {
  return (
    <div className="flex flex-col items-center justify-center h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
