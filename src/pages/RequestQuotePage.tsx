import { useState, type FormEvent } from 'react'
import { ArrowLeft, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react'
import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import MobileStickyCTA from '../components/public/MobileStickyCTA'
import SchemaMarkup from '../components/public/SchemaMarkup'
import { useBusinessSettings } from '../hooks/useBusinessSettings'

type Props = {
  onBack: () => void
  onBook: () => void
}

const SERVICE_OPTIONS = [
  'Lawn Mowing',
  'Mulching',
  'Hedge Trimming',
  'Power Washing',
  'Spring Clean Up',
  'Landscape Lighting',
  'Hardscaping',
  'Aeration',
  'Seeding/Fertilization',
  'Fall Clean Up',
  'Tree Removal',
  'Stump Grinding',
  'Commercial Snow Removal',
  'Gutter Cleaning',
]

const HEAR_ABOUT_OPTIONS = [
  'Google Search',
  'Social Media (Facebook/Instagram)',
  'Friend / Family Referral',
  'Neighbor',
  'Yard Sign / Truck',
  'Repeat Client',
  'Other',
]

export default function RequestQuotePage({ onBack, onBook }: Props) {
  const { settings } = useBusinessSettings()

  // Form State
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [streetAddress2, setStreetAddress2] = useState('')
  const [city, setCity] = useState('')
  const [stateProv, setStateProv] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [preferredTiming, setPreferredTiming] = useState('')
  const [hearAbout, setHearAbout] = useState('')

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (selectedServices.length === 0) {
      alert('Please select at least one service need below.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-sage-50/40 to-cream-50 text-ink-900 pb-20 md:pb-0">
      <SchemaMarkup settings={settings} />
      <Navbar settings={settings} onBook={onBook} />

      <main className="pt-28 md:pt-36 pb-20">
        <div className="container-px mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-ink-500 mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-forest-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </button>
            <span>/</span>
            <span className="text-forest-900 font-semibold">Request a Quote</span>
          </div>

          {/* Form Card Container */}
          <div className="bg-white rounded-3xl border border-forest-100 shadow-card overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-b from-cream-50 to-white p-8 md:p-10 border-b border-ink-100/70 text-center space-y-4">
              <div className="inline-flex items-center justify-center h-14 px-4 py-1.5 rounded-2xl bg-white border border-forest-700/15 shadow-soft mx-auto">
                <img
                  src="/logo.png"
                  alt="Landscaping And Moore Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-forest-900 tracking-tight">
                Landscaping And Moore Request a Quote
              </h1>
              <p className="text-sm md:text-base text-ink-700 max-w-xl mx-auto leading-relaxed">
                Landscaping and Moore Services the Chester County, Montgomery County and Delaware County in PA and would be more than happy to provide you a quote for your next service!
              </p>
            </div>

            {submitted ? (
              /* Success Confirmation */
              <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-forest-50 text-forest-700 grid place-items-center mx-auto border border-forest-200 shadow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900">
                    Quote Request Received!
                  </h2>
                  <p className="mt-3 text-ink-700 max-w-md mx-auto leading-relaxed text-base">
                    Thank you, <span className="font-semibold text-forest-900">{firstName}</span>. Our team has received your request for{' '}
                    <span className="font-semibold text-forest-900">{selectedServices.join(', ')}</span>. We will review your property address and contact you shortly with your customized quote.
                  </p>
                </div>

                <div className="pt-4 border-t border-ink-100 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setSelectedServices([])
                    }}
                    className="btn-secondary justify-center"
                  >
                    Submit Another Quote Request
                  </button>
                  <button onClick={onBack} className="btn-primary justify-center">
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              /* Quote Form */
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-forest-900">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder=""
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <span className="text-xs text-ink-500 mt-1 block">First Name</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder=""
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <span className="text-xs text-ink-500 mt-1 block">Last Name</span>
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-forest-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="input sm:max-w-md"
                    placeholder="(000) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="text-xs text-ink-500 block">Please enter a valid phone number.</span>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-forest-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="input sm:max-w-md"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-forest-900">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder=""
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                      <span className="text-xs text-ink-500 mt-1 block">Street Address</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        className="input"
                        placeholder=""
                        value={streetAddress2}
                        onChange={(e) => setStreetAddress2(e.target.value)}
                      />
                      <span className="text-xs text-ink-500 mt-1 block">Street Address Line 2</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          className="input"
                          placeholder=""
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        <span className="text-xs text-ink-500 mt-1 block">City</span>
                      </div>

                      <div>
                        <input
                          type="text"
                          required
                          className="input"
                          placeholder=""
                          value={stateProv}
                          onChange={(e) => setStateProv(e.target.value)}
                        />
                        <span className="text-xs text-ink-500 mt-1 block">State / Province</span>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder=""
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                      <span className="text-xs text-ink-500 mt-1 block">Postal / Zip Code</span>
                    </div>
                  </div>
                </div>

                {/* Select Your Service Needs Below */}
                <div className="space-y-3 pt-4 border-t border-ink-100">
                  <label className="block text-sm font-semibold text-forest-900">
                    Select Your Service Needs Below: <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isChecked = selectedServices.includes(srv)
                      return (
                        <label
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                            isChecked
                              ? 'bg-forest-50 border-forest-600 text-forest-900 font-semibold shadow-soft'
                              : 'bg-white border-ink-200 text-ink-800 hover:border-forest-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-forest-700 focus:ring-forest-600 cursor-pointer"
                          />
                          <span className="text-sm">{srv}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* What days/times work for us to give you a quote? */}
                <div className="space-y-2 pt-2">
                  <label className="block text-sm font-semibold text-forest-900">
                    What days/times work for us to give you a quote?
                  </label>
                  <textarea
                    rows={4}
                    className="input"
                    placeholder="Type here..."
                    value={preferredTiming}
                    onChange={(e) => setPreferredTiming(e.target.value)}
                  />
                </div>

                {/* How did you hear about us? */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-forest-900">
                    How did you hear about us?
                  </label>
                  <select
                    className="input sm:max-w-md cursor-pointer"
                    value={hearAbout}
                    onChange={(e) => setHearAbout(e.target.value)}
                  >
                    <option value="">Please Select</option>
                    {HEAR_ABOUT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-ink-100 flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-soft hover:shadow-card transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer settings={settings} onBook={onBook} />
      <MobileStickyCTA settings={settings} onBook={onBook} />
    </div>
  )
}
