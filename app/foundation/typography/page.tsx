import { ComponentPage, VariantSection } from "@/components/design-system/component-page"

export default function TypographyPage() {
  const typeStyles = [
    { name: "Title 1", class: "text-title-1", token: "text-title-1", sample: "Title 1 · Bold · 34" },
    { name: "Title 2", class: "text-title-2", token: "text-title-2", sample: "Title 2 · Bold · 24" },
    { name: "Title 3", class: "text-title-3", token: "text-title-3", sample: "Title 3 · Bold · 20" },
    { name: "Large Regular", class: "text-large-reg", token: "text-large-reg", sample: "Large · Reg · 17" },
    { name: "Large Callout", class: "text-large-callout", token: "text-large-callout", sample: "Large · Callout · 17" },
    { name: "Middle Regular", class: "text-middle-reg", token: "text-middle-reg", sample: "Middle · Reg · 15" },
    {
      name: "Middle Callout",
      class: "text-middle-callout",
      token: "text-middle-callout",
      sample: "Middle · Callout · 15",
    },
    { name: "Small Regular", class: "text-small-reg", token: "text-small-reg", sample: "Small · Reg · 13" },
    { name: "Small Callout", class: "text-small-callout", token: "text-small-callout", sample: "Small · Callout · 13" },
    { name: "Tiny Regular", class: "text-tiny-reg", token: "text-tiny-reg", sample: "Tiny · Reg · 11" },
    {
      name: "Teeny Tiny Regular",
      class: "text-teeny-tiny-reg",
      token: "text-teeny-tiny-reg",
      sample: "Teeny Tiny · Reg · 9",
    },
  ]

  return (
    <ComponentPage
      title="Typography"
      description="Our typography system is built on a foundation of clear hierarchy, optimal readability, and consistent spacing. Using Inter as a temporary replacement for Fabriga."
    >
      <VariantSection title="Type Scale">
        <div className="space-y-6">
          {typeStyles.map((style) => (
            <div key={style.name} className="flex items-baseline gap-8 p-4 rounded-lg border border-stroke-boundary">
              <div className="w-32 flex-shrink-0">
                <p className="text-small-callout text-content-primary">{style.name}</p>
                <p className="text-tiny-reg text-content-subdued font-mono">{style.token}</p>
              </div>
              <div className="flex-1">
                <p className={`${style.class} text-content-primary font-fabriga`}>{style.sample}</p>
              </div>
            </div>
          ))}
        </div>
      </VariantSection>

      <VariantSection title="Usage Guidelines">
        <div className="space-y-4 text-middle-reg text-content-secondary">
          <p>
            <strong className="text-content-primary">Hierarchy:</strong> Use title styles for headings, large styles for
            prominent body text, middle styles for standard content, and small/tiny styles for supporting information.
          </p>
          <p>
            <strong className="text-content-primary">Callout vs Regular:</strong> Callout variants use bold weight for
            emphasis, while regular variants use normal weight for body text.
          </p>
          <p>
            <strong className="text-content-primary">Compact variants:</strong> Some styles include compact versions
            with tighter line-height for dense layouts.
          </p>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
