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
