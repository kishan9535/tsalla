import HeroSection from "@/components/HeroSection"
import CommitmentSection from "@/components/CommitmentSection"
import PageWrapper from "@/components/PageWrapper"

export default function HomePage() {
  return (
    <PageWrapper hasHero={true}>
      <HeroSection />
      <CommitmentSection />
    </PageWrapper>
  )
}
