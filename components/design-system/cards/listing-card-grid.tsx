"use client"

import { Heart, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { TagBadge } from "@/components/design-system/badge"
import { Button } from "../button"
import { ListingStatus } from "./listing-status"
import type { ListingCardProps } from "./types"

interface ListingCardGridProps {
  props: ListingCardProps
}

const ListingCardGrid = ({ props }: ListingCardGridProps) => {
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
    programType = "empty",
    stockCount,
    colorDots = [],
    rating,
    sellerName,
    onFavorite,
    onContact,
    isFavorited = false,
  } = props

  const mainImage = thumbnail || images[0] || "/placeholder.svg?height=200&width=300"

  return (
    <div>
      {/* Image with 1:1 aspect ratio */}
      <div className="relative mb-3 aspect-square">
        <img src={mainImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-lg" />

        {/* Timestamp/Spotlight at top left */}
        <div className="absolute top-2 left-2">
          {spotlight ? (
            <TagBadge variant="spotlight" size="small">
              Spotlight
            </TagBadge>
          ) : timestamp ? (
            <div className="px-2 py-1 rounded text-tiny-reg text-content-primary">{timestamp}</div>
          ) : null}
        </div>

        {/* Program type tags at bottom left */}
        {programType !== "empty" && (
          <div className="absolute bottom-2 left-2">
            {programType === "buyer-protection" && (
              <TagBadge variant="buyer-protection" size="small">
                Buyer Protection
              </TagBadge>
            )}
            {programType === "certified" && (
              <TagBadge variant="certified" size="small">
                Certified
              </TagBadge>
            )}
          </div>
        )}

        {/* Listing status at bottom, full width */}
        {status && status !== "active" && (
          <div className="absolute bottom-0 left-0 right-0">
            <ListingStatus status={status} className="w-full rounded-none rounded-b-lg" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Title and Like button on same row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-small-callout text-content-primary font-medium line-clamp-2 flex-1">{title}</h3>
          {viewType === "buyer" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onFavorite?.()
              }}
              className="h-6 w-6 p-0 flex-shrink-0"
            >
              <Heart className={cn("h-4 w-4", isFavorited && "fill-content-negative text-content-negative")} />
            </Button>
          )}
        </div>

        {/* Price */}
        {price && (
          <div className="text-large-callout text-content-primary font-semibold">
            {typeof price === "number" ? `$${price.toLocaleString()}` : price}
          </div>
        )}

        {/* Other attributes in horizontal layout with dots */}
        <div className="flex flex-wrap items-center gap-1 text-small-reg text-content-secondary">
          {location && <span>{location}</span>}
          {location && sellerName && <span>·</span>}
          {sellerName && <span>{sellerName}</span>}
          {(location || sellerName) && rating && <span>·</span>}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-content-warning text-content-warning" />
              <span>{rating}</span>
            </div>
          )}
          {variant === "product" && stockCount && (
            <>
              <span>·</span>
              <span>{stockCount} left</span>
            </>
          )}
        </div>

        {/* Color dots for product variant */}
        {variant === "product" && colorDots.length > 0 && (
          <div className="flex gap-1">
            {colorDots.slice(0, 3).map((color, index) => (
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

        {/* CTA Button */}
        {onContact && (
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onContact()
            }}
            className="w-full mt-3"
          >
            Contact
          </Button>
        )}
      </div>
    </div>
  )
}

export { ListingCardGrid }
