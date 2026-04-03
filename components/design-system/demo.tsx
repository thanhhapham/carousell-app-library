"use client"

import { useState } from "react"
import { TopNav } from "./top-nav"
import { Slider } from "./slider"
import { Card } from "./card"
import { Button } from "@/components/ui/button"
import { Card as UICard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DesignSystemDemo() {
  const [selectedCard, setSelectedCard] = useState<string | null>("card-2")
  const [sliderValue, setSliderValue] = useState([12])
  const [rangeValue, setRangeValue] = useState([12, 84])

  const cardData = [
    {
      id: "card-1",
      title: "Card title",
      subtitle: "Subtitle",
      bodyText: "body text of the card",
      noteText: "Note text of the card",
      state: "normal" as const,
    },
    {
      id: "card-2",
      title: "Card title",
      subtitle: "Subtitle",
      bodyText: "body text of the card",
      noteText: "Note text of the card",
      state: "selected" as const,
    },
    {
      id: "card-3",
      title: "Card title",
      subtitle: "Subtitle",
      bodyText: "body text of the card",
      noteText: "Note text of the card",
      state: "disabled-selected" as const,
    },
    {
      id: "card-4",
      title: "Card title",
      subtitle: "Subtitle",
      bodyText: "body text of the card",
      noteText: "Note text of the card",
      state: "error" as const,
      errorMessage: "Error message",
    },
    {
      id: "card-5",
      title: "Card title",
      subtitle: "Subtitle",
      bodyText: "body text of the card",
      noteText: "Note text of the card",
      state: "disabled" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background-base">
      {/* Top Navigation */}
      <TopNav
        title="Design System"
        showBackButton={true}
        showTitleChevron={true}
        onBack={() => console.log("Back clicked")}
        actions={
          <Button variant="outline" size="sm" className="text-small-callout">
            Action
          </Button>
        }
      />

      <div className="container mx-auto p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-title-1 text-content-primary">Design System Components</h1>
          <p className="text-large-reg text-content-secondary">
            Updated components based on your Figma documentation and typography tokens.
          </p>
        </div>

        <Tabs defaultValue="components" className="space-y-6">
          <TabsList>
            <TabsTrigger value="components" className="text-middle-callout">
              Components
            </TabsTrigger>
            <TabsTrigger value="typography" className="text-middle-callout">
              Typography
            </TabsTrigger>
            <TabsTrigger value="colors" className="text-middle-callout">
              Colors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="space-y-8">
            {/* Top Nav Variants */}
            <UICard>
              <CardHeader>
                <CardTitle className="text-title-3">Top Navigation</CardTitle>
                <CardDescription className="text-middle-reg">
                  Normal and shrunk title states (scroll to see shrunk state)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-background-display">
                  <TopNav title="Normal Title" variant="normal" showBackButton={true} showTitleChevron={true} />
                </div>
                <div className="border rounded-lg p-4 bg-background-display">
                  <TopNav title="Shrunk Title" variant="shrunk" showCloseButton={true} showTitleChevron={true} />
                </div>
              </CardContent>
            </UICard>

            {/* Slider Component */}
            <UICard>
              <CardHeader>
                <CardTitle className="text-title-3">Slider Component</CardTitle>
                <CardDescription className="text-middle-reg">
                  Period selection slider as per documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Slider
                  label="Period"
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  min={12}
                  max={84}
                  step={1}
                  minLabel="12"
                  maxLabel="84 months"
                  formatValue={(value) => value.toString()}
                />

                <Slider
                  label="Smart Bumps"
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  min={10}
                  max={30}
                  step={1}
                  minLabel="10"
                  maxLabel="30"
                  formatValue={(value) => value.toString()}
                />
              </CardContent>
            </UICard>

            {/* Card Components */}
            <UICard>
              <CardHeader>
                <CardTitle className="text-title-3">Card Component States</CardTitle>
                <CardDescription className="text-middle-reg">
                  All card states and variants as per documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Right alignment */}
                  <div>
                    <h4 className="text-large-callout text-content-primary mb-4">Right Alignment</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {cardData.map((card) => (
                        <Card
                          key={`right-${card.id}`}
                          title={card.title}
                          subtitle={card.subtitle}
                          bodyText={card.bodyText}
                          noteText={card.noteText}
                          state={card.state}
                          alignment="right"
                          showRecommended={true}
                          showSubtitleInfo={true}
                          errorMessage={card.errorMessage}
                          onSelect={() => setSelectedCard(`right-${card.id}`)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Left alignment */}
                  <div>
                    <h4 className="text-large-callout text-content-primary mb-4">Left Alignment</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {cardData.map((card) => (
                        <Card
                          key={`left-${card.id}`}
                          title={card.title}
                          subtitle={card.subtitle}
                          bodyText={card.bodyText}
                          noteText={card.noteText}
                          state={card.state}
                          alignment="left"
                          showRecommended={true}
                          showSubtitleInfo={true}
                          errorMessage={card.errorMessage}
                          onSelect={() => setSelectedCard(`left-${card.id}`)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </UICard>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <UICard>
              <CardHeader>
                <CardTitle className="text-title-3">Typography System</CardTitle>
                <CardDescription className="text-middle-reg">
                  Based on your Figma typography tokens (using Inter as temporary replacement for Fabriga)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-title-1 text-content-primary">Title 1 · Bold · 34</h2>
                    <p className="text-small-reg text-content-subdued">text-title-1</p>
                  </div>
                  <div>
                    <h3 className="text-title-2 text-content-primary">Title 2 · Bold · 24</h3>
                    <p className="text-small-reg text-content-subdued">text-title-2</p>
                  </div>
                  <div>
                    <h4 className="text-title-3 text-content-primary">Title 3 · Bold · 20</h4>
                    <p className="text-small-reg text-content-subdued">text-title-3</p>
                  </div>
                  <div>
                    <p className="text-large-reg text-content-primary">Large · Reg · 17</p>
                    <p className="text-small-reg text-content-subdued">text-large-reg</p>
                  </div>
                  <div>
                    <p className="text-large-callout text-content-primary">Large · Callout · 17</p>
                    <p className="text-small-reg text-content-subdued">text-large-callout</p>
                  </div>
                  <div>
                    <p className="text-middle-reg text-content-primary">Middle · Reg · 15</p>
                    <p className="text-small-reg text-content-subdued">text-middle-reg</p>
                  </div>
                  <div>
                    <p className="text-middle-callout text-content-primary">Middle · Callout · 15</p>
                    <p className="text-small-reg text-content-subdued">text-middle-callout</p>
                  </div>
                  <div>
                    <p className="text-small-reg text-content-primary">Small · Reg · 13</p>
                    <p className="text-small-reg text-content-subdued">text-small-reg</p>
                  </div>
                  <div>
                    <p className="text-small-callout text-content-primary">Small · Callout · 13</p>
                    <p className="text-small-reg text-content-subdued">text-small-callout</p>
                  </div>
                  <div>
                    <p className="text-tiny-reg text-content-primary">Tiny · Reg · 11</p>
                    <p className="text-small-reg text-content-subdued">text-tiny-reg</p>
                  </div>
                  <div>
                    <p className="text-teeny-tiny-reg text-content-primary">Teeny Tiny · Reg · 9</p>
                    <p className="text-small-reg text-content-subdued">text-teeny-tiny-reg</p>
                  </div>
                </div>
              </CardContent>
            </UICard>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <UICard>
              <CardHeader>
                <CardTitle className="text-title-3">Color System</CardTitle>
                <CardDescription className="text-middle-reg">
                  Your custom color tokens with semantic naming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {/* Core Colors */}
                  <div>
                    <h3 className="text-large-callout text-content-primary mb-3">Core Colors</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-core-primary1"></div>
                        <div>
                          <p className="text-middle-callout text-content-primary">Primary 1</p>
                          <p className="text-small-reg text-content-secondary">core/primary1</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-core-primary2"></div>
                        <div>
                          <p className="text-middle-callout text-content-primary">Primary 2</p>
                          <p className="text-small-reg text-content-secondary">core/primary2</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Colors */}
                  <div>
                    <h3 className="text-large-callout text-content-primary mb-3">Content Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-content-primary"></div>
                        <div>
                          <p className="text-small-callout text-content-primary">Primary</p>
                          <p className="text-tiny-reg text-content-secondary">content/primary</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-content-interactive"></div>
                        <div>
                          <p className="text-small-callout text-content-primary">Interactive</p>
                          <p className="text-tiny-reg text-content-secondary">content/interactive</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-content-positive"></div>
                        <div>
                          <p className="text-small-callout text-content-primary">Positive</p>
                          <p className="text-tiny-reg text-content-secondary">content/positive</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-content-negative"></div>
                        <div>
                          <p className="text-small-callout text-content-primary">Negative</p>
                          <p className="text-tiny-reg text-content-secondary">content/negative</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </UICard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Add named export for Demo
export const Demo = DesignSystemDemo
