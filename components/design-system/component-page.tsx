"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ComponentPageProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="text-tiny-reg text-core-primary2 border-core-primary2">
            COMPONENT
          </Badge>
        </div>
        <h1 className="text-title-1 text-content-primary mb-4">{title}</h1>
        <p className="text-large-reg text-content-secondary leading-relaxed max-w-3xl">{description}</p>
      </div>
      {children}
    </div>
  )
}

interface VariantSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function VariantSection({ title, description, children }: VariantSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-title-3 text-content-primary mb-4">{title}</h2>
      {description && <p className="text-middle-reg text-content-secondary mb-6">{description}</p>}
      {children}
    </div>
  )
}

interface VariantCardProps {
  name: string
  description: string
  className?: string
  code?: string
  children: React.ReactNode
}

export function VariantCard({ name, description, className, code, children }: VariantCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-large-callout">{name}</CardTitle>
            <CardDescription className="text-middle-reg mt-1">{description}</CardDescription>
          </div>
          {code && (
            <Badge variant="secondary" className="text-tiny-reg font-mono">
              {code}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`p-6 rounded-lg border border-stroke-boundary bg-background-display ${className}`}>
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
