"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"

export default function BottomBarTabPage() {
  const [homefeedTab, setHomefeedTab] = useState("explore")
  const [propertyTab, setPropertyTab] = useState("property")
  const [carsTab, setCarsTab] = useState("cars")

  return (
    <ComponentPage
      title="Bottom Bar / Tab"
      description="The bottom navigation bar provides quick access to core app sections, allowing users to switch between views easily. It adapts to different app contexts with relevant navigation options."
    >
      <VariantSection title="Tab Variants">
        <VariantCard
          name="Homefeed"
          description="When users are in any category that is not 'Property' or 'Cars', we display this variant."
          code='variant="homefeed"'
        >
          <div className="relative h-24 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTab variant="homefeed" activeTab={homefeedTab} onTabChange={setHomefeedTab} />
          </div>
        </VariantCard>

        <VariantCard
          name="Property"
          description="When users are in the 'Property' category, we show this variant."
          code='variant="property"'
        >
          <div className="relative h-24 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTab variant="property" activeTab={propertyTab} onTabChange={setPropertyTab} />
          </div>
        </VariantCard>

        <VariantCard
          name="Cars"
          description="When users are in the 'Cars' category, we display this variant."
          code='variant="cars"'
        >
          <div className="relative h-24 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTab variant="cars" activeTab={carsTab} onTabChange={setCarsTab} />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="States and Variants">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Active State:</strong> The currently selected tab is highlighted
            with the interactive color and shows an active state.
          </p>
          <p>
            <strong className="text-content-primary">Inactive State:</strong> Non-selected tabs use subdued colors and
            become interactive on hover.
          </p>
          <p>
            <strong className="text-content-primary">Badge Support:</strong> Tabs can display notification badges (like
            the "Sell" tab with count 3) to indicate pending items or notifications.
          </p>
        </div>
      </VariantSection>

      <VariantSection title="Anatomy">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">1. Icon:</strong> Visual representation of the tab's function or
            category
          </p>
          <p>
            <strong className="text-content-primary">2. Label:</strong> Text description of the tab's purpose
          </p>
          <p>
            <strong className="text-content-primary">3. Container:</strong> Clickable area that encompasses the entire
            tab
          </p>
          <p>
            <strong className="text-content-primary">4. Badge (optional):</strong> Notification indicator for relevant
            tabs
          </p>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">activeTab</code> - Currently
                  active tab ID
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onTabChange</code> - Tab
                  change handler function
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Tab variant
                  (homefeed, property, cars)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">className</code> - Additional
                  CSS classes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>

      <VariantSection title="Usage Guidelines">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Context Awareness:</strong> Use the appropriate variant based on
            the current app section or category the user is browsing.
          </p>
          <p>
            <strong className="text-content-primary">Persistent Navigation:</strong> The bottom tab bar should remain
            visible and accessible across most screens within the app.
          </p>
          <p>
            <strong className="text-content-primary">Badge Usage:</strong> Use badges sparingly and only for important
            notifications or counts that require user attention.
          </p>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
