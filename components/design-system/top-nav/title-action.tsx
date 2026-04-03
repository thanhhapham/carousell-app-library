"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, X, User, MoreHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type React from "react"

interface TopNavProps {
  title: string
  variant?: "normal" | "shrunk"
  showBackButton?: boolean
  showCloseButton?: boolean
  showProfile?: boolean
  showMoreActions?: boolean
  showTitleChevron?: boolean
  onBack?: () => void
  onClose?: () => void
  actions?: React.ReactNode
  className?: string
}

export function TopNav({
  title,
  variant = "normal",
  showBackButton = false,
  showCloseButton = false,
  showProfile = true,
  showMoreActions = true,
  showTitleChevron = false,
  onBack,
  onClose,
  actions,
  className,
}: TopNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentVariant = variant === "normal" ? (isScrolled ? "shrunk" : "normal") : variant

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-background-base border-b transition-all duration-200",
        currentVariant === "shrunk" ? "border-stroke-boundary" : "border-transparent",
        className,
      )}
    >
      {/* Status bar simulation */}
      <div className="h-3 bg-background-base" />

      <div className="px-4 transition-all duration-200">
        {/* Top row - Navigation controls */}
        <div
          className="flex items-center justify-between transition-all duration-200"
          style={{ height: currentVariant === "normal" ? "48px" : "40px" }}
        >
          {/* Left section - Navigation icon */}
          <div className="flex items-center">
            {showBackButton && (
              <Button variant="ghost" size="icon" onClick={onBack} className="h-6 w-6 p-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}

            {showCloseButton && (
              <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 p-0">
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Custom actions */}
            {actions}

            {/* Profile */}
            {showProfile && (
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                  <AvatarFallback className="text-xs">
                    <User className="h-3 w-3" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            )}

            {/* More actions */}
            {showMoreActions && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Help</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Bottom row - Title */}
        <div
          className="flex items-center gap-2 transition-all duration-200"
          style={{
            height: currentVariant === "normal" ? "40px" : "32px",
            paddingBottom: currentVariant === "normal" ? "8px" : "4px",
          }}
        >
          <h1
            className={cn(
              "text-content-primary font-bold transition-all duration-200",
              currentVariant === "normal" ? "text-title-2" : "text-large-callout",
            )}
          >
            {title}
          </h1>
          {showTitleChevron && (
            <ChevronDown
              className={cn(
                "text-content-secondary transition-all duration-200",
                currentVariant === "normal" ? "h-5 w-5" : "h-4 w-4",
              )}
            />
          )}
        </div>
      </div>

      {/* Scrollable border */}
      {currentVariant === "shrunk" && <div className="h-px bg-stroke-boundary" />}
    </nav>
  )
}

// Add the TopNavTitleAction export alias
export const TopNavTitleAction = TopNav
