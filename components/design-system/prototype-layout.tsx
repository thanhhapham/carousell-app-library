"use client"

import type React from "react"
import { MobileStatusBar } from "./mobile-status-bar"
import { cn } from "@/lib/utils"

/**
 * PrototypeLayout
 *
 * A shared layout wrapper for prototype pages that provides:
 * - Mobile device frame (475px max width)
 * - Optional iOS-style status bar
 * - Scrollable main content area
 * - Fixed bottom bar slot
 *
 * Usage:
 * ```tsx
 * <PrototypeLayout
 *   topNav={<TopNav title="Search" />}
 *   bottomBar={<BottomBarTab activeTab="explore" onTabChange={...} />}
 * >
 *   {/* Your scrollable content *\/}
 * </PrototypeLayout>
 * ```
 */

interface PrototypeLayoutProps {
  children: React.ReactNode
  /** Content rendered above the scrollable area (e.g., TopNav, search bar) */
  topNav?: React.ReactNode
  /** Content fixed at the bottom (e.g., BottomBarTab, action buttons) */
  bottomBar?: React.ReactNode
  /** Overlays rendered inside the phone frame (e.g., BottomSheet, modals). Use absolute positioning. */
  overlay?: React.ReactNode
  /** Show simulated iOS status bar. Default: true */
  statusBar?: boolean
  /** Status bar time display. Default: "9:41" */
  statusBarTime?: string
  /** Additional classes for the outer container */
  className?: string
  /** Additional classes for the scrollable main area */
  mainClassName?: string
}

export function PrototypeLayout({
  children,
  topNav,
  bottomBar,
  overlay,
  statusBar = true,
  statusBarTime = "9:41",
  className,
  mainClassName,
}: PrototypeLayoutProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[475px] mx-auto bg-background-base h-screen flex flex-col relative overflow-hidden",
        className,
      )}
    >
      {/* Status Bar */}
      {statusBar && <MobileStatusBar time={statusBarTime} />}

      {/* Top Navigation */}
      {topNav && <div className="shrink-0">{topNav}</div>}

      {/* Scrollable Main Content */}
      <main className={cn("flex-1 overflow-y-auto", mainClassName)}>
        {children}
      </main>

      {/* Fixed Bottom Bar */}
      {bottomBar && (
        <div className="shrink-0 bg-background-base">
          {bottomBar}
        </div>
      )}

      {/* In-frame overlays (bottom sheets, modals) */}
      {overlay}
    </div>
  )
}
