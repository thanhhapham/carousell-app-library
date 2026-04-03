"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { SpeechBubble } from "@/components/design-system/speech-bubble"

export default function SpeechBubblePage() {
  return (
    <ComponentPage
      title="Speech Bubble"
      description="Speech bubbles are used to display messages in a conversational interface."
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Examples</h3>
          <div className="space-y-4">
            <SpeechBubble
              message="Hello! This is a speech bubble message."
              timestamp="10:30 AM"
              position="left"
              avatar="/placeholder.svg?height=40&width=40"
            />

            <SpeechBubble
              message="This is a right-aligned speech bubble with a longer message that might wrap to multiple lines."
              timestamp="10:32 AM"
              position="right"
            />

            <SpeechBubble
              message="This speech bubble contains an image."
              timestamp="10:35 AM"
              position="left"
              avatar="/placeholder.svg?height=40&width=40"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
