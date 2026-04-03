import type React from "react"
// Re-export bottom bar components for backward compatibility
export { BottomBarTab } from "./bottom-bar/tab"
export { BottomBarTask } from "./bottom-bar/task"
export { BottomBarPromote } from "./bottom-bar/promote"

// Add a generic BottomBar component export
export function BottomBar({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background-base border-t border-stroke-boundary ${className}`}
    >
      {children}
    </div>
  )
}
