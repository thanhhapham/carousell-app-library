"use client"
import { ArrowLeft, AlertTriangle, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../button"

interface ChatHeaderProps {
  username: string
  isOnline?: boolean
  listingTitle?: string
  listingStatus?: "accepted" | "offered" | "declined"
  offerAmount?: string
  onBack?: () => void
  onMore?: () => void
  onAlert?: () => void
  className?: string
  showCTA?: boolean
  ctaButtons?: Array<{
    label: string
    variant: "primary" | "secondary"
    onClick?: () => void
  }>
}

export function ChatHeader({
  username,
  isOnline = false,
  listingTitle,
  listingStatus,
  offerAmount,
  onBack,
  onMore,
  onAlert,
  className,
  showCTA = false,
  ctaButtons = [
    { label: "Primary", variant: "primary" },
    { label: "Secondary 1", variant: "secondary" },
    { label: "Secondary 2", variant: "secondary" },
  ],
}: ChatHeaderProps) {
  return (
    <div className={cn("flex flex-col bg-background-base text-content-primary", className)}>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between p-4 border-b border-stroke-boundary">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-1 h-auto">
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-middle-med">{username}</span>
              {isOnline && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-core-success rounded-full" />
                  <span className="text-small-reg text-content-secondary">Online 9m ago</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onAlert} className="p-1 h-auto">
            <AlertTriangle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onMore} className="p-1 h-auto">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Listing Summary */}
      {listingTitle && (
        <div className="flex items-center gap-3 p-4 border-b border-stroke-boundary">
          <div className="w-12 h-12 bg-core-primary2 rounded-lg flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-middle-med truncate">{listingTitle}</h3>
            <div className="flex items-center gap-2 mt-1">
              {listingStatus && (
                <span
                  className={cn(
                    "text-small-reg px-2 py-1 rounded-full",
                    listingStatus === "accepted" && "bg-core-success text-content-on-dark",
                    listingStatus === "offered" && "bg-core-warning text-content-on-dark",
                    listingStatus === "declined" && "bg-core-error text-content-on-dark",
                  )}
                >
                  {listingStatus.charAt(0).toUpperCase() + listingStatus.slice(1)}
                </span>
              )}
              {offerAmount && <span className="text-small-reg text-content-secondary">Offered you {offerAmount}</span>}
            </div>
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      {showCTA && (
        <div className="flex gap-2 p-4">
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant === "primary" ? "primary" : "secondary"}
              size="sm"
              onClick={button.onClick}
              className="flex-1"
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
