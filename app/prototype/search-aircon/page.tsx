"use client"
import { ListingCard } from "@/components/design-system/listing-card"
import { Chip } from "@/components/design-system/input/chip"
import { TagBadge } from "@/components/design-system/badge"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Star, ShoppingCart, MessageCircle, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/design-system/button"

export default function SearchAirconPage() {
  const [searchQuery, setSearchQuery] = useState("aircon servicing")
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [deliveryFilters, setDeliveryFilters] = useState(0)
  const [generalFilters, setGeneralFilters] = useState(0)
  const router = useRouter()

  const mockListings = [
    {
      id: "1",
      title: "Aircon service, General Aircon Servicing",
      price: "S$18",
      location: "Professional service • Same day",
      seller: "lyaircon",
      timestamp: "2 days ago",
      images: ["/images/aircon-service-1.png"],
      spotlight: true,
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "2",
      title: "Aircon Service| Aircon Servicing | Aircon Water Leak | Aircon Not Cold",
      price: "S$15",
      location: "5 star reviews • Free gas pressure check",
      seller: "5star_sg",
      timestamp: "12 mins",
      images: ["/images/aircon-service-2.png"],
      spotlight: true,
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "3",
      title: "[RELIABLE] Aircon General Servicing leaking Repair @87883440",
      price: "S$18",
      location: "Trusted by hotels & businesses",
      seller: "lyaircon",
      timestamp: "13 days ago",
      images: ["/images/aircon-service-3.png"],
      isFavorited: true,
      programType: "buyer-protection",
    },
    {
      id: "4",
      title: "Aircon Servicing / Service Air Con Service General Cleaning",
      price: "S$17",
      location: "30 Days Warranty • Per unit",
      seller: "KoolConcepts",
      timestamp: "11 days ago",
      images: ["/images/aircon-service-4.png"],
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "5",
      title: "Professional Aircon Chemical Wash & Overhaul Service",
      price: "S$45",
      originalPrice: "S$60",
      location: "Deep cleaning • 6 months warranty",
      seller: "CoolAirPro",
      timestamp: "1 day ago",
      images: ["/images/aircon-service-5.png"],
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "6",
      title: "Aircon Installation & Replacement Service",
      price: "S$120",
      originalPrice: "S$150",
      location: "Licensed technician • Free quotation",
      seller: "AirconMaster",
      timestamp: "3 days ago",
      images: ["/images/aircon-service-6.png"],
      spotlight: true,
      isFavorited: true,
    },
    {
      id: "7",
      title: "Emergency Aircon Repair Service 24/7",
      price: "S$25",
      location: "Same day service • All brands",
      seller: "QuickFixAircon",
      timestamp: "5 hours ago",
      images: ["/images/aircon-service-7.png"],
      isFavorited: false,
      programType: "buyer-protection",
    },
    {
      id: "8",
      title: "Aircon Gas Top Up & Leak Detection Service",
      price: "S$35",
      originalPrice: "S$45",
      location: "R410A gas • Pressure test included",
      seller: "GasTopUpSG",
      timestamp: "2 days ago",
      images: ["/images/aircon-service-8.png"],
      isFavorited: false,
    },
    {
      id: "9",
      title: "Office Aircon Maintenance Contract",
      price: "S$12",
      location: "Monthly service • Bulk discount",
      seller: "OfficeAirconSG",
      timestamp: "1 week ago",
      images: ["/images/aircon-service-1.png"],
      isFavorited: false,
      programType: "certified",
    },
    {
      id: "10",
      title: "Aircon Duct Cleaning & Sanitization Service",
      price: "S$80",
      originalPrice: "S$100",
      location: "Anti-bacterial treatment • Health certified",
      seller: "CleanAirDucts",
      timestamp: "4 days ago",
      images: ["/images/aircon-service-2.png"],
      isFavorited: true,
      programType: "buyer-protection",
    },
    {
      id: "11",
      title: "Split Unit Aircon Servicing Package",
      price: "S$20",
      location: "Filter cleaning • Coil wash",
      seller: "SplitAirconPro",
      timestamp: "6 days ago",
      images: ["/images/aircon-service-3.png"],
      isFavorited: false,
    },
    {
      id: "12",
      title: "Aircon Troubleshooting & Diagnostic Service",
      price: "S$30",
      location: "Free diagnosis • Expert advice",
      seller: "AirconDoctor",
      timestamp: "1 week ago",
      images: ["/images/aircon-service-4.png"],
      isFavorited: false,
      programType: "certified",
    },
  ]

  // Ad section data
  const adListings = [
    {
      id: "ad-1",
      title: "General Servicing",
      price: "S$18",
      images: ["/images/aircon-service-1.png"],
    },
    {
      id: "ad-2",
      title: "Chemical Wash",
      price: "S$45",
      images: ["/images/aircon-service-2.png"],
    },
    {
      id: "ad-3",
      title: "Installation",
      price: "S$120",
      images: ["/images/aircon-service-3.png"],
    },
    {
      id: "ad-4",
      title: "Gas Top Up",
      price: "S$35",
      images: ["/images/aircon-service-4.png"],
    },
  ]

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
              label="Service type"
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
          <span className="text-small-reg">500+ results in</span>
          <span className="text-small-reg text-content-interactive">Singapore</span>
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      {/* Scrollable Search Results */}
      <div className="flex-1 overflow-y-auto pb-20">
        <main>
          {/* Ad Section */}
          <div className="bg-blue-50 mb-4 p-4">
            {/* Header with profile, name, tag and WhatsApp button */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/aircon-service-1.png"
                  alt="lyaircon"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-middle-callout font-medium text-content-primary">lyaircon</span>
                  <TagBadge variant="preferred" size="small">
                    Preferred
                  </TagBadge>
                </div>
              </div>
              <Button variant="rounded" roundedVariant="outlined-grey" size="small" className="px-3 py-1">
                WhatsApp
              </Button>
            </div>

            {/* Caption */}
            <p className="text-middle-reg text-content-secondary mb-3">
              Professional aircon services with 5-star reviews and same-day availability
            </p>

            {/* Horizontal scroll of listings with review card */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {/* First listing - 80% of normal size with 1:1 aspect ratio */}
              <div className="flex-shrink-0 w-40">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={adListings[0].images[0] || "/placeholder.svg"}
                    alt={adListings[0].title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-2">
                    <h4 className="text-small-reg font-medium text-content-primary line-clamp-2 mb-1">
                      {adListings[0].title}
                    </h4>
                    <p className="text-middle-callout font-semibold text-content-primary">{adListings[0].price}</p>
                  </div>
                </div>
              </div>

              {/* Review card - 75% of listing size */}
              <div className="flex-shrink-0 w-32">
                <div className="bg-white rounded-lg p-2 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-tiny-reg text-content-secondary line-clamp-2 mb-1">
                    "Excellent service! Very professional."
                  </p>
                  <p className="text-tiny-reg text-content-subdued">- Sarah L.</p>
                </div>
              </div>

              {/* Second listing */}
              <div className="flex-shrink-0 w-40">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={adListings[1].images[0] || "/placeholder.svg"}
                    alt={adListings[1].title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-2">
                    <h4 className="text-small-reg font-medium text-content-primary line-clamp-2 mb-1">
                      {adListings[1].title}
                    </h4>
                    <p className="text-middle-callout font-semibold text-content-primary">{adListings[1].price}</p>
                  </div>
                </div>
              </div>

              {/* Third listing */}
              <div className="flex-shrink-0 w-40">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={adListings[2].images[0] || "/placeholder.svg"}
                    alt={adListings[2].title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-2">
                    <h4 className="text-small-reg font-medium text-content-primary line-clamp-2 mb-1">
                      {adListings[2].title}
                    </h4>
                    <p className="text-middle-callout font-semibold text-content-primary">{adListings[2].price}</p>
                  </div>
                </div>
              </div>

              {/* Fourth listing (scrollable) */}
              <div className="flex-shrink-0 w-40">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={adListings[3].images[0] || "/placeholder.svg"}
                    alt={adListings[3].title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-2">
                    <h4 className="text-small-reg font-medium text-content-primary line-clamp-2 mb-1">
                      {adListings[3].title}
                    </h4>
                    <p className="text-middle-callout font-semibold text-content-primary">{adListings[3].price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Search Results */}
          <div className="px-4">
            <div className="grid grid-cols-2 gap-4">
              {mockListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  title={listing.title}
                  price={listing.price}
                  originalPrice={listing.originalPrice}
                  location={listing.location}
                  sellerName={listing.seller}
                  timestamp={listing.timestamp}
                  images={listing.images}
                  layout="grid"
                  spotlight={listing.spotlight}
                  programType={listing.programType}
                  isFavorited={listing.isFavorited}
                  onClick={() => router.push(`/prototype/listing/${listing.id}`)}
                  onFavorite={() => console.log("Toggle favorite:", listing.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
