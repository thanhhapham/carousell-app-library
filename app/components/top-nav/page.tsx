"use client"

import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/ui/button"

export default function TopNavPage() {
  return (
    <ComponentPage
      title="Top Navigation"
      description="Top navigation provides consistent navigation patterns across the application. It adapts to different contexts with various button configurations and responsive title sizing."
    >
      <VariantSection title="Variants">
        <VariantCard
          name="Normal State"
          description="Default navigation with full title size and optional controls."
          code='variant="normal"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNav
              title="Design System"
              variant="normal"
              showBackButton={true}
              showTitleChevron={true}
              actions={
                <Button variant="outline" size="sm" className="text-small-callout">
                  Action
                </Button>
              }
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Shrunk State"
          description="Compact navigation with smaller title, typically shown when scrolling."
          code='variant="shrunk"'
        >
          <div className="border rounded-lg overflow-hidden">
            <TopNav title="Design System" variant="shrunk" showCloseButton={true} showTitleChevron={true} />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Navigation Controls">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Back Button"
            description="Navigation with back arrow for hierarchical navigation."
            code="showBackButton={true}"
          >
            <div className="border rounded-lg overflow-hidden">
              <TopNav title="Settings" showBackButton={true} onBack={() => console.log("Back clicked")} />
            </div>
          </VariantCard>

          <VariantCard
            name="With Close Button"
            description="Navigation with close X for modal or overlay contexts."
            code="showCloseButton={true}"
          >
            <div className="border rounded-lg overflow-hidden">
              <TopNav title="Modal Title" showCloseButton={true} onClose={() => console.log("Close clicked")} />
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">title</code> - Navigation
                  title text
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Size variant
                  (normal, shrunk)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showBackButton</code> - Show
                  back arrow button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showCloseButton</code> - Show
                  close X button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showProfile</code> - Show
                  profile avatar (default: true)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showMoreActions</code> - Show
                  more actions menu (default: true)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showTitleChevron</code> -
                  Show chevron next to title
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">actions</code> - Custom
                  action components
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onBack</code> - Back button
                  click handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClose</code> - Close button
                  click handler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>

      <VariantSection title="Responsive Behavior">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Auto-shrinking:</strong> When variant is set to "normal", the
            navigation automatically shrinks when the user scrolls down the page.
          </p>
          <p>
            <strong className="text-content-primary">Sticky positioning:</strong> The navigation remains fixed at the
            top of the viewport for consistent access to navigation controls.
          </p>
          <p>
            <strong className="text-content-primary">Border behavior:</strong> A bottom border appears when in shrunk
            state to provide visual separation from content.
          </p>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
