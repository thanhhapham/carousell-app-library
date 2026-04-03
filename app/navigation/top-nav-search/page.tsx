"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { TopNavSearch } from "@/components/design-system/top-nav/search"

export default function TopNavSearchPage() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <ComponentPage
      title="Top Nav / Search"
      description="Search-focused top navigation provides users with quick access to search functionality. It adapts to different interaction states and contexts with various input configurations."
    >
      <VariantSection title="Search States">
        <VariantCard
          name="Default State"
          description="Initial search state with search icon and placeholder."
          code='variant="default"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNavSearch variant="default" placeholder="Search" value={searchValue} onValueChange={setSearchValue} />
          </div>
        </VariantCard>

        <VariantCard
          name="With Back Arrow"
          description="Search with back navigation for hierarchical contexts."
          code='variant="with-back"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNavSearch variant="with-back" placeholder="Search" onBack={() => console.log("Back clicked")} />
          </div>
        </VariantCard>

        <VariantCard name="Typing State" description="Active search state when user is typing." code='variant="typing"'>
          <div className="border rounded-lg overflow-hidden">
            <TopNavSearch
              variant="typing"
              placeholder="Search"
              value="Searching..."
              onBack={() => console.log("Back clicked")}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Typed State"
          description="Search state with entered text and clear option."
          code='variant="typed"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNavSearch
              variant="typed"
              placeholder="Search"
              value="Search query"
              onBack={() => console.log("Back clicked")}
              onClear={() => console.log("Clear clicked")}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Vertical State"
          description="Search with additional filter options below."
          code='variant="vertical"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNavSearch variant="vertical" placeholder="Search" onBack={() => console.log("Back clicked")} />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Search state
                  variant
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">placeholder</code> - Input
                  placeholder text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Current search
                  value
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onValueChange</code> - Search
                  value change handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onBack</code> - Back button
                  click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClear</code> - Clear button
                  click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onSearch</code> - Search
                  submit handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showCart</code> - Show cart
                  icon (default: true)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">cartCount</code> - Cart item
                  count
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onCartClick</code> - Cart
                  click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showMore</code> - Show more
                  actions (default: true)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onMoreClick</code> - More
                  actions click handler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>

      <VariantSection title="Usage Guidelines">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Search States:</strong> Use appropriate variants based on user
            interaction - default for initial state, typing for active input, typed for entered text.
          </p>
          <p>
            <strong className="text-content-primary">Navigation Context:</strong> Include back button when search is
            accessed from another screen or context.
          </p>
          <p>
            <strong className="text-content-primary">Vertical Variant:</strong> Use when additional filter options or
            categories need to be displayed below the search input.
          </p>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
