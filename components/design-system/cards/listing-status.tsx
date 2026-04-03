"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { ListingStatusProps } from "./types"

const ListingStatus = ({ status, className }: ListingStatusProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return "bg-content-positive text-content-on-dark"
      case "sold":
        return "bg-content-negative text-content-on-dark"
      case "pending":
        return "bg-content-warning text-content-on-dark"
      case "draft":
        return "bg-content-subdued text-content-on-dark"
      case "expired":
        return "bg-stroke-boundary text-content-subdued"
      default:
        return "bg-background-display text-content-primary"
    }
  }

  return (
    <Badge className={cn("text-tiny-reg font-medium", getStatusStyles(), className)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

export { ListingStatus }
