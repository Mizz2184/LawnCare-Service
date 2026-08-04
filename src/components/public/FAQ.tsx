import { useEffect, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const GENERAL_FAQS = [
  {
    question: 'How often should my lawn be mowed in Cedar Hills?',
    answer:
      'During the active growing season (April through October), weekly mowing is recommended for optimal turf density and health. Weekly cutting keeps grass at its ideal 2.5–3.5 inch height, preventing root stress and weed infestation.',
  },
  {
    question: 'What is included in a seasonal yard cleanup?',
    answer:
      'Our seasonal cleanups include blowing leaves out of flower beds and fence lines, turf leaf vacuuming, perennial cutback, stick/branch clearing, edging touch-ups, and complete eco-friendly green waste hauling offsite.',
  },
  {
    question: 'Do I need to be home when Landscaping And Moore performs a service?',
    answer:
      'No, you do not need to be home. As long as our crew has gate access and pets are kept inside, we will complete your service, secure your gates, and leave a digital visit summary.',
  },
  {
    question: 'How does recurring lawn service vs. one-time booking work?',
    answer:
      'Recurring weekly or bi-weekly services are scheduled on a fixed weekday with transparent flat-rate billing. One-time bookings (cleanups, landscape consultations, hedge trimming) can be scheduled individually as needed.',
  },
  {
    question: 'What is your service area coverage around Cedar Hills?',
    answer:
      'We proudly serve Cedar Hills, Highland, American Fork, Pleasant Grove, Lehi, and surrounding Utah Valley communities within a 15-mile radius.',
  },
  {
    question: 'How is lawn care pricing calculated?',
    answer:
      'Our pricing is transparent and based on square footage, turf complexity, and service duration. Weekly mowing starts at flat rate $65 per visit with no hidden fees or contracts.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    // Inject FAQPage JSON-LD schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: GENERAL_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    const existingFaqScript = document.getElementById('jsonld-faq')
    if (existingFaqScript) {
      existingFaqScript.textContent = JSON.stringify(faqSchema)
    } else {
      const script = document.createElement('script')
      script.id = 'jsonld-faq'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section id="faq" className="section bg-cream-50 relative">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow inline-flex">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-forest-900 tracking-tight">
            Everything you need to know about our service
          </h2>
          <p className="mt-4 text-ink-700 text-base md:text-lg">
            Got questions about timing, pricing, or service areas? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="card overflow-hidden transition-all duration-200 border border-ink-100/80 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-lg font-semibold text-forest-900 hover:text-forest-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-forest-50 grid place-items-center text-forest-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-forest-700 text-cream-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-ink-700 leading-relaxed text-base border-t border-cream-100/60 mt-1 animate-fade-in">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
