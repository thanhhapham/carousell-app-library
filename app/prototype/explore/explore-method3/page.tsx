"use client"

import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
import { ListingCard } from "@/components/design-system/listing-card"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Camera, ShoppingCart, MessageCircle, Car, Home, Gem, Smartphone } from "lucide-react"
import { Button } from "@/components/design-system/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/design-system/tabs"

export default function ExploreMethod3Page() {
  const [activeTab, setActiveTab] = useState("explore")
  const [activeContentTab, setActiveContentTab] = useState("top-picks")
  const router = useRouter()

  const categories = [
    { icon: Car, label: "Cars" },
    { icon: Home, label: "Home\nServices" },
    { icon: Gem, label: "Luxury" },
    { icon: Smartphone, label: "Mobile Phones\n& Gadgets" },
  ]

  const mockListings = [
    {
      id: "1",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
    {
      id: "2",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
    {
      id: "3",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
    {
      id: "4",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
    {
      id: "5",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
    {
      id: "6",
      title: "Brand new Adidas T-shirt",
      price: 10,
      originalPrice: 10,
      location: "Brand new • Size: L",
      seller: "mario88",
      timestamp: "23 mins",
      images: ["/placeholder.svg?height=200&width=200"],
      isFavorited: false,
    },
  ]

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* METHOD 3: Using CSS position sticky with transform */}
      <header className="sticky top-0 z-50 bg-background-base" style={{ position: "sticky", top: 0, zIndex: 50 }}>
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
        <div className="bg-background-base border-b border-stroke-boundary">
          <div className="flex items-center gap-3 px-4 py-3">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search Carousell"
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-stroke-input bg-background-input text-middle-reg placeholder:text-content-subdued focus:outline-none focus:ring-2 focus:ring-stroke-halo-focused"
                onClick={() => router.push("/prototype/search")}
                readOnly
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="h-4 w-4 text-content-subdued">🔍</div>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Camera className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8 p-0 relative">
              <ShoppingCart className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                30
              </div>
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => router.push("/prototype/inbox")}>
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto pb-20">
        {/* Banner */}
        <div className="px-4 py-4">
          <div className="relative h-32 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-purple-700">
            <div className="absolute inset-0 flex items-center justify-between p-6 text-white">
              <div>
                <h2 className="text-lg font-semibold mb-1">Guide to making</h2>
                <h2 className="text-lg font-semibold mb-1">your house</h2>
                <h2 className="text-lg font-semibold">move easier</h2>
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 mb-6">
          <div className="flex justify-between">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-tiny-reg text-content-primary text-center leading-tight whitespace-pre-line">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 mb-4">
          <Tabs value={activeContentTab} onValueChange={setActiveContentTab}>
            <TabsList>
              <TabsTrigger value="top-picks">Top picks</TabsTrigger>
              <TabsTrigger value="free">Free</TabsTrigger>
              <TabsTrigger value="certified">Certified</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Listing Grid */}
        <div className="px-4">
          <div className="grid grid-cols-2 gap-4">
            {[...mockListings, ...mockListings, ...mockListings].map((listing, index) => (
              <ListingCard
                key={`${listing.id}-${index}`}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                sellerName={listing.seller}
                timestamp={listing.timestamp}
                images={listing.images}
                layout="grid"
                isFavorited={listing.isFavorited}
                onClick={() => router.push(`/prototype/listing/${listing.id}`)}
                onFavorite={() => console.log("Toggle favorite:", listing.id)}
              />
            ))}
          </div>
        </div>

        {/* Add extra content to ensure page is scrollable */}
        <div className="h-96 bg-gray-100 m-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Extra content to test scrolling - METHOD 3</p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomBarTab
        variant="homefeed"
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          if (tab === "updates") {
            router.push("/prototype/updates")
          } else if (tab === "me") {
            router.push("/prototype/me")
          }
        }}
        className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto"
      />
    </div>
  )
}
