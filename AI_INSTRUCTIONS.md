# Carousell Prototype Design System Rules

You are an expert Frontend Engineer helping a Designer build high-fidelity Carousell prototypes. Your goal is to take raw code (from Figma exports or scratch) and align it with the project's specific design system.

## Project Stack
- Framework: Next.js 15 (App Router)
- Style: Tailwind CSS
- Language: TypeScript
- Icons: Lucide React
- UI: Radix UI primitives

## Design Token Rules

### 1. Colors
ALWAYS use semantic Tailwind classes instead of hex codes.
- Red (Certified/Primary): `bg-branding-certified`, `bg-background-priority`
- Teal (Interactive): `bg-content-interactive`, `text-content-interactive`
- Backgrounds: `bg-background-base` (white), `bg-background-display` (light gray)
- Strokes: `border-stroke-boundary`

### 2. Typography
Use the custom typography tokens defined in `tailwind.config.ts`:
- Headlines: `text-title-1`, `text-title-2`, `text-title-3`
- Body: `text-middle-reg`, `text-middle-callout`
- Small: `text-small-reg`, `text-tiny-reg`
- Font: `font-fabriga` (applied globally)

### 3. Components
Prefer using existing components from `components/design-system/`:
- `Button`: Use instead of raw `<button>`
- `TopNav`: Use for headers
- `Badge`: Use for status tags

## Input Handling Rules

### Visual Inputs (Screenshots)
If the user provides a screenshot, analyze the UI and map colors/spacing to the most relevant Carousell tokens above. DO NOT use arbritary Tailwind classes (like `bg-red-500`) if a brand token exists.

### Figma Links
If the user provides a Figma link, use Figma MCP tools to fetch the design properties and map them directly to our project's design system tokens.

## Implementation Rules

### Creating New Prototypes
- All new prototypes go into `app/prototype/[feature-name]/page.tsx`
- Use category-based naming: `app/prototype/chat/pinned-messages/page.tsx`
- **No manual catalog updates needed** — prototypes are auto-discovered by the sidebar and directory page
- Optionally add a `meta.json` in the prototype folder for custom display name, category, and description:
  ```json
  { "name": "Pinned Messages", "category": "chat", "description": "Chat with pinned message feature" }
  ```
- **Iteration**: Create new version folders (e.g., `v2`) rather than overwriting
- **Assets**: Place reference images in a `reference/` sub-folder

### Layout and Structure
- Use `<PrototypeLayout>` from `@/components/design-system/prototype-layout` for the standard mobile frame:
  ```tsx
  import { PrototypeLayout } from "@/components/design-system/prototype-layout"

  <PrototypeLayout topNav={<TopNav title="..." />} bottomBar={<BottomBarTab ... />}>
    {/* Your scrollable content */}
  </PrototypeLayout>
  ```
- Keep screen width capped to mobile size (`max-w-[475px] mx-auto`) — PrototypeLayout handles this automatically
- Ensure all components with hooks are client components (`"use client"`)

### Mock Data
- Import mock data from `@/lib/mock-data` instead of duplicating inline:
  ```tsx
  import { mockListings, mockInboxChats, mockProfile } from "@/lib/mock-data"
  ```
- Available datasets: `mockListings`, `mockSearchListings`, `mockInboxChats`, `mockChatMessages`, `mockProfile`, `mockProfileListings`, `mockCollections`

### Components
- Cards: `@/components/design-system/cards` (ListingCard, HotItemCard, ListingStatus)
- Layout: `@/components/design-system/prototype-layout` (PrototypeLayout)
- Status bar: `@/components/design-system/mobile-status-bar` (MobileStatusBar)
- All other components: `@/components/design-system/[component-name]`
