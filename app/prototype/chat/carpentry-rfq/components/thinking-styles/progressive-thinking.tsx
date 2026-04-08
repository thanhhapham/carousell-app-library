"use client"

import { useEffect, useRef } from "react"

interface ProgressiveThinkingProps {
  turns: string[]
  isUnsupported?: boolean
  onComplete: () => void
  onUnsupported?: () => void
  onAddMessage: (text: string) => void
}

export function ProgressiveThinking({ turns, isUnsupported, onComplete, onUnsupported, onAddMessage }: ProgressiveThinkingProps) {
  const cancelledRef = useRef(false)

  useEffect(() => {
    cancelledRef.current = false

    let timer: NodeJS.Timeout

    const sendTurn = (idx: number) => {
      if (cancelledRef.current) return
      if (idx >= turns.length) {
        // After all turns, call the appropriate completion handler
        timer = setTimeout(() => {
          if (cancelledRef.current) return
          if (isUnsupported) {
            onUnsupported?.()
          } else {
            onComplete()
          }
        }, 600)
        return
      }

      onAddMessage(turns[idx])
      timer = setTimeout(() => sendTurn(idx + 1), 1200)
    }

    timer = setTimeout(() => sendTurn(0), 500)

    return () => {
      cancelledRef.current = true
      clearTimeout(timer)
    }
  }, [turns, isUnsupported, onComplete, onUnsupported, onAddMessage])

  return null
}
