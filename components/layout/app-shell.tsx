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

import { MainNav } from "@/components/layout/main-nav"
import { UserNav } from "@/components/layout/user-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { NotificationsDropdown } from "@/components/layout/notifications-dropdown"

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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center space-x-4">
            <NotificationsDropdown />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
