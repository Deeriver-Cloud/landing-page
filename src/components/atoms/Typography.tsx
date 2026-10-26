import React from "react"
import { cn } from "@/lib/utils"

export function GradientText({
  children,
  className,
  from = "from-cyan-400 via-primary to-blue-500",
}: {
  children: React.ReactNode
  className?: string
  from?: string
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-extrabold",
        from,
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  badge?: React.ReactNode
  title: string
  highlight?: string
  description?: string
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 max-w-3xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && <div className="mb-1">{badge}</div>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
        {title}{" "}
        {highlight && (
          <GradientText>{highlight}</GradientText>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
