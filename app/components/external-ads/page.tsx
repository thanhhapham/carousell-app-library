"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { ExternalAds } from "@/components/design-system/external-ads"

export default function ExternalAdsPage() {
  return (
    <ComponentPage
      title="External Ads"
      description="Advertisement component for external promotions and sponsored content."
    >
      <div className="space-y-8">
        {/* Default Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Default</h3>
          <div className="max-w-sm">
            <ExternalAds onButtonClick={() => console.log("Ad clicked")} />
          </div>
        </div>

        {/* Custom Content Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Custom Content</h3>
          <div className="max-w-sm">
            <ExternalAds
              title="Discover premium fashion collections"
              subtitle="Exclusive deals on luxury items this week only."
              brandName="Fashion Co"
              brandLogo="F"
              buttonText="Shop now"
              onButtonClick={() => console.log("Custom ad clicked")}
            />
          </div>
        </div>

        {/* Different Image Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">With Different Image</h3>
          <div className="max-w-sm">
            <ExternalAds
              title="Tech gadgets at unbeatable prices"
              subtitle="Limited time offers on electronics and accessories."
              brandName="TechStore"
              brandLogo="T"
              buttonText="Browse deals"
              imageUrl="/images/banner-home.png"
              imageAlt="Tech Banner"
              onButtonClick={() => console.log("Tech ad clicked")}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
