"use client"

import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/design-system/button"
import { Badge } from "@/components/design-system/badge"
import { useRouter } from "next/navigation"
import { Heart, Share, MoreHorizontal, MapPin, Star } from "lucide-react"

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen max-w-[375px] mx-auto">
      {/* Status Bar */}
      <div className="h-11 bg-background-base flex items-center justify-between px-4 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <TopNav
        title=""
        showBackButton={true}
        onBack={() => router.back()}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Share className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        }
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Image Gallery */}
        <div className="relative">
          <img src="/placeholder.svg?height=300&width=375" alt="Product" className="w-full h-80 object-cover" />
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-tiny-reg">1 / 4</div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-title2 font-semibold text-content-primary mb-2">Brand new Adidas T-shirt</h1>
              <div className="text-title1 font-bold text-content-primary mb-2">S$10</div>
            </div>
            <Badge className="bg-content-positive text-content-on-dark">Certified</Badge>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mb-4">
            <MapPin className="h-4 w-4 text-content-subdued" />
            <span className="text-small-reg text-content-subdued">Singapore</span>
          </div>

          {/* Seller Info */}
          <div className="flex items-center justify-between p-4 bg-background-display rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Seller"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-small-callout font-medium">mario88</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-content-warning text-content-warning" />
                    <span className="text-tiny-reg text-content-secondary">4.9</span>
                  </div>
                </div>
                <span className="text-tiny-reg text-content-subdued">Usually responds in a few hours</span>
              </div>
            </div>
            <Button variant="secondary" size="sm">
              View Profile
            </Button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-large-callout font-semibold mb-2">Description</h3>
            <p className="text-middle-reg text-content-secondary">
              Brand new Adidas t-shirt in size L. Never worn, still has tags. Perfect condition. Smoke-free home.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="sticky bottom-0 bg-background-base border-t border-stroke-boundary p-4">
        <div className="flex gap-3">
          <Button variant="secondary" className="flex-1">
            Chat
          </Button>
          <Button variant="primary" className="flex-1">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}
