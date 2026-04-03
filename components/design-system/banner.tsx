"use client"

import type React from "react"
import { X } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface BannerProps {
  variant?: "info" | "warning" | "error" | "success"
  title: string
  subtitle?: string
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  primaryAction?: {
    text: string
    onClick: () => void
  }
  secondaryAction?: {
    text: string
    onClick: () => void
  }
  className?: string
}

export function Banner({
  variant = "info",
  title,
  subtitle,
  icon,
  dismissible = true,
  onDismiss,
  primaryAction,
  secondaryAction,
  className,
}: BannerProps) {
  const variantStyles = {
    info: "bg-blue-50 border-blue-200",
    warning: "bg-yellow-50 border-yellow-200",
    error: "bg-red-50 border-red-200",
    success: "bg-green-50 border-green-200",
  }

  return (
    <div className={cn("flex items-start gap-3 p-4 border rounded-lg", variantStyles[variant], className)}>
      {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-content-primary">{title}</h4>
        {subtitle && <p className="text-sm text-content-secondary mt-1">{subtitle}</p>}

        {(primaryAction || secondaryAction) && (
          <div className="flex gap-2 mt-3">
            {primaryAction && (
              <Button size="small" variant="primary" primaryVariant="promote" onClick={primaryAction.onClick}>
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button size="small" variant="text" onClick={secondaryAction.onClick}>
                {secondaryAction.text}
              </Button>
            )}
          </div>
        )}
      </div>

      {dismissible && (
        <button onClick={onDismiss} className="flex-shrink-0 p-1 hover:bg-black/5 rounded">
          <X className="w-4 h-4 text-content-secondary" />
        </button>
      )}
    </div>
  )
}
