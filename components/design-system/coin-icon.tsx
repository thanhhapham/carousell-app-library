interface CoinIconProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export function CoinIcon({ size = "medium", className = "" }: CoinIconProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="10" fill="#00A699" stroke="#008A7B" strokeWidth="1" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          C
        </text>
      </svg>
    </div>
  )
}
