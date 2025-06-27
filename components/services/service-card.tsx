import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: any
    features: string[]
    image: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Icon Overlay */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
            <service.icon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Popular Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <Link href={`/services/${service.id}`}>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 group-hover:shadow-lg transition-all">
            Learn More & Book Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {/* Quick Contact */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Need help? Call us at <span className="font-semibold text-purple-600">+256 704368446</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
