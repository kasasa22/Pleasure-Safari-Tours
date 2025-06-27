import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"

export default function FeaturedDestinations() {
  const destinations = [
    {
      image: "/images/dubai.jpg",
      title: "Dubai, UAE",
      desc: "Modern marvels and luxury experiences",
      price: "From $2,500",
      rating: 4.9,
      category: "Luxury",
    },
    {
      image: "/images/cape.jpg",
      title: "Cape Town, SA",
      desc: "Stunning landscapes and wine culture",
      price: "From $1,800",
      rating: 4.8,
      category: "Adventure",
    },
    {
      image: "/images/mtn.jpg",
      title: "Mountain Adventures",
      desc: "Breathtaking natural beauty",
      price: "From $1,200",
      rating: 4.7,
      category: "Nature",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base">
            Popular Destinations
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Discover Amazing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Places Around the World
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our handpicked destinations that offer unforgettable experiences
          </p>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-0"
            >
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <Badge className="bg-white/90 text-gray-800 text-xs sm:text-sm">{dest.category}</Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-1" />
                  <span className="text-white text-xs sm:text-sm font-medium">{dest.rating}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{dest.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-blue-200 mb-2">{dest.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-300 font-semibold text-xs sm:text-sm md:text-base">{dest.price}</span>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                    >
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg">
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
