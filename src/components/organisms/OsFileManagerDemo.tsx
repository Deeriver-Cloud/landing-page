import { useState } from "react"
import {
  HardDrive,
  Folder,
  FileText,
  Lock,
  Users,
  Grid,
  List,
  ChevronRight,
  Home,
  Download,
  Clock,
  Play,
  ArrowDownToLine,
  Laptop,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StatusDot } from "@/components/atoms/StatusDot"
import { FileRowItem } from "@/components/molecules/FileRowItem"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

interface FileEntry {
  id: string
  name: string
  type: "folder" | "video" | "code" | "document" | "vault" | "workspace"
  size?: string
  status?: "synced" | "uploading" | "encrypted" | "streaming"
}

export function OsFileManagerDemo() {
  const [currentFolder, setCurrentFolder] = useState<string>("root")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [selectedFile, setSelectedFile] = useState<FileEntry | null>(null)

  const folderContents: Record<string, { title: string; path: string; items: FileEntry[] }> = {
    root: {
      title: "DeeRiver Drive",
      path: "~/deeriver",
      items: [
        { id: "1", name: "Team Workspaces", type: "workspace", size: "4 items", status: "synced" },
        { id: "2", name: "4K Media & Renders", type: "folder", size: "12 items", status: "synced" },
        { id: "3", name: ".vault (Zero-Knowledge)", type: "vault", size: "8 items", status: "encrypted" },
        { id: "4", name: "Social Ingestion (YouTube & Reels)", type: "folder", size: "15 items", status: "synced" },
        { id: "5", name: "project_architecture.pdf", type: "document", size: "4.2 MB", status: "synced" },
        { id: "6", name: "demo_screencast_4k.mp4", type: "video", size: "3.4 GB", status: "streaming" },
      ],
    },
    workspaces: {
      title: "Team Workspaces",
      path: "~/deeriver/Team Workspaces",
      items: [
        { id: "w1", name: "Design System 2026", type: "folder", size: "48 items", status: "synced" },
        { id: "w2", name: "Mobile App Wireframes.fig", type: "document", size: "18.5 MB", status: "synced" },
        { id: "w3", name: "marketing_launch_assets.zip", type: "document", size: "1.2 GB", status: "uploading" },
        { id: "w4", name: "product_roadmap_q4.md", type: "document", size: "24 KB", status: "synced" },
      ],
    },
    vault: {
      title: ".vault (Zero-Knowledge)",
      path: "~/deeriver/.vault",
      items: [
        { id: "v1", name: "crypto_wallets_backup.kdbx", type: "vault", size: "1.8 MB", status: "encrypted" },
        { id: "v2", name: "corporate_contracts_signed.pdf", type: "vault", size: "12.4 MB", status: "encrypted" },
        { id: "v3", name: "private_pgp_keyring.asc", type: "vault", size: "8.1 KB", status: "encrypted" },
      ],
    },
    media: {
      title: "4K Media & Renders",
      path: "~/deeriver/4K Media & Renders",
      items: [
        { id: "m1", name: "drone_cinematic_iceland_raw.mp4", type: "video", size: "3.9 GB", status: "streaming" },
        { id: "m2", name: "podcast_episode_42_master.wav", type: "video", size: "890 MB", status: "streaming" },
        { id: "m3", name: "blender_3d_render_v4.blend", type: "document", size: "1.6 GB", status: "synced" },
      ],
    },
  }

  const activeData = folderContents[currentFolder] || folderContents.root

  return (
    <section id="desktop" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="primary" icon={<Laptop className="w-3.5 h-3.5" />}>
              Native Desktop Integration
            </GradientBadge>
          }
          title="Mount Your Telegram to Your Computer."
          highlight="Just Like an Infinite USB Drive."
          description="With our desktop app, your Telegram connects directly to your system just like plugging in a giant USB flash drive. Drag & drop files, play movies instantly, and manage folders right inside your file manager without using up your local hard drive."
        />

        {/* Ubuntu Nautilus Window Mockup */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-border/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Ubuntu Style Window Header */}
          <div className="bg-zinc-900/90 px-4 py-3 border-b border-border/60 flex items-center justify-between select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E95420] shadow-sm flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-[#5E2750] shadow-sm flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" />
              <span className="ml-3 text-xs font-medium text-zinc-400 font-mono hidden sm:inline">
                Ubuntu 24.04 LTS — GNOME Files (Nautilus)
              </span>
            </div>

            {/* Path Breadcrumb Bar */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-800/90 rounded-lg text-xs font-mono text-zinc-300 border border-zinc-700/60 shadow-inner">
              <HardDrive className="w-3.5 h-3.5 text-primary" />
              <span>{activeData.path}</span>
            </div>

            {/* View Toggles & Search */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-zinc-400 hover:text-white"
                onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
              >
                {viewMode === "list" ? <Grid className="w-3.5 h-3.5" /> : <List className="w-3.5 h-3.5" />}
              </Button>
            </div>
          </div>

          {/* Main Nautilus Body: Left Sidebar + File Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 min-h-[460px]">
            {/* Left Sidebar (Places & Mounts) */}
            <div className="p-3 bg-zinc-900/40 border-r border-border/50 text-xs text-zinc-300 space-y-4">
              <div>
                <span className="px-2 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  Standard Places
                </span>
                <div className="mt-1 space-y-0.5">
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800/60 cursor-pointer">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800/60 cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span>Documents</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800/60 cursor-pointer">
                    <Download className="w-4 h-4" />
                    <span>Downloads</span>
                  </div>
                </div>
              </div>

              {/* Mounted Cloud Drive */}
              <div>
                <span className="px-2 text-[10px] uppercase font-bold text-primary tracking-wider flex items-center justify-between">
                  <span>Mounted Drive</span>
                  <StatusDot status="online" size="sm" />
                </span>
                <div className="mt-1 space-y-0.5">
                  <div
                    onClick={() => setCurrentFolder("root")}
                    className={`flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                      currentFolder === "root"
                        ? "bg-primary/20 text-white font-medium border border-primary/30"
                        : "hover:bg-zinc-800/60 text-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <HardDrive className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">DeeRiver (FUSE)</span>
                    </div>
                    <Badge variant="success" className="text-[9px] py-0 px-1.5 h-4">
                      Live
                    </Badge>
                  </div>

                  {/* Subfolders in DeeRiver */}
                  <div className="pl-4 space-y-0.5 pt-1">
                    <div
                      onClick={() => setCurrentFolder("workspaces")}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                        currentFolder === "workspaces"
                          ? "bg-primary/20 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Workspaces</span>
                    </div>
                    <div
                      onClick={() => setCurrentFolder("media")}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                        currentFolder === "media"
                          ? "bg-primary/20 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Folder className="w-3.5 h-3.5 text-amber-400" />
                      <span>4K Media</span>
                    </div>
                    <div
                      onClick={() => setCurrentFolder("vault")}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                        currentFolder === "vault"
                          ? "bg-primary/20 text-white font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Lock className="w-3.5 h-3.5 text-purple-400" />
                      <span>.vault</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mount Diagnostics */}
              <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] font-mono space-y-1">
                <div className="flex justify-between text-zinc-400">
                  <span>Mount:</span>
                  <span className="text-zinc-200">/home/user/deeriver</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Engine:</span>
                  <span className="text-cyan-400">FUSE v2.9</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Quota:</span>
                  <span className="text-emerald-400">Unlimited (∞)</span>
                </div>
              </div>
            </div>

            {/* Right Pane: File Listing */}
            <div className="md:col-span-3 p-4 bg-zinc-950/40 flex flex-col justify-between">
              <div>
                {/* Path bar indicator */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/40 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span
                      onClick={() => setCurrentFolder("root")}
                      className="cursor-pointer hover:text-primary transition-colors"
                    >
                      deeriver
                    </span>
                    {currentFolder !== "root" && (
                      <>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-foreground">{activeData.title}</span>
                      </>
                    )}
                  </div>
                  <span className="font-mono text-[11px]">{activeData.items.length} items</span>
                </div>

                {/* File Items */}
                <div className="space-y-1">
                  {activeData.items.map((item) => (
                    <FileRowItem
                      key={item.id}
                      name={item.name}
                      type={item.type}
                      size={item.size}
                      status={item.status}
                      active={selectedFile?.id === item.id}
                      onClick={() => {
                        setSelectedFile(item)
                        if (item.type === "workspace") setCurrentFolder("workspaces")
                        if (item.type === "vault") setCurrentFolder("vault")
                        if (item.name.includes("Media")) setCurrentFolder("media")
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Streaming & File Preview Banner */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-cyan-500/10 to-transparent border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Play className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Instant Parallel Range-Streaming</p>
                    <p className="text-muted-foreground">
                      Play a 4GB .mkv video in VLC immediately without pre-downloading.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="cyan" className="font-mono text-[10px]">
                    25MB/s MTProto
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Architecture Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Native App Compatibility</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Works directly with any desktop application: save Blender projects, compile code in
              VS Code, or edit photos in GIMP right inside your cloud mount.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Offline Mode & Resumable Queue</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Disconnected? Keep creating and editing files. DeeRiver stages your changes in a
              persistent local queue and uploads them automatically when connection returns.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ArrowDownToLine className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Zero Local Space Consumed</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Files are virtualized. Browse petabytes of videos, raw backups, and team files without
              eating up your laptop's precious NVMe drive capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
