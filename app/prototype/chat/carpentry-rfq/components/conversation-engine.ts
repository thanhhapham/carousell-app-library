// ─── Types ───────────────────────────────────────────────────────────────────

export type QuestionId =
  | "project_type"
  | "what_building"
  | "inspo_photo"
  | "vibe"
  | "current_photo"
  | "dismantling"
  | "dimensions"
  | "obstacles"
  | "movements"
  | "wall_strength"
  | "timeline"
  | "budget"

export type SectionId =
  | "project_type"
  | "vision"
  | "reality"
  | "functional"
  | "logistics"

export interface OptionDef {
  value: string
  label: string
  image?: string
  description?: string
}

export interface QuestionDef {
  id: QuestionId
  section: SectionId
  label: string
  prompt: string
  type: "single_select" | "multi_select" | "photo" | "text"
  options?: OptionDef[]
  optional?: boolean
  showImages?: boolean
  hasMoreInfo?: boolean
  moreInfoText?: string
}

export interface Answer {
  questionId: QuestionId
  value: string | string[]
  displayValue: string
}

export interface ChatMessage {
  id: string
  sender: "bot" | "user" | "system"
  text?: string
  widgetQuestionId?: QuestionId
  widgetType?: "accordion_form" | "summary_card"
  timestamp: string
}

export const SECTIONS: { id: SectionId; label: string; icon: string }[] = [
  { id: "project_type", label: "Project Type", icon: "hammer" },
  { id: "vision", label: "The Vision", icon: "sparkles" },
  { id: "reality", label: "The Reality", icon: "camera" },
  { id: "functional", label: "Functional Details", icon: "settings" },
  { id: "logistics", label: "Logistics & Timeline", icon: "calendar" },
]

// ─── Questions ───────────────────────────────────────────────────────────────

