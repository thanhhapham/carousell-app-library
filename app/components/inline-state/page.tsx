"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { InlineState } from "@/components/design-system/inline-state"
import { ShoppingBag } from "lucide-react"

export default function InlineStatePage() {
  const handleRefresh = () => {
    console.log("Refresh clicked")
  }

  return (
    <ComponentPage title="Inline State" description="Use for error and empty state">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Empty State</h3>
          <div className="border border-stroke-input rounded-lg">
            <InlineState
              illustration={
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
              }
              title="No active order"
              subtitle="Any active order will be shown here"
              buttonText="Refresh"
              onButtonClick={handleRefresh}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
