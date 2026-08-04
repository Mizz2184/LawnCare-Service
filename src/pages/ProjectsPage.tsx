import { useEffect, useState } from 'react'
import { ArrowLeft, Calendar, ExternalLink, Filter, Image as ImageIcon, MapPin, Maximize2, Play, Sparkles, Video, X } from 'lucide-react'
import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import MobileStickyCTA from '../components/public/MobileStickyCTA'
import SchemaMarkup from '../components/public/SchemaMarkup'
import { useGSAPAnimations } from '../hooks/useGSAPAnimations'
import { PROJECTS_DATA, type ProjectItem } from '../data/projectData'
import { useBusinessSettings } from '../hooks/useBusinessSettings'

type Props = {
  onBack: () => void
  onBook: () => void
}

export default function ProjectsPage({ onBack, onBook }: Props) {
  useGSAPAnimations()
  const { settings } = useBusinessSettings()
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all')
  const [activeMedia, setActiveMedia] = useState<ProjectItem | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `Projects & Video Showcase | Landscaping And Moore`

    const baseUrl = window.location.origin
    const businessName = settings.business_name || 'Landscaping And Moore'

    // 1. VideoObject JSON-LD Schema
    const videoSchemas = PROJECTS_DATA.filter((p) => p.type === 'video').map((v) => ({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: v.title,
      description: v.metaDescription,
      thumbnailUrl: `${baseUrl}${v.poster}`,
      uploadDate: v.datePublished,
      duration: v.duration || 'PT0M30S',
      contentUrl: `${baseUrl}${v.src}`,
      embedUrl: `${baseUrl}${v.src}`,
      publisher: {
        '@type': 'Organization',
        name: businessName,
        logo: `${baseUrl}/logo.png`,
      },
    }))

    // 2. ImageObject JSON-LD Schema
    const imageSchemas = PROJECTS_DATA.filter((p) => p.type === 'image').map((img) => ({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: img.title,
      description: img.metaDescription,
      contentUrl: `${baseUrl}${img.src}`,
      creditText: businessName,
      copyrightNotice: `© ${new Date().getFullYear()} ${businessName}`,
    }))

    const scriptVid = document.createElement('script')
    scriptVid.id = 'jsonld-projects-video'
    scriptVid.type = 'application/ld+json'
    scriptVid.textContent = JSON.stringify(videoSchemas)
    document.head.appendChild(scriptVid)

    const scriptImg = document.createElement('script')
    scriptImg.id = 'jsonld-projects-image'
    scriptImg.type = 'application/ld+json'
    scriptImg.textContent = JSON.stringify(imageSchemas)
    document.head.appendChild(scriptImg)

    return () => {
      document.getElementById('jsonld-projects-video')?.remove()
      document.getElementById('jsonld-projects-image')?.remove()
    }
  }, [settings])

  // ESC key listener to close modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveMedia(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'video') return p.type === 'video'
    if (filter === 'image') return p.type === 'image'
    return true
  })

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 pb-20 md:pb-0">
      <SchemaMarkup settings={settings} />
      <Navbar settings={settings} onBook={onBook} />

      <main className="pt-28 md:pt-36 pb-20">
        <div className="container-px mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-ink-500 mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-forest-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </button>
            <span>/</span>
            <span className="text-forest-900 font-semibold">Projects & Video Showcase</span>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow inline-flex">
                <Sparkles className="w-3.5 h-3.5" /> Recent Work Showcase
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-forest-900 tracking-tight">
                Our Lawn & Landscape Projects
              </h1>
              <p className="mt-4 text-ink-700 text-base md:text-lg leading-relaxed">
                Click any video or image below to view and play in full-screen HD. See real work from our lawn care visits across Chesterbrook, Chester County, Delaware County, Montgomery County, and the Main Line, PA.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-ink-100 shadow-soft shrink-0 self-start md:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-forest-900 text-cream-50 shadow-soft'
                    : 'text-ink-600 hover:text-forest-900 hover:bg-forest-50'
                }`}
              >
                All Projects ({PROJECTS_DATA.length})
              </button>
              <button
                onClick={() => setFilter('video')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                  filter === 'video'
                    ? 'bg-forest-900 text-cream-50 shadow-soft'
                    : 'text-ink-600 hover:text-forest-900 hover:bg-forest-50'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                Videos ({PROJECTS_DATA.filter((p) => p.type === 'video').length})
              </button>
              <button
                onClick={() => setFilter('image')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                  filter === 'image'
                    ? 'bg-forest-900 text-cream-50 shadow-soft'
                    : 'text-ink-600 hover:text-forest-900 hover:bg-forest-50'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                Photos ({PROJECTS_DATA.filter((p) => p.type === 'image').length})
              </button>
            </div>
          </div>

          {/* Grid of Projects & Videos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 gsap-grid-stagger">
            {filteredProjects.map((item) => (
              <article
                key={item.id}
                className="group card overflow-hidden flex flex-col bg-white border border-ink-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveMedia(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-forest-950">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent group-hover:from-forest-950/60 transition-colors" />

                  {/* Hover Action Center Badge */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-14 h-14 rounded-full bg-forest-900/85 backdrop-blur text-cream-50 grid place-items-center group-hover:scale-110 transition-transform shadow-lift border border-white/30">
                      {item.type === 'video' ? (
                        <Play className="w-6 h-6 fill-cream-50 ml-1 text-cream-50" />
                      ) : (
                        <Maximize2 className="w-6 h-6 text-cream-50" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-forest-900 leading-snug group-hover:text-forest-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-ink-100/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-forest-700 inline-flex items-center gap-1">
                      {item.type === 'video' ? 'Click to play video ▶' : 'Click to view photo 🔍'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onBook()
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 hover:text-forest-950"
                    >
                      <span>Book similar</span>
                      <Calendar className="w-3.5 h-3.5 text-forest-700" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Call to Action Card */}
          <div className="mt-16 rounded-3xl bg-forest-900 text-cream-50 p-8 md:p-12 shadow-card grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="lg:col-span-8 space-y-4">
              <span className="eyebrow bg-forest-800 text-lemon-400 border-forest-700 inline-flex">
                <Sparkles className="w-3.5 h-3.5" /> Want your lawn to look like this?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream-50">
                Schedule your lawn transformation today
              </h2>
              <p className="text-cream-50/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Get flat-rate pricing and reliable same-week scheduling with Landscaping And Moore.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onBook}
                className="btn-primary bg-cream-50 text-forest-900 hover:bg-white text-base px-8 py-4 shadow-lift"
              >
                Book Your Service
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox / Video Player Modal */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 bg-forest-950/90 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-fade-in"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-forest-900 border border-forest-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-forest-800 flex items-center justify-between gap-4 bg-forest-950/60">
              <div className="flex items-center gap-3">
                <span className="badge bg-lemon-400 text-forest-950 font-semibold border-none">
                  {activeMedia.type === 'video' ? 'Video Player' : 'HD Photo Viewer'}
                </span>
                <span className="text-xs text-cream-50/70 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-lemon-400" /> {activeMedia.location}
                </span>
              </div>
              <button
                onClick={() => setActiveMedia(null)}
                className="w-9 h-9 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 grid place-items-center transition-colors border border-forest-600"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Container */}
            <div className="p-4 sm:p-6 bg-black flex items-center justify-center flex-1 min-h-[300px] overflow-hidden">
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[60vh] rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  className="w-full max-h-[60vh] rounded-xl object-contain shadow-2xl"
                />
              )}
            </div>

            {/* Modal Info & CTA */}
            <div className="p-6 bg-forest-900 border-t border-forest-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-cream-50">
                  {activeMedia.title}
                </h3>
                <p className="text-sm text-cream-50/80 mt-1 max-w-xl">
                  {activeMedia.description}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveMedia(null)
                  onBook()
                }}
                className="btn-primary bg-cream-50 text-forest-900 hover:bg-white shrink-0"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer settings={settings} onBook={onBook} />
      <MobileStickyCTA settings={settings} onBook={onBook} />
    </div>
  )
}
