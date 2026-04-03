"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { ListingCard } from "@/components/design-system/listing-card"

export default function ListingCardPage() {
  const [favoriteStates, setFavoriteStates] = useState<Record<string, boolean>>({})

  const toggleFavorite = (id: string) => {
    setFavoriteStates((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <ComponentPage
      title="Listing Card"
      description="Listing card is the component we use to show items on our app. As a buyer you can see important information about the item at a glance. As a seller, you can take actions on your item easily."
    >
      <VariantSection title="Card Types">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VariantCard
            name="Listing Card"
            description="Used for general item listings with buyer and seller views."
            code='variant="listing"'
          >
            <ListingCard
              variant="listing"
              title="iPhone 14 Pro Max"
              price={1299}
              location="San Francisco"
              thumbnail="/placeholder.svg?height=200&width=300"
              status="active"
              timestamp="2h ago"
              rating={4.8}
              reviewCount={127}
              sellerName="John Doe"
              sellerAvatar="/placeholder.svg?height=32&width=32"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["listing-1"]}
              onFavorite={() => toggleFavorite("listing-1")}
              onContact={() => console.log("Contact seller")}
            />
          </VariantCard>

          <VariantCard
            name="Product Card"
            description="Used for certified items grouped into the same product."
            code='variant="product"'
          >
            <ListingCard
              variant="product"
              title="iPhone 14 Pro Max"
              price="From $1,299"
              stockCount={5}
              colorDots={["#1f2937", "#3b82f6", "#ef4444", "#10b981"]}
              thumbnail="/placeholder.svg?height=200&width=300"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["product-1"]}
              onFavorite={() => toggleFavorite("product-1")}
              onContact={() => console.log("Contact seller")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Tag Variants">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VariantCard
            name="Timestamp"
            description="Shows how long ago the listing was posted."
            code='timestamp="2h ago"'
          >
            <ListingCard
              variant="listing"
              title="MacBook Pro"
              price={1999}
              location="New York"
              thumbnail="/placeholder.svg?height=200&width=300"
              timestamp="2h ago"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["tag-1"]}
              onFavorite={() => toggleFavorite("tag-1")}
            />
          </VariantCard>

          <VariantCard
            name="Spotlight"
            description="Highlights premium listings with spotlight tag."
            code="spotlight={true}"
          >
            <ListingCard
              variant="listing"
              title="Tesla Model 3"
              price={45999}
              location="Austin"
              thumbnail="/placeholder.svg?height=200&width=300"
              spotlight={true}
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["tag-2"]}
              onFavorite={() => toggleFavorite("tag-2")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Program Type">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <VariantCard name="Empty" description="No program type tag displayed." code='programType="empty"'>
            <ListingCard
              variant="listing"
              title="Standard Item"
              price={999}
              location="Seattle"
              thumbnail="/placeholder.svg?height=200&width=300"
              programType="empty"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["program-1"]}
              onFavorite={() => toggleFavorite("program-1")}
            />
          </VariantCard>

          <VariantCard
            name="Buyer Protection"
            description="Shows buyer protection tag at bottom left."
            code='programType="buyer-protection"'
          >
            <ListingCard
              variant="listing"
              title="Protected Item"
              price={1299}
              location="Portland"
              thumbnail="/placeholder.svg?height=200&width=300"
              programType="buyer-protection"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["program-2"]}
              onFavorite={() => toggleFavorite("program-2")}
            />
          </VariantCard>

          <VariantCard
            name="Certified"
            description="Shows certified tag at bottom left."
            code='programType="certified"'
          >
            <ListingCard
              variant="listing"
              title="Certified Item"
              price={1599}
              location="Denver"
              thumbnail="/placeholder.svg?height=200&width=300"
              programType="certified"
              layout="grid"
              viewType="buyer"
              isFavorited={favoriteStates["program-3"]}
              onFavorite={() => toggleFavorite("program-3")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Layout Views">
        <div className="space-y-6">
          <VariantCard
            name="Grid View"
            description="Compact vertical layout optimized for grid displays with image, attributes, and CTA."
            code='layout="grid"'
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <ListingCard
                variant="listing"
                title="iPhone 14 Pro"
                price={1299}
                location="San Francisco"
                thumbnail="/placeholder.svg?height=200&width=300"
                status="active"
                timestamp="2h ago"
                rating={4.8}
                reviewCount={89}
                sellerName="Tech Store"
                layout="grid"
                viewType="buyer"
                isFavorited={favoriteStates["grid-1"]}
                onFavorite={() => toggleFavorite("grid-1")}
                onContact={() => console.log("Contact seller")}
              />
              <ListingCard
                variant="product"
                title="AirPods Pro"
                price="From $249"
                stockCount={12}
                colorDots={["#ffffff", "#000000"]}
                thumbnail="/placeholder.svg?height=200&width=300"
                programType="buyer-protection"
                layout="grid"
                viewType="buyer"
                isFavorited={favoriteStates["grid-2"]}
                onFavorite={() => toggleFavorite("grid-2")}
                onContact={() => console.log("Contact seller")}
              />
              <ListingCard
                variant="listing"
                title="MacBook Air"
                price={999}
                location="New York"
                thumbnail="/placeholder.svg?height=200&width=300"
                status="sold"
                rating={4.9}
                reviewCount={156}
                sellerName="Apple Store"
                programType="certified"
                layout="grid"
                viewType="buyer"
                isFavorited={favoriteStates["grid-3"]}
                onFavorite={() => toggleFavorite("grid-3")}
              />
              <ListingCard
                variant="listing"
                title="Tesla Model 3"
                price={45999}
                location="Austin"
                thumbnail="/placeholder.svg?height=200&width=300"
                status="pending"
                spotlight={true}
                rating={4.7}
                reviewCount={203}
                sellerName="EV Dealer"
                layout="grid"
                viewType="buyer"
                isFavorited={favoriteStates["grid-4"]}
                onFavorite={() => toggleFavorite("grid-4")}
                onContact={() => console.log("Contact seller")}
              />
            </div>
          </VariantCard>

          <VariantCard
            name="List View"
            description="Horizontal layout showing key information in a compact format."
            code='layout="list"'
          >
            <div className="space-y-4">
              <ListingCard
                variant="listing"
                title="MacBook Pro 16-inch"
                price={2499}
                location="New York, NY"
                description="2023 MacBook Pro with M2 Max chip, 32GB RAM, 1TB SSD. Perfect for professional work."
                thumbnail="/placeholder.svg?height=200&width=300"
                status="active"
                spotlight={true}
                rating={4.9}
                reviewCount={89}
                sellerName="Tech Store"
                layout="list"
                viewType="buyer"
                isFavorited={favoriteStates["list-1"]}
                onFavorite={() => toggleFavorite("list-1")}
                onContact={() => console.log("Contact seller")}
              />
              <ListingCard
                variant="listing"
                title="iPad Air 5th Generation"
                price={599}
                location="Los Angeles, CA"
                description="Like new iPad Air with Apple Pencil included."
                thumbnail="/placeholder.svg?height=200&width=300"
                status="sold"
                rating={4.7}
                reviewCount={45}
                sellerName="Sarah Wilson"
                layout="list"
                viewType="buyer"
                isFavorited={favoriteStates["list-2"]}
                onFavorite={() => toggleFavorite("list-2")}
              />
            </div>
          </VariantCard>

          <VariantCard
            name="Gallery View"
            description="Vertical layout with larger images for better visual presentation."
            code='layout="gallery"'
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ListingCard
                variant="listing"
                title="Canon EOS R5 Camera"
                price={3899}
                location="Chicago, IL"
                thumbnail="/placeholder.svg?height=300&width=400"
                status="active"
                timestamp="1 hour ago"
                rating={5.0}
                reviewCount={23}
                sellerName="Photo Pro"
                layout="gallery"
                viewType="buyer"
                isFavorited={favoriteStates["gallery-1"]}
                onFavorite={() => toggleFavorite("gallery-1")}
                onContact={() => console.log("Contact seller")}
              />
              <ListingCard
                variant="product"
                title="AirPods Pro 2nd Gen"
                price="From $249"
                stockCount={12}
                colorDots={["#ffffff", "#000000"]}
                thumbnail="/placeholder.svg?height=300&width=400"
                layout="gallery"
                viewType="buyer"
                isFavorited={favoriteStates["gallery-2"]}
                onFavorite={() => toggleFavorite("gallery-2")}
                onContact={() => console.log("Contact seller")}
              />
              <ListingCard
                variant="listing"
                title="Tesla Model 3 Performance"
                price={54999}
                location="Austin, TX"
                thumbnail="/placeholder.svg?height=300&width=400"
                status="pending"
                rating={4.8}
                reviewCount={156}
                sellerName="EV Dealer"
                layout="gallery"
                viewType="buyer"
                isFavorited={favoriteStates["gallery-3"]}
                onFavorite={() => toggleFavorite("gallery-3")}
                onContact={() => console.log("Contact seller")}
              />
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Status Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["active", "sold", "pending", "draft", "expired"].map((status) => (
            <VariantCard
              key={status}
              name={`${status.charAt(0).toUpperCase() + status.slice(1)} Status`}
              description={`Card showing ${status} status.`}
              code={`status="${status}"`}
            >
              <ListingCard
                variant="listing"
                title="Sample Item"
                price={999}
                location="Sample Location"
                thumbnail="/placeholder.svg?height=200&width=300"
                status={status as any}
                layout="list"
                viewType="buyer"
              />
            </VariantCard>
          ))}
        </div>
      </VariantSection>

      <VariantSection title="View Types">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Buyer View"
            description="Shows favorite and share actions for buyers."
            code='viewType="buyer"'
          >
            <ListingCard
              variant="listing"
              title="Gaming Laptop"
              price={1899}
              location="Seattle, WA"
              thumbnail="/placeholder.svg?height=200&width=300"
              rating={4.6}
              reviewCount={78}
              sellerName="Tech Seller"
              layout="list"
              viewType="buyer"
              isFavorited={favoriteStates["buyer-view"]}
              onFavorite={() => toggleFavorite("buyer-view")}
              onContact={() => console.log("Contact seller")}
            />
          </VariantCard>

          <VariantCard name="Seller View" description="Shows management actions for sellers." code='viewType="seller"'>
            <ListingCard
              variant="listing"
              title="Gaming Laptop"
              price={1899}
              location="Seattle, WA"
              thumbnail="/placeholder.svg?height=200&width=300"
              status="active"
              timestamp="3 hours ago"
              layout="list"
              viewType="seller"
              onMore={() => console.log("More actions")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Core Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Card type
                  (listing, product)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">layout</code> - Display
                  layout (list, grid, gallery)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">viewType</code> - User
                  perspective (buyer, seller)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">title</code> - Item title
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">price</code> - Item price
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Status & Metadata</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">status</code> - Listing
                  status (active, sold, pending, etc.)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">timestamp</code> - Time
                  information
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">spotlight</code> - Spotlight
                  indicator
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">programType</code> - Program
                  type (empty, buyer-protection, certified)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">rating</code> - Seller rating
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
