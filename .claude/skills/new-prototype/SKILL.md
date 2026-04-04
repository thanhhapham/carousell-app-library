---
name: new-prototype
description: Scaffold a new prototype in the Carousell App Library. Use this skill whenever a designer says "add a prototype", "create a prototype", "new prototype", "scaffold a screen", "start a new feature", or anything that involves creating a new entry under app/prototype/. Also trigger when someone describes a design they want to build ("I want to prototype X", "let's build a screen for Y"). The skill creates the folder, page.tsx boilerplate, and meta.json automatically — making it the standard way for designers to add prototypes.
---

# New Prototype Scaffolder

You are helping a designer add a new prototype to the Carousell App Library — a Next.js prototyping toolkit with Carousell's design system pre-loaded.

Prototypes live under `app/prototype/[category]/[name]/page.tsx`. The sidebar and directory page auto-discover them — no catalog update needed.

## Step 1: Clarify name and category

If the designer hasn't provided a name, ask: "What's the name of your new prototype?"

Once you have a name, **infer the category** from it:

| Keywords in name | Category |
|---|---|
| chat, message, inbox, conversation | `chat` |
| listing, product, item, buy, sell | `listing` |
| search, filter, browse | `search` |
| explore, feed, home, discover | `explore` |
| profile, account, user, seller | `profile` |
| notification, updates, alert | `updates` |
| gamification, streak, badge, reward | `gamification` |
| me, settings, onboarding | `me` |
| anything else | use the category most related or create a sensible new one |

Tell the designer your inference: "I'll put this under `app/prototype/[category]/[name]/` — does that work, or would you like a different category?"

## Step 2: Check for a similar existing prototype

List files under `app/prototype/` and look for prototypes in the same category or with a similar theme to what the designer described.

If you find one or more relevant matches, ask:
> "I noticed there's already a similar prototype at `app/prototype/[match]/`. Would you like to:
> 1. Start fresh from the minimal template
> 2. Copy `[match]` as a starting point (you'll keep the structure but can change the content)"

If no similar prototype exists, proceed with the minimal template — no need to ask.

## Step 3: Create the files

**Path convention:**
- Sub-feature of an existing category → `app/prototype/[category]/[name]/page.tsx`
  - Example: new explore screen → `app/prototype/explore/my-screen/`
- Standalone with no natural parent → `app/prototype/[name]/page.tsx`
  - Example: a one-off gamification idea → `app/prototype/gamification-streaks/`
- Never nest deeper than 2 levels (category + name)

Use lowercase, hyphenated names (e.g., `chat-pinned-messages`, `listing-photo-upload`).

---

### Option A: Minimal fresh template

Create `app/prototype/[category]/[name]/page.tsx`:

```tsx
"use client"

import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav"

export default function [PascalCaseName]() {
  return (
    <PrototypeLayout
      topNav={<TopNav title="[Human Readable Title]" onBack={() => history.back()} />}
    >
      <div className="p-4">
        {/* Your prototype content here */}
      </div>
    </PrototypeLayout>
  )
}
```

Replace `[PascalCaseName]` with the component name in PascalCase (e.g., `ChatPinnedMessages`) and `[Human Readable Title]` with the display name.

---

### Option B: Copy from existing prototype

Read the source `page.tsx`, then create a copy at the new path. Update:
- The component function name (to PascalCase of the new name)
- The TopNav title
- Remove any hardcoded data or logic that's specific to the original — leave the structure but replace content with `{/* Your content here */}` placeholders where the designer needs to fill in.

---

### Always create `meta.json`

Create `app/prototype/[category]/[name]/meta.json`:

```json
{
  "name": "[Human Readable Name]",
  "category": "[category]",
  "description": "[One sentence describing what this prototype shows]"
}
```

Auto-generate all three fields from the information you have. The description should be a short, informative sentence (e.g., "Chat inbox with pinned message support").

## Step 4: Confirm and point to next steps

After creating the files, tell the designer:

- **Preview URL:** `http://localhost:3000/prototype/[category]/[name]`
- **Where to edit:** `app/prototype/[category]/[name]/page.tsx`
- **If they have a Figma design or screenshot:** "Paste it here and I'll help refactor the code to use Carousell design tokens."
- **If they want to iterate:** "Create a `v2/` subfolder when you want to try a new direction — don't overwrite the original."

## Key conventions (don't break these)

- Always add `"use client"` at the top — prototypes use React state and event handlers
- Use `PrototypeLayout` for the mobile frame wrapper — never raw `<div>` as the root
- Use design tokens, not hardcoded colors: `bg-background-base`, `text-content-primary`, `border-stroke-boundary`, etc.
- Typography tokens: `text-title-1/2/3`, `text-large-callout`, `text-middle-reg`, `text-small-reg`
- Components live in `@/components/design-system/` — check there before building from scratch
- Mock data is in `@/lib/mock-data` — import it rather than hardcoding inline data
