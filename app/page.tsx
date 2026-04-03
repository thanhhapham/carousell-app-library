import Link from "next/link"
import { getPrototypes } from "@/lib/get-prototypes"
import { getComponentsGrouped } from "@/lib/get-components"
import type { PrototypeEntry } from "@/lib/get-prototypes"
import type { ComponentEntry } from "@/lib/get-components"

// ─── Status badge ────────────────────────────────────────────
function StatusBadge({ status }: { status?: string }) {
  if (!status) return null
  const styles: Record<string, string> = {
    ready: "bg-background-positive-subtle text-content-positive",
    wip: "bg-background-priority text-content-on-dark",
    draft: "bg-background-display text-content-subdued",
  }
  return (
    <span className={`text-tiny-reg px-2 py-0.5 rounded-full font-medium ${styles[status] ?? styles.draft}`}>
      {status}
    </span>
  )
}

// ─── Category pill ────────────────────────────────────────────
function CategoryPill({ label }: { label: string }) {
  return (
    <span className="text-tiny-reg px-2 py-0.5 rounded-full bg-background-display text-content-secondary capitalize">
      {label}
    </span>
  )
}

// ─── Prototype card ───────────────────────────────────────────
function PrototypeCard({ prototype }: { prototype: PrototypeEntry }) {
  return (
    <Link href={prototype.href} className="block group">
      <div className="h-full border border-stroke-boundary rounded-xl p-4 bg-background-base hover:bg-background-display transition-colors cursor-pointer">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-large-callout text-content-primary group-hover:text-content-interactive transition-colors leading-snug">
            {prototype.name}
          </span>
          <StatusBadge status={prototype.status} />
        </div>
        {prototype.description && (
          <p className="text-small-reg text-content-secondary mb-3 leading-relaxed">
            {prototype.description}
          </p>
        )}
        {prototype.category && (
          <CategoryPill label={prototype.category} />
        )}
      </div>
    </Link>
  )
}

// ─── Component card ───────────────────────────────────────────
function ComponentCard({ component }: { component: ComponentEntry }) {
  return (
    <Link href={component.href} className="block group">
      <div className="border border-stroke-boundary rounded-xl p-4 bg-background-base hover:bg-background-display transition-colors cursor-pointer">
        <span className="text-large-callout text-content-primary group-hover:text-content-interactive transition-colors">
          {component.name}
        </span>
      </div>
    </Link>
  )
}

// ─── Section heading ──────────────────────────────────────────
function SectionHeading({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <h2 className="text-title-3 text-content-primary">{title}</h2>
      <span className="text-small-reg text-content-subdued">{count} items</span>
    </div>
  )
}

// ─── Directory Page ───────────────────────────────────────────
export default function DirectoryPage() {
  const prototypes = getPrototypes()
  const componentGroups = getComponentsGrouped()

  // Group prototypes by category
  const prototypeGroups: Record<string, PrototypeEntry[]> = {}
  const uncategorized: PrototypeEntry[] = []

  for (const p of prototypes) {
    if (p.category) {
      if (!prototypeGroups[p.category]) prototypeGroups[p.category] = []
      prototypeGroups[p.category].push(p)
    } else {
      uncategorized.push(p)
    }
  }
  if (uncategorized.length > 0) prototypeGroups["other"] = uncategorized

  const categoryOrder = ["feed", "chat", "listing", "search", "profile", "engagement", "other"]
  const sortedProtoCategories = [
    ...categoryOrder.filter((c) => prototypeGroups[c]),
    ...Object.keys(prototypeGroups).filter((c) => !categoryOrder.includes(c)),
  ]

  const componentCategoryOrder = ["Actions", "Navigation", "Cards", "Feedback", "Overlays", "Inputs", "Display", "Containers", "Chat", "Other"]
  const sortedComponentCategories = [
    ...componentCategoryOrder.filter((c) => componentGroups[c]),
    ...Object.keys(componentGroups).filter((c) => !componentCategoryOrder.includes(c)),
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-core-primary2 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-content-on-dark font-bold text-small-callout">Ds</span>
          </div>
          <h1 className="text-title-2 text-content-primary">Carousell Design System</h1>
        </div>
        <p className="text-middle-reg text-content-secondary ml-12">
          Browse interactive prototypes and design system components. New prototypes added to{" "}
          <code className="text-small-callout bg-background-display px-1.5 py-0.5 rounded">app/prototype/</code>{" "}
          appear here automatically.
        </p>
      </div>

      {/* ── Prototypes ── */}
      <section className="mb-16">
        <SectionHeading title="Prototypes" count={prototypes.length} />

        {sortedProtoCategories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-small-callout text-content-subdued uppercase tracking-wider mb-3 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {prototypeGroups[category].map((p) => (
                <PrototypeCard key={p.folderName} prototype={p} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="border-t border-stroke-boundary mb-16" />

      {/* ── Components ── */}
      <section>
        <SectionHeading
          title="Design System Components"
          count={Object.values(componentGroups).flat().length}
        />

        {sortedComponentCategories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-small-callout text-content-subdued uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {componentGroups[category].map((c) => (
                <ComponentCard key={c.folderName} component={c} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
