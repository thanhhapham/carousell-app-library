"use client"
import { Button } from "../button"
import { cn } from "@/lib/utils"

interface BottomBarTaskProps {
  primaryText?: string
  secondaryText?: string
  helpText?: string
  primaryButton: {
    text: string
    onClick: () => void
    disabled?: boolean
  }
  secondaryButton?: {
    text: string
    onClick: () => void
    disabled?: boolean
  }
  textButton?: {
    text: string
    onClick: () => void
  }
  showCheckbox?: boolean
  checkboxChecked?: boolean
  onCheckboxChange?: (checked: boolean) => void
  className?: string
}

export function BottomBarTask({
  primaryText,
  secondaryText,
  helpText,
  primaryButton,
  secondaryButton,
  textButton,
  showCheckbox = false,
  checkboxChecked = false,
  onCheckboxChange,
  className,
}: BottomBarTaskProps) {
  return (
    <div
      className={cn(
        "sticky bottom-0 left-0 right-0 bg-background-base border-t border-stroke-boundary p-4 space-y-4",
        className,
      )}
    >
      {/* Text content */}
      {(primaryText || secondaryText || helpText) && (
        <div className="space-y-1">
          {primaryText && <p className="text-large-reg text-content-primary">{primaryText}</p>}
          {secondaryText && <p className="text-middle-reg text-content-secondary">{secondaryText}</p>}
          {helpText && <p className="text-small-reg text-content-subdued">{helpText}</p>}
        </div>
      )}

      {/* Checkbox */}
      {showCheckbox && (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={(e) => onCheckboxChange?.(e.target.checked)}
            className="w-4 h-4 text-core-primary1 bg-background-base border-stroke-input rounded focus:ring-stroke-halo-focused focus:ring-2"
          />
          <span className="text-middle-reg text-content-primary">I agree to Terms and Conditions</span>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {secondaryButton && (
          <Button
            variant="text"
            onClick={secondaryButton.onClick}
            disabled={secondaryButton.disabled}
            className="flex-1"
          >
            {secondaryButton.text}
          </Button>
        )}
        <Button
          variant="primary"
          primaryVariant="task"
          onClick={primaryButton.onClick}
          disabled={primaryButton.disabled}
          className="flex-1"
        >
          {primaryButton.text}
        </Button>
      </div>

      {/* Text button */}
      {textButton && (
        <div className="text-center">
          <button
            onClick={textButton.onClick}
            className="text-small-callout text-content-interactive hover:text-content-interactive-strong hover:underline"
          >
            {textButton.text}
          </button>
        </div>
      )}

      {/* Home indicator */}
      <div className="flex justify-center pt-2">
        <div className="w-32 h-1 bg-content-subdued rounded-full"></div>
      </div>
    </div>
  )
}
