import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, CheckCircle } from "lucide-react"

interface PackageCardProps {
  package: {
    id: string
    title: string
    description: string
    image: string
    duration: string
    price: number
    originalPrice: number
    rating: number
    highlights: string[]
    includes: string[]
  }
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white">{discount}% OFF</Badge>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm">{pkg.rating}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-purple-900 mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{pkg.duration}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-900">${pkg.price}</span>
            <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
          </div>
          <span className="text-sm text-gray-500">per person</span>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-purple-900 mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700">Book Now</Button>
      </CardContent>
    </Card>
  )
}
