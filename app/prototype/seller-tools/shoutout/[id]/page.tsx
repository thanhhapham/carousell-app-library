"use client"

import { useParams } from "next/navigation"
import { X } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/design-system/button"

// ─── Icons ────────────────────────────────────────────────────────────────────

function NotificationIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
      <span className="text-2xl">🔔</span>
    </div>
  )
}

function SearchIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-[#E8F4F2] flex items-center justify-center flex-shrink-0">
      <span className="text-2xl">🔍</span>
    </div>
  )
}

// ─── Shoutout Card ────────────────────────────────────────────────────────────

function ShoutoutCard({
  icon,
  title,
  badge,
  description,
  status,
  onCreateNew,
}: {
  icon: React.ReactNode
  title: string
  badge?: string
  description: string
  status: string
  onCreateNew: () => void
}) {
  return (
    <div className="relative border border-stroke-boundary rounded-lg overflow-hidden">
      <div className="flex gap-3 p-4">
        {/* Icon overlaid in top-left of card */}
        <div className="flex-shrink-0">{icon}</div>

        <div className="flex-1 min-w-0 space-y-2">
          {/* Title row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-large-callout font-bold text-content-primary">{title}</span>
            {badge && (
              <span className="bg-content-primary text-white text-[11px] font-normal px-1.5 py-0.5 rounded-full leading-4">
                {badge}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-middle-reg text-content-secondary leading-6">{description}</p>

          {/* Status */}
          <p className="text-small-reg text-content-subdued">{status}</p>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-1">
            <button className="text-middle-callout font-bold text-content-interactive">
              View Shoutout
            </button>
            <Button
              variant="primary"
              primaryVariant="task"
              size="small"
              onClick={onCreateNew}
            >
              Create new
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShoutoutPage() {
  const params = useParams()
  const id = params?.id ?? "1"

  return (
    <PrototypeLayout
      topNav={
        <TopNav
          title="Shoutout"
          showCloseButton={true}
          showProfile={false}
          showMoreActions={false}
        />
      }
    >
      <div className="px-4 py-4 space-y-4">
        {/* Notification / email card */}
        <ShoutoutCard
          icon={<NotificationIcon />}
          title="Via notification or email"
          badge="Beta"
          description="Notify your buyers, followers, and those who liked, viewed, or chatted with you via your listings"
          status="No active Shoutouts"
          onCreateNew={() => {
            window.location.href = `/prototype/seller-tools/shoutout-notification-create/${id}`
          }}
        />

        {/* Search results card */}
        <ShoutoutCard
          icon={<SearchIcon />}
          title="In search results"
          description="Get featured when buyers search for listings relevant to yours"
          status="No active Shoutouts"
          onCreateNew={() => {
            window.location.href = `/prototype/seller-tools/shoutout-search-create/${id}`
          }}
        />
      </div>
    </PrototypeLayout>
  )
}
