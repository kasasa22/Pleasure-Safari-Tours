"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div
        className={`${isScrolled ? "hidden" : "hidden lg:block"} bg-purple-900 text-white py-2 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center hover:text-yellow-300 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>+256 704368446</span>
              </div>
              <div className="flex items-center hover:text-yellow-300 transition-colors">
                <Mail className="h-4 w-4 mr-1" />
                <span>pleasuresafaritours@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center hover:text-yellow-300 transition-colors">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Kamu Kamu Building, Entebbe Road, Kampala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Mobile Optimized */}
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <span className="font-bold text-sm sm:text-lg lg:text-xl">P&S</span>
            </div>
            <div className="hidden sm:block">
              <div
                className={`font-bold text-base sm:text-lg lg:text-xl ${isScrolled ? "text-purple-900" : "text-white"} transition-colors`}
              >
                Pleasure & Safari Tours
              </div>
              <div className={`text-xs sm:text-sm ${isScrolled ? "text-gray-600" : "text-blue-200"} transition-colors`}>
                Your Premier Travel Partner
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold px-4 lg:px-6 py-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm lg:text-base">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isScrolled ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-yellow-300"} p-2 h-10 w-10`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l border-gray-200">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg">
                      <span className="font-bold text-lg">P&S</span>
                    </div>
                    <div>
                      <div className="font-bold text-purple-900">Pleasure & Safari Tours</div>
                      <div className="text-sm text-gray-600">Your Premier Travel Partner</div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-all text-base border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold py-3 text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Quote
                    </Button>
                  </div>

                  {/* Contact Info in Mobile Menu */}
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Contact Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-3 text-purple-600" />
                        <span className="text-sm">+256 704368446</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-3 text-purple-600" />
                        <span className="text-sm">pleasuresafaritours@gmail.com</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <MapPin className="h-4 w-4 mr-3 mt-0.5 text-purple-600" />
                        <span className="text-sm">Kamu Kamu Building, Entebbe Road, Kampala</span>
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
