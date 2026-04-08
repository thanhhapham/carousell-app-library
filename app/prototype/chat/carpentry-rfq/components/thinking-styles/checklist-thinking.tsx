"use client"

import { useState, useEffect, useRef } from "react"
import { Check, ChevronUp, X } from "lucide-react"
import { BotAvatar } from "../bot-avatar"
import type { ThinkingStep } from "../conversation-engine"

interface ChecklistThinkingProps {
  steps: ThinkingStep[]
  isUnsupported?: boolean
  onComplete: () => void
  onUnsupported?: () => void
}

const WINDOW_SIZE = 3

export function ChecklistThinking({ steps, isUnsupported, onComplete, onUnsupported }: ChecklistThinkingProps) {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [showStop, setShowStop] = useState(false)
  const cancelledRef = useRef(false)

  useEffect(() => {
    cancelledRef.current = false
    setRevealedCount(0)
    setExpanded(false)
    setIsDone(false)
    setShowStop(false)
    let timer: NodeJS.Timeout

    const revealNext = (idx: number) => {
      if (cancelledRef.current) return
      if (idx >= steps.length) {
        if (isUnsupported) {
          // Show the "stop" row, then call onUnsupported
          setShowStop(true)
          timer = setTimeout(() => {
            if (!cancelledRef.current) onUnsupported?.()
          }, 800)
        } else {
          setIsDone(true)
          timer = setTimeout(() => {
            if (!cancelledRef.current) onComplete()
          }, 600)
        }
        return
      }
      timer = setTimeout(() => {
        if (cancelledRef.current) return
        setRevealedCount(idx + 1)
        revealNext(idx + 1)
      }, 750)
    }

    timer = setTimeout(() => revealNext(0), 400)

    return () => {
      cancelledRef.current = true
      clearTimeout(timer)
    }
  }, [steps, isUnsupported, onComplete, onUnsupported])

  const revealedSteps = steps.slice(0, revealedCount)
  const hiddenCount = Math.max(0, revealedCount - WINDOW_SIZE)
  const visibleSteps = expanded ? revealedSteps : revealedSteps.slice(-WINDOW_SIZE)

  return (
    <div className="flex gap-3 px-4 py-2">
      <BotAvatar />
      <div className="max-w-[85%] min-w-0 border border-stroke-boundary rounded-2xl rounded-bl-md overflow-hidden">

        {/* Collapsed overflow — "N more findings" pill */}
        {!expanded && hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(true)}
            className="w-full flex items-center gap-1.5 px-4 py-2 bg-background-display border-b border-stroke-boundary hover:bg-background-display/80 transition-colors"
          >
            <ChevronUp className="w-3.5 h-3.5 text-content-subdued flex-shrink-0" />
            <span className="text-tiny-reg text-content-subdued">
              {hiddenCount} more finding{hiddenCount !== 1 ? "s" : ""}
            </span>
          </button>
        )}

        <div className="px-4 py-3 flex flex-col gap-2.5">
          {visibleSteps.map((step) => (
            <div
              key={step.id}
              className="flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-1 duration-200"
            >
              <div className="w-4 h-4 rounded-full bg-content-positive/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-content-positive" strokeWidth={3} />
              </div>
              <span className="text-tiny-reg text-content-subdued flex-shrink-0">{step.label}</span>
              <span className="text-small-reg text-content-primary truncate">{step.result}</span>
            </div>
          ))}

          {/* Unsupported stop row */}
          {showStop && (
            <div className="flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-1 duration-200">
              <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X className="w-2.5 h-2.5 text-red-500" strokeWidth={3} />
              </div>
              <span className="text-small-reg text-content-subdued italic">Category not supported — stopping</span>
            </div>
          )}

          {/* Live "still reading" indicator */}
          {!isDone && !showStop && (
            <div className="flex items-center gap-2.5 animate-in fade-in duration-200">
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <div className="flex gap-0.5">
                  <span className="w-1 h-1 bg-content-subdued rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1 h-1 bg-content-subdued rounded-full animate-bounce [animation-delay:100ms]" />
                  <span className="w-1 h-1 bg-content-subdued rounded-full animate-bounce [animation-delay:200ms]" />
                </div>
              </div>
              <span className="text-small-reg text-content-subdued italic">Reading message…</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
