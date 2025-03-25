"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Design", efficiency: 92, productivity: 85 },
  { name: "Dev", efficiency: 88, productivity: 90 },
  { name: "Marketing", efficiency: 76, productivity: 82 },
  { name: "Research", efficiency: 94, productivity: 78 },
]

export function TeamPerformance() {
  return <div className="space-y-4"></div>
}
export function TeamPerformance() {
  return (
    <div className="space-y-4">
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
            <XAxis dataKey="name" className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
            <YAxis
              className="text-xs fill-muted-foreground"
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "var(--foreground)" }}
              formatter={(value) => [`${value}%`, null]}
            />
            <Bar dataKey="efficiency" name="Efficiency" fill="var(--cyan-500)" radius={[4, 4, 0, 0]} maxBarSize={32} />
            <Bar dataKey="productivity" name="Productivity" fill="var(--violet-500)" radius={[4, 4, 0, 0]} maxBarSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

import { motion } from "framer-motion"

export function TeamPerformance() {
  return (
    <div className="space-y-4">
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
            <XAxis dataKey="name" className="text-xs fill-muted-foreground" tickLine={false} axisLine={false} />
            <YAxis
              className="text-xs fill-muted-foreground"
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "var(--foreground)" }}
              formatter={(value) => [`${value}%`, null]}
            />
            <Bar dataKey="efficiency" name="Efficiency" fill="var(--cyan-500)" radius={[4, 4, 0, 0]} maxBarSize={32} />
            <Bar dataKey="productivity" name="Productivity" fill="var(--violet-500)" radius={[4, 4, 0, 0]} maxBarSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6">
        {[
          { label: "Efficiency", color: "var(--cyan-500)" },
          { label: "Productivity", color: "var(--violet-500)" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
