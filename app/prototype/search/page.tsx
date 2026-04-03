"use client"
import { ListingCard } from "@/components/design-system/listing-card"
import { Chip } from "@/components/design-system/input/chip"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Star, ShoppingCart, MessageCircle, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/design-system/button"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("iphone 11")
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [deliveryFilters, setDeliveryFilters] = useState(0)
  const [generalFilters, setGeneralFilters] = useState(0)
  const router = useRouter()

  const mockListings = [
    {
      id: "1",
      title: "iPhone 11 Pro 128GB - Space Gray",
      price: "S$800",
      originalPrice: "S$1,149",
      location: "Used - Good • Complete box",
      seller: "melody465",
      timestamp: "23 mins",
      images: ["/images/iphone-11-pro.png"],
      spotlight: true,
      isFavorited: false,
    },
    {
      id: "2",
      title: "iPhone Repair Service - Screen & Battery",
      price: "S$12",
      originalPrice: "S$15",
      location: "Brand new service",
      seller: "iphone.repairs",
      timestamp: "23 mins",
      images: ["/images/iphone-repair.png"],
      spotlight: true,
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "3",
      title: "iPhone 12 Pro 256GB - Pacific Blue",
      price: "S$750",
      originalPrice: "S$1,399",
      location: "Like new • Free delivery",
      seller: "mobilerelation",
      timestamp: "1 day ago",
      images: ["/images/iphone-12-mini.png"],
      certifiedTag: true,
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "4",
      title: "iPhone 11 128GB - White",
      price: "S$520",
      originalPrice: "S$999",
      location: "Used - Excellent • Original box",
      seller: "mistermobile",
      timestamp: "1 day ago",
      images: ["/images/iphone-11-pro-max.png"],
      certifiedTag: true,
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "5",
      title: "iPhone 11 Pro Max 256GB - Midnight Green",
      price: "S$1,099",
      originalPrice: "S$1,449",
      location: "Like new • Original packaging",
      seller: "cheerscomms1200",
      timestamp: "1 day ago",
      images: ["/images/iphone-11-pro-max.png"],
      isFavorited: false,
    },
    {
      id: "6",
      title: "iPhone 12 Mini 128GB - Blue",
      price: "S$520",
      originalPrice: "S$829",
      location: "Used - Excellent • No scratches",
      seller: "compactphone",
      timestamp: "2 days ago",
      images: ["/images/iphone-12-mini.png"],
      isFavorited: true,
    },
    {
      id: "7",
      title: "iPhone 14 128GB - Purple",
      price: "S$950",
      originalPrice: "S$1,299",
      location: "Like new • 6 months warranty left",
      seller: "purpletech",
      timestamp: "2 days ago",
      images: ["/images/iphone-14-purple.png"],
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "8",
      title: "iPhone SE (3rd Gen) 64GB - Starlight",
      price: "S$380",
      originalPrice: "S$629",
      location: "Used - Good • Minor wear",
      seller: "budgetphones",
      timestamp: "3 days ago",
      images: ["/images/iphone-se.png"],
      isFavorited: false,
    },
    {
      id: "9",
      title: "iPhone XS Max 256GB - Gold",
      price: "S$450",
      originalPrice: "S$1,449",
      location: "Used - Fair • Battery 85%",
      seller: "goldphone",
      timestamp: "3 days ago",
      images: ["/images/iphone-xs-max.png"],
      isFavorited: false,
    },
    {
      id: "10",
      title: "iPhone Accessories Bundle - Cases & Chargers",
      price: "S$25",
      originalPrice: "S$89",
      location: "Like new • Multiple items",
      seller: "accessoryking",
      timestamp: "4 days ago",
      images: ["/images/iphone-accessories.png"],
      isFavorited: true,
    },
    {
      id: "11",
      title: "Premium iPhone 13 Pro Leather Case - Black",
      price: "S$45",
      originalPrice: "S$79",
      location: "Like new • Apple original",
      seller: "casemaster",
      timestamp: "4 days ago",
      images: ["/images/iphone-case.png"],
      isFavorited: false,
    },
    {
      id: "12",
      title: "AirPods Pro (2nd Gen) with MagSafe Case",
      price: "S$280",
      originalPrice: "S$379",
      location: "Used - Excellent • All ear tips included",
      seller: "audiophile88",
      timestamp: "5 days ago",
      images: ["/images/airpods-pro.png"],
      isFavorited: false,
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
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="h-11 bg-background-base flex items-center justify-between px-4 text-sm font-medium flex-shrink-0">
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
      <div className="bg-background-base border-b border-stroke-boundary flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-stroke-input bg-background-input text-middle-reg placeholder:text-content-subdued focus:outline-none focus:ring-2 focus:ring-stroke-halo-focused"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <div className="h-4 w-4 text-content-subdued">🔍</div>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <Star className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8 p-0 relative">
            <ShoppingCart className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
              30
            </div>
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-4 py-3 border-b border-stroke-boundary flex-shrink-0">
        <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            <Chip
              label="All categories"
              variant="filter"
              filterState={selectedCategory > 0 ? "selected" : "default"}
              appliedFiltersCount={selectedCategory}
              onClick={() => setSelectedCategory(selectedCategory > 0 ? 0 : 3)}
            />
            <Chip
              label="Delivery"
              variant="filter"
              filterState={deliveryFilters > 0 ? "selected" : "default"}
              appliedFiltersCount={deliveryFilters}
              onClick={() => setDeliveryFilters(deliveryFilters > 0 ? 0 : 2)}
            />
            <Chip
              label="Filters"
              variant="filter"
              filterState={generalFilters > 0 ? "selected" : "default"}
              appliedFiltersCount={generalFilters}
              onClick={() => setGeneralFilters(generalFilters > 0 ? 0 : 5)}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-1 text-content-subdued">
          <MapPin className="h-4 w-4" />
          <span className="text-small-reg">1000+ results in</span>
          <span className="text-small-reg text-content-interactive">Singapore</span>
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      {/* Scrollable Search Results */}
      <div className="flex-1 overflow-y-auto pb-20">
        <main className="p-4">
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
                spotlight={listing.spotlight}
                certifiedTag={listing.certifiedTag}
                programType={listing.programType}
                isFavorited={listing.isFavorited}
                onClick={() => handleListingClick(listing)}
                onFavorite={() => console.log("Toggle favorite:", listing.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
