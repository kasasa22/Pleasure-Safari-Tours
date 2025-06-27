import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, ArrowLeft, Star, Clock, Shield, Users } from "lucide-react"

interface ServiceData {
  title: string
  description: string
  longDescription: string
  image: string
  features: string[]
  pricing: string
  duration: string
  highlights: string[]
}

interface ServiceDetailTemplateProps {
  service: ServiceData
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center text-white hover:text-yellow-400 mb-8 transition-colors bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2">
                Premium Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">{service.longDescription}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-3">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +256 704368446
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">Pricing</span>
                  </div>
                  <p className="text-yellow-200 font-bold">{service.pricing}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-green-400 mr-2" />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-green-200">{service.duration}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl transform rotate-6"></div>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
              <p className="text-xl text-gray-600">Everything you need for a perfect experience</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose This Service?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Our travel experts are standing by to help you plan the perfect experience
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-blue-100">+256 704368446</p>
                <p className="text-blue-100">+256 785783389</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-blue-100">pleasuresafaritours@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Visit Office</h3>
                <p className="text-blue-100">Kamu Kamu Building</p>
                <p className="text-blue-100">Kampala, Uganda</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 text-lg">
                Book This Service
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
              >
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
