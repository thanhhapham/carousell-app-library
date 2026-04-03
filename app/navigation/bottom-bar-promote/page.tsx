"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { BottomBarPromote } from "@/components/design-system/bottom-bar/promote"

export default function BottomBarPromotePage() {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(15)

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <ComponentPage
      title="Bottom Bar / Promote"
      description="Bottom bar for promote contains buttons and some information to help users make decisions. It's usually divided into 2 columns: left and right."
    >
      <VariantSection title="Promote Types">
        <VariantCard
          name="Listing Variant"
          description="On the listing details page, the bottom bar includes a 'Like' icon button and optional 'Chat' icon on the left, with action buttons on the right."
          code='variant="listing"'
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarPromote
              variant="listing"
              showLike={true}
              likeCount={likeCount}
              isLiked={isLiked}
              onLikeClick={handleLikeClick}
              showChat={true}
              onChatClick={() => console.log("Chat clicked")}
              primaryButton={{
                text: "Make offer",
                onClick: () => console.log("Primary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Coins Variant"
          description="On a screen related to seller tools, the bottom bar includes information to help decision-making on the left, and a main action button on the right."
          code='variant="coins"'
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarPromote
              variant="coins"
              price="100"
              subtext="for 1 listing"
              primaryButton={{
                text: "Button",
                onClick: () => console.log("Primary clicked"),
              }}
              textButton={{
                text: "Text Button",
                onClick: () => console.log("Text button clicked"),
              }}
            />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Button Configurations">
        <VariantCard
          name="Single Button"
          description="One primary action button that fills the available space."
          code="Single button configuration"
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarPromote
              variant="listing"
              showLike={true}
              likeCount={likeCount}
              isLiked={isLiked}
              onLikeClick={handleLikeClick}
              primaryButton={{
                text: "Buy now",
                onClick: () => console.log("Primary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Two Buttons"
          description="Primary and secondary action buttons that share the available space."
          code="Two button configuration"
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarPromote
              variant="listing"
              showLike={true}
              likeCount={likeCount}
              isLiked={isLiked}
              onLikeClick={handleLikeClick}
              primaryButton={{
                text: "Buy now",
                onClick: () => console.log("Primary clicked"),
              }}
              secondaryButton={{
                text: "Make offer",
                onClick: () => console.log("Secondary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="With Chat Icon"
          description="Includes both like and chat icons with two action buttons."
          code="With chat icon configuration"
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarPromote
              variant="listing"
              showLike={true}
              likeCount={likeCount}
              isLiked={isLiked}
              onLikeClick={handleLikeClick}
              showChat={true}
              onChatClick={() => console.log("Chat clicked")}
              primaryButton={{
                text: "Buy now",
                onClick: () => console.log("Primary clicked"),
              }}
              secondaryButton={{
                text: "Make offer",
                onClick: () => console.log("Secondary clicked"),
              }}
            />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">primaryButton</code> -
                  Primary action button configuration
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Display
                  variant (listing, coins)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">price</code> - Price or value
                  to display
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">subtext</code> - Additional
                  context text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help or
                  instruction text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">secondaryButton</code> -
                  Secondary action button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">textButton</code> -
                  Text-style button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showLike</code> - Show like
                  button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">likeCount</code> - Number of
                  likes
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">isLiked</code> - Like state
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onLikeClick</code> - Like
                  click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showChat</code> - Show chat
                  icon
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onChatClick</code> - Chat
                  icon click handler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
