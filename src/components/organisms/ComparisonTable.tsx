import { Check, X, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function ComparisonTable() {
  const features = [
    { name: "Storage Capacity", deeriver: "Unlimited (∞)", gdrive: "15GB (Tiered to 2TB)", dropbox: "2GB (Tiered to 2TB)", icloud: "5GB (Tiered to 2TB)" },
    { name: "Monthly Storage Subscription", deeriver: "$0 / month", gdrive: "$9.99 / mo (2TB)", dropbox: "$15.00 / mo (2TB)", icloud: "$9.99 / mo (2TB)" },
    { name: "Native OS FUSE Mount (Linux, macOS, Win)", deeriver: true, gdrive: false, dropbox: false, icloud: false },
    { name: "Client-Side AES-256 Zero-Knowledge Vault", deeriver: true, gdrive: false, dropbox: false, icloud: "Advanced Data Only" },
    { name: "Telegram SSO Authentication", deeriver: true, gdrive: false, dropbox: false, icloud: false },
    { name: "Team Workspaces with Instant Sync", deeriver: true, gdrive: true, dropbox: true, icloud: false },
    { name: "Direct YouTube & Instagram Ingestion", deeriver: true, gdrive: false, dropbox: false, icloud: false },
    { name: "Resumable Offline Staging Queue", deeriver: true, gdrive: true, dropbox: true, icloud: false },
    { name: "4K Parallel Range Streaming (VLC/Blender)", deeriver: true, gdrive: false, dropbox: false, icloud: false },
  ]

  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <Check className="w-3.5 h-3.5" />
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center mx-auto">
          <X className="w-3.5 h-3.5" />
        </div>
      )
    }
    return <span className="font-medium text-xs sm:text-sm">{val}</span>
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Side-by-Side Comparison
            </GradientBadge>
          }
          title="Why Creators & Developers"
          highlight="Choose DeeRiver."
          description="See how DeeRiver stacks up against conventional big-tech cloud storage providers."
        />

        <div className="mt-14 max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-zinc-900/60">
                <th className="p-4 sm:p-5 font-bold text-foreground">Capability / Feature</th>
                <th className="p-4 sm:p-5 font-extrabold text-primary text-center bg-primary/10 border-x border-primary/20">
                  DeeRiver
                </th>
                <th className="p-4 sm:p-5 font-semibold text-zinc-400 text-center">Google Drive</th>
                <th className="p-4 sm:p-5 font-semibold text-zinc-400 text-center">Dropbox</th>
                <th className="p-4 sm:p-5 font-semibold text-zinc-400 text-center">Apple iCloud</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {features.map((item, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-zinc-200">{item.name}</td>
                  <td className="p-4 sm:p-5 text-center bg-primary/5 border-x border-primary/20 text-primary font-bold">
                    {renderCell(item.deeriver)}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-zinc-400">{renderCell(item.gdrive)}</td>
                  <td className="p-4 sm:p-5 text-center text-zinc-400">{renderCell(item.dropbox)}</td>
                  <td className="p-4 sm:p-5 text-center text-zinc-400">{renderCell(item.icloud)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
