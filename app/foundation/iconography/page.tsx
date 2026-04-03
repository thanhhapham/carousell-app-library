import type React from "react"
import { ComponentPage } from "@/components/design-system/component-page"

// Icon factory function
interface IconProps {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | number
  ariaHidden?: boolean
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
}

function createIcon(SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>) {
  return function Icon({
    className,
    size = "md",
    ariaHidden = true,
    ...props
  }: IconProps & Omit<React.SVGProps<SVGSVGElement>, "size">) {
    const dimensions = typeof size === "number" ? size : sizeMap[size]

    return (
      <SvgComponent
        className={className}
        width={dimensions}
        height={dimensions}
        aria-hidden={ariaHidden ? "true" : undefined}
        {...props}
      />
    )
  }
}

// Your Coins SVG component
function CoinsSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M31.5838 15.592C31.5878 15.5548 31.5878 15.5172 31.5838 15.48C30.5518 -5.36801 0.439844 -4.12801 0.383844 16.28C0.335844 37.392 31.5838 36.16 31.5838 15.744C31.5882 15.6934 31.5882 15.6426 31.5838 15.592Z"
        fill="#00AECC"
      />
      <path
        d="M15.1119 27.704C12.2177 27.7788 9.41316 26.6962 7.31995 24.696C5.30395 22.672 4.28795 19.896 4.29595 16.312C4.29595 8.05601 10.4719 4.31201 16.1759 4.31201C21.1999 4.31201 27.1999 7.25601 27.6879 15.512C27.6879 15.632 27.6879 15.744 27.6879 15.864C27.1999 23.632 22.3999 27.704 15.1119 27.704Z"
        fill="#33E1FF"
      />
      <path
        d="M19.3517 20.512C19.3007 20.3515 19.1869 20.2185 19.0362 20.1431C18.8855 20.0678 18.7108 20.0566 18.5517 20.112V20.112C16.7672 20.698 14.8084 20.066 13.7028 18.5476C12.5971 17.0292 12.5971 14.9709 13.7028 13.4525C14.8084 11.934 16.7672 11.3021 18.5517 11.888V11.888C18.7108 11.9435 18.8855 11.9323 19.0362 11.8569C19.1869 11.7816 19.3007 11.6486 19.3517 11.488L19.8877 9.88804C19.9432 9.72898 19.932 9.55426 19.8566 9.40359C19.7813 9.25293 19.6483 9.13912 19.4877 9.08804V9.08804C16.4839 8.10716 13.1901 9.17382 11.3315 11.7294C9.47284 14.285 9.47284 17.7471 11.3315 20.3027C13.1901 22.8583 16.4839 23.9249 19.4877 22.944V22.944C19.6483 22.893 19.7813 22.7791 19.8566 22.6285C19.932 22.4778 19.9432 22.3031 19.8877 22.144L19.3517 20.512Z"
        fill="#00AECC"
      />
    </svg>
  )
}

// Create the icon component
const CoinsIcon = createIcon(CoinsSvg)

// Icon registry
const iconRegistry = {
  coins: {
    name: "Coins",
    component: CoinsIcon,
    category: "Finance",
    description: "Represents currency, payments, or financial transactions",
  },
}

export default function IconographyPage() {
  return (
    <ComponentPage
      title="Iconography"
      description="A collection of icons used throughout the design system. Icons are designed to be clear, consistent, and accessible."
    >
      <div className="space-y-8">
        {/* Icon Grid */}
        <section>
          <h2 className="text-title-3 text-content-primary mb-4">Available Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Object.entries(iconRegistry).map(([key, icon]) => {
              const IconComponent = icon.component

              return (
                <div
                  key={key}
                  className="flex flex-col items-center p-4 border border-stroke-boundary rounded-lg hover:bg-background-display transition-colors"
                >
                  <div className="w-8 h-8 mb-3 flex items-center justify-center">
                    <IconComponent size="md" />
                  </div>
                  <span className="text-small-reg text-content-secondary text-center">{icon.name}</span>
                  <span className="text-tiny-reg text-content-tertiary text-center mt-1">{icon.category}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Size Examples */}
        <section>
          <h2 className="text-title-3 text-content-primary mb-4">Icon Sizes</h2>
          <div className="flex items-center gap-8 p-6 bg-background-display rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <CoinsIcon size="xs" />
              <span className="text-small-reg text-content-secondary">xs (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CoinsIcon size="sm" />
              <span className="text-small-reg text-content-secondary">sm (20px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CoinsIcon size="md" />
              <span className="text-small-reg text-content-secondary">md (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CoinsIcon size="lg" />
              <span className="text-small-reg text-content-secondary">lg (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CoinsIcon size={40} />
              <span className="text-small-reg text-content-secondary">custom (40px)</span>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h2 className="text-title-3 text-content-primary mb-4">Usage Examples</h2>
          <div className="space-y-6">
            {/* In Buttons */}
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-3">In Buttons</h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-core-primary2 text-white rounded-lg">
                  <CoinsIcon size="sm" />
                  Add Funds
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-stroke-input rounded-lg">
                  <CoinsIcon size="sm" />
                  View Balance
                </button>
              </div>
            </div>

            {/* In Cards */}
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-3">In Cards</h3>
              <div className="p-4 border border-stroke-boundary rounded-lg bg-white max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <CoinsIcon size="md" />
                  <div>
                    <h4 className="text-middle-med text-content-primary">Wallet Balance</h4>
                    <p className="text-small-reg text-content-secondary">$1,234.56</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Different Contexts */}
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-3">Different Contexts</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CoinsIcon size="xs" className="opacity-60" />
                  <span className="text-small-reg text-content-secondary">Small context</span>
                </div>
                <div className="flex items-center gap-2">
                  <CoinsIcon size="sm" />
                  <span className="text-middle-reg text-content-primary">Regular context</span>
                </div>
                <div className="flex items-center gap-2">
                  <CoinsIcon size="lg" />
                  <span className="text-title-3 text-content-primary">Prominent context</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-title-3 text-content-primary mb-4">Implementation</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-2">Basic Usage</h3>
              <pre className="text-small-reg text-content-secondary bg-background-primary p-3 rounded border overflow-x-auto">
                {`<CoinsIcon size="md" />
<CoinsIcon size={28} />
<CoinsIcon size="lg" className="opacity-60" />`}
              </pre>
            </div>

            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-2">Available Sizes</h3>
              <pre className="text-small-reg text-content-secondary bg-background-primary p-3 rounded border overflow-x-auto">
                {`size="xs"    // 16px
size="sm"    // 20px  
size="md"    // 24px (default)
size="lg"    // 32px
size={40}    // Custom pixel value`}
              </pre>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section>
          <h2 className="text-title-3 text-content-primary mb-4">Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-2">✅ Do</h3>
              <ul className="text-small-reg text-content-secondary space-y-1">
                <li>• Use consistent sizes (xs, sm, md, lg)</li>
                <li>• Provide aria-labels for meaningful icons</li>
                <li>• Use icons to support text, not replace it</li>
                <li>• Maintain original colors for brand consistency</li>
              </ul>
            </div>
            <div className="p-4 bg-background-display rounded-lg">
              <h3 className="text-middle-med text-content-primary mb-2">❌ Don't</h3>
              <ul className="text-small-reg text-content-secondary space-y-1">
                <li>• Use arbitrary custom sizes</li>
                <li>• Rely solely on icons for important actions</li>
                <li>• Modify the original SVG paths</li>
                <li>• Use icons without proper context</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ComponentPage>
  )
}
