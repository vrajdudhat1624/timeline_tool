"use client"

import type React from "react"

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

import { useState, useEffect } from "react"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <div className="flex min-h-screen flex-col">{children}</div>
}

import { usePathname } from "next/navigation"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith("/auth")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  if (isAuthPage) {
    return <>{children}</>
  }

  return <div className="flex min-h-screen flex-col">{children}</div>
}
