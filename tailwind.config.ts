import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Content colors
        content: {
          primary: "hsl(var(--content-primary))",
          secondary: "hsl(var(--content-secondary))",
          subdued: "hsl(var(--content-subdued))",
          inverse: "hsl(var(--content-inverse))",
          "on-dark": "hsl(var(--content-on-dark))",
          "on-light": "hsl(var(--content-on-light))",
          interactive: "hsl(var(--content-interactive))",
          "interactive-strong": "hsl(var(--content-interactive-strong))",
          "interactive-on-light": "hsl(var(--content-interactive-on-light))",
          positive: "hsl(var(--content-positive))",
          negative: "hsl(var(--content-negative))",
        },
        // Background colors
        background: {
          base: "hsl(var(--background-base))",
          "base-low": "hsl(var(--background-base-low))",
          display: "hsl(var(--background-display))",
          input: "hsl(var(--background-input))",
          disabled: "hsl(var(--background-disabled))",
          inverse: "hsl(var(--background-inverse))",
          overlay: "hsl(var(--background-overlay))",
          "on-image": "hsl(var(--background-on-image))",
          "on-image-strong": "hsl(var(--background-on-image-strong))",
          "on-dark": "hsl(var(--background-on-dark))",
          "elevated-low": "hsl(var(--background-elevated-low))",
          "elevated-high": "hsl(var(--background-elevated-high))",
          interactive: "hsl(var(--background-interactive))",
          "interactive-strong": "hsl(var(--background-interactive-strong))",
          "interactive-tint": "hsl(var(--background-interactive-tint))",
          "interactive-tint-strong": "hsl(var(--background-interactive-tint-strong))",
          "interactive-on-image": "hsl(var(--background-interactive-on-image))",
          "interactive-on-image-strong": "hsl(var(--background-interactive-on-image-strong))",
          "negative-subtle": "hsl(var(--background-negative-subtle))",
          "negative-bold": "hsl(var(--background-negative-bold))",
          "positive-subtle": "hsl(var(--background-positive-subtle))",
          priority: "hsl(var(--background-priority))",
          "priority-strong": "hsl(var(--background-priority-strong))",
          gradient: "hsl(var(--background-gradient))",
        },
        // Stroke colors
        stroke: {
          boundary: "hsl(var(--stroke-boundary))",
          input: "hsl(var(--stroke-input))",
          interactive: "hsl(var(--stroke-interactive))",
          "interactive-negative": "hsl(var(--stroke-interactive-negative))",
          "on-image": "hsl(var(--stroke-on-image))",
          inverse: "hsl(var(--stroke-inverse))",
          "halo-focused": "hsl(var(--stroke-halo-focused))",
          "halo-priority": "hsl(var(--stroke-halo-priority))",
        },
        // Core colors
        core: {
          primary1: "hsl(var(--core-primary1))",
          primary2: "hsl(var(--core-primary2))",
        },
        // Chart colors
        chart: {
          "1-bold": "hsl(var(--chart-1-bold))",
          "2-bold": "hsl(var(--chart-2-bold))",
          "3-bold": "hsl(var(--chart-3-bold))",
          "4-bold": "hsl(var(--chart-4-bold))",
          "5-bold": "hsl(var(--chart-5-bold))",
          "1-subtle": "hsl(var(--chart-1-subtle))",
          "2-subtle": "hsl(var(--chart-2-subtle))",
          "3-subtle": "hsl(var(--chart-3-subtle))",
          "4-subtle": "hsl(var(--chart-4-subtle))",
          "5-subtle": "hsl(var(--chart-5-subtle))",
        },
        // Branding colors
        branding: {
          certified: "hsl(var(--branding-certified))",
          spotlight: "hsl(var(--branding-spotlight))",
          bump: "hsl(var(--branding-bump))",
          "external-ad": "hsl(var(--branding-external-ad))",
        },
      },
      fontFamily: {
        sans: [
          "Fabriga",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        fabriga: [
          "Fabriga",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      fontSize: {
        // Typography tokens from Figma
        "title-1": ["34px", { lineHeight: "1.2", fontWeight: "bold" }],
        "title-2": ["24px", { lineHeight: "1.2", fontWeight: "bold" }],
        "title-3": ["20px", { lineHeight: "1.2", fontWeight: "bold" }],
        "large-reg": ["17px", { lineHeight: "1.4", fontWeight: "normal" }],
        "large-callout": ["17px", { lineHeight: "1.4", fontWeight: "bold" }],
        "middle-reg": ["15px", { lineHeight: "1.4", fontWeight: "normal" }],
        "middle-callout": ["15px", { lineHeight: "1.4", fontWeight: "bold" }],
        "middle-reg-compact": ["15px", { lineHeight: "1.2", fontWeight: "normal" }],
        "middle-callout-compact": ["15px", { lineHeight: "1.2", fontWeight: "bold" }],
        "small-reg": ["13px", { lineHeight: "1.4", fontWeight: "normal" }],
        "small-callout": ["13px", { lineHeight: "1.4", fontWeight: "bold" }],
        "small-reg-compact": ["13px", { lineHeight: "1.2", fontWeight: "normal" }],
        "small-callout-compact": ["13px", { lineHeight: "1.2", fontWeight: "bold" }],
        "tiny-reg": ["11px", { lineHeight: "1.4", fontWeight: "normal" }],
        "teeny-tiny-reg": ["9px", { lineHeight: "1.4", fontWeight: "normal" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
