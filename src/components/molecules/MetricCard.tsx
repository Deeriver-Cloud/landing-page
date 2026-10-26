import React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export interface MetricCardProps {
  value: string
  label: string
  subtext?: string
  icon?: React.ReactNode
  accent?: "primary" | "emerald" | "purple" | "cyan"
  className?: string
}

export function MetricCard({
  value,
  label,
  subtext,
  icon,
  accent = "primary",
  className,
}: MetricCardProps) {
  const accentBorder = {
    primary: "hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]",
    emerald: "hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    purple: "hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
    cyan: "hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  }

  return (
    <Card
      className={cn(
        "group relative p-6 transition-all duration-300 overflow-hidden bg-card/40 border-border/60 hover:-translate-y-1",
        accentBorder[accent],
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
          {label}
        </span>
        {icon && (
          <div className="p-2 rounded-xl bg-secondary/60 text-foreground border border-border/40">
            {icon}
          </div>
        )}
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
        {value}
      </div>

      {subtext && (
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {subtext}
        </p>
      )}
    </Card>
  )
}
