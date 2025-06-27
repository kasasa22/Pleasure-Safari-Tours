import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function BusinessToursPage() {
  const serviceData = {
    title: "Business Tours",
    description: "Professional business travel solutions for corporate clients and executives.",
    longDescription:
      "Streamline your business travel with our comprehensive corporate travel management services. We understand the unique needs of business travelers and provide efficient, cost-effective solutions that allow you to focus on your business objectives. From executive travel to large corporate events, we handle every detail.",
    image: "/images/sa.jpg",
    features: [
      "Corporate travel rates and discounts",
      "Executive travel management",
      "Meeting and conference coordination",
      "Business hotel accommodations",
      "Airport lounge access arrangements",
      "Ground transportation coordination",
      "Travel expense reporting",
      "24/7 business travel support",
      "Last-minute booking capabilities",
      "Travel policy compliance",
      "Group booking management",
      "Corporate billing and invoicing",
    ],
    pricing: "Custom corporate rates",
    duration: "Flexible business schedules",
    highlights: [
      "Dedicated corporate travel managers",
      "Cost savings through volume discounts",
      "Priority booking and customer service",
      "Comprehensive travel reporting and analytics",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
