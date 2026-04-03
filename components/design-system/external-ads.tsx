"use client"

import Image from "next/image"

interface ExternalAdsProps {
  title?: string
  subtitle?: string
  brandName?: string
  brandLogo?: string
  buttonText?: string
  imageUrl?: string
  imageAlt?: string
  onButtonClick?: () => void
}

export function ExternalAds({
  title = "Decorate with modern minimalist home goods",
  subtitle = "Lots of items on sales for a limited time only.",
  brandName = "Dior",
  brandLogo = "D",
  buttonText = "Visit site now",
  imageUrl = "/images/miss-dior-ad.png",
  imageAlt = "Miss Dior Advertisement",
  onButtonClick,
}: ExternalAdsProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stroke-boundary">
      {/* Banner Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-content-primary leading-tight">{title}</h3>

        {/* Subtitle */}
        <p className="text-small-reg text-content-secondary">{subtitle}</p>

        {/* Brand Info */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">{brandLogo}</span>
          </div>
          <span className="text-small-reg text-content-secondary">{brandName} • Ad</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
