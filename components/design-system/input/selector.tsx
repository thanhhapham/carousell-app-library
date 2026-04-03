"use client"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  variant?: "ios" | "android"
  onImage?: boolean
}

export function Checkbox({
  checked,
  onChange,
  disabled = false,
  className,
  variant = "ios",
  onImage = false,
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded",
        variant === "ios" ? "rounded-md" : "rounded",
        onImage ? "bg-background-on-image" : "bg-background-base",
        disabled ? "cursor-not-allowed opacity-50" : "",
        checked
          ? variant === "ios"
            ? "border-core-primary1 bg-core-primary1"
            : "border-core-primary1 bg-core-primary1"
          : "border border-stroke-boundary",
        className,
      )}
    >
      {checked && <Check className="h-3 w-3 text-content-on-dark" />}
    </div>
  )
}

interface RadioProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Radio({ checked, onChange, disabled = false, className }: RadioProps) {
  const handleClick = () => {
    if (!disabled) {
      onChange(true)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border",
        checked ? "border-core-primary1" : "border-stroke-boundary",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      )}
    >
      {checked && <div className="h-3 w-3 rounded-full bg-core-primary1" />}
    </div>
  )
}

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  variant?: "ios" | "android"
}

export function Switch({ checked, onChange, disabled = false, className, variant = "ios" }: SwitchProps) {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative inline-flex cursor-pointer rounded-full transition-colors",
        variant === "ios" ? "h-6 w-11" : "h-5 w-10",
        checked ? "bg-core-primary1" : variant === "ios" ? "bg-stroke-boundary" : "bg-stroke-boundary",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 rounded-full bg-background-base transition-transform",
          variant === "ios" ? "h-5 w-5" : "h-4 w-4",
          checked ? (variant === "ios" ? "left-[22px]" : "left-[22px]") : "left-0.5",
        )}
      />
    </div>
  )
}
