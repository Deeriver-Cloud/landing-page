import { HardDrive, Send, ArrowUpRight } from "lucide-react"
import { StatusDot } from "@/components/atoms/StatusDot"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-zinc-950/90 pt-16 pb-12 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border/50">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px] shadow-lg shadow-primary/20">
                <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                  <HardDrive className="w-4 h-4 text-primary" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">DeeRiver</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Unlimited, zero-cost cloud storage backed by Telegram's global infrastructure.
              Mount natively on your OS, collaborate across teams, and protect sensitive data with
              client-side zero-knowledge encryption.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <StatusDot status="online" size="sm" />
              <span className="font-mono text-[11px]">All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3 text-xs">
            <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
              Products
            </span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#desktop" className="hover:text-foreground transition-colors">
                  Desktop FUSE App (Linux/macOS/Win)
                </a>
              </li>
              <li>
                <a href="#web-drive" className="hover:text-foreground transition-colors">
                  Web Drive & Explorer
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-foreground transition-colors">
                  Zero-Knowledge Vault
                </a>
              </li>
              <li>
                <a href="#workspaces" className="hover:text-foreground transition-colors">
                  Team Workspaces
                </a>
              </li>
              <li>
                <a href="#downloader" className="hover:text-foreground transition-colors">
                  Social Media Downloader
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 text-xs">
            <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
              Developers & Docs
            </span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://github.com/Deeriver-Cloud/deeriver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-foreground transition-colors">
                  Storage Cost Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ & Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div className="space-y-3 text-xs">
            <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
              Community
            </span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Send className="w-3 h-3 text-[#229ED9]" />
                  <span>Telegram Community</span>
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-foreground transition-colors">
                  Privacy & Encryption
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Open-Source Apache 2.0 / MIT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} DeeRiver Cloud. All rights reserved.</p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Built with precision for privacy and boundless freedom</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
