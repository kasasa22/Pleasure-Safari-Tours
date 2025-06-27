import ServiceCard from "@/components/services/service-card"
import { Plane, FileText, Hotel, Car, GraduationCap, Church, Briefcase, MapPin } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "first-class-flights",
      title: "First Class Flights",
      description:
        "Premium flight bookings with the world's leading airlines. Experience luxury travel with our exclusive first-class flight arrangements.",
      icon: Plane,
      features: ["Premium cabin selection", "Priority boarding", "Luxury amenities", "Flexible booking options"],
      image: "/images/cana.jpg",
    },
    {
      id: "air-reservation-ticketing",
      title: "Air Reservation and Ticketing",
      description:
        "Complete flight booking services for domestic and international travel. We handle all your ticketing needs with competitive rates.",
      icon: FileText,
      features: ["Online booking system", "Group bookings", "Multi-city itineraries", "Travel insurance"],
      image: "/images/about-img.jpg",
    },
    {
      id: "visa-passport-processing",
      title: "Visa and Passport Processing",
      description:
        "Fast and reliable visa processing services for all destinations. We handle the paperwork so you can focus on your travel plans.",
      icon: MapPin,
      features: ["Document preparation", "Application submission", "Status tracking", "Express processing"],
      image: "/images/china.jpg",
    },
    {
      id: "hotel-reservations",
      title: "Hotel Reservations",
      description:
        "Luxury accommodations worldwide with our extensive network of partner hotels. From boutique hotels to international chains.",
      icon: Hotel,
      features: ["Best rate guarantee", "Room upgrades", "Special amenities", "Flexible cancellation"],
      image: "/images/dubai.jpg",
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description:
        "Comfortable and reliable airport transfer services. Start and end your journey in comfort with our professional drivers.",
      icon: Car,
      features: ["Professional drivers", "Luxury vehicles", "Flight monitoring", "Meet & greet service"],
      image: "/images/cape.jpg",
    },
    {
      id: "educational-tours",
      title: "Educational Tours",
      description:
        "Enriching educational travel experiences for students and professionals. Learn while you explore with our guided educational programs.",
      icon: GraduationCap,
      features: ["Expert guides", "Educational materials", "Group discounts", "Custom itineraries"],
      image: "/images/beach.jpg",
    },
    {
      id: "religious-tours",
      title: "Religious Tours",
      description:
        "Spiritual journeys to sacred destinations worldwide. Experience meaningful pilgrimages with our specialized religious tour packages.",
      icon: Church,
      features: ["Sacred site visits", "Spiritual guides", "Group prayers", "Cultural immersion"],
      image: "/images/mtn.jpg",
    },
    {
      id: "business-tours",
      title: "Business Tours",
      description:
        "Professional business travel solutions for corporate clients. Efficient and cost-effective business travel management.",
      icon: Briefcase,
      features: ["Corporate rates", "Travel management", "Expense reporting", "Priority support"],
      image: "/images/sa.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel solutions tailored to meet the diverse needs of our clients. From luxury flights to
            visa processing, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}
