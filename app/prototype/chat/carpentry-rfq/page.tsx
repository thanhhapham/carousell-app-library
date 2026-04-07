"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { ChatInput } from "@/components/design-system/chat/chat-input"
import { BottomSheet } from "@/components/design-system/bottom-sheet"
import { FloatingToggle } from "./components/floating-toggle"
import { Option1Renderer } from "./components/option1/option1-renderer"
import { CanvasOverlay } from "./components/option1/canvas-overlay"
import { Option2Renderer } from "./components/option2/option2-renderer"
import { Option3Renderer } from "./components/option3/option3-renderer"
import {
  QUESTIONS,
  type ChatMessage,
  type QuestionId,
  type Answer,
  createMessage,
  getGreetingMessages,
  getCompletionMessage,
  processUserInput,
  findNextUnansweredIndex,
  getSectionTransition,
  isFormComplete,
} from "./components/conversation-engine"

// ─── Material options ─────────────────────────────────────────────────────────

const MATERIAL_OPTIONS = [
  { value: "solid_plywood", label: "Solid Plywood", description: "Durable, premium feel" },
  { value: "mdf", label: "MDF", description: "Smooth, paintable, budget-friendly" },
  { value: "particle_board", label: "Particle Board", description: "Most affordable option" },
  { value: "oak_veneer", label: "Oak Veneer", description: "Natural wood look" },
  { value: "walnut_veneer", label: "Walnut Veneer", description: "Rich, dark tone" },
  { value: "white_laminate", label: "White Laminate", description: "Clean, modern look" },
]

// ─── Initial state factory ────────────────────────────────────────────────────

