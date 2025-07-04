import HeroSection from "@/components/HeroSection"
import CommitmentSection from "@/components/CommitmentSection"
import TechTools from "@/components/TechTools"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import PageWrapper from "@/components/PageWrapper"

export default function HomePage() {
  return (
    <PageWrapper hasHero={true}>
      <HeroSection />
      <CommitmentSection />
      <TechTools />
      <Testimonials />
      <Newsletter />
    </PageWrapper>
  )
}
