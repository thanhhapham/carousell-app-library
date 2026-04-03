"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

type TipPosition = "top" | "right" | "bottom" | "left"

interface SpeechBubbleProps {
  title?: string
  children: React.ReactNode
  tipPosition?: TipPosition
  actions?: {
    label: string
    onClick: () => void
  }[]
  className?: string
  contentClassName?: string
}

export function SpeechBubble({
  title,
  children,
  tipPosition = "bottom",
  actions,
  className,
  contentClassName,
}: SpeechBubbleProps) {
  const getTipClasses = () => {
    switch (tipPosition) {
      case "top":
        return "top-0 left-1/2 -translate-x-1/2 -translate-y-[8px] border-t-transparent border-l-transparent border-r-transparent"
      case "right":
        return "top-1/2 right-0 -translate-y-1/2 translate-x-[8px] border-t-transparent border-r-transparent border-b-transparent"
      case "bottom":
        return "bottom-0 left-1/2 -translate-x-1/2 translate-y-[8px] border-b-transparent border-l-transparent border-r-transparent"
      case "left":
        return "top-1/2 left-0 -translate-y-1/2 -translate-x-[8px] border-t-transparent border-l-transparent border-b-transparent"
      default:
        return "bottom-0 left-1/2 -translate-x-1/2 translate-y-[8px] border-b-transparent border-l-transparent border-r-transparent"
    }
  }

  return (
    <div className={cn("relative max-w-xs", className)}>
      <div
        className={cn("rounded-lg border border-stroke-boundary bg-background-base p-4 shadow-sm", contentClassName)}
      >
        {title && <h4 className="mb-1 text-small-callout font-medium text-content-primary">{title}</h4>}
        <div className="text-small-reg text-content-secondary">{children}</div>

        {actions && actions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {actions.map((action, index) => (
              <Button key={index} variant="text" textVariant="teal" size="small" onClick={action.onClick}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className={cn("absolute h-4 w-4 border-8 border-stroke-boundary bg-background-base", getTipClasses())} />
    </div>
  )
}
