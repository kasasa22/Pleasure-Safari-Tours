import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Users, Hotel, Car, Briefcase, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: Plane,
      title: "Premium Flights",
      description: "First-class flight bookings with world-class airlines",
      features: ["Priority boarding", "Luxury amenities"],
      color: "from-purple-600 to-blue-600",
      href: "/services/first-class-flights",
      popular: true,
    },
    {
      icon: MapPin,
      title: "Visa Processing",
      description: "Fast and reliable visa services with expert assistance",
      features: ["Document help", "Express processing"],
      color: "from-blue-600 to-indigo-600",
      href: "/services/visa-passport-processing",
      popular: true,
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Luxury accommodations worldwide with best prices",
      features: ["Best price guarantee", "Room upgrades"],
      color: "from-indigo-600 to-purple-600",
      href: "/services/hotel-reservations",
      popular: false,
    },
    {
      icon: Car,
      title: "Airport Transfers",
      description: "Comfortable transportation with professional drivers",
      features: ["Professional drivers", "Luxury vehicles"],
      color: "from-orange-600 to-red-600",
      href: "/services/airport-transfers",
      popular: false,
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Educational and religious group experiences",
      features: ["Expert guides", "Custom itineraries"],
      color: "from-green-600 to-emerald-600",
      href: "/services/educational-tours",
      popular: false,
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Professional corporate travel solutions",
      features: ["Corporate rates", "Priority support"],
      color: "from-gray-600 to-slate-600",
      href: "/services/business-tours",
      popular: false,
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-purple-100 text-purple-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
            OUR SERVICES
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            Comprehensive Travel
            <span className="block text-purple-700">Solutions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From booking flights to processing visas, we handle every aspect of your journey
          </p>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-0 bg-white"
            >
              {service.popular && (
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">Popular</Badge>
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              ></div>

              <CardContent className="p-4 sm:p-6 lg:p-8 relative">
                <div
                  className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 lg:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all group-hover:scale-105 text-xs sm:text-sm`}
                  >
                    Learn More
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Need a Custom Travel Solution?</h3>
          <p className="text-sm sm:text-base lg:text-xl text-purple-100 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
            Can't find exactly what you're looking for? Our travel experts will create a personalized package just for
            you.
          </p>
          <Button
            size="sm"
            className="bg-white text-purple-700 hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
