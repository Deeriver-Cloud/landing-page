import { useState } from "react"
import { Calculator, TrendingDown, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function StorageCalculator() {
  const [storageTb, setStorageTb] = useState<number>(10)

  // Monthly costs
  const googleDriveMonthly = storageTb <= 2 ? 9.99 : (storageTb / 2) * 9.99
  const awsS3Monthly = storageTb * 1024 * 0.023

  const yearlyGoogle = Math.round(googleDriveMonthly * 12)
  const yearlyS3 = Math.round(awsS3Monthly * 12)
  const threeYearSavings = Math.round(yearlyGoogle * 3)

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-background/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="emerald" icon={<Calculator className="w-3.5 h-3.5" />}>
              Cost Calculator
            </GradientBadge>
          }
          title="Calculate Your Savings."
          highlight="Zero Monthly Invoices."
          description="Drag the slider to see how much money you or your team are currently throwing away on legacy cloud storage subscriptions."
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

          {/* Pricing Comparison Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Google Drive */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-400">Google One / Workspace</span>
                <div className="mt-2 text-2xl font-bold text-foreground font-mono">
                  ${Math.round(googleDriveMonthly)}
                  <span className="text-xs text-muted-foreground font-sans font-normal">/mo</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-rose-400 font-mono">
                ${yearlyGoogle.toLocaleString()} / year
              </p>
            </div>

            {/* AWS S3 */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-400">Amazon S3 Standard</span>
                <div className="mt-2 text-2xl font-bold text-foreground font-mono">
                  ${Math.round(awsS3Monthly)}
                  <span className="text-xs text-muted-foreground font-sans font-normal">/mo</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-rose-400 font-mono">
                ${yearlyS3.toLocaleString()} / year + egress
              </p>
            </div>

            {/* DeeRiver Card (Highlighted) */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-primary/20 via-cyan-500/10 to-transparent border-2 border-primary/50 flex flex-col justify-between shadow-lg shadow-primary/10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">DeeRiver Cloud</span>
                  <Badge variant="success" className="text-[9px] py-0 px-1.5 h-4">
                    Included
                  </Badge>
                </div>
                <div className="mt-2 text-3xl font-extrabold text-foreground font-mono">
                  $0
                  <span className="text-xs text-muted-foreground font-sans font-normal">/month</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Unlimited Bandwidth & Storage</span>
              </div>
            </div>
          </div>

          {/* 3-Year Total Savings Banner */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-primary/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Estimated 3-Year Cloud Savings
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  ${threeYearSavings.toLocaleString()} USD
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground max-w-xs text-center sm:text-right">
              Based on {storageTb} TB stored without paying recurring monthly corporate storage penalties.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
