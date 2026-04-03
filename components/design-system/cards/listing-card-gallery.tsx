"use client"

import { Heart, Star, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "../button"
import { ListingStatus } from "./listing-status"
import { TopBar } from "./listing-top-bar"
import type { ListingCardProps } from "./types"

interface ListingCardGalleryProps {
  props: ListingCardProps
}

const ListingCardGallery = ({ props }: ListingCardGalleryProps) => {
  const {
    variant = "listing",
    viewType = "buyer",
    title,
    price,
    location,
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
    onContact,
    isFavorited = false,
  } = props

  const mainImage = thumbnail || images[0] || "/placeholder.svg?height=200&width=300"

  return (
    <div>
      {/* Image - no buttons on image */}
      <div className="relative mb-3">
        <img src={mainImage || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-lg" />

        {/* Overlays */}
        <div className="absolute top-2 left-2 flex gap-2">
          {status && status !== "active" && <ListingStatus status={status} />}
          {certifiedTag && (
            <Badge className="bg-content-positive text-content-on-dark text-tiny-reg">Certified</Badge>
          )}
        </div>

        {/* Top bar */}
        {(timestamp || spotlight) && (
          <div className="absolute top-2 right-2">
            <TopBar timestamp={timestamp} spotlight={spotlight} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Title and Like button */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-large-callout text-content-primary font-medium line-clamp-2 flex-1">{title}</h3>
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

        {/* Price - first attribute, title 3 style, left aligned */}
        {price && (
          <div className="text-title3 text-content-primary font-semibold">
            {typeof price === "number" ? `$${price.toLocaleString()}` : price}
          </div>
        )}

        {/* Location */}
        {location && (
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-content-subdued" />
            <span className="text-small-reg text-content-subdued">{location}</span>
          </div>
        )}

        {/* Product specific elements */}
        {variant === "product" && (
          <div className="flex items-center gap-3">
            {stockCount && <span className="text-small-reg text-content-subdued">{stockCount} in stock</span>}
            {colorDots.length > 0 && (
              <div className="flex gap-1">
                {colorDots.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-stroke-boundary"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {colorDots.length > 4 && (
                  <span className="text-tiny-reg text-content-subdued ml-1">+{colorDots.length - 4}</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Seller info */}
        <div className="flex items-center justify-between">
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
        </div>
      </div>
    </div>
  )
}

export { ListingCardGallery }
