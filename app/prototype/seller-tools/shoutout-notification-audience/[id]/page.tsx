"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Slider } from "@/components/design-system/slider"

// ─── Coin Chip ────────────────────────────────────────────────────────────────

function CoinChip({ balance }: { balance: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stroke-boundary shadow-sm bg-background-base">
      <CoinIcon size="xs" />
      <span className="text-middle-reg text-content-secondary">{balance}</span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShoutoutNotificationAudiencePage() {
  const params = useParams()
  const id = params?.id ?? "1"

  const [audience, setAudience] = useState([1000])

  // Cost scales with audience size (200 coins for 1000, with 1200 list price)
  const coinCost = Math.round((audience[0] / 1000) * 200)
  const listPrice = Math.round((audience[0] / 1000) * 1200)

  return (
    <PrototypeLayout
      bottomBar={
        <div className="border-t border-stroke-boundary shadow-[0_-2px_8px_rgba(44,44,45,0.05)]">
          {/* CarouBiz banner */}
          <div className="bg-background-display px-4 py-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">Biz</span>
            </div>
            <p className="text-small-reg text-content-primary flex-1">
              You're saving{" "}
              <strong>{(listPrice - coinCost).toLocaleString()} Coins</strong>{" "}
              with your CarouBiz plan!
            </p>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-title-3 font-bold text-content-primary">
                  {coinCost.toLocaleString()}
                </span>
                <CoinIcon size="xs" />
                <span className="text-middle-reg text-content-secondary line-through">
                  {listPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-small-reg text-content-secondary">
                Send to {audience[0].toLocaleString()} buyers
              </p>
            </div>
            <Button variant="primary" primaryVariant="task" size="medium">
              Post Shoutout
            </Button>
          </div>

          <div className="flex justify-center pb-1">
            <div className="w-32 h-1 bg-content-primary rounded-full opacity-20" />
          </div>
        </div>
      }
    >
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-stroke-boundary">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              (window.location.href = `/prototype/seller-tools/shoutout-notification-create/${id}`)
            }
          >
            <ArrowLeft className="w-5 h-5 text-content-primary" />
          </button>
          <h1 className="text-title-2 font-bold text-content-primary">Set audience size</h1>
        </div>
        <CoinChip balance="32.5K" />
      </div>

      {/* Subtitle */}
      <p className="px-4 pt-3 pb-0 text-small-reg text-content-secondary leading-5">
        Reach your past buyers, followers, chatters, and those who liked your listings
      </p>

      <div className="px-4 py-5 space-y-4">

        {/* Big value + slider */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-title-2 font-bold text-content-primary">
              {audience[0].toLocaleString()}
            </p>
          </div>

          <Slider
            min={100}
            max={2298}
            value={audience}
            onValueChange={setAudience}
            showValues={true}
            minLabel="Min"
            maxLabel="Max"
          />

          <p className="text-small-reg text-content-secondary leading-5">
            We'll send your Shoutout to your most engaged buyers. To make sure you reach new
            potential buyers, your max audience may vary each time.
          </p>
        </div>

      </div>
    </PrototypeLayout>
  )
}
