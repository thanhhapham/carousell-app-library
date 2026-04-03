import { ComponentPage, VariantSection } from "@/components/design-system/component-page"

export default function ColorsPage() {
  const colorGroups = [
    {
      title: "Core Colors",
      colors: [
        { name: "Primary 1", class: "bg-core-primary1", token: "core/primary1" },
        { name: "Primary 2", class: "bg-core-primary2", token: "core/primary2" },
      ],
    },
    {
      title: "Content Colors",
      colors: [
        { name: "Primary", class: "bg-content-primary", token: "content/primary" },
        { name: "Secondary", class: "bg-content-secondary", token: "content/secondary" },
        { name: "Subdued", class: "bg-content-subdued", token: "content/subdued" },
        { name: "Inverse", class: "bg-content-inverse", token: "content/inverse" },
        { name: "On Dark", class: "bg-content-on-dark", token: "content/on-dark" },
        { name: "On Light", class: "bg-content-on-light", token: "content/on-light" },
        { name: "Interactive", class: "bg-content-interactive", token: "content/interactive" },
        { name: "Interactive Strong", class: "bg-content-interactive-strong", token: "content/interactive-strong" },
        {
          name: "Interactive On Light",
          class: "bg-content-interactive-on-light",
          token: "content/interactive-on-light",
        },
        { name: "Positive", class: "bg-content-positive", token: "content/positive" },
        { name: "Negative", class: "bg-content-negative", token: "content/negative" },
      ],
    },
    {
      title: "Background Colors",
      colors: [
        { name: "Base", class: "bg-background-base border", token: "background/base" },
        { name: "Base Low", class: "bg-background-base-low", token: "background/base-low" },
        { name: "Display", class: "bg-background-display", token: "background/display" },
        { name: "Input", class: "bg-background-input", token: "background/input" },
        { name: "Disabled", class: "bg-background-disabled", token: "background/disabled" },
        { name: "Inverse", class: "bg-background-inverse", token: "background/inverse" },
        { name: "On Dark", class: "bg-background-on-dark", token: "background/on-dark" },
        { name: "Elevated Low", class: "bg-background-elevated-low", token: "background/elevated-low" },
        { name: "Elevated High", class: "bg-background-elevated-high", token: "background/elevated-high" },
        { name: "Interactive", class: "bg-background-interactive", token: "background/interactive" },
        {
          name: "Interactive Strong",
          class: "bg-background-interactive-strong",
          token: "background/interactive-strong",
        },
        { name: "Interactive Tint", class: "bg-background-interactive-tint", token: "background/interactive-tint" },
        {
          name: "Interactive Tint Strong",
          class: "bg-background-interactive-tint-strong",
          token: "background/interactive-tint-strong",
        },
        { name: "Negative Subtle", class: "bg-background-negative-subtle", token: "background/negative-subtle" },
        { name: "Negative Bold", class: "bg-background-negative-bold", token: "background/negative-bold" },
        { name: "Positive Subtle", class: "bg-background-positive-subtle", token: "background/positive-subtle" },
        { name: "Priority", class: "bg-background-priority", token: "background/priority" },
        { name: "Priority Strong", class: "bg-background-priority-strong", token: "background/priority-strong" },
      ],
    },
    {
      title: "Stroke Colors",
      colors: [
        { name: "Boundary", class: "bg-stroke-boundary", token: "stroke/boundary" },
        { name: "Input", class: "bg-stroke-input", token: "stroke/input" },
        { name: "Interactive", class: "bg-stroke-interactive", token: "stroke/interactive" },
        { name: "Interactive Negative", class: "bg-stroke-interactive-negative", token: "stroke/interactive-negative" },
        { name: "On Image", class: "bg-stroke-on-image", token: "stroke/on-image" },
        { name: "Inverse", class: "bg-stroke-inverse", token: "stroke/inverse" },
        { name: "Halo Focused", class: "bg-stroke-halo-focused", token: "stroke/halo-focused" },
        { name: "Halo Priority", class: "bg-stroke-halo-priority", token: "stroke/halo-priority" },
      ],
    },
    {
      title: "Chart Colors",
      colors: [
        { name: "1 Bold", class: "bg-chart-1-bold", token: "chart/1-bold" },
        { name: "2 Bold", class: "bg-chart-2-bold", token: "chart/2-bold" },
        { name: "3 Bold", class: "bg-chart-3-bold", token: "chart/3-bold" },
        { name: "4 Bold", class: "bg-chart-4-bold", token: "chart/4-bold" },
        { name: "5 Bold", class: "bg-chart-5-bold", token: "chart/5-bold" },
        { name: "1 Subtle", class: "bg-chart-1-subtle", token: "chart/1-subtle" },
        { name: "2 Subtle", class: "bg-chart-2-subtle", token: "chart/2-subtle" },
        { name: "3 Subtle", class: "bg-chart-3-subtle", token: "chart/3-subtle" },
        { name: "4 Subtle", class: "bg-chart-4-subtle", token: "chart/4-subtle" },
        { name: "5 Subtle", class: "bg-chart-5-subtle", token: "chart/5-subtle" },
      ],
    },
    {
      title: "Branding Colors",
      colors: [
        { name: "Certified", class: "bg-branding-certified", token: "branding/certified" },
        { name: "Spotlight", class: "bg-branding-spotlight", token: "branding/spotlight" },
        { name: "Bump", class: "bg-branding-bump", token: "branding/bump" },
        { name: "External Ad", class: "bg-branding-external-ad", token: "branding/external-ad" },
      ],
    },
  ]

  return (
    <ComponentPage
      title="Colors"
      description="Our color system provides a comprehensive palette designed for accessibility, consistency, and semantic meaning across all interfaces."
    >
      {colorGroups.map((group) => (
        <VariantSection key={group.title} title={group.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.colors.map((color) => (
              <div key={color.name} className="flex items-center gap-3 p-4 rounded-lg border border-stroke-boundary">
                <div className={`w-12 h-12 rounded-lg ${color.class}`}></div>
                <div>
                  <p className="text-middle-callout text-content-primary">{color.name}</p>
                  <p className="text-small-reg text-content-secondary">{color.token}</p>
                </div>
              </div>
            ))}
          </div>
        </VariantSection>
      ))}
    </ComponentPage>
  )
}
