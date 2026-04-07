"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { Send } from "lucide-react"

interface TextInputWidgetProps {
  placeholder?: string
  onSubmit: (text: string) => void
  disabled?: boolean
  headerSlot?: ReactNode
}

export function TextInputWidget({
  placeholder = "Type your answer...",
  onSubmit,
  disabled = false,
  headerSlot,
}: TextInputWidgetProps) {
  const [text, setText] = useState("")

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim())
      setText("")
    }
  }

  return (
    <div className="ml-11 mr-4 mt-1 mb-2">
      {headerSlot && (
        <div className="flex items-center justify-between px-3 pt-3 pb-2 bg-background-display rounded-t-xl border-b border-stroke-boundary">
          {headerSlot}
        </div>
      )}
      <div className={`flex gap-2 ${headerSlot ? "bg-background-display rounded-b-xl p-3" : ""}`}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus
          className="flex-1 px-3 py-2.5 rounded-lg border border-stroke-input bg-background-base text-small-reg focus:outline-none focus:ring-2 focus:ring-content-interactive focus:border-transparent min-h-[44px]"
        />
        <button
          onClick={handleSubmit}
          disabled={!text.trim() || disabled}
          className="px-3 py-2.5 rounded-lg bg-content-interactive text-content-inverse disabled:opacity-40 transition-opacity min-w-[44px] flex items-center justify-center"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}
