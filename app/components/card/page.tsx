"use client"

import { useState } from "react"
import { Heart, Share, MoreHorizontal } from "lucide-react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Card } from "@/components/design-system/card"

export default function CardPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>("selectable-1")

  return (
    <ComponentPage
      title="Card"
      description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
    >
      <VariantSection
        title="Card Variants"
        description="Three main card types serve different purposes in the interface."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <VariantCard
            name="Selectable Card"
            description="Used for selection interfaces where users choose from multiple options."
            code='variant="selectable"'
          >
            <Card
              variant="selectable"
              title="Card title"
              subtitle="Subtitle"
              bodyText="Body text of the card"
              noteText="Note text of the card"
              state={selectedCard === "selectable-1" ? "selected" : "normal"}
              label={{ text: "Recommended", variant: "recommended" }}
              thumbnail={{ size: 32, icon: <div className="w-4 h-4 bg-core-primary1 rounded" /> }}
              onSelect={() => setSelectedCard("selectable-1")}
            />
          </VariantCard>

          <VariantCard
            name="Actionable Card"
            description="Cards with specific actions that users can perform."
            code='variant="actionable"'
          >
            <Card
              variant="actionable"
              title="Card title"
              subtitle="Subtitle"
              bodyText="Body text of the card"
              thumbnail={{ size: 32, icon: <div className="w-4 h-4 bg-core-primary1 rounded" /> }}
              actions={[
                { icon: <Heart className="h-4 w-4" />, label: "Favorite" },
                { icon: <Share className="h-4 w-4" />, label: "Share" },
                { icon: <MoreHorizontal className="h-4 w-4" />, label: "More" },
              ]}
              primaryAction={{ label: "Primary Action", variant: "primary" }}
            />
          </VariantCard>

          <VariantCard
            name="Summary Card"
            description="Display summary information with optional actions."
            code='variant="summary"'
          >
            <Card
              variant="summary"
              title="Card title"
              bodyText="Body text of the card"
              noteText="Note text of the card"
              thumbnail={{ size: 32, icon: <div className="w-4 h-4 bg-core-primary1 rounded" /> }}
              primaryAction={{ label: "Text Button", variant: "text" }}
              clickableArea="button-only"
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <VariantCard name="Normal" description="Default card state." code='state="normal"'>
            <Card variant="selectable" title="Card title" bodyText="Body text of the card" state="normal" />
          </VariantCard>

          <VariantCard name="Selected" description="Card in selected state." code='state="selected"'>
            <Card variant="selectable" title="Card title" bodyText="Body text of the card" state="selected" />
          </VariantCard>

          <VariantCard name="Disabled" description="Card in disabled state." code='state="disabled"'>
            <Card variant="selectable" title="Card title" bodyText="Body text of the card" state="disabled" />
          </VariantCard>

          <VariantCard name="Error" description="Card showing error state." code='state="error"'>
            <Card
              variant="selectable"
              title="Card title"
              bodyText="Body text of the card"
              state="error"
              errorMessage="Error message"
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Width Logic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Regular Card" description="Standard width card for most use cases." code='width="regular"'>
            <Card variant="selectable" title="Card title" bodyText="Body text of the card" width="regular" />
          </VariantCard>

          <VariantCard name="Compact Card" description="Compact width for constrained layouts." code='width="compact"'>
            <Card variant="selectable" title="Card title" bodyText="Body text of the card" width="compact" />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Card Micros">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Label & Thumbnail"
            description="Card with recommended label and thumbnail."
            code="label + thumbnail"
          >
            <Card
              variant="selectable"
              title="Card title"
              subtitle={807}
              bodyText="Body text of the card"
              label={{ text: "Best value", variant: "best-value" }}
              thumbnail={{ size: 48, paymentIcon: true }}
              showSubtitleInfo={true}
            />
          </VariantCard>

          <VariantCard name="With Actions" description="Card with multiple action buttons." code="actions">
            <Card
              variant="summary"
              title="Card title"
              bodyText="Body text of the card"
              primaryAction={{ label: "Text Button", variant: "text" }}
              secondaryAction={{ label: "Button", variant: "primary" }}
              alignment="center"
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Core Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Card type
                  (selectable, actionable, summary)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">title</code> - Main card
                  title
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">state</code> - Card state
                  (normal, selected, disabled, error)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">width</code> - Card width
                  (regular, compact)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Content Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">subtitle</code> - Secondary
                  title text or number
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">bodyText</code> - Main
                  content text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">noteText</code> - Additional
                  note text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">thumbnail</code> - Thumbnail
                  configuration
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label
                  configuration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
