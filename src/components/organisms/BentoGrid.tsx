import {
  Laptop,
  Lock,
  Users,
  DownloadCloud,
  Send,
  WifiOff,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function BentoGrid() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Complete Ecosystem
            </GradientBadge>
          }
          title="Everything You Need."
          highlight="Zero Compromises."
          description="Explore the unified suite of tools powering DeeRiver — built for power users, developers, media creators, and distributed teams."
        />

        {/* Bento Grid Container */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Card 1: Desktop FUSE Mount (Large 2-col) */}
          <Card className="md:col-span-2 p-7 bg-card/40 border-border/70 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <Laptop className="w-6 h-6" />
                </div>
                <Badge variant="glow">Linux • macOS • Windows</Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Connect Telegram Like a USB Drive
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plug your Telegram storage directly into your operating system. Browse folders,
                drag & drop files, and play videos in VLC without eating up your local hard drive.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
              <span>$ ./deeriver --mount ~/deeriver</span>
              <span className="text-emerald-400">Ready</span>
            </div>
          </Card>

          {/* Card 2: Zero-Knowledge Vault */}
          <Card className="p-7 bg-card/40 border-border/70 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Lock className="w-6 h-6" />
                </div>
                <Badge variant="purple">AES-256-GCM</Badge>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Encrypted Vault
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Client-side zero-knowledge encryption for your sensitive docs and crypto backups.
                Telegram sees only opaque ciphertext.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Client Decrypted</span>
            </div>
          </Card>

          {/* Card 3: Telegram SSO */}
          <Card className="p-7 bg-card/40 border-border/70 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Send className="w-6 h-6" />
                </div>
                <Badge variant="cyan">Zero Passwords</Badge>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Telegram SSO
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Log in with 1-click using your Telegram account. No passwords, no SMS charges,
                instant synchronization.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Bot OTP & Widget Auth</span>
            </div>
          </Card>

          {/* Card 4: Team Workspaces (2-col) */}
          <Card className="md:col-span-2 p-7 bg-card/40 border-border/70 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Users className="w-6 h-6" />
                </div>
                <Badge variant="success">Unlimited Seats</Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Real-Time Team Workspaces
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Copy a folder into your team's workspace, and everyone gets immediate high-speed
                streaming access. Collaborative folders with granular role-based permissions.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Multi-channel parallel dispatch for zero congestion</span>
            </div>
          </Card>

          {/* Card 5: Offline Mode & Resumable Queue */}
          <Card className="p-7 bg-card/40 border-border/70 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <WifiOff className="w-6 h-6" />
                </div>
                <Badge variant="outline" className="border-amber-500/30 text-amber-400">
                  Resilient
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Offline Mode
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Work offline seamlessly. Saved edits are staged locally and auto-resumed with
                exponential backoff retry upon reconnect.
              </p>
            </div>
            <div className="mt-4 text-xs font-mono text-amber-400">
              Auto-Retry on Reconnect
            </div>
          </Card>

          {/* Card 6: Social Media Cloud Downloader */}
          <Card className="p-7 bg-card/40 border-border/70 hover:border-rose-500/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <DownloadCloud className="w-6 h-6" />
                </div>
                <Badge variant="outline" className="border-rose-500/30 text-rose-400">
                  Direct Ingest
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Media Ingestion
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Archive YouTube 4K, Instagram Reels, and TikTok clips directly into your drive
                without using local network bandwidth.
              </p>
            </div>
            <div className="mt-4 text-xs font-mono text-rose-400">
              0 MB Home Bandwidth
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
