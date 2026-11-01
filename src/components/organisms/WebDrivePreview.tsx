import { useState } from "react"
import {
  Globe,
  Send,
  Search,
  UploadCloud,
  FolderPlus,
  Lock,
  HardDrive,
  Users,
  FileText,
  FileVideo,
  FileImage,
  Folder,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function WebDrivePreview() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const files = [
    { name: "Brand Guidelines 2026.pdf", type: "pdf", size: "8.4 MB", date: "Oct 24, 2026", cat: "docs" },
    { name: "Product Launch Video 4K.mp4", type: "video", size: "2.1 GB", date: "Oct 25, 2026", cat: "media" },
    { name: "DeeRiver Design System.fig", type: "doc", size: "34 MB", date: "Oct 22, 2026", cat: "docs" },
    { name: "Hero Visual Render 01.png", type: "image", size: "12.8 MB", date: "Yesterday", cat: "media" },
    { name: "Encrypted Backup Key.vault", type: "vault", size: "4.2 KB", date: "Oct 19, 2026", cat: "vault" },
    { name: "Quarterly Financial Model.xlsx", type: "doc", size: "1.4 MB", date: "Oct 15, 2026", cat: "docs" },
  ]

  const filteredFiles = files.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase())
    if (activeTab === "all") return matchesSearch
    if (activeTab === "media") return matchesSearch && (f.type === "video" || f.type === "image")
    if (activeTab === "vault") return matchesSearch && f.type === "vault"
    return matchesSearch
  })

  return (
    <section id="web-drive" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="cyan" icon={<Globe className="w-3.5 h-3.5" />}>
              Google Drive & Dropbox Experience
            </GradientBadge>
          }
          title="A Full Web Drive in Your Browser."
          highlight="No App Installation Required."
          description="Manage nested folders, stream movies, preview documents, and share files just like Google Drive or Dropbox — running entirely in your browser with 1-click Telegram login."
        />

        {/* Telegram SSO Callout Card */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-primary/10 to-transparent border border-sky-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#229ED9]/20 border border-[#229ED9]/30 flex items-center justify-center shrink-0 shadow-lg shadow-[#229ED9]/15">
              <Send className="w-6 h-6 text-[#229ED9]" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-sm sm:text-base">
                  Frictionless Telegram SSO Login
                </span>
                <Badge variant="cyan" className="text-[10px] py-0 px-1.5 h-4">
                  Zero Passwords
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Log in securely using your Telegram account. No credit cards, no passwords to forget,
                and zero risk of credential stuffing attacks.
              </p>
            </div>
          </div>

          <a
            href="https://app.gitlynx.ir/drive"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button variant="glow" size="sm" className="w-full sm:w-auto gap-2">
              <Send className="w-3.5 h-3.5" />
              <span>Login with Telegram</span>
            </Button>
          </a>
        </div>

        {/* Web Drive Interface Mockup */}
        <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="bg-zinc-900/90 px-4 py-3 border-b border-border/60 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL Bar */}
            <div className="flex-1 max-w-md mx-auto flex items-center gap-2 px-3 py-1 bg-zinc-800/80 rounded-lg text-zinc-300 font-mono text-[11px] border border-zinc-700/50 justify-center">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>https://app.gitlynx.ir/drive</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <span className="font-mono text-[11px] hidden sm:inline text-emerald-400">
                Connected
              </span>
            </div>
          </div>

          {/* Web Drive App Toolbar */}
          <div className="p-4 bg-zinc-900/40 border-b border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search files and folders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex items-center gap-1 bg-zinc-800/60 p-1 rounded-lg border border-zinc-700/60">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === "all" ? "bg-primary text-white font-medium" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("media")}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === "media" ? "bg-primary text-white font-medium" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Media
                </button>
                <button
                  onClick={() => setActiveTab("vault")}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === "vault" ? "bg-primary text-white font-medium" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Vault
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 bg-zinc-800/60 border-zinc-700">
                <FolderPlus className="w-3.5 h-3.5 text-amber-400" />
                <span>New Folder</span>
              </Button>
              <Button variant="glow" size="sm" className="h-8 text-xs gap-1.5">
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Upload Files</span>
              </Button>
            </div>
          </div>

          {/* Web Drive Main Body: Sidebar + File Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 min-h-[420px]">
            {/* Left Nav */}
            <div className="p-3 bg-zinc-900/30 border-r border-border/50 text-xs text-zinc-300 space-y-4 hidden md:block">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-primary/15 text-primary font-medium border border-primary/20">
                  <HardDrive className="w-4 h-4" />
                  <span>My Cloud Drive</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-400 hover:bg-zinc-800/50 cursor-pointer">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Team Workspaces</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-400 hover:bg-zinc-800/50 cursor-pointer">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>Encrypted Vault</span>
                </div>
              </div>

              {/* Infinite Storage Meter */}
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-[11px] space-y-2 mt-8">
                <div className="flex justify-between font-medium">
                  <span className="text-zinc-400">Cloud Storage:</span>
                  <span className="text-primary font-mono font-bold">Unlimited (∞)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-primary rounded-full animate-pulse" />
                </div>
                <p className="text-[10px] text-zinc-500">
                  Backed by Telegram multi-datacenter network.
                </p>
              </div>
            </div>

            {/* Right: Files Grid */}
            <div className="md:col-span-3 p-5 bg-zinc-950/20">
              {/* Folder Quick Access */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Folders
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer flex items-center gap-3">
                    <Folder className="w-8 h-8 text-amber-400 fill-amber-400/20 shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-zinc-200 truncate">Workspaces</p>
                      <p className="text-[10px] text-zinc-500 font-mono">18 files</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer flex items-center gap-3">
                    <Folder className="w-8 h-8 text-cyan-400 fill-cyan-400/20 shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-zinc-200 truncate">4K Footage</p>
                      <p className="text-[10px] text-zinc-500 font-mono">124 files</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer flex items-center gap-3">
                    <Lock className="w-8 h-8 text-purple-400 shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-purple-300 truncate">Zero-Knowledge</p>
                      <p className="text-[10px] text-zinc-500 font-mono">E2E Protected</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Files Table */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Recent Files
                </h4>
                <div className="space-y-1.5">
                  {filteredFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:bg-zinc-800/50 hover:border-zinc-700/80 transition-all text-xs cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        {file.type === "video" && <FileVideo className="w-4 h-4 text-rose-400 shrink-0" />}
                        {file.type === "image" && <FileImage className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {file.type === "pdf" && <FileText className="w-4 h-4 text-amber-400 shrink-0" />}
                        {file.type === "doc" && <FileText className="w-4 h-4 text-blue-400 shrink-0" />}
                        {file.type === "vault" && <Lock className="w-4 h-4 text-purple-400 shrink-0" />}

                        <span className="font-medium text-zinc-300 group-hover:text-white truncate">
                          {file.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-zinc-500 font-mono text-[11px] shrink-0">
                        <span>{file.size}</span>
                        <span className="hidden sm:inline">{file.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
