"use client"

import { useState } from "react"
import { ShoppingCart, MoreHorizontal, Shield, Info, ChevronRight, Star } from "lucide-react"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { BottomBarPromote } from "@/components/design-system/bottom-bar/promote"
import { Voucher } from "@/components/design-system/voucher"
import { ListingCard } from "@/components/design-system/listing-card"
import { Button } from "@/components/design-system/button"
import { cn } from "@/lib/utils"
import { TagBadge } from "@/components/design-system/badge"

const productImages = ["/images/nike-air-force-pink.jpg", "/images/nike-jordan.jpg", "/images/nike-air-force-pink.jpg"]

const relatedListings = [
  {
    id: "1",
    title: "INSTOCK LEGO STAR...",
    price: "S$30",
    location: "Jurong West",
    thumbnail: "/images/nike-jordan.jpg",
    timestamp: "23 mins",
    status: "active",
    sellerName: "toyseller",
    rating: 4.8,
  },
  {
    id: "2",
    title: "LEGO CHOOSE U PATH",
    price: "S$62",
    location: "Tampines",
    thumbnail: "/images/sony-headphones.jpg",
    timestamp: "1 hour",
    status: "active",
    sellerName: "legofan",
    rating: 4.9,
  },
  {
    id: "3",
    title: "INSTOCK ADLV Signa...",
    price: "S$62",
    location: "Orchard",
    thumbnail: "/images/ikea-dresser.jpg",
    timestamp: "2 hours",
    status: "active",
    sellerName: "fashionista",
    rating: 4.7,
  },
  {
    id: "4",
    title: "Nike Air Max 90",
    price: "S$85",
    location: "Bedok",
    thumbnail: "/images/nintendo-switch.jpg",
    timestamp: "3 hours",
    status: "active",
    sellerName: "sneakerhead",
    rating: 4.6,
  },
]

