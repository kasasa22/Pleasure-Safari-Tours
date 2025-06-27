import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Heart, Shield } from "lucide-react"

export default function Statistics() {
  const stats = [
    {
      icon: TrendingUp,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on client feedback",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Covered",
      description: "Worldwide destinations",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      number: "2,500+",
      label: "Dreams Fulfilled",
      description: "Successful trips organized",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Secure Booking",
      description: "Protected transactions",
      color: "from-purple-500 to-violet-600",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Trusted by
            <span className="block text-purple-700">Thousands</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our commitment to excellence has earned us the trust of travelers worldwide
          </p>
        </div>

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-0 bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
              <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 text-center relative">
                <div
                  className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-full bg-gradient-to-br ${stat.color} mb-3 sm:mb-4 lg:mb-6`}
                >
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
