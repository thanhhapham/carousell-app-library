"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface VoucherProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  iconColor?: string
  className?: string
  onClick?: () => void
}

const Voucher = React.forwardRef<HTMLDivElement, VoucherProps>(
  ({ title, subtitle, icon, iconColor = "text-content-positive", className, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 p-4 bg-background-base rounded-lg border border-stroke-boundary",
          onClick && "cursor-pointer hover:bg-background-display transition-colors",
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {/* Icon */}
        {icon && <div className={cn("flex-shrink-0", iconColor)}>{icon}</div>}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="text-middle-callout text-content-primary font-medium">{title}</div>
          {subtitle && <div className="text-small-reg text-content-subdued">{subtitle}</div>}
        </div>
      </div>
    )
  },
)
Voucher.displayName = "Voucher"

export { Voucher }
