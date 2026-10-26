import {
  Download,
  Send,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  Laptop,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBadge } from "@/components/atoms/GradientBadge"
import { GradientText } from "@/components/atoms/Typography"
import { TerminalCommand } from "@/components/molecules/TerminalCommand"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Top Announcement Badge */}
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <GradientBadge
            icon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
            variant="cyan"
            className="hover:scale-105 transition-transform cursor-pointer"
          >
            <span>DeeRiver 0.1.0 Released — Native OS Mount & Offline Resilient Queue</span>
          </GradientBadge>
        </div>

        {/* Primary Hero Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.1] sm:leading-[1.12]">
          Infinite Cloud Storage.{" "}
          <GradientText from="from-cyan-400 via-sky-400 to-blue-500">
            Powered by Telegram.
          </GradientText>{" "}
          Mounted as Local Drive.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          DeeRiver turns Telegram's high-speed distributed infrastructure into an
          unlimited cloud drive. Mount it seamlessly onto your OS file manager,
          stream 4K media without downloading, collaborate in team workspaces, and
          protect your sensitive files with zero-knowledge AES-256 encryption.
        </p>

        {/* Primary Call To Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="https://deeriver.wiregeek.ir/drive"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="glow"
              size="lg"
              className="w-full sm:w-auto gap-2.5 text-base font-semibold h-12 px-7 rounded-xl"
            >
              <Send className="w-4 h-4" />
              <span>Launch Web Drive</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <a href="#desktop" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2.5 text-base font-medium h-12 px-6 rounded-xl border-border/80 hover:bg-secondary/60 bg-background/50 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Get Desktop App (FUSE)</span>
            </Button>
          </a>
        </div>

        {/* One-Line Terminal Command */}
        <div className="mt-8 w-full max-w-md">
          <TerminalCommand
            command="curl -fsSL https://deeriver.wiregeek.ir/install.sh | bash"
            label="Linux & macOS Quick Setup"
          />
        </div>

        {/* Key Trust Signals */}
        <div className="mt-12 pt-8 border-t border-border/40 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>0$ Monthly Storage Bills</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
            <Laptop className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Native Linux/macOS/Win Mount</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
            <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Client-Side AES-256 Vault</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
            <Users className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Shared Team Workspaces</span>
          </div>
        </div>
      </div>
    </section>
  )
}
