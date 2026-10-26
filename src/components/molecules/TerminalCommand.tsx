import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface TerminalCommandProps {
  command: string
  label?: string
  className?: string
}

export function TerminalCommand({
  command,
  className,
}: TerminalCommandProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-border/80 bg-secondary/40 backdrop-blur-md font-mono text-xs sm:text-sm text-foreground shadow-inner max-w-xl w-full",
        className
      )}
    >
      <div className="flex items-center gap-2.5 overflow-hidden">
        <Terminal className="w-4 h-4 text-primary shrink-0" />
        <span className="text-muted-foreground select-none">$</span>
        <span className="truncate text-slate-200 select-all font-medium">
          {command}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-lg transition-colors"
        title={copied ? "Copied!" : "Copy to clipboard"}
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </Button>
    </div>
  )
}
