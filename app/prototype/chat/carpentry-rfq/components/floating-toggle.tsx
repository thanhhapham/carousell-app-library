"use client"

import { cn } from "@/lib/utils"

interface FloatingToggleProps {
  activeOption: 1 | 2 | 3
  onOptionChange: (option: 1 | 2 | 3) => void
}

export function FloatingToggle({ activeOption, onOptionChange }: FloatingToggleProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-background-inverse rounded-l-xl py-2 px-1.5 flex flex-col gap-1.5 shadow-lg">
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
  )
}
