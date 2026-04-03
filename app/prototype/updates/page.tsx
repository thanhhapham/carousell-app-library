"use client"

import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
import { Chip } from "@/components/design-system/input/chip"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/design-system/button"

export default function UpdatesPage() {
  const [activeTab, setActiveTab] = useState("updates")
  const [activeChip, setActiveChip] = useState("all")
  const router = useRouter()

  const mockNotifications = [
    {
      id: "1",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Buyer place an order",
      subtitle: "Ship out your order or your buyer will be refunded",
      timestamp: "5 days ago",
      unread: false,
      badge: "18hr left",
      badgeColor: "bg-content-negative",
      actionText: "View order details",
      actionColor: "text-content-positive",
    },
    {
      id: "2",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Nelson.yeu left you a review.",
      subtitle: "",
      timestamp: "5 days ago",
      unread: false,
      rating: 5.0,
    },
    {
      id: "3",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "MarcelRB liked your item.",
      subtitle: "",
      timestamp: "5 days ago",
      unread: false,
    },
    {
      id: "4",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Order completed! Leave a review for jj-systems.",
      subtitle: "",
      timestamp: "5 days ago",
      unread: false,
      actionText: "Leave a review",
      actionColor: "text-content-positive",
    },
    {
      id: "5",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Jayinventory started following you.",
      subtitle: "",
      timestamp: "5 days ago",
      unread: false,
    },
  ]

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
      <div className="bg-background-base flex items-center justify-between px-4 py-3 border-b border-stroke-boundary">
        <h1 className="text-title2 font-semibold">Updates</h1>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => router.push("/prototype/inbox")}>
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-4 py-3 border-b border-stroke-boundary">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            <Chip label="All" variant="single" selected={activeChip === "all"} onClick={() => setActiveChip("all")} />
            <Chip
              label="For action"
              variant="single"
              selected={activeChip === "action"}
              onClick={() => setActiveChip("action")}
            />
            <Chip
              label="Activity"
              variant="single"
              selected={activeChip === "activity"}
              onClick={() => setActiveChip("activity")}
            />
            <Chip
              label="Support"
              variant="single"
              selected={activeChip === "support"}
              onClick={() => setActiveChip("support")}
            />
            <Chip
              label="Messages"
              variant="single"
              selected={activeChip === "messages"}
              onClick={() => setActiveChip("messages")}
            />
            <Chip
              label="Reviews"
              variant="single"
              selected={activeChip === "reviews"}
              onClick={() => setActiveChip("reviews")}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Main Content - with calculated height to account for bottom bar */}
      <main style={{ height: "calc(100vh - 140px)", overflowY: "auto" }}>
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-3 p-4 hover:bg-background-interactive-tint cursor-pointer border-b border-stroke-input last:border-b-0"
            onClick={() => console.log("Notification clicked:", notification.id)}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={notification.avatar || "/placeholder.svg"}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-small-callout text-content-primary font-medium">{notification.title}</p>
                  {notification.subtitle && (
                    <p className="text-small-reg text-content-secondary mt-1">{notification.subtitle}</p>
                  )}
                </div>

                {notification.rating && (
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-small-callout font-semibold">{notification.rating}</span>
                    <div className="w-4 h-4 text-content-warning">⭐</div>
                  </div>
                )}
              </div>

              {/* Badge */}
              {notification.badge && (
                <div
                  className={`inline-block px-2 py-1 rounded text-tiny-reg font-medium text-white mb-2 ${notification.badgeColor}`}
                >
                  {notification.badge}
                </div>
              )}

              {/* Action */}
              {notification.actionText && (
                <div className="mb-2">
                  <button className={`text-small-reg font-medium ${notification.actionColor} hover:underline`}>
                    {notification.actionText} →
                  </button>
                </div>
              )}

              <span className="text-tiny-reg text-content-subdued">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation - Positioned within container */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-base">
        <BottomBarTab
          variant="homefeed"
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab)
            if (tab === "explore") {
              router.push("/prototype/explore")
            } else if (tab === "me") {
              router.push("/prototype/me")
            }
          }}
        />
      </div>
    </div>
  )
}
