"use client"

import { useState } from "react"
import { ComponentPage, VariantSection, VariantCard } from "@/components/design-system/component-page"
import { RatingInput, RatingDisplay } from "@/components/design-system/input/rating"

export default function RatingPage() {
  const [ratingValue, setRatingValue] = useState(3)

  return (
    <ComponentPage
      title="Rating"
      description="Rating components allow users to view or input ratings using a star-based system."
    >
      <VariantSection title="Rating Types">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="Rating Input"
            description="Interactive rating component that allows users to give a score out of 5."
            code="<RatingInput />"
          >
            <RatingInput label="Label" value={ratingValue} onChange={setRatingValue} maxRating={5} />
          </VariantCard>

          <VariantCard
            name="Rating Display"
            description="Non-interactive component that shows the received or aggregated score."
            code="<RatingDisplay />"
          >
            <RatingDisplay value={4.7} maxRating={5} reviewCount={4220} showScore={true} />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="States and Variants">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VariantCard
            name="Default / Empty"
            description="Rating with no stars selected."
            code="<RatingInput value={0} />"
          >
            <RatingInput label="Label" value={0} onChange={() => {}} maxRating={5} />
          </VariantCard>

          <VariantCard name="Filled" description="Rating with some stars selected." code="<RatingInput value={3} />">
            <RatingInput label="Label" value={3} onChange={() => {}} maxRating={5} />
          </VariantCard>

          <VariantCard
            name="Disabled"
            description="Non-interactive disabled state."
            code="<RatingInput disabled={true} />"
          >
            <RatingInput label="Label" value={3} onChange={() => {}} maxRating={5} disabled={true} />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Rating Display Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VariantCard
            name="With Score"
            description="Rating display with numeric score shown."
            code="<RatingDisplay value={4.7} showScore={true} />"
          >
            <RatingDisplay value={4.7} maxRating={5} showScore={true} />
          </VariantCard>

          <VariantCard
            name="With Review Count"
            description="Rating display with number of reviews."
            code="<RatingDisplay value={4.7} reviewCount={4220} />"
          >
            <RatingDisplay value={4.7} maxRating={5} reviewCount={4220} />
          </VariantCard>

          <VariantCard name="Small Size" description="Compact rating display." code='<RatingDisplay size="small" />'>
            <RatingDisplay value={4.7} maxRating={5} reviewCount={4220} size="small" />
          </VariantCard>

          <VariantCard
            name="Half Stars"
            description="Rating display with half-star precision."
            code="<RatingDisplay value={3.5} />"
          >
            <RatingDisplay value={3.5} maxRating={5} />
          </VariantCard>
        </div>
      </VariantSection>

      <VariantSection title="Properties">
        <div className="space-y-8">
          <div>
            <h4 className="text-large-callout text-content-primary mb-3">RatingInput Props</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Required Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Current
                    rating value
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">onChange</code> - Function
                    called when rating changes
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Optional Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">label</code> - Label text
                    above the rating
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">maxRating</code> - Maximum
                    rating value (default: 5)
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">disabled</code> - Disables
                    the rating input
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-large-callout text-content-primary mb-3">RatingDisplay Props</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Required Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">value</code> - Rating value
                    to display
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-middle-callout text-content-primary mb-3">Optional Props</h5>
                <ul className="space-y-2 text-middle-reg text-content-secondary">
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">maxRating</code> - Maximum
                    rating value (default: 5)
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">reviewCount</code> - Number
                    of reviews
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">showScore</code> - Show
                    numeric score (default: false)
                  </li>
                  <li>
                    <code className="text-small-reg bg-background-display px-2 py-1 rounded">size</code> - Size of stars
                    (small, medium)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </VariantSection>
    </ComponentPage>
  )
}
