"use client"

import { cn } from "@/lib/utils"
import { SECTIONS, QUESTIONS, type SectionId, type QuestionId, type Answer } from "../conversation-engine"

interface StepIndicatorProps {
  currentSectionIndex: number
  answers: Map<QuestionId, Answer>
  onSectionTap?: (sectionIndex: number) => void
}

function isSectionComplete(sectionId: SectionId, answers: Map<QuestionId, Answer>): boolean {
  const sectionQuestions = QUESTIONS.filter((q) => q.section === sectionId && !q.optional)
  return sectionQuestions.length > 0 && sectionQuestions.every((q) => answers.has(q.id))
}

function isSectionStarted(sectionId: SectionId, answers: Map<QuestionId, Answer>): boolean {
  const sectionQuestions = QUESTIONS.filter((q) => q.section === sectionId)
  return sectionQuestions.some((q) => answers.has(q.id))
}

export function StepIndicator({
  currentSectionIndex,
  answers,
  onSectionTap,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-stroke-boundary bg-background-base">
      {/* Dots */}
      <div className="flex items-center gap-2">
        {SECTIONS.map((section, index) => {
          const isComplete = isSectionComplete(section.id, answers)
          const isCurrent = index === currentSectionIndex
          const isStarted = isSectionStarted(section.id, answers)

          return (
            <button
              key={section.id}
              onClick={() => onSectionTap?.(index)}
              className={cn(
                "rounded-full transition-all duration-200 flex items-center justify-center",
                isCurrent
                  ? "w-3 h-3 bg-content-interactive"
                  : isComplete
                    ? "w-2.5 h-2.5 bg-content-positive"
                    : isStarted
                      ? "w-2.5 h-2.5 bg-content-interactive/40"
                      : "w-2 h-2 bg-stroke-boundary",
                // 44px touch target
                "min-w-[28px] min-h-[28px]",
              )}
              disabled={!isComplete && !isCurrent}
            />
          )
        })}
      </div>

      {/* Label */}
      <p className="text-small-reg text-content-secondary">
        {SECTIONS[currentSectionIndex]?.label} ({currentSectionIndex + 1}/{SECTIONS.length})
      </p>
    </div>
  )
}
