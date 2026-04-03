"use client"

import type * as React from "react"
import { Calendar, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PickerProps {
  label?: string
  placeholder?: string
  value?: string
  onClick?: () => void
  disabled?: boolean
  variant?: "simple" | "date" | "layered"
  icon?: React.ReactNode
  subtitle?: string
  error?: string
  helpText?: string
  className?: string
}

export function Picker({
  label,
  placeholder = "Choose",
  value,
  onClick,
  disabled = false,
  variant = "simple",
  icon,
  subtitle,
  error,
  helpText,
  className,
}: PickerProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <div className="text-small-callout text-content-primary">{label}</div>}
      <div
        onClick={handleClick}
        className={cn(
          "flex cursor-pointer items-center justify-between rounded-lg border border-stroke-boundary bg-background-input px-4 py-3 transition-colors",
          disabled ? "cursor-not-allowed opacity-50" : "hover:border-stroke-interactive",
          error ? "border-content-negative" : "",
        )}
      >
        <div className="flex items-center gap-3">
          {variant === "date" && !icon && <Calendar className="h-5 w-5 text-content-subdued" />}
          {icon && icon}

          <div>
            {variant === "layered" && subtitle ? (
              <div className="space-y-0.5">
                <div className={cn("text-middle-callout", value ? "text-content-primary" : "text-content-subdued")}>
                  {value || placeholder}
                </div>
                <div className="text-small-reg text-content-secondary">{subtitle}</div>
              </div>
            ) : (
              <div className={cn("text-middle-reg", value ? "text-content-primary" : "text-content-subdued")}>
                {value || placeholder}
              </div>
            )}
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-content-subdued" />
      </div>

      {helpText && !error && <div className="text-small-reg text-content-subdued">{helpText}</div>}
      {error && <div className="text-small-reg text-content-negative">{error}</div>}
    </div>
  )
}

interface DatePickerProps extends Omit<PickerProps, "variant"> {
  dateFormat?: string
}

export function DatePicker({
  label,
  placeholder = "DD MMM YYYY",
  value,
  onClick,
  disabled = false,
  dateFormat = "DD MMM YYYY",
  error,
  helpText,
  className,
}: DatePickerProps) {
  return (
    <Picker
      label={label}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      disabled={disabled}
      variant="date"
      error={error}
      helpText={helpText}
      className={className}
    />
  )
}

interface LayeredPickerProps extends Omit<PickerProps, "variant" | "subtitle"> {
  title?: string
  subtitle?: string
  icon?: React.ReactNode
}

export function LayeredPicker({
  label,
  placeholder = "Choose",
  value,
  onClick,
  disabled = false,
  title,
  subtitle,
  icon,
  error,
  helpText,
  className,
}: LayeredPickerProps) {
  return (
    <Picker
      label={label}
      placeholder={title || placeholder}
      value={title}
      onClick={onClick}
      disabled={disabled}
      variant="layered"
      icon={icon}
      subtitle={subtitle}
      error={error}
      helpText={helpText}
      className={className}
    />
  )
}
