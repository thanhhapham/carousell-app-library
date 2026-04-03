"use client"

import React from "react"
import { ExternalLink, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  helpText?: string
  errorMessage?: string
  textLink?: {
    text: string
    href?: string
    onClick?: () => void
  }
  prefix?: string
  suffix?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  size?: "small" | "medium" | "large"
  variant?: "default" | "password"
  showPasswordToggle?: boolean
}

export function TextInput({
  label,
  helpText,
  errorMessage,
  textLink,
  prefix,
  suffix,
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "default",
  showPasswordToggle = false,
  className,
  type = "text",
  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const inputType = variant === "password" ? (showPassword ? "text" : "password") : type

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-8 text-small-reg"
      case "large":
        return "h-12 text-large-reg"
      case "medium":
      default:
        return "h-10 text-middle-reg"
    }
  }

  const getPaddingClasses = () => {
    let paddingLeft = "pl-3"
    let paddingRight = "pr-3"

    if (leadingIcon || prefix) paddingLeft = "pl-10"
    if (trailingIcon || suffix || (variant === "password" && showPasswordToggle)) paddingRight = "pr-10"

    return `${paddingLeft} ${paddingRight}`
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

      {/* Input Container */}
      <div className="relative">
        {/* Leading Icon or Prefix */}
        {(leadingIcon || prefix) && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-content-subdued">
            {leadingIcon || <span className="text-middle-reg">{prefix}</span>}
          </div>
        )}

        {/* Input Field */}
        <input
          type={inputType}
          className={cn(
            "w-full rounded-lg border bg-background-input transition-colors",
            getSizeClasses(),
            getPaddingClasses(),
            errorMessage
              ? "border-content-negative focus:border-content-negative focus:ring-stroke-halo-priority"
              : "border-stroke-input focus:border-stroke-interactive focus:ring-stroke-halo-focused",
            "focus:outline-none focus:ring-2",
            "placeholder:text-content-subdued",
            "disabled:bg-background-disabled disabled:text-content-subdued disabled:cursor-not-allowed",
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Trailing Icon, Suffix, or Password Toggle */}
        {(trailingIcon || suffix || (variant === "password" && showPasswordToggle)) && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-content-subdued">
            {variant === "password" && showPasswordToggle ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-content-primary"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            ) : trailingIcon ? (
              trailingIcon
            ) : (
              <span className="text-middle-reg">{suffix}</span>
            )}
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
