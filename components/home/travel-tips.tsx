import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Shield, Plane, Camera, Map, Heart } from "lucide-react"

export default function TravelTips() {
  const tips = [
    {
      icon: Shield,
      category: "Safety",
      title: "Travel Insurance is Essential",
      tip: "Always purchase comprehensive travel insurance before your trip. It protects you from unexpected medical expenses, trip cancellations, and lost luggage.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Plane,
      category: "Booking",
      title: "Book Flights in Advance",
      tip: "For international travel, book your flights 2-3 months ahead for the best deals. Tuesday and Wednesday departures are often cheaper.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Map,
      category: "Planning",
      title: "Research Your Destination",
      tip: "Learn about local customs, currency, weather, and basic phrases in the local language. This enhances your experience and shows respect for the culture.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Camera,
      category: "Documentation",
      title: "Keep Digital Copies",
      tip: "Store digital copies of your passport, visa, tickets, and important documents in cloud storage. This saves you if originals are lost or stolen.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Heart,
      category: "Health",
      title: "Check Vaccination Requirements",
      tip: "Some destinations require specific vaccinations. Consult a travel health clinic 4-6 weeks before departure to ensure you're properly protected.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Lightbulb,
      category: "Money",
      title: "Notify Your Bank",
      tip: "Inform your bank about your travel plans to avoid card blocks. Also, carry multiple payment methods and some local currency for emergencies.",
      color: "from-yellow-500 to-amber-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent mb-6">
            Expert Travel Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from our years of experience. These insider tips will help you travel smarter, safer, and more
            enjoyably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${tip.color} mr-4`}>
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {tip.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Need More Travel Advice?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts are always ready to share personalized advice for your specific destination and travel
            style. Don't hesitate to reach out for customized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
              Get Personalized Tips
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-all">
              Download Travel Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
