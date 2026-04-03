"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { Snackbar } from "@/components/design-system/snackbar"
import { Button } from "@/components/design-system/button"
import { useState } from "react"

export default function SnackbarPage() {
  const [showBasic, setShowBasic] = useState(false)
  const [showWithAction, setShowWithAction] = useState(false)

  return (
    <ComponentPage
      title="Snackbar"
      description="Snackbars provide brief messages about app processes at the bottom of the screen."
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Examples</h3>
          <div className="space-y-4">
            <Button onClick={() => setShowBasic(true)}>Show Basic Snackbar</Button>

            <Button onClick={() => setShowWithAction(true)}>Show Snackbar with Action</Button>
          </div>
        </div>
      </div>

      {showBasic && (
        <Snackbar
          message="This is a basic snackbar message"
          onClose={() => setShowBasic(false)}
          autoHideDuration={3000}
        />
      )}

      {showWithAction && (
        <Snackbar
          message="This snackbar has an action"
          action={{
            label: "Undo",
            onClick: () => {
              console.log("Undo clicked")
              setShowWithAction(false)
            },
          }}
          onClose={() => setShowWithAction(false)}
          autoHideDuration={5000}
        />
      )}
    </ComponentPage>
  )
}
