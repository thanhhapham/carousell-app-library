"use client"
import { useRouter } from "next/navigation"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/design-system/button"

export default function InboxPage() {
  const router = useRouter()

  const mockChats = [
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

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="h-11 bg-background-base flex items-center justify-between px-4 text-sm font-medium flex-shrink-0">
        <span>12:00</span>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-background-base flex items-center justify-between px-4 py-3 border-b border-stroke-boundary flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => router.back()}>
          <X className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <h1 className="text-large-callout font-semibold">Inbox</h1>
          <ChevronDown className="h-4 w-4 text-content-subdued" />
        </div>

        <Button variant="ghost" size="sm" className="text-content-interactive">
          Edit
        </Button>
      </div>

      {/* Scrollable Chat List */}
      <div className="flex-1 overflow-y-auto pb-20">
        <main>
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-3 p-4 hover:bg-background-interactive-tint cursor-pointer border-b border-stroke-input last:border-b-0"
              onClick={() => router.push(`/prototype/chat/${chat.id}`)}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={chat.avatar || "/placeholder.svg"}
                  alt={chat.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <span className={`text-small-callout ${chat.isUnread ? "font-semibold" : "font-medium"}`}>
                      {chat.username}
                    </span>
                    {chat.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 text-white text-xs">✓</div>
                      </div>
                    )}
                  </div>
                  <span className="text-tiny-reg text-content-subdued flex-shrink-0">{chat.timestamp}</span>
                </div>

                <p className="text-small-reg text-content-primary font-medium mb-1 truncate">{chat.listingTitle}</p>

                <p
                  className={`text-small-reg ${chat.isUnread ? "text-content-primary font-medium" : "text-content-subdued"} truncate`}
                >
                  {chat.lastMessage}
                </p>
              </div>

              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={chat.productImage || "/placeholder.svg"}
                  alt={chat.listingTitle}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
