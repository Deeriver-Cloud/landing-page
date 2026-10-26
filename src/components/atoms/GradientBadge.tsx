import React from "react"
import { cn } from "@/lib/utils"

export interface GradientBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  children: React.ReactNode
  variant?: "primary" | "emerald" | "purple" | "cyan"
}

export function GradientBadge({
  icon,
  children,
  variant = "primary",
  className,
  ...props
}: GradientBadgeProps) {
  const variantStyles = {
    primary:
      "border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_rgba(14,165,233,0.15)]",
    emerald:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    purple:
      "border-purple-500/30 bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    cyan:
      "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  )
}
