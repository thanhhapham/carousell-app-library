"use client"

import { ClipboardList } from "lucide-react"

interface StickyCanvasBarProps {
  completionPct: number
  onReview: () => void
}

export function StickyCanvasBar({ completionPct, onReview }: StickyCanvasBarProps) {
  return (
    <div className="relative border-b border-stroke-boundary overflow-hidden flex-shrink-0">
      {/* Green progress bar background */}
      <div
        className="absolute inset-0 bg-content-positive/15 transition-all duration-500 ease-out"
        style={{ width: `${completionPct}%` }}
      />
      {/* Content */}
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <ClipboardList size={18} className="text-content-secondary" />
          <span className="text-middle-reg text-content-primary">Your carpentry request</span>
          {completionPct > 0 && (
            <span className="text-tiny-reg text-content-secondary ml-1">
              {completionPct}%
            </span>
          )}
        </div>
        <button
          onClick={onReview}
          className="text-small-callout font-bold text-content-interactive active:opacity-70"
        >
          Review
        </button>
      </div>
    </div>
  )
}
