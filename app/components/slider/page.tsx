"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Slider } from "@/components/design-system/slider"

export default function SliderPage() {
  const [basicValue, setBasicValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([20, 80])
  const [periodValue, setPeriodValue] = useState([12])

  return (
    <ComponentPage
      title="Slider"
      description="Sliders allow users to select a value or range of values by moving a handle along a track. They're ideal for adjusting settings like volume, brightness, or selecting ranges."
    >
      <VariantSection title="Basic Usage">
        <VariantCard
          name="Basic Slider"
          description="A simple slider with default styling and value display."
          code="<Slider />"
        >
          <Slider value={basicValue} onValueChange={setBasicValue} min={0} max={100} step={1} />
        </VariantCard>

        <VariantCard
          name="Range Slider"
          description="A slider with two handles for selecting a range of values."
          code="<Slider value={[20, 80]} />"
        >
          <Slider value={rangeValue} onValueChange={setRangeValue} min={0} max={100} step={1} />
        </VariantCard>
      </VariantSection>

      <VariantSection title="With Labels">
        <VariantCard
          name="Labeled Slider"
          description="Slider with a label and custom min/max labels."
          code='<Slider label="Period" minLabel="12" maxLabel="84 months" />'
        >
          <Slider
            label="Period"
            value={periodValue}
            onValueChange={setPeriodValue}
            min={12}
            max={84}
            step={1}
            minLabel="12"
            maxLabel="84 months"
            formatValue={(value) => `${value} months`}
          />
        </VariantCard>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Required Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Current
                  value(s) of the slider
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onValueChange</code> -
                  Callback when value changes
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label text
                  above the slider
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">min</code> - Minimum value
                  (default: 0)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">max</code> - Maximum value
                  (default: 100)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">step</code> - Step increment
                  (default: 1)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">showValues</code> - Show
                  value indicators (default: true)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">formatValue</code> - Custom
                  value formatter function
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">minLabel</code> - Custom
                  label for minimum value
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">maxLabel</code> - Custom
                  label for maximum value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
