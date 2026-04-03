"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ChatInput } from "@/components/design-system/chat/chat-input"

export default function ChatInputPage() {
  return (
    <ComponentPage
      title="Chat Input"
      description="Input component for chat interfaces with suggested messages and media attachment."
      imageSrc="/chat-input.png"
    >
      <div className="space-y-8">
        {/* Basic Example */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Basic Input</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <ChatInput
              placeholder="Type here..."
              suggestedMessages={["Hi are you still interested?", "No problem", "Can you do $50?", "Where to meet?"]}
            />
          </div>
        </div>

        {/* With Keyboard */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">With Virtual Keyboard</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <ChatInput placeholder="Typing" showKeyboard={true} />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
