"use client"

import { ChatHeader } from "@/components/design-system/chat/chat-header"
import { ChatCell } from "@/components/design-system/chat/chat-cell"
import { ChatInput } from "@/components/design-system/chat/chat-input"
import { SystemMessage } from "@/components/design-system/chat/system-message"
import { useRouter } from "next/navigation"

export default function ChatDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  console.log("ChatDetailPage rendering with params:", params)

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
      message: "That would be great! And would you be willing to meet at Tampines MRT for the handover?",
      timestamp: "2:40 PM",
      isOutgoing: false,
      avatarSrc: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "6",
      message: "Yes, I can meet at Tampines MRT. How about this Saturday at 3pm?",
      timestamp: "2:42 PM",
      isOutgoing: true,
    },
    {
      id: "7",
      message: "Perfect! Saturday at 3pm works for me. I'll be wearing a blue shirt.",
      timestamp: "2:45 PM",
      isOutgoing: false,
      avatarSrc: "/placeholder.svg?height=32&width=32",
    },
  ]

  console.log("Mock messages:", mockMessages)

  return (
    <div className="h-screen overflow-hidden flex flex-col max-w-[475px] mx-auto">
      {/* Status Bar */}
      <div className="h-11 bg-background-base flex-shrink-0 flex items-center justify-between px-4 text-sm font-medium">
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

      {/* Chat Header */}
      <div className="flex-shrink-0">
        <ChatHeader
          username="sneakerhead92"
          listingTitle="Nike Air Max 97"
          listingPrice="S$180"
          onBack={() => router.back()}
          onCall={() => console.log("Call")}
          onVideoCall={() => console.log("Video call")}
          onMore={() => console.log("More options")}
        />
      </div>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <SystemMessage message="You're chatting with sneakerhead92 about Nike Air Max 97" variant="info" />

        <div className="space-y-4">
          {mockMessages.map((message) => {
            console.log("Rendering message in chat:", message)
            return (
              <ChatCell
                key={message.id}
                message={message.message}
                timestamp={message.timestamp}
                isOutgoing={message.isOutgoing}
                avatarSrc={message.avatarSrc}
              />
            )
          })}
        </div>

        <SystemMessage
          title="Confirm meetup?"
          message="Confirm your meetup details to help both parties remember."
          primaryAction={{
            label: "Confirm Meetup",
            onClick: () => console.log("Confirm meetup clicked"),
          }}
          secondaryAction={{
            label: "Not Now",
            onClick: () => console.log("Not now clicked"),
          }}
        />
      </main>

      {/* Chat Input */}
      <div className="flex-shrink-0">
        <ChatInput
          onSend={(message) => console.log("Send message:", message)}
          onImageSelect={() => console.log("Attach file")}
          suggestedMessages={["See you on Saturday!", "Can I get more photos?", "Is price negotiable?", "Thanks!"]}
        />
      </div>
    </div>
  )
}
