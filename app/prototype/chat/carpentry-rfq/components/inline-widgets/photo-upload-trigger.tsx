"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { Camera, Check, Loader2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhotoUploadTriggerProps {
  onUpload: () => void
  onSkip?: () => void
  label?: string
  uploaded?: boolean
  disabled?: boolean
  headerSlot?: ReactNode
}

export function PhotoUploadTrigger({
  onUpload,
  onSkip,
  label = "Tap to upload a photo",
  uploaded = false,
  disabled = false,
  headerSlot,
}: PhotoUploadTriggerProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    if (disabled || loading || uploaded) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onUpload()
    }, 1500)
  }

  return (
    <div className="ml-11 mr-4 mt-1 mb-2">
      {headerSlot && (
        <div className="flex items-center justify-between px-3 pt-3 pb-2 bg-background-display rounded-t-xl border-b border-stroke-boundary">
          {headerSlot}
        </div>
      )}
      {uploaded ? (
        <div className={cn("relative overflow-hidden border border-stroke-boundary", headerSlot ? "rounded-b-xl" : "rounded-xl")}>
          {/* Fake uploaded image */}
          <div className="aspect-[16/10] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-content-positive/20 flex items-center justify-center mx-auto mb-2">
                <Check size={20} className="text-content-positive" />
              </div>
              <p className="text-small-reg text-content-secondary">Photo uploaded</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <button
            onClick={handleClick}
            disabled={disabled || loading}
            className={cn(
              headerSlot ? "rounded-b-xl" : "rounded-xl", "border-2 border-dashed border-stroke-input p-6",
              "flex flex-col items-center justify-center gap-2",
              "transition-colors hover:border-stroke-interactive hover:bg-background-display",
              disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            {loading ? (
              <Loader2 size={24} className="text-content-interactive animate-spin" />
            ) : (
              <Camera size={24} className="text-content-subdued" />
            )}
            <p className="text-small-reg text-content-secondary">
              {loading ? "Uploading..." : label}
            </p>
          </button>

          {onSkip && (
            <button
              onClick={onSkip}
              className="text-small-reg text-content-subdued hover:text-content-secondary transition-colors py-1"
            >
              Skip for now
            </button>
          )}
        </div>
      )}
    </div>
  )
}
