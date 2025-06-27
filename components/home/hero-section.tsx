"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plane, Phone, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 relative z-10">
        {/* Mobile Contact Bar */}
        <div className="lg:hidden bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 text-white text-xs">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-2" />
              <span>+256 704368446</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-2" />
              <span>pleasuresafaritours@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="min-h-[calc(100vh-120px)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1">
              {/* Company Name - Mobile Optimized */}
              <div className="text-center lg:text-left mb-4 sm:mb-6">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 sm:p-3 rounded-xl">
                    <span className="font-bold text-lg sm:text-xl">P&S</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl text-white">Pleasure & Safari Tours</div>
                    <div className="text-xs sm:text-sm text-yellow-300">Your Premier Travel Partner</div>
                  </div>
                </div>
              </div>

              {/* Tagline - Mobile Optimized */}
              <p className="text-sm sm:text-lg md:text-xl text-yellow-300 mb-6 sm:mb-8 leading-relaxed font-medium text-center lg:text-left px-2 lg:px-0">
                Creating unforgettable travel experiences with premium services and reliable partnerships
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 lg:px-0">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base shadow-2xl border-0 transform hover:scale-105 transition-all"
                >
                  <Plane className="mr-2 h-4 w-4" />
                  Travel Portfolio
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-sm font-semibold"
                >
                  Contact Us
                </Button>
              </div>

              {/* Statistics - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-white/90">Happy Travelers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-white/90">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-white/90">Support</div>
                </div>
              </div>
            </div>

            {/* Right Image - Mobile Optimized */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6"></div>
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-48 sm:h-64 lg:h-auto">
                <Image
                  src="/images/dubai.jpg"
                  alt="Luxury travel experience"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
