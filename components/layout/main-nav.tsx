"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">ChronoScope</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/" className={pathname === "/" ? "text-primary" : "text-muted"}>
          Home
        </Link>
      </nav>
    </div>
  )
}

import { Home, LayoutPanelLeft, Users, BarChart, Settings } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: LayoutPanelLeft },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">ChronoScope</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={pathname === item.href ? "text-primary" : "text-muted"}>
            <item.icon className="h-4 w-4 mr-2" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">ChronoScope</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center transition-colors hover:text-foreground/80 px-2 py-1.5 rounded-md",
              pathname === item.href ? "text-foreground bg-muted" : "text-foreground/60"
            )}
          >
            <item.icon className="h-4 w-4 mr-2" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

import { motion } from "framer-motion"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">ChronoScope</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center transition-colors hover:text-foreground/80 relative px-2 py-1.5 rounded-md",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            <item.icon className="h-4 w-4 mr-2" />
            {item.name}
            {pathname === item.href && (
              <motion.div
                className="absolute inset-0 rounded-md bg-muted z-[-1]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}
