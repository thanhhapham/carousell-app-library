"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type ListControlVariant = "positive" | "negative" | "neutral" | "dark" | "light"

interface ListControlProps {
  label: string
  icon?: LucideIcon
  variant?: ListControlVariant
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function ListControl({
  label,
  icon: Icon,
  variant = "neutral",
  onClick,
  className,
  disabled = false,
}: ListControlProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "positive":
        return "bg-core-success text-content-on-dark"
      case "negative":
        return "bg-core-error text-content-on-dark"
      case "neutral":
        return "bg-core-primary2 text-content-on-dark"
      case "dark":
        return "bg-content-primary text-content-on-dark"
      case "light":
        return "bg-background-base text-content-primary border border-stroke-boundary"
      default:
        return "bg-core-primary2 text-content-on-dark"
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex h-10 w-10 flex-col items-center justify-center rounded-md transition-colors",
        getVariantClasses(),
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      aria-label={label}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="text-tiny-reg mt-0.5">{label}</span>
    </button>
  )
}

interface ListControlsProps {
  controls: ListControlProps[]
  className?: string
}

export function ListControls({ controls, className }: ListControlsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {controls.map((control, index) => (
        <ListControl key={index} {...control} />
      ))}
    </div>
  )
}
