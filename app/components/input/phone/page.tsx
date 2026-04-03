"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { PhoneInput } from "@/components/design-system/input/phone-input"

export default function PhoneInputPage() {
  const [phoneValue, setPhoneValue] = useState("")

  return (
    <ComponentPage
      title="Phone Input"
      description="Phone input combines a country flag, country code, and phone number field. Labels, country flag and prefix are mandatory to indicate the country of the phone number."
    >
      <VariantSection title="Basic Usage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Basic Phone Input"
            description="Standard phone input with country code."
            code="<PhoneInput />"
          >
            <PhoneInput label="Phone number" placeholder="Placeholder" value={phoneValue} onChange={setPhoneValue} />
          </VariantCard>

          <VariantCard
            name="With Help Text"
            description="Phone input with additional help information."
            code="<PhoneInput helpText='...' />"
          >
            <PhoneInput
              label="Phone number"
              placeholder="Placeholder"
              helpText="Help text"
              value={phoneValue}
              onChange={setPhoneValue}
            />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Different Countries">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Singapore"
            description="Phone input for Singapore numbers."
            code='countryCode="+65" countryFlag="🇸🇬"'
          >
            <PhoneInput label="Phone number" placeholder="91784321" countryCode="+65" countryFlag="🇸🇬" />
          </VariantCard>

          <VariantCard
            name="United States"
            description="Phone input for US numbers."
            code='countryCode="+1" countryFlag="🇺🇸"'
          >
            <PhoneInput label="Phone number" placeholder="(555) 123-4567" countryCode="+1" countryFlag="🇺🇸" />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Filled State" description="Phone input with entered number." code="Filled state">
            <PhoneInput label="Phone number" value="91784321" onChange={() => {}} />
          </VariantCard>

          <VariantCard name="Error State" description="Phone input showing validation error." code="errorMessage='...'">
            <PhoneInput label="Phone number" value="91784321" errorMessage="Error message" onChange={() => {}} />
          </VariantCard>

          <VariantCard name="Disabled State" description="Non-interactive disabled phone input." code="disabled={true}">
            <PhoneInput label="Phone number" placeholder="Placeholder" disabled={true} />
          </VariantCard>

          <VariantCard
            name="With Text Link"
            description="Phone input with additional action link."
            code="textLink={{text: 'Link', onClick: () => {}}}"
          >
            <PhoneInput
              label="Phone number"
              placeholder="Placeholder"
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">countryCode</code> - Country
                  code prefix (default: "+65")
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">More Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">countryFlag</code> - Country
                  flag emoji (default: "🇸🇬")
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Phone number
                  value
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onChange</code> - Function
                  called when value changes
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">placeholder</code> -
                  Placeholder text
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
