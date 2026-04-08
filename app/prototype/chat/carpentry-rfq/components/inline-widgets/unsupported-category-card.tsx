"use client"

import { ExternalLink, Search } from "lucide-react"
import type { SearchLink } from "../conversation-engine"

interface UnsupportedCategoryCardProps {
  category: string
  searchLinks: SearchLink[]
}

export function UnsupportedCategoryCard({ category, searchLinks }: UnsupportedCategoryCardProps) {
  return (
    <div className="ml-11 mr-4 mt-1 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="rounded-2xl border border-stroke-boundary overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2.5 px-4 py-3 bg-background-display border-b border-stroke-boundary">
          <div className="w-7 h-7 rounded-full bg-background-display border border-stroke-boundary flex items-center justify-center flex-shrink-0">
            <Search className="w-3.5 h-3.5 text-content-subdued" />
          </div>
          <div>
            <p className="text-small-callout font-semibold text-content-primary">
              Browse on Carousell
            </p>
            <p className="text-tiny-reg text-content-subdued">
              Find {category} providers near you
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="px-4 py-3 flex flex-col gap-2">
          {searchLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl border border-stroke-boundary hover:border-stroke-interactive hover:bg-background-display transition-all group"
            >
              <span className="text-small-reg text-content-primary group-hover:text-content-interactive transition-colors">
                {link.label}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-content-subdued group-hover:text-content-interactive transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
