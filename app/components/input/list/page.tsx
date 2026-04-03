"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { ListItem } from "@/components/design-system/input/list-item"

export default function ListPage() {
  const [selectedRadio, setSelectedRadio] = useState<string | null>("item1")
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>(["item1"])
  const [selectedSwitches, setSelectedSwitches] = useState<string[]>(["item1"])

  const toggleCheckbox = (id: string) => {
    setSelectedCheckboxes((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleSwitch = (id: string) => {
    setSelectedSwitches((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <ComponentPage
      title="List"
      description="Lists combine selector inputs (radio, checkbox, switch) with text to form list items. A 'List' is made of multiple 'list items'."
    >
      <VariantSection title="List Item Types">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Radio List Items"
            description="List items with radio button selectors for single selection."
            code='type="radio"'
          >
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="radio"
                selected={selectedRadio === "item1"}
                onClick={() => setSelectedRadio("item1")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="radio"
                selected={selectedRadio === "item2"}
                onClick={() => setSelectedRadio("item2")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="radio"
                selected={selectedRadio === "item3"}
                onClick={() => setSelectedRadio("item3")}
              />
            </div>
          </VariantCard>

          <VariantCard
            name="Checkbox List Items"
            description="List items with checkbox selectors for multiple selection."
            code='type="checkbox"'
          >
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="checkbox"
                selected={selectedCheckboxes.includes("item1")}
                onClick={() => toggleCheckbox("item1")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="checkbox"
                selected={selectedCheckboxes.includes("item2")}
                onClick={() => toggleCheckbox("item2")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="checkbox"
                selected={selectedCheckboxes.includes("item3")}
                onClick={() => toggleCheckbox("item3")}
              />
            </div>
          </VariantCard>

          <VariantCard name="Switch List Items" description="List items with toggle switches." code='type="switch"'>
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="switch"
                selected={selectedSwitches.includes("item1")}
                onClick={() => toggleSwitch("item1")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="switch"
                selected={selectedSwitches.includes("item2")}
                onClick={() => toggleSwitch("item2")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="switch"
                selected={selectedSwitches.includes("item3")}
                onClick={() => toggleSwitch("item3")}
              />
            </div>
          </VariantCard>

          <VariantCard
            name="Chevron List Items"
            description="List items with chevron for navigation."
            code='type="chevron"'
          >
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="chevron"
                onClick={() => console.log("Navigate to item 1")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="chevron"
                onClick={() => console.log("Navigate to item 2")}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="chevron"
                onClick={() => console.log("Navigate to item 3")}
              />
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Sizes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard name="Large" description="List items with large title and more spacing." code='size="large"'>
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                size="large"
                type="checkbox"
                selected={true}
              />
            </div>
          </VariantCard>

          <VariantCard
            name="Medium (Default)"
            description="List items with medium title and standard spacing."
            code='size="medium"'
          >
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                size="medium"
                type="checkbox"
                selected={true}
              />
            </div>
          </VariantCard>

          <VariantCard name="Small" description="List items with small title and compact spacing." code='size="small"'>
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                size="small"
                type="checkbox"
                selected={true}
              />
            </div>
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard name="Disabled State" description="Non-interactive disabled list items." code="disabled={true}">
            <div className="border rounded-lg overflow-hidden">
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="radio"
                disabled={true}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="checkbox"
                disabled={true}
              />
              <ListItem
                title="Title"
                description="This is a field description. Use when field requires more explanation."
                type="switch"
                disabled={true}
              />
            </div>
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
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">title</code> - Main text for
                  the list item
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-large-callout text-content-primary mb-3">Optional Props</h4>
              <ul className="space-y-2 text-middle-reg text-content-secondary">
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">description</code> -
                  Secondary text for the list item
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">size</code> - Size of the
                  list item (small, medium, large)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">type</code> - Type of control
                  (radio, checkbox, switch, chevron)
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">selected</code> - Whether the
                  item is selected
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Whether the
                  item is disabled
                </li>
                <li>
                  <code className="text-small-reg bg-background-display px-2 py-1 rounded">onClick</code> - Function
                  called when the item is clicked
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
