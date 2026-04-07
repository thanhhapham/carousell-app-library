"use client"

import { useState, useEffect, useRef } from "react"
import { Check, ChevronDown, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { OptionChips } from "../inline-widgets/option-chips"
import { ImageOptionGrid } from "../inline-widgets/image-option-grid"
import { PhotoUploadTrigger } from "../inline-widgets/photo-upload-trigger"
import { TextInputWidget } from "../inline-widgets/text-input-widget"
import { InfoExpandable } from "../inline-widgets/info-expandable"
import {
  SECTIONS,
  QUESTIONS,
  calculateEstimatedPrice,
  isFormComplete,
  type QuestionId,
  type Answer,
  type SectionId,
} from "../conversation-engine"

interface AccordionFormProps {
  answers: Map<QuestionId, Answer>
  highlightedField?: QuestionId | null
  onChipSelect: (questionId: QuestionId, value: string, label: string) => void
  onMultiSelect: (questionId: QuestionId, values: string[], labels: string[]) => void
  onPhotoUpload: (questionId: QuestionId) => void
  onTextSubmit: (questionId: QuestionId, text: string) => void
  onSkip: (questionId: QuestionId) => void
  onSubmit: () => void
}

function getSectionComplete(sectionId: SectionId, answers: Map<QuestionId, Answer>): boolean {
  const required = QUESTIONS.filter((q) => q.section === sectionId && !q.optional)
  return required.length > 0 && required.every((q) => answers.has(q.id))
}

function getSectionProgress(
  sectionId: SectionId,
  answers: Map<QuestionId, Answer>,
): { answered: number; total: number } {
  const questions = QUESTIONS.filter((q) => q.section === sectionId)
  const answered = questions.filter((q) => answers.has(q.id)).length
  return { answered, total: questions.length }
}

const RING_R = 9
const RING_C = 2 * Math.PI * RING_R // ≈ 56.55

function RingIndicator({ answered, total }: { answered: number; total: number }) {
  const offset = total > 0 ? RING_C * (1 - answered / total) : RING_C
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0 -rotate-90">
      {/* Background track */}
      <circle cx="12" cy="12" r={RING_R} fill="none" strokeWidth="2" className="stroke-stroke-boundary" />
      {/* Progress arc */}
      {answered > 0 && (
        <circle
          cx="12" cy="12" r={RING_R}
          fill="none"
          strokeWidth="2"
          strokeDasharray={RING_C}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="stroke-content-interactive transition-all duration-500"
        />
      )}
    </svg>
  )
}

function getSectionSummary(sectionId: SectionId, answers: Map<QuestionId, Answer>): string {
  const sectionQs = QUESTIONS.filter((q) => q.section === sectionId)
  const answered = sectionQs.filter((q) => answers.has(q.id))
  if (answered.length === 0) return ""
  return answered.map((q) => answers.get(q.id)!.displayValue).join(" · ")
}

