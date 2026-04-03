"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Search, Grid3X3, ShareIcon as Sell, Bell, User, Home, Car } from "lucide-react"

interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

interface BottomBarTabProps {
  variant?: "homefeed" | "property" | "cars"
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

const getTabsForVariant = (variant: "homefeed" | "property" | "cars"): TabItem[] => {
  const baseTabs: TabItem[] = [
    { id: "explore", label: "Explore", icon: <Search className="w-5 h-5" /> },
    { id: "for-you", label: "For you", icon: <Grid3X3 className="w-5 h-5" /> },
    { id: "sell", label: "Sell", icon: <Sell className="w-5 h-5" />, badge: 3 },
    { id: "updates", label: "Updates", icon: <Bell className="w-5 h-5" /> },
    { id: "me", label: "Me", icon: <User className="w-5 h-5" /> },
  ]

  switch (variant) {
    case "property":
      return [
        { id: "property", label: "Property", icon: <Home className="w-5 h-5" /> },
        { id: "browse", label: "Browse", icon: <Grid3X3 className="w-5 h-5" /> },
        { id: "sell", label: "Sell", icon: <Sell className="w-5 h-5" />, badge: 3 },
        { id: "more", label: "More", icon: <Grid3X3 className="w-5 h-5" /> },
        { id: "me", label: "Me", icon: <User className="w-5 h-5" /> },
      ]
    case "cars":
      return [
        { id: "cars", label: "Cars", icon: <Car className="w-5 h-5" /> },
        { id: "browse", label: "Browse", icon: <Grid3X3 className="w-5 h-5" /> },
        { id: "sell", label: "Sell", icon: <Sell className="w-5 h-5" />, badge: 3 },
        { id: "more", label: "More", icon: <Grid3X3 className="w-5 h-5" /> },
        { id: "me", label: "Me", icon: <User className="w-5 h-5" /> },
      ]
    default:
      return baseTabs
  }
}

export function BottomBarTab({ variant = "homefeed", activeTab, onTabChange, className }: BottomBarTabProps) {
  const tabs = getTabsForVariant(variant)

  return (
    <div className={cn("sticky bottom-0 left-0 right-0 bg-background-base border-t border-stroke-boundary", className)}>
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 transition-colors relative",
                "hover:text-content-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-halo-focused rounded-lg",
                isActive ? "text-content-interactive" : "text-content-subdued",
              )}
            >
              <div className="relative">
                {tab.icon}
                {tab.badge && (
                  <div className="absolute -top-2 -right-2 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {tab.badge}
                  </div>
                )}
              </div>
              <span className="text-tiny-reg font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-content-subdued rounded-full"></div>
      </div>
    </div>
  )
}
