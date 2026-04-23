"use client"

import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type TransactionType =
  | "bump"
  | "smart-bump"
  | "spotlight"
  | "shoutout"
  | "refund"
  | "coins-added"
  | "coins-expired"
  | "caroubiz"

interface Transaction {
  id: string
  type: TransactionType
  title: string
  subtitle: string
  date: string
  amount: number
  thumbnail?: string
}

interface TransactionGroup {
  month: string
  transactions: Transaction[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRANSACTION_GROUPS: TransactionGroup[] = [
  {
    month: "Sep 2024",
    transactions: [
      {
        id: "1",
        type: "smart-bump",
        title: "Smart Bump (2/6 Bumps)",
        subtitle: "Reformation Bee midi dress",
        date: "24 Sep 2024",
        amount: -600,
        thumbnail: "/images/nike-air-force-pink.jpg",
      },
      {
        id: "2",
        type: "spotlight",
        title: "Spotlight (2/7 days)",
        subtitle: "Reformation Bee midi dress",
        date: "22 Sep 2024",
        amount: -1286,
        thumbnail: "/images/nike-air-force-pink.jpg",
      },
      {
        id: "3",
        type: "shoutout",
        title: "Search result Shoutout",
        subtitle: "Fashion",
        date: "20 Sep 2024",
        amount: -200,
      },
      {
        id: "4",
        type: "shoutout",
        title: "Notification Shoutout",
        subtitle: "Fashion",
        date: "18 Sep 2024",
        amount: -3000,
      },
      {
        id: "5",
        type: "refund",
        title: "Notification Shoutout refund",
        subtitle: "Fashion",
        date: "18 Sep 2024",
        amount: 800,
      },
      {
        id: "6",
        type: "caroubiz",
        title: "Coins from CarouBiz plan",
        subtitle: "CarouBiz subscription",
        date: "15 Sep 2024",
        amount: 800,
      },
    ],
  },
  {
    month: "Jan 2023",
    transactions: [
      {
        id: "7",
        type: "bump",
        title: "3-Day Bump",
        subtitle: "Nike Air Force 1 Pixel",
        date: "12 Jan 2023",
        amount: -6224,
        thumbnail: "/images/nike-air-force-pink.jpg",
      },
      {
        id: "8",
        type: "bump",
        title: "Bulk Bump",
        subtitle: "10 listings",
        date: "3 Jan 2023",
        amount: -10000,
      },
    ],
  },
  {
    month: "Dec 2021",
    transactions: [
      {
        id: "9",
        type: "coins-added",
        title: "Coins added",
        subtitle: "Top up",
        date: "28 Dec 2021",
        amount: 500,
      },
      {
        id: "10",
        type: "coins-added",
        title: "Free Coins",
        subtitle: "Promotional reward",
        date: "15 Dec 2021",
        amount: 500,
      },
    ],
  },
  {
    month: "Jan 2022",
    transactions: [
      {
        id: "11",
        type: "coins-expired",
        title: "Coins expired",
        subtitle: "Unused Coins",
        date: "31 Jan 2022",
        amount: -30000,
      },
    ],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function TransactionIcon({ type, thumbnail }: { type: TransactionType; thumbnail?: string }) {
  // Listing thumbnail icon for bump/spotlight types
  if (thumbnail && (type === "bump" || type === "smart-bump" || type === "spotlight")) {
    return (
      <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0 border border-stroke-boundary">
        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
      </div>
    )
  }

  // Coin icon for credits / refunds / caroubiz
  if (type === "coins-added" || type === "refund" || type === "caroubiz") {
    return (
      <div className="w-8 h-8 rounded-full bg-background-interactive-tint flex items-center justify-center flex-shrink-0">
        <CoinIcon size="xs" />
      </div>
    )
  }

  // Megaphone for shoutout
  if (type === "shoutout") {
    return (
      <div className="w-8 h-8 rounded-full bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
        <span className="text-sm">📣</span>
      </div>
    )
  }

  // Coins expired
  if (type === "coins-expired") {
    return (
      <div className="w-8 h-8 rounded-full bg-background-disabled flex items-center justify-center flex-shrink-0">
        <CoinIcon size="xs" />
      </div>
    )
  }

  // Default bump icon (no thumbnail)
  return (
    <div className="w-8 h-8 rounded-full bg-background-display flex items-center justify-center flex-shrink-0">
      <span className="text-sm">⚡</span>
    </div>
  )
}

function TransactionRow({ tx }: { tx: Transaction }) {
  const isPositive = tx.amount > 0
  const formattedAmount = `${isPositive ? "+" : ""}${tx.amount.toLocaleString()}`

  return (
    <div className="flex items-center gap-3 py-3">
      <TransactionIcon type={tx.type} thumbnail={tx.thumbnail} />

      <div className="flex-1 min-w-0">
        <p className="text-middle-callout font-bold text-content-primary leading-5 truncate">
          {tx.title}
        </p>
        <p className="text-small-reg text-content-secondary leading-4 truncate">
          {tx.subtitle}
        </p>
        <p className="text-small-reg text-content-subdued leading-4 mt-0.5">
          {tx.date}
        </p>
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        <span
          className={cn(
            "text-middle-callout font-bold",
            isPositive ? "text-content-interactive" : "text-content-primary",
          )}
        >
          {formattedAmount}
        </span>
        <CoinIcon size="xs" />
      </div>
    </div>
  )
}

function MonthGroup({ group }: { group: TransactionGroup }) {
  return (
    <div>
      {/* Month header */}
      <div className="py-2 sticky top-0 bg-background-base z-10">
        <p className="text-small-callout font-bold text-content-secondary uppercase tracking-wide">
          {group.month}
        </p>
      </div>

      {/* Transactions */}
      <div className="divide-y divide-stroke-boundary">
        {group.transactions.map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoinHistoryPage() {
  return (
    <PrototypeLayout
      topNav={
        <TopNav
          title="Coin history"
          showCloseButton={true}
          showProfile={false}
          showMoreActions={false}
        />
      }
    >
      <div className="px-4 pb-6">
        {TRANSACTION_GROUPS.map((group) => (
          <MonthGroup key={group.month} group={group} />
        ))}
      </div>
    </PrototypeLayout>
  )
}
