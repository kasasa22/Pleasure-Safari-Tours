import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function AirportTransfersPage() {
  const serviceData = {
    title: "Airport Transfers",
    description: "Comfortable and reliable airport transfer services with professional drivers.",
    longDescription:
      "Start and end your journey in comfort with our premium airport transfer services. Our professional drivers and luxury vehicles ensure a smooth, safe, and comfortable ride to and from the airport. We monitor flight schedules to ensure timely pickups and provide meet-and-greet services for a stress-free experience.",
    image: "/images/cape.jpg",
    features: [
      "Professional, licensed drivers",
      "Luxury and executive vehicles",
      "Real-time flight monitoring",
      "Meet and greet service at airport",
      "Complimentary waiting time",
      "Child seats available upon request",
      "Wheelchair accessible vehicles",
      "Multiple vehicle options (sedan, SUV, van)",
      "GPS tracking for safety",
      "24/7 customer support",
      "Fixed pricing with no hidden fees",
      "Advance booking and scheduling",
    ],
    pricing: "From $30 - $150 per transfer",
    duration: "30 minutes - 2 hours",
    highlights: [
      "99% on-time performance record",
      "Fleet of modern, well-maintained vehicles",
      "Multilingual driver options available",
      "Corporate accounts with monthly billing",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
