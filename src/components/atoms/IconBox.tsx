import React from "react"
import { cn } from "@/lib/utils"

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "primary" | "emerald" | "purple" | "amber" | "rose" | "cyan"
  size?: "sm" | "md" | "lg" | "xl"
}

export function IconBox({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: IconBoxProps) {
  const sizeStyles = {
    sm: "w-9 h-9 rounded-lg text-sm [&>svg]:w-4 [&>svg]:h-4",
    md: "w-12 h-12 rounded-xl text-base [&>svg]:w-6 [&>svg]:h-6",
    lg: "w-14 h-14 rounded-2xl text-lg [&>svg]:w-7 [&>svg]:h-7",
    xl: "w-16 h-16 rounded-2xl text-xl [&>svg]:w-8 [&>svg]:h-8",
  }

  const variantStyles = {
    primary:
      "bg-primary/10 border-primary/20 text-primary shadow-[0_0_15px_rgba(14,165,233,0.2)]",
    cyan:
      "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    emerald:
      "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    purple:
      "bg-purple-500/10 border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    amber:
      "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    rose:
      "bg-rose-500/10 border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center border transition-all duration-300",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
