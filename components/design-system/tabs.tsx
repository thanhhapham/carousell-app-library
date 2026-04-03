"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  value: string
  onValueChange: (value: string) => void
  variant?: "normal" | "scrollable"
  className?: string
  children: React.ReactNode
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
}

interface TabsTriggerProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
  variant: "normal" | "scrollable"
} | null>(null)

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onValueChange, variant = "normal", className, children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ value, onValueChange, variant }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className, children, ...props }, ref) => {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsList must be used within Tabs")

  const { variant } = context

  return (
    <div
      ref={ref}
      className={cn(
        "flex border-b border-stroke-boundary",
        variant === "scrollable" && "overflow-x-auto scrollbar-hide",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsTrigger must be used within Tabs")

    const { value: selectedValue, onValueChange } = context
    const isSelected = selectedValue === value

    return (
      <button
        ref={ref}
        className={cn(
          "relative px-4 py-3 text-middle-callout transition-all duration-200",
          "hover:text-content-interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-halo-focused",
          "disabled:pointer-events-none disabled:text-content-subdued",
          "whitespace-nowrap min-w-0 flex-shrink-0",
          isSelected
            ? "text-content-interactive border-b-2 border-content-interactive font-bold"
            : "text-content-secondary border-b-2 border-transparent hover:border-stroke-boundary font-normal",
          className,
        )}
        disabled={disabled}
        onClick={() => onValueChange(value)}
        {...props}
      >
        {children}
        {isSelected && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-content-interactive rounded-t-full" />}
      </button>
    )
  },
)
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error("TabsContent must be used within Tabs")

    const { value: selectedValue } = context

    if (selectedValue !== value) return null

    return (
      <div ref={ref} className={cn("mt-4", className)} {...props}>
        {children}
      </div>
    )
  },
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
