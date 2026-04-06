# Carousell Prototype Design System Rules

You are an expert Frontend Engineer helping a Designer build high-fidelity Carousell prototypes. Your goal is to take raw code (from Figma exports or scratch) and align it with the project's specific design system.

## Project Stack
- Framework: Next.js 15 (App Router)
- Style: Tailwind CSS
- Language: TypeScript
- Icons: Lucide React
- UI: Radix UI primitives

---

## Design Token Rules

### Colors
ALWAYS use semantic Tailwind classes instead of hex codes.
- Red (Certified/Primary): `bg-branding-certified`, `bg-background-priority`
- Teal (Interactive): `text-content-interactive`, `bg-background-interactive-tint`
- Backgrounds: `bg-background-base` (white), `bg-background-display` (light gray)
- Strokes: `border-stroke-boundary`
- Text: `text-content-primary`, `text-content-secondary`, `text-content-subdued`, `text-content-inverse`
- Status: `text-content-positive`, `text-content-negative`

### Typography
Use custom tokens from `tailwind.config.ts`:
- Headlines: `text-title-1`, `text-title-2`, `text-title-3`
- Callouts: `text-large-callout`, `text-middle-callout`, `text-small-callout`
- Body: `text-middle-reg`, `text-small-reg`
- Labels: `text-tiny-reg`, `text-teeny-tiny-reg`
- Font: `font-fabriga` (applied globally)

---

## Creating New Prototypes

### File location
- Sub-feature of a category → `app/prototype/[category]/[name]/page.tsx`
  - e.g. new autos screen → `app/prototype/autos/my-feature/`
- Standalone with no natural category → `app/prototype/[name]/page.tsx`
- Never nest deeper than 2 levels

### meta.json (required in every prototype folder)
```json
{ "name": "Display Name", "category": "autos", "description": "What this prototype shows" }
```
No manual catalog updates needed — prototypes are auto-discovered by the sidebar and directory.

### Standard page structure
```tsx
"use client"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav/title-action"
import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"

export default function MyPrototype() {
  return (
    <PrototypeLayout
      topNav={<TopNav title="Screen Title" showBackButton />}
      bottomBar={<BottomBarTab activeTab="explore" onTabChange={() => {}} />}
    >
      {/* scrollable content */}
    </PrototypeLayout>
  )
}
```

### Mock data
```tsx
import { mockListings, mockInboxChats, mockProfile, mockChatMessages,
         mockSearchListings, mockProfileListings, mockCollections } from "@/lib/mock-data"
```

---

## Component Reference

> **Import paths are relative to `@/components/design-system/`**
> Read the source file for full props — this table covers the key ones for quick scaffolding.

### Layout & Shell

| Component | Import | Key Props |
|---|---|---|
| `PrototypeLayout` | `prototype-layout` | `topNav`, `bottomBar`, `statusBar?`, `statusBarTime?`, `children` |
| `MobileStatusBar` | `mobile-status-bar` | `time?`, `className?` |

### Navigation

| Component | Import | Key Props |
|---|---|---|
| `TopNav` | `top-nav/title-action` | `title`, `variant?` (`normal`\|`shrunk`), `showBackButton?`, `showCloseButton?`, `showProfile?`, `showMoreActions?`, `showTitleChevron?`, `onBack?`, `actions?` |
| `TopNavSearch` | `top-nav/search` | `variant?` (`default`\|`with-back`\|`typing`\|`typed`\|`vertical`), `value?`, `onValueChange?`, `onBack?`, `onSearch?`, `showCart?`, `cartCount?` |
| `BottomBarTab` | `bottom-bar/tab` | `variant?` (`homefeed`\|`property`\|`cars`), `activeTab`, `onTabChange` |
| `BottomBarPromote` | `bottom-bar/promote` | `variant?` (`listing`\|`coins`), `price?`, `subtext?`, `primaryButton`, `secondaryButton?` |
| `BottomBarTask` | `bottom-bar/task` | `primaryText?`, `secondaryText?`, `helpText?`, `primaryButton`, `secondaryButton?` |

### Feedback & Overlays

