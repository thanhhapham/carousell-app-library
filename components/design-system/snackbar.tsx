"use client"

import { useEffect, useState } from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface SnackbarProps {
  message: string
  secondaryMessage?: string
  buttonText?: string
  onButtonClick?: () => void
  onDismiss?: () => void
  autoHideDuration?: number
  loading?: boolean
  className?: string
}

export function Snackbar({
  message,
  secondaryMessage,
  buttonText,
  onButtonClick,
  onDismiss,
  autoHideDuration = 6000,
  loading = false,
  className,
}: SnackbarProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setVisible(false)
        onDismiss?.()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }
  }, [autoHideDuration, onDismiss])

  if (!visible) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm",
        "bg-content-primary text-white rounded-lg shadow-lg",
        "flex items-center justify-between p-4 gap-3",
        className,
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{message}</p>
        {secondaryMessage && <p className="text-xs opacity-90 mt-1">{secondaryMessage}</p>}
      </div>

      {buttonText && (
        <Button
          size="small"
          variant="text"
          textVariant="teal"
          onClick={onButtonClick}
          loading={loading}
          className="text-teal-400 hover:text-teal-300"
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}
