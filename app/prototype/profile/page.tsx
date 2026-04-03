"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ShoppingCart,
  MessageCircle,
  ChevronRight,
  Edit,
  Share,
  Settings,
  Star,
  MapPin,
  Search,
  Filter,
  Plus,
} from "lucide-react"
import { Button } from "@/components/design-system/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/design-system/tabs"
import { Voucher } from "@/components/design-system/voucher"
import { ListingCard } from "@/components/design-system/listing-card"
import { TextInput } from "@/components/design-system/input/text-input"
import { Chip } from "@/components/design-system/input/chip"

const PercentIcon = () => (
  <div className="w-8 h-8 bg-content-positive rounded-full flex items-center justify-center">
    <span className="text-content-on-dark text-small-callout font-bold">%</span>
  </div>
)

const CollectionCard = ({
  title,
  itemCount,
  status,
  images,
}: {
  title: string
  itemCount: number
  status?: string
  images: string[]
}) => (
  <div className="p-4 bg-background-base rounded-lg border border-stroke-boundary">
    <div className="flex items-center justify-between mb-3">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-large-callout text-content-primary font-medium">{title}</h3>
          <ChevronRight className="h-4 w-4 text-content-subdued" />
        </div>
        <div className="flex items-center gap-2 text-small-reg text-content-subdued">
          <span>{itemCount} listings</span>
          {status && (
            <>
              <span>•</span>
              <span className="text-content-warning">{status}</span>
            </>
          )}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {images.slice(0, 3).map((image, index) => (
        <img
          key={index}
          src={image || "/placeholder.svg"}
          alt=""
          className="w-full aspect-square rounded object-cover"
        />
      ))}
    </div>
  </div>
)

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("listings")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const listings = [
    {
      id: 1,
      title: "Cheap iPhone Factory Unlocked",
      price: "S$0",
      location: "Mobile Phones & Gadgets",
      thumbnail: "/images/iphone-11-pro.png",
      spotlight: true,
      certifiedTag: true,
    },
    {
      id: 2,
      title: "iPhone Repair Service",
      price: "S$0",
      location: "Mobile Phones & Gadgets",
      thumbnail: "/images/iphone-repair.png",
      spotlight: true,
    },
    {
      id: 3,
      title: "Acme de la vie shirt",
      price: "$10",
      location: "Brand new",
      thumbnail: "/images/nike-jordan.jpg",
      timestamp: "23 mins",
    },
    {
      id: 4,
      title: "Adidas sweatpants",
      price: "$10",
      location: "Brand new",
      thumbnail: "/images/sony-headphones.jpg",
      timestamp: "23 mins",
    },
  ]

  const collections = [
    {
      title: "Spring exclusive",
      itemCount: 10,
      status: "Draft",
      images: ["/images/nike-jordan.jpg", "/images/sony-headphones.jpg", "/images/ikea-dresser.jpg"],
    },
    {
      title: "Spring exclusive",
      itemCount: 10,
      status: "Last update 2w ago",
      images: ["/images/nintendo-switch.jpg", "/images/levis-jeans.jpg", "/images/ipad-pro.jpg"],
    },
    {
      title: "Spring exclusive",
      itemCount: 10,
      status: "Last update 2w ago",
      images: ["/images/leather-jacket.jpg", "/images/canon-camera.jpg", "/images/dyson-vacuum.jpg"],
    },
  ]

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="w-full max-w-[475px] mx-auto bg-background-base min-h-screen relative">
      {/* Main Content */}
      <main style={{ height: "calc(100vh - 70px)", overflowY: "auto" }}>
        {/* Banner Image */}
        <div className="relative h-48">
          <img src="/images/herman-miller-chair.jpg" alt="Product banner" className="w-full h-full object-cover" />
          {/* Top Right Icons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="icon" iconVariant="general" size="medium">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="icon" iconVariant="general" size="medium" onClick={() => router.push("/prototype/inbox")}>
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Card - Overlapping banner by 16px */}
        <div className="mx-4 bg-background-base rounded-2xl -mt-4 relative z-10 p-4 shadow-lg">
          {/* Profile Header */}
          <div className="flex items-start gap-3 mb-4">
            <img src="/images/aircon-service-1.png" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-large-callout text-content-primary font-medium">Mister mobile</h1>
              </div>
              <div className="flex items-center gap-1 text-small-reg text-content-secondary mb-2">
                <div className="w-2 h-2 bg-content-negative rounded-full"></div>
                <span>Certified Partner</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-content-subdued mt-2" />
          </div>

          {/* Performance Stats */}
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-large-callout text-content-primary font-semibold">4.8</span>
                <Star className="h-4 w-4 fill-content-warning text-content-warning" />
              </div>
              <span className="text-small-reg text-content-subdued">375 reviews</span>
            </div>
            <div className="text-center">
              <div className="text-large-callout text-content-primary font-semibold mb-1">5,123</div>
              <span className="text-small-reg text-content-subdued">Orders</span>
            </div>
            <div className="text-center">
              <div className="text-large-callout text-content-primary font-semibold mb-1">Within hrs</div>
              <span className="text-small-reg text-content-subdued">Reply time</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="rounded" roundedVariant="outlined-grey" className="flex-1">
              <Edit className="h-4 w-4 mr-2" />
              Edit profile
            </Button>
            <Button variant="icon" iconVariant="general" size="medium" className="border border-stroke-input">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="icon" iconVariant="general" size="medium" className="border border-stroke-input">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content outside the card */}
        <div className="p-4">
          {/* Profile Bio */}
          <div className="mb-4">
            <p className="text-middle-reg text-content-secondary line-clamp-2">
              Your trusted one-stop mobile provider in Singapore. ISO Certified and CaseTrust Accredited. Expe... more
            </p>
          </div>

          {/* Profile Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-small-reg text-content-secondary">
              <div className="w-4 h-4 bg-content-negative rounded-full flex items-center justify-center">
                <span className="text-content-on-dark text-tiny-reg">!</span>
              </div>
              <span>Industry experts, vetted by Carousell</span>
            </div>
            <div className="flex items-center gap-2 text-small-reg text-content-secondary">
              <MapPin className="h-4 w-4 text-content-subdued" />
              <span>810 Geylang Rd, Singapore 409286</span>
            </div>
          </div>

          {/* Vouchers */}
          <div className="flex gap-3 overflow-x-auto mb-6">
            <Voucher
              title="Spend $15, get 5% off"
              subtitle="Capped at $2"
              icon={<PercentIcon />}
              className="min-w-[200px]"
            />
            <Voucher
              title="Free delivery"
              subtitle="On orders over $30"
              icon={<PercentIcon />}
              className="min-w-[200px]"
            />
          </div>
        </div>

        {/* Tabs - Full Width */}
        <div className="w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="listings" className="flex-1">
                Listings
              </TabsTrigger>
              <TabsTrigger value="featured" className="flex-1">
                Featured
              </TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="p-4">
              {/* Listing Count */}
              <div className="text-title-3 text-content-primary font-semibold mb-4">100 listings</div>

              {/* Search Bar */}
              <div className="mb-4">
                <TextInput placeholder="Search the seller's listings" leadingIcon={<Search className="h-4 w-4" />} />
              </div>

              {/* Filters */}
              <div className="flex gap-2 mb-4 overflow-x-auto">
                <Chip
                  label="Status: All"
                  variant="filter"
                  selected={selectedFilters.includes("status")}
                  onToggle={() => handleFilterToggle("status")}
                />
                <Chip
                  label="All Categories"
                  variant="filter"
                  selected={selectedFilters.includes("categories")}
                  onToggle={() => handleFilterToggle("categories")}
                  trailingIcon={<ChevronRight className="h-3 w-3" />}
                />
                <Chip
                  label="Filter"
                  variant="filter"
                  selected={selectedFilters.includes("filter")}
                  onToggle={() => handleFilterToggle("filter")}
                  trailingIcon={<Filter className="h-3 w-3" />}
                />
              </div>

              {/* Listings Grid */}
              <div className="grid grid-cols-2 gap-3 pb-4">
                {listings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    layout="grid"
                    variant="listing"
                    viewType="buyer"
                    title={listing.title}
                    price={listing.price}
                    location={listing.location}
                    thumbnail={listing.thumbnail}
                    spotlight={listing.spotlight}
                    certifiedTag={listing.certifiedTag}
                    timestamp={listing.timestamp}
                    onFavorite={() => console.log("Add to favorites")}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="p-4">
              {/* Collections Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-title-3 text-content-primary font-semibold">8 collections</div>
                <Button variant="text" textVariant="teal" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Create
                </Button>
              </div>

              {/* Collections List */}
              <div className="space-y-3 pb-4">
                {collections.map((collection, index) => (
                  <CollectionCard
                    key={index}
                    title={collection.title}
                    itemCount={collection.itemCount}
                    status={collection.status}
                    images={collection.images}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-base">{/* Bottom bar would go here */}</div>
    </div>
  )
}
