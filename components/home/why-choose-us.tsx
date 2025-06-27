import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Clock, Shield, Award, Globe, Heart } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "Expert Travel Consultants",
      description: "Our team of experienced travel professionals provides personalized guidance for every journey.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your bookings and personal information are protected with industry-leading security measures.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance ensures you're never alone during your travel adventures.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive partnerships worldwide guarantee the best rates and exclusive access to destinations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for excellence in customer service and innovative travel solutions.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Heart,
      title: "Personalized Experiences",
      description: "Every itinerary is crafted to match your unique preferences and travel style.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-2">
            Why Choose Pleasure & Safari Tours?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We don't just book trips; we craft experiences that create lasting memories. Here's what sets us apart.
          </p>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div
                  className={`inline-flex p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-br ${reason.color} mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits - Mobile Optimized */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8">
            Additional Benefits You'll Love
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {[
              "Competitive pricing with no hidden fees",
              "Flexible payment plans available",
              "Travel insurance options",
              "Group booking discounts",
              "Loyalty rewards program",
              "Emergency travel assistance",
              "Multi-language support",
              "Sustainable travel options",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
