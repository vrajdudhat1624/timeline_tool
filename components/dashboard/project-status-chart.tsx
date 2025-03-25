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

<Pie
  data={data}
  cx="50%"
  cy="50%"
  innerRadius={60}
  outerRadius={80}
  paddingAngle={2}
  dataKey="value"
  animationDuration={1000}
  animationBegin={200}
/>

import { Tooltip } from "recharts"

<Tooltip
  contentStyle={{
    backgroundColor: "var(--background)",
    borderColor: "var(--border)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  }}
  itemStyle={{ color: "var(--foreground)" }}
  formatter={(value) => [`${value} Projects`, null]}
  labelFormatter={(label) => data.find((item) => item.value === label)?.name || ""}
/>

import { motion } from "framer-motion"

<div className="flex flex-wrap justify-center gap-3 mt-4">
  {data.map((entry, index) => (
    <motion.div
      key={`legend-${index}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center"
    >
      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
      <span className="text-sm text-muted-foreground">
        {entry.name} ({entry.value})
      </span>
    </motion.div>
  ))}
</div>
