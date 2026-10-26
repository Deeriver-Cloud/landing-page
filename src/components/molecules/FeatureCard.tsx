import React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { IconBox } from "@/components/atoms/IconBox"
import { Check } from "lucide-react"

export interface FeatureCardProps {
  icon: React.ReactNode
  variant?: "primary" | "emerald" | "purple" | "amber" | "rose" | "cyan"
  title: string
  description: string
  highlights?: string[]
  badge?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function FeatureCard({
  icon,
  variant = "primary",
  title,
  description,
  highlights,
  badge,
  className,
  children,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "relative p-7 flex flex-col justify-between overflow-hidden bg-card/50 border-border/70 hover:border-border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <IconBox variant={variant} size="lg">
            {icon}
          </IconBox>
          {badge}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-white transition-colors mb-2.5">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>

        {highlights && (
          <ul className="space-y-2 mb-4">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium"
              >
                <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {children && <div className="mt-4 pt-4 border-t border-border/40">{children}</div>}
    </Card>
  )
}
