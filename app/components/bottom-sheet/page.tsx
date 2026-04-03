"use client"

import { ComponentPage } from "@/components/design-system/component-page"
import { BottomSheet } from "@/components/design-system/bottom-sheet"
import { Button } from "@/components/design-system/button"
import { useState } from "react"

export default function BottomSheetPage() {
  const [showSheet, setShowSheet] = useState(false)
  const [showWithTitle, setShowWithTitle] = useState(false)

  return (
    <ComponentPage
      title="Bottom Sheet"
      description="Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen."
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Examples</h3>
          <div className="space-y-4">
            <Button onClick={() => setShowSheet(true)}>Show Basic Bottom Sheet</Button>

            <Button onClick={() => setShowWithTitle(true)}>Show Bottom Sheet with Title</Button>
          </div>
        </div>
      </div>

      <BottomSheet open={showSheet} onClose={() => setShowSheet(false)}>
        <div className="p-4">
          <p className="text-sm text-content-secondary">This is a basic bottom sheet with content.</p>
          <div className="mt-4">
            <Button variant="primary" primaryVariant="promote" onClick={() => setShowSheet(false)} fullWidth>
              Close
            </Button>
          </div>
        </div>
      </BottomSheet>

      <BottomSheet open={showWithTitle} onClose={() => setShowWithTitle(false)} title="Bottom Sheet Title">
        <div className="p-4">
          <p className="text-sm text-content-secondary">This bottom sheet has a title and content.</p>
          <div className="mt-4">
            <Button variant="primary" primaryVariant="promote" onClick={() => setShowWithTitle(false)} fullWidth>
              Close
            </Button>
          </div>
        </div>
      </BottomSheet>
    </ComponentPage>
  )
}
