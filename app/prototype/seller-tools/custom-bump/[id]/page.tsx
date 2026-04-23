"use client"

import { useState } from "react"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { Button } from "@/components/design-system/button"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { Slider } from "@/components/design-system/slider"
import { Chip, ChipGroup } from "@/components/design-system/input/chip"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
const ALL_DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const WEEK_SHORTCUTS = ["1w", "4w", "8w", "24w", "48w", "52w"]

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Toggle switch (display-only, tappable) */
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

/** Duration stepper — shows "X week / weeks" */
function DurationStepper({
  weeks,
  onChange,
}: {
  weeks: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        onClick={() => onChange(Math.max(1, weeks - 1))}
        className="w-6 h-6 rounded-full border-2 border-stroke-input flex items-center justify-center text-content-secondary"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="text-title-3 font-bold text-content-primary min-w-[80px] text-center">
        {weeks} {weeks === 1 ? "week" : "weeks"}
      </span>
      <button
        onClick={() => onChange(Math.min(52, weeks + 1))}
        className="w-6 h-6 rounded-full border-2 border-content-interactive flex items-center justify-center text-content-interactive"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CustomBumpPage() {
  const [selectedDays, setSelectedDays] = useState<Set<Day>>(new Set(["Mon", "Fri"]))
  const [weeks, setWeeks] = useState(1)
  const [selectedWeekShortcut, setSelectedWeekShortcut] = useState("1w")
  const [timingsEnabled, setTimingsEnabled] = useState(false)
  const [bumpsPerDay, setBumpsPerDay] = useState([2])

  const toggleDay = (day: Day) => {
    setSelectedDays((prev) => {
      const next = new Set(prev)
      next.has(day) ? next.delete(day) : next.add(day)
      return next
    })
  }

  const handleWeekShortcut = (shortcut: string) => {
    setSelectedWeekShortcut(shortcut)
    const n = parseInt(shortcut)
    if (!isNaN(n)) setWeeks(n)
  }

  return (
    <PrototypeLayout statusBar={false}>
      {/* Dimmed background */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Bottom sheet — nearly full screen */}
      <div className="absolute inset-x-0 bottom-0 top-[15px] z-10 bg-background-base rounded-t-[10px] flex flex-col">

        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-0 flex-shrink-0">
          <div className="w-12 h-1.5 bg-stroke-input rounded-full opacity-80" />
        </div>

        {/* Sheet header */}
        <div className="relative flex items-center justify-center px-4 py-3 flex-shrink-0">
          <button className="absolute left-4 p-1">
            <ArrowLeft className="w-5 h-5 text-content-primary" />
          </button>
          <h2 className="text-title-3 font-bold text-content-primary">Customise your Bumps</h2>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-8">

          {/* Choose days */}
          <section className="space-y-3">
            <p className="text-large-reg text-content-primary">Choose days</p>
            <ChipGroup>
              {ALL_DAYS.map((day) => {
                const isSelected = selectedDays.has(day)
                return (
                  <Chip
                    key={day}
                    label={day}
                    selected={isSelected}
                    variant="multi"
                    onClick={() => toggleDay(day)}
                  />
                )
              })}
            </ChipGroup>
          </section>

          {/* Duration */}
          <section className="space-y-4">
            <p className="text-middle-reg text-content-secondary">Duration</p>
            <DurationStepper weeks={weeks} onChange={setWeeks} />
            {/* Week quick-select chips */}
            <div className="flex gap-2 flex-wrap">
              {WEEK_SHORTCUTS.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  selected={selectedWeekShortcut === s}
                  variant="single"
                  size="small"
                  onClick={() => handleWeekShortcut(s)}
                />
              ))}
            </div>
            <div className="border-t border-stroke-boundary" />
          </section>

          {/* Choose timings toggle */}
          <section>
            <div className="flex items-center justify-between py-1">
              <p className="text-large-reg text-content-primary">Choose timings</p>
              <Toggle enabled={timingsEnabled} onToggle={() => setTimingsEnabled((v) => !v)} />
            </div>
          </section>

          {/* Bumps per day slider */}
          <section className="space-y-3">
            <div className="space-y-1">
              <p className="text-large-reg text-content-primary">How many Bumps a day?</p>
              <p className="text-small-reg text-content-secondary leading-5">
                The first Bump happens at the time you buy the Bump. The second Bump happens 3 hours later.
              </p>
            </div>
            <Slider
              label="Bumps per day"
              min={1}
              max={8}
              value={bumpsPerDay}
              onValueChange={setBumpsPerDay}
              showValues={true}
              formatValue={(v) => `${v} ${v === 1 ? "Bump" : "Bumps"}`}
              minLabel="1"
              maxLabel="8"
            />
          </section>

        </div>

        {/* Sticky payment footer */}
        <div className="flex-shrink-0 border-t border-stroke-boundary shadow-[0_-2px_8px_rgba(44,44,45,0.05)]">
          {/* CarouBiz savings banner */}
          <div className="bg-background-display px-4 py-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">Biz</span>
            </div>
            <p className="text-small-reg text-content-primary flex-1">
              You&apos;re saving{" "}
              <strong>1,302 Coins (52% off)</strong>
              {" "}with your CarouBiz plan!
            </p>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="text-title-3 font-bold text-content-primary">4,400</span>
              <span className="text-small-reg text-content-secondary line-through">13,334</span>
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
    </PrototypeLayout>
  )
}
