"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Star } from "lucide-react"
import { PrototypeLayout } from "@/components/design-system/prototype-layout"
import { Button } from "@/components/design-system/button"
import { Chip, ChipGroup } from "@/components/design-system/input/chip"

type LinkTarget = "My profile" | "A collection"

// ─── Preview Mockup ───────────────────────────────────────────────────────────

function SearchPreviewMockup() {
  return (
    <div className="bg-background-display rounded-lg overflow-hidden border border-stroke-boundary">
      {/* Shop row */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-300 to-pink-400 flex-shrink-0" />
          <div>
            <p className="text-small-callout font-bold text-content-primary text-[11px]">@ref_only_store 📣</p>
            <div className="flex items-center gap-1">
              <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] text-content-secondary">4.5 (345 reviews) · Promoted</span>
            </div>
          </div>
        </div>
        <button className="text-content-interactive text-small-callout font-bold text-[12px]">Follow</button>
      </div>

      {/* Listing grid */}
      <div className="flex gap-0.5 px-0.5 pb-0.5">
        {/* Left large image */}
        <div className="relative w-[55%] aspect-square bg-[#D4B896] rounded overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #D4B896 0%, #C4A882 50%, #B89060 100%)",
            }}
          />
          {/* View profile pill */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
            <span className="text-[9px]">👤</span> View profile
          </div>
        </div>
        {/* Right 2-up */}
        <div className="flex flex-col gap-0.5 flex-1">
          <div className="bg-[#2C2C2D] aspect-square rounded overflow-hidden" />
          <div className="bg-[#B8A090] aspect-square rounded overflow-hidden" />
        </div>
      </div>

      {/* Caption placeholder */}
      <p className="text-[11px] text-content-secondary px-3 py-2">Your caption will be shown here</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShoutoutSearchCreatePage() {
  const params = useParams()
  const id = params?.id ?? "1"

  const [linkTarget, setLinkTarget] = useState<LinkTarget>("My profile")
  const [caption, setCaption] = useState("")

  return (
    <PrototypeLayout
      bottomBar={
        <div className="border-t border-stroke-boundary px-4 py-3 flex justify-end">
          <Button
            variant="primary"
            primaryVariant="task"
            size="medium"
            onClick={() => {
              window.location.href = `/prototype/seller-tools/shoutout-search-post/${id}`
            }}
          >
            Continue
          </Button>
        </div>
      }
    >
      {/* Nav */}
      <div className="flex items-center px-4 py-3 border-b border-stroke-boundary">
        <button
          className="mr-3"
          onClick={() =>
            window.location.href = `/prototype/seller-tools/shoutout/${id}`
          }
        >
          <ArrowLeft className="w-5 h-5 text-content-primary" />
        </button>
        <div>
          <h1 className="text-title-2 font-bold text-content-primary leading-8">
            Create Shoutout:
          </h1>
          <h1 className="text-title-2 font-bold text-content-primary leading-8">
            On search results
          </h1>
        </div>
      </div>

      <div className="px-4 py-5 space-y-6">

        {/* Preview */}
        <section className="space-y-2">
          <p className="text-large-callout font-bold text-content-primary">Preview</p>
          <p className="text-middle-reg text-content-secondary leading-6">
            Buyers looking for related listings will see your Shoutout on their search results
          </p>
          <SearchPreviewMockup />
        </section>

        <div className="border-t border-stroke-boundary" />

        {/* Edit Shoutout */}
        <section className="space-y-5">
          <p className="text-large-callout font-bold text-content-primary">Edit Shoutout</p>

          {/* Links buyers to */}
          <div className="space-y-2">
            <p className="text-middle-reg text-content-secondary">Shoutout links buyers to</p>
            <ChipGroup>
              {(["My profile", "A collection"] as LinkTarget[]).map((opt) => (
                <Chip
                  key={opt}
                  label={opt}
                  selected={linkTarget === opt}
                  variant="single"
                  onClick={() => setLinkTarget(opt)}
                />
              ))}
            </ChipGroup>
          </div>

          {/* Cover images */}
          <div className="space-y-1">
            <p className="text-middle-reg text-content-secondary">Cover images</p>
            <p className="text-small-reg text-content-secondary leading-5">
              Your Shoutout will feature images from your most recent listings
            </p>
          </div>

          {/* Caption */}
          <div className="space-y-2">
            <p className="text-middle-reg text-content-secondary">Caption</p>
            <div className="relative">
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value.slice(0, 80))}
                placeholder="What's your Shoutout about?"
                className="w-full bg-background-display rounded p-3 text-large-reg text-content-primary placeholder:text-content-subdued resize-none h-[120px] text-[17px] leading-6 outline-none"
              />
              <span className="absolute bottom-2 right-3 text-small-reg text-content-secondary">
                {caption.length}/80
              </span>
            </div>
          </div>
        </section>

      </div>
    </PrototypeLayout>
  )
}
