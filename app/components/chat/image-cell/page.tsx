"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ImageCell } from "@/components/design-system/chat/image-cell"

export default function ImageCellPage() {
  return (
    <ComponentPage
      title="Image Cell"
      description="Component for displaying shared images in chat with support for multiple images."
      imageSrc="/image-cell.png"
    >
      <div className="space-y-8">
        {/* Single Image */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Single Image</h3>
          <div className="bg-background-base p-4 rounded-lg">
            <ImageCell images={["/placeholder.svg?height=200&width=300"]} />
          </div>
        </div>

        {/* Multiple Images */}
        <div>
          <h3 className="text-title-4 text-content-primary mb-4">Multiple Images</h3>
          <div className="bg-background-base p-4 rounded-lg space-y-4">
            <ImageCell
              images={[
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
              ]}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
