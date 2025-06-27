import ServiceDetailTemplate from "@/components/services/service-detail-template"

export default function HotelReservationsPage() {
  const serviceData = {
    title: "Hotel Reservations",
    description: "Luxury accommodations worldwide with our extensive network of partner hotels.",
    longDescription:
      "Experience the finest accommodations around the world with our comprehensive hotel reservation services. From boutique hotels to international chains, we secure the best rates and ensure your stay exceeds expectations. Our partnerships with premium hotels worldwide guarantee exclusive amenities and upgrades.",
    image: "/images/dubai.jpg",
    features: [
      "Best rate guarantee across all platforms",
      "Complimentary room upgrades when available",
      "Special amenities and welcome gifts",
      "Flexible cancellation policies",
      "24/7 concierge support during stay",
      "Airport transfer coordination",
      "Restaurant reservations and recommendations",
      "Local activity and tour bookings",
      "VIP check-in and late checkout",
      "Loyalty program enrollment",
      "Group booking discounts",
      "Corporate travel rates",
    ],
    pricing: "From $100 - $500+ per night",
    duration: "Flexible stay duration",
    highlights: [
      "Partnership with 1000+ hotels worldwide",
      "Exclusive rates not available to public",
      "Complimentary breakfast at select properties",
      "Priority customer service and support",
    ],
  }

  return <ServiceDetailTemplate service={serviceData} />
}
