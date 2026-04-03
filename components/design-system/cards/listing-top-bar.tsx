"use client"

import { Clock, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TopBarProps } from "./types"

const TopBar = ({ timestamp, spotlight, className }: TopBarProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {timestamp && (
        <div className="flex items-center gap-1 text-content-subdued">
          <Clock className="h-3 w-3" />
          <span className="text-tiny-reg">{timestamp}</span>
        </div>
      )}
      {spotlight && (
        <div className="flex items-center gap-1 text-content-warning">
          <Zap className="h-3 w-3 fill-current" />
          <span className="text-tiny-reg font-medium">Spotlight</span>
        </div>
      )}
    </div>
  )
}

export { TopBar }
