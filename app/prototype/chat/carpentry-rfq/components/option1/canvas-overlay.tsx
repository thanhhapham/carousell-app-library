"use client"

import { Check, Send, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  SECTIONS,
  QUESTIONS,
  type QuestionId,
  type Answer,
  type SectionId,
  calculateEstimatedPrice,
  isFormComplete,
  getCompletionPercentage,
} from "../conversation-engine"

interface CanvasOverlayProps {
  answers: Map<QuestionId, Answer>
  onSubmit: () => void
  onClose: () => void
}

function getSectionStatus(
  sectionId: SectionId,
  answers: Map<QuestionId, Answer>,
): { answered: number; total: number; complete: boolean } {
  const required = QUESTIONS.filter((q) => q.section === sectionId && !q.optional)
  const answered = required.filter((q) => answers.has(q.id)).length
  return {
    answered,
    total: required.length,
    complete: answered === required.length && required.length > 0,
  }
}

export function CanvasOverlay({ answers, onSubmit, onClose }: CanvasOverlayProps) {
  const complete = isFormComplete(answers)
  const pct = getCompletionPercentage(answers)
  const price = complete ? calculateEstimatedPrice(answers) : null

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <div className="mx-4 mb-4 rounded-full bg-background-display h-2 overflow-hidden">
        <div
          className="h-full bg-content-positive transition-all duration-500 ease-out rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-tiny-reg text-content-secondary text-center mb-4">
        {complete ? "All done!" : `${pct}% complete`}
      </p>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto space-y-3 px-4 pb-4">
        {SECTIONS.map((section) => {
          const status = getSectionStatus(section.id, answers)
          const sectionQuestions = QUESTIONS.filter((q) => q.section === section.id)

          return (
            <div
              key={section.id}
              className={cn(
                "rounded-xl border overflow-hidden",
                status.complete
                  ? "border-content-positive/40 bg-content-positive/5"
                  : "border-stroke-boundary bg-background-base",
              )}
            >
              {/* Section header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  {status.complete ? (
                    <div className="w-5 h-5 rounded-full bg-content-positive flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-stroke-input flex items-center justify-center">
                      <span className="text-[10px] text-content-subdued font-bold">
                        {status.answered}/{status.total}
                      </span>
                    </div>
                  )}
                  <span
                    className={cn(
                      "text-small-callout font-bold",
                      status.complete ? "text-content-primary" : "text-content-secondary",
                    )}
                  >
                    {section.label}
                  </span>
                </div>
                {!status.complete && (
                  <ChevronRight size={16} className="text-content-subdued" />
                )}
              </div>

              {/* Answers */}
              {sectionQuestions.some((q) => answers.has(q.id)) && (
                <div className="px-4 pb-3 space-y-2">
                  {sectionQuestions.map((q) => {
                    const answer = answers.get(q.id)
                    if (!answer) return null
                    return (
                      <div key={q.id} className="flex justify-between gap-3">
                        <span className="text-small-reg text-content-secondary flex-shrink-0">
                          {q.label}
                        </span>
                        <span className="text-small-reg text-content-primary text-right">
                          {answer.displayValue}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Unanswered items */}
              {sectionQuestions.some((q) => !answers.has(q.id) && !q.optional) && (
                <div className="px-4 pb-3">
                  {sectionQuestions
                    .filter((q) => !answers.has(q.id) && !q.optional)
                    .map((q) => (
                      <div key={q.id} className="flex justify-between gap-3">
                        <span className="text-small-reg text-content-secondary">{q.label}</span>
                        <span className="text-small-reg text-content-subdued italic">
                          Not yet answered
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Price + Submit */}
      {complete && price && (
        <div className="px-4 pb-4 pt-2 border-t border-stroke-boundary space-y-3">
          <div className="p-3 bg-background-interactive-tint rounded-xl">
            <p className="text-tiny-reg text-content-secondary">Estimated price range</p>
            <p className="text-title-2 text-content-interactive mt-1">
              S${price.low.toLocaleString()} – S${price.high.toLocaleString()}
            </p>
            <p className="text-tiny-reg text-content-subdued mt-1">
              This is a rough estimate. Actual quotes may vary.
            </p>
          </div>
          <button
            onClick={() => { onSubmit(); onClose() }}
            className="w-full py-3 rounded-lg bg-content-interactive text-content-inverse text-middle-callout font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Submit Request
          </button>
        </div>
      )}

      {!complete && (
        <div className="px-4 pb-4 pt-2 border-t border-stroke-boundary">
          <p className="text-small-reg text-content-secondary text-center">
            Answer all required questions to unlock your quote estimate.
          </p>
        </div>
      )}
    </div>
  )
}
