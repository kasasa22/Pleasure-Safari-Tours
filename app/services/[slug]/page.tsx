import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = {
  "first-class-flights": {
    title: "First Class Flights",
    description: "Experience the pinnacle of luxury travel with our premium first-class flight services.",
    longDescription:
      "Our first-class flight service offers an unparalleled travel experience with the world's leading airlines. From spacious cabins to gourmet dining, every detail is crafted for your comfort and convenience.",
    image: "/images/cana.jpg",
    features: [
      "Premium cabin selection with lie-flat seats",
      "Priority check-in and boarding",
      "Access to exclusive airport lounges",
      "Gourmet dining with wine pairings",
      "Personal entertainment systems",
      "Luxury amenities and comfort kits",
      "Dedicated cabin crew service",
      "Flexible booking and cancellation policies",
    ],
    pricing: "Starting from $2,500",
    duration: "Varies by destination",
  },
  "visa-passport-processing": {
    title: "Visa and Passport Processing",
    description: "Fast, reliable, and hassle-free visa processing services for all destinations worldwide.",
    longDescription:
      "Navigate the complex world of visa applications with our expert assistance. We handle all types of visas including tourist, business, student, and transit visas for destinations across the globe.",
    image: "/images/china.jpg",
    features: [
      "Complete document preparation and review",
      "Application form completion assistance",
      "Embassy appointment scheduling",
      "Document submission and collection",
      "Real-time application status tracking",
      "Express processing options available",
      "Visa renewal and extension services",
      "Expert consultation on visa requirements",
    ],
    pricing: "From $200 - $400 USD",
    duration: "1-30 days processing time",
  },
  // Add more services as needed
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-800">Premium Service</Badge>
            <h1 className="text-5xl font-bold text-purple-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{service.longDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Mail className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Service Details */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Service Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-700">Pricing:</span>
                    <p className="text-purple-600 font-bold">{service.pricing}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Duration:</span>
                    <p className="text-gray-600">{service.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-purple-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our travel experts are ready to assist you with your booking and answer any questions.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Phone:</span> +256 704368446
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> pleasuresafaritours@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
