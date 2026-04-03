"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Button } from "@/components/design-system/button"
import { Heart, Plus, Search, Download } from "lucide-react"

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <ComponentPage
      title="Button"
      description="Buttons allow users to take actions, make choices or navigate within a product or website. They provide clear visual hierarchy and can represent different states and priorities."
    >
      <VariantSection title="Button Types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VariantCard name="Primary Button" description="For primary actions, like 'Save'." code='variant="primary"'>
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="large">
                Primary
              </Button>
              <Button variant="primary" size="medium">
                Primary
              </Button>
              <Button variant="primary" size="small">
                Primary
              </Button>
            </div>
          </VariantCard>

          <VariantCard
            name="Secondary Button"
            description="For secondary actions, like 'Cancel'."
            code='variant="secondary"'
          >
            <div className="flex flex-col gap-3">
              <Button variant="secondary" size="large">
                Secondary
              </Button>
              <Button variant="secondary" size="medium">
                Secondary
              </Button>
              <Button variant="secondary" size="small">
                Secondary
              </Button>
            </div>
          </VariantCard>

          <VariantCard name="Text Button" description="For tertiary actions or links." code='variant="text"'>
            <div className="space-y-4">
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Teal Variant</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="text" textVariant="teal" size="large">
                    Text Button
                  </Button>
                  <Button variant="text" textVariant="teal" size="medium">
                    Text Button
                  </Button>
                  <Button variant="text" textVariant="teal" size="small">
                    Text Button
                  </Button>
                </div>
              </div>
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Grey Variant</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="text" textVariant="grey" size="large">
                    Text Button
                  </Button>
                  <Button variant="text" textVariant="grey" size="medium">
                    Text Button
                  </Button>
                  <Button variant="text" textVariant="grey" size="small">
                    Text Button
                  </Button>
                </div>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Rounded Button"
            description="For floating action buttons or special emphasis."
            code='variant="rounded"'
          >
            <div className="space-y-4">
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Filled Green (Default)</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="rounded" size="large">
                    Rounded
                  </Button>
                  <Button variant="rounded" size="medium">
                    Rounded
                  </Button>
                  <Button variant="rounded" size="small">
                    Rounded
                  </Button>
                </div>
              </div>
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Outlined Grey</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="rounded" roundedVariant="outlined-grey" size="large">
                    Outlined
                  </Button>
                  <Button variant="rounded" roundedVariant="outlined-grey" size="medium">
                    Outlined
                  </Button>
                  <Button variant="rounded" roundedVariant="outlined-grey" size="small">
                    Outlined
                  </Button>
                </div>
              </div>
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Filled Grey</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="rounded" roundedVariant="filled-grey" size="large">
                    Filled Grey
                  </Button>
                  <Button variant="rounded" roundedVariant="filled-grey" size="medium">
                    Filled Grey
                  </Button>
                  <Button variant="rounded" roundedVariant="filled-grey" size="small">
                    Filled Grey
                  </Button>
                </div>
              </div>
            </div>
          </VariantCard>

          <VariantCard name="Icon Button" description="For actions represented by icons only." code='variant="icon"'>
            <div className="space-y-4">
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">Primary (Default)</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="icon" size="large">
                    <Plus className="w-5 h-5" />
                  </Button>
                  <Button variant="icon" size="medium">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="icon" size="small">
                    <Heart className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <div>
                <h5 className="text-small-callout text-content-primary mb-2">General</h5>
                <div className="flex flex-col gap-3">
                  <Button variant="icon" iconVariant="general" size="large">
                    <Plus className="w-5 h-5" />
                  </Button>
                  <Button variant="icon" iconVariant="general" size="medium">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="icon" iconVariant="general" size="small">
                    <Heart className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Primary Button Sub-Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Promote Button"
            description="For promotional actions, same style as primary."
            code='variant="primary" primaryVariant="promote"'
          >
            <div className="flex flex-col gap-3">
              <Button variant="primary" primaryVariant="promote" size="large">
                Promote
              </Button>
              <Button variant="primary" primaryVariant="promote" size="medium">
                Promote
              </Button>
              <Button variant="primary" primaryVariant="promote" size="small">
                Promote
              </Button>
            </div>
          </VariantCard>

          <VariantCard
            name="Task Button"
            description="For task-related actions, lighter teal style."
            code='variant="primary" primaryVariant="task"'
          >
            <div className="flex flex-col gap-3">
              <Button variant="primary" primaryVariant="task" size="large">
                Task
              </Button>
              <Button variant="primary" primaryVariant="task" size="medium">
                Task
              </Button>
              <Button variant="primary" primaryVariant="task" size="small">
                Task
              </Button>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Text Button Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Teal Text Buttons"
            description="Interactive teal color for primary text actions."
            code='textVariant="teal"'
          >
            <div className="flex gap-3">
              <Button variant="text" textVariant="teal">
                Normal
              </Button>
              <Button variant="text" textVariant="teal" disabled>
                Disabled
              </Button>
              <Button variant="text" textVariant="teal" loading>
                Loading
              </Button>
            </div>
          </VariantCard>

          <VariantCard
            name="Grey Text Buttons"
            description="Subdued grey color for secondary text actions."
            code='textVariant="grey"'
          >
            <div className="flex gap-3">
              <Button variant="text" textVariant="grey">
                Normal
              </Button>
              <Button variant="text" textVariant="grey" disabled>
                Disabled
              </Button>
              <Button variant="text" textVariant="grey" loading>
                Loading
              </Button>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States and Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Normal State" description="Default interactive state." code="Normal state">
            <div className="flex gap-3">
              <Button variant="primary">Normal</Button>
              <Button variant="secondary">Normal</Button>
              <Button variant="text" textVariant="teal">
                Normal
              </Button>
            </div>
          </VariantCard>

          <VariantCard name="Disabled State" description="Non-interactive disabled state." code="disabled={true}">
            <div className="flex gap-3">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
              <Button variant="text" textVariant="teal" disabled>
                Disabled
              </Button>
            </div>
          </VariantCard>

          <VariantCard name="Loading State" description="Shows loading spinner." code="loading={true}">
            <div className="flex gap-3">
              <Button variant="primary" loading={loading} onClick={handleLoadingDemo}>
                {loading ? "Loading..." : "Click to Load"}
              </Button>
              <Button variant="secondary" loading>
                Loading
              </Button>
            </div>
          </VariantCard>

          <VariantCard name="With Icons" description="Buttons with leading or trailing icons." code="icon={<Icon />}">
            <div className="flex gap-3">
              <Button variant="primary" icon={<Download className="w-4 h-4" />} iconPosition="left">
                Download
              </Button>
              <Button variant="secondary" icon={<Heart className="w-4 h-4" />} iconPosition="right">
                Like
              </Button>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Full Width">
        <VariantCard
          name="Full Width Button"
          description="Button that spans the full container width."
          code="fullWidth={true}"
        >
          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">children</code> - Button
                  content
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Button style
                  (primary, secondary, text, rounded, icon)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">textVariant</code> - Text
                  button color (teal, grey)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">size</code> - Button size
                  (small, medium, large)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">loading</code> - Show loading
                  state
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disable
                  button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">icon</code> - Icon element
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">iconPosition</code> - Icon
                  position (left, right)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">fullWidth</code> - Full width
                  button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClick</code> - Click
                  handler
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">primaryVariant</code> -
                  Primary button sub-variant (promote, task)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">roundedVariant</code> -
                  Rounded button sub-variant (outlined-grey, filled-grey)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">iconVariant</code> - Icon
                  button variant (primary, general)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
