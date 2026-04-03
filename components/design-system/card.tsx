"use client"

import * as React from "react"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

// Card Micros - Label Component
interface CardLabelProps {
  children: React.ReactNode
  variant?: "recommended" | "best-value"
  size?: "large" | "small"
  selected?: boolean
}

const CardLabel = ({ children, variant = "recommended", size = "large", selected = false }: CardLabelProps) => {
  const getStyles = () => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-3 py-1 text-tiny-reg font-medium"

    if (variant === "recommended") {
      return cn(
        baseStyles,
        selected ? "bg-core-primary1 text-content-on-dark" : "bg-background-interactive-tint text-core-primary1",
      )
    }

    if (variant === "best-value") {
      return cn(
        baseStyles,
        selected ? "bg-content-primary text-content-on-dark" : "bg-content-primary text-content-on-dark",
      )
    }

    return baseStyles
  }

  return <div className={getStyles()}>{children}</div>
}

// Card Micros - Thumbnail Component
interface CardThumbnailProps {
  src?: string
  alt?: string
  size?: 24 | 32 | 48
  icon?: React.ReactNode
  paymentIcon?: boolean
}

const CardThumbnail = ({ src, alt, size = 32, icon, paymentIcon = false }: CardThumbnailProps) => {
  const sizeClasses = {
    24: "w-6 h-6",
    32: "w-8 h-8",
    48: "w-12 h-12",
  }

  if (paymentIcon) {
    return (
      <div className={cn("rounded bg-core-primary1 flex items-center justify-center", sizeClasses[size])}>
        {icon || <div className="w-4 h-4 bg-white rounded-sm" />}
      </div>
    )
  }

  if (src) {
    return (
      <img src={src || "/placeholder.svg"} alt={alt || ""} className={cn("rounded object-cover", sizeClasses[size])} />
    )
  }

  return (
    <div className={cn("rounded bg-background-display flex items-center justify-center", sizeClasses[size])}>
      {icon || <div className="w-4 h-4 bg-stroke-boundary rounded" />}
    </div>
  )
}

