import * as React from "react"

// Listing Status types
export interface ListingStatusProps {
  status: "active" | "sold" | "pending" | "draft" | "expired"
  className?: string
}

// Top Bar types
export interface TopBarProps {
  timestamp?: string
  spotlight?: boolean
  className?: string
}

// Main Listing Card types
export interface ListingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Card variant
  variant?: "listing" | "product"

  // Layout
  layout?: "list" | "gallery" | "grid"
  viewType?: "buyer" | "seller"

  // Content
  title: string
  price?: string | number
  location?: string
  description?: string

  // Media
  images?: string[]
  thumbnail?: string

  // Status and metadata
  status?: "active" | "sold" | "pending" | "draft" | "expired"
  timestamp?: string
  spotlight?: boolean

  // Program type
  programType?: "empty" | "buyer-protection" | "certified"

  // Product specific (for variant="product")
  stockCount?: number
  colorDots?: string[]
  certifiedTag?: boolean

  // Listing specific
  rating?: number
  reviewCount?: number
  sellerName?: string
  sellerAvatar?: string

  // Actions
  onFavorite?: () => void
  onShare?: () => void
  onMore?: () => void
  onContact?: () => void

  // States
  isFavorited?: boolean
  isSelected?: boolean

  // Interaction
  onClick?: () => void
}

// Hot Item Card types
export interface HotItemCardProps {
  title: string
  searchCount: number
  imageSrc: string
  onListClick: () => void
}
