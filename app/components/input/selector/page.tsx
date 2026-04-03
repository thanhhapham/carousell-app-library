"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Checkbox, Radio, Switch } from "@/components/design-system/input/selector"

export default function SelectorPage() {
  const [checkboxState, setCheckboxState] = useState(false)
  const [radioState, setRadioState] = useState(false)
  const [switchState, setSwitchState] = useState(false)

  return (
    <ComponentPage
      title="Selector"
      description="Selectors allow users to select single option (radio) or multiple options (checkbox), or to turn on and off a setting (switch)."
    >
      <VariantSection title="Checkbox">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Standard Checkbox"
            description="Default checkbox for selecting options."
            code="<Checkbox />"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Checkbox checked={false} onChange={() => {}} />
                <span className="text-middle-reg text-content-primary">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={true} onChange={() => {}} />
                <span className="text-middle-reg text-content-primary">Checked</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Disabled Checkbox"
            description="Non-interactive disabled checkbox."
            code="<Checkbox disabled={true} />"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Checkbox checked={false} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={true} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">Checked</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="On Image Checkbox"
            description="Checkbox designed to be used on image backgrounds."
            code="<Checkbox onImage={true} />"
          >
            <div className="p-4 bg-background-inverse rounded-lg">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Checkbox checked={false} onChange={() => {}} onImage={true} />
                  <span className="text-middle-reg text-content-on-dark">Unchecked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox checked={true} onChange={() => {}} onImage={true} />
                  <span className="text-middle-reg text-content-on-dark">Checked</span>
                </div>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Interactive Checkbox"
            description="Checkbox that can be toggled."
            code="<Checkbox checked={state} onChange={setState} />"
          >
            <div className="flex items-center gap-2">
              <Checkbox checked={checkboxState} onChange={setCheckboxState} />
              <span className="text-middle-reg text-content-primary">{checkboxState ? "Checked" : "Unchecked"}</span>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Radio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Standard Radio" description="Default radio button for single selection." code="<Radio />">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Radio checked={false} onChange={() => {}} />
                <span className="text-middle-reg text-content-primary">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio checked={true} onChange={() => {}} />
                <span className="text-middle-reg text-content-primary">Checked</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Disabled Radio"
            description="Non-interactive disabled radio button."
            code="<Radio disabled={true} />"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Radio checked={false} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio checked={true} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">Checked</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Interactive Radio"
            description="Radio button that can be selected."
            code="<Radio checked={state} onChange={setState} />"
          >
            <div className="flex items-center gap-2">
              <Radio checked={radioState} onChange={setRadioState} />
              <span className="text-middle-reg text-content-primary">{radioState ? "Selected" : "Unselected"}</span>
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Switch">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="iOS Style Switch"
            description="Toggle switch with iOS styling."
            code='<Switch variant="ios" />'
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Switch checked={false} onChange={() => {}} variant="ios" />
                <span className="text-middle-reg text-content-primary">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={true} onChange={() => {}} variant="ios" />
                <span className="text-middle-reg text-content-primary">On</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Android Style Switch"
            description="Toggle switch with Android styling."
            code='<Switch variant="android" />'
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Switch checked={false} onChange={() => {}} variant="android" />
                <span className="text-middle-reg text-content-primary">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={true} onChange={() => {}} variant="android" />
                <span className="text-middle-reg text-content-primary">On</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Disabled Switch"
            description="Non-interactive disabled switch."
            code="<Switch disabled={true} />"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Switch checked={false} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={true} onChange={() => {}} disabled={true} />
                <span className="text-middle-reg text-content-subdued">On</span>
              </div>
            </div>
          </VariantCard>

          <VariantCard
            name="Interactive Switch"
            description="Switch that can be toggled."
            code="<Switch checked={state} onChange={setState} />"
          >
            <div className="flex items-center gap-2">
              <Switch checked={switchState} onChange={setSwitchState} />
              <span className="text-middle-reg text-content-primary">{switchState ? "On" : "Off"}</span>
            </div>
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
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">checked</code> - Whether
                    the selector is checked/selected
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">onChange</code> - Function
                    called when the state changes
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Optional Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Whether
                    the selector is disabled
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">className</code> -
                    Additional CSS classes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-large-callout text-content-primary mb-3">Component-Specific Props</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Checkbox</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Visual
                    style (ios, android)
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">onImage</code> - Whether
                    the checkbox is on an image background
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Switch</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Visual
                    style (ios, android)
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
