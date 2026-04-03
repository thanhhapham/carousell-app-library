"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ListingCardGrid } from "./listing-card-grid"
import { ListingCardList } from "./listing-card-list"
import { ListingCardGallery } from "./listing-card-gallery"
import type { ListingCardProps } from "./types"

const ListingCard = React.forwardRef<HTMLDivElement, ListingCardProps>(
  (
    {
      className,
      layout = "list",
      isSelected = false,
      onClick,
      ...restProps
    },
    ref,
  ) => {
    const allProps = { className, layout, isSelected, onClick, ...restProps }

    const getCardStyles = () => {
      const baseStyles = "bg-background-base rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"

      if (isSelected) {
        return cn(baseStyles, "border-core-primary1 bg-background-interactive-tint")
      }

      if (onClick) {
        return cn(baseStyles, "cursor-pointer hover:border-stroke-interactive")
      }

      return baseStyles
    }

    const isGridView = layout === "grid"
    const isGalleryView = layout === "gallery"

    return (
      <div ref={ref} className={cn(getCardStyles(), className)} onClick={onClick} {...restProps}>
        {isGridView ? (
          <ListingCardGrid props={allProps} />
        ) : isGalleryView ? (
          <ListingCardGallery props={allProps} />
        ) : (
          <ListingCardList props={allProps} />
        )}
      </div>
    )
  },
)
ListingCard.displayName = "ListingCard"

export { ListingCard }
