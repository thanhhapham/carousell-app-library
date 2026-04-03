"use client"
import { cn } from "@/lib/utils"
import { Button } from "../button"

interface ChatCellProps {
  message: string
  timestamp?: string
  isOutgoing?: boolean
  isRead?: boolean
  showAvatar?: boolean
  avatarSrc?: string
  showCTA?: boolean
  ctaText?: string
  onCTAClick?: () => void
  className?: string
  isGrouped?: boolean
}

export function ChatCell({
  message,
  timestamp,
  isOutgoing = false,
  isRead = false,
  showAvatar = true,
  avatarSrc,
  showCTA = false,
  ctaText,
  onCTAClick,
  className,
  isGrouped = false,
}: ChatCellProps) {
  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-2",
        isOutgoing ? "flex-row-reverse" : "flex-row",
        isGrouped && "pt-1",
        className,
      )}
    >
      {/* Avatar */}
      {showAvatar && !isGrouped && (
        <div className="w-8 h-8 rounded-full bg-core-primary2 flex-shrink-0 overflow-hidden">
          {avatarSrc ? (
            <img src={avatarSrc || "/placeholder.svg"} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-core-primary2" />
          )}
        </div>
      )}

      {/* Spacer for grouped messages */}
      {isGrouped && !showAvatar && <div className="w-8" />}

      {/* Message Content */}
      <div className={cn("max-w-[70%] flex flex-col", isOutgoing ? "items-end" : "items-start")}>
        <div
          className={cn(
            "px-4 py-3 rounded-2xl",
            isOutgoing
              ? "bg-background-input text-content-primary rounded-br-md"
              : "bg-transparent border border-stroke-boundary text-content-primary rounded-bl-md",
          )}
        >
          <p className="text-middle-reg whitespace-pre-wrap">{message}</p>

          {showCTA && ctaText && (
            <Button
              variant="text"
              size="sm"
              onClick={onCTAClick}
              className="mt-2 p-0 h-auto text-core-primary2 hover:text-core-primary2-hover"
            >
              {ctaText}
            </Button>
          )}
        </div>

        {/* Timestamp and Read Status */}
        {timestamp && (
          <div
            className={cn(
              "flex items-center gap-1 mt-1 text-small-reg text-content-secondary",
              isOutgoing ? "flex-row-reverse" : "flex-row",
            )}
          >
            <span>{timestamp}</span>
            {isOutgoing && (
              <div
                className={cn(
                  "w-4 h-4 rounded-full border-2",
                  isRead ? "bg-core-primary2 border-core-primary2" : "border-content-secondary",
                )}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
