import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/atoms/Typography"
import { GradientBadge } from "@/components/atoms/GradientBadge"

export function FaqSection() {
  const faqs = [
    {
      q: "Is DeeRiver really unlimited storage?",
      a: "Yes. DeeRiver leverages Telegram's cloud storage infrastructure, which provides free, unlimited file hosting up to 2GB per file (or 4GB with Telegram Premium). DeeRiver automatically splits files larger than 2GB/4GB into seamless, parallel chunks and reassembles them on the fly.",
    },
    {
      q: "Does Telegram ban or rate-limit accounts for storing files?",
      a: "DeeRiver is fully compliant with Telegram's Terms of Service and MTProto API specifications. Our distributed backend workers manage upload pacing, concurrency pools, and automatic exponential backoff retry algorithms to guarantee you never trigger FLOOD_WAIT or account bans.",
    },
    {
      q: "How does the native Desktop app mount files without using local SSD storage?",
      a: "DeeRiver uses FUSE (Filesystem in Userspace). Files are purely virtual entries in your OS tree. When you open a 10GB video or audio file in VLC, DeeRiver uses HTTP range requests to stream only the requested byte ranges directly from Telegram's nearest datacenter into local RAM, consuming zero persistent disk space.",
    },
    {
      q: "Can Telegram or DeeRiver staff see my private files?",
      a: "Files placed inside your designated .vault folder are encrypted on your local device using AES-GCM-256 before leaving your computer. Your encryption key is derived client-side from your master passphrase. Neither DeeRiver nor Telegram has access to your key — only high-entropy encrypted ciphertext exists on the servers.",
    },
    {
      q: "How does Telegram SSO login work?",
      a: "You authenticate via the official Telegram Login Widget or Telegram Bot OTP. This provides one-click passwordless authentication with zero credentials stored on our servers, preventing credential leaks and password theft.",
    },
    {
      q: "How do Team Workspaces collaborate in real time?",
      a: "When you drag or copy a folder into a Team Workspace, the changes are recorded in your workspace registry and mapped across multi-channel storage pools. Every teammate running DeeRiver Desktop or the Web Drive sees the new files immediately and can stream them concurrently.",
    },
    {
      q: "What happens if I lose my internet connection?",
      a: "DeeRiver Desktop includes a built-in Offline Mode with a persistent upload queue. You can continue creating, moving, and editing files offline. All changes are staged locally in ~/.cache/deeriver/ and automatically uploaded with exponential backoff once internet connectivity is restored.",
    },
  ]

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={
            <GradientBadge variant="primary" icon={<HelpCircle className="w-3.5 h-3.5" />}>
              Frequently Asked Questions
            </GradientBadge>
          }
          title="Everything You Need"
          highlight="To Know."
          description="Clear answers to the most common questions regarding security, architecture, performance, and storage limits."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-border/80 bg-zinc-950/60 px-5 backdrop-blur-md"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
