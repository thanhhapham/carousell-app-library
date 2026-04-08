"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Check, AlertCircle } from "lucide-react"
import { QUESTIONS, SECTIONS, type QuestionId, type Answer } from "../conversation-engine"

interface SkeletonThinkingProps {
  extractedAnswers: Map<QuestionId, Answer>
  isUnsupported?: boolean
  onComplete: () => void
  onUnsupported?: () => void
}

export function SkeletonThinking({ extractedAnswers, isUnsupported, onComplete, onUnsupported }: SkeletonThinkingProps) {
  const [revealedFields, setRevealedFields] = useState<Set<QuestionId>>(new Set())
  const [unsupportedVisible, setUnsupportedVisible] = useState(false)
  const cancelledRef = useRef(false)

  const fieldsToReveal = useMemo(
    () => QUESTIONS.filter((q) => extractedAnswers.has(q.id)).map((q) => q.id),
    [extractedAnswers],
  )

  useEffect(() => {
    cancelledRef.current = false
    setRevealedFields(new Set())
    setUnsupportedVisible(false)
    let timer: NodeJS.Timeout

    if (isUnsupported) {
      // Brief shimmer, then reveal unsupported state
      timer = setTimeout(() => {
        if (cancelledRef.current) return
        setUnsupportedVisible(true)
        timer = setTimeout(() => {
          if (!cancelledRef.current) onUnsupported?.()
        }, 900)
      }, 1000)
      return () => { cancelledRef.current = true; clearTimeout(timer) }
    }

    const revealNext = (idx: number) => {
      if (cancelledRef.current) return
      if (idx >= fieldsToReveal.length) {
        timer = setTimeout(() => {
          if (!cancelledRef.current) onComplete()
        }, 800)
        return
      }
      timer = setTimeout(() => {
        if (cancelledRef.current) return
        setRevealedFields((prev) => new Set([...prev, fieldsToReveal[idx]]))
        revealNext(idx + 1)
      }, 600)
    }

    timer = setTimeout(() => revealNext(0), 500)
    return () => { cancelledRef.current = true; clearTimeout(timer) }
  }, [fieldsToReveal, isUnsupported, onComplete, onUnsupported])

  if (isUnsupported) {
    return (
      <div className="ml-11 mr-4 mt-1 mb-2">
        <div
          className={`border-2 rounded-2xl overflow-hidden transition-colors duration-500 ${
            unsupportedVisible ? "border-red-200" : "border-stroke-boundary"
          }`}
        >
          {/* Header */}
          <div className={`px-4 py-3 border-b transition-colors duration-500 ${
            unsupportedVisible ? "bg-red-50 border-red-100" : "bg-background-display border-stroke-boundary"
          }`}>
            <div className="flex items-center gap-2">
              {unsupportedVisible ? (
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-background-display animate-pulse" />
              )}
              <span className={`text-small-callout font-bold transition-colors duration-300 ${
                unsupportedVisible ? "text-red-600" : "text-content-primary"
              }`}>
                {unsupportedVisible ? "Category not supported" : "Your Carpentry Request"}
              </span>
            </div>
          </div>

          {/* Shimmer rows */}
          <div className="px-4 py-3 flex flex-col gap-3">
            {unsupportedVisible ? (
              <p className="text-small-reg text-red-400 italic">
                This doesn't look like a carpentry request — stopping here.
              </p>
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between gap-3">
                  <div className={`h-3 rounded bg-background-display animate-pulse`} style={{ width: `${30 + i * 12}%` }} />
                  <div className="h-3 w-20 rounded bg-background-display animate-pulse" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ml-11 mr-4 mt-1 mb-2">
      <div className="border-2 border-stroke-boundary rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
        {/* Header */}
        <div className="px-4 py-3 border-b border-stroke-boundary bg-background-display">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-content-interactive/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-content-interactive">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-small-callout font-bold text-content-primary">Your Carpentry Request</span>
          </div>
        </div>

        {/* Sections */}
        {SECTIONS.map((section) => {
          const sectionQuestions = QUESTIONS.filter((q) => q.section === section.id)
          if (sectionQuestions.length === 0) return null
          return (
            <div key={section.id} className="px-4 py-3 border-b border-stroke-boundary last:border-b-0">
              <p className="text-tiny-reg font-bold text-content-subdued uppercase tracking-wider mb-2">{section.label}</p>
              <div className="flex flex-col gap-2">
                {sectionQuestions.map((q) => {
                  const isRevealed = revealedFields.has(q.id)
                  const answer = extractedAnswers.get(q.id)
                  return (
                    <div key={q.id} className="flex items-center justify-between gap-3">
                      <span className="text-small-reg text-content-secondary flex-shrink-0">{q.label}</span>
                      <div className="flex-1 flex justify-end">
                        {isRevealed && answer ? (
                          <div className="flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-300">
                            <Check className="w-3.5 h-3.5 text-content-positive" strokeWidth={2.5} />
                            <span className="text-small-callout text-content-interactive font-medium">{answer.displayValue}</span>
                          </div>
                        ) : isRevealed ? (
                          <span className="text-small-reg text-content-subdued">—</span>
                        ) : (
                          <div className="h-4 w-24 rounded bg-background-display animate-pulse" />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
