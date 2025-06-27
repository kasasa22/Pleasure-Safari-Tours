import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function VisaPassportProcessingPage() {
  const serviceData = {
    title: "Visa and Passport Processing",
    description: "Fast, reliable, and hassle-free visa processing services for all destinations worldwide.",
    longDescription:
      "Navigate the complex world of visa applications with our expert assistance. We handle all types of visas including tourist, business, student, and transit visas for destinations across the globe. Our team stays updated with the latest requirements and changes in visa policies to ensure your application is processed smoothly and efficiently.",
    image: "/images/china.jpg",
    features: [
      "Complete document preparation and review",
      "Application form completion assistance",
      "Embassy appointment scheduling",
      "Document submission and collection",
      "Real-time application status tracking",
      "Express processing options available",
      "Visa renewal and extension services",
      "Expert consultation on visa requirements",
      "Photo and document scanning services",
      "Translation services for documents",
      "Travel itinerary preparation",
      "Embassy interview preparation",
    ],
    pricing: "From $200 - $400 USD",
    duration: "1-30 days processing time",
    highlights: [
      "95% visa approval success rate",
      "Partnerships with embassies worldwide",
      "Emergency visa processing available",
      "Free consultation on visa requirements",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
