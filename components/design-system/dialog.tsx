"use client"

import type React from "react"
import { X } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  illustration?: React.ReactNode
  primaryAction?: {
    text: string
    onClick: () => void
    loading?: boolean
  }
  secondaryAction?: {
    text: string
    onClick: () => void
  }
  children?: React.ReactNode
  className?: string
}

export function Dialog({
  open,
  onClose,
  title,
  subtitle,
  illustration,
  primaryAction,
  secondaryAction,
  children,
  className,
}: DialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Dialog */}
      <div
        className={cn(
          "relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4",
          "flex flex-col max-h-[90vh]",
          className,
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stroke-input">
          <h2 className="text-lg font-semibold text-content-primary">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5 text-content-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 text-center">
            {illustration && <div className="mb-4 flex justify-center">{illustration}</div>}

            {subtitle && <p className="text-sm text-content-secondary mb-4">{subtitle}</p>}

            {children}
          </div>
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex gap-3 p-4 border-t border-stroke-input">
            {secondaryAction && (
              <Button variant="secondary" onClick={secondaryAction.onClick} fullWidth>
                {secondaryAction.text}
              </Button>
            )}
            {primaryAction && (
              <Button
                variant="primary"
                primaryVariant="promote"
                onClick={primaryAction.onClick}
                loading={primaryAction.loading}
                fullWidth
              >
                {primaryAction.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
