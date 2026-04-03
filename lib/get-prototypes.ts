import fs from "fs"
import path from "path"

export interface PrototypeMeta {
  name?: string
  description?: string
  category?: string
  status?: "ready" | "wip" | "draft"
  href?: string
  hidden?: boolean
}

export interface PrototypeEntry {
  name: string
  href: string
  folderName: string
  category?: string
  status?: string
  description?: string
}

function formatFolderName(folder: string): string {
  return folder
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function hasPageFile(dirPath: string): boolean {
  // Direct page.tsx
  if (fs.existsSync(path.join(dirPath, "page.tsx"))) return true
  // Dynamic route subfolder with page.tsx (e.g., [id]/page.tsx)
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    return entries.some(
      (e) => e.isDirectory() && fs.existsSync(path.join(dirPath, e.name, "page.tsx"))
    )
  } catch {
    return false
  }
}

function resolveHref(folderName: string, dirPath: string, metaHref?: string): string {
  if (metaHref) return metaHref

  // Check if it has a dynamic [param] subfolder
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    const dynamicSubfolder = entries.find(
      (e) => e.isDirectory() && e.name.startsWith("[") && e.name.endsWith("]")
    )
    if (dynamicSubfolder) {
      return `/prototype/${folderName}/1`
    }
  } catch {
    // ignore
  }

  return `/prototype/${folderName}`
}

export function getPrototypes(): PrototypeEntry[] {
  const prototypeDir = path.join(process.cwd(), "app", "prototype")

  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(prototypeDir, { withFileTypes: true })
  } catch {
    return []
  }

  const prototypes: PrototypeEntry[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    // Skip underscore-prefixed folders (e.g., _template)
    if (entry.name.startsWith("_")) continue

    const folderPath = path.join(prototypeDir, entry.name)

    // Skip folders with no page.tsx anywhere
    if (!hasPageFile(folderPath)) continue

    // Read optional meta.json
    let meta: PrototypeMeta = {}
    const metaPath = path.join(folderPath, "meta.json")
    if (fs.existsSync(metaPath)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
      } catch {
        // Ignore malformed meta.json
      }
    }

    // Skip hidden prototypes
    if (meta.hidden) continue

    prototypes.push({
      name: meta.name ?? formatFolderName(entry.name),
      href: resolveHref(entry.name, folderPath, meta.href),
      folderName: entry.name,
      category: meta.category,
      status: meta.status,
      description: meta.description,
    })
  }

  // Sort alphabetically by name
  return prototypes.sort((a, b) => a.name.localeCompare(b.name))
}
