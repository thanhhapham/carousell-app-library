"use client"

import type { ThinkingStyle } from "../floating-toggle"
import type { ThinkingStep, QuestionId, Answer } from "../conversation-engine"
import { ChecklistThinking } from "./checklist-thinking"
import { SkeletonThinking } from "./skeleton-thinking"
import { ThoughtStreamThinking } from "./thought-stream-thinking"
import { ProgressiveThinking } from "./progressive-thinking"

interface ThinkingStyleRendererProps {
  style: ThinkingStyle
  steps: ThinkingStep[]
  extractedAnswers: Map<QuestionId, Answer>
  missingFields: QuestionId[]
  thoughtStream: string[]
  progressiveTurns: string[]
  isUnsupported?: boolean
  onComplete: () => void
  onUnsupported?: () => void
  onAddMessage: (text: string) => void
}

export function ThinkingStyleRenderer({
  style,
  steps,
  extractedAnswers,
  missingFields,
  thoughtStream,
  progressiveTurns,
  isUnsupported,
  onComplete,
  onUnsupported,
  onAddMessage,
}: ThinkingStyleRendererProps) {
  switch (style) {
    case 1:
      return (
        <ChecklistThinking
          steps={steps}
          isUnsupported={isUnsupported}
          onComplete={onComplete}
          onUnsupported={onUnsupported}
        />
      )
    case 2:
      return (
        <SkeletonThinking
          extractedAnswers={extractedAnswers}
          isUnsupported={isUnsupported}
          onComplete={onComplete}
          onUnsupported={onUnsupported}
        />
      )
    case 3:
      return (
        <ThoughtStreamThinking
          thoughts={thoughtStream}
          isUnsupported={isUnsupported}
          onComplete={onComplete}
          onUnsupported={onUnsupported}
        />
      )
    case 4:
      return (
        <ProgressiveThinking
          turns={progressiveTurns}
          isUnsupported={isUnsupported}
          onComplete={onComplete}
          onUnsupported={onUnsupported}
          onAddMessage={onAddMessage}
        />
      )
    default:
      return null
  }
}
