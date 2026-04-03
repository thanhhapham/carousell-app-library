"use client"
import { Check, ChevronRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ListItemProps {
  title: string
  description?: string
  size?: "small" | "medium" | "large"
  type?: "radio" | "checkbox" | "switch" | "chevron"
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function ListItem({
  title,
  description,
  size = "medium",
  type = "chevron",
  selected = false,
  disabled = false,
  onClick,
  className,
}: ListItemProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-2"
      case "large":
        return "py-4"
      case "medium":
      default:
        return "py-3"
    }
  }

  const getTitleClasses = () => {
    switch (size) {
      case "small":
        return "text-small-callout"
      case "large":
        return "text-large-callout"
      case "medium":
      default:
        return "text-middle-callout"
    }
  }

  const getDescriptionClasses = () => {
    switch (size) {
      case "small":
        return "text-tiny-reg"
      case "large":
        return "text-middle-reg"
      case "medium":
      default:
        return "text-small-reg"
    }
  }

  const renderControl = () => {
    if (disabled) {
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-stroke-boundary bg-background-disabled">
          <Lock className="h-3 w-3 text-content-subdued" />
        </div>
      )
    }

    switch (type) {
      case "radio":
        return (
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full border-2",
              selected
                ? "border-core-primary1 bg-background-interactive-tint"
                : "border-stroke-boundary bg-background-base",
            )}
          >
            {selected && <div className="h-3 w-3 rounded-full bg-core-primary1" />}
          </div>
        )
      case "checkbox":
        return (
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-md border-2",
              selected ? "border-core-primary1 bg-core-primary1" : "border-stroke-boundary bg-background-base",
            )}
          >
            {selected && <Check className="h-4 w-4 text-content-on-dark" />}
          </div>
        )
      case "switch":
        return (
          <div
            className={cn(
              "relative h-6 w-10 rounded-full transition-colors",
              selected ? "bg-core-primary1" : "bg-stroke-boundary",
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 h-5 w-5 rounded-full bg-background-base transition-transform",
                selected ? "left-[18px]" : "left-0.5",
              )}
            />
          </div>
        )
      case "chevron":
      default:
        return <ChevronRight className="h-5 w-5 text-content-subdued" />
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex cursor-pointer items-center justify-between border-b border-stroke-boundary px-4",
        getSizeClasses(),
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      <div className="flex-1 pr-4">
        <h3 className={cn(getTitleClasses(), "text-content-primary")}>{title}</h3>
        {description && <p className={cn(getDescriptionClasses(), "text-content-secondary mt-1")}>{description}</p>}
      </div>
      {renderControl()}
    </div>
  )
}
