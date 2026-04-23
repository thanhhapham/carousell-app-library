"use client"

import { useState } from "react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Slider } from "@/components/design-system/slider"
import { Chip, ChipGroup } from "@/components/design-system/input/chip"

const DURATION_OPTIONS = ["3 days", "5 days", "7 days", "15 days", "30 days", "60 days"]

function CoinChip({ balance }: { balance: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stroke-boundary shadow-sm bg-background-base">
      <CoinIcon size="xs" />
      <span className="text-middle-reg text-content-secondary">{balance}</span>
    </div>
  )
}

function SectionDivider() {
  return <div className="border-t border-stroke-boundary my-6" />
}

export default function SpotlightPage() {
  const [dailyMax, setDailyMax] = useState([100])
  const [selectedDuration, setSelectedDuration] = useState("7 days")
  const [priority, setPriority] = useState([0])

  return (
    <PrototypeLayout
      topNav={
        <TopNav
          title="Spotlight"
          showCloseButton={true}
          showProfile={false}
          showMoreActions={false}
          actions={<CoinChip balance="32.5k" />}
        />
      }
      bottomBar={
        <div className="border-t border-stroke-boundary">
          {/* CarouBiz savings */}
          <div className="bg-background-display px-4 py-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">Biz</span>
            </div>
            <p className="text-small-reg text-content-primary">
              You could get <strong>3% CoinsBack</strong> with CarouBiz
            </p>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-title-3 font-bold text-content-primary">15</span>
                <CoinIcon size="xs" />
                <span className="text-middle-reg text-content-secondary">per click</span>
              </div>
              <button className="text-small-callout font-bold text-content-interactive">
                View estimated budget
              </button>
            </div>
            <Button variant="primary" primaryVariant="task" size="medium">
              Next
            </Button>
          </div>
        </div>
      }
    >
      <div className="px-4 py-6 space-y-0">

        {/* Set daily maximum */}
        <section className="space-y-4">
          <h2 className="text-title-3 font-bold text-content-primary">Set daily maximum</h2>
          <div className="text-center space-y-0.5">
            <p className="text-title-2 font-bold text-content-primary">{dailyMax[0]}</p>
            <p className="text-middle-reg text-content-secondary">clicks</p>
          </div>
          <Slider
            min={10}
            max={300}
            value={dailyMax}
            onValueChange={setDailyMax}
            showValues={true}
            minLabel="Min"
            maxLabel="Max"
          />
        </section>

        <SectionDivider />

        {/* Set duration */}
        <section className="space-y-4">
          <h2 className="text-title-3 font-bold text-content-primary">Set duration</h2>
          <ChipGroup>
            {DURATION_OPTIONS.map((d) => (
              <Chip
                key={d}
                label={d}
                selected={selectedDuration === d}
                variant="single"
                onClick={() => setSelectedDuration(d)}
              />
            ))}
          </ChipGroup>
        </section>

        <SectionDivider />

        {/* Prioritise */}
        <section className="space-y-4">
          <h2 className="text-title-3 font-bold text-content-primary">Prioritise</h2>

          {/* Info banner */}
          <div className="border border-stroke-boundary rounded-lg p-3 bg-background-display">
            <p className="text-middle-reg text-content-secondary leading-6">
              You&apos;re currently behind 261 other ads. Increase your priority to start moving up
            </p>
          </div>

          <div className="text-center">
            <p className="text-title-3 font-bold text-content-primary">{priority[0]}% priority</p>
          </div>

          <Slider
            min={0}
            max={200}
            value={priority}
            onValueChange={setPriority}
            showValues={true}
            formatValue={(v) => `${v}%`}
            minLabel="Usual"
            maxLabel="High"
          />
        </section>

      </div>
    </PrototypeLayout>
  )
}
