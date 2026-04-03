"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PrototypeEntry } from "@/lib/get-prototypes"

// Static sections (these don't change)
const staticSections = [
  {
    title: "FOUNDATION",
    items: [
      { name: "Colors", href: "/foundation/colors" },
      { name: "Typography", href: "/foundation/typography" },
      { name: "Iconography", href: "/foundation/iconography" },
    ],
  },
  {
    title: "COMPONENTS",
    items: [
      { name: "Badge", href: "/components/badge" },
      { name: "Banner", href: "/components/banner" },
      { name: "Bottom Sheet", href: "/components/bottom-sheet" },
      { name: "Button", href: "/components/button" },
      { name: "Card", href: "/components/card" },
      { name: "Dialog", href: "/components/dialog" },
      { name: "External Ads", href: "/components/external-ads" },
      { name: "Inline State", href: "/components/inline-state" },
      { name: "List Controls", href: "/components/list-controls" },
      { name: "Listing Card", href: "/components/listing-card" },
      { name: "Notification", href: "/components/notification" },
      { name: "Snackbar", href: "/components/snackbar" },
      { name: "Speech Bubble", href: "/components/speech-bubble" },
      { name: "Tabs", href: "/components/tabs" },
      { name: "Voucher", href: "/components/voucher" },
    ],
  },
  {
    title: "INPUTS",
    items: [
      { name: "Chip", href: "/components/input/chip" },
      { name: "Filter Chip", href: "/components/input/filter-chip" },
      { name: "List", href: "/components/input/list" },
      { name: "Phone Input", href: "/components/input/phone" },
      { name: "Picker", href: "/components/input/picker" },
      { name: "Rating", href: "/components/input/rating" },
      { name: "Selector", href: "/components/input/selector" },
      { name: "Slider", href: "/components/slider" },
      { name: "Stepper", href: "/components/input/stepper" },
      { name: "Text Area", href: "/components/input/text-area" },
      { name: "Text Input", href: "/components/input/text-input" },
    ],
  },
  {
    title: "CHAT",
    items: [
      { name: "Chat Cell", href: "/components/chat/chat-cell" },
      { name: "Chat Header", href: "/components/chat/chat-header" },
      { name: "Chat Input", href: "/components/chat/chat-input" },
      { name: "Image Cell", href: "/components/chat/image-cell" },
      { name: "Inbox Row", href: "/components/chat/inbox-row" },
      { name: "System Message", href: "/components/chat/system-message" },
    ],
  },
  {
    title: "NAVIGATION",
    items: [
      { name: "Bottom Bar / Promote", href: "/navigation/bottom-bar-promote" },
      { name: "Bottom Bar / Tab", href: "/navigation/bottom-bar-tab" },
      { name: "Bottom Bar / Task", href: "/navigation/bottom-bar-task" },
      { name: "Top Nav / Search", href: "/navigation/top-nav-search" },
      { name: "Top Nav / Title & Action", href: "/navigation/top-nav-title-action" },
    ],
  },
]

interface SidebarClientProps {
  prototypes: PrototypeEntry[]
}

export function SidebarClient({ prototypes }: SidebarClientProps) {
  const pathname = usePathname()
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionTitle: string) => {
    const newCollapsed = new Set(collapsedSections)
    if (newCollapsed.has(sectionTitle)) {
      newCollapsed.delete(sectionTitle)
    } else {
      newCollapsed.add(sectionTitle)
    }
    setCollapsedSections(newCollapsed)
  }

  // Build prototype section: flat list sorted by name
  const prototypeSection = {
    title: "PROTOTYPE",
    items: prototypes.map((p) => ({ name: p.name, href: p.href })),
  }

  const allSections = [prototypeSection, ...staticSections]

  return (
    <div className="w-64 bg-background-base border-r border-stroke-boundary h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        {/* Logo + title — links to directory */}
        <Link href="/" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-core-primary2 rounded-lg flex items-center justify-center">
            <span className="text-content-on-dark font-bold text-small-callout">Ds</span>
          </div>
          <span className="text-title-3 text-content-primary">Design System</span>
        </Link>

        <nav className="space-y-8">
          {allSections.map((section) => {
            const isCollapsed = collapsedSections.has(section.title)
            return (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left mb-3 hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-small-callout text-core-primary2 font-bold tracking-wider">
                    {section.title}
                  </h3>
                  {isCollapsed ? (
                    <ChevronDown className="h-4 w-4 text-core-primary2" />
                  ) : (
                    <ChevronUp className="h-4 w-4 text-core-primary2" />
                  )}
                </button>
                {!isCollapsed && (
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-3 py-2 text-middle-reg rounded-md transition-colors",
                            pathname === item.href
                              ? "bg-background-interactive-tint text-content-interactive-strong"
                              : "text-content-secondary hover:text-content-primary hover:bg-background-display",
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

// Backward-compatible export (used by layout.tsx directly)
export { SidebarClient as Sidebar }
