"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Picker, DatePicker, LayeredPicker } from "@/components/design-system/input/picker"
import { User } from "lucide-react"

export default function PickerPage() {
  const [simpleValue, setSimpleValue] = useState("")
  const [dateValue, setDateValue] = useState("")
  const [layeredValue, setLayeredValue] = useState("")

  return (
    <ComponentPage
      title="Picker"
      description="A picker input allows users to fill in the input field with preset options. It's usually used in combination with 'Selection list', where tapping on the picker input will open a page/bottom sheet with the list options."
    >
      <VariantSection title="Picker Types">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard
            name="Simple Picker"
            description="Used in 1-step selections, such as condition, brand selection."
            code="<Picker />"
          >
            <Picker
              label="Label"
              placeholder="Choose"
              value={simpleValue}
              onClick={() => console.log("Open selection")}
            />
          </VariantCard>

          <VariantCard
            name="Date Picker"
            description="Used for date selection. To select a range, use 2 date pickers for start and end date."
            code="<DatePicker />"
          >
            <DatePicker
              label="Label"
              placeholder="DD MMM YYYY"
              value={dateValue}
              onClick={() => console.log("Open calendar")}
            />
          </VariantCard>

          <VariantCard
            name="Layered Picker"
            description="Used in multi-step selections, such as category selections and the Certified mobile product selection flow."
            code="<LayeredPicker />"
          >
            <LayeredPicker
              label="Label"
              title="Title"
              subtitle="Subtitle"
              icon={<User className="h-5 w-5" />}
              onClick={() => console.log("Open layered selection")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Picker States">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard name="Default" description="Empty picker with placeholder text." code="Default state">
            <Picker label="Label" placeholder="Choose" onClick={() => console.log("Open selection")} />
          </VariantCard>

          <VariantCard name="Focused" description="Picker in focused state." code="Focused state">
            <Picker
              label="Label"
              placeholder="Choose"
              onClick={() => console.log("Open selection")}
              className="ring-2 ring-stroke-halo-focused"
            />
          </VariantCard>

          <VariantCard name="Filled" description="Picker with selected value." code="Filled state">
            <Picker label="Label" value="Selected value" onClick={() => console.log("Open selection")} />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Date Picker Variants">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard name="Default" description="Empty date picker." code="Default state">
            <DatePicker label="Label" onClick={() => console.log("Open calendar")} />
          </VariantCard>

          <VariantCard name="Filled" description="Date picker with selected date." code="Filled state">
            <DatePicker label="Label" value="25 Apr 2023" onClick={() => console.log("Open calendar")} />
          </VariantCard>

          <VariantCard name="With Error" description="Date picker showing error state." code="Error state">
            <DatePicker
              label="Label"
              value="25 Apr 2023"
              error="Error text"
              onClick={() => console.log("Open calendar")}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-8">
          <div>
            <h4 className="text-large-callout text-content-primary mb-3">Common Props</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Required Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClick</code> - Function
                    called when picker is tapped
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Optional Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label text
                    above the picker
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">placeholder</code> -
                    Placeholder text when empty
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Selected
                    value to display
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Whether
                    the picker is disabled
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">error</code> - Error
                    message to display
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help text
                    below the picker
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-large-callout text-content-primary mb-3">LayeredPicker Specific Props</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Additional Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">title</code> - Main title
                    text
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">subtitle</code> - Secondary
                    subtitle text
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">icon</code> - Icon element
                    to display
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
