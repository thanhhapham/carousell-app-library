"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { X, ChevronRight, HelpCircle } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Slider } from "@/components/design-system/slider"
import { cn } from "@/lib/utils"

// ─── Shared ───────────────────────────────────────────────────────────────────

function CoinChip({ balance }: { balance: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stroke-boundary shadow-sm bg-background-base">
      <CoinIcon size="xs" />
      <span className="text-middle-reg text-content-secondary">{balance}</span>
    </div>
  )
}

// ─── Regular Bump ─────────────────────────────────────────────────────────────

const BUMP_OPTIONS = [
  { id: "once",       label: "Bump once, instantly",       coins: 366,   perBump: "366 Coins/Bump (peak rate)" },
  { id: "3days",      label: "Bump daily for 3 days",      coins: 726,   perBump: "242 Coins/Bump (peak rate)" },
  { id: "twice-3days",label: "Bump twice a day, for 3 days", coins: 1200, perBump: "167 Coins/Bump (peak rate)" },
  { id: "7days",      label: "Bump daily for 7 days",      coins: 1169,  perBump: "167 Coins/Bump (peak rate)" },
]

function RegularBumpContent({
  selected,
  onSelect,
  customBumpHref,
}: {
  selected: string
  onSelect: (id: string) => void
  customBumpHref: string
}) {
  return (
    <div className="py-4 space-y-4">
      {/* Pay with card toggle */}
      <div className="flex items-center justify-between py-2">
        <span className="text-middle-reg text-content-primary">Pay with card</span>
        <div className="w-[54px] h-8 bg-background-disabled rounded-full relative">
          <div className="absolute left-0.5 top-0.5 w-7 h-7 bg-white rounded-full shadow" />
        </div>
      </div>

      {/* Bump option cards */}
      <div className="space-y-3">
        {BUMP_OPTIONS.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={cn(
                "w-full text-left border rounded-lg p-4 transition-all",
                isSelected
                  ? "border-2 border-stroke-interactive shadow-md"
                  : "border border-stroke-boundary",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={cn("text-large-callout font-bold text-content-primary leading-6", isSelected && "")}>
                  {opt.label}
                </span>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-small-reg text-content-secondary">↑</span>
                    <span className="text-large-callout font-bold text-content-secondary">
                      {opt.coins.toLocaleString()}
                    </span>
                    <CoinIcon size="xs" />
                  </div>
                  <p className="text-small-reg text-content-secondary">{opt.perBump}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Customise row */}
      <a
        href={customBumpHref}
        className="flex items-center justify-between py-2 border-t border-stroke-boundary pt-4"
      >
        <div>
          <p className="text-title-3 font-bold text-content-primary">Customise your Bumps</p>
          <p className="text-small-reg text-content-secondary mt-0.5">
            Choose specific days and frequency of Bumps
          </p>
        </div>
        <ChevronRight className="w-4 h-4 text-content-secondary flex-shrink-0" />
      </a>
    </div>
  )
}

// ─── Smart Bump ───────────────────────────────────────────────────────────────

function SmartBumpContent({
  bumps,
  onBumpsChange,
  maxPerDay,
  onMaxPerDayChange,
}: {
  bumps: number[]
  onBumpsChange: (v: number[]) => void
  maxPerDay: number[]
  onMaxPerDayChange: (v: number[]) => void
}) {
  return (
    <div className="py-4 space-y-6">
      {/* Info box */}
      <div className="bg-background-display rounded-lg px-4 py-3 space-y-1">
        <p className="text-middle-callout font-bold text-content-secondary">Leave the bumping to us</p>
        <p className="text-middle-reg text-content-secondary leading-5">
          We&apos;ll keep your listing among the top, within your budget
        </p>
        <button className="text-middle-callout font-bold text-content-interactive">
          How is my budget optimised?
        </button>
      </div>

      {/* Set budget */}
      <div className="space-y-4">
        <p className="text-title-3 font-bold text-content-primary">Set budget</p>

        {/* Big centered value */}
        <div className="text-center space-y-0.5">
          <p className="text-title-2 font-bold text-content-primary">{bumps[0]}</p>
          <p className="text-small-reg text-content-secondary">Smart Bumps per listing</p>
        </div>

        {/* No. of Bumps slider */}
        <Slider
          label="No. of Bumps"
          min={5}
          max={200}
          value={bumps}
          onValueChange={onBumpsChange}
          showValues={true}
          minLabel="5"
          maxLabel="200"
        />

        <p className="text-small-reg text-content-secondary">
          You&apos;ll get a refund for unused Bumps when this listing is marked as sold
        </p>

        {/* Max Bumps per day slider */}
        <Slider
          label="Max Bumps per day"
          min={3}
          max={8}
          value={maxPerDay}
          onValueChange={onMaxPerDayChange}
          showValues={true}
          formatValue={(v) => `${v} Bumps`}
          minLabel="3"
          maxLabel="8"
        />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BumpPage() {
  const params = useParams()
  const id = params?.id ?? "1"
  const customBumpHref = `/prototype/seller-tools/custom-bump/${id}`

  const [activeTab, setActiveTab] = useState<"smart" | "regular">("regular")
  const [selectedBump, setSelectedBump] = useState("twice-3days")
  const [budgetBumps, setBudgetBumps] = useState([40])
  const [maxPerDay, setMaxPerDay] = useState([3])

  const selectedOption = BUMP_OPTIONS.find((o) => o.id === selectedBump)
  const totalCoins = activeTab === "regular" ? (selectedOption?.coins ?? 1200) : 5504
  const strikethrough = activeTab === "smart" ? 16680 : null

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
      overlay={
        <div className="absolute inset-0 z-40 flex flex-col justify-end">
          {/* Dimmed backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom sheet panel */}
          <div className="relative bg-background-base rounded-t-[10px] flex flex-col max-h-[82%]">

            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1.5 bg-stroke-input rounded-full opacity-80" />
            </div>

            {/* Sheet header */}
            <div className="relative flex items-center justify-center px-4 py-3 flex-shrink-0">
              <button className="absolute left-4 p-1">
                <X className="w-5 h-5 text-content-primary" />
              </button>
              <h2 className="text-title-3 font-bold text-content-primary">Choose Bumps</h2>
            </div>

            {/* Tab bar */}
            <div className="flex border-b border-stroke-boundary flex-shrink-0">
              {(["smart", "regular"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-3 text-middle-callout text-center transition-colors",
                    activeTab === tab
                      ? "text-content-interactive font-bold border-b-2 border-content-interactive -mb-px"
                      : "text-content-secondary font-normal",
                  )}
                >
                  {tab === "smart" ? "Smart Bump" : "Regular Bump"}
                </button>
              ))}
            </div>

            {/* Scrollable tab content */}
            <div className="flex-1 overflow-y-auto px-4">
              {activeTab === "regular" && (
                <RegularBumpContent selected={selectedBump} onSelect={setSelectedBump} customBumpHref={customBumpHref} />
              )}
              {activeTab === "smart" && (
                <SmartBumpContent
                  bumps={budgetBumps}
                  onBumpsChange={setBudgetBumps}
                  maxPerDay={maxPerDay}
                  onMaxPerDayChange={setMaxPerDay}
                />
              )}
            </div>

            {/* Payment footer */}
            <div className="flex-shrink-0 border-t border-stroke-boundary">
              {/* CarouBiz savings banner */}
              <div className="bg-background-display px-4 py-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[9px] font-bold">Biz</span>
                </div>
                <p className="text-small-reg text-content-primary flex-1">
                  {activeTab === "regular"
                    ? <>You could save <strong>1,302 Coins (52% off)</strong> with CarouBiz</>
                    : <>You could save <strong>1,302 Coins (52% off)</strong> with CarouBiz</>}
                </p>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-small-reg text-content-secondary">↑</span>
                  <span className="text-title-3 font-bold text-content-primary">
                    {totalCoins.toLocaleString()}
                  </span>
                  {strikethrough && (
                    <span className="text-small-reg text-content-secondary line-through">
                      {strikethrough.toLocaleString()}
                    </span>
                  )}
                  <CoinIcon size="xs" />
                </div>
                <Button variant="primary" primaryVariant="task" size="medium">
                  Bump
                </Button>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-1">
                <div className="w-32 h-1 bg-content-primary rounded-full opacity-20" />
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* Background: abbreviated seller tools content, dimmed by overlay */}
      <div className="px-4 py-4 space-y-4 pointer-events-none">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded border border-stroke-boundary overflow-hidden flex-shrink-0">
            <img src="/images/nike-air-force-pink.jpg" alt="Listing" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-middle-callout font-bold text-content-primary">Reformation Bee midi</p>
            <p className="text-middle-callout font-bold text-content-primary">S$100.00</p>
          </div>
        </div>
        <div className="border border-stroke-boundary rounded-lg p-3 bg-background-display">
          <p className="text-middle-reg text-content-primary">Save up to X% on Bumps and enjoy discounts on other seller tools too!</p>
        </div>
        <div className="bg-background-base border border-stroke-boundary rounded-lg p-4 space-y-2">
          <p className="text-large-callout font-bold text-content-primary">⚡ Bump</p>
          <p className="text-middle-reg text-content-secondary">Refresh your listing and get more views from potential buyers</p>
        </div>
      </div>
    </PrototypeLayout>
  )
}
