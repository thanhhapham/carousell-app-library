"use client"

import { useState } from "react"
import {
  Search, ScanLine, ShoppingCart, MessageCircle,
  ArrowLeft, X, Plus, Sparkles, MoreHorizontal,
  Compass, Heart, PlusCircle, Bell, User, Clock, CornerUpLeft,
  Car, ChevronRight, Check
} from "lucide-react"

type Screen = "autos" | "search" | "refine"

// ─── Data ────────────────────────────────────────────────────────────────────

const CAR_CATEGORIES_1 = [
  { label: "New Cars", color: "bg-red-100" },
  { label: "Used Cars", color: "bg-blue-100" },
  { label: "For Rent", color: "bg-green-100" },
]
const CAR_CATEGORIES_2 = [
  { label: "Parallel imports" },
  { label: "Commercial" },
  { label: "Motorcycles" },
  { label: "Workshop & Accessories" },
]
const TOOL_SHORTCUTS = ["Sell your car", "Insurance", "Loan Assist"]

const SUGGESTIONS = [
  { type: "recent" as const, text: "Subaru forester" },
  { type: "query" as const, text: "Subaru forester" },
  { type: "in" as const, text: "Subaru forester", inLabel: "Accessories" },
  { type: "in" as const, text: "Subaru forester", inLabel: "Used car" },
  { type: "query" as const, text: "Subaru forester ", bold: "sj" },
  { type: "query" as const, text: "Subaru forester ", bold: "xt" },
  { type: "model" as const, title: "Compact SUV", subtitle: "Include Subaru forester and 10+ models" },
  { type: "model" as const, title: "Premium compact SUV", subtitle: "Enjoy premium with the price of Subaru fore..." },
]

