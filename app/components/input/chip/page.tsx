"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { Chip, ChipGroup } from "@/components/design-system/input/chip"

export default function ChipPage() {
  const [selectedSingle, setSelectedSingle] = useState<string | null>("chip2")
  const [selectedMulti, setSelectedMulti] = useState<string[]>(["chip1", "chip3"])

  const handleSingleSelect = (chipId: string) => {
    setSelectedSingle(selectedSingle === chipId ? null : chipId)
  }

  const handleMultiSelect = (chipId: string) => {
    setSelectedMulti((prev) => (prev.includes(chipId) ? prev.filter((id) => id !== chipId) : [...prev, chipId]))
  }

  return (
    <ComponentPage
      title="Chip"
      description="Chips are used for single or multiple selection that lets the user select or unselect. Selection can either be mandatory or optional depending on context."
    >
      <VariantSection title="Chip Sizes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Medium Chips" description="Standard size chips for most use cases." code='size="medium"'>
            <ChipGroup>
              <Chip label="Label" size="medium" />
              <Chip label="Label" size="medium" selected />
            </ChipGroup>
          </VariantCard>

          <VariantCard
            name="Small Chips"
            description="Compact chips for space-constrained interfaces."
            code='size="small"'
          >
            <ChipGroup>
              <Chip label="Label" size="small" />
              <Chip label="Label" size="small" selected />
            </ChipGroup>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Selection Types">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Single Selection"
            description="Only one chip can be selected at a time."
            code='variant="single"'
          >
            <ChipGroup>
              <Chip
                label="Label"
                variant="single"
                selected={selectedSingle === "chip1"}
                onClick={() => handleSingleSelect("chip1")}
              />
              <Chip
                label="Label"
                variant="single"
                selected={selectedSingle === "chip2"}
                onClick={() => handleSingleSelect("chip2")}
              />
              <Chip
                label="Label"
                variant="single"
                selected={selectedSingle === "chip3"}
                onClick={() => handleSingleSelect("chip3")}
              />
            </ChipGroup>
          </VariantCard>

          <VariantCard
            name="Multi Selection"
            description="Multiple chips can be selected at the same time."
            code='variant="multi"'
          >
            <ChipGroup>
              <Chip
                label="Label"
                variant="multi"
                selected={selectedMulti.includes("chip1")}
                onClick={() => handleMultiSelect("chip1")}
              />
              <Chip
                label="Label"
                variant="multi"
                selected={selectedMulti.includes("chip2")}
                onClick={() => handleMultiSelect("chip2")}
              />
              <Chip
                label="Label"
                variant="multi"
                selected={selectedMulti.includes("chip3")}
                onClick={() => handleMultiSelect("chip3")}
              />
            </ChipGroup>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Special Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Badge"
            description="Chips with badge count indicators."
            code='variant="badge" badgeCount={3}'
          >
            <ChipGroup>
              <Chip label="Label" variant="badge" badgeCount={3} />
              <Chip label="Label" variant="badge" badgeCount={12} selected />
            </ChipGroup>
          </VariantCard>

          <VariantCard name="Disabled" description="Non-interactive disabled chips." code="disabled={true}">
            <ChipGroup>
              <Chip label="Label" disabled />
              <Chip label="Label" selected disabled />
            </ChipGroup>
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Text content
                  of the chip
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">selected</code> - Whether the
                  chip is selected
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Whether the
                  chip is disabled
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">size</code> - Size of the
                  chip (small, medium)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">variant</code> - Selection
                  behavior (single, multi, badge)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">badgeCount</code> - Number to
                  display in badge variant
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClick</code> - Function
                  called when chip is clicked
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
