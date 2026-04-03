"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Dialog } from "@/components/design-system/dialog"
import { Button } from "@/components/design-system/button"
import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export default function DialogPage() {
  const [showDialog, setShowDialog] = useState(false)
  const [showWithIllustration, setShowWithIllustration] = useState(false)

  return (
    <ComponentPage
      title="Dialog"
      description="Dialogs appear on top of the main content and requires the user's attention/confirmation/decision before they can continue interacting with the rest of the interface."
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Examples</h3>
          <div className="space-y-4">
            <Button onClick={() => setShowDialog(true)}>Show Basic Dialog</Button>

            <Button onClick={() => setShowWithIllustration(true)}>Show Dialog with Illustration</Button>
          </div>
        </div>
      </div>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        title="Dialog Header"
        subtitle="This is the body of the dialog. It is meant to explain the dialog to the user."
        primaryAction={{
          text: "Primary",
          onClick: () => setShowDialog(false),
        }}
        secondaryAction={{
          text: "Secondary",
          onClick: () => setShowDialog(false),
        }}
      />

      <Dialog
        open={showWithIllustration}
        onClose={() => setShowWithIllustration(false)}
        title="Dialog Header"
        subtitle="This is the body of the dialog. It is meant to explain the dialog to the user."
        illustration={
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-gray-400" />
          </div>
        }
        primaryAction={{
          text: "Primary",
          onClick: () => setShowWithIllustration(false),
        }}
        secondaryAction={{
          text: "Secondary",
          onClick: () => setShowWithIllustration(false),
        }}
      />
    </ComponentPage>
  )
}
