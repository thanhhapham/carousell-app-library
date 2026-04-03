"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Demo } from "@/components/design-system/demo"
import { Voucher } from "@/components/design-system/voucher"

const PercentIcon = () => (
  <div className="w-8 h-8 bg-content-positive rounded-full flex items-center justify-center">
    <span className="text-content-on-dark text-small-callout font-bold">%</span>
  </div>
)

export default function VoucherPage() {
  return (
    <ComponentPage title="Voucher" description="Voucher components for displaying promotional offers and discounts.">
      <Demo title="Basic Voucher">
        <div className="space-y-4">
          <Voucher
            title="Spend $15, get 5% off"
            subtitle="Capped at $2"
            icon={<PercentIcon />}
            onClick={() => console.log("Voucher clicked")}
          />

          <Voucher
            title="Free shipping on orders over $50"
            subtitle="Valid until end of month"
            icon={<PercentIcon />}
          />

          <Voucher title="Buy 2 get 1 free" icon={<PercentIcon />} />
        </div>
      </Demo>

      <Demo title="Voucher Row">
        <div className="flex gap-3 overflow-x-auto">
          <Voucher
            title="Spend $15, get 5% off"
            subtitle="Capped at $2"
            icon={<PercentIcon />}
            className="min-w-[200px]"
          />
          <Voucher
            title="Free delivery"
            subtitle="On orders over $30"
            icon={<PercentIcon />}
            className="min-w-[200px]"
          />
        </div>
      </Demo>
    </ComponentPage>
  )
}
