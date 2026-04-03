# Agent Handoff: Carousell Design System & Prototype Toolkit

This file tracks progress for an ongoing refactor. Read this fully before starting work.

## Project Context

This is a Next.js 15 (App Router) + Tailwind CSS design system for Carousell, used by product designers to create interactive prototypes. The goal is:

1. Designers create `app/prototype/[name]/page.tsx` → it auto-appears everywhere
2. A visual directory page at `/` lets designers browse all prototypes + components
3. Sidebar auto-updates when new prototypes are added (no manual edits)

**Working directory**: `/Users/thanhhapham/Design tools/App library/.claude/worktrees/lucid-nobel/App library/`

**Dev server**: `bun dev` (bun at `/Users/thanhhapham/.bun/bin/bun`)

**Preview**: `launch.json` configured for port 3000

---

## Completed Tasks ✅

### Foundation Cleanup (Done)
- [x] Deleted 9 unused UI primitives from `components/ui/`: calendar, chart, command, form, hover-card, input-otp, resizable, sidebar, skeleton
- [x] Cleaned `tailwind.config.ts` — removed legacy commented shadcn colors
- [x] Deleted stale docs from `app/prototype/`: PROTOTYPES.md, GETTING_STARTED.md, README.md, test/
- [x] Created `components/design-system/prototype-layout.tsx` — shared mobile wrapper component
- [x] Created `components/design-system/mobile-status-bar.tsx` — extracted iOS status bar
- [x] Refactored `listing-card.tsx` → `components/design-system/cards/` (8 files, fully backward-compatible)
- [x] Created `lib/mock-data.ts` — centralized mock data with TypeScript types
- [x] Updated `AI_INSTRUCTIONS.md` with new conventions
- [x] Updated `app/prototype/_template/page.tsx` and `README.md` to use new abstractions
- [x] Build verified: `next build` passes all 58 routes with zero errors

---

## Remaining Tasks

### Task 1: Create `lib/get-prototypes.ts` — Filesystem Scanner ✅ DONE

**What it does**: Reads `app/prototype/` directory and returns all prototypes for use in the sidebar and directory page.

**File to create**: `lib/get-prototypes.ts`

```typescript
// Logic:
// 1. Read all subdirs of app/prototype/
// 2. Skip folders starting with _ (e.g., _template)
// 3. Read optional meta.json from each folder
// 4. Fall back to formatted folder name if no meta.json
// 5. Detect dynamic routes ([id] subfolders) → auto-add /1 suffix to href
// 6. Return sorted array

export interface PrototypeMeta {
  name?: string         // Display name. Fallback: folder name title-cased
  description?: string  // For directory page cards
  category?: string     // For grouping (e.g., "chat", "listing", "feed")
  status?: "ready" | "wip" | "draft"  // Default: no badge shown
  href?: string         // Override auto-generated href
  hidden?: boolean      // Exclude from sidebar + directory
}

export interface PrototypeEntry {
  name: string
  href: string
  folderName: string
  category?: string
  status?: string
  description?: string
}

export function getPrototypes(): PrototypeEntry[] {
  // Use fs.readdirSync — this runs server-side only
}
```

**Edge cases**:
- `_template` → always excluded (underscore prefix)
- `listing-om/[id]/page.tsx` → href becomes `/prototype/listing-om/1`
- `gamification-streaks/[page]/page.tsx` → href becomes `/prototype/gamification-streaks/1`
- Folder with no `page.tsx` (e.g., only has subfolders) → check if any subfolder has page.tsx

---

### Task 2: Create `lib/get-components.ts` — Component Scanner ✅ DONE

**What it does**: Scans `app/components/` to get all design system component demo pages for the directory.

**File to create**: `lib/get-components.ts`