function makeInitialMessages(): ChatMessage[] {
  const greeting = getGreetingMessages()
  const firstQuestion = QUESTIONS[0]
  return [...greeting, createMessage("bot", firstQuestion.prompt, firstQuestion.id)]
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CarpentryRFQChatbot() {
  const [activeOption, setActiveOption] = useState<1 | 2 | 3>(2)
  const [messages, setMessages] = useState<ChatMessage[]>(makeInitialMessages)
  const [answers, setAnswers] = useState<Map<QuestionId, Answer>>(new Map())
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Option 1: canvas overlay
  const [canvasOpen, setCanvasOpen] = useState(false)

  // Option 3: highlighted field from keyword match
  const [highlightedField, setHighlightedField] = useState<QuestionId | null>(null)

  // Shared bottom sheet (material / photo)
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false)
  const [bottomSheetContent, setBottomSheetContent] = useState<"material" | "photo">("material")

  // ─── Core helpers ──────────────────────────────────────────────────────────

  // Returns the updated map immediately for chaining
  const recordAnswer = (
    questionId: QuestionId,
    value: string | string[],
    displayValue: string,
    prevAnswers: Map<QuestionId, Answer>,
  ): Map<QuestionId, Answer> => {
    const updated = new Map(prevAnswers)
    updated.set(questionId, { questionId, value, displayValue })
    setAnswers(updated)
    return updated
  }

  const addBotMessage = (text: string, delay = 700) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, createMessage("bot", text)])
    }, delay)
  }

  const advanceToNextQuestion = useCallback(
    (updatedAnswers: Map<QuestionId, Answer>, fromIndex: number) => {
      if (isFormComplete(updatedAnswers)) {
        setIsComplete(true)
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [
            ...prev,
            getCompletionMessage(),
            createMessage("bot", undefined, undefined, "summary_card"),
          ])
        }, 1000)
        return
      }

      const nextIndex = findNextUnansweredIndex(fromIndex, updatedAnswers)
      if (nextIndex === -1) {
        // Edge case: all required answered but isFormComplete didn't catch it
        setIsComplete(true)
        return
      }

      const prevSection = QUESTIONS[fromIndex]?.section
      const nextQuestion = QUESTIONS[nextIndex]
      setCurrentQuestionIndex(nextIndex)

      const transition =
        prevSection && prevSection !== nextQuestion.section
          ? getSectionTransition(prevSection, nextQuestion.section)
          : null

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const newMsgs: ChatMessage[] = []
        if (transition) newMsgs.push(createMessage("bot", transition))
        newMsgs.push(createMessage("bot", nextQuestion.prompt, nextQuestion.id))
        setMessages((prev) => [...prev, ...newMsgs])
      }, transition ? 900 : 650)
    },
    [],
  )

  // ─── Shared answer handlers ────────────────────────────────────────────────

  const handleChipSelect = useCallback(
    (questionId: QuestionId, value: string, label: string) => {
      setMessages((prev) => [...prev, createMessage("user", label)])
      const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
      const updated = recordAnswer(questionId, value, label, answers)

      // For Option 3: highlight the field that was just set
      if (activeOption === 3) setHighlightedField(questionId)

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", `Got it — ${label}!`)])
        setTimeout(() => {
          if (activeOption !== 3) advanceToNextQuestion(updated, qIndex)
        }, 300)
      }, 500)
    },
    [answers, activeOption, advanceToNextQuestion],
  )

  const handleMultiSelect = useCallback(
    (questionId: QuestionId, values: string[], labels: string[]) => {
      const displayValue = labels.join(", ")
      setMessages((prev) => [...prev, createMessage("user", displayValue)])
      const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
      const updated = recordAnswer(questionId, values, displayValue, answers)

      if (activeOption === 3) setHighlightedField(questionId)

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", "Noted, thanks!")])
        setTimeout(() => {
          if (activeOption !== 3) advanceToNextQuestion(updated, qIndex)
        }, 300)
      }, 500)
    },
    [answers, activeOption, advanceToNextQuestion],
  )

  const handlePhotoUpload = useCallback(
    (questionId: QuestionId) => {
      const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
      const updated = recordAnswer(questionId, "uploaded", "Photo uploaded", answers)
      setMessages((prev) => [...prev, createMessage("user", "📷 Photo uploaded")])

      if (activeOption === 3) setHighlightedField(questionId)

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", "Great photo, that really helps!")])
        setTimeout(() => {
          if (activeOption !== 3) advanceToNextQuestion(updated, qIndex)
        }, 400)
      }, 500)
    },
    [answers, activeOption, advanceToNextQuestion],
  )

  const handleTextSubmit = useCallback(
    (questionId: QuestionId, text: string) => {
      setMessages((prev) => [...prev, createMessage("user", text)])
      const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
      const updated = recordAnswer(questionId, text, text, answers)

      if (activeOption === 3) setHighlightedField(questionId)

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", `Got it — "${text}". That helps!`)])
        setTimeout(() => {
          if (activeOption !== 3) advanceToNextQuestion(updated, qIndex)
        }, 400)
      }, 500)
    },
    [answers, activeOption, advanceToNextQuestion],
  )

  const handleSkip = useCallback(
    (questionId: QuestionId) => {
      setMessages((prev) => [...prev, createMessage("user", "Skip")])
      const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
      const question = QUESTIONS[qIndex]
      const currentAnswers = question.optional
        ? recordAnswer(questionId, "skipped", "Skipped", answers)
        : answers

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", "No worries, moving on!")])
        setTimeout(() => {
          if (activeOption !== 3) advanceToNextQuestion(currentAnswers, qIndex)
        }, 400)
      }, 400)
    },
    [answers, activeOption, advanceToNextQuestion],
  )

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
    setCanvasOpen(false)
    setMessages((prev) => [
      ...prev,
      createMessage(
        "bot",
        "Your request has been submitted! Carpenters in your area will review it and send you quotes. You'll hear back within 24 hours.",
      ),
    ])
  }, [])

  // ─── Chat input handler (keyword matching) ────────────────────────────────

  const handleChatSend = useCallback(
    (text: string) => {
      setMessages((prev) => [...prev, createMessage("user", text)])
      const result = processUserInput(text, currentQuestionIndex)

      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, ...result.botMessages])

        if (result.answerToSet) {
          const { questionId, value, displayValue } = result.answerToSet
          const updated = recordAnswer(questionId, value, displayValue, answers)

          // Option 3: highlight the field and don't auto-advance
          if (activeOption === 3) {
            setHighlightedField(questionId)
            setTimeout(() => setHighlightedField(null), 2500)
          } else {
            const qIndex = QUESTIONS.findIndex((q) => q.id === questionId)
            setTimeout(() => advanceToNextQuestion(updated, qIndex), 400)
          }
        }

        if (result.advanceQuestion && activeOption !== 3) {
          setTimeout(() => advanceToNextQuestion(answers, currentQuestionIndex), 400)
        }

        if (result.openBottomSheet) {
          setTimeout(() => {
            setBottomSheetContent(result.openBottomSheet!)
            setBottomSheetOpen(true)
          }, 500)
        }
      }, 700)
    },
    [currentQuestionIndex, answers, activeOption, advanceToNextQuestion],
  )

  // ─── Option switch ─────────────────────────────────────────────────────────

  const handleOptionChange = useCallback((option: 1 | 2 | 3) => {
    setActiveOption(option)
    setMessages(makeInitialMessages)
    setAnswers(new Map())
    setCurrentQuestionIndex(0)
    setIsTyping(false)
    setIsComplete(false)
    setSubmitted(false)
    setCanvasOpen(false)
    setBottomSheetOpen(false)
    setHighlightedField(null)
    // Reset all scroll positions
    setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      document.querySelector("main")?.scrollTo({ top: 0 })
    }, 0)
  }, [])

  const handleMaterialSelect = useCallback(
    (value: string, label: string) => {
      setBottomSheetOpen(false)
      setMessages((prev) => [...prev, createMessage("user", `Material: ${label}`)])
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, createMessage("bot", `${label} — great choice!`)])
      }, 500)
    },
    [],
  )

  // ─── Option 3: show accordion immediately after greeting ─────────────────
  // For Option 3 the initial messages are just a greeting, then the accordion shows.
  // Modify initial messages for Option 3 to skip the first question prompt.
  const option3Messages = messages.filter(
    (m) => !(m.widgetQuestionId) && m.widgetType !== "summary_card",
  )

  const showChatInput = !submitted && (activeOption !== 3 ? !isComplete : true)

  return (
    <PrototypeLayout
      topNav={
        <div className="bg-background-base border-b border-stroke-boundary">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => window.history.back()}>
              <X size={24} className="text-content-primary" />
            </button>
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-content-interactive" />
              <h1 className="text-large-callout font-bold text-content-primary">
                Home assistant
              </h1>
            </div>
            <div className="w-6" />
          </div>
        </div>
      }
      bottomBar={
        showChatInput ? (
          <ChatInput
            placeholder="Ask anything"
            suggestedMessages={[]}
            onSend={handleChatSend}
          />
        ) : undefined
      }
      overlay={
        <>
          {/* Option 1: Canvas overlay */}
          <BottomSheet
            open={canvasOpen}
            onClose={() => setCanvasOpen(false)}
            title="Your carpentry request"
            height="full"
          >
            <CanvasOverlay
              answers={answers}
              onSubmit={handleSubmit}
              onClose={() => setCanvasOpen(false)}
            />
          </BottomSheet>

          {/* Shared: Material / Photo bottom sheet */}
          <BottomSheet
            open={bottomSheetOpen}
            onClose={() => setBottomSheetOpen(false)}
            title={bottomSheetContent === "material" ? "Choose a material" : "Share a photo"}
            height="half"
          >
            {bottomSheetContent === "material" && (
              <div className="grid grid-cols-2 gap-3">
                {MATERIAL_OPTIONS.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => handleMaterialSelect(m.value, m.label)}
                    className="flex flex-col rounded-xl border border-stroke-boundary overflow-hidden hover:border-stroke-interactive transition-colors"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-xl">
                      🪵
                    </div>
                    <div className="p-2.5">
                      <p className="text-small-callout text-content-primary">{m.label}</p>
                      <p className="text-tiny-reg text-content-secondary">{m.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {bottomSheetContent === "photo" && (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setBottomSheetOpen(false)
                    const currentQ = QUESTIONS[currentQuestionIndex]
                    if (currentQ?.type === "photo") handlePhotoUpload(currentQ.id)
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stroke-boundary hover:bg-background-display transition-colors"
                >
                  <span className="text-xl">📸</span>
                  <span className="text-middle-reg text-content-primary">Take a photo</span>
                </button>
                <button
                  onClick={() => {
                    setBottomSheetOpen(false)
                    const currentQ = QUESTIONS[currentQuestionIndex]
                    if (currentQ?.type === "photo") handlePhotoUpload(currentQ.id)
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stroke-boundary hover:bg-background-display transition-colors"
                >
                  <span className="text-xl">🖼️</span>
                  <span className="text-middle-reg text-content-primary">Choose from library</span>
                </button>
                <button
                  onClick={() => setBottomSheetOpen(false)}
                  className="text-small-reg text-content-subdued py-2 text-center"
                >
                  Cancel
                </button>
              </div>
            )}
          </BottomSheet>
        </>
      }
    >
      <div className="relative h-full flex flex-col">
        {/* Floating toggle */}
        <FloatingToggle activeOption={activeOption} onOptionChange={handleOptionChange} />

        {/* Renderers */}
        <div className="flex-1 min-h-0">
          {activeOption === 1 && (
            <Option1Renderer
              messages={messages}
              answers={answers}
              currentQuestionIndex={currentQuestionIndex}
              isTyping={isTyping}
              isComplete={isComplete}
              onChipSelect={handleChipSelect}
              onMultiSelect={handleMultiSelect}
              onPhotoUpload={handlePhotoUpload}
              onTextSubmit={handleTextSubmit}
              onSkip={handleSkip}
              onSubmit={handleSubmit}
              onReviewOpen={() => setCanvasOpen(true)}
            />
          )}
          {activeOption === 2 && (
            <Option2Renderer
              messages={messages}
              answers={answers}
              currentQuestionIndex={currentQuestionIndex}
              isTyping={isTyping}
              isComplete={isComplete}
              onChipSelect={handleChipSelect}
              onMultiSelect={handleMultiSelect}
              onPhotoUpload={handlePhotoUpload}
              onTextSubmit={handleTextSubmit}
              onSkip={handleSkip}
              onSubmit={handleSubmit}
            />
          )}
          {activeOption === 3 && (
            <Option3Renderer
              messages={option3Messages}
              answers={answers}
              currentQuestionIndex={currentQuestionIndex}
              isTyping={isTyping}
              isComplete={isComplete}
              highlightedField={highlightedField}
              onChipSelect={handleChipSelect}
              onMultiSelect={handleMultiSelect}
              onPhotoUpload={handlePhotoUpload}
              onTextSubmit={handleTextSubmit}
              onSkip={handleSkip}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </PrototypeLayout>
  )
}
