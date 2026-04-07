"use client"

import { cn } from "@/lib/utils"

interface BotAvatarProps {
  className?: string
}

export function BotAvatar({ className }: BotAvatarProps) {
  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full bg-background-interactive-tint flex items-center justify-center flex-shrink-0",
        className,
      )}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-content-interactive">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