```typescript
export interface ComponentEntry {
  name: string        // Display name (e.g., "Badge")
  href: string        // e.g., "/components/badge"
  category: string    // e.g., "feedback", "input", "chat", "navigation"
}

// Category mapping for known component folders:
const CATEGORY_MAP: Record<string, string> = {
  "badge": "feedback",
  "banner": "feedback",
  "bottom-sheet": "overlays",
  "button": "actions",
  "card": "containers",
  "chat": "chat",
  "dialog": "overlays",
  "external-ads": "display",
  "inline-state": "feedback",
  "input": "inputs",
  "list-controls": "inputs",
  "listing-card": "cards",
  "notification": "feedback",
  "slider": "inputs",
  "snackbar": "feedback",
  "speech-bubble": "display",
  "tabs": "navigation",
  "top-nav": "navigation",
  "voucher": "display",
  "bottom-bar": "navigation",
}

export function getComponents(): ComponentEntry[]
```

---

### Task 3: Replace `app/page.tsx` with Visual Directory ✅ DONE

**Current**: Just redirects to `/foundation/colors`
**New**: Visual card grid with two sections — Prototypes + Components

**Key design decisions**:
- Server component (can use `fs` via get-prototypes/get-components)
- Card grid, NOT sidebar list
- Two sections: Prototypes (grouped by category) + Components (grouped by category)
- Each card: name, category badge, status badge, description, click to navigate
- Carousell design tokens throughout (no hardcoded colors)
- Clean, minimal — no heavy frameworks

**Rough structure**:
```tsx
// app/page.tsx (SERVER COMPONENT - no "use client")
import { getPrototypes } from "@/lib/get-prototypes"
import { getComponents } from "@/lib/get-components"
import Link from "next/link"

export default function DirectoryPage() {
  const prototypes = getPrototypes()
  const components = getComponents()

  // Group prototypes by category
  // Render two card grid sections
}
```

**Card design** (use Carousell tokens):
- Container: `bg-background-base border border-stroke-boundary rounded-xl p-4`
- Name: `text-large-callout text-content-primary`
- Description: `text-small-reg text-content-secondary`
- Category badge: `bg-background-display text-content-secondary text-tiny-reg rounded-full px-2 py-0.5`
- Status badge colors:
  - ready → `bg-background-positive-subtle text-content-positive`
  - wip → `bg-background-priority text-content-on-dark`
  - draft → `bg-background-display text-content-subdued`
- Hover: `hover:bg-background-display transition-colors`

---

### Task 4: Make Sidebar PROTOTYPE Section Auto-Discover ✅ DONE

**Problem**: Sidebar's PROTOTYPE section is hard-coded. New prototypes don't appear.

**Files to modify**:

#### 4a. `components/design-system/sidebar.tsx`
- Rename export from `Sidebar` to `SidebarClient`
- Add prop: `prototypes: PrototypeEntry[]`
- Replace hard-coded PROTOTYPE items with dynamic items from prop
- Keep all other sections (FOUNDATION, COMPONENTS, INPUTS, CHAT, NAVIGATION) hard-coded

Group by category if prototypes have categories. Otherwise flat list.

#### 4b. Create `components/design-system/sidebar-server.tsx` (NEW)
```tsx
// Server component — no "use client"
import { getPrototypes } from "@/lib/get-prototypes"
import { SidebarClient } from "./sidebar"

export function SidebarServer() {
  const prototypes = getPrototypes()
  return <SidebarClient prototypes={prototypes} />
}
```

#### 4c. Modify `components/design-system/layout.tsx`
- Add `sidebar?: React.ReactNode` prop
- Replace `<Sidebar />` with `{sidebar ?? <Sidebar />}` (keep backward compat)
- This allows server component parent to inject the server-rendered sidebar

#### 4d. Modify `app/layout.tsx`
```tsx
import { SidebarServer } from "@/components/design-system/sidebar-server"

// Pass as prop to layout:
<DesignSystemLayout sidebar={<SidebarServer />}>
  {children}
</DesignSystemLayout>
```

---

### Task 5: Add `meta.json` to Existing Prototypes ✅ DONE

These need custom names since auto-formatting won't look right:

