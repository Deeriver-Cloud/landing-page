import { useState } from "react"
import { Calculator, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function StorageCalculator() {
  const [storageTb, setStorageTb] = useState<number>(10)

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-background/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="emerald" icon={<Calculator className="w-3.5 h-3.5" />}>
              100% Free Forever
            </GradientBadge>
          }
          title="Infinite Storage Volume."
          highlight="Zero Monthly Invoices."
          description="Slide to select your desired volume. DeeRiver is 100% free with no monthly subscription tiers, no storage penalties, and unlimited bandwidth."
        />

        <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-10">
          {/* Slider Control */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Required Storage Volume:
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                  {storageTb} TB{" "}
                  <span className="text-sm font-sans font-normal text-muted-foreground">
                    ({storageTb * 1024} GB)
                  </span>
                </p>
              </div>
              <Badge variant="glow" className="self-start sm:self-center font-mono text-xs">
                DeeRiver: Unlimited
              </Badge>
            </div>

            <Slider
              value={[storageTb]}
              min={1}
              max={50}
              step={1}
              onValueChange={(val) => setStorageTb(val[0])}
              className="py-4"
            />

            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>1 TB</span>
              <span>10 TB</span>
              <span>25 TB</span>
              <span>50 TB</span>
            </div>
          </div>

          {/* Single Focused DeeRiver 100% Free Plan Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-primary/20 via-cyan-500/10 to-transparent border-2 border-primary/50 shadow-xl shadow-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-white">DeeRiver Free Plan</span>
                <Badge variant="success" className="text-xs py-0.5 px-2.5 font-semibold">
                  100% Free & Open Source
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                No storage caps, no monthly subscription fees, and no credit card required.
                Store and transfer as many terabytes as you need with completely free, unlimited traffic.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited Storage ({storageTb} TB+)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited Bandwidth (100% Free Traffic)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Native OS FUSE Virtual Mount</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Knowledge AES-256 Vault</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Team Workspaces & Cloud Downloader</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Egress or Bandwidth Fees</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Your Monthly Cost
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-foreground font-mono my-1">
                $0
                <span className="text-sm text-muted-foreground font-sans font-normal"> / month</span>
              </div>
              <span className="text-xs text-emerald-400 font-medium">
                Free Forever • Zero Hidden Fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
