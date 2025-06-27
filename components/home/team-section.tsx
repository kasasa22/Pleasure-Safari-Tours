import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TeamSection() {
  const team = [
    {
      name: "Robert Ssemakula",
      position: "Founder & CEO",
      experience: "15+ Years",
      specialization: "International Travel & Business Development",
      image: "/placeholder.svg?height=300&width=300",
      description: "Passionate about connecting people with their dream destinations worldwide.",
    },
    {
      name: "Grace Nakamura",
      position: "Head of Operations",
      experience: "12+ Years",
      specialization: "Visa Processing & Documentation",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in visa requirements and documentation for all major destinations.",
    },
    {
      name: "David Mukasa",
      position: "Senior Travel Consultant",
      experience: "10+ Years",
      specialization: "Luxury Travel & Group Tours",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specializes in creating unforgettable luxury travel experiences.",
    },
    {
      name: "Sarah Akinyi",
      position: "Customer Relations Manager",
      experience: "8+ Years",
      specialization: "Customer Service & Support",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to ensuring every client receives exceptional service and support.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our experienced travel professionals are passionate about creating extraordinary travel experiences. Get to
            know the experts who will make your journey unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-white/20"
                  />
                  <Badge className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500">
                    {member.experience}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-blue-200 mb-4">{member.specialization}</p>
                <p className="text-sm text-blue-100 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Company Culture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-3">Passion for Travel</h4>
              <p className="text-blue-100">
                We live and breathe travel, bringing genuine enthusiasm to every client interaction.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-3">Continuous Learning</h4>
              <p className="text-blue-100">
                Our team regularly updates their knowledge of destinations, regulations, and industry trends.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-pink-400 mb-3">Client-First Approach</h4>
              <p className="text-blue-100">
                Every decision we make is guided by what's best for our clients' travel experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