// Main Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Card Types
  variant?: "selectable" | "actionable" | "summary"

  // Content
  title?: string
  subtitle?: string | number
  bodyText?: string
  noteText?: string

  // States
  state?: "normal" | "selected" | "disabled" | "error"

  // Visual elements
  thumbnail?: {
    src?: string
    alt?: string
    size?: 24 | 32 | 48
    icon?: React.ReactNode
    paymentIcon?: boolean
  }
  label?: {
    text: string
    variant?: "recommended" | "best-value"
    size?: "large" | "small"
  }
  showSubtitleInfo?: boolean

  // Actions
  primaryAction?: {
    label: string
    onClick?: () => void
    variant?: "primary" | "secondary" | "text"
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
    variant?: "primary" | "secondary" | "text"
  }

  // Actionable card specific
  actions?: Array<{
    icon?: React.ReactNode
    onClick?: () => void
    label?: string
  }>

  // Layout
  alignment?: "left" | "right" | "center"
  width?: "regular" | "compact"

  // Interaction
  onSelect?: () => void
  clickableArea?: "full" | "button-only"

  // Error handling
  errorMessage?: string

  // Children
  children?: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "selectable",
      title,
      subtitle,
      bodyText,
      noteText,
      state = "normal",
      thumbnail,
      label,
      showSubtitleInfo = false,
      primaryAction,
      secondaryAction,
      actions,
      alignment = "left",
      width = "regular",
      onSelect,
      clickableArea = "full",
      errorMessage,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = state === "disabled"
    const isSelected = state === "selected"
    const isError = state === "error"
    const isClickable = (variant === "selectable" || variant === "actionable") && clickableArea === "full"

    const getCardStyles = () => {
      const baseStyles = cn(
        "relative rounded-lg border-2 p-4 transition-all duration-200",
        width === "compact" ? "max-w-xs" : "w-full",
      )

      if (isDisabled) {
        return cn(baseStyles, "border-stroke-boundary bg-background-disabled cursor-not-allowed opacity-60")
      }

      if (isError) {
        return cn(baseStyles, "border-content-negative bg-background-base")
      }

      if (isSelected) {
        return cn(baseStyles, "border-core-primary1 bg-background-interactive-tint")
      }

      if (isClickable) {
        return cn(
          baseStyles,
          "border-stroke-boundary bg-background-base hover:border-stroke-interactive hover:bg-background-interactive-tint cursor-pointer",
        )
      }

      return cn(baseStyles, "border-stroke-boundary bg-background-base")
    }

    const getTextColor = () => {
      if (isDisabled) return "text-content-subdued"
      return "text-content-primary"
    }

    const getAlignmentClasses = () => {
      switch (alignment) {
        case "right":
          return "text-right items-end"
        case "center":
          return "text-center items-center"
        default:
          return "text-left items-start"
      }
    }

    const handleClick = () => {
      if (!isDisabled && isClickable && onSelect) {
        onSelect()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && !isDisabled && isClickable && onSelect) {
        e.preventDefault()
        onSelect()
      }
    }

    // FIXED: Added the return statement that was missing in v7
    return (
      <div
        ref={ref}
        className={cn(getCardStyles(), className)}
        onClick={handleClick}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable && !isDisabled ? 0 : undefined}
        aria-selected={isSelected}
        aria-disabled={isDisabled}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Label */}
        {label && (
          <div className="absolute -top-3 left-4">
            <CardLabel variant={label.variant} size={label.size} selected={isSelected}>
              {label.text}
            </CardLabel>
          </div>
        )}

        {/* If children are provided, render them directly */}
        {children}

        {/* Otherwise, render the structured card content */}
        {!children && (
          <div className={cn("space-y-3 flex flex-col", getAlignmentClasses())}>
            {/* Header with thumbnail, title and subtitle */}
            {(title || thumbnail) && (
              <div className={cn("flex items-start gap-3", alignment === "right" && "flex-row-reverse")}>
                {/* Thumbnail */}
                {thumbnail && <CardThumbnail {...thumbnail} />}

                <div className={cn("flex-1 min-w-0", alignment === "right" && "text-right")}>
                  {/* Title and subtitle row */}
                  {title && (
                    <div
                      className={cn("flex items-center gap-2", alignment === "right" && "flex-row-reverse justify-end")}
                    >
                      <h3 className={cn("text-large-callout truncate", getTextColor())}>{title}</h3>

                      {subtitle && (
                        <div
                          className={cn(
                            "flex items-center gap-1 flex-shrink-0",
                            alignment === "right" && "flex-row-reverse",
                          )}
                        >
                          <span className={cn("text-large-callout", getTextColor())}>
                            {typeof subtitle === "number" ? subtitle : subtitle}
                          </span>
                          {showSubtitleInfo && <Info className="h-4 w-4 text-content-interactive flex-shrink-0" />}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Body text */}
            {bodyText && (
              <p className={cn("text-middle-reg", isDisabled ? "text-content-subdued" : "text-content-secondary")}>
                {bodyText}
              </p>
            )}

            {/* Note text */}
            {noteText && <p className={cn("text-small-reg text-content-subdued")}>{noteText}</p>}

            {/* Error message */}
            {isError && errorMessage && <p className="text-small-reg text-content-negative">{errorMessage}</p>}

            {/* Actions */}
            {(primaryAction || secondaryAction || actions) && (
              <div
                className={cn(
                  "flex gap-2 pt-2",
                  alignment === "center" && "justify-center",
                  alignment === "right" && "justify-end",
                  alignment === "left" && "justify-start",
                )}
              >
                {/* Actionable card actions (icons) */}
                {variant === "actionable" && actions && (
                  <div className="flex gap-2">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={action.onClick}
                        className="h-8 w-8 p-0"
                        disabled={isDisabled}
                      >
                        {action.icon}
                        <span className="sr-only">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                )}

                {/* Primary and secondary actions */}
                {primaryAction && (
                  <Button
                    variant={primaryAction.variant === "text" ? "ghost" : primaryAction.variant || "primary"}
                    size="sm"
                    onClick={primaryAction.onClick}
                    disabled={isDisabled}
                    className={cn(
                      primaryAction.variant === "text" && "text-core-primary1 hover:text-core-primary1",
                      alignment === "center" && "w-full",
                    )}
                  >
                    {primaryAction.label}
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    variant={secondaryAction.variant === "text" ? "ghost" : secondaryAction.variant || "secondary"}
                    size="sm"
                    onClick={secondaryAction.onClick}
                    disabled={isDisabled}
                    className={cn(secondaryAction.variant === "text" && "text-core-primary1 hover:text-core-primary1")}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  },
)
Card.displayName = "Card"

export { Card, CardLabel, CardThumbnail }
