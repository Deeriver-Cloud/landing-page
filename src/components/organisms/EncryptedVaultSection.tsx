import { useState } from "react"
import {
  Lock,
  ShieldCheck,
  Key,
  Eye,
  FileCheck,
  Binary,
  Cpu,
  EyeOff,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function EncryptedVaultSection() {
  const [showEncryptedView, setShowEncryptedView] = useState<boolean>(true)

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-background/60">
      {/* Background purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="purple" icon={<Lock className="w-3.5 h-3.5" />}>
              Zero-Knowledge Privacy
            </GradientBadge>
          }
          title="Zero-Knowledge Encrypted Vault."
          highlight="No One Sees Your Data."
          description="Every file placed in your designated .vault folder is encrypted locally with military-grade AES-GCM-256 before leaving your machine. Not even Telegram or DeeRiver staff can read your files."
        />

        {/* Security Diagram / Interactive Comparison */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-purple-500/30 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-border/60 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  Interactive Cipher Inspection
                </h3>
                <Badge variant="purple" className="text-[10px]">
                  AES-256-GCM
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Toggle below to compare what Telegram's storage datacenters store versus what is rendered on your authenticated device.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-border/80">
              <Button
                variant={showEncryptedView ? "glow" : "ghost"}
                size="sm"
                onClick={() => setShowEncryptedView(true)}
                className={`text-xs h-8 gap-1.5 ${
                  showEncryptedView ? "bg-purple-600 hover:bg-purple-500 text-white" : "text-zinc-400"
                }`}
              >
                <Binary className="w-3.5 h-3.5" />
                <span>What Telegram Sees</span>
              </Button>
              <Button
                variant={!showEncryptedView ? "glow" : "ghost"}
                size="sm"
                onClick={() => setShowEncryptedView(false)}
                className={`text-xs h-8 gap-1.5 ${
                  !showEncryptedView ? "bg-emerald-600 hover:bg-emerald-500 text-white" : "text-zinc-400"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>What You See</span>
              </Button>
            </div>
          </div>

          {/* Cipher vs Decrypted Window */}
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 font-mono text-xs overflow-x-auto min-h-[200px] flex flex-col justify-center">
            {showEncryptedView ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-purple-400 pb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" />
                    <span>ENCRYPTED_BLOB_ID_884192.bin (Raw Telegram Payload)</span>
                  </div>
                  <span className="text-zinc-500">Entropy: 7.999 / 8.00 (Max)</span>
                </div>
                <div className="text-zinc-400 leading-relaxed space-y-1 text-[11px] select-all">
                  <p className="text-purple-300">
                    00000000: 4145 532d 4743 4d20 7631 0002 9c4f 1a8b  AES-GCM v1...O..
                  </p>
                  <p>
                    00000010: f912 88da 90b4 71e3 5a6c 801d 4f33 e8a9  ......q.Zl..O3..
                  </p>
                  <p>
                    00000020: 38bf 102c d948 27e1 c092 ff14 78a5 03eb  8..,.H'.....x...
                  </p>
                  <p>
                    00000030: e182 30df a791 42c8 bd39 e601 2348 77aa  ..0...B..9..#Hw.
                  </p>
                  <p className="text-zinc-600">
                    [... 4,194,304 bytes of uncrackable cryptographic ciphertext ...]
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>
                    Telegram cloud channels and CDN caches only hold high-entropy encrypted bits.
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-emerald-400 pb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>financial_audit_2026_q3.pdf (Decrypted in Local RAM)</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">Decryption Valid (MAC OK)</span>
                </div>
                <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800 font-sans text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <span className="font-bold text-white text-sm">DeeRiver Confidential Financial Report</span>
                    <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30">
                      Decrypted
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Client-side key derivation (PBKDF2-SHA256, 100k rounds) unlocks files instantly inside
                    FUSE VFS stream or web preview. The private key never leaves your local memory.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 3 Core Security Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Zero-Knowledge Key</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Your encryption password is never sent over network requests.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Hardware Accelerated</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  AES-NI CPU instructions enable gigabit-speed streaming encryption.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <EyeOff className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">No Metadata Leaks</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  File names and directory hierarchies within vaults are fully obfuscated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
