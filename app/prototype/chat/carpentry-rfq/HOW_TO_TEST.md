# How to Test the Carpentry Chatbot Prototype

## Quick Start

1. Run `bun dev` from the project root
2. Open `http://localhost:3000/prototype/chat/carpentry-rfq`
3. Use the floating toggle (right edge) to switch between Option 1, 2, and 3

---

## Important: This is Keyword-Based, Not a Real AI

This prototype uses **keyword matching** to simulate AI responses. It doesn't understand natural language -- it scans your message for specific keywords and responds accordingly. Here's how to get the best results:

---

## Keyword Cheat Sheet

### Project Type
| Type what... | Bot understands as... |
|---|---|
| `build`, `new`, `install` | Build something new |
| `fix`, `repair`, `broken`, `damage` | Fix / repair something |

### What You're Building
| Type what... | Bot understands as... |
|---|---|
| `kitchen`, `cabinet` | Kitchen cabinet |
| `wardrobe`, `closet` | Built-in wardrobe |
| `shelf`, `shelves`, `bookshelf` | Shelves / display unit |
| `table`, `desk` | Table / desk |
| `bed`, `bedframe`, `platform` | Bed frame |
| `tv console` | TV console |
| `shoe cabinet` | Shoe cabinet |

### Vibe / Style
| Type what... | Bot understands as... |
|---|---|
| `cheap`, `affordable`, `budget` | Budget-friendly |
| `luxury`, `premium`, `high-end` | Luxury feels |
| `functional`, `clean`, `simple` | Clean & functional |

### Trigger Bottom Sheet Overlays
| Type what... | What happens... |
|---|---|
| `material`, `wood`, `laminate`, `plywood`, `veneer`, `oak`, `walnut` | Opens material selection bottom sheet |
| `photo`, `picture`, `image`, `show` | Opens photo upload bottom sheet |

### Skip / Don't Know
| Type what... | What happens... |
|---|---|
| `don't know`, `not sure`, `skip`, `idk`, `no idea` | Skips current question, moves to next |

---

## Testing Each Option

### Option 1: Sticky Canvas Form
**What to look for:**
- Sticky bar at top shows "Your carpentry request" with a green progress bar
- Progress bar fills as you answer more questions
- Tap "Review" to open the canvas overlay showing all collected info
- Answer questions via inline chip buttons or by typing keywords
- When all required questions are answered, canvas shows estimated price + submit button

**Test flow:**
1. Tap "Build something new" chip (or type "build")
2. Select "Kitchen cabinet" from chips
3. Watch the progress bar grow
4. Tap "Review" to see collected data
5. Continue answering until complete
6. Open canvas to see estimated price

### Option 2: One Question at a Time
**What to look for:**
- Dot stepper below header shows "Section X of 5"
- Bot asks one question, shows inline widget with options
- You can tap a chip OR type a keyword to answer
- "I don't know" option skips to next question
- Dots are tappable to jump between sections
- After all questions: summary card appears with price + submit

**Test flow:**
1. Answer each question using chips or typing
2. Try typing "skip" to skip optional questions
3. Try typing "material" to trigger the bottom sheet
4. Tap on a completed dot to jump back to a previous section
5. Complete all questions to see the summary card

### Option 3: Aggregated Accordion Form
**What to look for:**
- Bot shows greeting + a large accordion form with all 5 sections
- Only one section is expanded at a time
- Each section has inline widgets (chips, inputs, photo upload)
- You can also type in the chat input -- bot will update the form
- Completed sections collapse and show a summary + checkmark
- When all done: form gets green border with price + submit

**Test flow:**
1. Fill out the expanded section using chips
2. Watch it auto-advance to the next section
3. Try typing "I want to build a wardrobe" in chat input
4. See the bot reply and the form update
5. Type "luxury" to set the vibe via chat
6. Complete all sections to see the completed state

---

## Edge Cases to Try

- **Type gibberish**: Bot should show a fallback "I didn't catch that" message
- **Same answer twice**: Should replace, not duplicate
- **Switch options mid-conversation**: Floating toggle resets everything
- **Type "material" or "wood"**: Should auto-open the material selection bottom sheet
- **Long text input**: Should truncate gracefully in summary views

---

## Known Limitations

- **No real AI**: Only responds to specific keywords listed above
- **No persistent data**: Refreshing the page resets everything
- **Photos are fake**: Upload triggers show a placeholder, not real uploads
- **Price is approximate**: Estimated price is a rough mock calculation based on item type + options selected
