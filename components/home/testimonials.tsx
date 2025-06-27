import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Kampala, Uganda",
      rating: 5,
      text: "Pleasure & Safari Tours made our Dubai trip absolutely magical! From the visa processing to the luxury accommodations, everything was perfect. The team's attention to detail is unmatched.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Dubai Luxury Package",
    },
    {
      name: "Michael Ochieng",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "I've used many travel agencies, but none compare to Pleasure & Safari Tours. Their 24/7 support saved our trip when we had flight delays. Truly professional service!",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Cape Town Adventure",
    },
    {
      name: "Grace Nakamura",
      location: "Entebbe, Uganda",
      rating: 5,
      text: "The religious tour to Jerusalem was life-changing. The guides were knowledgeable, and every detail was perfectly organized. Thank you for making our pilgrimage so meaningful.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Religious Tour Package",
    },
    {
      name: "David Mukasa",
      location: "Jinja, Uganda",
      rating: 5,
      text: "Business travel has never been this smooth. They handled all my visa requirements for multiple countries and got me the best flight deals. Highly recommended for corporate travel!",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Business Travel Services",
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "As a solo female traveler, I felt completely safe and supported throughout my East African adventure. The team went above and beyond to ensure my comfort and safety.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Solo Adventure Package",
    },
    {
      name: "James Kiprotich",
      location: "Eldoret, Kenya",
      rating: 5,
      text: "The educational tour for our university students was exceptional. Every student returned with expanded horizons and unforgettable memories. Professional and educational!",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Educational Tour",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experiences with
            us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
            >
              <div className="absolute top-4 right-4 text-purple-200">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-purple-600 font-medium">{testimonial.trip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
