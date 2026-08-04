import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { BusinessSettings } from '../types/database'

const FALLBACK: BusinessSettings = {
  id: 'fallback',
  business_name: "Landscaping And Moore",
  business_email: 'landscapingandmoore24@gmail.com',
  business_phone: '(717) 599-0917',
  business_address: '711 Washington Place, Chesterbrook, PA 19087',
  slot_interval_minutes: 30,
  booking_notice_hours: 4,
  created_at: new Date().toISOString(),
}

export function useBusinessSettings() {
  const [settings, setSettings] = useState<BusinessSettings | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const { data, error } = await supabase
        .from('business_settings')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle()
      if (cancelled) return
      if (error || !data) {
        setSettings(FALLBACK)
      } else {
        setSettings(data as BusinessSettings)
      }
      setLoading(false)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return { settings: settings ?? FALLBACK, loading }
}
