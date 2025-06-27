import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-xl">
                <span className="font-bold text-xl">P&S</span>
              </div>
              <div>
                <div className="font-bold text-xl">Pleasure & Safari Tours</div>
                <div className="text-sm text-blue-200">Your Premier Travel Partner</div>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              With over a decade of experience, we've been turning travel dreams into reality. From luxury flights to
              visa processing, we handle every detail of your journey with expertise and care.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
              <p className="text-blue-200 text-sm mb-4">Get travel tips and exclusive offers</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                />
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-all hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Travel Packages", href: "/packages" },
                { name: "Travel Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-green-300">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500/20 p-2 rounded-lg mr-3 mt-1">
                  <MapPin className="h-4 w-4 text-green-300" />
                </div>
                <div className="text-blue-200 text-sm">
                  <div className="font-medium text-white mb-1">Visit Our Office</div>
                  <div>Kamu Kamu Building</div>
                  <div>Entebbe Road, 2nd Floor</div>
                  <div>Suite F2, Kampala, Uganda</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3 mt-1">
                  <Phone className="h-4 w-4 text-blue-300" />
                </div>
                <div className="text-blue-200 text-sm">
                  <div className="font-medium text-white mb-1">Call Us</div>
                  <div>+256 704368446</div>
                  <div>+256 785783389</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-3 mt-1">
                  <Mail className="h-4 w-4 text-purple-300" />
                </div>
                <div className="text-blue-200 text-sm">
                  <div className="font-medium text-white mb-1">Email Us</div>
                  <div>pleasuresafaritours@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-6 text-center text-yellow-300">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "First Class Flights",
              "Visa Processing",
              "Hotel Reservations",
              "Airport Transfers",
              "Educational Tours",
              "Religious Tours",
              "Business Travel",
              "Group Packages",
            ].map((service) => (
              <div key={service} className="text-blue-200 text-sm hover:text-white transition-colors cursor-pointer">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 Pleasure & Safari Tours. All rights reserved. | Crafted with ❤️ for travelers
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-blue-200 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