| Folder | meta.json content |
|--------|------------------|
| `listing-om/` | `{ "name": "LDP (OM)", "category": "listing" }` |
| `listing-bp/` | `{ "name": "LDP (BP)", "category": "listing" }` |
| `listing/` | `{ "name": "Listing Detail", "category": "listing" }` |
| `search-aircon/` | `{ "name": "Search (Aircon)", "category": "search" }` |
| `explore-method2/` | `{ "name": "Explore (Method 2)", "category": "feed" }` |
| `explore-method3/` | `{ "name": "Explore (Method 3)", "category": "feed" }` |
| `explore/` | `{ "name": "Explore", "category": "feed" }` |
| `chat/` | `{ "name": "Chat", "category": "chat" }` |
| `inbox/` | `{ "name": "Inbox", "category": "chat" }` |
| `profile/` | `{ "name": "Profile", "category": "profile" }` |
| `me/` | `{ "name": "Me Page", "category": "profile" }` |
| `search/` | `{ "name": "Search", "category": "search" }` |
| `updates/` | `{ "name": "Updates", "category": "feed" }` |
| `gamification-streaks/` | `{ "name": "Gamification Streaks", "category": "engagement", "href": "/gamification-streaks" }` |

**Note on gamification-streaks**: The route is at `/gamification-streaks` (NOT `/prototype/gamification-streaks`) — it's a top-level route. The href in meta.json should override the auto-generated one.

---

### Task 6: Verify End-to-End ✅ DONE

1. Visit `/` → see directory page with Prototypes + Components sections
2. Count prototype cards matches `ls app/prototype/ | grep -v _` output
3. All cards link to correct routes
4. Create new folder `app/prototype/test-new/page.tsx` with minimal content → refresh → card appears
5. `next build` passes

---

---

## Optional Future Tasks (Nice-to-Have)

These were planned but not executed — lower priority, safe to skip:

- [ ] **Simplify Button component** — Currently has 12 props with nested switch statements. Could split into `PrimaryButton`, `TextButton`, `IconButton` etc. Not urgent — it works fine, just complex.
- [ ] **Add spacing/fontWeight/borderRadius tokens** to `tailwind.config.ts` — Currently relies on raw Tailwind values. Adds consistency but not blocking anything.
- [ ] **Update existing prototype pages to use `<PrototypeLayout>`** — The 6 existing prototypes still use manual layout assembly. They work fine; PrototypeLayout is available for NEW prototypes. Updating old ones is cosmetic.
- [ ] **Update existing prototype pages to import from `lib/mock-data`** — Same as above. Old pages have inline data. New prototypes should use centralized data.
- [ ] **Reorganize `components/design-system/` into subdirectories** — Would group into `navigation/`, `feedback/`, `overlays/` etc. Disruptive to imports, low priority.

---

## Key Files Reference

| File | Purpose |
|---|---|
| `components/design-system/sidebar.tsx` | Main sidebar (hard-coded nav) — needs Task 4a |
| `components/design-system/layout.tsx` | Layout wrapper — needs Task 4c |
| `app/layout.tsx` | Root layout — needs Task 4d |
| `app/page.tsx` | Currently redirects — replace with Task 3 |
| `lib/mock-data.ts` | Centralized mock data ✅ done |
| `components/design-system/prototype-layout.tsx` | Mobile wrapper ✅ done |
| `components/design-system/cards/` | Refactored ListingCard ✅ done |
| `AI_INSTRUCTIONS.md` | AI conventions for creating prototypes |
| `tailwind.config.ts` | Design tokens |

## Important Notes

- **`gamification-streaks` route** is at `/gamification-streaks` NOT `/prototype/gamification-streaks` — special case handled in `layout.tsx` which hides the sidebar for this route
- **`listing-om`, `listing-bp`, `listing/`** have dynamic routes (`[id]`) — their hrefs need the `/1` suffix
- **Keep backward compat**: `listing-card.tsx` re-exports from `cards/` — do not break this
- **Build command**: `/Users/thanhhapham/.bun/bin/bun next build` run from the App library folder
- **Sidebar is currently client component** — the server/client split pattern is needed (Task 4)

## Execution Order

Do tasks in this order to minimize breakage:
1. Task 1 (get-prototypes.ts) — no UI impact
2. Task 2 (get-components.ts) — no UI impact
3. Task 5 (meta.json files) — no UI impact, tiny files
4. Task 3 (directory page) — replaces redirect, safe
5. Task 4 (sidebar auto-discover) — most complex, do last
6. Task 6 (verify)
