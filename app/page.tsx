import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export default function Home() {
  // In a real app, we would check authentication here
  // For demo purposes, we'll show the dashboard directly
  // If not authenticated, redirect to login
  // const isAuthenticated = false
  // if (!isAuthenticated) {
  //   redirect("/auth/login")
  // }

  return <DashboardOverview />
}