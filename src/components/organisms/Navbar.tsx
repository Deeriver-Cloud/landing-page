import { useState, useEffect } from "react"
import { HardDrive, Menu, X, ArrowUpRight, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Desktop App", href: "#desktop" },
    { label: "Web Drive", href: "#web-drive" },
    { label: "Vault & Security", href: "#security" },
    { label: "Workspaces", href: "#workspaces" },
    { label: "Downloader", href: "#downloader" },
    { label: "Calculator", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 p-[1px] shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-foreground flex items-center gap-1.5">
              DeeRiver
              <Badge variant="glow" className="text-[10px] py-0 px-1.5 h-4 font-mono">
                v0.1
              </Badge>
            </span>
            <span className="text-[10px] text-muted-foreground -mt-1 font-mono">
              Telegram Cloud FS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-secondary/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-border/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Deeriver-Cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/60 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://deeriver.wiregeek.ir/drive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glow" size="sm" className="gap-2 font-medium">
              <Send className="w-3.5 h-3.5" />
              <span>Launch Web Drive</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://deeriver.wiregeek.ir/drive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glow" size="sm" className="text-xs h-8 px-2.5">
              Launch
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="https://deeriver.wiregeek.ir/drive"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="glow" className="w-full justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Telegram SSO Login</span>
              </Button>
            </a>
            <a
              href="https://github.com/Deeriver-Cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full justify-center gap-2">
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
