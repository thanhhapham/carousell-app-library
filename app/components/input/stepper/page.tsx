"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Stepper } from "@/components/design-system/input/stepper"

export default function StepperPage() {
  const [defaultValue, setDefaultValue] = useState(0)
  const [minReachedValue, setMinReachedValue] = useState(0)
  const [maxReachedValue, setMaxReachedValue] = useState(10)

  return (
    <ComponentPage
      title="Stepper"
      description="Steppers allow users to increment or decrement numeric values with plus and minus buttons."
    >
      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard name="Default" description="Standard stepper with no limits reached." code="<Stepper />">
            <Stepper label="Label" value={defaultValue} onChange={setDefaultValue} min={0} max={100} />
          </VariantCard>

          <VariantCard
            name="Min Reached"
            description="Stepper with minimum value reached."
            code="<Stepper value={0} min={0} />"
          >
            <Stepper label="Label" value={minReachedValue} onChange={setMinReachedValue} min={0} max={100} />
          </VariantCard>

          <VariantCard
            name="Max Reached"
            description="Stepper with maximum value reached."
            code="<Stepper value={10} max={10} />"
          >
            <Stepper label="Label" value={maxReachedValue} onChange={setMaxReachedValue} min={0} max={10} />
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Current
                  numeric value
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onChange</code> - Function
                  called when value changes
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label text
                  above the stepper
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">min</code> - Minimum allowed
                  value (default: 0)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">max</code> - Maximum allowed
                  value (default: Infinity)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">step</code> -
                  Increment/decrement step size (default: 1)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disables
                  the stepper
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
