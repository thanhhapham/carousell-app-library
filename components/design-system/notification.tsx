"use client"

import { cn } from "@/lib/utils"

interface NotificationProps {
  avatar?: string
  title: string
  subtitle?: string
  timestamp?: string
  image?: string
  unread?: boolean
  onClick?: () => void
  className?: string
}

export function Notification({
  avatar,
  title,
  subtitle,
  timestamp,
  image,
  unread = false,
  onClick,
  className,
}: NotificationProps) {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b border-stroke-input last:border-b-0",
        unread && "bg-blue-50",
        className,
      )}
      onClick={onClick}
    >
      {/* Avatar */}
      {avatar && (
        <div className="flex-shrink-0">
          <img src={avatar || "/placeholder.svg"} alt="" className="w-10 h-10 rounded-full object-cover" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className={cn("text-sm text-content-primary", unread && "font-medium")}>{title}</p>
            {subtitle && <p className="text-sm text-content-secondary mt-1">{subtitle}</p>}
          </div>

          {timestamp && <span className="text-xs text-content-secondary flex-shrink-0">{timestamp}</span>}
        </div>

        {/* Image */}
        {image && (
          <div className="mt-2">
            <img src={image || "/placeholder.svg"} alt="" className="w-full max-w-48 h-24 object-cover rounded-lg" />
          </div>
        )}
      </div>

      {/* Unread indicator */}
      {unread && <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />}
    </div>
  )
}