export const QUESTIONS: QuestionDef[] = [
  {
    id: "project_type",
    section: "project_type",
    label: "Project type",
    prompt: "First things first — are you looking to build something new, or fix something existing?",
    type: "single_select",
    options: [
      { value: "build_new", label: "Build something new" },
      { value: "fix", label: "Fix / repair something" },
    ],
  },
  {
    id: "what_building",
    section: "vision",
    label: "What to build",
    prompt: "What are you looking to build? Pick one or tell me in your own words.",
    type: "single_select",
    options: [
      { value: "kitchen_cabinet", label: "Kitchen cabinet" },
      { value: "wardrobe", label: "Built-in wardrobe" },
      { value: "shelves", label: "Shelves / display unit" },
      { value: "table", label: "Table / desk" },
      { value: "bed_frame", label: "Bed frame / platform" },
      { value: "tv_console", label: "TV console" },
      { value: "shoe_cabinet", label: "Shoe cabinet" },
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "inspo_photo",
    section: "vision",
    label: "Inspiration photo",
    prompt: "Got any inspiration photos? Pinterest, Instagram — anything helps carpenters understand the look you're going for.",
    type: "photo",
    optional: true,
  },
  {
    id: "vibe",
    section: "vision",
    label: "Style vibe",
    prompt: "What's the vibe you're going for?",
    type: "single_select",
    optional: true,
    options: [
      { value: "budget_friendly", label: "Budget-friendly" },
      { value: "functional", label: "Clean & functional" },
      { value: "luxury", label: "Luxury feels" },
    ],
  },
  {
    id: "current_photo",
    section: "reality",
    label: "Current space photo",
    prompt: "Can you share a photo of the current space? This helps carpenters plan the work.",
    type: "photo",
  },
  {
    id: "dismantling",
    section: "reality",
    label: "Dismantling needed",
    prompt: "Is there anything that needs to be removed first? Old cabinets, shelves, etc.",
    type: "single_select",
    options: [
      { value: "yes", label: "Yes, old units need to go" },
      { value: "no", label: "No, it's a clean space" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    id: "dimensions",
    section: "reality",
    label: "Rough dimensions",
    prompt: "Do you have rough dimensions? Even approximate is helpful — like '2 meters wide, 1 meter tall'.",
    type: "text",
    hasMoreInfo: true,
    moreInfoText:
      "Measure the width, height, and depth of the space where the carpentry will go. Use a measuring tape or estimate by comparing to known objects (a door is about 2m tall).",
  },
  {
    id: "obstacles",
    section: "functional",
    label: "Obstacles & access",
    prompt: "Any obstacles the carpenter should know about?",
    type: "multi_select",
    options: [
      { value: "piping", label: "Piping behind wall" },
      { value: "electrical", label: "Electrical sockets/DB box" },
      { value: "uneven_wall", label: "Uneven walls" },
      { value: "narrow_access", label: "Narrow access / corridor" },
      { value: "none", label: "None that I know of" },
    ],
  },
  {
    id: "movements",
    section: "functional",
    label: "Door/drawer type",
    prompt: "How should doors and drawers move?",
    type: "single_select",
    showImages: true,
    options: [
      {
        value: "soft_close",
        label: "Soft closing",
        description: "Doors and drawers close gently on their own",
      },
      {
        value: "push_open",
        label: "Push to open",
        description: "No handles — just push the door to open it",
      },
      {
        value: "standard",
        label: "Standard hinges",
        description: "Regular handles and hinges",
      },
      { value: "no_pref", label: "No preference" },
    ],
  },
  {
    id: "wall_strength",
    section: "functional",
    label: "Wall type",
    prompt: "What type of wall will this be mounted on?",
    type: "single_select",
    hasMoreInfo: true,
    moreInfoText:
      "Knock on the wall — if it sounds hollow, it's likely drywall/partition. If it sounds solid, it's concrete. This affects how the carpenter mounts heavy items.",
    options: [
      {
        value: "concrete",
        label: "Concrete / brick wall",
        description: "Solid — can hold heavy loads",
      },
      {
        value: "partition",
        label: "Partition / drywall",
        description: "Hollow — needs special mounting",
      },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    id: "timeline",
    section: "logistics",
    label: "Timeline",
    prompt: "When do you need this done by?",
    type: "single_select",
    options: [
      { value: "asap", label: "ASAP" },
      { value: "1_month", label: "Within 1 month" },
      { value: "2_3_months", label: "2–3 months" },
      { value: "flexible", label: "Flexible / no rush" },
    ],
  },
  {
    id: "budget",
    section: "logistics",
    label: "Budget range",
    prompt: "Last one — what's your budget range?",
    type: "single_select",
    options: [
      { value: "under_500", label: "Under S$500" },
      { value: "500_1500", label: "S$500 – S$1,500" },
      { value: "1500_3000", label: "S$1,500 – S$3,000" },
      { value: "3000_5000", label: "S$3,000 – S$5,000" },
      { value: "over_5000", label: "S$5,000+" },
      { value: "need_quote", label: "I need a quote first" },
    ],
  },
]

// ─── Keyword Matching ────────────────────────────────────────────────────────

interface KeywordRule {
  keywords: string[]
  response: string
  action?: "set_answer" | "open_bottom_sheet" | "advance_question"
  bottomSheetType?: "material" | "photo"
  answerId?: QuestionId
  answerValue?: string
}

const KEYWORD_RULES: KeywordRule[] = [
  // Project type
  {
    keywords: ["build", "new", "install", "create", "make"],
    response: "Great, a new build! Let's figure out what you're creating.",
    action: "set_answer",
    answerId: "project_type",
    answerValue: "build_new",
  },
  {
    keywords: ["fix", "repair", "broken", "damage", "replace"],
    response: "Got it, a repair job. Let me understand what needs fixing.",
    action: "set_answer",
    answerId: "project_type",
    answerValue: "fix",
  },
  // What building
  {
    keywords: ["kitchen", "cabinet"],
    response: "Kitchen cabinets — nice! Let's nail down the details.",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "kitchen_cabinet",
  },
  {
    keywords: ["wardrobe", "closet"],
    response: "A built-in wardrobe, love it!",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "wardrobe",
  },
  {
    keywords: ["shelf", "shelves", "bookshelf", "display"],
    response: "Shelving — great choice!",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "shelves",
  },
  {
    keywords: ["table", "desk"],
    response: "A custom table — excellent taste!",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "table",
  },
  {
    keywords: ["bed", "bedframe", "platform"],
    response: "A custom bed frame! Great choice.",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "bed_frame",
  },
  {
    keywords: ["tv", "console", "entertainment"],
    response: "TV console — got it!",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "tv_console",
  },
  {
    keywords: ["shoe"],
    response: "Shoe cabinet — practical and stylish!",
    action: "set_answer",
    answerId: "what_building",
    answerValue: "shoe_cabinet",
  },
  // Vibe
  {
    keywords: ["cheap", "affordable", "budget", "save", "low cost"],
    response: "Understood — budget-friendly it is!",
    action: "set_answer",
    answerId: "vibe",
    answerValue: "budget_friendly",
  },
  {
    keywords: ["luxury", "premium", "high-end", "high end", "elegant"],
    response: "Going for the premium feel — noted!",
    action: "set_answer",
    answerId: "vibe",
    answerValue: "luxury",
  },
  {
    keywords: ["functional", "clean", "simple", "minimal", "minimalist"],
    response: "Clean and functional — great approach!",
    action: "set_answer",
    answerId: "vibe",
    answerValue: "functional",
  },
  // Dismantling
  {
    keywords: ["remove", "dismantle", "tear down", "rip out", "old cabinet"],
    response: "Noted — the old units will need to go. I've factored in dismantling.",
    action: "set_answer",
    answerId: "dismantling",
    answerValue: "yes",
  },
  // Movements
  {
    keywords: ["soft close", "soft closing", "soft-close"],
    response: "Soft-close — the satisfying gentle close. Good choice!",
    action: "set_answer",
    answerId: "movements",
    answerValue: "soft_close",
  },
  {
    keywords: ["push to open", "push-to-open", "handleless", "no handle"],
    response: "Push-to-open for that clean handleless look!",
    action: "set_answer",
    answerId: "movements",
    answerValue: "push_open",
  },
  // Wall type
  {
    keywords: ["concrete", "brick", "solid wall"],
    response: "Solid wall — that's great for heavy mounting.",
    action: "set_answer",
    answerId: "wall_strength",
    answerValue: "concrete",
  },
  {
    keywords: ["drywall", "partition", "hollow"],
    response: "Partition wall — the carpenter will use special anchors.",
    action: "set_answer",
    answerId: "wall_strength",
    answerValue: "partition",
  },
  // Timeline
  {
    keywords: ["asap", "urgent", "rush", "quickly", "soon"],
    response: "Got it — ASAP! Note that rush jobs may have a surcharge.",
    action: "set_answer",
    answerId: "timeline",
    answerValue: "asap",
  },
  {
    keywords: ["no rush", "flexible", "take time", "whenever"],
    response: "No rush — flexible timeline noted!",
    action: "set_answer",
    answerId: "timeline",
    answerValue: "flexible",
  },
  // Bottom sheet triggers
  {
    keywords: ["material", "wood", "laminate", "plywood", "veneer", "oak", "walnut", "mdf"],
    response: "Let me show you some material options...",
    action: "open_bottom_sheet",
    bottomSheetType: "material",
  },
  {
    keywords: ["photo", "picture", "image", "upload", "camera"],
    response: "You can share a photo to help the carpenter understand better.",
    action: "open_bottom_sheet",
    bottomSheetType: "photo",
  },
  // Skip / don't know
  {
    keywords: ["don't know", "not sure", "skip", "idk", "no idea", "dunno", "pass"],
    response: "No worries, we can come back to this. Moving on!",
    action: "advance_question",
  },
]

export const SECTION_TRANSITIONS: Record<string, string> = {
  project_type_to_vision: "Nice! Now let's talk about your dream project.",
  vision_to_reality: "I can already picture it! Now let me understand the actual space.",
  reality_to_functional: "Thanks for the details. A few more technical bits...",
  functional_to_logistics: "Almost there! Just need to know about timing and budget.",
}

const BOT_GREETING =
  "Hey! I'm your carpentry assistant. I'll help you put together a request so carpenters can give you an accurate quote. Let's get started!"

const COMPLETION_MESSAGE =
  "That's everything! I've put together your carpentry request with an estimated price range."

// ─── Engine Functions ────────────────────────────────────────────────────────

let msgCounter = 0

export function createMessage(
  sender: "bot" | "user" | "system",
  text?: string,
  widgetQuestionId?: QuestionId,
  widgetType?: "accordion_form" | "summary_card",
): ChatMessage {
  msgCounter++
  return {
    id: `msg-${msgCounter}-${Date.now()}`,
    sender,
    text,
    widgetQuestionId,
    widgetType,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  }
}

export function getGreetingMessages(): ChatMessage[] {
  return [createMessage("bot", BOT_GREETING)]
}

export function getCompletionMessage(): ChatMessage {
  return createMessage("bot", COMPLETION_MESSAGE)
}

export function getQuestionsForSection(sectionId: SectionId): QuestionDef[] {
  return QUESTIONS.filter((q) => q.section === sectionId)
}

export function getRequiredQuestions(): QuestionDef[] {
  return QUESTIONS.filter((q) => !q.optional)
}

export function getCompletionPercentage(answers: Map<QuestionId, Answer>): number {
  const required = getRequiredQuestions()
  const answered = required.filter((q) => answers.has(q.id)).length
  return Math.round((answered / required.length) * 100)
}

export function isFormComplete(answers: Map<QuestionId, Answer>): boolean {
  return getRequiredQuestions().every((q) => answers.has(q.id))
}

export function findNextUnansweredIndex(
  currentIndex: number,
  answers: Map<QuestionId, Answer>,
): number {
  for (let i = currentIndex + 1; i < QUESTIONS.length; i++) {
    if (!answers.has(QUESTIONS[i].id)) return i
  }
  // If all after current are answered, check from start
  for (let i = 0; i <= currentIndex; i++) {
    if (!answers.has(QUESTIONS[i].id)) return i
  }
  return -1 // All answered
}

export function getSectionTransition(
  prevSection: SectionId,
  nextSection: SectionId,
): string | null {
  const key = `${prevSection}_to_${nextSection}`
  return SECTION_TRANSITIONS[key] || null
}

interface ProcessResult {
  botMessages: ChatMessage[]
  answerToSet?: { questionId: QuestionId; value: string; displayValue: string }
  openBottomSheet?: "material" | "photo"
  advanceQuestion?: boolean
}

export function matchKeywords(input: string): KeywordRule | null {
  const lower = input.toLowerCase().trim()
  let bestMatch: KeywordRule | null = null
  let bestScore = 0
  for (const rule of KEYWORD_RULES) {
    const score = rule.keywords.filter((kw) => lower.includes(kw)).length
    if (score > bestScore) {
      bestScore = score
      bestMatch = rule
    }
  }
  return bestScore > 0 ? bestMatch : null
}

export function processUserInput(
  input: string,
  currentQuestionIndex: number,
): ProcessResult {
  const match = matchKeywords(input)
  const currentQ = QUESTIONS[currentQuestionIndex]

  if (match) {
    const result: ProcessResult = {
      botMessages: [createMessage("bot", match.response)],
    }

    if (match.action === "set_answer" && match.answerId) {
      const matchedOption = QUESTIONS.find((q) => q.id === match.answerId)
        ?.options?.find((o) => o.value === match.answerValue)
      result.answerToSet = {
        questionId: match.answerId,
        value: match.answerValue!,
        displayValue: matchedOption?.label || match.answerValue!,
      }
    }
    if (match.action === "advance_question") {
      result.advanceQuestion = true
    }
    if (match.action === "open_bottom_sheet") {
      result.openBottomSheet = match.bottomSheetType
    }
    return result
  }

  // Check if input looks like a dimension (numbers with units)
  if (currentQ?.id === "dimensions" && /\d/.test(input)) {
    return {
      botMessages: [createMessage("bot", `Got it — "${input}". That helps a lot!`)],
      answerToSet: {
        questionId: "dimensions",
        value: input,
        displayValue: input,
      },
    }
  }

  // Fallback
  return {
    botMessages: [
      createMessage(
        "bot",
        currentQ
          ? `Hmm, I didn't quite catch that. Could you pick one of the options or try rephrasing?`
          : "Thanks! Let me process that...",
      ),
    ],
  }
}

// ─── Price Calculation ───────────────────────────────────────────────────────

const BASE_PRICES: Record<string, [number, number]> = {
  kitchen_cabinet: [2000, 5000],
  wardrobe: [1500, 4000],
  shelves: [400, 1500],
  table: [300, 1200],
  bed_frame: [800, 2500],
  tv_console: [500, 1800],
  shoe_cabinet: [300, 1000],
  other: [500, 3000],
}

export function calculateEstimatedPrice(
  answers: Map<QuestionId, Answer>,
): { low: number; high: number } | null {
  const whatBuilding = answers.get("what_building")?.value
  if (!whatBuilding || typeof whatBuilding !== "string") return null

  let [low, high] = BASE_PRICES[whatBuilding] || [500, 3000]

  const vibe = answers.get("vibe")?.value
  if (vibe === "luxury") {
    low *= 1.5
    high *= 1.8
  }
  if (vibe === "budget_friendly") {
    low *= 0.7
    high *= 0.8
  }

  const dismantling = answers.get("dismantling")?.value
  if (dismantling === "yes") {
    low += 150
    high += 300
  }

  const movements = answers.get("movements")?.value
  if (movements === "soft_close") {
    low += 100
    high += 200
  }
  if (movements === "push_open") {
    low += 150
    high += 300
  }

  const timeline = answers.get("timeline")?.value
  if (timeline === "asap") {
    low *= 1.15
    high *= 1.2
  }

  return { low: Math.round(low), high: Math.round(high) }
}

export function getDisplayValueForAnswer(questionId: QuestionId, value: string | string[]): string {
  const question = QUESTIONS.find((q) => q.id === questionId)
  if (!question) return typeof value === "string" ? value : value.join(", ")

  if (Array.isArray(value)) {
    return value
      .map((v) => question.options?.find((o) => o.value === v)?.label || v)
      .join(", ")
  }

  return question.options?.find((o) => o.value === value)?.label || value
}
