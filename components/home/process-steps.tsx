import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageCircle, CreditCard, Plane } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover & Plan",
      description:
        "Browse our destinations, packages, or tell us your dream destination. Our experts will help you plan the perfect itinerary.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      icon: MessageCircle,
      title: "Consult & Customize",
      description:
        "Work with our travel consultants to customize your trip. We'll handle visas, accommodations, and special requests.",
      color: "from-green-500 to-teal-500",
    },
    {
      step: "03",
      icon: CreditCard,
      title: "Book & Pay",
      description:
        "Secure your booking with flexible payment options. We offer installment plans and various payment methods for your convenience.",
      color: "from-orange-500 to-red-500",
    },
    {
      step: "04",
      icon: Plane,
      title: "Travel & Enjoy",
      description:
        "Pack your bags and embark on your adventure! Our 24/7 support team is always available during your journey.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From dream to reality in just four simple steps. We make travel planning effortless and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
              )}

              <Card className="relative z-10 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${step.color} mb-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
