"use client"

import type * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepperProps {
  label?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
}

export function Stepper({
  label,
  value,
  onChange,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled = false,
  className,
}: StepperProps) {
  const isMinReached = value <= min
  const isMaxReached = value >= max

  const handleDecrement = () => {
    if (!disabled && !isMinReached) {
      onChange(Math.max(min, value - step))
    }
  }

  const handleIncrement = () => {
    if (!disabled && !isMaxReached) {
      onChange(Math.min(max, value + step))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return

    const newValue = Number.parseInt(e.target.value, 10)
    if (!isNaN(newValue)) {
      onChange(Math.min(max, Math.max(min, newValue)))
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <div className="text-small-callout text-content-primary">{label}</div>}
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || isMinReached}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2",
            disabled
              ? "border-background-disabled text-content-subdued"
              : isMinReached
                ? "border-stroke-boundary text-content-subdued"
                : "border-core-primary1 text-core-primary1 hover:bg-background-interactive-tint",
          )}
          aria-label="Decrease value"
        >
          <Minus className="h-5 w-5" />
        </button>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          className={cn(
            "mx-2 w-16 text-center text-middle-callout",
            "border-0 bg-transparent focus:outline-none focus:ring-0",
            disabled ? "text-content-subdued" : "text-content-primary",
          )}
          aria-label={label || "Value"}
        />
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || isMaxReached}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2",
            disabled
              ? "border-background-disabled text-content-subdued"
              : isMaxReached
                ? "border-stroke-boundary text-content-subdued"
                : "border-core-primary1 text-core-primary1 hover:bg-background-interactive-tint",
          )}
          aria-label="Increase value"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
