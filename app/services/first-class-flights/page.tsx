import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function FirstClassFlightsPage() {
  const serviceData = {
    title: "First Class Flights",
    description: "Experience the pinnacle of luxury travel with our premium first-class flight services.",
    longDescription:
      "Our first-class flight service offers an unparalleled travel experience with the world's leading airlines. From spacious cabins to gourmet dining, every detail is crafted for your comfort and convenience. Enjoy lie-flat seats, premium lounges, and personalized service that makes your journey as memorable as your destination.",
    image: "/images/cana.jpg",
    features: [
      "Premium cabin selection with lie-flat seats",
      "Priority check-in and boarding",
      "Access to exclusive airport lounges",
      "Gourmet dining with wine pairings",
      "Personal entertainment systems",
      "Luxury amenities and comfort kits",
      "Dedicated cabin crew service",
      "Flexible booking and cancellation policies",
      "Complimentary seat selection",
      "Extra baggage allowance",
      "Fast-track security and immigration",
      "Chauffeur service to/from airport",
    ],
    pricing: "Starting from $2,500",
    duration: "Varies by destination",
    highlights: [
      "Partnership with 50+ premium airlines",
      "24/7 flight support and assistance",
      "Complimentary upgrades when available",
      "Flexible date changes with minimal fees",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
