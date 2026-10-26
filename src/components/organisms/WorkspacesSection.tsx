import {
  Users,
  Copy,
  FolderSync,
  CheckCircle2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function WorkspacesSection() {
  const teamMembers = [
    { name: "Sarah K.", role: "Design Lead", action: "Pushed 14 assets to Mobile UI", time: "2m ago" },
    { name: "Alex R.", role: "Fullstack Dev", action: "Streamed raw_backend_logs.tar", time: "7m ago" },
    { name: "Liam T.", role: "3D Motion", action: "Created Render_V3 folder", time: "12m ago" },
  ]

  return (
    <section id="workspaces" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="emerald" icon={<Users className="w-3.5 h-3.5" />}>
              Team Workspaces
            </GradientBadge>
          }
          title="Instant Collaboration."
          highlight="Copy a Folder, Sync the Entire Team."
          description="Transform cloud storage into a collaborative workspace. Drop any folder or gigabyte-sized asset into your workspace, and everyone on your team has instant, high-speed streaming access."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Interactive Simulation Card */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    Product Core Workspace
                  </h4>
                  <p className="text-xs text-muted-foreground">8 Team Members • Synced Live</p>
                </div>
              </div>
              <Badge variant="success" className="gap-1 font-mono text-[10px]">
                <FolderSync className="w-3 h-3 animate-spin" />
                Real-Time
              </Badge>
            </div>

            {/* Folder Drop Simulation Graphic */}
            <div className="my-6 p-4 rounded-xl border border-dashed border-cyan-500/40 bg-cyan-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0 shadow-lg shadow-cyan-500/20">
                  <Copy className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">
                    ~/deeriver/Team Workspace/Design-Sprint-2026/
                  </span>
                  <span className="text-muted-foreground">
                    Dropped locally: 3.2 GB Figma renders & 4K prototypes
                  </span>
                </div>
              </div>
              <Badge variant="glow" className="shrink-0 text-[10px]">
                Instant Propagation
              </Badge>
            </div>

            {/* Team Live Activity Feed */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Live Collaborative Feed
              </span>
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-primary flex items-center justify-center font-bold text-black text-[10px]">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-semibold text-zinc-200">{member.name}</span>
                      <span className="text-zinc-500 ml-1.5 text-[11px]">({member.role})</span>
                      <p className="text-zinc-400 text-[11px]">{member.action}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">{member.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                No More "Can You Send Me That 2GB File?"
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Traditional cloud providers charge per-seat fees and punish teams with storage tier
                upgrades. DeeRiver provides unlimited shared folders directly linked to your team's
                dedicated Telegram channel pools.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Multi-Device Synchronized Tree</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Changes made on Linux desktop reflect instantly on macOS and the Web Drive.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Granular Access Control</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Assign Viewer, Contributor, or Admin roles to individual teammates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Zero Bandwidth Bottleneck</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Members stream files directly via Telegram CDN nodes worldwide at maximum throughput.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
