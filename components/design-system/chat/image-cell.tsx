"use client"
import { cn } from "@/lib/utils"

interface ImageCellProps {
  images: string[]
  onImageClick?: (index: number) => void
  className?: string
  maxWidth?: number
}

export function ImageCell({ images, onImageClick, className, maxWidth = 300 }: ImageCellProps) {
  const imageCount = images.length

  if (imageCount === 0) return null

  if (imageCount === 1) {
    return (
      <div className={cn("flex justify-start", className)}>
        <div
          className="rounded-lg overflow-hidden cursor-pointer"
          style={{ maxWidth: `${maxWidth}px` }}
          onClick={() => onImageClick?.(0)}
        >
          <img src={images[0] || "/placeholder.svg"} alt="Shared image" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  }

  if (imageCount === 2) {
    return (
      <div className={cn("flex gap-2", className)} style={{ maxWidth: `${maxWidth}px` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-1 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Shared image ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
    )
  }

  if (imageCount === 3) {
    return (
      <div className={cn("flex gap-2", className)} style={{ maxWidth: `${maxWidth}px` }}>
        <div className="flex-1 rounded-lg overflow-hidden cursor-pointer" onClick={() => onImageClick?.(0)}>
          <img src={images[0] || "/placeholder.svg"} alt="Shared image 1" className="w-full h-40 object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {images.slice(1).map((image, index) => (
            <div
              key={index + 1}
              className="rounded-lg overflow-hidden cursor-pointer"
              onClick={() => onImageClick?.(index + 1)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Shared image ${index + 2}`}
                className="w-full h-[76px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // For 4+ images, show first 3 and a "+X more" overlay
  return (
    <div className={cn("flex gap-2", className)} style={{ maxWidth: `${maxWidth}px` }}>
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer" onClick={() => onImageClick?.(0)}>
        <img src={images[0] || "/placeholder.svg"} alt="Shared image 1" className="w-full h-40 object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => onImageClick?.(1)}>
          <img src={images[1] || "/placeholder.svg"} alt="Shared image 2" className="w-full h-[76px] object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={() => onImageClick?.(2)}>
          <img src={images[2] || "/placeholder.svg"} alt="Shared image 3" className="w-full h-[76px] object-cover" />
          {imageCount > 3 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-content-on-dark text-middle-med font-bold">+{imageCount - 3}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
