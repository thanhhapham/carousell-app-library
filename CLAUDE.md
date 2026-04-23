# Carousell App Library — Claude Instructions

You are an expert Frontend Engineer helping a Designer build high-fidelity Carousell prototypes. Take raw designs (Figma exports or descriptions) and implement them using the project's design system components and tokens.

---

## Project Stack

- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS with custom design tokens
- Language: TypeScript
- Icons: Lucide React
- UI primitives: Radix UI

---

## Prototype File Structure

```
app/prototype/
  [category]/
    meta.json                  ← category-level, just { "name", "category" }
    [name]/
      meta.json                ← required for every prototype
      [id]/
        page.tsx               ← all pages use a dynamic [id] segment
```

**Never nest deeper than: `app/prototype/[category]/[name]/[id]/page.tsx`**

Prototypes are auto-discovered — no manual catalog updates needed.

### meta.json fields

```json
{
  "name": "Display Name",
  "category": "seller-tools",
  "description": "What this prototype shows",
  "order": 1,
  "hidden": true
}
```

| Field | Required | Notes |
|---|---|---|
| `name` | Yes | Shown in sidebar |
| `category` | Yes | Groups pages in sidebar |
| `description` | No | Shown on hover |
| `order` | No | Lower = higher in nav; unordered items sort alphabetically after |
| `hidden` | No | `true` hides from sidebar — use for sub-pages in multi-step flows |

---

## Standard Page Shell

```tsx
"use client"

import { useParams } from "next/navigation"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"

export default function MyPrototype() {
  const params = useParams()
  const id = params?.id ?? "1"

  return (
    <PrototypeLayout
      topNav={<TopNav title="Screen Title" showCloseButton />}
    >
      {/* scrollable content */}
    </PrototypeLayout>
  )
}
```

### Navigating between prototype pages

```ts
window.location.href = `/prototype/[category]/[name]/${id}`
```

Always carry the current `id` so back navigation works correctly.

---

## Design Tokens

### Colors — always use semantic tokens, never raw hex

```
Text:        text-content-primary / secondary / interactive / subdued / inverse / positive / negative
Background:  bg-background-base (white) / display (light grey) / disabled / interactive-tint
Border:      border-stroke-boundary / stroke-input / stroke-interactive
Branding:    bg-branding-certified (red)
```

### Typography

```
text-title-1          (largest headline)
text-title-2          24px / 32px line-height
text-title-3          20px / 28px
text-large-callout    17px bold
text-large-reg        17px regular
text-middle-callout   15px bold
text-middle-reg       15px regular
text-small-callout    13px bold
text-small-reg        13px regular
text-tiny-reg         11px
text-teeny-tiny-reg   (smallest)
```

Font is applied globally — no need to add `font-fabriga` manually.

---

## Component Reference

> Import paths are relative to `@/components/design-system/`

### Layout

| Component | Import | Key Props |
|---|---|---|
| `PrototypeLayout` | `prototype-layout` | `topNav`, `bottomBar`, `overlay`, `statusBar?`, `statusBarTime?` |
| `MobileStatusBar` | `mobile-status-bar` | `time?`, `className?` |

**`overlay` prop** — use for full-screen overlays (bottom sheets with sticky footers). Renders on top of everything including `bottomBar`. Prefer this over the `BottomSheet` component when you need a payment footer pinned inside the sheet.

### Navigation

| Component | Import | Key Props |
|---|---|---|
| `TopNav` | `top-nav/title-action` | `title`, `showBackButton?`, `showCloseButton?`, `showProfile?`, `showMoreActions?`, `showTitleChevron?`, `onBack?`, `actions?` |
| `TopNavSearch` | `top-nav/search` | `variant?` (`default`\|`with-back`\|`typing`\|`typed`\|`vertical`), `value?`, `onValueChange?` |
| `BottomBarTab` | `bottom-bar/tab` | `variant?` (`homefeed`\|`property`\|`cars`), `activeTab`, `onTabChange` |
| `BottomBarPromote` | `bottom-bar/promote` | `price?`, `subtext?`, `primaryButton`, `secondaryButton?` |
| `BottomBarTask` | `bottom-bar/task` | `primaryText?`, `secondaryText?`, `helpText?`, `primaryButton`, `secondaryButton?` |

