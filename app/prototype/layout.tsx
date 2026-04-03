import type React from "react"

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-[475px] mx-auto bg-background-base min-h-screen relative font-fabriga">{children}</div>
  )
}
