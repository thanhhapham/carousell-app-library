import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DesignSystemLayout } from "@/components/design-system/layout"
import { SidebarServer } from "@/components/design-system/sidebar-server"

export const metadata: Metadata = {
  title: "Carousell Design System",
  description: "Interactive prototype toolkit and design system for Carousell",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-fabriga">
      <body className="font-fabriga">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DesignSystemLayout sidebar={<SidebarServer />}>
            {children}
          </DesignSystemLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
