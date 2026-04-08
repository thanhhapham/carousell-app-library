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
import { StickyCanvasBar } from "./sticky-canvas-bar"
import { UnsupportedCategoryCard } from "../inline-widgets/unsupported-category-card"
import {
  QUESTIONS,
  getCompletionPercentage,
  type ChatMessage,
  type QuestionId,
  type Answer,
} from "../conversation-engine"

interface Option1RendererProps {
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
  onReviewOpen: () => void
  thinkingComponent?: React.ReactNode
  isProcessingLongText?: boolean
}

export function Option1Renderer({
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
  onReviewOpen,
  thinkingComponent,
  isProcessingLongText,
}: Option1RendererProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const completionPct = getCompletionPercentage(answers)

  // Active widget = last bot message that has a widgetQuestionId that isn't answered yet
  const activeWidgetQuestionId = !isComplete
    ? [...messages]
        .reverse()
        .find((m) => m.sender === "bot" && m.widgetQuestionId && !answers.has(m.widgetQuestionId!))
        ?.widgetQuestionId
    : null

  return (
    <div className="flex flex-col h-full">
      {/* Sticky canvas bar */}
      <StickyCanvasBar completionPct={completionPct} onReview={onReviewOpen} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pb-4">
        {messages.map((msg) => {
          const question = msg.widgetQuestionId
            ? QUESTIONS.find((q) => q.id === msg.widgetQuestionId)
            : null
          const isActiveWidget = msg.widgetQuestionId === activeWidgetQuestionId

          return (
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

              {/* Inline widget — no step numbering in Option 1 */}
              {question && isActiveWidget && (
                <div className="mt-1">
                  {renderWidget(question, answers, {
                    onChipSelect,
                    onMultiSelect,
                    onPhotoUpload,
                    onTextSubmit,
                    onSkip,
                  })}
                </div>
              )}

              {/* Unsupported category card */}
              {msg.widgetType === "unsupported_category" && msg.widgetData && (
                <UnsupportedCategoryCard
                  category={msg.widgetData.category}
                  searchLinks={msg.widgetData.searchLinks}
                />
              )}

              {/* On completion, just show a prompt to open the canvas */}
              {msg.widgetType === "summary_card" && (
                <div className="ml-11 mr-4 mt-1 mb-2">
                  <div className="border-2 border-content-interactive rounded-2xl p-4">
                    <p className="text-middle-callout font-bold text-content-primary mb-2">
                      Request complete!
                    </p>
                    <p className="text-small-reg text-content-secondary mb-3">
                      Open the canvas to review your request and see the estimated price.
                    </p>
                    <button
                      onClick={onReviewOpen}
                      className="w-full py-2.5 rounded-lg bg-content-interactive text-content-inverse text-small-callout font-bold hover:opacity-90 transition-opacity"
                    >
                      Open canvas to review & submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {isProcessingLongText && thinkingComponent}
        {isTyping && !isProcessingLongText && <TypingIndicator />}
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
) {
  switch (question.type) {
    case "photo":
      return (
        <PhotoUploadTrigger
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
            placeholder={`e.g., "2m wide, 1m tall"`}
            onSubmit={(text) => handlers.onTextSubmit(question.id, text)}
          />
        </>
      )
    case "multi_select":
      return (
        <OptionChips
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
