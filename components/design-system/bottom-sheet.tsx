"use client"

import type React from "react"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  height?: "auto" | "half" | "full"
  className?: string
}

export function BottomSheet({ open, onClose, title, children, height = "auto", className }: BottomSheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  const heightStyles = {
    auto: "max-h-[80vh]",
    half: "h-[50vh]",
    full: "h-[90vh]",
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Bottom Sheet */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl",
          "flex flex-col",
          heightStyles[height],
          "animate-in slide-in-from-bottom duration-300",
          className,
        )}
      >
        {/* Handle */}
        <div className="flex justify-center py-3">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        {title && (
          <div className="px-4 pb-4 border-b border-stroke-input">
            <h2 className="text-lg font-semibold text-content-primary text-center">{title}</h2>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  )
}
