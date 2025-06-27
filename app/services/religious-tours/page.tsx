import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function ReligiousToursPage() {
  const serviceData = {
    title: "Religious Tours",
    description: "Spiritual journeys to sacred destinations worldwide with specialized guidance.",
    longDescription:
      "Embark on meaningful spiritual journeys to the world's most sacred destinations. Our religious tours are designed with respect and reverence, offering pilgrims the opportunity to deepen their faith while experiencing the rich history and culture of holy sites. Expert guides provide spiritual context and historical significance.",
    image: "/images/mtn.jpg",
    features: [
      "Visits to sacred sites and holy places",
      "Knowledgeable spiritual guides",
      "Group prayer and meditation sessions",
      "Religious ceremony participation",
      "Historical and spiritual education",
      "Interfaith dialogue opportunities",
      "Comfortable pilgrimage accommodations",
      "Kosher/Halal meal arrangements",
      "Religious artifact shopping",
      "Blessing and souvenir opportunities",
      "Group spiritual discussions",
      "Flexible itinerary for worship times",
    ],
    pricing: "From $1,200 - $3,500 per person",
    duration: "7-21 days",
    highlights: [
      "Partnerships with religious organizations",
      "Experienced spiritual tour leaders",
      "Respect for all faith traditions",
      "Special access to restricted religious sites",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
