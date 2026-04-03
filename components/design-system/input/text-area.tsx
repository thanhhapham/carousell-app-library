"use client"

import React from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helpText?: string
  errorMessage?: string
  textLink?: {
    text: string
    href?: string
    onClick?: () => void
  }
  showCharacterCount?: boolean
  maxLength?: number
  resize?: "none" | "vertical" | "horizontal" | "both"
}

export function TextArea({
  label,
  helpText,
  errorMessage,
  textLink,
  showCharacterCount = false,
  maxLength,
  resize = "vertical",
  className,
  value,
  onChange,
  ...props
}: TextAreaProps) {
  const [internalValue, setInternalValue] = React.useState(value || "")
  const currentValue = value !== undefined ? value : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e)
    } else {
      setInternalValue(e.target.value)
    }
  }

  const characterCount = typeof currentValue === "string" ? currentValue.length : 0

  const getResizeClass = () => {
    switch (resize) {
      case "none":
        return "resize-none"
      case "horizontal":
        return "resize-x"
      case "both":
        return "resize"
      case "vertical":
      default:
        return "resize-y"
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {/* Label and Text Link */}
      {(label || textLink) && (
        <div className="flex items-center justify-between">
          {label && <label className="text-small-callout text-content-primary">{label}</label>}
          {textLink && (
            <button
              type="button"
              onClick={textLink.onClick}
              className="flex items-center gap-1 text-small-callout text-content-interactive hover:text-content-interactive-strong"
            >
              {textLink.text}
              {textLink.href && <ExternalLink className="h-3 w-3" />}
            </button>
          )}
        </div>
      )}

      {/* TextArea Container */}
      <div className="relative">
        <textarea
          className={cn(
            "w-full min-h-[80px] px-3 py-2 rounded-lg border bg-background-input transition-colors",
            "text-middle-reg",
            getResizeClass(),
            errorMessage
              ? "border-content-negative focus:border-content-negative focus:ring-stroke-halo-priority"
              : "border-stroke-input focus:border-stroke-interactive focus:ring-stroke-halo-focused",
            "focus:outline-none focus:ring-2",
            "placeholder:text-content-subdued",
            "disabled:bg-background-disabled disabled:text-content-subdued disabled:cursor-not-allowed",
          )}
          value={currentValue}
          onChange={handleChange}
          maxLength={maxLength}
          {...props}
        />

        {/* Character Count */}
        {showCharacterCount && (
          <div className="absolute bottom-2 right-3 text-tiny-reg text-content-subdued">
            {characterCount}
            {maxLength && `/${maxLength}`}
          </div>
        )}
      </div>

      {/* Help Text or Error Message */}
      {(helpText || errorMessage) && (
        <div className="text-small-reg">
          {errorMessage ? (
            <span className="text-content-negative">{errorMessage}</span>
          ) : (
            <span className="text-content-subdued">{helpText}</span>
          )}
        </div>
      )}
    </div>
  )
}
