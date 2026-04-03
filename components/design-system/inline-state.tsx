"use client"

import type React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface InlineStateProps {
  illustration?: React.ReactNode
  title?: string
  subtitle?: string
  buttonText?: string
  onButtonClick?: () => void
  className?: string
}

export function InlineState({ illustration, title, subtitle, buttonText, onButtonClick, className }: InlineStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center py-12 px-6", className)}>
      {illustration && <div className="mb-6">{illustration}</div>}

      {title && <h3 className="text-lg font-semibold text-content-primary mb-2">{title}</h3>}

      {subtitle && <p className="text-sm text-content-secondary mb-6 max-w-sm">{subtitle}</p>}

      {buttonText && onButtonClick && (
        <Button variant="primary" primaryVariant="promote" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  )
}
