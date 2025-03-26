"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, LayoutPanelLeft, Users, BarChart, Settings, Menu, Clock } from "lucide-react"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: LayoutPanelLeft,
  },
  {
    name: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-bold">ChronoScope</span>
            </Link>
          </div>
          <nav className="mt-8 flex flex-col gap-3 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-base transition-all hover:text-foreground",
                  pathname === item.href ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center space-x-2">
        <Clock className="h-6 w-6 text-primary" />
        <span className="font-bold">ChronoScope</span>
      </Link>
    </div>
  )
}