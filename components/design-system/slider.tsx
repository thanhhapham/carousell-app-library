"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string
  showValues?: boolean
  formatValue?: (value: number) => string
  minLabel?: string
  maxLabel?: string
  unit?: string
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      label,
      showValues = true,
      formatValue,
      minLabel,
      maxLabel,
      unit = "",
      value,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || value || [min])
    const currentValue = value || internalValue

    const defaultFormatValue = (val: number) => `${val}${unit}`
    const valueFormatter = formatValue || defaultFormatValue

    return (
      <div className="w-full space-y-3">
        {/* Label */}
        {label && <div className="text-small-callout text-content-primary">{label}</div>}

        {/* Value indicators */}
        {showValues && (
          <div className="flex justify-between items-center">
            <span className="text-tiny-reg text-content-secondary">{minLabel || valueFormatter(min)}</span>
            <span className="text-tiny-reg text-content-secondary">{maxLabel || valueFormatter(max)}</span>
          </div>
        )}

        {/* Slider */}
        <div className="relative">
          <SliderPrimitive.Root
            ref={ref}
            className={cn("relative flex w-full touch-none select-none items-center", className)}
            value={currentValue}
            onValueChange={value ? props.onValueChange : setInternalValue}
            min={min}
            max={max}
            step={step}
            {...props}
          >
            {/* Track */}
            <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-stroke-input">
              <SliderPrimitive.Range className="absolute h-full bg-core-primary1" />
            </SliderPrimitive.Track>

            {/* Thumb */}
            {currentValue.map((_, index) => (
              <SliderPrimitive.Thumb
                key={index}
                className="block h-5 w-5 rounded-full border-2 border-core-primary1 bg-background-base shadow-lg ring-offset-background-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-halo-focused focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              />
            ))}
          </SliderPrimitive.Root>

          {/* Current value display */}
          {showValues && currentValue.length === 1 && (
            <div
              className="absolute -top-8 transform -translate-x-1/2 bg-background-inverse text-content-on-dark px-2 py-1 rounded text-tiny-reg"
              style={{
                left: `${((currentValue[0] - min) / (max - min)) * 100}%`,
              }}
            >
              {valueFormatter(currentValue[0])}
            </div>
          )}
        </div>

        {/* Range values for multi-thumb sliders */}
        {showValues && currentValue.length > 1 && (
          <div className="text-center text-small-reg text-content-primary">
            {currentValue.map((val, index) => (
              <span key={index}>
                {valueFormatter(val)}
                {index < currentValue.length - 1 && " - "}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
