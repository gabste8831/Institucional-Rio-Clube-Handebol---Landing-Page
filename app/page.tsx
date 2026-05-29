import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { TeamSection } from "@/components/landing/team-section"
import { HistorySection } from "@/components/landing/history-section"
import { TrainingSection } from "@/components/landing/training-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { InstagramSection } from "@/components/landing/instagram-section"
import { ContactSection } from "@/components/landing/contact-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { RealizationSection } from "@/components/landing/realization-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <HistorySection />
      <TrainingSection />
      <GallerySection />
      <InstagramSection />
      <ContactSection />
      <PartnersSection />
      <RealizationSection />
      <Footer />
    </main>
  )
}
