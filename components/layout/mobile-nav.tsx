"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return <div className="md:hidden"></div>
}
