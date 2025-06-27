import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Let us help you create unforgettable memories with our expert travel planning services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-purple-900">
            <ArrowRight className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
            <Mail className="mr-2 h-5 w-5" />
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
