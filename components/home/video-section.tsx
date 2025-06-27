import { Button } from "@/components/ui/button"
import { Play, Volume2 } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how we transform travel dreams into reality. See testimonials from our clients and get a glimpse of
            the amazing destinations we offer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <Button
                size="lg"
                className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 rounded-full p-6"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">▶ Watch Our Story</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">More Than Just a Travel Agency</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We're your travel companions, dream makers, and adventure enablers. Every journey we plan is a story
                waiting to be told, a memory waiting to be made.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Client Success Stories",
                  description: "Hear directly from travelers who've experienced our exceptional service",
                },
                {
                  title: "Destination Showcases",
                  description: "Virtual tours of the amazing places you can visit with us",
                },
                {
                  title: "Behind the Scenes",
                  description: "See how our team works tirelessly to perfect your travel experience",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Volume2 className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Watch Full Documentary
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Photo Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
