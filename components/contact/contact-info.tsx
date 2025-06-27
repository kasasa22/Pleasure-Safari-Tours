import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 704368446", "+256 785783389"],
      description: "Call us anytime for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["pleasuresafaritours@gmail.com"],
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Kamu Kamu Building", "Entebbe Road, 2nd Floor", "Suite F2, Kampala, Uganda"],
      description: "Visit our office for personalized consultation",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
      description: "We're here when you need us most",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Ready to start planning your next adventure? Our travel experts are here to help you every step of the way.
        </p>
      </div>

      {contactDetails.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <item.icon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">{item.title}</h3>
                <div className="space-y-1 mb-2">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-800">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
