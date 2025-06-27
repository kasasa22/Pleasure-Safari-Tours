import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import Statistics from "@/components/home/statistics"
import ServicesOverview from "@/components/home/services-overview"
import FeaturedDestinations from "@/components/home/featured-destinations"
import WhyChooseUs from "@/components/home/why-choose-us"
import ProcessSteps from "@/components/home/process-steps"
import Testimonials from "@/components/home/testimonials"
import VideoSection from "@/components/home/video-section"
import TeamSection from "@/components/home/team-section"
import TravelTips from "@/components/home/travel-tips"
import BlogPreview from "@/components/home/blog-preview"
import PartnersSection from "@/components/home/partners-section"
import NewsletterSection from "@/components/home/newsletter-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Statistics />
      <ServicesOverview />
      <FeaturedDestinations />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <VideoSection />
      <TeamSection />
      <TravelTips />
      <BlogPreview />
      <PartnersSection />
      <NewsletterSection />
      <CTASection />
    </div>
  )
}
