"use client"

import type React from "react"
import { forwardRef } from "react"
import { Plus, Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { NotificationBadge } from "../badge"

export interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  selected?: boolean
  disabled?: boolean
  size?: "small" | "medium"
  variant?: "single" | "multi" | "badge" | "default" | "filter"
  badgeCount?: number
  filterState?: "default" | "selected" | "multiple"
  appliedFiltersCount?: number
}

const getSizeStyles = (size: "small" | "medium" = "medium") => {
  switch (size) {
    case "small":
      return "px-3 py-1 text-xs"
    case "medium":
    default:
      return "px-4 py-2 text-sm"
  }
}

const getVariantStyles = (
  variant: "single" | "multi" | "badge" | "default" | "filter" = "default",
  selected = false,
  filterState?: "default" | "selected" | "multiple",
) => {
  if (variant === "filter") {
    switch (filterState) {
      case "selected":
      case "multiple":
        return "bg-background-interactive-tint text-content-interactive border-stroke-interactive"
      default:
        return "bg-white text-content-primary border-stroke-input hover:border-stroke-interactive"
    }
  }

  if (selected) {
    return "bg-background-interactive-tint text-content-interactive border-stroke-interactive"
  }

  return "bg-background-secondary text-content-primary border-stroke-input hover:bg-background-tertiary hover:border-stroke-interactive"
}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      label,
      selected = false,
      disabled = false,
      size = "medium",
      variant = "default",
      badgeCount,
      filterState,
      appliedFiltersCount,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const iconSize = size === "small" ? 12 : 16

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "inline-flex items-center gap-2 font-medium rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-background-interactive-tint focus:ring-offset-2",
          getSizeStyles(size),
          getVariantStyles(variant, selected, filterState),
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "cursor-pointer",
          className,
        )}
        {...props}
      >
        <span>{label}</span>

        {/* Multi-select icons */}
        {variant === "multi" &&
          (selected ? (
            <Check size={iconSize} className="text-content-interactive" />
          ) : (
            <Plus size={iconSize} className="text-content-primary" />
          ))}

        {/* Badge variant */}
        {variant === "badge" && badgeCount !== undefined && (
          <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold bg-background-interactive-strong text-white rounded-full">
            {badgeCount}
          </span>
        )}

        {/* Filter variant */}
        {variant === "filter" && (
          <div className="flex items-center gap-1">
            {appliedFiltersCount !== undefined && appliedFiltersCount > 0 && (
              <NotificationBadge count={appliedFiltersCount} variant="medium" />
            )}
            <ChevronDown
              size={iconSize}
              className={filterState === "default" ? "text-content-primary" : "text-content-interactive"}
            />
          </div>
        )}
      </button>
    )
  },
)
Chip.displayName = "Chip"

export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
      {children}
    </div>
  )
})
ChipGroup.displayName = "ChipGroup"

export { Chip, ChipGroup }
