"use client"

import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { OptionDef } from "../conversation-engine"

interface ImageOptionGridProps {
  options: OptionDef[]
  selectedValue?: string
  onSelect: (value: string, label: string) => void
  disabled?: boolean
  headerSlot?: ReactNode
}

// Placeholder colors for different movement/material types
const PLACEHOLDER_COLORS: Record<string, string> = {
  soft_close: "from-amber-100 to-amber-200",
  push_open: "from-slate-100 to-slate-200",
  standard: "from-stone-100 to-stone-200",
  no_pref: "from-gray-50 to-gray-100",
}

const PLACEHOLDER_ICONS: Record<string, string> = {
  soft_close: "🚪",
  push_open: "👆",
  standard: "🔩",
  no_pref: "🤷",
}

export function ImageOptionGrid({
  options,
  selectedValue,
  onSelect,
  disabled = false,
  headerSlot,
}: ImageOptionGridProps) {
  return (
    <div className="ml-11 mr-4 mt-1 mb-2">
      {headerSlot && (
        <div className="flex items-center justify-between px-3 pt-3 pb-2 bg-background-display rounded-t-xl border-b border-stroke-boundary">
          {headerSlot}
        </div>
      )}
      <div className={cn("grid grid-cols-2 gap-2", headerSlot && "bg-background-display rounded-b-xl p-3")}>
        {options.map((option) => {
          const isSelected = selectedValue === option.value
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value, option.label)}
              disabled={disabled}
              className={cn(
                "relative flex flex-col rounded-xl border-2 overflow-hidden transition-all duration-150",
                isSelected
                  ? "border-stroke-interactive shadow-sm"
                  : "border-stroke-boundary hover:border-stroke-input",
                disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              {/* Image placeholder */}
              <div
                className={cn(
                  "aspect-[4/3] bg-gradient-to-br flex items-center justify-center text-2xl",
                  PLACEHOLDER_COLORS[option.value] || "from-gray-100 to-gray-200",
                )}
              >
                {PLACEHOLDER_ICONS[option.value] || "📦"}
              </div>

              {/* Label */}
              <div className="p-2.5 bg-background-base">
                <p className="text-small-callout text-content-primary text-left">
                  {option.label}
                </p>
                {option.description && (
                  <p className="text-tiny-reg text-content-secondary text-left mt-0.5">
                    {option.description}
                  </p>
                )}
              </div>

              {/* Selected checkmark */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-content-interactive flex items-center justify-center">
                  <Check size={14} className="text-content-inverse" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
