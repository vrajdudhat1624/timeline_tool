"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TimelineFilters() {
  const [dateRange, setDateRange] = useState([0, 100])
  const [showCompleted, setShowCompleted] = useState(true)

  return (
    <div className="py-4 space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Date Range</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Jan 2023</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Dec 2023</span>
          </div>
        </div>
        <Slider
          defaultValue={[0, 100]}
          max={100}
          step={1}
          value={dateRange}
          onValueChange={setDateRange}
          className="mt-2"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Project Status</h3>
        <div className="space-y-2">
          {["Active", "Completed", "At Risk", "Planned"].map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox id={`status-${status.toLowerCase()}`} defaultChecked />
              <Label htmlFor={`status-${status.toLowerCase()}`}>{status}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Team Members</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select team member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Members</SelectItem>
            <SelectItem value="alex">Alex Morgan</SelectItem>
            <SelectItem value="sarah">Sarah Chen</SelectItem>
            <SelectItem value="james">James Wilson</SelectItem>
            <SelectItem value="maria">Maria Rodriguez</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Display Options</h3>
        <div className="flex items-center justify-between">
          <Label htmlFor="show-completed">Show completed projects</Label>
          <Switch id="show-completed" checked={showCompleted} onCheckedChange={setShowCompleted} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="group-by-client">Group by client</Label>
          <Switch id="group-by-client" />
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Apply Filters</Button>
      </div>
    </div>
  )
}