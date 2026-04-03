"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/design-system/tabs"

export default function TabsPage() {
  const [normalTab, setNormalTab] = useState("tab1")
  const [scrollableTab, setScrollableTab] = useState("tab1")

  return (
    <ComponentPage
      title="Tabs"
      description="Tabs organize content into multiple sections and allow users to navigate between them. They provide a clear way to switch between related views or datasets."
    >
      <VariantSection title="Tab Types">
        <VariantCard
          name="Normal Tabs"
          description="Used when tabs are smaller or equal to screen size."
          code='variant="normal"'
        >
          <Tabs value={normalTab} onValueChange={setNormalTab} variant="normal">
            <TabsList>
              <TabsTrigger value="tab1">Label</TabsTrigger>
              <TabsTrigger value="tab2">Label</TabsTrigger>
              <TabsTrigger value="tab3">Label</TabsTrigger>
              <TabsTrigger value="tab4">Label</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-4 text-middle-reg text-content-secondary">Content for Tab 1</div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-4 text-middle-reg text-content-secondary">Content for Tab 2</div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-4 text-middle-reg text-content-secondary">Content for Tab 3</div>
            </TabsContent>
            <TabsContent value="tab4">
              <div className="p-4 text-middle-reg text-content-secondary">Content for Tab 4</div>
            </TabsContent>
          </Tabs>
        </VariantCard>

        <VariantCard
          name="Scrollable Tabs"
          description="Used when tabs do not fit the screen size, and is scrollable."
          code='variant="scrollable"'
        >
          <Tabs value={scrollableTab} onValueChange={setScrollableTab} variant="scrollable">
            <TabsList>
              <TabsTrigger value="tab1">Label</TabsTrigger>
              <TabsTrigger value="tab2">Label</TabsTrigger>
              <TabsTrigger value="tab3">Label</TabsTrigger>
              <TabsTrigger value="tab4">Label</TabsTrigger>
              <TabsTrigger value="tab5">Label</TabsTrigger>
              <TabsTrigger value="tab6">Long Label Name</TabsTrigger>
              <TabsTrigger value="tab7">Another Label</TabsTrigger>
              <TabsTrigger value="tab8">Final Label</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-4 text-middle-reg text-content-secondary">Scrollable Tab 1 Content</div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-4 text-middle-reg text-content-secondary">Scrollable Tab 2 Content</div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-4 text-middle-reg text-content-secondary">Scrollable Tab 3 Content</div>
            </TabsContent>
            <TabsContent value="tab4">
              <div className="p-4 text-middle-reg text-content-secondary">Scrollable Tab 4 Content</div>
            </TabsContent>
            <TabsContent value="tab5">
              <div className="p-4 text-middle-reg text-content-secondary">Scrollable Tab 5 Content</div>
            </TabsContent>
            <TabsContent value="tab6">
              <div className="p-4 text-middle-reg text-content-secondary">Long Label Name Content</div>
            </TabsContent>
            <TabsContent value="tab7">
              <div className="p-4 text-middle-reg text-content-secondary">Another Label Content</div>
            </TabsContent>
            <TabsContent value="tab8">
              <div className="p-4 text-middle-reg text-content-secondary">Final Label Content</div>
            </TabsContent>
          </Tabs>
        </VariantCard>
      </VariantSection>

      <VariantSection title="States and Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Active State" description="Currently selected tab with primary color." code="Active state">
            <div className="border-b border-stroke-boundary">
              <div className="flex">
                <button className="px-4 py-3 text-middle-callout font-bold text-content-interactive border-b-2 border-content-interactive">
                  Active Tab
                </button>
                <button className="px-4 py-3 text-middle-callout font-bold text-content-secondary border-b-2 border-transparent">
                  Inactive Tab
                </button>
              </div>
            </div>
          </VariantCard>

          <VariantCard name="Disabled State" description="Non-interactive disabled tab." code="disabled={true}">
            <div className="border-b border-stroke-boundary">
              <div className="flex">
                <button className="px-4 py-3 text-middle-callout font-bold text-content-secondary border-b-2 border-transparent">
                  Normal Tab
                </button>
                <button className="px-4 py-3 text-middle-callout font-bold text-content-subdued border-b-2 border-transparent cursor-not-allowed">
                  Disabled Tab
                </button>
              </div>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Anatomy">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">1. Label:</strong> Maximum 25 characters for optimal readability
          </p>
          <p>
            <strong className="text-content-primary">2. Container:</strong> Provides the clickable area and visual
            boundaries
          </p>
          <p>
            <strong className="text-content-primary">3. Bottom border:</strong> Inner shadow provides visual separation
            and active state indication
          </p>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Tabs Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Currently
                  active tab
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onValueChange</code> - Tab
                  change handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Tab variant
                  (normal, scrollable)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">TabsTrigger Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Unique tab
                  identifier
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disable tab
                  interaction
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">children</code> - Tab label
                  content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
