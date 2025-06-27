import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ImageGallery() {
  const galleryImages = [
    {
      image: "/images/dubai.jpg",
      title: "Dubai Skyline",
      location: "Dubai, UAE",
      category: "City Tours",
      description: "Modern marvels and luxury experiences",
    },
    {
      image: "/images/cape.jpg",
      title: "Cape Town Views",
      location: "Cape Town, South Africa",
      category: "Adventure",
      description: "Stunning landscapes and wine tours",
    },
    {
      image: "/images/mtn.jpg",
      title: "Mountain Adventures",
      location: "Highland Destinations",
      category: "Nature",
      description: "Breathtaking natural beauty",
    },
    {
      image: "/images/sa.jpg",
      title: "Coastal Paradise",
      location: "Beach Destinations",
      category: "Beach",
      description: "Pristine beaches and ocean views",
    },
    {
      image: "/images/beach.jpg",
      title: "Water Activities",
      location: "River Adventures",
      category: "Adventure",
      description: "Exciting water sports and activities",
    },
    {
      image: "/images/cana.jpg",
      title: "Luxury Cruises",
      location: "Ocean Experiences",
      category: "Luxury",
      description: "Premium ocean adventures",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Amazing
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get inspired by these incredible destinations and experiences from our recent trips and client adventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">{item.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-200 mb-2">{item.location}</p>
                  <p className="text-xs text-gray-300">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6">Ready to create your own amazing memories?</p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  )
}
