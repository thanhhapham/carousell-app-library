"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ChatCell } from "@/components/design-system/chat/chat-cell"

export default function ChatCellPage() {
  return (
    <ComponentPage
      title="Chat Cell"
      description="Message cells for chat interfaces supporting incoming and outgoing messages."
      imageSrc="/chat-cell.png"
    >
      <div className="space-y-8">
        {/* Incoming Messages */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Incoming Messages</h3>
          <div className="space-y-2 bg-background-base p-4 rounded-lg">
            <ChatCell message="This is a long message." timestamp="Just now" isOutgoing={false} />
            <ChatCell message="Made an offer $200" timestamp="Just now" isOutgoing={false} isGrouped={true} />
            <ChatCell
              message="This is a very long message and will append to the next line when cell > max-width."
              timestamp="Just now"
              isOutgoing={false}
              showCTA={true}
              ctaText="With a link"
              isGrouped={true}
            />
          </div>
        </div>

        {/* Outgoing Messages */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Outgoing Messages</h3>
          <div className="space-y-2 bg-background-base p-4 rounded-lg">
            <ChatCell
              message="This is a very long message and will append to the next line when cell > max-width. With a link"
              timestamp="Just now"
              isOutgoing={true}
              isRead={true}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
