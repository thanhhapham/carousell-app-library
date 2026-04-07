"use client"

import { useState } from "react"
import { Info, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoExpandableProps {
  text: string
}

export function InfoExpandable({ text }: InfoExpandableProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="ml-11 mr-4 mt-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-small-reg text-content-interactive hover:text-content-interactive/80 transition-colors py-1"
      >
        <Info size={14} />
        <span>{expanded ? "Hide tip" : "How to measure"}</span>
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", expanded && "rotate-180")}
        />
      </button>

      {expanded && (
        <div className="ml-0 mt-1 p-3 bg-background-display rounded-lg">
          <p className="text-small-reg text-content-secondary">{text}</p>
        </div>
      )}
    </div>
  )
}
