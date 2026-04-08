"use client"

import { cn } from "@/lib/utils"

export type ThinkingStyle = 1 | 2 | 3 | 4

interface FloatingToggleProps {
  activeOption: 1 | 2 | 3
  onOptionChange: (option: 1 | 2 | 3) => void
  activeThinkingStyle: ThinkingStyle
  onThinkingStyleChange: (style: ThinkingStyle) => void
}

const THINKING_LABELS: Record<ThinkingStyle, string> = {
  1: "Checklist",
  2: "Skeleton",
  3: "Stream",
  4: "Turns",
}

export function FloatingToggle({
  activeOption,
  onOptionChange,
  activeThinkingStyle,
  onThinkingStyleChange,
}: FloatingToggleProps) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-background-inverse rounded-xl py-2 px-2 shadow-lg flex flex-col gap-0">
        {/* UI options row */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-content-inverse/40">
            UI
          </span>
          <div className="flex gap-1">
            {([1, 2, 3] as const).map((n) => (
              <button
                key={n}
                onClick={() => onOptionChange(n)}
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-small-callout font-bold transition-all duration-200",
                  activeOption === n
                    ? "bg-content-interactive text-content-inverse scale-110"
                    : "text-content-inverse/60 hover:text-content-inverse/80",
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-1.5 mx-1" />

        {/* AI thinking style row */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-content-inverse/40">
            AI thinking
          </span>
          <div className="flex gap-1">
            {([1, 2, 3, 4] as const).map((n) => (
              <button
                key={n}
                onClick={() => onThinkingStyleChange(n)}
                title={THINKING_LABELS[n]}
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-small-callout font-bold transition-all duration-200",
                  activeThinkingStyle === n
                    ? "bg-orange-500 text-white scale-110"
                    : "text-content-inverse/60 hover:text-content-inverse/80",
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
