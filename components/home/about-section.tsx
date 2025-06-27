import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Shield } from "lucide-react"

export default function AboutSection() {
  const strengths = [
    {
      icon: Users,
      title: "Partnership",
      description: "Collaborative network leveraging each partner's expertise",
      color: "bg-blue-500",
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Travel specialists from various fields coming together",
      color: "bg-green-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Latest travel technology and creative approaches",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Transparent operations and reliable results",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-6 bg-purple-100 text-purple-800 px-4 py-2 text-sm font-semibold">ABOUT US</Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900 block mb-2">About P&S</span>
              <span className="text-purple-700 block">Our Strengths</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our travel partnership is an organization where multiple specialized companies collaborate, combining
              their expertise and experience to provide the highest quality travel services to our clients.
            </p>

            <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-img.jpg"
                alt="Travel team collaboration"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-full ${strength.color} mb-6`}>
                <strength.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
              <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
