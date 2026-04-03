import { getPrototypes } from "@/lib/get-prototypes"
import { SidebarClient } from "./sidebar"

// Server component — reads filesystem and passes data to client sidebar
export function SidebarServer() {
  const prototypes = getPrototypes()
  return <SidebarClient prototypes={prototypes} />
}
