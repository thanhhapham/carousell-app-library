import type React from "react"
import { Button } from "./button"
import { CoinIcon } from "./coin-icon"

interface WheelSegment {
  value: number | string
  type: "coin" | "text" | "icon"
  icon?: React.ReactNode
}

interface SpinWheelProps {
  segments: WheelSegment[]
  buttonText: string
  size?: number
  className?: string
}

export function SpinWheel({ segments, buttonText, size = 300, className = "" }: SpinWheelProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex flex-wrap justify-center items-center gap-4 max-w-sm">
        {/* Top row */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Free delivery</span>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">150</span>
            <CoinIcon size="small" />
          </div>
        </div>

        {/* Middle row */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">1</span>
            <CoinIcon size="small" />
          </div>

          <Button variant="primary" primaryVariant="task" className="bg-[#00A699] border-[#00A699] px-6">
            {buttonText}
          </Button>

          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">50</span>
            <CoinIcon size="small" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center gap-8">
          <div className="w-8 h-6 bg-green-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">$</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">5</span>
            <CoinIcon size="small" />
          </div>
        </div>

        {/* Bottom most row */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">50</span>
            <CoinIcon size="small" />
          </div>

          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">50</span>
            <CoinIcon size="small" />
          </div>
        </div>
      </div>
    </div>
  )
}
