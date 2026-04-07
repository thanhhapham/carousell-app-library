"use client"

export function TypingIndicator() {
  return (
    <div className="flex gap-3 px-4 py-2">
      {/* Bot avatar */}
      <div className="w-8 h-8 rounded-full bg-background-interactive-tint flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-content-interactive">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/* Typing dots */}
      <div className="px-4 py-3 rounded-2xl rounded-bl-md border border-stroke-boundary flex items-center gap-1.5">
        <span className="w-2 h-2 bg-content-subdued rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 bg-content-subdued rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 bg-content-subdued rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  )
}
