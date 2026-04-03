"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { SystemMessage } from "@/components/design-system/chat/system-message"

export default function SystemMessagePage() {
  return (
    <ComponentPage
      title="System Message"
      description="System messages for chat interfaces with optional actions and different variants."
      imageSrc="/system-message.png"
    >
      <div className="space-y-8">
        {/* Basic System Message */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Basic System Message</h3>
          <div className="bg-background-base p-4 rounded-lg">
            <SystemMessage
              title="Buyer hasn't paid?"
              message="Get them moving through Carousell so you can secure payment first. Mark your item as sold if it's no longer available."
            />
          </div>
        </div>

        {/* With Actions */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">With Actions</h3>
          <div className="bg-background-base p-4 rounded-lg">
            <SystemMessage
              title="We're adding $5.00 to your Balance"
              message="You will receive $5.00 to your Balance in a few minutes."
              primaryAction={{
                label: "Check My Balance",
                onClick: () => console.log("Check balance clicked"),
              }}
              secondaryAction={{
                label: "Dismiss",
                onClick: () => console.log("Dismissed"),
              }}
            />
          </div>
        </div>

        {/* Status Update */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Status Update</h3>
          <div className="bg-background-base p-4 rounded-lg">
            <SystemMessage
              message="You've received $5.00 to your Balance and it's ready for transfer!"
              variant="success"
              primaryAction={{
                label: "Transfer Now",
                onClick: () => console.log("Transfer clicked"),
              }}
              secondaryAction={{
                label: "Later",
                onClick: () => console.log("Later clicked"),
              }}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
