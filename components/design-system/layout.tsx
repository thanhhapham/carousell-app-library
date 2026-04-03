"use client"

import type React from "react"
import { usePathname } from "next/navigation"

interface DesignSystemLayoutProps {
  children: React.ReactNode
  /** Pass a server-rendered sidebar (e.g. <SidebarServer />) from a server component parent */
  sidebar?: React.ReactNode
}

export function DesignSystemLayout({ children, sidebar }: DesignSystemLayoutProps) {
  const pathname = usePathname()
  const hideSidebar = pathname.includes("/gamification-streaks")

  if (hideSidebar) {
    return <main className="min-h-screen bg-background-base">{children}</main>
  }

  return (
    <div className="flex min-h-screen bg-background-base">
      {sidebar && <div className="hidden md:block">{sidebar}</div>}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