const ALL_CHIPS = ["Family-friendly", "Asian", "SUV", "5 seaters", "Performance", "<2 owners", "< 4,400km/yr", "Continental"]
const DEFAULT_SELECTED = new Set(["Family-friendly", "Asian", "SUV", "5 seaters", "Performance"])

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function AutosIdealRideFlow() {
  const [screen, setScreen] = useState<Screen>("autos")
  const [budget, setBudget] = useState(45)
  const [notifyMe, setNotifyMe] = useState(true)
  const [chips, setChips] = useState(DEFAULT_SELECTED)

  const toggleChip = (chip: string) => {
    setChips(prev => {
      const next = new Set(prev)
      next.has(chip) ? next.delete(chip) : next.add(chip)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-background-base flex flex-col">
      {screen === "autos" && <AutosTab onSearchTap={() => setScreen("search")} />}
      {screen === "search" && (
        <SearchScreen
          onBack={() => setScreen("autos")}
          onIdealCar={() => setScreen("refine")}
        />
      )}
      {screen === "refine" && (
        <RefineScreen
          onClose={() => setScreen("search")}
          budget={budget}
          setBudget={setBudget}
          notifyMe={notifyMe}
          setNotifyMe={setNotifyMe}
          chips={chips}
          toggleChip={toggleChip}
        />
      )}
    </div>
  )
}

// ─── Screen 1: Autos Tab ──────────────────────────────────────────────────────

function AutosTab({ onSearchTap }: { onSearchTap: () => void }) {
  const [activeTab, setActiveTab] = useState("Autos")
  const tabs = ["For you", "Home", "Autos", "Categories"]

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top bar */}
      <div className="flex-shrink-0 bg-background-base border-b border-stroke-boundary">
        {/* Search row */}
        <div className="flex items-center gap-2 px-4 py-2">
          <button
            onClick={onSearchTap}
            className="flex-1 flex items-center gap-2 bg-background-display rounded-full px-4 py-2"
          >
            <Search size={16} className="text-content-secondary" />
            <span className="text-middle-reg text-content-subdued flex-1 text-left">Search Carousell</span>
          </button>
          <button className="p-2"><ScanLine size={20} className="text-content-primary" /></button>
          <button className="p-2"><ShoppingCart size={20} className="text-content-primary" /></button>
          <button className="p-2"><MessageCircle size={20} className="text-content-primary" /></button>
        </div>

        {/* Category tabs */}
        <div className="flex border-t border-stroke-boundary">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-small-reg font-medium transition-colors ${
                activeTab === tab
                  ? "text-content-interactive border-b-2 border-content-interactive"
                  : "text-content-secondary"
              }`}
            >
              {tab === "Autos" && <span className="flex flex-col items-center gap-0.5"><Car size={16} className="mx-auto" />{tab}</span>}
              {tab !== "Autos" && tab}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Find your ideal ride card */}
        <div className="mx-3 mt-3 rounded-xl border border-content-interactive p-3 bg-background-base">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-content-interactive" />
              <span className="text-small-reg text-content-primary font-medium">Find your ideal ride</span>
            </div>
            <button
              onClick={onSearchTap}
              className="bg-content-primary text-white text-small-reg font-medium px-3 py-1 rounded-full"
            >
              Start
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-background-display rounded-lg p-2">
              <p className="text-tiny-reg text-content-secondary">Asian, below 30K, spacious</p>
            </div>
            <div className="flex-1 bg-background-display rounded-lg p-2">
              <p className="text-tiny-reg text-content-secondary">Continental, below 50K, compact</p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mx-3 mt-3 rounded-xl overflow-hidden bg-branding-certified h-24 flex items-center px-4">
          <div>
            <p className="text-white text-small-reg font-bold leading-tight">Carousell Autos</p>
            <p className="text-white text-tiny-reg opacity-90">Sell your car to us instantly.</p>
            <p className="text-white text-tiny-reg opacity-90">Get the highest quote from us!</p>
          </div>
        </div>

        {/* Category row 1 */}
        <div className="mt-4 px-4">
          <div className="flex justify-around">
            {CAR_CATEGORIES_1.map(cat => (
              <button key={cat.label} className="flex flex-col items-center gap-1.5 w-20">
                <div className={`w-14 h-14 rounded-full ${cat.color} flex items-center justify-center`}>
                  <Car size={24} className="text-content-secondary" />
                </div>
                <span className="text-tiny-reg text-content-primary text-center">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category row 2 */}
        <div className="mt-4 px-4">
          <div className="flex justify-around">
            {CAR_CATEGORIES_2.map(cat => (
              <button key={cat.label} className="flex flex-col items-center gap-1 w-20">
                <div className="w-12 h-12 rounded-full bg-background-display flex items-center justify-center">
                  <Car size={18} className="text-content-secondary" />
                </div>
                <span className="text-tiny-reg text-content-primary text-center leading-tight">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* My Garage */}
        <div className="mt-4 mx-3 bg-background-base border border-stroke-boundary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-middle-reg font-semibold text-content-primary">My Garage</span>
          </div>
          {/* Car entry */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-12 rounded-lg bg-background-display overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Car size={20} className="text-content-secondary" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-middle-reg font-medium text-content-primary truncate">Honda Civic Type-R 2.0 M</p>
              <p className="text-small-reg text-content-secondary">SKM661D · 15 Jun 2009</p>
            </div>
            <button><MoreHorizontal size={20} className="text-content-secondary" /></button>
          </div>
          {/* Divider */}
          <div className="border-t border-stroke-boundary my-3" />
          {/* Tool shortcuts */}
          <div className="flex justify-around">
            {TOOL_SHORTCUTS.map(tool => (
              <button key={tool} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-background-display flex items-center justify-center">
                  <Car size={16} className="text-content-interactive" />
                </div>
                <span className="text-tiny-reg text-content-primary text-center">{tool}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 inset-x-0 max-w-[475px] mx-auto bg-background-base border-t border-stroke-boundary">
        <div className="flex items-center">
          {[
            { icon: Compass, label: "Explore" },
            { icon: Heart, label: "Interests" },
            { icon: PlusCircle, label: "Sell", primary: true },
            { icon: Bell, label: "Updates" },
            { icon: User, label: "Me" },
          ].map(({ icon: Icon, label, primary }) => (
            <button key={label} className={`flex-1 flex flex-col items-center py-3 gap-1 ${primary ? "text-branding-certified" : label === "Explore" ? "text-content-interactive" : "text-content-secondary"}`}>
              <Icon size={22} />
              <span className="text-tiny-reg">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Screen 2: Search ─────────────────────────────────────────────────────────

function SearchScreen({
  onBack,
  onIdealCar,
}: {
  onBack: () => void
  onIdealCar: () => void
}) {
  return (
    <div className="flex flex-col h-screen bg-background-base">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-stroke-boundary">
        {/* Status bar placeholder */}
        <div className="h-11 flex items-center px-5">
          <span className="text-small-reg font-semibold text-content-primary">9:41</span>
        </div>
        {/* Search row */}
        <div className="flex items-center gap-3 px-4 pb-3">
          <button onClick={onBack}>
            <ArrowLeft size={24} className="text-content-primary" />
          </button>
          <div className="flex-1 flex items-center gap-2 bg-background-display border border-content-interactive rounded px-3 py-2">
            <Search size={16} className="text-content-secondary flex-shrink-0" />
            <span className="text-large-callout text-content-secondary flex-1">Subaru forester</span>
            {/* Blinking cursor */}
            <div className="w-px h-5 bg-content-interactive animate-pulse" />
          </div>
        </div>
      </div>

      {/* Suggestions list */}
      <div className="flex-1 overflow-y-auto relative">
        {SUGGESTIONS.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-stroke-boundary">
            {/* Icon */}
            {s.type === "recent" && (
              <div className="w-8 h-8 rounded-full bg-background-display flex items-center justify-center flex-shrink-0">
                <Clock size={14} className="text-content-secondary" />
              </div>
            )}
            {s.type === "query" && (
              <div className="w-8 h-8 rounded-full bg-background-display flex items-center justify-center flex-shrink-0">
                <Search size={14} className="text-content-secondary" />
              </div>
            )}
            {s.type === "in" && (
              <div className="w-8 flex-shrink-0 flex justify-end">
                <CornerUpLeft size={14} className="text-content-subdued" />
              </div>
            )}
            {s.type === "model" && (
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-background-display rounded blur-sm" />
                <div className="absolute top-1 left-1 w-9 h-9 bg-background-display rounded border border-stroke-boundary flex items-center justify-center">
                  <Car size={14} className="text-content-secondary" />
                </div>
              </div>
            )}

            {/* Text */}
            <div className="flex-1 min-w-0">
              {(s.type === "recent" || s.type === "query") && (
                <span className="text-large-callout text-content-secondary">
                  {s.text}
                  {s.bold && <span className="font-bold">{s.bold}</span>}
                </span>
              )}
              {s.type === "in" && (
                <span className="text-large-callout text-content-secondary">
                  <span className="text-content-subdued">in </span>
                  {s.inLabel}
                </span>
              )}
              {s.type === "model" && (
                <div>
                  <p className="text-large-callout font-bold text-content-secondary truncate">{s.title}</p>
                  <p className="text-small-reg text-content-secondary truncate">{s.subtitle}</p>
                </div>
              )}
            </div>

            {/* Arrow */}
            <CornerUpLeft size={13} className="text-content-subdued flex-shrink-0 rotate-180 scale-x-[-1]" style={{ transform: "scaleX(-1) rotate(180deg)" }} />
          </div>
        ))}

        {/* Gradient fade */}
        <div className="sticky bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* "Tell us your ideal car" button — floats above keyboard */}
      <div className="flex-shrink-0 flex justify-center pb-6 pt-2 bg-background-base">
        <button
          onClick={onIdealCar}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-content-interactive bg-background-base shadow-[0_0_20px_rgba(0,191,162,0.3)]"
        >
          <Sparkles size={16} className="text-content-interactive" />
          <span className="text-middle-reg text-content-secondary">Tell us your ideal car</span>
        </button>
      </div>
    </div>
  )
}

// ─── Screen 3: Refine Your Needs ──────────────────────────────────────────────

function RefineScreen({
  onClose,
  budget,
  setBudget,
  notifyMe,
  setNotifyMe,
  chips,
  toggleChip,
}: {
  onClose: () => void
  budget: number
  setBudget: (v: number) => void
  notifyMe: boolean
  setNotifyMe: (v: boolean) => void
  chips: Set<string>
  toggleChip: (chip: string) => void
}) {
  // Build AI title from selected chips
  const selectedList = ALL_CHIPS.filter(c => chips.has(c))
  const aiHighlight = selectedList.slice(0, 2).join(", ") || "your preferences"

  return (
    <div className="flex flex-col h-screen bg-background-base-low">
      {/* Top nav */}
      <div className="flex-shrink-0 bg-background-base-low">
        <div className="h-11" /> {/* status bar */}
        <div className="flex items-center justify-between px-4 h-12">
          <button onClick={onClose}>
            <X size={16} className="text-content-primary" />
          </button>
          <button>
            <span className="text-middle-callout font-semibold text-content-primary">Write your own</span>
          </button>
        </div>
      </div>

      {/* AI-generated title */}
      <div className="flex-shrink-0 px-4 pb-4 bg-background-base-low">
        <h1 className="text-title-2 text-content-primary leading-tight">
          {"I'm looking for a reliable, spacious family friendly SUV with "}
          <span className="text-content-interactive">{aiHighlight}</span>
          <span className="text-content-interactive">, {budget}K</span>
          {" "}
          <span className="inline-block w-px h-6 bg-content-interactive align-middle animate-pulse" />
        </h1>
        <p className="text-small-reg text-content-secondary mt-1">
          Like Mazda CX-5, Toyota Camry, Mercedes GLC
        </p>
      </div>

      {/* Main scrollable card */}
      <div className="flex-1 overflow-y-auto bg-background-base rounded-t-2xl px-4 pt-4 pb-6">
        {/* Chips section */}
        <p className="text-middle-reg text-content-secondary mb-3">Describe your ideal rides</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {ALL_CHIPS.map(chip => {
            const selected = chips.has(chip)
            return (
              <button
                key={chip}
                onClick={() => toggleChip(chip)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-small-reg transition-colors ${
                  selected
                    ? "bg-background-interactive-tint border border-content-interactive text-content-interactive-strong"
                    : "bg-background-base border border-dashed border-stroke-input text-content-secondary"
                }`}
              >
                {chip}
                {selected && <X size={14} />}
              </button>
            )
          })}
          {/* Add more chip */}
          <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-dashed border-stroke-input text-small-reg text-content-subdued">
            Add more <Plus size={14} />
          </button>
        </div>

        {/* Budget section */}
        <p className="text-middle-reg text-content-secondary mb-3">Budget</p>
        <div className="flex flex-col items-center mb-2">
          <span className="text-title-2 font-bold text-content-primary underline">
            S${budget.toLocaleString()},000
          </span>
        </div>

        {/* Slider */}
        <div className="relative mb-1">
          <input
            type="range"
            min={20}
            max={70}
            step={5}
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
            className="w-full accent-content-interactive"
          />
          {/* Tick labels */}
          <div className="flex justify-between mt-1 px-0">
            {[20, 30, 40, 50, 60, 70].map(v => (
              <span key={v} className="text-tiny-reg text-content-interactive-strong">
                {v === 20 || v === 30 || v === 40 ? `${v}K` : `${v}K`}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 bg-background-base border-t border-stroke-boundary px-4 pt-3 pb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-middle-reg text-content-primary">Notify me of new matches</span>
          <button
            onClick={() => setNotifyMe(!notifyMe)}
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              notifyMe ? "bg-background-interactive" : "border-2 border-stroke-input bg-background-base"
            }`}
          >
            {notifyMe && <Check size={14} className="text-white" />}
          </button>
        </div>
        <button className="w-full bg-background-interactive rounded py-3 text-center">
          <span className="text-large-callout font-bold text-white">See all 100+ matches</span>
        </button>
      </div>
    </div>
  )
}
