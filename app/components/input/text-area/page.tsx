"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { TextArea } from "@/components/design-system/input/text-area"

export default function TextAreaPage() {
  const [basicValue, setBasicValue] = useState("")
  const [limitedValue, setLimitedValue] = useState("")

  return (
    <ComponentPage
      title="Text Area"
      description="Text areas allow users to enter and edit multi-line text. They support character counting, resizing, and various validation states."
    >
      <VariantSection title="Basic Usage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Basic Text Area" description="Simple multi-line text input." code="<TextArea />">
            <TextArea
              label="Label"
              placeholder="Placeholder"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
          </VariantCard>

          <VariantCard
            name="With Help Text"
            description="Text area with additional help information."
            code="<TextArea helpText='...' />"
          >
            <TextArea
              label="Label"
              placeholder="Placeholder"
              helpText="Description / Help text"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Character Counting">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Character Count"
            description="Text area showing current character count."
            code="showCharacterCount={true}"
          >
            <TextArea
              label="Label"
              placeholder="Placeholder"
              showCharacterCount={true}
              value={limitedValue}
              onChange={(e) => setLimitedValue(e.target.value)}
            />
          </VariantCard>

          <VariantCard
            name="With Character Limit"
            description="Text area with maximum character limit."
            code="maxLength={100} showCharacterCount={true}"
          >
            <TextArea
              label="Label"
              placeholder="Placeholder"
              maxLength={100}
              showCharacterCount={true}
              value={limitedValue}
              onChange={(e) => setLimitedValue(e.target.value)}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Resize Options">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Vertical Resize (Default)"
            description="Text area that can be resized vertically."
            code='resize="vertical"'
          >
            <TextArea label="Label" placeholder="Placeholder" resize="vertical" />
          </VariantCard>

          <VariantCard name="No Resize" description="Text area with fixed dimensions." code='resize="none"'>
            <TextArea label="Label" placeholder="Placeholder" resize="none" />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Error State" description="Text area showing validation error." code="errorMessage='...'">
            <TextArea
              label="Label"
              placeholder="Placeholder"
              value="Some invalid content"
              errorMessage="Error message"
            />
          </VariantCard>

          <VariantCard name="Disabled State" description="Non-interactive disabled text area." code="disabled={true}">
            <TextArea label="Label" placeholder="Placeholder" disabled={true} />
          </VariantCard>

          <VariantCard
            name="With Text Link"
            description="Text area with additional action link."
            code="textLink={{text: 'Link', onClick: () => {}}}"
          >
            <TextArea
              label="Description"
              placeholder="Enter description"
              textLink={{
                text: "Text link",
                onClick: () => console.log("Text link clicked"),
              }}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label text
                  above the text area
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help text
                  below the text area
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">errorMessage</code> - Error
                  message to display
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">textLink</code> - Additional
                  action link
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showCharacterCount</code> -
                  Show character count
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">More Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">maxLength</code> - Maximum
                  character limit
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">resize</code> - Resize
                  behavior (none, vertical, horizontal, both)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">rows</code> - Number of
                  visible text lines
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disable the
                  text area
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">placeholder</code> -
                  Placeholder text
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
