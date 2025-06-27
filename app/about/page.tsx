import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, Heart, Star, MapPin, Phone, Mail, Shield, Target, Eye, Clock } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "50+", label: "Destinations", icon: Globe, color: "from-green-500 to-emerald-500" },
    { number: "10+", label: "Years Experience", icon: Award, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Support", icon: Heart, color: "from-orange-500 to-red-500" },
  ]

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery, ensuring every journey exceeds expectations.",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Reliability",
      description:
        "Count on us for consistent, dependable travel solutions that you can trust for your most important journeys.",
      icon: Shield,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to enhance your travel experience and simplify the process.",
      icon: Globe,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our top priority in everything we do, from initial consultation to post-travel support.",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const team = [
    {
      name: "Robert Ssemakula",
      position: "Founder & CEO",
      experience: "15+ Years",
      specialization: "International Travel & Business Development",
      image: "/placeholder.svg?height=300&width=300",
      description: "Passionate about connecting people with their dream destinations worldwide.",
      education: "MBA in Tourism Management",
    },
    {
      name: "Grace Nakamura",
      position: "Head of Operations",
      experience: "12+ Years",
      specialization: "Visa Processing & Documentation",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in visa requirements and documentation for all major destinations.",
      education: "Bachelor's in International Relations",
    },
    {
      name: "David Mukasa",
      position: "Senior Travel Consultant",
      experience: "10+ Years",
      specialization: "Luxury Travel & Group Tours",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specializes in creating unforgettable luxury travel experiences.",
      education: "Diploma in Travel & Tourism",
    },
    {
      name: "Sarah Akinyi",
      position: "Customer Relations Manager",
      experience: "8+ Years",
      specialization: "Customer Service & Support",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to ensuring every client receives exceptional service and support.",
      education: "Bachelor's in Hospitality Management",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/about-img.jpg" alt="About Us" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2">
                About Pleasure & Safari Tours
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Your Trusted Travel
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Partner Since 2014
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                For over a decade, we've been turning travel dreams into reality. From humble beginnings to becoming
                East Africa's premier travel agency, our journey has been driven by one simple mission: making
                exceptional travel accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-3">
                  Our Story
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl transform rotate-6"></div>
              <Image
                src="/images/about-img.jpg"
                alt="Professional travel consultant"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} mb-6`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and clear vision, we're committed to excellence in every journey we plan
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="p-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 mr-4" />
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-blue-100">
                  To provide seamless and memorable travel experiences that exceed expectations. We are committed to
                  excellence in service delivery, customer satisfaction, and making travel accessible to everyone
                  through innovative solutions and personalized care.
                </p>
              </CardContent>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-green-600 to-teal-600 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 mr-4" />
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-green-100">
                  To be the leading travel and tours company in East Africa, recognized globally for our innovative
                  solutions, exceptional service quality, and commitment to sustainable tourism that benefits both
                  travelers and local communities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border-0"
                >
                  <CardContent className="pt-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${value.color} mb-6`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence in travel services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Best Travel Agency 2024",
                description: "Awarded by East Africa Tourism Board for outstanding service excellence",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Users,
                title: "500+ Happy Clients",
                description: "Successfully served over 500 satisfied customers across the globe",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Globe,
                title: "50+ Destinations",
                description: "Extensive network covering major destinations worldwide",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Shield,
                title: "98% Success Rate",
                description: "Exceptional visa approval and booking success rate",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock customer support for all your travel needs",
                color: "from-red-500 to-rose-500",
              },
              {
                icon: Star,
                title: "4.9/5 Rating",
                description: "Consistently high customer satisfaction ratings",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((achievement, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${achievement.color} mb-6`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our passionate travel professionals bring decades of combined experience to make your journey
              extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
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
                  <p className="text-sm text-blue-200 mb-3">{member.specialization}</p>
                  <p className="text-xs text-blue-300 mb-4">{member.education}</p>
                  <p className="text-sm text-blue-100 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Culture */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-8">Why Our Team Makes the Difference</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">🌍 Passion for Travel</h4>
                <p className="text-blue-100">
                  We live and breathe travel, bringing genuine enthusiasm to every client interaction and
                  recommendation.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-3">📚 Continuous Learning</h4>
                <p className="text-blue-100">
                  Our team regularly updates their knowledge of destinations, regulations, and industry trends to serve
                  you better.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-pink-400 mb-3">❤️ Client-First Approach</h4>
                <p className="text-blue-100">
                  Every decision we make is guided by what's best for our clients' travel experiences and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "IATA Certified Agent",
              "Uganda Tourism Board Licensed",
              "Best Travel Agency 2024",
              "Customer Service Excellence Award",
            ].map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Get in touch with our expert team to start planning your next adventure
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+256 704368446</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">pleasuresafaritours@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
