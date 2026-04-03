"use client"

import type * as React from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhoneInputProps {
  label?: string
  helpText?: string
  errorMessage?: string
  textLink?: {
    text: string
    href?: string
    onClick?: () => void
  }
  countryCode?: string
  countryFlag?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function PhoneInput({
  label,
  helpText,
  errorMessage,
  textLink,
  countryCode = "+65",
  countryFlag = "🇸🇬",
  value = "",
  onChange,
  placeholder = "Placeholder",
  disabled = false,
  className,
}: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
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

      {/* Phone Input Container */}
      <div className="relative">
        <div
          className={cn(
            "flex items-center w-full rounded-lg border bg-background-input transition-colors",
            errorMessage
              ? "border-content-negative focus-within:border-content-negative focus-within:ring-stroke-halo-priority"
              : "border-stroke-input focus-within:border-stroke-interactive focus-within:ring-stroke-halo-focused",
            "focus-within:outline-none focus-within:ring-2",
            disabled && "bg-background-disabled cursor-not-allowed",
          )}
        >
          {/* Country Code Section */}
          <div className="flex items-center gap-2 px-3 py-2 border-r border-stroke-boundary">
            <span className="text-middle-reg">{countryFlag}</span>
            <span className="text-middle-reg text-content-primary">{countryCode}</span>
          </div>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "flex-1 px-3 py-2 bg-transparent border-0 text-middle-reg",
              "focus:outline-none focus:ring-0",
              "placeholder:text-content-subdued",
              disabled ? "text-content-subdued cursor-not-allowed" : "text-content-primary",
            )}
          />
        </div>
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
