/**
 * Centralized Mock Data
 *
 * All mock data for prototypes lives here. Import what you need:
 *
 * ```tsx
 * import { mockListings, mockChats, mockProfile } from "@/lib/mock-data"
 * ```
 *
 * This prevents duplication across prototype pages and makes it easy
 * to update mock data globally.
 */

// ============================================================
// TYPES
// ============================================================

export interface Listing {
  id: string
  title: string
  price: number | string
  originalPrice?: number | string | null
  location: string
  seller: string
  timestamp: string
  images: string[]
  isFavorited: boolean
  spotlight?: boolean
  certifiedTag?: boolean
  programType?: "buyer-protection" | "certified"
}

export interface ChatConversation {
  id: string
  username: string
  listingTitle: string
  lastMessage: string
  timestamp: string
  isUnread: boolean
  avatar?: string
  productImage?: string
  verified?: boolean
  offerStatus?: "offered"
  offerAmount?: string
}

export interface ProfileListing {
  id: number
  title: string
  price: string
  location: string
  thumbnail: string
  spotlight?: boolean
  certifiedTag?: boolean
  timestamp?: string
}

export interface Collection {
  title: string
  itemCount: number
  status?: string
  images: string[]
}

export interface UserProfile {
  username: string
  displayName: string
  avatar: string
  rating: number
  reviewCount: number
  followers: number
  following: number
  listings: number
  verified: boolean
  joinDate: string
  responseRate: string
  responseTime: string
}

// ============================================================
// MOCK LISTINGS (Explore / General)
// ============================================================

export const mockListings: Listing[] = [
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

// ============================================================
// MOCK SEARCH LISTINGS
// ============================================================

export const mockSearchListings: Listing[] = [
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
]

// ============================================================
// MOCK CHAT CONVERSATIONS (Inbox)
// ============================================================

export const mockInboxChats: ChatConversation[] = [
  {
    id: "1",
    username: "burntbroccoli",
    listingTitle: "New Balance M999ITK",
    lastMessage: "oh how about we meet at Pasir ris?",
    timestamp: "9:58am",
    isUnread: true,
    avatar: "/placeholder.svg?height=40&width=40",
    productImage: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    username: "mynameishello",
    listingTitle: "Navy blue polo golf tee",
    lastMessage: "I think this is my size",
    timestamp: "3:48am",
    isUnread: false,
    avatar: "/placeholder.svg?height=40&width=40",
    productImage: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "3",
    username: "meowmeowmeow",
    listingTitle: "yellow/mustard dress",
    lastMessage: "hello what brand is this?",
    timestamp: "2:58am",
    isUnread: false,
    avatar: "/placeholder.svg?height=40&width=40",
    productImage: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "4",
    username: "dogsrthebest",
    listingTitle: "Midi dress TTR",
    lastMessage: "Is this brand new with tag?",
    timestamp: "1:30am",
    isUnread: false,
    avatar: "/placeholder.svg?height=40&width=40",
    productImage: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
]

// ============================================================
// MOCK CHAT MESSAGES (Chat detail view)
// ============================================================

export const mockChatMessages: ChatConversation[] = [
  {
    id: "1",
    username: "John Doe",
    listingTitle: "2019 Honda Civic",
    lastMessage: "Is this still available?",
    timestamp: "2m ago",
    isUnread: true,
    offerStatus: "offered",
    offerAmount: "$15,000",
  },
  {
    id: "2",
    username: "Sarah Wilson",
    listingTitle: "iPhone 14 Pro",
    lastMessage: "Thanks for the quick response!",
    timestamp: "1h ago",
    isUnread: false,
  },
]

// ============================================================
// MOCK PROFILE DATA
// ============================================================

export const mockProfile: UserProfile = {
  username: "techdeals_sg",
  displayName: "Tech Deals SG",
  avatar: "/placeholder.svg?height=80&width=80",
  rating: 4.8,
  reviewCount: 156,
  followers: 1234,
  following: 56,
  listings: 42,
  verified: true,
  joinDate: "Jan 2020",
  responseRate: "95%",
  responseTime: "Within hours",
}

export const mockProfileListings: ProfileListing[] = [
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

export const mockCollections: Collection[] = [
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

// ============================================================
// MOCK CATEGORIES
// ============================================================

export const mockCategories = [
  { icon: "Car", label: "Cars" },
  { icon: "Home", label: "Home\nServices" },
  { icon: "Gem", label: "Luxury" },
  { icon: "Smartphone", label: "Mobile Phones\n& Gadgets" },
]
