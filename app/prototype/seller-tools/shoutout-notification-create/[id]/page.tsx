"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { X, HelpCircle } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { Button } from "@/components/design-system/button"
import { Chip, ChipGroup } from "@/components/design-system/input/chip"
import { cn } from "@/lib/utils"

type ShoutoutTarget = "My profile" | "A collection"

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-[54px] h-8 rounded-full transition-colors duration-200 flex-shrink-0",
        enabled ? "bg-content-interactive" : "bg-background-disabled",
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 w-7 h-7 bg-white rounded-full shadow transition-all duration-200",
          enabled ? "left-[calc(100%-30px)]" : "left-0.5",
        )}
      />
    </button>
  )
}

// ─── Cover Image Grid ─────────────────────────────────────────────────────────

function CoverImageGrid() {
  return (
    <div className="flex gap-0.5">
      {/* Large left image */}
      <div className="w-[180px] h-[180px] rounded bg-[#D4B896] overflow-hidden flex-shrink-0">
        <img
          src="/images/nike-air-force-pink.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Two stacked right images */}
      <div className="flex flex-col gap-0.5 flex-1">
        <div className="flex-1 rounded bg-[#2C2C2D] overflow-hidden min-h-[88px]" />
        <div className="flex-1 rounded bg-[#B8A090] overflow-hidden min-h-[88px]" />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShoutoutNotificationCreatePage() {
  const params = useParams()
  const id = params?.id ?? "1"

  const [target, setTarget] = useState<ShoutoutTarget>("My profile")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("We are having year end sales. Grab all while it last!")
  const [showOnProfile, setShowOnProfile] = useState(false)

  return (
    <PrototypeLayout
      bottomBar={
        <div className="border-t border-stroke-boundary shadow-[0_-2px_8px_rgba(44,44,45,0.05)]">
          <div className="flex items-center gap-4 px-4 py-3">
            <button className="flex-1 text-large-callout font-bold text-content-interactive text-left">
              Preview
            </button>
            <Button
              variant="primary"
              primaryVariant="task"
              size="medium"
              onClick={() => {
                window.location.href = `/prototype/seller-tools/shoutout-notification-audience/${id}`
              }}
            >
              Next
            </Button>
          </div>
          <div className="flex justify-center pb-1">
            <div className="w-32 h-1 bg-content-primary rounded-full opacity-20" />
          </div>
        </div>
      }
    >
      {/* Nav */}
      <div className="flex items-center px-4 py-3 border-b border-stroke-boundary">
        <button
          className="mr-3"
          onClick={() =>
            (window.location.href = `/prototype/seller-tools/shoutout/${id}`)
          }
        >
          <X className="w-5 h-5 text-content-primary" />
        </button>
        <div>
          <h1 className="text-title-2 font-bold text-content-primary leading-8">
            Create Shoutout:
          </h1>
          <h1 className="text-title-2 font-bold text-content-primary leading-8">
            Notification or email
          </h1>
        </div>
      </div>

      <div className="px-4 py-5 space-y-6">

        {/* Shoutout about */}
        <section className="space-y-2">
          <p className="text-large-callout font-bold text-content-primary">Shoutout about</p>
          <ChipGroup>
            {(["My profile", "A collection"] as ShoutoutTarget[]).map((opt) => (
              <Chip
                key={opt}
                label={opt}
                selected={target === opt}
                variant="single"
                onClick={() => setTarget(opt)}
              />
            ))}
          </ChipGroup>
        </section>

        {/* Cover image preview */}
        <section className="space-y-2">
          <p className="text-middle-reg text-content-secondary">Cover image preview</p>
          <p className="text-small-reg text-content-secondary leading-5">
            Your Shoutout will feature images from your most recent listings
          </p>
          <CoverImageGrid />
        </section>

        {/* Title input */}
        <section className="space-y-1">
          <p className="text-middle-reg text-content-secondary">Title</p>
          <div className="bg-background-display rounded px-4 py-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 80))}
              placeholder="Shoutout title"
              className="w-full bg-transparent text-[17px] text-content-primary placeholder:text-content-subdued outline-none leading-6"
            />
          </div>
          <p className="text-small-reg text-content-secondary">Max 80 characters</p>
        </section>

        {/* Description textarea */}
        <section className="space-y-1">
          <p className="text-middle-reg text-content-secondary">Description</p>
          <div className="bg-background-display rounded px-4 py-2 relative">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 120))}
              className="w-full bg-transparent text-[17px] text-content-primary placeholder:text-content-subdued outline-none leading-6 resize-none h-[130px]"
            />
            <span className="absolute bottom-2 right-3 text-[9px] text-content-secondary">
              {description.length}/120
            </span>
          </div>
        </section>

        {/* Advanced settings */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-title-2 font-bold text-content-primary">Advanced settings</h2>
            <HelpCircle className="w-5 h-5 text-content-secondary flex-shrink-0" />
          </div>

          {/* Show on profile toggle */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-large-reg text-content-primary">Show on profile</p>
              <Toggle enabled={showOnProfile} onToggle={() => setShowOnProfile((v) => !v)} />
            </div>
            <p className="text-small-reg text-content-secondary leading-5">
              Shoutout will be displayed for 30 days. You can remove it anytime.
            </p>
          </div>
        </section>

      </div>
    </PrototypeLayout>
  )
}
