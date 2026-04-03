"use client"

import { Heart, MoreHorizontal, Star, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "../button"
import { ListingStatus } from "./listing-status"
import { TopBar } from "./listing-top-bar"
import type { ListingCardProps } from "./types"

interface ListingCardListProps {
  props: ListingCardProps
}

const ListingCardList = ({ props }: ListingCardListProps) => {
  const {
    variant = "listing",
    viewType = "buyer",
    title,
    price,
    location,
    description,
    images = [],
    thumbnail,
    status = "active",
    timestamp,
    spotlight = false,
    stockCount,
    colorDots = [],
    certifiedTag = false,
    rating,
    reviewCount,
    sellerName,
    sellerAvatar,
    onFavorite,
    onMore,
    onContact,
    isFavorited = false,
  } = props

  const mainImage = thumbnail || images[0] || "/placeholder.svg?height=200&width=300"

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <img src={mainImage || "/placeholder.svg"} alt={title} className="w-24 h-24 object-cover rounded-lg" />
        {status && status !== "active" && (
          <div className="absolute top-2 left-2">
            <ListingStatus status={status} />
          </div>
        )}
        {certifiedTag && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-content-positive text-content-on-dark text-tiny-reg">Certified</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        {(timestamp || spotlight) && <TopBar timestamp={timestamp} spotlight={spotlight} className="mb-2" />}

        {/* Title and Like button */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-large-callout text-content-primary font-medium truncate flex-1">{title}</h3>
          {viewType === "buyer" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onFavorite?.()
              }}
              className="h-8 w-8 p-0"
            >
              <Heart className={cn("h-4 w-4", isFavorited && "fill-content-negative text-content-negative")} />
            </Button>
          )}
        </div>

        {/* Price - vertically stacked, biggest font */}
        {price && (
          <div className="text-middle-callout text-content-primary font-semibold mb-2">
            {typeof price === "number" ? `$${price.toLocaleString()}` : price}
          </div>
        )}

        {/* Other attributes */}
        <div className="space-y-1">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-content-subdued" />
              <span className="text-small-reg text-content-subdued">{location}</span>
            </div>
          )}

          {description && <p className="text-middle-reg text-content-secondary line-clamp-2">{description}</p>}

          {/* Product specific elements */}
          {variant === "product" && (
            <div className="flex items-center gap-3">
              {stockCount && <span className="text-small-reg text-content-subdued">{stockCount} in stock</span>}
              {colorDots.length > 0 && (
                <div className="flex gap-1">
                  {colorDots.map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border border-stroke-boundary"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  {colorDots.length > 3 && (
                    <span className="text-tiny-reg text-content-subdued ml-1">+{colorDots.length - 3}</span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Seller info and rating */}
          <div className="flex items-center gap-2">
            {sellerAvatar && (
              <img
                src={sellerAvatar || "/placeholder.svg"}
                alt={sellerName}
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            {sellerName && <span className="text-small-reg text-content-secondary">{sellerName}</span>}
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-content-warning text-content-warning" />
                <span className="text-small-reg text-content-secondary">
                  {rating}
                  {reviewCount && ` (${reviewCount})`}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-3">
          {onContact && (
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onContact()
              }}
            >
              Contact
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onMore?.()
            }}
            className="h-8 w-8 p-0"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ListingCardList }
