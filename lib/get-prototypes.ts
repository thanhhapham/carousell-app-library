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
      (e) =>
        e.isDirectory() &&
        e.name.startsWith("[") &&
        e.name.endsWith("]") &&
        fs.existsSync(path.join(dirPath, e.name, "page.tsx"))
    )
  } catch {
    return false
  }
}

function resolveHref(folderPath: string, relativePath: string, metaHref?: string): string {
  if (metaHref) return metaHref

  // Check if it has a dynamic [param] subfolder
  try {
    const entries = fs.readdirSync(folderPath, { withFileTypes: true })
    const dynamicSubfolder = entries.find(
      (e) => e.isDirectory() && e.name.startsWith("[") && e.name.endsWith("]")
    )
    if (dynamicSubfolder) {
      return `/prototype/${relativePath}/1`
    }
  } catch {
    // ignore
  }

  return `/prototype/${relativePath}`
}

function readMeta(dirPath: string): PrototypeMeta {
  const metaPath = path.join(dirPath, "meta.json")
  if (fs.existsSync(metaPath)) {
    try {
      return JSON.parse(fs.readFileSync(metaPath, "utf-8"))
    } catch {
      // Ignore malformed meta.json
    }
  }
  return {}
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

    // Check if this top-level folder itself is a prototype (has page.tsx)
    if (hasPageFile(folderPath)) {
      const meta = readMeta(folderPath)
      if (!meta.hidden) {
        prototypes.push({
          name: meta.name ?? formatFolderName(entry.name),
          href: resolveHref(folderPath, entry.name, meta.href),
          folderName: entry.name,
          category: meta.category,
          status: meta.status,
          description: meta.description,
        })
      }
    }

    // Also scan one level deeper for nested sub-prototypes
    // Skip dynamic route folders ([id]) and underscore folders (_template)
    let subEntries: fs.Dirent[]
    try {
      subEntries = fs.readdirSync(folderPath, { withFileTypes: true })
    } catch {
      continue
    }

    for (const subEntry of subEntries) {
      if (!subEntry.isDirectory()) continue
      if (subEntry.name.startsWith("_")) continue
      if (subEntry.name.startsWith("[")) continue

      const subFolderPath = path.join(folderPath, subEntry.name)
      if (!hasPageFile(subFolderPath)) continue

      const meta = readMeta(subFolderPath)
      if (meta.hidden) continue

      const relativePath = `${entry.name}/${subEntry.name}`

      prototypes.push({
        name: meta.name ?? formatFolderName(subEntry.name),
        href: resolveHref(subFolderPath, relativePath, meta.href),
        folderName: subEntry.name,
        category: meta.category ?? entry.name,
        status: meta.status,
        description: meta.description,
      })
    }
  }

  // Sort alphabetically by name
  return prototypes.sort((a, b) => a.name.localeCompare(b.name))
}
