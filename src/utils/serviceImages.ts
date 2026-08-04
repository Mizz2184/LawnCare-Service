/**
 * Map service names to high-quality lawn care imagery in optimized WebP format.
 */
const IMG = {
  mowing: '/images/mowing.webp',
  maintenance: '/images/maintenance.webp',
  hedge: '/images/hedge.webp',
  cleanup: '/images/cleanup.webp',
  fertilization: '/images/fertilization.webp',
  consultation: '/images/consultation.webp',
  generic: '/images/maintenance.webp',
}

export function getServiceImage(name: string): string {
  const n = name.toLowerCase()
  if (n.includes('mow')) return IMG.mowing
  if (n.includes('hedge') || n.includes('shrub') || n.includes('trim')) return IMG.hedge
  if (n.includes('cleanup') || n.includes('clean-up') || n.includes('season')) return IMG.cleanup
  if (n.includes('fertil') || n.includes('treat') || n.includes('feed')) return IMG.fertilization
  if (n.includes('consult') || n.includes('plan') || n.includes('design')) return IMG.consultation
  if (n.includes('maint') || n.includes('care') || n.includes('weekly') || n.includes('visit'))
    return IMG.maintenance
  return IMG.generic
}

export const HERO_IMAGE = '/images/mowing.webp'

export const ABOUT_IMAGE_PRIMARY = '/images/maintenance.webp'

export const ABOUT_IMAGE_SECONDARY = '/images/hedge.webp'

export const BOOKING_AMBIENT = '/images/fertilization.webp'