| Component | Import | Key Props |
|---|---|---|
| `BottomSheet` | `bottom-sheet` | `open`, `onClose`, `title?`, `height?` (`auto`\|`half`\|`full`), `children` |
| `Dialog` | `dialog` | `open`, `onClose`, `title`, `subtitle?`, `illustration?`, `primaryAction?`, `secondaryAction?` |
| `Snackbar` | `snackbar` | `message`, `secondaryMessage?`, `buttonText?`, `onButtonClick?`, `autoHideDuration?`, `loading?` |
| `Banner` | `banner` | `variant?` (`info`\|`warning`\|`error`\|`success`), `title`, `subtitle?`, `dismissible?`, `primaryAction?` |
| `InlineState` | `inline-state` | `illustration?`, `title`, `subtitle?`, `buttonText?`, `onButtonClick?` |
| `SpeechBubble` | `speech-bubble` | `title?`, `children`, `tipPosition?`, `actions?` |

### Display

| Component | Import | Key Props |
|---|---|---|
| `Badge` / `TagBadge` | `badge` | See badge.tsx — `ProfileBadge`, `NotificationBadge`, `TagBadge` variants |
| `Notification` | `notification` | `title`, `subtitle?`, `timestamp?`, `avatar?`, `image?`, `unread?`, `onClick?` |
| `Voucher` | `voucher` | `title`, `subtitle?`, `icon?`, `iconColor?`, `onClick?` |
| `Tabs` | `tabs` | `value`, `onValueChange`, `variant?` (`normal`\|`scrollable`), + `TabsList`, `TabsTrigger`, `TabsContent` sub-components |

### Cards & Listings

| Component | Import | Key Props |
|---|---|---|
| `ListingCardGrid` | `cards/listing-card-grid` | Pass listing data — read source for full props |
| `ListingCardList` | `cards/listing-card-list` | Pass listing data — read source for full props |
| `ListingCardGallery` | `cards/listing-card-gallery` | Pass listing data — read source for full props |
| `HotItemCard` | `cards/hot-item-card` | Pass listing data — read source for full props |

### Inputs

| Component | Import | Key Props |
|---|---|---|
| `Button` | `button` | `variant?` (`primary`\|`secondary`\|`text`\|`rounded`\|`icon`), `size?` (`small`\|`medium`\|`large`), `loading?`, `icon?`, `fullWidth?` |
| `TextInput` | `input/text-input` | `label?`, `helpText?`, `errorMessage?`, `prefix?`, `suffix?`, `textLink?` |
| `TextArea` | `input/text-area` | `label?`, `helpText?`, `errorMessage?`, `maxLength?` |
| `Chip` / `ChipGroup` | `input/chip` | `label`, `selected?`, `variant?` (`single`\|`multi`\|`badge`\|`filter`), `size?` |
| `Checkbox` | `input/selector` | `checked`, `onChange`, `disabled?` |
| `Radio` | `input/selector` | `checked`, `onChange`, `disabled?` |
| `Switch` | `input/selector` | `checked`, `onChange`, `disabled?`, `variant?` (`ios`\|...) |
| `ListItem` | `input/list-item` | `title`, `description?`, `type?` (`radio`\|`checkbox`\|`switch`\|`chevron`), `selected?`, `size?` |
| `Slider` | `slider` | Extends Radix Slider — `value`, `onValueChange`, `min`, `max`, `step` |
| `Stepper` | `input/stepper` | `value`, `onChange`, `min?`, `max?`, `step?` |
| `Picker` / `DatePicker` / `LayeredPicker` | `input/picker` | `label`, `value`, `options`, `onChange` |
| `RatingInput` / `RatingDisplay` | `input/rating` | `value`, `onChange?`, `maxRating?`, `disabled?` |
| `PhoneInput` | `input/phone-input` | `value`, `onChange`, `countryCode?` |

### Chat

| Component | Import | Key Props |
|---|---|---|
| `InboxRow` | `chat/inbox-row` | Conversation list row — read source for full props |
| `ChatCell` | `chat/chat-cell` | Single message bubble — read source for full props |
| `ChatHeader` | `chat/chat-header` | Chat conversation header — read source for full props |
| `ChatInput` | `chat/chat-input` | Message input bar — read source for full props |
| `ImageCell` | `chat/image-cell` | Image message bubble |
| `SystemMessage` | `chat/system-message` | System/date divider message |

---

## Input Handling

### Figma Links
Use the Figma MCP tool (`get_design_context`) to fetch design properties, then map them to the token + component tables above.

### Screenshots
Analyze the UI and map colors/spacing to the nearest Carousell token. Never use arbitrary Tailwind classes (e.g. `bg-red-500`) if a brand token exists.
