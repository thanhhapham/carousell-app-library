"use client"
import { cn } from "@/lib/utils"

interface InboxRowProps {
  username: string
  listingTitle: string
  lastMessage: string
  timestamp: string
  isUnread?: boolean
  isSelected?: boolean
  offerStatus?: "accepted" | "offered" | "declined"
  offerAmount?: string
  thumbnailSrc?: string
  avatarSrc?: string
  onSelect?: () => void
  className?: string
  variant?: "light" | "dark"
}

export function InboxRow({
  username,
  listingTitle,
  lastMessage,
  timestamp,
  isUnread = false,
  isSelected = false,
  offerStatus,
  offerAmount,
  thumbnailSrc,
  avatarSrc,
  onSelect,
  className,
  variant = "light",
}: InboxRowProps) {
  const isDark = variant === "dark"

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-4 cursor-pointer transition-colors",
        isDark ? "bg-background-dark hover:bg-background-dark-hover" : "bg-background-base hover:bg-background-display",
        isSelected && "bg-background-interactive-tint",
        isUnread && "border-l-4 border-core-primary2",
        className,
      )}
      onClick={onSelect}
    >
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-core-primary2 flex-shrink-0 overflow-hidden">
        {avatarSrc ? (
          <img src={avatarSrc || "/placeholder.svg"} alt={username} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-core-primary2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-middle-med truncate",
                isDark ? "text-content-on-dark" : "text-content-primary",
                isUnread && "font-bold",
              )}
            >
              {username}
            </span>
            {isUnread && <div className="w-2 h-2 bg-core-primary2 rounded-full flex-shrink-0" />}
          </div>
          <span
            className={cn(
              "text-small-reg flex-shrink-0",
              isDark ? "text-content-secondary-dark" : "text-content-secondary",
            )}
          >
            {timestamp}
          </span>
        </div>

        <h4 className={cn("text-small-med truncate mb-1", isDark ? "text-content-on-dark" : "text-content-primary")}>
          {listingTitle}
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                "text-small-reg truncate",
                isDark ? "text-content-secondary-dark" : "text-content-secondary",
              )}
            >
              {lastMessage}
            </p>
            {offerStatus && offerAmount && (
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={cn(
                    "text-small-reg px-2 py-1 rounded-full",
                    offerStatus === "accepted" && "bg-core-success text-content-on-dark",
                    offerStatus === "offered" && "bg-core-warning text-content-on-dark",
                    offerStatus === "declined" && "bg-core-error text-content-on-dark",
                  )}
                >
                  {offerStatus.charAt(0).toUpperCase() + offerStatus.slice(1)}
                </span>
                <span
                  className={cn("text-small-reg", isDark ? "text-content-secondary-dark" : "text-content-secondary")}
                >
                  Offered you {offerAmount}
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail */}
          {thumbnailSrc && (
            <div className="w-12 h-12 rounded-lg bg-background-display flex-shrink-0 overflow-hidden ml-3">
              <img src={thumbnailSrc || "/placeholder.svg"} alt="Listing" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
