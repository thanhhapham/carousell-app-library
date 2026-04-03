"use client"

import type * as React from "react"
import { useState, useEffect } from "react"
import { ArrowLeft, Search, X, ShoppingCart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TopNavSearchProps {
  variant?: "default" | "with-back" | "typing" | "typed" | "vertical"
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  onBack?: () => void
  onClear?: () => void
  onSearch?: (query: string) => void
  showCart?: boolean
  cartCount?: number
  onCartClick?: () => void
  showMore?: boolean
  onMoreClick?: () => void
  className?: string
}

export function TopNavSearch({
  variant = "default",
  placeholder = "Search",
  value = "",
  onValueChange,
  onBack,
  onClear,
  onSearch,
  showCart = true,
  cartCount = 0,
  onCartClick,
  showMore = true,
  onMoreClick,
  className,
}: TopNavSearchProps) {
  const [internalValue, setInternalValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleClear = () => {
    setInternalValue("")
    onValueChange?.("")
    onClear?.()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(internalValue)
  }

  const showBackButton = variant === "with-back" || variant === "typing" || variant === "typed"
  const showSearchIcon = variant === "default" || variant === "with-back"
  const showClearButton = (variant === "typing" || variant === "typed") && internalValue.length > 0

  return (
    <nav className={cn("sticky top-0 z-50 w-full bg-background-base border-b border-stroke-boundary", className)}>
      {/* Status bar simulation */}
      <div className="h-3 bg-background-base" />

      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Back button */}
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8 p-0 flex-shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Search input */}
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-content-subdued">
                {showSearchIcon && <Search className="h-4 w-4" />}
              </div>
              <input
                type="text"
                value={internalValue}
                onChange={(e) => handleValueChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className={cn(
                  "w-full h-10 rounded-lg border border-stroke-input bg-background-input",
                  "text-middle-reg text-content-primary placeholder:text-content-subdued",
                  "focus:outline-none focus:ring-2 focus:ring-stroke-halo-focused focus:border-stroke-interactive",
                  "transition-all duration-200",
                  showSearchIcon ? "pl-10 pr-10" : "pl-4 pr-10",
                )}
              />
              {showClearButton && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-content-subdued hover:text-content-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Cart */}
            {showCart && (
              <Button variant="ghost" size="icon" onClick={onCartClick} className="h-8 w-8 p-0 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-core-primary2 text-content-on-dark text-tiny-reg font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                    {cartCount}
                  </div>
                )}
              </Button>
            )}

            {/* More actions */}
            {showMore && (
              <Button variant="ghost" size="icon" onClick={onMoreClick} className="h-8 w-8 p-0">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Vertical variant additional content */}
        {variant === "vertical" && (
          <div className="mt-3 flex gap-2">
            <Button variant="text" size="small">
              Rent
            </Button>
            <Button variant="text" size="small">
              Buy
            </Button>
            <Button variant="text" size="small">
              Commercial
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
