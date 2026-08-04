import { useEffect, useState } from 'react'
import Navbar from '../components/public/Navbar'
import Hero from '../components/public/Hero'
import Services from '../components/public/Services'
import About from '../components/public/About'
import FAQ from '../components/public/FAQ'
import Booking from '../components/public/Booking'
import Footer from '../components/public/Footer'
import MobileStickyCTA from '../components/public/MobileStickyCTA'
import SchemaMarkup from '../components/public/SchemaMarkup'
import ServiceDetailPage from './ServiceDetailPage'
import ProjectsPage from './ProjectsPage'
import RequestQuotePage from './RequestQuotePage'
import { useBusinessSettings } from '../hooks/useBusinessSettings'
import type { Service } from '../types/database'

function getServiceSlugFromHash(): string | null {
  const hash = window.location.hash || ''
  if (hash.startsWith('#/services/')) {
    return hash.replace('#/services/', '')
  }
  return null
}

function isProjectsRoute(): boolean {
  const hash = window.location.hash || ''
  return hash === '#/projects' || hash === '#projects'
}

function isQuoteRoute(): boolean {
  const hash = window.location.hash || ''
  return hash === '#/quote' || hash === '#quote' || hash === '#/request-a-quote'
}

export default function PublicSite() {
  const { settings } = useBusinessSettings()
  const [preselected, setPreselected] = useState<Service | null>(null)
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(getServiceSlugFromHash())
  const [isProjects, setIsProjects] = useState<boolean>(isProjectsRoute())
  const [isQuote, setIsQuote] = useState<boolean>(isQuoteRoute())

  useEffect(() => {
    function onHashChange() {
      setCurrentServiceSlug(getServiceSlugFromHash())
      setIsProjects(isProjectsRoute())
      setIsQuote(isQuoteRoute())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function scrollToBooking() {
    setCurrentServiceSlug(null)
    setIsProjects(false)
    setIsQuote(false)
    window.location.hash = '#book'
    setTimeout(() => {
      const el = document.getElementById('book')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  function scrollToServices() {
    setCurrentServiceSlug(null)
    setIsProjects(false)
    setIsQuote(false)
    window.location.hash = '#services'
    setTimeout(() => {
      const el = document.getElementById('services')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  useEffect(() => {
    if (!currentServiceSlug && !isProjects && !isQuote) {
      document.title = `${settings.business_name || 'Landscaping And Moore'} — Premium Lawn Care & Yard Maintenance`
    }
  }, [settings.business_name, currentServiceSlug, isProjects, isQuote])

  if (currentServiceSlug) {
    return (
      <ServiceDetailPage
        slug={currentServiceSlug}
        onBack={() => {
          window.location.hash = '#services'
          setCurrentServiceSlug(null)
        }}
        onBookService={(service) => {
          setPreselected(service)
          window.location.hash = '#book'
          setCurrentServiceSlug(null)
          setTimeout(() => {
            const el = document.getElementById('book')
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 150)
        }}
      />
    )
  }

  if (isProjects) {
    return (
      <ProjectsPage
        onBack={() => {
          window.location.hash = '#top'
          setIsProjects(false)
        }}
        onBook={scrollToBooking}
      />
    )
  }

  if (isQuote) {
    return (
      <RequestQuotePage
        onBack={() => {
          window.location.hash = '#top'
          setIsQuote(false)
        }}
        onBook={scrollToBooking}
      />
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 pb-16 md:pb-0">
      <SchemaMarkup settings={settings} />
      <Navbar settings={settings} onBook={scrollToBooking} />
      <main>
        <Hero onBook={scrollToBooking} onViewServices={scrollToServices} />
        <Services
          onSelectService={(s) => {
            setPreselected(s)
            scrollToBooking()
          }}
          onViewServiceDetail={(slug) => {
            window.location.hash = `#/services/${slug}`
            setCurrentServiceSlug(slug)
          }}
        />
        <About />
        <FAQ />
        <Booking
          settings={settings}
          preselected={preselected}
          onPreselectedConsumed={() => setPreselected(null)}
        />
      </main>
      <Footer settings={settings} onBook={scrollToBooking} />
      <MobileStickyCTA settings={settings} onBook={scrollToBooking} />
    </div>
  )
}