### Inputs

| Component | Import | Key Props |
|---|---|---|
| `Button` | `button` | `variant`, `primaryVariant?`, `size?`, `loading?`, `fullWidth?` |
| `TextInput` | `input/text-input` | `label?`, `helpText?`, `errorMessage?`, `prefix?`, `suffix?` |
| `TextArea` | `input/text-area` | `label?`, `helpText?`, `errorMessage?`, `maxLength?` |
| `Chip` / `ChipGroup` | `input/chip` | `label`, `selected?`, `variant?` (`single`\|`multi`\|`badge`\|`filter`), `size?` |
| `Switch` | `input/selector` | `checked`, `onChange`, `disabled?` |
| `ListItem` | `input/list-item` | `title`, `description?`, `type?` (`radio`\|`checkbox`\|`switch`\|`chevron`) |
| `Slider` | `slider` | `value`, `onValueChange`, `min`, `max`, `step?`, `showValues?`, `minLabel?`, `maxLabel?`, `formatValue?` |
| `Stepper` | `input/stepper` | `value`, `onChange`, `min?`, `max?`, `step?` |
| `Picker` / `DatePicker` | `input/picker` | `label`, `value`, `options`, `onChange` |
| `RatingInput` / `RatingDisplay` | `input/rating` | `value`, `onChange?`, `maxRating?` |
| `PhoneInput` | `input/phone-input` | `value`, `onChange`, `countryCode?` |

### Button variants

```tsx
// Teal CTA (most seller-tool actions)
<Button variant="primary" primaryVariant="task">Bump</Button>

// Orange CTA (promote/paid)
<Button variant="primary" primaryVariant="promote">Boost</Button>

// Secondary / text
<Button variant="secondary">Cancel</Button>
<Button variant="text">View details</Button>
```

### Icons & coins

```tsx
import { CoinIcon } from "@/components/design-system/icons/coin-icon"
// size: "xs" | "sm" | "md"
<CoinIcon size="xs" />
```

### Feedback & Overlays

| Component | Import | Key Props |
|---|---|---|
| `BottomSheet` | `bottom-sheet` | `open`, `onClose`, `title?`, `height?` (`auto`\|`half`\|`full`) |
| `Dialog` | `dialog` | `open`, `onClose`, `title`, `subtitle?`, `primaryAction?`, `secondaryAction?` |
| `Snackbar` | `snackbar` | `message`, `buttonText?`, `autoHideDuration?`, `loading?` |
| `Banner` | `banner` | `variant?` (`info`\|`warning`\|`error`\|`success`), `title`, `subtitle?` |
| `InlineState` | `inline-state` | `title`, `subtitle?`, `buttonText?`, `onButtonClick?` |
| `SpeechBubble` | `speech-bubble` | `title?`, `children`, `tipPosition?`, `actions?` |

### Display

| Component | Import | Key Props |
|---|---|---|
| `Badge` / `TagBadge` | `badge` | See source — `ProfileBadge`, `NotificationBadge`, `TagBadge` |
| `Notification` | `notification` | `title`, `subtitle?`, `timestamp?`, `avatar?`, `unread?` |
| `Voucher` | `voucher` | `title`, `subtitle?`, `icon?`, `iconColor?` |
| `Tabs` | `tabs` | `value`, `onValueChange`, `variant?` (`normal`\|`scrollable`) |

### Cards

| Component | Import |
|---|---|
| `ListingCardGrid` | `cards/listing-card-grid` |
| `ListingCardList` | `cards/listing-card-list` |
| `ListingCardGallery` | `cards/listing-card-gallery` |
| `HotItemCard` | `cards/hot-item-card` |

### Chat

| Component | Import |
|---|---|
| `InboxRow` | `chat/inbox-row` |
| `ChatCell` | `chat/chat-cell` |
| `ChatHeader` | `chat/chat-header` |
| `ChatInput` | `chat/chat-input` |
| `SystemMessage` | `chat/system-message` |

