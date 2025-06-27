import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Bell, Globe } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected with Us</h2>
            <p className="text-xl text-purple-100 mb-8">
              Subscribe to our newsletter and be the first to know about exclusive deals, travel tips, and new
              destinations.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Gift,
                title: "Exclusive Deals",
                description: "Get access to subscriber-only discounts and early bird offers",
              },
              {
                icon: Bell,
                title: "Travel Alerts",
                description: "Stay updated on visa changes, travel advisories, and requirements",
              },
              {
                icon: Globe,
                title: "Destination Guides",
                description: "Receive detailed guides and insider tips for your next adventure",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <benefit.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-purple-200 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Join 5,000+ Happy Subscribers</h3>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:bg-white/30"
                />
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-purple-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
