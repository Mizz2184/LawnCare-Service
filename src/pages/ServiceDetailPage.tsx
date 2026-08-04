import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles, Star } from 'lucide-react'
import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import MobileStickyCTA from '../components/public/MobileStickyCTA'
import SchemaMarkup from '../components/public/SchemaMarkup'
import { DETAILED_SERVICES } from '../data/serviceData'
import { useBusinessSettings } from '../hooks/useBusinessSettings'
import { formatDuration, formatPrice } from '../utils/format'
import { getServiceImage } from '../utils/serviceImages'
import type { Service } from '../types/database'

type Props = {
  slug: string
  onBack: () => void
  onBookService: (service: Service) => void
}

export default function ServiceDetailPage({ slug, onBack, onBookService }: Props) {
  const { settings } = useBusinessSettings()
  const detail = DETAILED_SERVICES[slug] || DETAILED_SERVICES['weekly-lawn-mowing']
  const img = getServiceImage(detail.name)

  const serviceObj: Service = {
    id: detail.id,
    name: detail.name,
    description: detail.shortDescription,
    duration_minutes: detail.durationMinutes,
    price: detail.price,
    is_active: true,
    created_at: new Date().toISOString(),
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${detail.name} in Cedar Hills | Landscaping And Moore`

    // Inject custom Service JSON-LD Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: detail.name,
      description: detail.metaDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: settings.business_name || 'Landscaping And Moore',
        telephone: settings.business_phone || '(717) 599-0917',
        address: settings.business_address || '711 Washington Place, Chesterbrook, PA 19087',
      },
      areaServed: {
        '@type': 'City',
        name: 'Cedar Hills',
      },
      offers: {
        '@type': 'Offer',
        price: detail.price.toString(),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }

    const script = document.createElement('script')
    script.id = 'jsonld-single-service'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(serviceSchema)
    document.head.appendChild(script)

    return () => {
      const el = document.getElementById('jsonld-single-service')
      if (el) el.remove()
    }
  }, [detail, settings])

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 pb-20 md:pb-0">
      <SchemaMarkup settings={settings} />
      <Navbar settings={settings} onBook={() => onBookService(serviceObj)} />

      <main className="pt-28 md:pt-36 pb-20">
        {/* Breadcrumb & Navigation */}
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-ink-500 mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-forest-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </button>
            <span>/</span>
            <span className="text-forest-900 font-semibold">{detail.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5" /> {detail.category} · Cedar Hills, UT
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-forest-900 leading-tight">
              {detail.name}
            </h1>
            <p className="text-xl text-ink-700 leading-relaxed font-display">
              {detail.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 py-2">
              <div className="badge bg-forest-50 text-forest-900 border border-forest-200 px-4 py-2 text-base">
                <span className="font-display font-semibold">{formatPrice(detail.price)}</span>
                <span className="text-ink-500 text-xs ml-1.5">/ visit</span>
              </div>
              <div className="badge bg-white text-ink-700 border border-ink-200 px-4 py-2 text-sm">
                <Clock className="w-4 h-4 text-forest-700" />
                <span>Est. {formatDuration(detail.durationMinutes)}</span>
              </div>
              <div className="badge bg-white text-ink-700 border border-ink-200 px-4 py-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-forest-700" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Direct Booking Card */}
            <div className="rounded-2xl bg-white border border-forest-100 shadow-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  Ready to schedule this service?
                </h3>
                <p className="text-sm text-ink-600">
                  Book online in 60 seconds with same-week scheduling options.
                </p>
              </div>
              <button
                onClick={() => onBookService(serviceObj)}
                className="btn-primary shrink-0 w-full sm:w-auto"
              >
                Book {detail.name}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Localized Longform Content */}
            <div className="prose prose-forest max-w-none pt-6 text-ink-800 leading-relaxed space-y-4 text-base md:text-lg">
              <h2 className="font-display text-2xl font-semibold text-forest-900">
                Professional {detail.name} in Cedar Hills
              </h2>
              {detail.fullContent
                .trim()
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
            </div>

            {/* Feature Bullet Points */}
            <div className="pt-6">
              <h3 className="font-display text-2xl font-semibold text-forest-900 mb-4">
                What's Included in Every Visit
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {detail.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-ink-100 shadow-soft"
                  >
                    <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink-800 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="pt-8">
              <h3 className="font-display text-2xl font-semibold text-forest-900 mb-4">
                Our 4-Step Service Process
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {detail.processSteps.map((step) => (
                  <div
                    key={step.title}
                    className="p-5 rounded-2xl bg-forest-50/70 border border-forest-100"
                  >
                    <h4 className="font-display text-lg font-semibold text-forest-900">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQ */}
            <div className="pt-8">
              <h3 className="font-display text-2xl font-semibold text-forest-900 mb-4">
                {detail.name} FAQs
              </h3>
              <div className="space-y-4">
                {detail.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="p-5 rounded-2xl bg-white border border-ink-100 shadow-soft"
                  >
                    <h4 className="font-display text-base font-semibold text-forest-900">
                      {faq.question}
                    </h4>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-white">
              <img
                src={img}
                alt={detail.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lift border border-white">
                <div className="flex items-center gap-1 text-forest-700">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-forest-700 text-forest-700" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-ink-800">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-ink-600 mt-1">
                  Trusted by 1,200+ homeowners across Cedar Hills & Utah Valley.
                </p>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="rounded-3xl bg-forest-900 text-cream-50 p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 text-sage-200">
                <MapPin className="w-5 h-5 text-lemon-400" />
                <h4 className="font-display text-lg font-semibold text-cream-50">
                  Cedar Hills Service Coverage
                </h4>
              </div>
              <p className="text-sm text-cream-50/80 leading-relaxed">
                We perform {detail.name.toLowerCase()} services in Cedar Hills, Highland, American
                Fork, Pleasant Grove, and Lehi.
              </p>
              <div className="pt-2 border-t border-cream-50/10">
                <button
                  onClick={() => onBookService(serviceObj)}
                  className="w-full btn-primary bg-cream-50 text-forest-900 hover:bg-white justify-center"
                >
                  Schedule Your Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer settings={settings} onBook={() => onBookService(serviceObj)} />
      <MobileStickyCTA settings={settings} onBook={() => onBookService(serviceObj)} />
    </div>
  )
}
