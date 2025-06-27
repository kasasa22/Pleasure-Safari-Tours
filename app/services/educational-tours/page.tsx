import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function EducationalToursPage() {
  const serviceData = {
    title: "Educational Tours",
    description: "Enriching educational travel experiences for students and professionals.",
    longDescription:
      "Expand horizons and enhance learning through our carefully designed educational tours. Perfect for schools, universities, and professional groups, our educational programs combine cultural immersion with academic enrichment. Expert guides and customized itineraries ensure meaningful learning experiences that last a lifetime.",
    image: "/images/beach.jpg",
    features: [
      "Expert local guides and educators",
      "Customized educational materials",
      "Interactive learning experiences",
      "Cultural immersion activities",
      "Historical site visits and tours",
      "Museum and gallery access",
      "Language practice opportunities",
      "Group discussion sessions",
      "Educational workshops and seminars",
      "Certificate of participation",
      "Group photos and documentation",
      "Safety briefings and protocols",
    ],
    pricing: "From $800 - $2,500 per person",
    duration: "5-14 days",
    highlights: [
      "Partnerships with educational institutions worldwide",
      "Specialized programs for different age groups",
      "Group discounts for 10+ participants",
      "Pre-trip educational materials provided",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
