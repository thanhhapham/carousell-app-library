# Carousell Prototype Library: Designer Guide

This project is a high-fidelity prototyping foundation for Carousell. It uses Next.js, TypeScript, and Tailwind CSS, pre-loaded with Carousell's design tokens and core components.

## Recommended Workflow

### 1. Design in Figma
Design your feature in Figma using the Carousell Design System (CDS). If you're using **Figma Make (AI)**, ensure your design uses standard CDS layouts.

### 2. Export / Generate Code
Use Figma's "Export as React/Tailwind" or similar AI features to get the raw code for your screen or component.

### 3. Integrate with this Project
1.  **Create a folder**: Add your prototype under `app/prototype/[feature-name]/`.
2.  **Create page.tsx**: Paste the exported code into a new `page.tsx` file.
3.  **Refactor**: Use an AI assistant (like Claude or Cursor) with the instructions in `AI_INSTRUCTIONS.md` to refactor the code for consistency.

## Organized Folder Structure
To keep the project clean, especially with multiple designers and projects, always use the following hierarchical structure:

```text
app/prototype/[designer-name]/[project-name]/v[number]/
├── page.tsx          # The prototype code
└── reference/        # Original designer assets
    └── screenshot.png # Your reference screenshot
```

For example: `app/prototype/mario/listing-redesign/v1/page.tsx`

### Versioning (WIP Screens)
When you want to iterate on a design, **do not overwrite the old one**. Instead, create a new version folder (e.g., `v2`, `v3`). This allows you to easily compare different WIP states and keep a history of your work.

## Design Token Quick Reference

| Category | Tailwind Classes | Usage |
| :--- | :--- | :--- |
| **Colors** | `bg-branding-certified`, `bg-content-interactive`, `bg-background-base` | Use semantic names for consistency. |
| **Typography** | `text-title-1`, `text-large-callout`, `text-middle-reg` | Matches Carousell's font sizes and weights. |
| **Fonts** | `font-fabriga` | The primary brand font (already globally applied). |

## Core Components
Before building from scratch, check `components/design-system/`:
*   `Button`: Standard Carousell buttons.
*   `TopNav`: Mobile header with back button and actions.
*   `Badge`: For status/attribute tags.

## Creating & Sharing Interactive Prototypes

### Updated Folder Structure (Category-Based)

Starting with this version, prototypes are organized by **feature category** rather than by designer:

```text
app/prototype/
├── chat/              # Chat & messaging prototypes
│   ├── chat-inbox-v1/
│   ├── chat-detail-v2/
│   └── my-chat-variant/
├── listing/           # Product listing prototypes
├── profile/           # User profile prototypes
├── search/            # Search prototypes
├── explore/           # Feed/explore prototypes
├── gamification/      # Engagement & gamification
├── inbox/             # Inbox & notifications
└── _template/         # ⭐ Start here for new prototypes
```

### Creating a New Prototype

1. **Copy the template**:
   ```bash
   cp -r app/prototype/_template app/prototype/[category]/[your-feature-name]
   ```

2. **Edit `page.tsx`** in your new folder with your design

3. **Test locally**: `bun dev` → `http://localhost:3000/app/prototype/[category]/[your-feature-name]`

4. **Update the catalog**: Add your prototype to `app/prototype/PROTOTYPES.md`

### Sharing & Reusing Prototypes

**Discover existing work:** Check `app/prototype/PROTOTYPES.md` to see all available prototypes

**Reuse patterns:**
- Copy an entire prototype folder to build on it
- Extract specific components from prototypes
- Share design decisions and implementations with your team

**Creating a variant:**
- Copy an existing prototype
- Modify it for your needs
- Create a new entry in PROTOTYPES.md (e.g., `your-feature-variant`)
- Don't overwrite originals - create new versions

### Important Guidelines

✅ **Always:**
- Use design tokens (colors from `tailwind.config.ts`)
- Use components from `/components/design-system/`
- Add your prototype to `PROTOTYPES.md` for team discoverability
- Keep prototypes mobile-first (375px width)

❌ **Never:**
- Hardcode colors or sizes
- Modify `/components/design-system/` - keep the core library clean
- Overwrite existing prototypes (create new versions instead)
- Leave template code in your prototype

### Getting Started Guide

For detailed instructions, examples, and troubleshooting, see:
**`app/prototype/GETTING_STARTED.md`**