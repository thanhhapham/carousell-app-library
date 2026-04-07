"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { Pencil, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { OptionDef } from "../conversation-engine"

interface OptionChipsProps {
  options: OptionDef[]
  selectedValue?: string | string[]
  multiSelect?: boolean
  onSelect: (value: string, label: string) => void
  onMultiSelect?: (values: string[], labels: string[]) => void
  onTypeOwn?: (text: string) => void
  showTypeOwn?: boolean
  showSkip?: boolean
  onSkip?: () => void
  disabled?: boolean
  headerSlot?: ReactNode
}

export function OptionChips({
  options,
  selectedValue,
  multiSelect = false,
  onSelect,
  onMultiSelect,
  onTypeOwn,
  showTypeOwn = true,
  showSkip = true,
  onSkip,
  disabled = false,
  headerSlot,
}: OptionChipsProps) {
  const [showInput, setShowInput] = useState(false)
  const [inputText, setInputText] = useState("")
  const [multiSelected, setMultiSelected] = useState<string[]>([])

  const isSelected = (value: string) => {
    if (multiSelect) return multiSelected.includes(value)
    if (Array.isArray(selectedValue)) return selectedValue.includes(value)
    return selectedValue === value
  }

  const handleChipClick = (option: OptionDef) => {
    if (disabled) return

    if (multiSelect) {
      const newSelected = multiSelected.includes(option.value)
        ? multiSelected.filter((v) => v !== option.value)
        : [...multiSelected, option.value]

      // "None" is exclusive
      const finalSelected = option.value === "none" ? ["none"] : newSelected.filter((v) => v !== "none")
      setMultiSelected(finalSelected)
    } else {
      onSelect(option.value, option.label)
    }
  }

  const handleMultiConfirm = () => {
    if (multiSelected.length === 0) return
    const labels = multiSelected
      .map((v) => options.find((o) => o.value === v)?.label || v)
    onMultiSelect?.(multiSelected, labels)
  }

  const handleTypeOwnSubmit = () => {
    if (inputText.trim()) {
      onTypeOwn?.(inputText.trim())
      setInputText("")
      setShowInput(false)
    }
  }

  return (
    <div className="ml-11 mr-4 mt-1 mb-2">
      <div className="bg-background-display rounded-xl overflow-hidden">
        {headerSlot && (
          <div className="flex items-center justify-between px-3 pt-3 pb-2 border-b border-stroke-boundary">
            {headerSlot}
          </div>
        )}
        <div className="p-3">
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleChipClick(option)}
              disabled={disabled}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-small-reg font-medium border transition-all duration-150",
                "min-h-[44px]",
                isSelected(option.value)
                  ? "bg-background-interactive-tint text-content-interactive border-stroke-interactive"
                  : "bg-background-base text-content-primary border-stroke-input hover:border-stroke-interactive",
                disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              {option.label}
              {option.description && (
                <span className="text-content-subdued text-tiny-reg hidden">
                  {option.description}
                </span>
              )}
            </button>
          ))}

          {showTypeOwn && !showInput && (
            <button
              onClick={() => setShowInput(true)}
              disabled={disabled}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-small-reg font-medium border border-dashed border-stroke-input text-content-secondary hover:border-stroke-interactive min-h-[44px] transition-colors"
            >
              <Pencil size={14} />
              Type your own
            </button>
          )}

          {showSkip && (
            <button
              onClick={onSkip}
              disabled={disabled}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-small-reg font-medium text-content-subdued hover:text-content-secondary min-h-[44px] transition-colors"
            >
              <HelpCircle size={14} />
              I don't know
            </button>
          )}
        </div>

        {/* Type your own input */}
        {showInput && (
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTypeOwnSubmit()}
              placeholder="Type your answer..."
              autoFocus
              className="flex-1 px-3 py-2 rounded-lg border border-stroke-input bg-background-base text-small-reg focus:outline-none focus:ring-2 focus:ring-content-interactive focus:border-transparent"
            />
            <button
              onClick={handleTypeOwnSubmit}
              disabled={!inputText.trim()}
              className="px-3 py-2 rounded-lg bg-content-interactive text-content-inverse text-small-callout font-bold disabled:opacity-40 transition-opacity"
            >
              Send
            </button>
          </div>
        )}

        {/* Multi-select confirm */}
        {multiSelect && multiSelected.length > 0 && (
          <button
            onClick={handleMultiConfirm}
            className="mt-3 w-full py-2.5 rounded-lg bg-content-interactive text-content-inverse text-small-callout font-bold transition-opacity hover:opacity-90"
          >
            Confirm ({multiSelected.length} selected)
          </button>
        )}
        </div>
      </div>
    </div>
  )
}