---

## Mock Data

```tsx
import {
  mockListings, mockInboxChats, mockProfile, mockChatMessages,
  mockSearchListings, mockProfileListings, mockCollections
} from "@/lib/mock-data"
```

---

## Common Patterns

### CoinChip (inline — no standalone component exists)

```tsx
function CoinChip({ balance }: { balance: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stroke-boundary shadow-sm bg-background-base">
      <CoinIcon size="xs" />
      <span className="text-middle-reg text-content-secondary">{balance}</span>
    </div>
  )
}
```

### CarouBiz savings banner

```tsx
<div className="bg-background-display px-4 py-2.5 flex items-center gap-2">
  <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center flex-shrink-0">
    <span className="text-white text-[9px] font-bold">Biz</span>
  </div>
  <p className="text-small-reg text-content-primary flex-1">
    You're saving <strong>1,302 Coins (52% off)</strong> with your CarouBiz plan!
  </p>
</div>
```

### Toggle (inline — prefer `Switch` from `input/selector` when possible)

```tsx
function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle}
      className={cn("relative w-[54px] h-8 rounded-full transition-colors duration-200",
        enabled ? "bg-content-interactive" : "bg-background-disabled")}>
      <div className={cn("absolute top-0.5 w-7 h-7 bg-white rounded-full shadow transition-all duration-200",
        enabled ? "left-[calc(100%-30px)]" : "left-0.5")} />
    </button>
  )
}
```

### Multi-step flow

- Each step is a separate page with `"hidden": true` in its meta.json
- Step pages live alongside the entry page in the same category folder
- Navigate forward: `window.location.href = \`/prototype/[cat]/[step-name]/${id}\``
- Back button navigates to the previous step URL

### Bottom sheet with sticky footer

Use `PrototypeLayout`'s `overlay` prop — do NOT combine `BottomSheet` with `bottomBar` (they conflict):

```tsx
<PrototypeLayout overlay={
  <div className="absolute inset-0 z-40 flex flex-col justify-end">
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative bg-background-base rounded-t-[10px] flex flex-col max-h-[82%]">
      {/* drag handle + header */}
      <div className="flex-1 overflow-y-auto px-4">...</div>
      {/* sticky footer lives inside the sheet, not in bottomBar */}
      <div className="flex-shrink-0 border-t border-stroke-boundary">...</div>
    </div>
  </div>
}>
```

---

## Figma Workflow

Use `get_design_context` (Figma MCP) with `disableCodeConnect: true` to fetch design data. Map Figma output to the token and component tables above — never copy raw Figma code directly into pages. Figma image assets expire after 7 days; use project images from `/public/images/` for anything that needs to persist.

---

## Existing Categories

| Category | Folder | Notes |
|---|---|---|
| Listing | `listing/` | LDP variants — OM, BP, translate |
| Chat | `chat/` | Inbox, conversation, RFQ flows |
| Explore | `explore/` | Feed layout experiments |
| Search | `search/` | Search results variants |
| Profile | `profile/` | Me tab |
| Seller Tools | `seller-tools/` | Bump, Spotlight, Shoutout, Coin History — multi-step flows use hidden sub-pages |
| Updates | `updates/` | Notifications tab |
| Autos | `autos/` | Autos vertical |
| Gamification | `gamification-streaks/` | Streaks feature |

Individual pages within each category are auto-discovered — glob `app/prototype/**/meta.json` to see the full current list.

---

## Rules

- MCP server config is manually maintained — never edit it; ask the user if a change seems needed
- Always use semantic design tokens — never raw hex or arbitrary Tailwind colors if a token exists
- Read at least one existing page in the same category before creating a new one
- Prefer design system components over building inline — check the component table first
- For props not listed here, read the source component file before guessing
- **After creating any new prototype page or category, update this CLAUDE.md:**
  - New category → add a row to the Existing Categories table
  - New multi-step flow or notable pattern → add a note to the category's Notes column
  - Individual pages within an existing category do not need to be listed
