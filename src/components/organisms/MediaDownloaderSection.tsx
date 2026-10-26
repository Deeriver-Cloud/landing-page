import { useState } from "react"
import {
  DownloadCloud,
  Youtube,
  Instagram,
  Video,
  CheckCircle2,
  Flame,
  Radio,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function MediaDownloaderSection() {
  const [urlInput, setUrlInput] = useState<string>("https://youtube.com/watch?v=dQw4w9WgXcQ")
  const [downloading, setDownloading] = useState<boolean>(false)
  const [downloadComplete, setDownloadComplete] = useState<boolean>(false)

  const handleSimulateDownload = () => {
    setDownloading(true)
    setDownloadComplete(false)
    setTimeout(() => {
      setDownloading(false)
      setDownloadComplete(true)
    }, 2000)
  }

  return (
    <section id="downloader" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="primary" icon={<DownloadCloud className="w-3.5 h-3.5" />}>
              Cloud Ingestion Engine
            </GradientBadge>
          }
          title="Direct Social Media Downloader."
          highlight="Zero Local Bandwidth Used."
          description="Send links from YouTube, Instagram Reels, TikTok, or Twitter. Our distributed cloud workers download and archive original 4K media directly into your DeeRiver storage without eating your home internet data."
        />

        {/* Interactive Downloader Card */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-8">
          {/* Supported Platforms Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pb-6 border-b border-border/60 text-xs text-muted-foreground">
            <span className="font-semibold text-zinc-300">Supported Platforms:</span>
            <div className="flex items-center gap-1.5 text-rose-400 font-medium">
              <Youtube className="w-4 h-4" />
              <span>YouTube 4K</span>
            </div>
            <div className="flex items-center gap-1.5 text-pink-400 font-medium">
              <Instagram className="w-4 h-4" />
              <span>Instagram Reels</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <Flame className="w-4 h-4" />
              <span>TikTok (No Watermark)</span>
            </div>
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <Video className="w-4 h-4" />
              <span>Twitter / X Video</span>
            </div>
          </div>

          {/* Interactive URL Input Simulation */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Paste YouTube, Instagram, or TikTok URL..."
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary font-mono shadow-inner"
                />
              </div>
              <Button
                variant="glow"
                size="lg"
                onClick={handleSimulateDownload}
                disabled={downloading}
                className="gap-2 shrink-0 h-12"
              >
                {downloading ? (
                  <>
                    <Radio className="w-4 h-4 animate-spin text-cyan-300" />
                    <span>Cloud Worker Ingesting...</span>
                  </>
                ) : (
                  <>
                    <DownloadCloud className="w-4 h-4" />
                    <span>Save to DeeRiver</span>
                  </>
                )}
              </Button>
            </div>

            {/* Live Progress or Success Banner */}
            {downloading && (
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between text-xs animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-zinc-200 font-medium">
                    Worker downloading 4K stream directly into Telegram Datacenter 4...
                  </span>
                </div>
                <span className="font-mono text-cyan-400 font-bold">85 MB/s</span>
              </div>
            )}

            {downloadComplete && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-medium">
                    Saved to ~/deeriver/Downloads/YouTube_4K_NeverGonnaGiveYouUp.mp4
                  </span>
                </div>
                <Badge variant="success" className="font-mono text-[10px]">
                  Ready to Stream
                </Badge>
              </div>
            )}
          </div>

          {/* Three Core Benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60 text-xs">
            <div>
              <h5 className="font-bold text-foreground mb-1">0 MB Local Data</h5>
              <p className="text-muted-foreground leading-relaxed">
                DeeRiver's cloud nodes download the files. Your phone or home data is never used.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-1">Original Quality & Audio</h5>
              <p className="text-muted-foreground leading-relaxed">
                Extract audio-only MP3s or download pristine 4K 60fps HDR video streams.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-1">Auto Telegram Archival</h5>
              <p className="text-muted-foreground leading-relaxed">
                Permanent preservation even if the original video is removed from the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
