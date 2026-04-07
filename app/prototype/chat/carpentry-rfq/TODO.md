# Carpentry Chatbot RFQ Prototype -- Implementation Tracker

> **For AI agents**: Read this file before starting work. Check off tasks as you complete them. The plan file at `/.claude/plans/partitioned-dancing-cocke.md` has the full design spec.

## Status Legend
- [ ] Not started
- [x] Done

---

## Phase 1: Foundation ✅
- [x] Create `meta.json` with name, category, description
- [x] Create `page.tsx` with PrototypeLayout wrapper, state management (useState), and activeOption toggle
- [x] Create `components/conversation-engine.ts` -- question definitions (12 questions, 5 sections), TypeScript types (`QuestionId`, `SectionId`, `QuestionDef`, `Answer`, `ChatMessage`), keyword matching system, `processUserInput()` function, `calculateEstimatedPrice()` mock
- [x] Create `components/floating-toggle.tsx` -- vertical pill on right edge, switches Option 1/2/3, resets state on switch
- [x] Create `components/typing-indicator.tsx` -- 3-dot bounce animation
- [x] Create `components/bot-avatar.tsx` -- sparkle icon for bot messages
- [x] Wire up basic chat flow: greeting message, user sends text, keyword match returns bot response, messages render with custom bubbles

## Phase 2: Inline Widgets ✅
- [x] Create `components/inline-widgets/option-chips.tsx` -- chip buttons for single/multi select, includes "Type your own" and "I don't know" options
- [x] Create `components/inline-widgets/photo-upload-trigger.tsx` -- dashed camera card, fake upload with loading state
- [x] Create `components/inline-widgets/text-input-widget.tsx` -- inline freeform input for "type your own"
- [x] Create `components/inline-widgets/image-option-grid.tsx` -- 2-col grid with images (for movements question, vibe question)
- [x] Create `components/inline-widgets/info-expandable.tsx` -- "More info" expandable card within widget (for dimensions, wall strength)
- [x] Create `components/inline-widgets/step-indicator.tsx` -- dot stepper "Section X of 5" with tappable dots
- [x] Create `components/inline-widgets/summary-card.tsx` -- completed form card with all answers + estimated price + submit button

## Phase 3: Option 2 (One Question at a Time) ✅
- [x] Create `components/option2/option2-renderer.tsx` -- renders chat messages with inline widgets, one question at a time
- [x] Integrate step indicator below header
- [x] Handle question progression: answer -> bot acknowledges -> next question with widget
- [x] Handle section transitions with bot messages ("Nice! Now let me understand the space...")
- [x] Show summary card when all questions answered
- [x] Bottom sheet integration: material selection, photo upload triggers
- [x] Auto-scroll to newest message
- [ ] Test full flow end-to-end (needs visual testing with dev server)

## Phase 4: Option 1 (Sticky Canvas Form) ✅
- [x] Create `components/option1/sticky-canvas-bar.tsx` -- sticky bar with "Your carpentry request" + "Review" button + green progress bar
- [x] Create `components/option1/canvas-overlay.tsx` -- BottomSheet(full) showing all collected data by section, completion status, estimated price when complete
- [x] Create `components/option1/option1-renderer.tsx` -- chat flow without step indicator; on completion shows "Open canvas" card
- [x] Wire up progress bar to update as answers come in (transition animation)
- [x] Wire up "Review" button to open canvas overlay
- [x] Canvas shows submit button when form is complete

## Phase 5: Option 3 (Aggregated Accordion Form) ✅
- [x] Create `components/option3/accordion-form.tsx` -- all 5 sections as accordion items, one expanded at a time, each with inline widgets
- [x] Create `components/option3/option3-renderer.tsx` -- bot greeting + accordion card
- [x] Section headers show completion indicator (checkmark or answered count)
- [x] Collapsed completed sections show answer summary text
- [x] ChatInput active: keyword match -> bot replies + updates accordion field with highlight
- [x] When all sections complete: form border turns green, shows price + submit CTA
- [x] Auto-expand next incomplete section after completing one

## Phase 6: Polish ✅ (built-in during phases)
- [x] Bottom sheet auto-open on keywords ("material/wood" -> material picker; "photo/picture" -> upload sheet)
- [x] Typing indicator 600-1000ms before each bot message
- [x] Progress bar smooth transition (500ms) for Option 1
- [x] Design tokens used throughout (no hardcoded colors)
- [x] Touch targets >= 44px on chips and interactive elements
- [x] Build passes with zero errors (13.1 kB bundle)

## Key Files Reference

| File | Purpose |
|------|---------|
| `components/design-system/prototype-layout.tsx` | Page wrapper (475px mobile frame) |
| `components/design-system/chat/chat-cell.tsx` | Message bubbles |
| `components/design-system/chat/chat-input.tsx` | User text input |
| `components/design-system/bottom-sheet.tsx` | Overlay sheets |
| `components/design-system/button.tsx` | All button variants |
| `components/design-system/input/chip.tsx` | Selection chips |
| `components/design-system/top-nav/` | Header navigation |

## Design Spec Summary

- **12 questions** across 5 sections: Project Type, Vision, Reality, Functional, Logistics
- **Keyword matching** fakes AI -- maps user input keywords to responses and actions
- **3 options** switchable via floating toggle on right edge
- **Bottom sheets** for focused tasks (material picker, photo upload, canvas review)
- **Estimated price** calculated from answers (base price by item type, multipliers for vibe/urgency/features)
- **Bot tone**: Warm, concise, encouraging. 1-2 sentences. Acknowledges answers positively.
- Option 3 has ChatInput: users can type, bot updates the accordion form accordingly
