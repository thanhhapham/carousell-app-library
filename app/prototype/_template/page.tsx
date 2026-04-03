"use client"

import { useState } from "react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav"
import { Button } from "@/components/design-system/button"
import { mockListings } from "@/lib/mock-data"
import { ListingCard } from "@/components/design-system/cards"

/**
 * TEMPLATE: Interactive Prototype
 *
 * Replace this with your prototype. Key imports:
 *
 * Layout:     import { PrototypeLayout } from "@/components/design-system/prototype-layout"
 * Navigation: import { TopNav } from "@/components/design-system/top-nav"
 *             import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
 * Cards:      import { ListingCard } from "@/components/design-system/cards"
 * Inputs:     import { TextInput } from "@/components/design-system/input/text-input"
 * Data:       import { mockListings, mockInboxChats } from "@/lib/mock-data"
 *
 * Design tokens: bg-background-base, text-content-primary, border-stroke-boundary
 * Typography:    text-title-1, text-large-callout, text-middle-reg, text-small-reg
 *
 * See AI_INSTRUCTIONS.md for full conventions.
 */

export default function PrototypeTemplate() {
  const [count, setCount] = useState(0)

  return (
    <PrototypeLayout
      topNav={
        <TopNav
          title="Prototype Template"
          onBack={() => console.log("Back")}
        />
      }
    >
      {/* Hero */}
      <div className="p-4">
        <div className="bg-background-display rounded-lg p-6 text-center mb-4">
          <h1 className="text-title-2 text-content-primary mb-2">
            Replace This Template
          </h1>
          <p className="text-middle-reg text-content-secondary">
            Start building your prototype here.
          </p>
        </div>

        {/* Interactive example */}
        <div className="bg-background-base border border-stroke-boundary rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-middle-reg text-content-secondary">Counter</span>
            <span className="text-title-2 text-content-primary">{count}</span>
          </div>
          <Button onClick={() => setCount(count + 1)} className="w-full">
            Increment
          </Button>
        </div>

        {/* Example listing cards from mock data */}
        <h2 className="text-large-callout text-content-primary mb-3">
          Sample Listings
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {mockListings.slice(0, 4).map((listing) => (
            <ListingCard
              key={listing.id}
              title={listing.title}
              price={listing.price}
              location={listing.location}
              images={listing.images}
              layout="grid"
              isFavorited={listing.isFavorited}
              onClick={() => console.log("Clicked:", listing.id)}
            />
          ))}
        </div>
      </div>
    </PrototypeLayout>
  )
}
