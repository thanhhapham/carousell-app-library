"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Banner } from "@/components/design-system/banner"
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export default function BannerPage() {
  return (
    <ComponentPage
      title="Banner"
      description="A banner is used to display information prominently and provide possible actions to the user"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Variants</h3>
          <div className="space-y-4">
            <Banner
              variant="info"
              title="Title of banner"
              subtitle="This is an example for subtitle in banner. It can go up to many lines."
              icon={<Info className="w-5 h-5 text-blue-500" />}
              primaryAction={{
                text: "Text Button",
                onClick: () => console.log("Primary action"),
              }}
              secondaryAction={{
                text: "Text Button",
                onClick: () => console.log("Secondary action"),
              }}
            />

            <Banner
              variant="warning"
              title="Warning Banner"
              subtitle="This is a warning message"
              icon={<AlertTriangle className="w-5 h-5 text-yellow-500" />}
            />

            <Banner
              variant="success"
              title="Success Banner"
              subtitle="Operation completed successfully"
              icon={<CheckCircle className="w-5 h-5 text-green-500" />}
            />

            <Banner
              variant="error"
              title="Error Banner"
              subtitle="Something went wrong"
              icon={<XCircle className="w-5 h-5 text-red-500" />}
            />
          </div>
        </div>
      </div>
    </ComponentPage>
  )
}