export function AccordionForm({
  answers,
  highlightedField,
  onChipSelect,
  onMultiSelect,
  onPhotoUpload,
  onTextSubmit,
  onSkip,
  onSubmit,
}: AccordionFormProps) {
  // Find the first incomplete section to auto-expand
  const firstIncomplete = SECTIONS.findIndex(
    (s) => !getSectionComplete(s.id, answers),
  )
  const [openSection, setOpenSection] = useState<SectionId | null>(
    SECTIONS[firstIncomplete !== -1 ? firstIncomplete : 0].id,
  )

  const complete = isFormComplete(answers)
  const price = complete ? calculateEstimatedPrice(answers) : null

  // Refs for each section header — used to scroll into view on section change
  const sectionHeaderRefs = useRef<Map<SectionId, HTMLElement>>(new Map())

  // Scroll to section header when openSection changes (e.g. auto-advance)
  useEffect(() => {
    if (openSection) {
      const el = sectionHeaderRefs.current.get(openSection)
      el?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [openSection])

  // Auto-advance: when ALL questions in the section are answered/skipped (including optional), open the next one
  useEffect(() => {
    if (openSection) {
      const sectionQs = QUESTIONS.filter((q) => q.section === openSection)
      const allDone = sectionQs.length > 0 && sectionQs.every((q) => answers.has(q.id))
      if (allDone) {
        const idx = SECTIONS.findIndex((s) => s.id === openSection)
        const next = SECTIONS[idx + 1]
        if (next && !getSectionComplete(next.id, answers)) {
          const timer = setTimeout(() => setOpenSection(next.id), 600)
          return () => clearTimeout(timer)
        }
      }
    }
  }, [answers, openSection])

  // Auto-expand section containing highlighted field
  useEffect(() => {
    if (highlightedField) {
      const q = QUESTIONS.find((q) => q.id === highlightedField)
      if (q) setOpenSection(q.section)
    }
  }, [highlightedField])

  const toggleSection = (sectionId: SectionId) => {
    setOpenSection((prev) => (prev === sectionId ? null : sectionId))
  }

  return (
    <div
      className={cn(
        "mx-4 rounded-2xl border-2 overflow-hidden transition-all duration-300",
        complete ? "border-content-positive" : "border-stroke-boundary",
      )}
    >
      {SECTIONS.map((section, idx) => {
        const isOpen = openSection === section.id
        const isComplete = getSectionComplete(section.id, answers)
        const { answered, total } = getSectionProgress(section.id, answers)
        const summary = getSectionSummary(section.id, answers)
        const sectionQuestions = QUESTIONS.filter((q) => q.section === section.id)

        return (
          <div
            key={section.id}
            className={cn(
              "border-b border-stroke-boundary last:border-b-0",
              isComplete && !isOpen && "bg-content-positive/5",
            )}
          >
            {/* Section header */}
            <button
              ref={(el) => {
                if (el) sectionHeaderRefs.current.set(section.id, el)
                else sectionHeaderRefs.current.delete(section.id)
              }}
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Status indicator */}
                {isComplete ? (
                  <div className="w-6 h-6 rounded-full bg-content-positive flex items-center justify-center flex-shrink-0">
                    <Check size={13} className="text-white" />
                  </div>
                ) : (
                  <RingIndicator answered={answered} total={total} />
                )}

                <div className="flex-1 min-w-0">
                  <span
                    className={cn(
                      "text-small-callout font-bold block",
                      isComplete ? "text-content-primary" : "text-content-secondary",
                    )}
                  >
                    {section.label}
                  </span>
                  {/* Subtitle when collapsed */}
                  {!isOpen && (
                    <span className="text-tiny-reg text-content-subdued truncate block mt-0.5">
                      {answered}/{total} answered{summary ? ` · ${summary}` : ""}
                    </span>
                  )}
                </div>
              </div>

              <ChevronDown
                size={18}
                className={cn(
                  "text-content-subdued flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {/* Section content */}
            {isOpen && (
              <div className="pb-3">
                {sectionQuestions.map((question) => {
                  const isAnswered = answers.has(question.id)
                  const isHighlighted = highlightedField === question.id

                  return (
                    <div
                      key={question.id}
                      className={cn(
                        "transition-colors duration-300",
                        isHighlighted && "bg-content-interactive/5",
                      )}
                    >
                      {/* Question label */}
                      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
                        {isAnswered && (
                          <Check size={14} className="text-content-positive flex-shrink-0" />
                        )}
                        <p
                          className={cn(
                            "text-small-reg",
                            isAnswered ? "text-content-secondary" : "text-content-primary",
                          )}
                        >
                          {question.prompt}
                          {question.optional && (
                            <span className="text-content-subdued ml-1">(optional)</span>
                          )}
                        </p>
                      </div>

                      {/* Show answered value */}
                      {isAnswered && (
                        <div className="px-4 pb-1">
                          <span
                            className={cn(
                              "text-small-callout font-medium text-content-interactive px-2 py-0.5 rounded-md",
                              isHighlighted
                                ? "bg-content-interactive/15"
                                : "bg-background-interactive-tint",
                            )}
                          >
                            {answers.get(question.id)!.displayValue}
                          </span>
                        </div>
                      )}

                      {/* Widget — only show if not answered */}
                      {!isAnswered && (
                        <div className="px-0">
                          {renderAccordionWidget(question, answers, {
                            onChipSelect,
                            onMultiSelect,
                            onPhotoUpload,
                            onTextSubmit,
                            onSkip,
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      {/* Completed state — price + submit */}
      {complete && price && (
        <div className="px-4 py-4 bg-content-positive/5 border-t border-stroke-boundary space-y-3">
          <div className="p-3 bg-background-interactive-tint rounded-xl">
            <p className="text-tiny-reg text-content-secondary">Estimated price range</p>
            <p className="text-title-3 text-content-interactive mt-1">
              S${price.low.toLocaleString()} – S${price.high.toLocaleString()}
            </p>
            <p className="text-tiny-reg text-content-subdued mt-1">
              Rough estimate. Actual quotes may vary.
            </p>
          </div>
          <button
            onClick={onSubmit}
            className="w-full py-3 rounded-lg bg-content-interactive text-content-inverse text-middle-callout font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Submit Request
          </button>
        </div>
      )}
    </div>
  )
}

function renderAccordionWidget(
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
        <div className="px-4">
          <PhotoUploadTrigger
            onUpload={() => handlers.onPhotoUpload(question.id)}
            onSkip={question.optional ? () => handlers.onSkip(question.id) : undefined}
            uploaded={answers.has(question.id)}
          />
        </div>
      )
    case "text":
      return (
        <div className="px-4">
          {question.hasMoreInfo && question.moreInfoText && (
            <InfoExpandable text={question.moreInfoText} />
          )}
          <div className="mt-1">
            <TextInputWidget
              placeholder='e.g., "2m wide, 1m tall"'
              onSubmit={(text) => handlers.onTextSubmit(question.id, text)}
            />
          </div>
        </div>
      )
    case "multi_select":
      return (
        <div className="px-4">
          <OptionChips
            options={question.options || []}
            multiSelect
            onSelect={() => {}}
            onMultiSelect={(values, labels) =>
              handlers.onMultiSelect(question.id, values, labels)
            }
            onSkip={question.optional ? () => handlers.onSkip(question.id) : undefined}
            onTypeOwn={(text) => handlers.onTextSubmit(question.id, text)}
            showSkip={question.optional}
          />
        </div>
      )
    case "single_select":
      if (question.showImages) {
        return (
          <div className="px-4">
            <ImageOptionGrid
              options={question.options || []}
              onSelect={(value, label) => handlers.onChipSelect(question.id, value, label)}
            />
          </div>
        )
      }
      return (
        <div className="px-4">
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
        </div>
      )
    default:
      return null
  }
}
