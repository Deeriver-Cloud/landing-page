import { MarketingLayout } from "@/components/templates/MarketingLayout"
import { HeroSection } from "@/components/organisms/HeroSection"
import { OsFileManagerDemo } from "@/components/organisms/OsFileManagerDemo"
import { WebDrivePreview } from "@/components/organisms/WebDrivePreview"
import { BentoGrid } from "@/components/organisms/BentoGrid"
import { EncryptedVaultSection } from "@/components/organisms/EncryptedVaultSection"
import { WorkspacesSection } from "@/components/organisms/WorkspacesSection"
import { MediaDownloaderSection } from "@/components/organisms/MediaDownloaderSection"
import { StorageCalculator } from "@/components/organisms/StorageCalculator"
import { ComparisonTable } from "@/components/organisms/ComparisonTable"
import { FaqSection } from "@/components/organisms/FaqSection"

export function LandingPage() {
  return (
    <MarketingLayout>
      <HeroSection />
      <OsFileManagerDemo />
      <WebDrivePreview />
      <BentoGrid />
      <EncryptedVaultSection />
      <WorkspacesSection />
      <MediaDownloaderSection />
      <StorageCalculator />
      <ComparisonTable />
      <FaqSection />
    </MarketingLayout>
  )
}
