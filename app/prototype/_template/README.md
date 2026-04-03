# Prototype Template

Copy this folder to create a new prototype:

```bash
mkdir -p app/prototype/[category]
cp -r app/prototype/_template app/prototype/[category]/[your-feature-name]
```

Or just create `app/prototype/[name]/page.tsx` from scratch — the template is optional.

## Optionally add `meta.json` for the directory:

```json
{
  "name": "Your Feature Name",
  "category": "chat",
  "description": "What this prototype shows"
}
```

## Key imports:

```tsx
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { TopNav } from "@/components/design-system/top-nav"
import { BottomBarTab } from "@/components/design-system/bottom-bar/tab"
import { ListingCard } from "@/components/design-system/cards"
import { mockListings } from "@/lib/mock-data"
```

See `AI_INSTRUCTIONS.md` for full conventions.
