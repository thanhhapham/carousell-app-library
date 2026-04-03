import fs from "fs"
import path from "path"

export interface ComponentEntry {
  name: string
  href: string
  folderName: string
  category: string
}

const CATEGORY_MAP: Record<string, string> = {
  badge: "Feedback",
  banner: "Feedback",
  "bottom-bar": "Navigation",
  "bottom-sheet": "Overlays",
  button: "Actions",
  card: "Containers",
  chat: "Chat",
  dialog: "Overlays",
  "external-ads": "Display",
  "inline-state": "Feedback",
  input: "Inputs",
  "list-controls": "Inputs",
  "listing-card": "Cards",
  notification: "Feedback",
  slider: "Inputs",
  snackbar: "Feedback",
  "speech-bubble": "Display",
  tabs: "Navigation",
  "top-nav": "Navigation",
  voucher: "Display",
}

function formatFolderName(folder: string): string {
  return folder
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function getComponents(): ComponentEntry[] {
  const componentsDir = path.join(process.cwd(), "app", "components")

  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(componentsDir, { withFileTypes: true })
  } catch {
    return []
  }

  const components: ComponentEntry[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const folderPath = path.join(componentsDir, entry.name)
    const hasPage = fs.existsSync(path.join(folderPath, "page.tsx"))
    if (!hasPage) continue

    components.push({
      name: formatFolderName(entry.name),
      href: `/components/${entry.name}`,
      folderName: entry.name,
      category: CATEGORY_MAP[entry.name] ?? "Other",
    })
  }

  return components.sort((a, b) => a.name.localeCompare(b.name))
}

export function getComponentsGrouped(): Record<string, ComponentEntry[]> {
  const components = getComponents()
  const grouped: Record<string, ComponentEntry[]> = {}

  for (const component of components) {
    if (!grouped[component.category]) grouped[component.category] = []
    grouped[component.category].push(component)
  }

  return grouped
}
