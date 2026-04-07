import type React from "react"

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F8F9" }}>
      <div className="w-full max-w-[475px] mx-auto relative font-fabriga">{children}</div>
    </div>
  )
}
