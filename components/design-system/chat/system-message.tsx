"use client"
import { cn } from "@/lib/utils"
import { Button } from "../button"

interface SystemMessageProps {
  title?: string
  message: string
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
  className?: string
  variant?: "info" | "warning" | "success" | "error"
}

export function SystemMessage({
  title,
  message,
  primaryAction,
  secondaryAction,
  className,
  variant = "info",
}: SystemMessageProps) {
  return (
    <div className={cn("flex justify-center py-4", className)}>
      <div
        className={cn(
          "max-w-sm mx-4 p-4 rounded-lg text-center",
          variant === "warning" && "bg-core-warning-tint border border-core-warning",
          variant === "success" && "bg-core-success-tint border border-core-success",
          variant === "error" && "bg-core-error-tint border border-core-error",
        )}
      >
        {title && <h3 className="text-middle-med text-content-primary mb-2">{title}</h3>}

        <p className="text-small-reg text-content-secondary mb-4 leading-relaxed">{message}</p>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col gap-2">
            {secondaryAction && (
              <Button variant="text" size="sm" onClick={secondaryAction.onClick} className="w-full">
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button variant="secondary" size="sm" onClick={primaryAction.onClick} className="w-full">
                {primaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
