"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { InboxRow } from "@/components/design-system/chat/inbox-row"

export default function InboxRowPage() {
  return (
    <ComponentPage
      title="Inbox Row"
      description="3-column component used in Chat Inbox for displaying conversation previews."
      imageSrc="/inbox-row.png"
    >
      <div className="space-y-8">
        {/* Basic Examples */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Inbox Rows</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden divide-y divide-stroke-boundary">
            <InboxRow
              username="username"
              listingTitle="Listing title"
              lastMessage="Latest message (max 2 lines)"
              timestamp="9:58pm"
              thumbnailSrc="/placeholder.svg?height=48&width=48"
            />
            <InboxRow
              username="username"
              listingTitle="Listing title"
              lastMessage="Latest message (max 2 lines)"
              timestamp="9:58pm"
              isUnread={true}
              offerStatus="accepted"
              offerAmount="$75"
              thumbnailSrc="/placeholder.svg?height=48&width=48"
            />
            <InboxRow
              username="username"
              listingTitle="Listing title"
              lastMessage="Latest message (max 2 lines)"
              timestamp="9:58pm"
              isSelected={true}
              thumbnailSrc="/placeholder.svg?height=48&width=48"
            />
          </div>
        </div>

        {/* Dark Mode */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Dark Mode</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <InboxRow
              username="username"
              listingTitle="Listing title"
              lastMessage="Latest message (max 2 lines)"
              timestamp="9:58pm"
              variant="dark"
              thumbnailSrc="/placeholder.svg?height=48&width=48"
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
