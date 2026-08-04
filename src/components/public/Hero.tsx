import { useEffect, useRef } from 'react'
import { ArrowRight, Calendar, Leaf, Shield, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { HERO_IMAGE } from '../../utils/serviceImages'

type Props = {
  onBook: () => void
  onViewServices: () => void
}

export default function Hero({ onBook, onViewServices }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.gsap-hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          '.gsap-hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-text',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.gsap-hero-buttons',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-stats',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )

      // Photo card entrance & subtle floating animation
      gsap.fromTo(
        '.gsap-hero-image',
        { opacity: 0, scale: 0.94, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 }
      )

      gsap.to('.gsap-hero-badge-1', {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      })

      gsap.to('.gsap-hero-badge-2', {
        y: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
        delay: 0.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50 to-sage-50" />
        <div className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-sage-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full bg-forest-100/50 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow gsap-hero-eyebrow">
            <Leaf className="w-3.5 h-3.5" strokeWidth={2.4} /> Lawn Care Services in Chester, Delaware & Montgomery Counties, PA
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-5xl/[1.15] font-semibold text-forest-900 tracking-tight gsap-hero-title">
            Reliable Lawn Care Across the Main Line
            <span className="block mt-3 text-2xl sm:text-3xl font-display font-medium text-forest-800/90 italic">
              A fresh, healthy lawn, cared for every visit.
            </span>
          </h1>
          <p className="mt-5 text-lg text-ink-700 max-w-xl leading-relaxed gsap-hero-text">
            Book reliable lawn mowing, edging, hedge trimming, fertilization, and seasonal cleanups
            with a team that treats every yard like their own. Transparent pricing, on-time service,
            real curb appeal.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 gsap-hero-buttons">
            <button onClick={onBook} className="btn-primary group">
              Book your lawn care
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button onClick={onViewServices} className="btn-secondary">
              See services
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat className="gsap-hero-stats" label="On-time" value="98%" />
            <Stat className="gsap-hero-stats" label="Yards cared for" value="1,200+" />
            <Stat className="gsap-hero-stats" label="Avg. rating" value="4.9★" />
          </div>
        </div>

        <div className="lg:col-span-6 relative gsap-hero-image">
          <div className="relative aspect-[5/6] sm:aspect-[6/5] lg:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-card border border-white">
            <img
              src={HERO_IMAGE}
              alt="A freshly mowed, healthy green lawn in front of a modern home"
              className="w-full h-full object-cover"
              loading="eager"
              // @ts-ignore
              fetchpriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/40 via-forest-900/0 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest-900/30" />

            {/* Floating card top-left */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 bg-white/95 backdrop-blur rounded-2xl shadow-lift p-3 pr-4 flex items-center gap-3 border border-white gsap-hero-badge-1">
              <div className="w-10 h-10 rounded-xl bg-forest-50 grid place-items-center text-forest-700">
                <Shield className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xs text-ink-500 font-medium">Insured & uniformed</div>
                <div className="text-sm font-semibold text-forest-900">Service team you can trust</div>
              </div>
            </div>

            {/* Floating card bottom-right */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 bg-white/95 backdrop-blur rounded-2xl shadow-lift p-4 max-w-[260px] border border-white gsap-hero-badge-2">
              <div className="flex items-center gap-1 text-forest-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-forest-700 text-forest-700" />
                ))}
              </div>
              <p className="mt-2 text-sm text-ink-800 leading-snug">
                "They show up on time and the lawn looks incredible every week."
              </p>
              <p className="mt-1 text-xs text-ink-500">— Maria T., homeowner</p>
            </div>
          </div>

          {/* Accent ribbon */}
          <div className="hidden md:flex absolute -left-6 top-1/3 -translate-y-1/2 rotate-[-8deg] bg-forest-900 text-cream-50 rounded-2xl px-4 py-3 shadow-lift items-center gap-2">
            <Calendar className="w-4 h-4" strokeWidth={2.4} />
            <span className="text-xs font-medium tracking-wide uppercase">
              Same-week scheduling
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <div className="font-display text-2xl md:text-3xl font-semibold text-forest-900">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-ink-500 mt-1">{label}</div>
    </div>
  )
}
