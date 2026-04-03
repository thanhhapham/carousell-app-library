"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { BottomBarTask } from "@/components/design-system/bottom-bar/task"

export default function BottomBarTaskPage() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <ComponentPage
      title="Bottom Bar / Task"
      description="Bottom bar for tasks is used to display primary and secondary tasks for the page. It's always floating and sticky at bottom, mainly used on mobile and mobile."
    >
      <VariantSection title="Task Types">
        <VariantCard
          name="Single Button"
          description="When there is only one main action that the user can take."
          code="Single button (Primary prompts)"
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTask
              primaryText="Something user should know before tapping on the button"
              primaryButton={{
                text: "Button",
                onClick: () => console.log("Primary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="Two Buttons"
          description="When there is only one main action that the user can take, we display a single button and use primary task for other actions."
          code="Single button (Task text)"
        >
          <div className="relative h-32 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTask
              primaryText="Something user should know before tapping on the button"
              primaryButton={{
                text: "Button",
                onClick: () => console.log("Primary clicked"),
              }}
              secondaryButton={{
                text: "Button",
                onClick: () => console.log("Secondary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="With Checkbox"
          description="When there are two actions the user can take, we display two buttons. And we use a mix of primary and secondary button for actions that display hierarchy."
          code="A mix of primary and secondary button"
        >
          <div className="relative h-40 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTask
              primaryText="Something user should know before tapping on the button"
              showCheckbox={true}
              checkboxChecked={checkboxChecked}
              onCheckboxChange={setCheckboxChecked}
              primaryButton={{
                text: "Button",
                onClick: () => console.log("Primary clicked"),
                disabled: !checkboxChecked,
              }}
              secondaryButton={{
                text: "Button",
                onClick: () => console.log("Secondary clicked"),
              }}
            />
          </div>
        </VariantCard>

        <VariantCard
          name="With Text Button"
          description="When 1 of the CTAs has much stronger priority, like in the scenario of Book and Host or Cancel and Done, we can use text button."
          code="Text button priority"
        >
          <div className="relative h-40 bg-background-display rounded-lg overflow-hidden">
            <BottomBarTask
              primaryText="Something user should know before tapping on the button"
              primaryButton={{
                text: "Button",
                onClick: () => console.log("Primary clicked"),
              }}
              secondaryButton={{
                text: "Button",
                onClick: () => console.log("Secondary clicked"),
              }}
              textButton={{
                text: "Text Button",
                onClick: () => console.log("Text button clicked"),
              }}
            />
          </div>
        </VariantCard>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">primaryButton</code> -
                  Primary action button configuration
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">primaryText</code> - Main
                  descriptive text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">secondaryText</code> -
                  Additional context text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">helpText</code> - Help or
                  instruction text
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">secondaryButton</code> -
                  Secondary action button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">textButton</code> -
                  Text-style button
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showCheckbox</code> - Show
                  terms checkbox
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">checkboxChecked</code> -
                  Checkbox state
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onCheckboxChange</code> -
                  Checkbox change handler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
