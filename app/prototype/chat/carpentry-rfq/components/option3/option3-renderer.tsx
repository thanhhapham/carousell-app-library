"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { BotAvatar } from "../bot-avatar"
import { TypingIndicator } from "../typing-indicator"
import { AccordionForm } from "./accordion-form"
import { UnsupportedCategoryCard } from "../inline-widgets/unsupported-category-card"
import {
  type ChatMessage,
  type QuestionId,
  type Answer,
} from "../conversation-engine"

interface Option3RendererProps {
  messages: ChatMessage[]
  answers: Map<QuestionId, Answer>
  currentQuestionIndex: number
  isTyping: boolean
  isComplete: boolean
  highlightedField?: QuestionId | null
  onChipSelect: (questionId: QuestionId, value: string, label: string) => void
  onMultiSelect: (questionId: QuestionId, values: string[], labels: string[]) => void
  onPhotoUpload: (questionId: QuestionId) => void
  onTextSubmit: (questionId: QuestionId, text: string) => void
  onSkip: (questionId: QuestionId) => void
  onSubmit: () => void
  thinkingComponent?: React.ReactNode
  isProcessingLongText?: boolean
}

export function Option3Renderer({
  messages,
  answers,
  currentQuestionIndex,
  isTyping,
  isComplete,
  highlightedField,
  onChipSelect,
  onMultiSelect,
  onPhotoUpload,
  onTextSubmit,
  onSkip,
  onSubmit,
  thinkingComponent,
  isProcessingLongText,
}: Option3RendererProps) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const initialMessageCount = useRef(messages.length)

  // Only auto-scroll when NEW bot messages appear after initial mount (keyword match replies)
  useEffect(() => {
    if (messages.length > initialMessageCount.current && messages[messages.length - 1]?.sender === "bot") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages.length])

  // Only show bot text messages (no inline widgets — those are all in the accordion)
  // Also include unsupported_category widget messages even without text
  const textMessages = messages.filter(
    (m) => (m.text && m.widgetType !== "summary_card") || m.widgetType === "unsupported_category",
  )

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-4">
      {/* Bot greeting messages */}
      <div className="pt-2">
        {textMessages.map((msg) => (
          <div key={msg.id}>
            {msg.text && (
              <div
                className={cn(
                  "flex gap-3 px-4 py-2",
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                {msg.sender === "bot" && <BotAvatar />}
                <div
                  className={cn(
                    "max-w-[75%] px-4 py-3 rounded-2xl",
                    msg.sender === "user"
                      ? "bg-background-input text-content-primary rounded-br-md"
                      : "border border-stroke-boundary text-content-primary rounded-bl-md",
                  )}
                >
                  <p className="text-middle-reg whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            )}

            {/* Unsupported category card */}
            {msg.widgetType === "unsupported_category" && msg.widgetData && (
              <UnsupportedCategoryCard
                category={msg.widgetData.category}
                searchLinks={msg.widgetData.searchLinks}
              />
            )}
          </div>
        ))}
      </div>

      {isProcessingLongText && thinkingComponent}
      {isTyping && !isProcessingLongText && <TypingIndicator />}

      {/* Accordion form — appears after greeting, hidden during long-text processing or unsupported scenario */}
      {!isTyping && !isProcessingLongText && !messages.some((m) => m.widgetType === "unsupported_category") && (
        <div className="mt-2 mb-4">
          <AccordionForm
            answers={answers}
            highlightedField={highlightedField}
            onChipSelect={onChipSelect}
            onMultiSelect={onMultiSelect}
            onPhotoUpload={onPhotoUpload}
            onTextSubmit={onTextSubmit}
            onSkip={onSkip}
            onSubmit={onSubmit}
          />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}
