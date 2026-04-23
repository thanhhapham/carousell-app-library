"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Slider } from "@/components/design-system/slider"
import { cn } from "@/lib/utils"

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

export default function ShoutoutSearchPostPage() {
  const params = useParams()
  const id = params?.id ?? "1"

  const [impressions, setImpressions] = useState([8000])
  const [pinToTop, setPinToTop] = useState(false)

  const estimatedDuration = impressions[0] <= 3000 ? "1-2 days" : impressions[0] <= 7000 ? "2-4 days" : "3-5 days"

  return (
    <PrototypeLayout
      bottomBar={
        <div className="border-t border-stroke-boundary shadow-[0_-2px_8px_rgba(44,44,45,0.05)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-title-3 font-bold text-content-primary">1,500</span>
                <CoinIcon size="xs" />
                <span className="text-middle-reg text-content-secondary">per 1k impr</span>
              </div>
              <button className="text-small-callout font-bold text-content-interactive">
                View estimated budget
              </button>
            </div>
            <Button variant="primary" primaryVariant="task" size="medium">
              Run Shoutout
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
              (window.location.href = `/prototype/seller-tools/shoutout-search-create/${id}`)
            }
          >
            <ArrowLeft className="w-5 h-5 text-content-primary" />
          </button>
          <h1 className="text-title-2 font-bold text-content-primary">Post your Shoutout</h1>
        </div>
        <CoinChip balance="32.5k" />
      </div>

      <div className="px-4 py-5 space-y-6">

        {/* Info banner */}
        <div className="bg-background-display border border-stroke-boundary rounded-lg p-3 space-y-1">
          <p className="text-middle-callout font-bold text-content-primary leading-6">
            Only pay when your Shoutout gets seen
          </p>
          <p className="text-middle-reg text-content-secondary leading-6">
            You'll be charged daily based on impressions
          </p>
        </div>

        {/* Set target */}
        <section className="space-y-4">
          <h2 className="text-title-3 font-bold text-content-primary">Set target</h2>
          <div className="text-center space-y-0.5">
            <p className="text-title-2 font-bold text-content-primary">
              {impressions[0].toLocaleString()}
            </p>
            <p className="text-middle-reg text-content-secondary">Impressions (impr)</p>
          </div>
          <Slider
            min={1000}
            max={10000}
            value={impressions}
            onValueChange={setImpressions}
            showValues={true}
            minLabel="Min"
            maxLabel="Max"
          />
          <div className="space-y-1">
            <p className="text-middle-reg text-content-primary">
              Estimated duration:{" "}
              <span className="font-bold">{estimatedDuration}</span>
            </p>
            <p className="text-small-reg text-content-secondary leading-5">
              Your Shoutout runs until it hits your target impressions, or for up to 30 days
            </p>
          </div>
        </section>

        <div className="border-t border-stroke-boundary" />

        {/* Pin to top */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-title-3 font-bold text-content-primary">Pin to the top for free</p>
            <Toggle enabled={pinToTop} onToggle={() => setPinToTop((v) => !v)} />
          </div>
          <p className="text-small-reg text-content-secondary leading-5">
            Turn this on to show your Shoutout at the top of search results—if a slot's available. It's free!
          </p>
        </section>

      </div>
    </PrototypeLayout>
  )
}
