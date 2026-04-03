"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingInputProps {
  label?: string
  value: number
  onChange: (value: number) => void
  maxRating?: number
  disabled?: boolean
  className?: string
}

export function RatingInput({ label, value, onChange, maxRating = 5, disabled = false, className }: RatingInputProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    if (!disabled) {
      setHoverValue(index)
    }
  }

  const handleMouseLeave = () => {
    setHoverValue(null)
  }

  const handleClick = (index: number) => {
    if (!disabled) {
      onChange(index)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <div className="text-small-callout text-content-primary">{label}</div>}
      <div className="flex" onMouseLeave={handleMouseLeave}>
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1
          const isFilled = (hoverValue !== null ? hoverValue : value) >= starValue

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              disabled={disabled}
              className={cn(
                "p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-stroke-halo-focused",
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              )}
              aria-label={`Rate ${starValue} out of ${maxRating}`}
            >
              <Star
                className={cn(
                  "h-6 w-6 transition-colors",
                  isFilled ? "fill-core-primary1 text-core-primary1" : "fill-transparent text-stroke-boundary",
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

interface RatingDisplayProps {
  value: number
  maxRating?: number
  reviewCount?: number
  showScore?: boolean
  size?: "small" | "medium"
  className?: string
}

export function RatingDisplay({
  value,
  maxRating = 5,
  reviewCount,
  showScore = false,
  size = "medium",
  className,
}: RatingDisplayProps) {
  const roundedValue = Math.round(value * 2) / 2 // Round to nearest 0.5

  const starSize = size === "small" ? "h-4 w-4" : "h-5 w-5"
  const textSize = size === "small" ? "text-small-reg" : "text-middle-reg"

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1
          const isFilled = roundedValue >= starValue
          const isHalfFilled = !isFilled && roundedValue + 0.5 >= starValue

          return (
            <span key={index} className="inline-block">
              {isHalfFilled ? (
                <div className="relative">
                  <Star className={cn(starSize, "text-stroke-boundary")} />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className={cn(starSize, "fill-core-primary1 text-core-primary1")} />
                  </div>
                </div>
              ) : (
                <Star
                  className={cn(starSize, isFilled ? "fill-core-primary1 text-core-primary1" : "text-stroke-boundary")}
                />
              )}
            </span>
          )
        })}
      </div>

      {showScore && <span className={cn(textSize, "text-content-primary font-bold")}>{value.toFixed(1)}</span>}

      {reviewCount !== undefined && (
        <span className={cn(textSize, "text-content-secondary")}>
          {reviewCount > 0 ? `(${reviewCount})` : "No reviews"}
        </span>
      )}
    </div>
  )
}
