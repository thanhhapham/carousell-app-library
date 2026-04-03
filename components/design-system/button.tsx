"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "rounded" | "icon"
  primaryVariant?: "promote" | "task"
  textVariant?: "teal" | "grey"
  roundedVariant?: "green" | "outlined-grey" | "filled-grey"
  iconVariant?: "primary" | "general"
  size?: "small" | "medium" | "large"
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      primaryVariant,
      textVariant = "teal",
      roundedVariant = "green",
      iconVariant = "primary",
      size = "medium",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    const getVariantStyles = () => {
      switch (variant) {
        case "primary":
          if (primaryVariant === "task") {
            return cn(
              "bg-core-primary1 !text-content-inverse border-2 border-core-primary1",
              "hover:bg-core-primary1/90 hover:border-core-primary1/90",
              "active:bg-core-primary1/80 active:border-core-primary1/80",
              "disabled:bg-background-disabled disabled:border-background-disabled disabled:text-content-subdued",
            )
          }
          // Default primary (promote) style
          return cn(
            "bg-core-primary2 !text-content-inverse border-2 border-core-primary2",
            "hover:bg-core-primary2/90 hover:border-core-primary2/90",
            "active:bg-core-primary2/80 active:border-core-primary2/80",
            "disabled:bg-background-disabled disabled:border-background-disabled disabled:text-content-subdued",
          )
        case "secondary":
          return cn(
            "bg-transparent !text-content-primary border-2 border-stroke-input",
            "hover:bg-background-display hover:border-stroke-interactive",
            "active:bg-background-interactive-tint active:border-stroke-interactive-strong",
            "disabled:bg-transparent disabled:border-stroke-disabled disabled:text-content-subdued",
          )
        case "text":
          if (textVariant === "teal") {
            return cn(
              "bg-transparent !text-content-interactive border-2 border-transparent",
              "hover:!text-content-interactive-strong hover:bg-background-interactive-tint",
              "active:!text-content-interactive-strong active:bg-background-interactive-tint-strong",
              "disabled:!text-content-subdued disabled:bg-transparent",
            )
          } else {
            return cn(
              "bg-transparent text-content-primary border-2 border-transparent",
              "hover:text-content-primary hover:bg-background-display",
              "active:text-content-primary active:bg-background-elevated-low",
              "disabled:text-content-subdued disabled:bg-transparent",
            )
          }
        case "rounded":
          if (roundedVariant === "outlined-grey") {
            return cn(
              "bg-transparent text-content-secondary border-2 border-stroke-input rounded-full font-normal",
              "hover:text-content-interactive hover:border-stroke-interactive",
              "active:text-content-interactive active:border-stroke-interactive",
              "disabled:bg-transparent disabled:border-stroke-disabled disabled:text-content-subdued",
            )
          } else if (roundedVariant === "filled-grey") {
            return cn(
              "bg-background-inverse !text-content-inverse border-2 border-transparent rounded-full font-normal",
              "hover:bg-background-inverse/90 hover:!text-content-inverse",
              "active:bg-background-inverse/80 active:!text-content-inverse",
              "disabled:bg-background-disabled disabled:border-transparent disabled:text-content-subdued",
            )
          } else {
            // Default green rounded
            return cn(
              "bg-background-interactive-tint text-content-secondary border-2 border-transparent rounded-full font-normal",
              "hover:bg-background-interactive-tint hover:text-content-secondary",
              "active:bg-background-interactive-tint-strong active:text-content-secondary",
              "disabled:bg-background-disabled disabled:border-transparent disabled:text-content-subdued",
            )
          }
        case "icon":
          if (iconVariant === "general") {
            return cn(
              "bg-background-base !text-content-secondary border-2 border-background-base rounded-full",
              "hover:bg-background-display hover:border-background-display hover:!text-content-primary",
              "active:bg-background-elevated-low active:border-background-elevated-low active:!text-content-primary",
              "disabled:bg-background-disabled disabled:border-background-disabled disabled:text-content-subdued",
            )
          } else {
            // Default primary icon variant
            return cn(
              "bg-background-inverse !text-content-inverse border-2 border-background-inverse rounded-full",
              "hover:bg-background-inverse/90 hover:border-background-inverse/90",
              "active:bg-background-inverse/80 active:border-background-inverse/80",
              "disabled:bg-background-disabled disabled:border-background-disabled disabled:text-content-subdued",
            )
          }
        default:
          return ""
      }
    }

    const getSizeStyles = () => {
      if (variant === "icon") {
        switch (size) {
          case "small":
            return "w-8 h-8 p-1"
          case "medium":
            return "w-10 h-10 p-2"
          case "large":
            return "w-12 h-12 p-3"
          default:
            return "w-10 h-10 p-2"
        }
      }

      switch (size) {
        case "small":
          return "px-3 py-2 text-small-callout h-8"
        case "medium":
          return "px-4 py-3 text-middle-callout h-10"
        case "large":
          return "px-6 py-4 text-large-callout h-12"
        default:
          return "px-4 py-3 text-middle-callout h-10"
      }
    }

    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2 transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-halo-focused focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:cursor-not-allowed",
      variant !== "rounded" && variant !== "icon" && "rounded-lg font-bold",
    )

    return (
      <button
        className={cn(baseStyles, getVariantStyles(), getSizeStyles(), fullWidth && "w-full", className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!loading && icon && iconPosition === "left" && icon}
        {!loading && children}
        {!loading && icon && iconPosition === "right" && icon}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }
