import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function ContactFAQ() {
  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer:
        "We recommend booking at least 2-3 months in advance for international trips and 1 month for domestic travel to ensure the best rates and availability.",
    },
    {
      question: "Do you handle visa processing for all countries?",
      answer:
        "Yes, we process visas for most countries worldwide. Our team stays updated with the latest visa requirements and can assist with documentation and application processes.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfers, mobile money (MTN Mobile Money, Airtel Money), and major credit cards. Payment plans are also available for larger bookings.",
    },
    {
      question: "Can you arrange custom travel packages?",
      answer:
        "We specialize in creating personalized travel experiences based on your preferences, budget, and travel dates. Contact us to discuss your custom requirements.",
    },
    {
      question: "What happens if I need to cancel my trip?",
      answer:
        "Cancellation policies vary depending on the service provider and timing. We'll work with you to minimize cancellation fees and explore options like rescheduling or travel insurance claims.",
    },
    {
      question: "Do you provide 24/7 support during travel?",
      answer:
        "Yes, we offer 24/7 emergency support for all our clients during their travels. You'll receive emergency contact numbers and have access to our support team anytime.",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
