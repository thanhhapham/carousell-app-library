import type React from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

// Base Badge Component
interface BadgeBaseProps {
  className?: string
  children?: React.ReactNode
}

function BadgeBase({ className, children }: BadgeBaseProps) {
  return <div className={cn("inline-flex items-center justify-center", className)}>{children}</div>
}

// Profile Badge
interface ProfileBadgeProps {
  icon?: LucideIcon
  label: string
  variant?: "admin" | "premium" | "verified" | "custom"
  className?: string
}

export function ProfileBadge({ icon: Icon, label, variant = "verified", className }: ProfileBadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "admin":
        return "bg-core-primary1 text-content-on-dark border-core-primary1"
      case "premium":
        return "bg-core-secondary text-content-on-dark border-core-secondary"
      case "verified":
        return "bg-core-success text-content-on-dark border-core-success"
      case "custom":
        return "bg-background-base text-content-primary border-stroke-boundary"
      default:
        return "bg-core-primary1 text-content-on-dark border-core-primary1"
    }
  }

  return (
    <BadgeBase className={cn("rounded-full border px-2 py-0.5 text-small-reg", getVariantClasses(), className)}>
      {Icon && <Icon className="mr-1 h-3 w-3" />}
      {label}
    </BadgeBase>
  )
}

// Notification Badge
interface NotificationBadgeProps {
  count?: number | "max"
  variant?: "high" | "medium"
  hasStroke?: boolean
  className?: string
}

export function NotificationBadge({ count, variant = "high", hasStroke = false, className }: NotificationBadgeProps) {
  const getVariantClasses = () => {
    const baseClasses =
      variant === "high"
        ? "bg-core-primary2 text-content-on-dark"
        : "bg-background-interactive-strong text-content-on-dark"

    return hasStroke ? `${baseClasses} border-2 border-background-base` : baseClasses
  }

  const getContent = () => {
    if (count === undefined) {
      return null
    }

    if (count === "max") {
      return variant === "high" ? "99+" : "99"
    }

    return count > 99 ? (variant === "high" ? "99+" : "99") : count
  }

  const content = getContent()
  const size = content === null ? "h-2 w-2" : content.toString().length > 1 ? "min-w-5 px-1" : "h-5 w-5"

  return (
    <BadgeBase
      className={cn(
        "rounded-full flex items-center justify-center text-tiny-reg font-medium",
        size,
        getVariantClasses(),
        className,
      )}
    >
      {content}
    </BadgeBase>
  )
}

// Tag Badge
interface TagBadgeProps {
  label?: string
  children?: React.ReactNode
  icon?: LucideIcon
  variant?:
    | "certified"
    | "buyer-protection"
    | "spotlight"
    | "preferred"
    | "generic-low"
    | "generic-medium"
    | "generic-high"
  size?: "small" | "medium"
  className?: string
}

export function TagBadge({
  label,
  children,
  icon: Icon,
  variant = "certified",
  size = "medium",
  className,
}: TagBadgeProps) {
  const content = children || label

  const getVariantClasses = () => {
    switch (variant) {
      case "certified":
        return "bg-branding-certified rounded-l-full rounded-r-md text-content-on-dark"
      case "buyer-protection":
        return "bg-background-inverse rounded-[4px] text-content-inverse"
      case "spotlight":
        return "bg-branding-spotlight rounded-[4px] text-content-on-dark"
      case "preferred":
        return "bg-core-primary2 rounded-[4px] text-content-on-dark"
      case "generic-low":
        return "bg-background-display rounded-full text-content-primary"
      case "generic-medium":
        return "bg-background-inverse rounded-full text-content-inverse"
      case "generic-high":
        return "bg-core-primary2 rounded-full text-content-on-dark"
      default:
        return "bg-branding-certified rounded-full text-content-on-dark"
    }
  }

  const getSizeClasses = () => {
    return size === "small" ? "px-2 py-0 text-tiny-reg" : "px-2 py-0.5 text-small-reg"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-medium",
        getSizeClasses(),
        getVariantClasses(),
        className,
      )}
    >
      {Icon && <Icon className="mr-1 h-3 w-3" />}
      {content}
    </div>
  )
}

// Add the Badge export alias
export const Badge = TagBadge
