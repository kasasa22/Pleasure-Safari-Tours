import { Button } from "@/components/ui/button"
import PackageCard from "@/components/packages/package-card"

export default function PackagesPage() {
  const packages = [
    {
      id: "dubai-luxury",
      title: "Dubai Luxury Experience",
      description: "Experience the glamour of Dubai with luxury accommodations, desert safaris, and city tours.",
      image: "/images/dubai.jpg",
      duration: "7 Days / 6 Nights",
      price: 2500,
      originalPrice: 3000,
      rating: 4.9,
      highlights: ["Burj Khalifa visit", "Desert safari", "Luxury hotel", "City tour", "Shopping experience"],
      includes: ["Flights", "Accommodation", "Meals", "Tours", "Transfers"],
    },
    {
      id: "cape-town-adventure",
      title: "Cape Town Adventure",
      description: "Discover the beauty of Cape Town with Table Mountain, wine tours, and coastal experiences.",
      image: "/images/cape.jpg",
      duration: "6 Days / 5 Nights",
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      highlights: ["Table Mountain", "Wine tasting", "Penguin colony", "City tour", "Waterfront"],
      includes: ["Flights", "Accommodation", "Breakfast", "Tours", "Transfers"],
    },
    {
      id: "mountain-expedition",
      title: "Mountain Expedition",
      description: "Adventure seekers paradise with mountain hiking, scenic views, and outdoor activities.",
      image: "/images/mtn.jpg",
      duration: "5 Days / 4 Nights",
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      highlights: ["Mountain hiking", "Scenic views", "Camping", "Wildlife", "Photography"],
      includes: ["Accommodation", "Meals", "Guide", "Equipment", "Transfers"],
    },
    {
      id: "beach-paradise",
      title: "Beach Paradise Getaway",
      description: "Relax and unwind in tropical paradise with pristine beaches and water activities.",
      image: "/images/sa.jpg",
      duration: "8 Days / 7 Nights",
      price: 2200,
      originalPrice: 2800,
      rating: 4.9,
      highlights: ["Private beach", "Water sports", "Spa treatments", "Island hopping", "Sunset cruises"],
      includes: ["Flights", "Resort stay", "All meals", "Activities", "Transfers"],
    },
    {
      id: "cultural-immersion",
      title: "Cultural Immersion Tour",
      description: "Deep dive into local culture with authentic experiences, local cuisine, and traditions.",
      image: "/images/beach.jpg",
      duration: "10 Days / 9 Nights",
      price: 1900,
      originalPrice: 2400,
      rating: 4.8,
      highlights: ["Cultural sites", "Local cuisine", "Traditional crafts", "Music & dance", "Home stays"],
      includes: ["Accommodation", "Meals", "Cultural guide", "Activities", "Transfers"],
    },
    {
      id: "luxury-cruise",
      title: "Luxury Ocean Cruise",
      description: "Sail the seas in luxury with premium amenities, fine dining, and entertainment.",
      image: "/images/cana.jpg",
      duration: "12 Days / 11 Nights",
      price: 3500,
      originalPrice: 4200,
      rating: 5.0,
      highlights: ["Luxury suite", "Fine dining", "Entertainment", "Spa services", "Shore excursions"],
      includes: ["Cruise fare", "All meals", "Entertainment", "Activities", "Port transfers"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">Travel Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated travel packages designed to give you the best experiences at incredible
            value. Each package includes everything you need for an unforgettable journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-20 text-center bg-purple-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Need a Custom Package?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the perfect package? Let us create a personalized travel experience just for you.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">Request Custom Package</Button>
        </div>
      </div>
    </div>
  )
}
