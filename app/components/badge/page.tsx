"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ProfileBadge, NotificationBadge, TagBadge } from "@/components/design-system/badge"
import { Check, Shield, Star } from "lucide-react"

export default function BadgePage() {
  return (
    <ComponentPage title="Badge" description="Badges are used to highlight status, show counts, or categorize items">
      <div className="space-y-12">
        <div>
          <h2 className="text-title-3 mb-4">Profile Badge</h2>
          <p className="text-middle-reg text-content-secondary mb-6">
            Profile badges are displayed on users' profile pages to differentiate user types.
          </p>
          <div className="flex flex-wrap gap-4">
            <ProfileBadge label="Admin" variant="admin" icon={Shield} />
            <ProfileBadge label="Premium" variant="premium" icon={Star} />
            <ProfileBadge label="Verified" variant="verified" icon={Check} />
            <ProfileBadge label="Custom" variant="custom" />
          </div>
        </div>

        <div>
          <h2 className="text-title-3 mb-4">Notification Badge</h2>
          <p className="text-middle-reg text-content-secondary mb-6">
            Notification badges alert users to new content, such as messages or updates.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-middle-callout mb-3">High Emphasis</h3>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-small-reg text-content-secondary">No stroke</span>
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count={5} />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count="max" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-small-reg text-content-secondary">With stroke</span>
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" hasStroke />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count={5} hasStroke />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count="max" hasStroke />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-middle-callout mb-3">Medium Emphasis</h3>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-small-reg text-content-secondary">No stroke</span>
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" variant="medium" />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count={5} variant="medium" />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count="max" variant="medium" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-small-reg text-content-secondary">With stroke</span>
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" variant="medium" hasStroke />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count={5} variant="medium" hasStroke />
                    </div>
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-background-display"></div>
                      <NotificationBadge className="absolute -right-1 -top-1" count="max" variant="medium" hasStroke />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-3 mb-4">Tag Badge</h2>
          <p className="text-middle-reg text-content-secondary mb-6">
            Tags help to differentiate user types or listing types and draw attention.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-middle-callout mb-4">Program Specific Tags</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-small-callout mb-3 text-content-secondary">Medium Size</h4>
                  <div className="flex flex-wrap gap-4">
                    <TagBadge label="Certified" variant="certified" />
                    <TagBadge label="Buyer Protection" variant="buyer-protection" />
                    <TagBadge label="Spotlight" variant="spotlight" />
                    <TagBadge label="Preferred" variant="preferred" />
                  </div>
                </div>
                <div>
                  <h4 className="text-small-callout mb-3 text-content-secondary">Small Size</h4>
                  <div className="flex flex-wrap gap-4">
                    <TagBadge label="Certified" variant="certified" size="small" />
                    <TagBadge label="Buyer Protection" variant="buyer-protection" size="small" />
                    <TagBadge label="Spotlight" variant="spotlight" size="small" />
                    <TagBadge label="Preferred" variant="preferred" size="small" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-middle-callout mb-4">Generic Tags</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-small-callout mb-3 text-content-secondary">Medium Size</h4>
                  <div className="flex flex-wrap gap-4">
                    <TagBadge label="Low Emphasis" variant="generic-low" />
                    <TagBadge label="Medium Emphasis" variant="generic-medium" />
                    <TagBadge label="High Emphasis" variant="generic-high" />
                  </div>
                </div>
                <div>
                  <h4 className="text-small-callout mb-3 text-content-secondary">Small Size</h4>
                  <div className="flex flex-wrap gap-4">
                    <TagBadge label="Low Emphasis" variant="generic-low" size="small" />
                    <TagBadge label="Medium Emphasis" variant="generic-medium" size="small" />
                    <TagBadge label="High Emphasis" variant="generic-high" size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
