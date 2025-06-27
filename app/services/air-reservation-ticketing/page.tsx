import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function AirReservationTicketingPage() {
  const serviceData = {
    title: "Air Reservation and Ticketing",
    description: "Complete flight booking services for domestic and international travel with competitive rates.",
    longDescription:
      "We handle all your flight booking needs with our comprehensive air reservation and ticketing services. Our experienced team works with multiple airlines to find you the best routes, schedules, and prices for your travel requirements. Whether it's a simple round trip or complex multi-city itinerary, we've got you covered.",
    image: "/images/about-img.jpg",
    features: [
      "Online booking system available 24/7",
      "Group bookings with special rates",
      "Multi-city and complex itineraries",
      "Travel insurance options",
      "Seat selection and meal preferences",
      "Mobile boarding passes",
      "Flight change and cancellation assistance",
      "Price monitoring and alerts",
      "Corporate travel accounts",
      "Frequent flyer program enrollment",
      "Special assistance requests",
      "Real-time flight status updates",
    ],
    pricing: "From $50 service fee + ticket cost",
    duration: "Instant to 24 hours",
    highlights: [
      "Access to unpublished airline fares",
      "Price match guarantee",
      "Free flight changes within 24 hours",
      "Dedicated support for complex bookings",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
