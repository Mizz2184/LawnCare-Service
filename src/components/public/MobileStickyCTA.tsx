import { Calendar, Phone } from 'lucide-react'
import type { BusinessSettings } from '../../types/database'

type Props = {
  settings: BusinessSettings
  onBook: () => void
}

export default function MobileStickyCTA({ settings, onBook }: Props) {
  const phone = settings.business_phone || '(717) 599-0917'

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-forest-900/95 backdrop-blur-md border-t border-forest-700/80 p-3 shadow-2xl animate-fade-up">
      <div className="container-px mx-auto flex items-center gap-2">
        <a
          href={`tel:${phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 py-3 px-4 text-sm font-semibold border border-forest-600 transition-colors"
        >
          <Phone className="w-4 h-4 text-lemon-400" />
          <span>Call Now</span>
        </a>
        <button
          onClick={onBook}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cream-50 hover:bg-white text-forest-900 py-3 px-4 text-sm font-semibold shadow-soft transition-colors"
        >
          <Calendar className="w-4 h-4 text-forest-700" />
          <span>Book Service</span>
        </button>
      </div>
    </div>
  )
}
