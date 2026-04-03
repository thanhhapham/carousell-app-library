"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { TextInput } from "@/components/design-system/input/text-input"
import { Search, User } from "lucide-react"

export default function TextInputPage() {
  const [basicValue, setBasicValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  return (
    <ComponentPage
      title="Text Input"
      description="Text inputs allow users to enter and edit text. They support various configurations including labels, help text, icons, and validation states."
    >
      <VariantSection title="Basic Usage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Basic Input" description="Simple text input with label." code="<TextInput />">
            <TextInput
              label="Label"
              placeholder="Placeholder"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
          </VariantCard>

          <VariantCard
            name="With Help Text"
            description="Text input with additional help information."
            code="<TextInput helpText='...' />"
          >
            <TextInput
              label="Label"
              placeholder="Placeholder"
              helpText="Help text / Description"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Input Sizes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard name="Small" description="Compact input for dense layouts." code='size="small"'>
            <TextInput label="Label" placeholder="Placeholder" size="small" />
          </VariantCard>

          <VariantCard name="Medium (Default)" description="Standard input size." code='size="medium"'>
            <TextInput label="Label" placeholder="Placeholder" size="medium" />
          </VariantCard>

          <VariantCard name="Large" description="Larger input for emphasis." code='size="large"'>
            <TextInput label="Label" placeholder="Placeholder" size="large" />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="With Icons and Affixes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Leading Icon"
            description="Input with icon on the left side."
            code="leadingIcon={<Icon />}"
          >
            <TextInput label="Label" placeholder="Search..." leadingIcon={<Search className="h-4 w-4" />} />
          </VariantCard>

          <VariantCard
            name="With Trailing Icon"
            description="Input with icon on the right side."
            code="trailingIcon={<Icon />}"
          >
            <TextInput label="Label" placeholder="Username" trailingIcon={<User className="h-4 w-4" />} />
          </VariantCard>

          <VariantCard name="With Prefix" description="Input with text prefix." code='prefix="$"'>
            <TextInput label="Price" placeholder="0.00" prefix="$" />
          </VariantCard>

          <VariantCard name="With Suffix" description="Input with text suffix." code='suffix="USD"'>
            <TextInput label="Amount" placeholder="100" suffix="USD" />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Password Input">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Password Field"
            description="Password input with toggle visibility."
            code='variant="password" showPasswordToggle={true}'
          >
            <TextInput
              label="Password"
              placeholder="Enter password"
              variant="password"
              showPasswordToggle={true}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Error State" description="Input showing validation error." code="errorMessage='...'">
            <TextInput
              label="Email"
              placeholder="Enter email"
              value="invalid-email"
              errorMessage="Please enter a valid email address"
            />
          </VariantCard>

          <VariantCard name="Disabled State" description="Non-interactive disabled input." code="disabled={true}">
            <TextInput label="Label" placeholder="Placeholder" disabled={true} />
          </VariantCard>

          <VariantCard
            name="With Text Link"
            description="Input with additional action link."
            code="textLink={{text: 'Link', onClick: () => {}}}"
          >
            <TextInput
              label="Password"
              placeholder="Enter password"
              variant="password"
              showPasswordToggle={true}
              textLink={{
                text: "Forgot password?",
                onClick: () => console.log("Forgot password clicked"),
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
                  above the input
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help text
                  below the input
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">prefix</code> - Text prefix
                  inside input
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">suffix</code> - Text suffix
                  inside input
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">More Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">leadingIcon</code> - Icon on
                  the left side
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">trailingIcon</code> - Icon on
                  the right side
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">size</code> - Input size
                  (small, medium, large)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Input
                  variant (default, password)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showPasswordToggle</code> -
                  Show password visibility toggle
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disable the
                  input
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