export default function ListingOMDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="h-screen overflow-hidden flex flex-col max-w-[475px] mx-auto bg-background-base font-fabriga">
      {/* Transparent Top Nav */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <TopNav
          title=""
          showBackButton={true}
          showProfile={false}
          showMoreActions={false}
          className="bg-transparent border-transparent"
          actions={
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-content-on-dark">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0 text-content-on-dark">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          }
        />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Images */}
        <div className="relative aspect-square bg-gray-100">
          <img
            src={productImages[currentImageIndex] || "/placeholder.svg"}
            alt="Nike Air Force"
            className="w-full h-full object-cover"
          />

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {productImages.map((_, index) => (
              <div
                key={index}
                className={cn("w-2 h-2 rounded-full", index === currentImageIndex ? "bg-white" : "bg-white/50")}
              />
            ))}
          </div>

          {/* Buyer Protection Tag removed as requested */}
        </div>

        {/* Buyer Protection Tag */}
        <div className="px-4 pt-4">
          <TagBadge label="Buyer Protection" variant="buyer-protection" icon={Shield} />
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-6">
          {/* Title and Price */}
          <div>
            <h1 className="text-xl font-bold text-content-primary mb-2">
              WTS Nike Air Force x Peaceminusone Paranoise 3.0
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-content-primary">S$42</span>
              <span className="text-middle-reg text-content-subdued line-through">S$120</span>
            </div>

            {/* Payment options */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-small-reg text-content-secondary">
                <span>💳</span>
                <span>4 payments of RM20.50* with PayLater by Grab</span>
              </div>
              <div className="flex items-center gap-2 text-small-reg text-content-secondary">
                <span>💳</span>
                <span>3 payments of RM33.33* with Atome</span>
              </div>
              <p className="text-xs text-content-subdued">*excludes Carousell Fees, Tax</p>
            </div>
          </div>

          {/* Promos */}
          <div>
            <h3 className="text-title-3 font-bold text-content-primary mb-3" id="debug-promos">
              Promos
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              <div className="flex-shrink-0 w-64">
                <Voucher
                  title="Buy 2 get 5% off"
                  subtitle="On 2nd item(s)"
                  icon={
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      %
                    </div>
                  }
                  iconColor="text-green-500"
                />
              </div>
              <div className="flex-shrink-0 w-64">
                <Voucher
                  title="Free shipping"
                  subtitle="Min. spend S$30"
                  icon={
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      🚚
                    </div>
                  }
                  iconColor="text-green-500"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-title-3 font-bold text-content-primary mb-3" id="debug-details">
              Details
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-small-reg text-content-secondary">Condition</p>
                <div className="flex items-center gap-1">
                  <p className="text-large-reg text-content-primary">Like new</p>
                  <Info className="w-4 h-4 text-content-subdued" />
                </div>
              </div>
              <div>
                <p className="text-small-reg text-content-secondary">Brand</p>
                <p className="text-large-reg text-content-primary">Nike</p>
              </div>
              <div>
                <p className="text-small-reg text-content-secondary">Types</p>
                <p className="text-large-reg text-content-primary">Bricks & Figurines</p>
              </div>
              <div>
                <p className="text-small-reg text-content-secondary">Age range</p>
                <p className="text-large-reg text-content-primary">0-2 year old</p>
              </div>
            </div>
            <button className="text-content-interactive text-middle-reg mt-2">Read more</button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-title-3 font-bold text-content-primary mb-3">Description</h3>
            <p className="text-middle-reg text-content-secondary">
              Used only for a few times. Got some defects in pieces.
              <br />
              All-action ninja vehicle playset... <button className="text-content-interactive">Read more</button>
            </p>
          </div>

          {/* Deal method */}
          <div className="flex justify-between items-center py-3 border-b border-stroke-boundary">
            <div>
              <h3 className="text-title-3 font-bold text-content-primary">Deal method</h3>
              <p className="text-small-reg text-content-secondary">
                🚚 Delivery • 📍 Meet up: Tiong Bahru and 3 locations
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-content-subdued" />
          </div>

          {/* FAQ */}
          <div className="flex justify-between items-center py-3 border-b border-stroke-boundary">
            <h3 className="text-title-3 font-bold text-content-primary">FAQ</h3>
            <ChevronRight className="w-5 h-5 text-content-subdued" />
          </div>

          {/* About this seller */}
          <div>
            <h3 className="text-title-3 font-bold text-content-primary mb-3">About this seller</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
              {/* First card - Seller info */}
              <div className="flex-shrink-0 w-[270px] bg-background-base border border-stroke-boundary rounded-lg p-4">
                <div className="flex flex-col items-center text-center space-y-10">
                  {/* Profile picture and name */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">D</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-large-callout font-bold text-content-primary">dripsupplies</span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-large-callout font-bold text-content-primary">4.8</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <span className="text-small-reg text-content-secondary">5K reviews</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-large-callout font-bold text-content-primary">5,123</span>
                      <span className="text-small-reg text-content-secondary">Orders</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-large-callout font-bold text-content-primary">Within hrs</span>
                      <span className="text-small-reg text-content-secondary">Reply time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review cards */}
              <div className="flex-shrink-0 w-[328px] bg-background-base border border-stroke-boundary rounded-lg p-4">
                <div className="space-y-3">
                  {/* Rating and date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
                      ))}
                    </div>
                    <span className="text-small-reg text-content-secondary">2 days ago</span>
                  </div>

                  {/* Review text */}
                  <p className="text-middle-reg text-content-primary">
                    I just bought an iPhone from Carousell Certified and it was delivered very fast, phone is in perfect
                    working conditions and i can't wait to share wit ...
                  </p>

                  {/* Reviewer info */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                    <span className="text-small-reg text-content-secondary">rajmann</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[328px] bg-background-base border border-stroke-boundary rounded-lg p-4">
                <div className="space-y-3">
                  {/* Rating and date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
                      ))}
                    </div>
                    <span className="text-small-reg text-content-secondary">2 days ago</span>
                  </div>

                  {/* Review text */}
                  <p className="text-middle-reg text-content-primary">
                    I just bought an iPhone from Carousell Certified and it was delivered very fast, phone is in perfect
                    working ...
                  </p>

                  {/* Reviewer info */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                    <span className="text-small-reg text-content-secondary">rajmann</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[328px] bg-background-base border border-stroke-boundary rounded-lg p-4">
                <div className="flex space-y-3">
                  <div className="flex-1">
                    {/* Rating and date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-green-500 text-green-500" />
                        ))}
                      </div>
                      <span className="text-small-reg text-content-secondary">2 days ago</span>
                    </div>

                    {/* Review text */}
                    <p className="text-middle-reg text-content-primary mb-3">
                      I just bought an iPhone from Carousell Certified and it was delivered very fast, phone is ...
                    </p>

                    {/* Reviewer info */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                      <span className="text-small-reg text-content-secondary">rajmann</span>
                    </div>
                  </div>

                  {/* Product image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-lg ml-3 flex-shrink-0">
                    <img
                      src="/images/iphone-11-pro.png"
                      alt="Product"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-4">
              <Button variant="secondary" className="flex-1">
                Make offer
              </Button>
              <Button variant="secondary" className="flex-1">
                Chat
              </Button>
            </div>
          </div>

          {/* Buyer Protection Info */}
          <div className="bg-background-display rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-large-callout font-bold text-content-primary">
                Deal safely with Buyer Protection
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <div>
                  <p className="text-small-callout font-medium text-content-primary">
                    <span className="font-bold">Pay safely via Carousell</span> when you "Buy" or "Add to Cart"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">💰</span>
                </div>
                <div>
                  <p className="text-small-reg text-content-secondary">
                    <span className="font-bold">Your money is kept safe</span>, seller only gets your payment after you
                    get your order.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">↩️</span>
                </div>
                <div>
                  <p className="text-small-reg text-content-secondary">
                    <span className="font-bold">100% refund from Carousell</span> if your item does not arrive, or is
                    not what you saw on the listing
                  </p>
                </div>
              </div>
            </div>

            <button className="text-content-interactive text-small-callout font-medium">Learn more</button>
          </div>

          {/* You may also like */}
          <div>
            <h3 className="text-title-3 font-bold text-content-primary mb-3">You may also like</h3>
            <div className="grid grid-cols-2 gap-3">
              {relatedListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  layout="grid"
                  variant="listing"
                  viewType="buyer"
                  title={listing.title}
                  price={listing.price}
                  location={listing.location}
                  thumbnail={listing.thumbnail}
                  timestamp={listing.timestamp}
                  status={listing.status}
                  sellerName={listing.sellerName}
                  rating={listing.rating}
                  isFavorited={false}
                  onFavorite={() => console.log(`Favorited ${listing.id}`)}
                  onClick={() => console.log(`Clicked listing ${listing.id}`)}
                  hideContactButton={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="flex-shrink-0">
        <BottomBarPromote
          variant="listing"
          showLike={true}
          likeCount={13}
          isLiked={isLiked}
          onLikeClick={() => setIsLiked(!isLiked)}
          showChat={true}
          onChatClick={() => console.log("Chat clicked")}
          primaryButton={{
            text: "Buy",
            onClick: () => console.log("Buy clicked"),
          }}
          secondaryButton={{
            text: "Add to cart",
            onClick: () => console.log("Add to cart clicked"),
          }}
        />
      </div>
    </div>
  )
}
