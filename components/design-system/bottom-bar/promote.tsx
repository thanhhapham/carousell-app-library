"use client"
import { Button } from "../button"
import { Heart, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// Update the component props interface to include chat icon and rename variant
interface BottomBarPromoteProps {
  variant?: "listing" | "coins" // Changed "like" to "listing"
  price?: string | number
  subtext?: string
  helpText?: string
  primaryButton: {
    text: string
    onClick: () => void
    disabled?: boolean
  }
  secondaryButton?: {
    text: string
    onClick: () => void
    disabled?: boolean
  }
  textButton?: {
    text: string
    onClick: () => void
  }
  showLike?: boolean
  likeCount?: number
  onLikeClick?: () => void
  isLiked?: boolean
  showChat?: boolean // Added new prop
  onChatClick?: () => void // Added new prop
  className?: string
}

const CoinsIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M31.5838 15.5921C31.5878 15.5549 31.5878 15.5173 31.5838 15.4801C30.5518 -5.36789 0.439844 -4.12789 0.383844 16.2801C0.335844 37.3921 31.5838 36.1601 31.5838 15.7441C31.5882 15.6935 31.5882 15.6427 31.5838 15.5921Z"
      fill="#00AECC"
    />
    <path
      d="M15.1119 27.704C12.2177 27.7788 9.41316 26.6962 7.31995 24.696C5.30395 22.672 4.28795 19.896 4.29595 16.312C4.29595 8.05601 10.4719 4.31201 16.1759 4.31201C21.1999 4.31201 27.1999 7.25601 27.6879 15.512C27.6879 15.632 27.6879 15.744 27.6879 15.864C27.1999 23.632 22.3999 27.704 15.1119 27.704Z"
      fill="#33E1FF"
    />
    <path
      d="M19.3517 20.512C19.3007 20.3515 19.1869 20.2185 19.0362 20.1431C18.8855 20.0678 18.7108 20.0566 18.5517 20.112V20.112C16.7672 20.698 14.8084 20.066 13.7028 18.5476C12.5971 17.0292 12.5971 14.9709 13.7028 13.4525C14.8084 11.934 16.7672 11.3021 18.5517 11.888V11.888C18.7108 11.9435 18.8855 11.9323 19.0362 11.8569C19.1869 11.7816 19.3007 11.6486 19.3517 11.488L19.8877 9.88804C19.9432 9.72898 19.932 9.55426 19.8566 9.40359C19.7813 9.25293 19.6483 9.13912 19.4877 9.08804V9.08804C16.4839 8.10716 13.1901 9.17382 11.3315 11.7294C9.47284 14.285 9.47284 17.7471 11.3315 20.3027C13.1901 22.8583 16.4839 23.9249 19.4877 22.944V22.944C19.6483 22.893 19.7813 22.7791 19.8566 22.6285C19.932 22.4778 19.9432 22.3031 19.8877 22.144L19.3517 20.512Z"
      fill="#00AECC"
    />
  </svg>
)

// Update the component implementation
export function BottomBarPromote({
  variant = "coins",
  price,
  subtext,
  helpText,
  primaryButton,
  secondaryButton,
  textButton,
  showLike = false,
  likeCount,
  onLikeClick,
  isLiked = false,
  showChat = false, // Added new prop with default
  onChatClick, // Added new prop
  className,
}: BottomBarPromoteProps) {
  return (
    <div
      className={cn(
        "sticky bottom-0 left-0 right-0 bg-background-base border-t border-stroke-boundary p-4 space-y-4",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Price/Like/Chat and text */}
        <div className="flex-1 space-y-1">
          {variant === "listing" ? (
            <div className="flex items-center gap-3">
              {showLike && (
                <button
                  onClick={onLikeClick}
                  className={cn(
                    "flex items-center gap-1 transition-colors",
                    isLiked ? "text-content-negative" : "text-content-secondary hover:text-content-negative",
                  )}
                >
                  <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
                  <span className="text-title-3">{likeCount}</span>
                </button>
              )}

              {showChat && (
                <button
                  onClick={onChatClick}
                  className="flex items-center gap-1 text-content-secondary hover:text-content-interactive"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          ) : (
            price && (
              <div className="flex items-center gap-2">
                <span className="text-title-3 text-content-primary">{price}</span>
                <CoinsIcon className="flex-shrink-0" />
                {subtext && <span className="text-middle-reg text-content-secondary">{subtext}</span>}
              </div>
            )
          )}

          {/* Help text or text button */}
          {textButton ? (
            <button
              onClick={textButton.onClick}
              className="text-small-callout text-content-interactive hover:text-content-interactive-strong hover:underline"
            >
              {textButton.text}
            </button>
          ) : (
            helpText && <p className="text-middle-reg text-content-subdued">{helpText}</p>
          )}
        </div>

        {/* Right side - Buttons */}
        <div className={cn("flex gap-3", secondaryButton ? "w-full justify-end" : "")}>
          {secondaryButton && (
            <Button
              variant="secondary"
              onClick={secondaryButton.onClick}
              disabled={secondaryButton.disabled}
              size="medium"
              className={cn("flex-1", primaryButton ? "max-w-[45%]" : "")}
            >
              {secondaryButton.text}
            </Button>
          )}
          <Button
            variant="primary"
            onClick={primaryButton.onClick}
            disabled={primaryButton.disabled}
            size="medium"
            className={cn("flex-1", secondaryButton ? "max-w-[55%]" : "")}
          >
            {primaryButton.text}
          </Button>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pt-2">
        <div className="w-32 h-1 bg-content-subdued rounded-full"></div>
      </div>
    </div>
  )
}
