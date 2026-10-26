import {
  Folder,
  FileText,
  FileVideo,
  FileCode,
  Lock,
  Users,
  CheckCircle2,
  CloudUpload,
  ArrowDownToLine,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface FileItemProps {
  name: string
  type: "folder" | "video" | "code" | "document" | "vault" | "workspace"
  size?: string
  modified?: string
  status?: "synced" | "uploading" | "encrypted" | "streaming"
  active?: boolean
  onClick?: () => void
}

export function FileRowItem({
  name,
  type,
  size,
  status = "synced",
  active = false,
  onClick,
}: FileItemProps) {
  const getIcon = () => {
    switch (type) {
      case "vault":
        return <Lock className="w-5 h-5 text-purple-400 shrink-0" />
      case "workspace":
        return <Users className="w-5 h-5 text-cyan-400 shrink-0" />
      case "folder":
        return <Folder className="w-5 h-5 text-amber-400 fill-amber-400/20 shrink-0" />
      case "video":
        return <FileVideo className="w-5 h-5 text-rose-400 shrink-0" />
      case "code":
        return <FileCode className="w-5 h-5 text-blue-400 shrink-0" />
      default:
        return <FileText className="w-5 h-5 text-slate-400 shrink-0" />
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case "encrypted":
        return (
          <Badge variant="purple" className="text-[10px] py-0 px-2 h-5 gap-1">
            <Lock className="w-2.5 h-2.5" />
            E2E Encrypted
          </Badge>
        )
      case "streaming":
        return (
          <Badge variant="cyan" className="text-[10px] py-0 px-2 h-5 gap-1">
            <ArrowDownToLine className="w-2.5 h-2.5 animate-bounce" />
            Instant Stream
          </Badge>
        )
      case "uploading":
        return (
          <Badge variant="glow" className="text-[10px] py-0 px-2 h-5 gap-1">
            <CloudUpload className="w-2.5 h-2.5 animate-pulse" />
            Syncing
          </Badge>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400/90 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Synced
          </span>
        )
    }
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer group text-sm select-none border border-transparent",
        active
          ? "bg-primary/15 border-primary/30 text-foreground"
          : "hover:bg-secondary/60 hover:border-border/40 text-slate-300"
      )}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        {getIcon()}
        <span className="font-medium truncate group-hover:text-white transition-colors">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-4 shrink-0 text-xs text-muted-foreground">
        {size && <span className="font-mono">{size}</span>}
        <div className="hidden sm:block">{getStatusBadge()}</div>
      </div>
    </div>
  )
}
