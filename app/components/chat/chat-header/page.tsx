"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ChatHeader } from "@/components/design-system/chat/chat-header"

export default function ChatHeaderPage() {
  return (
    <ComponentPage
      title="Chat Header"
      description="Header component for chat interfaces with user information, status, and actions."
      imageSrc="/chat-header.png"
    >
      <div className="space-y-8">
        {/* Basic Example */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Basic Header</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <ChatHeader
              username="username"
              isOnline={true}
              listingTitle="Listing title"
              listingStatus="accepted"
              offerAmount="$75"
              showCTA={true}
            />
          </div>
        </div>

        {/* Without CTA */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Without CTA</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <ChatHeader
              username="username"
              isOnline={true}
              listingTitle="Listing title"
              listingStatus="offered"
              offerAmount="$75"
              showCTA={false}
            />
          </div>
        </div>

        {/* Offline Status */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Offline Status</h3>
          <div className="border border-stroke-boundary rounded-lg overflow-hidden">
            <ChatHeader
              username="username"
              isOnline={false}
              listingTitle="Listing title"
              listingStatus="pending"
              offerAmount="$50"
              showCTA={true}
            />
          </div>
        </div>

        {/* Properties */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Properties</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-stroke-boundary">
              <thead>
                <tr className="bg-background-display">
                  <th className="border border-stroke-boundary p-3 text-left">Property</th>
                  <th className="border border-stroke-boundary p-3 text-left">Type</th>
                  <th className="border border-stroke-boundary p-3 text-left">Default</th>
                  <th className="border border-stroke-boundary p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">username</td>
                  <td className="border border-stroke-boundary p-3">string</td>
                  <td className="border border-stroke-boundary p-3">-</td>
                  <td className="border border-stroke-boundary p-3">Username to display</td>
                </tr>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">isOnline</td>
                  <td className="border border-stroke-boundary p-3">boolean</td>
                  <td className="border border-stroke-boundary p-3">false</td>
                  <td className="border border-stroke-boundary p-3">Show online status</td>
                </tr>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">listingTitle</td>
                  <td className="border border-stroke-boundary p-3">string</td>
                  <td className="border border-stroke-boundary p-3">-</td>
                  <td className="border border-stroke-boundary p-3">Title of the listing</td>
                </tr>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">listingStatus</td>
                  <td className="border border-stroke-boundary p-3">string</td>
                  <td className="border border-stroke-boundary p-3">-</td>
                  <td className="border border-stroke-boundary p-3">Status of the listing</td>
                </tr>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">offerAmount</td>
                  <td className="border border-stroke-boundary p-3">string</td>
                  <td className="border border-stroke-boundary p-3">-</td>
                  <td className="border border-stroke-boundary p-3">Offer amount to display</td>
                </tr>
                <tr>
                  <td className="border border-stroke-boundary p-3 font-mono text-small-reg">showCTA</td>
                  <td className="border border-stroke-boundary p-3">boolean</td>
                  <td className="border border-stroke-boundary p-3">false</td>
                  <td className="border border-stroke-boundary p-3">Show CTA buttons</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
