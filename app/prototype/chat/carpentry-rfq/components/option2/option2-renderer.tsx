"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { BotAvatar } from "../bot-avatar"
import { TypingIndicator } from "../typing-indicator"
import { OptionChips } from "../inline-widgets/option-chips"
import { ImageOptionGrid } from "../inline-widgets/image-option-grid"
import { PhotoUploadTrigger } from "../inline-widgets/photo-upload-trigger"
import { TextInputWidget } from "../inline-widgets/text-input-widget"
import { InfoExpandable } from "../inline-widgets/info-expandable"
import { SummaryCard } from "../inline-widgets/summary-card"
import {
  QUESTIONS,
  SECTIONS,
  type ChatMessage,
  type QuestionId,
  type Answer,
} from "../conversation-engine"

interface Option2RendererProps {
  messages: ChatMessage[]
  answers: Map<QuestionId, Answer>
  currentQuestionIndex: number
  isTyping: boolean
  isComplete: boolean
  onChipSelect: (questionId: QuestionId, value: string, label: string) => void
  onMultiSelect: (questionId: QuestionId, values: string[], labels: string[]) => void
  onPhotoUpload: (questionId: QuestionId) => void
  onTextSubmit: (questionId: QuestionId, text: string) => void
  onSkip: (questionId: QuestionId) => void
  onSubmit: () => void
}

export function Option2Renderer({
  messages,
  answers,
  currentQuestionIndex,
  isTyping,
  isComplete,
  onChipSelect,
  onMultiSelect,
  onPhotoUpload,
  onTextSubmit,
  onSkip,
  onSubmit,
}: Option2RendererProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping, isComplete])

  // Determine which question to show widget for (last bot message with widgetQuestionId)
  const activeWidgetQuestionId = !isComplete
    ? [...messages]
        .reverse()
        .find((m) => m.sender === "bot" && m.widgetQuestionId)?.widgetQuestionId
    : null

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-4">
        {messages.map((msg) => {
          const question = msg.widgetQuestionId
            ? QUESTIONS.find((q) => q.id === msg.widgetQuestionId)
            : null
          const isActiveWidget = msg.widgetQuestionId === activeWidgetQuestionId
          const isAnswered = msg.widgetQuestionId
            ? answers.has(msg.widgetQuestionId)
            : false

          return (
            <div key={msg.id}>
              {/* Message bubble */}
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

              {/* Inline widget for this question */}
              {question && isActiveWidget && !isAnswered && (
                <div className="mt-1">
                  {renderWidget(question, answers, {
                    onChipSelect,
                    onMultiSelect,
                    onPhotoUpload,
                    onTextSubmit,
                    onSkip,
                  }, SECTIONS)}
                </div>
              )}

              {/* Summary card */}
              {msg.widgetType === "summary_card" && (
                <SummaryCard answers={answers} onSubmit={onSubmit} />
              )}
            </div>
          )
        })}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  )
}

function renderWidget(
  question: (typeof QUESTIONS)[number],
  answers: Map<QuestionId, Answer>,
  handlers: {
    onChipSelect: (questionId: QuestionId, value: string, label: string) => void
    onMultiSelect: (questionId: QuestionId, values: string[], labels: string[]) => void
    onPhotoUpload: (questionId: QuestionId) => void
    onTextSubmit: (questionId: QuestionId, text: string) => void
    onSkip: (questionId: QuestionId) => void
  },
  sections: typeof SECTIONS,
) {
  const sectionIndex = sections.findIndex((s) => s.id === question.section)
  const headerSlot = (
    <>
      <span className="text-small-callout font-semibold text-content-primary">
        {sections[sectionIndex]?.label}
      </span>
      <span className="text-small-reg text-content-subdued">
        {sectionIndex + 1} / {sections.length}
      </span>
    </>
  )

  switch (question.type) {
    case "photo":
      return (
        <PhotoUploadTrigger
          headerSlot={headerSlot}
          onUpload={() => handlers.onPhotoUpload(question.id)}
          onSkip={question.optional ? () => handlers.onSkip(question.id) : undefined}
          uploaded={answers.has(question.id)}
        />
      )

    case "text":
      return (
        <>
          {question.hasMoreInfo && question.moreInfoText && (
            <InfoExpandable text={question.moreInfoText} />
          )}
          <TextInputWidget
            headerSlot={headerSlot}
            placeholder={`e.g., "2m wide, 1m tall"`}
            onSubmit={(text) => handlers.onTextSubmit(question.id, text)}
          />
        </>
      )

    case "multi_select":
      return (
        <OptionChips
          headerSlot={headerSlot}
          options={question.options || []}
          multiSelect
          onSelect={() => {}}
          onMultiSelect={(values, labels) =>
            handlers.onMultiSelect(question.id, values, labels)
          }
          onSkip={() => handlers.onSkip(question.id)}
          onTypeOwn={(text) => handlers.onTextSubmit(question.id, text)}
          showSkip={question.optional}
        />
      )

    case "single_select":
      if (question.showImages) {
        return (
          <ImageOptionGrid
            headerSlot={headerSlot}
            options={question.options || []}
            onSelect={(value, label) => handlers.onChipSelect(question.id, value, label)}
          />
        )
      }
      return (
        <>
          {question.hasMoreInfo && question.moreInfoText && (
            <InfoExpandable text={question.moreInfoText} />
          )}
          <OptionChips
            headerSlot={headerSlot}
            options={question.options || []}
            onSelect={(value, label) => handlers.onChipSelect(question.id, value, label)}
            onSkip={question.optional ? () => handlers.onSkip(question.id) : undefined}
            onTypeOwn={(text) => handlers.onTextSubmit(question.id, text)}
            showSkip={question.optional}
          />
        </>
      )

    default:
      return null
  }
}
