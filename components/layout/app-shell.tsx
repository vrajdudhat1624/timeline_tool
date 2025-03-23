"use client"

import type React from "react"

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>
}
