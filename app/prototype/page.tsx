"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PrototypePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to explore tab by default
    router.push("/prototype/explore")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to Explore...</p>
    </div>
  )
}
