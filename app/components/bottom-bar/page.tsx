"use client"

import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { BottomBar } from "@/components/design-system/bottom-bar"

export default function BottomBarPage() {
  return (
    <ComponentPage
      title="Bottom Bar"
      description="Bottom bars provide persistent access to key actions and information at the bottom of the screen. They're commonly used for pricing, CTAs, and secondary actions in mobile interfaces."
    >
      <VariantSection title="Basic Usage">
        <VariantCard
          name="Basic Bottom Bar"
          description="Simple bottom bar with price and action button."
          code='<BottomBar price="4,000" buttonText="Promote" />'
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBar price="4,000" buttonText="Promote" onButtonClick={() => console.log("Button clicked")} />
          </div>
        </VariantCard>

        <VariantCard
          name="With Subtext"
          description="Bottom bar with additional context text."
          code='<BottomBar price="4,000" subtext="for 10 listings" buttonText="Promote" />'
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBar
              price="4,000"
              subtext="for 10 listings"
              buttonText="Promote"
              onButtonClick={() => console.log("Button clicked")}
            />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="With Text Button">
        <VariantCard
          name="Text Button Variant"
          description="Bottom bar with an additional text button for secondary actions."
          code='showTextButton={true} textButtonText="View estimated budget"'
        >
          <div className="relative h-40 bg-background-display rounded-lg overflow-hidden">
            <BottomBar
              price="4,000"
              subtext="for 10 listings"
              buttonText="Promote"
              showTextButton={true}
              textButtonText="View estimated budget"
              onButtonClick={() => console.log("Promote clicked")}
              onTextButtonClick={() => console.log("View budget clicked")}
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">price</code> - Price or main
                  value to display
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">buttonText</code> - Text for
                  the primary action button
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">subtext</code> - Additional
                  context text next to price
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help text
                  below the price
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onButtonClick</code> -
                  Primary button click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showTextButton</code> - Show
                  secondary text button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">textButtonText</code> - Text
                  for secondary button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onTextButtonClick</code> -
                  Secondary button click handler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>

      <VariantSection title="Usage Guidelines">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Positioning:</strong> Bottom bars should be sticky and positioned
            at the bottom of the viewport for easy thumb access on mobile devices.
          </p>
          <p>
            <strong className="text-content-primary">Content:</strong> Keep content concise. The price should be
            prominent, and button text should be action-oriented.
          </p>
          <p>
            <strong className="text-content-primary">Accessibility:</strong> Ensure sufficient contrast and touch target
            sizes for mobile interaction.
          </p>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
