"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Design", value: 25, color: "var(--purple-500)" },
  { name: "Development", value: 40, color: "var(--blue-500)" },
  { name: "Marketing", value: 15, color: "var(--green-500)" },
  { name: "Research", value: 20, color: "var(--amber-500)" },
]

export function WorkloadChart() {
  return (
    <div className="flex flex-col items-center justify-center h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            animationDuration={1000}
            animationBegin={200}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="var(--background)"
                strokeWidth={2}
                className="hover:opacity-80 transition-opacity"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "var(--foreground)" }}
            formatter={(value) => [`${value}%`, null]}
            labelFormatter={(label) => data.find((item) => item.value === label)?.name || ""}
          />
        </PieChart>
      </ResponsiveContainer>

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
              {entry.name} ({entry.value}%)
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}