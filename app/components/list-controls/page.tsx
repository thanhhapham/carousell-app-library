"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ListControl, ListControls } from "@/components/design-system/list-controls"
import { Edit, Heart, Share, Trash } from "lucide-react"

export default function ListControlsPage() {
  return (
    <ComponentPage title="List Controls" description="List controls display actions for items in a list">
      <div className="space-y-8">
        <div>
          <h2 className="text-title-3 mb-4">Single Control</h2>
          <div className="flex flex-wrap gap-4">
            <ListControl label="Edit" icon={Edit} variant="neutral" />
            <ListControl label="Like" icon={Heart} variant="positive" />
            <ListControl label="Share" icon={Share} variant="light" />
            <ListControl label="Delete" icon={Trash} variant="negative" />
          </div>
        </div>

        <div>
          <h2 className="text-title-3 mb-4">Control Group</h2>
          <ListControls
            controls={[
              { label: "Edit", icon: Edit, variant: "neutral" },
              { label: "Like", icon: Heart, variant: "positive" },
              { label: "Share", icon: Share, variant: "light" },
            ]}
          />
        </div>

        <div>
          <h2 className="text-title-3 mb-4">Disabled Controls</h2>
          <div className="flex flex-wrap gap-4">
            <ListControl label="Edit" icon={Edit} variant="neutral" disabled />
            <ListControl label="Like" icon={Heart} variant="positive" disabled />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
