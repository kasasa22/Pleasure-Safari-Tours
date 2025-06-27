import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "Emirates Airlines", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Qatar Airways", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Turkish Airlines", logo: "/placeholder.svg?height=80&width=120" },
    { name: "KLM", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Marriott Hotels", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Hilton", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Booking.com", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Expedia", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted Partners Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the world's leading airlines, hotels, and travel service providers to bring you the best deals
            and experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={80}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
