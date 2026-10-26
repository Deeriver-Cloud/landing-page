import React from "react"
import { cn } from "@/lib/utils"

export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "syncing" | "encrypted" | "idle"
  size?: "sm" | "md" | "lg"
}

export function StatusDot({
  status = "online",
  size = "md",
  className,
  ...props
}: StatusDotProps) {
  const sizeMap = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  }

  const colorMap = {
    online: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    syncing: "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    encrypted: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]",
    idle: "bg-slate-400",
  }

  const pingMap = {
    online: "bg-emerald-400",
    syncing: "bg-cyan-400",
    encrypted: "bg-purple-400",
    idle: "bg-slate-400",
  }

  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", className)} {...props}>
      <span
        className={cn(
          "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
          pingMap[status]
        )}
      />
      <span className={cn("relative inline-flex rounded-full", sizeMap[size], colorMap[status])} />
    </span>
  )
}
