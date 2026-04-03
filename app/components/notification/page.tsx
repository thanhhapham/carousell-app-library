"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Notification } from "@/components/design-system/notification"

export default function NotificationPage() {
  return (
    <ComponentPage
      title="Notification"
      description="Notification let users stay informed and engaged by displaying important and relevant contents."
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Examples</h3>
          <div className="border border-stroke-input rounded-lg divide-y">
            <Notification
              avatar="/placeholder.svg?height=40&width=40"
              title="Buyer place an order"
              subtitle="Dini put your order on your buyer and be informed"
              timestamp="2m"
              unread={true}
            />

            <Notification
              avatar="/placeholder.svg?height=40&width=40"
              title="Your listing is featured due to..."
              subtitle="Congrats! Your listing is featured due to..."
              timestamp="5m"
              image="/placeholder.svg?height=96&width=192"
            />

            <Notification
              avatar="/placeholder.svg?height=40&width=40"
              title="New follower and likes"
              subtitle="You have new followers and likes"
              timestamp="1h"
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
