"use client"

import { Button } from "../button"
import { Card } from "../card"
import type { HotItemCardProps } from "./types"

export function HotItemCard({ title, searchCount, imageSrc, onListClick }: HotItemCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="aspect-square relative">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm opacity-90">More than {searchCount.toLocaleString()} searches for it lately</p>
          <Button
            variant="primary"
            primaryVariant="task"
            size="small"
            className="mt-2 bg-[#00A699] border-[#00A699]"
            onClick={onListClick}
          >
            List this
          </Button>
        </div>
      </div>
    </Card>
  )
}
