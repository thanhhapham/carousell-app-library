"use client"

import { Check, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  SECTIONS,
  QUESTIONS,
  type QuestionId,
  type Answer,
  type SectionId,
  calculateEstimatedPrice,
} from "../conversation-engine"

interface SummaryCardProps {
  answers: Map<QuestionId, Answer>
  onSubmit: () => void
  compact?: boolean
}

function getSectionAnswers(
  sectionId: SectionId,
  answers: Map<QuestionId, Answer>,
): { label: string; value: string; answered: boolean }[] {
  return QUESTIONS.filter((q) => q.section === sectionId).map((q) => ({
    label: q.label,
    value: answers.get(q.id)?.displayValue || (q.optional ? "Skipped" : "Not specified"),
    answered: answers.has(q.id),
  }))
}

export function SummaryCard({ answers, onSubmit, compact = false }: SummaryCardProps) {
  const price = calculateEstimatedPrice(answers)

  return (
    <div className={cn("ml-11 mr-4 mt-1 mb-2", compact && "ml-0")}>
      <div className="border-2 border-content-interactive rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-background-interactive-tint px-4 py-3 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-content-interactive flex items-center justify-center">
            <Check size={14} className="text-content-inverse" />
          </div>
          <h3 className="text-middle-callout font-bold text-content-primary">
            Your Carpentry Request
          </h3>
        </div>

        {/* Sections */}
        <div className="px-4 py-3 divide-y divide-stroke-boundary">
          {SECTIONS.map((section) => {
            const sectionAnswers = getSectionAnswers(section.id, answers)
            if (sectionAnswers.length === 0) return null

            return (
              <div key={section.id} className="py-2.5 first:pt-0 last:pb-0">
                <p className="text-tiny-reg text-content-subdued font-bold uppercase tracking-wide mb-1.5">
                  {section.label}
                </p>
                <div className="space-y-1">
                  {sectionAnswers.map((item) => (
                    <div key={item.label} className="flex justify-between gap-2">
                      <span className="text-small-reg text-content-secondary">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          "text-small-reg text-right",
                          item.answered
                            ? "text-content-primary font-medium"
                            : "text-content-subdued italic",
                        )}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Price estimate */}
        {price && (
          <div className="mx-4 mb-3 p-3 bg-background-interactive-tint rounded-xl">
            <p className="text-tiny-reg text-content-secondary mb-1">Estimated price range</p>
            <p className="text-title-2 text-content-interactive">
              S${price.low.toLocaleString()} – S${price.high.toLocaleString()}
            </p>
            <p className="text-tiny-reg text-content-subdued mt-1">
              This is a rough estimate. Actual quotes may vary.
            </p>
          </div>
        )}

        {/* Submit button */}
        <div className="px-4 pb-4">
          <button
            onClick={onSubmit}
            className="w-full py-3 rounded-lg bg-content-interactive text-content-inverse text-middle-callout font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Submit Request
          </button>
        </div>
      </div>
    </div>
  )
}
