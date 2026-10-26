import { HardDrive, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center gap-6">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
          <HardDrive className="w-8 h-8 text-primary" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>DeeRiver Landing Page Architecture Ready</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Infinite Cloud Storage
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            React + TypeScript + shadcn/ui + Atomic Design ready for landing sections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="glow" size="lg">
            Ready for Components
          </Button>
        </div>
      </div>
    </div>
  )
}
