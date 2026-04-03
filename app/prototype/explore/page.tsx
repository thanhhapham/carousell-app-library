"use client"

import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
import { ListingCard } from "@/components/design-system/listing-card"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Camera, ShoppingCart, MessageCircle, Car, Home, Gem, Smartphone } from "lucide-react"
import { Button } from "@/components/design-system/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/design-system/tabs"

export default function ExplorePage() {
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
      title: "Nike Air Jordan 1 Mid - Chicago Toe",
      price: 180,
      originalPrice: 199,
      location: "Like new • Size: US 10",
      seller: "sneakerhead99",
      timestamp: "23 mins",
      images: ["/images/nike-jordan.jpg"],
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "2",
      title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      price: 220,
      originalPrice: 399,
      location: "Used - Good • Complete box",
      seller: "audiogeek",
      timestamp: "1 hr",
      images: ["/images/sony-headphones.jpg"],
      isFavorited: true,
      spotlight: true,
    },
    {
      id: "3",
      title: "IKEA MALM Dresser - 6 drawers, white",
      price: 80,
      originalPrice: 179,
      location: "Used - Fair • Self collect",
      seller: "movingout2023",
      timestamp: "3 hrs",
      images: ["/images/ikea-dresser.jpg"],
      isFavorited: false,
    },
    {
      id: "4",
      title: "Nintendo Switch OLED with 3 games",
      price: 320,
      originalPrice: 420,
      location: "Used - Excellent • Complete set",
      seller: "gamergirl",
      timestamp: "5 hrs",
      images: ["/images/nintendo-switch.jpg"],
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "5",
      title: "Levi's 501 Original Fit Jeans",
      price: 35,
      originalPrice: 119,
      location: "Like new • Size: 32x30",
      seller: "fashionreseller",
      timestamp: "Yesterday",
      images: ["/images/levis-jeans.jpg"],
      isFavorited: false,
    },
    {
      id: "6",
      title: 'Apple iPad Pro 11" (2021) 128GB WiFi',
      price: 650,
      originalPrice: 799,
      location: "Used - Good • With Apple Pencil",
      seller: "techtrader",
      timestamp: "2 days",
      images: ["/images/ipad-pro.jpg"],
      isFavorited: true,
      spotlight: true,
    },
    {
      id: "7",
      title: "Vintage Leather Jacket - Genuine Cowhide",
      price: 120,
      originalPrice: null,
      location: "Vintage • Size: M",
      seller: "retrofinds",
      timestamp: "2 days",
      images: ["/images/leather-jacket.jpg"],
      isFavorited: false,
    },
    {
      id: "8",
      title: "Canon EOS R6 Mirrorless Camera Body Only",
      price: 1800,
      originalPrice: 2499,
      location: "Used - Like new • Low shutter count",
      seller: "photopro",
      timestamp: "3 days",
      images: ["/images/canon-camera.jpg"],
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "9",
      title: "Dyson V11 Absolute Cordless Vacuum",
      price: 350,
      originalPrice: 599,
      location: "Used - Good • All attachments included",
      seller: "cleanfreak",
      timestamp: "4 days",
      images: ["/images/dyson-vacuum.jpg"],
      isFavorited: false,
    },
    {
      id: "10",
      title: "Herman Miller Aeron Chair - Size B",
      price: 550,
      originalPrice: 1200,
      location: "Used - Excellent • Fully adjustable",
      seller: "ergonomics",
      timestamp: "5 days",
      images: ["/images/herman-miller-chair.jpg"],
      isFavorited: true,
      programType: "certified",
    },
  ]

  const handleListingClick = (listing: any) => {
    if (listing.programType === "buyer-protection") {
      router.push(`/prototype/listing-bp/${listing.id}`)
    } else if (listing.programType === "certified") {
      // Don't open anything for certified listings
      return
    } else {
      // No buyer protection or certified tag - open OM page
      router.push(`/prototype/listing-om/${listing.id}`)
    }
  }

  return (
    <div className="w-full max-w-[475px] mx-auto bg-background-base min-h-screen relative">
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

      {/* Scrollable Main Content - with calculated height to account for bottom bar */}
      <main style={{ height: "calc(100vh - 140px)", overflowY: "auto" }}>
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
        <div className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            {mockListings.map((listing) => (
              <ListingCard
                key={listing.id}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                sellerName={listing.seller}
                timestamp={listing.timestamp}
                images={listing.images}
                layout="grid"
                isFavorited={listing.isFavorited}
                spotlight={listing.spotlight}
                programType={listing.programType}
                onClick={() => handleListingClick(listing)}
                onFavorite={() => console.log("Toggle favorite:", listing.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Positioned within container */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-base">
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
        />
      </div>
    </div>
  )
}
