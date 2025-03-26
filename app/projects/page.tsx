import { DynamicTimeline } from "@/components/projects/dynamic-timeline"

export default function ProjectsPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Project Timeline</h1>
      <DynamicTimeline />
    </div>
  )
}