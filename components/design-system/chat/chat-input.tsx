"use client"

import { useState } from "react"
import { ImageIcon, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../button"

interface ChatInputProps {
  placeholder?: string
  suggestedMessages?: string[]
  onSend?: (message: string) => void
  onImageSelect?: () => void
  className?: string
  showKeyboard?: boolean
}

export function ChatInput({
  placeholder = "Type here...",
  suggestedMessages = ["Hi are you still interested?", "No problem"],
  onSend,
  onImageSelect,
  className,
  showKeyboard = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message)
      setMessage("")
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
    setShowSuggestions(false)
  }

  return (
    <div className={cn("flex flex-col bg-background-base border-t border-stroke-boundary", className)}>
      {/* Suggested Messages */}
      {showSuggestions && suggestedMessages.length > 0 && (
        <div className="flex gap-2 p-4 pb-2 overflow-x-auto">
          {suggestedMessages.map((suggestion, index) => (
            <Button
              key={index}
              variant="rounded"
              roundedVariant="outlined-grey"
              size="sm"
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-small-reg whitespace-nowrap"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-end gap-3 p-4">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            className="w-full min-h-[40px] max-h-32 p-3 pr-12 border border-stroke-boundary rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-core-primary2 focus:border-transparent"
            rows={1}
            style={{ height: "auto" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = "auto"
              target.style.height = target.scrollHeight + "px"
            }}
          />
          <Button variant="ghost" size="sm" onClick={onImageSelect} className="absolute right-2 bottom-2 p-1 h-auto">
            <ImageIcon className="w-5 h-5" />
          </Button>
        </div>

        <Button variant="primary" size="sm" onClick={handleSend} disabled={!message.trim()} className="p-2 h-auto">
          <Send className="w-5 h-5" />
        </Button>
      </div>

      {/* Virtual Keyboard (when shown) */}
      {showKeyboard && (
        <div className="bg-background-display p-4 border-t border-stroke-boundary">
          <div className="grid grid-cols-10 gap-1 mb-2">
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
              <button
                key={key}
                className="p-2 bg-background-base border border-stroke-boundary rounded text-small-reg"
                onClick={() => setMessage((prev) => prev + key.toLowerCase())}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-9 gap-1 mb-2 ml-4">
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
              <button
                key={key}
                className="p-2 bg-background-base border border-stroke-boundary rounded text-small-reg"
                onClick={() => setMessage((prev) => prev + key.toLowerCase())}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2 ml-8">
            {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
              <button
                key={key}
                className="p-2 bg-background-base border border-stroke-boundary rounded text-small-reg"
                onClick={() => setMessage((prev) => prev + key.toLowerCase())}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            <button className="px-4 py-2 bg-background-base border border-stroke-boundary rounded text-small-reg">
              123
            </button>
            <button
              className="flex-1 px-4 py-2 bg-background-base border border-stroke-boundary rounded text-small-reg"
              onClick={() => setMessage((prev) => prev + " ")}
            >
              space
            </button>
            <button className="px-4 py-2 bg-background-base border border-stroke-boundary rounded text-small-reg">
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
