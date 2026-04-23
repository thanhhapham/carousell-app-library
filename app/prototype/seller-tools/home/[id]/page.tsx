"use client"

import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { HelpCircle } from "lucide-react"

function CoinChip({ balance }: { balance: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stroke-boundary shadow-sm bg-background-base">
      <CoinIcon size="xs" />
      <span className="text-middle-reg text-content-secondary">{balance}</span>
    </div>
  )
}

export default function SellerToolsHomePage() {
  return (
    <PrototypeLayout
      topNav={
        <TopNav
          title="Seller tools"
          showCloseButton={true}
          showProfile={false}
          showMoreActions={false}
          actions={<CoinChip balance="32.5K" />}
        />
      }
    >
      <div className="px-4 py-4 space-y-4">

        {/* Listing preview */}
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded border border-stroke-boundary overflow-hidden flex-shrink-0">
            <img
              src="/images/nike-air-force-pink.jpg"
              alt="Listing thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-middle-callout font-bold text-content-primary leading-6">Reformation Bee midi</p>
            <p className="text-middle-callout font-bold text-content-primary leading-6">S$100.00</p>
          </div>
        </div>

        {/* CarouBiz upsell banner */}
        <div className="border border-stroke-boundary rounded-lg p-3 bg-background-display flex gap-3 items-start">
          <div className="flex-1">
            <p className="text-middle-reg text-content-primary leading-6">
              Save up to X% on Bumps and enjoy discounts on other seller tools too!
            </p>
            <button className="text-middle-callout font-bold text-content-interactive mt-1">
              Subscribe at $9.98
            </button>
          </div>
          <div className="w-16 h-14 flex-shrink-0 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">Biz</span>
          </div>
        </div>

        {/* Bump card — Recommended */}
        <div>
          <div className="bg-background-base border border-stroke-boundary border-b-0 rounded-t px-3 py-1">
            <span className="text-small-reg text-content-interactive">Recommended</span>
          </div>
          <div className="bg-background-base border border-stroke-boundary rounded-b-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-large-callout font-bold text-content-primary">⚡ Bump</span>
              </div>
              <HelpCircle className="w-4 h-4 text-content-secondary mt-0.5 flex-shrink-0" />
            </div>
            <p className="text-middle-reg text-content-secondary">
              Refresh your listing and get more views from potential buyers
            </p>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-middle-callout font-bold text-content-secondary">417</span>
                <CoinIcon size="xs" />
                <span className="text-middle-callout font-bold text-content-secondary">or S$4.17 per Bump</span>
              </div>
              <p className="text-small-reg text-content-secondary">Or just 137 Coins with CarouBiz</p>
            </div>
            <Button variant="primary" primaryVariant="task" fullWidth>
              Choose Bumps
            </Button>
          </div>
        </div>

        {/* Spotlight card */}
        <div className="bg-background-base border border-stroke-boundary rounded-lg p-4 space-y-3">
          <div className="flex items-start justify-between">
            <span className="text-large-callout font-bold text-content-primary">✦ Spotlight</span>
            <HelpCircle className="w-4 h-4 text-content-secondary mt-0.5 flex-shrink-0" />
          </div>
          <p className="text-middle-reg text-content-secondary">
            Pin your listing in relevant search results. Pay only when buyers click into your listing.
          </p>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-middle-callout font-bold text-content-secondary">From 9</span>
              <CoinIcon size="xs" />
              <span className="text-middle-callout font-bold text-content-secondary">per click</span>
            </div>
            <p className="text-small-reg text-content-secondary">Or get X% off with CarouBiz</p>
          </div>
          <Button variant="primary" primaryVariant="task" fullWidth>
            Spotlight listing
          </Button>
        </div>

        {/* Other tools */}
        <h2 className="text-title-2 font-bold text-content-primary pt-2">Other tools</h2>
        <div className="bg-background-base border border-stroke-boundary rounded-lg p-4 space-y-3">
          <p className="text-middle-reg text-content-primary">
            {`Looking for 'Shoutout'? Go to 'Me' tab > More > 'Shoutout' to view or create Shoutouts.`}
          </p>
          <div className="flex justify-end">
            <Button variant="primary" primaryVariant="task" size="medium">
              Go to Shoutout
            </Button>
          </div>
        </div>

      </div>
    </PrototypeLayout>
  )
}
