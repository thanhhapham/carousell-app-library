"use client"

import { TopNavTitleAction } from "@/components/design-system/top-nav/title-action"
import { InboxRow } from "@/components/design-system/chat/inbox-row"
import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
import { Button } from "@/components/design-system/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ChatInboxPage() {
  const [activeTab, setActiveTab] = useState("updates")
  const router = useRouter()

  const mockChats = [
    {
      id: "1",
      username: "John Doe",
      listingTitle: "2019 Honda Civic",
      lastMessage: "Is this still available?",
      timestamp: "2m ago",
      isUnread: true,
      offerStatus: "offered" as const,
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

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Top Navigation */}
      <div className="flex-shrink-0">
        <TopNavTitleAction
          title="Messages"
          showBackButton
          onBack={() => router.back()}
          actions={
            <Button variant="ghost" size="sm" onClick={() => console.log("New chat")} className="text-sm">
              New
            </Button>
          }
        />
      </div>

      {/* Scrollable Chat List */}
      <div className="flex-1 overflow-y-auto pb-20">
        <main>
          {mockChats.map((chat) => (
            <InboxRow
              key={chat.id}
              username={chat.username}
              listingTitle={chat.listingTitle}
              lastMessage={chat.lastMessage}
              timestamp={chat.timestamp}
              isUnread={chat.isUnread}
              offerStatus={chat.offerStatus}
              offerAmount={chat.offerAmount}
              onSelect={() => router.push(`/prototype/chat/${chat.id}`)}
            />
          ))}
        </main>
      </div>

      {/* Bottom Navigation - Fixed */}
      <BottomBarTab
        variant="homefeed"
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          if (tab === "me") {
            router.push("/prototype/me")
          } else if (tab === "explore") {
            router.push("/prototype/explore")
          } else if (tab === "updates") {
            router.push("/prototype/updates")
          }
        }}
        className="fixed bottom-0 left-0 right-0 max-w-[475px] mx-auto"
      />
    </div>
  )
}
