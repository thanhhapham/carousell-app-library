"use client"

import { useState, useEffect, useRef } from "react"
import { BotAvatar } from "../bot-avatar"

interface ThoughtStreamThinkingProps {
  thoughts: string[]
  isUnsupported?: boolean
  onComplete: () => void
  onUnsupported?: () => void
}

export function ThoughtStreamThinking({ thoughts, isUnsupported, onComplete, onUnsupported }: ThoughtStreamThinkingProps) {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [visible, setVisible] = useState(true)
  const [stopped, setStopped] = useState(false)
  const cancelledRef = useRef(false)

  useEffect(() => {
    cancelledRef.current = false
    setCurrentIdx(-1)
    setVisible(true)
    setStopped(false)

    let timer: NodeJS.Timeout

    const showThought = (idx: number) => {
      if (cancelledRef.current) return

      if (idx >= thoughts.length) {
        if (isUnsupported) {
          // Fade out, show stopped state, call onUnsupported
          setVisible(false)
          timer = setTimeout(() => {
            if (cancelledRef.current) return
            setStopped(true)
            setVisible(true)
            timer = setTimeout(() => {
              if (!cancelledRef.current) onUnsupported?.()
            }, 900)
          }, 250)
        } else {
          timer = setTimeout(() => {
            if (!cancelledRef.current) onComplete()
          }, 700)
        }
        return
      }

      if (idx > 0) {
        setVisible(false)
        timer = setTimeout(() => {
          if (cancelledRef.current) return
          setCurrentIdx(idx)
          setVisible(true)
          timer = setTimeout(() => showThought(idx + 1), 1400)
        }, 250)
      } else {
        setCurrentIdx(0)
        setVisible(true)
        timer = setTimeout(() => showThought(idx + 1), 1400)
      }
    }

    timer = setTimeout(() => showThought(0), 400)

    return () => {
      cancelledRef.current = true
      clearTimeout(timer)
    }
  }, [thoughts, isUnsupported, onComplete, onUnsupported])

  const currentThought = currentIdx >= 0 ? thoughts[currentIdx] : null

  return (
    <div className="flex gap-3 px-4 py-2">
      <BotAvatar />
      <div className={`flex-1 min-w-0 max-w-[80%] rounded-2xl rounded-bl-md overflow-hidden transition-colors duration-500 ${
        stopped
          ? "border border-dashed border-red-200 bg-red-50"
          : "border border-dashed border-stroke-boundary bg-background-display"
      }`}>
        {/* Header */}
        <div className="flex items-center gap-1.5 px-3.5 pt-3 pb-2">
          {stopped ? (
            <span className="text-tiny-reg font-medium text-red-400 tracking-wide">Stopped</span>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-content-interactive opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-content-interactive" />
              </span>
              <span className="text-tiny-reg font-medium text-content-interactive tracking-wide">Thinking</span>
            </>
          )}
        </div>

        {/* Thought text */}
        <div className="px-3.5 pb-3 min-h-[2.5rem] flex items-start">
          <p
            className={`text-small-reg italic leading-relaxed transition-opacity duration-200 ${
              stopped ? "text-red-400 not-italic" : "text-content-secondary"
            }`}
            style={{ opacity: visible && (currentThought || stopped) ? 1 : 0 }}
          >
            {stopped ? "This isn't a carpentry request — can't process this one." : (currentThought ?? "")}
          </p>
        </div>
      </div>
    </div>
  )
}
