"use client"

import { useState } from "react"
import { Pin, X, ChevronDown, ChevronUp } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { ChatHeader } from "@/components/design-system/chat/chat-header"
import { ChatCell } from "@/components/design-system/chat/chat-cell"
import { ChatInput } from "@/components/design-system/chat/chat-input"
import { SystemMessage } from "@/components/design-system/chat/system-message"
import { useRouter } from "next/navigation"

interface PinnedMessage {
  id: string
  message: string
  pinnedBy: string
  timestamp: string
}

const mockPinnedMessages: PinnedMessage[] = [
  {
    id: "3",
    message: "Meet at Tampines MRT exit B, Saturday 3pm. Bring exact change S$180.",
    pinnedBy: "sneakerhead92",
    timestamp: "2:40 PM",
  },
  {
    id: "6",
    message: "Yes, I can meet at Tampines MRT. How about this Saturday at 3pm?",
    pinnedBy: "You",
    timestamp: "2:42 PM",
  },
]

const mockMessages = [
  {
    id: "1",
    message: "Hi! Is this Nike Air Max 97 still available?",
    timestamp: "2:30 PM",
    isOutgoing: false,
    avatarSrc: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    message: "Yes it is! Are you interested in buying?",
    timestamp: "2:32 PM",
    isOutgoing: true,
  },
  {
    id: "3",
    message: "Great! What's the condition like? Any scratches or defects?",
    timestamp: "2:35 PM",
    isOutgoing: false,
    avatarSrc: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    message:
      "The shoes are in excellent condition, only worn twice. No scratches or defects. I can send more photos if you'd like.",
    timestamp: "2:38 PM",
    isOutgoing: true,
  },
  {
    id: "5",
    message: "Meet at Tampines MRT exit B, Saturday 3pm. Bring exact change S$180.",
    timestamp: "2:40 PM",
    isOutgoing: false,
    avatarSrc: "/placeholder.svg?height=32&width=32",
    isPinned: true,
  },
  {
    id: "6",
    message: "Yes, I can meet at Tampines MRT. How about this Saturday at 3pm?",
    timestamp: "2:42 PM",
    isOutgoing: true,
    isPinned: true,
  },
  {
    id: "7",
    message: "Perfect! Saturday at 3pm works for me. I'll be wearing a blue shirt.",
    timestamp: "2:45 PM",
    isOutgoing: false,
    avatarSrc: "/placeholder.svg?height=32&width=32",
  },
]

export default function ChatPinnedMessages() {
  const router = useRouter()
  const [pinnedMessages, setPinnedMessages] = useState<PinnedMessage[]>(mockPinnedMessages)
  const [isPinnedBannerExpanded, setIsPinnedBannerExpanded] = useState(false)
  const [activePinnedIndex, setActivePinnedIndex] = useState(0)

  const handleUnpin = (id: string) => {
    setPinnedMessages((prev) => prev.filter((m) => m.id !== id))
  }

  const handleCyclePinned = () => {
    if (pinnedMessages.length > 1) {
      setActivePinnedIndex((prev) => (prev + 1) % pinnedMessages.length)
    }
  }

  const currentPinned = pinnedMessages[activePinnedIndex]

  return (
    <PrototypeLayout
      topNav={
        <ChatHeader
          username="sneakerhead92"
          listingTitle="Nike Air Max 97"
          listingPrice="S$180"
          onBack={() => router.back()}
          onMore={() => console.log("More options")}
        />
      }
      bottomBar={
        <ChatInput
          onSend={(message) => console.log("Send message:", message)}
          onImageSelect={() => console.log("Attach image")}
          suggestedMessages={["See you Saturday!", "Can I get more photos?", "Is price negotiable?", "Thanks!"]}
        />
      }
    >
      {/* Pinned Messages Banner */}
      {pinnedMessages.length > 0 && (
        <div className="bg-background-base border-b border-stroke-boundary">
          {/* Collapsed Banner — shows current pinned message */}
          <button
            className="w-full flex items-start gap-3 px-4 py-3 text-left"
            onClick={() => setIsPinnedBannerExpanded((v) => !v)}
          >
            <div className="flex-shrink-0 mt-0.5">
              <Pin className="w-4 h-4 text-core-primary2 rotate-45" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-small-reg text-core-primary2 font-medium">
                  Pinned message {pinnedMessages.length > 1 ? `${activePinnedIndex + 1}/${pinnedMessages.length}` : ""}
                </span>
              </div>
              <p className="text-small-reg text-content-primary truncate">{currentPinned?.message}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {pinnedMessages.length > 1 && (
                <button
                  className="text-content-secondary hover:text-content-primary"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCyclePinned()
                  }}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
              {isPinnedBannerExpanded ? (
                <ChevronUp className="w-4 h-4 text-content-secondary" />
              ) : (
                <ChevronDown className="w-4 h-4 text-content-secondary" />
              )}
            </div>
          </button>

          {/* Expanded list of all pinned messages */}
          {isPinnedBannerExpanded && (
            <div className="border-t border-stroke-boundary divide-y divide-stroke-boundary">
              {pinnedMessages.map((pinned) => (
                <div key={pinned.id} className="flex items-start gap-3 px-4 py-3">
                  <Pin className="w-4 h-4 text-core-primary2 rotate-45 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-small-reg text-content-primary">{pinned.message}</p>
                    <p className="text-small-reg text-content-secondary mt-0.5">
                      Pinned by {pinned.pinnedBy} · {pinned.timestamp}
                    </p>
                  </div>
                  <button
                    className="flex-shrink-0 p-1 hover:bg-background-input rounded"
                    onClick={() => handleUnpin(pinned.id)}
                  >
                    <X className="w-4 h-4 text-content-secondary" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Message List */}
      <div className="p-4 space-y-4">
        <SystemMessage message="You're chatting with sneakerhead92 about Nike Air Max 97" variant="info" />

        <div className="space-y-1">
          {mockMessages.map((message) => (
            <div key={message.id} className="relative group">
              {/* Pin indicator on pinned messages */}
              {message.isPinned && (
                <div
                  className={`flex items-center gap-1 px-4 mb-1 ${message.isOutgoing ? "justify-end" : "justify-start pl-16"}`}
                >
                  <Pin className="w-3 h-3 text-core-primary2 rotate-45" />
                  <span className="text-small-reg text-core-primary2">Pinned</span>
                </div>
              )}
              <ChatCell
                message={message.message}
                timestamp={message.timestamp}
                isOutgoing={message.isOutgoing}
                avatarSrc={message.avatarSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </PrototypeLayout>
  )
}
