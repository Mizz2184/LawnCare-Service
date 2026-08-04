import { useEffect } from 'react'
import type { BusinessSettings } from '../../types/database'
import { DETAILED_SERVICES } from '../../data/serviceData'

export default function SchemaMarkup({ settings }: { settings: BusinessSettings }) {
  useEffect(() => {
    const businessName = settings.business_name || 'Landscaping And Moore'
    const phone = settings.business_phone || '(555) 014-2090'
    const address = settings.business_address || '120 Greenfield Lane, Suite 4, Cedar Hills, UT'
    const email = settings.business_email || 'hello@landscapingandmoore.com'
    const baseUrl = window.location.origin

    // 1. HomeAndConstructionBusiness / LawnCareService Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${baseUrl}/#organization`,
      name: businessName,
      image: `${baseUrl}/images/mowing.webp`,
      logo: `${baseUrl}/logo.jpg`,
      url: baseUrl,
      telephone: phone,
      email: email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '120 Greenfield Lane, Suite 4',
        addressLocality: 'Cedar Hills',
        addressRegion: 'UT',
        postalCode: '84062',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.4138,
        longitude: -111.7583,
      },
      areaServed: [
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 40.4138,
            longitude: -111.7583,
          },
          geoRadius: '25000',
        },
        {
          '@type': 'City',
          name: 'Cedar Hills',
        },
        {
          '@type': 'City',
          name: 'Highland',
        },
        {
          '@type': 'City',
          name: 'American Fork',
        },
        {
          '@type': 'City',
          name: 'Pleasant Grove',
        },
        {
          '@type': 'City',
          name: 'Lehi',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '128',
        reviewCount: '128',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Maria T.',
          },
          datePublished: '2026-06-15',
          reviewBody: 'They show up on time and the lawn looks incredible every single week.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'David R.',
          },
          datePublished: '2026-07-02',
          reviewBody: 'Outstanding hedge trimming and crisp lawn edging. Best landscaping team in Cedar Hills!',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
      ],
    }

    // 2. Service Schemas for all 6 service items
    const serviceListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: Object.values(DETAILED_SERVICES).map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `${baseUrl}/#/services/${service.slug}`,
          name: service.name,
          description: service.shortDescription,
          provider: {
            '@type': 'LocalBusiness',
            name: businessName,
          },
          areaServed: {
            '@type': 'City',
            name: 'Cedar Hills',
          },
          offers: {
            '@type': 'Offer',
            price: service.price.toString(),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    }

    // Insert or update script elements in head
    const existingOrgScript = document.getElementById('jsonld-local-business')
    if (existingOrgScript) {
      existingOrgScript.textContent = JSON.stringify(localBusinessSchema)
    } else {
      const script = document.createElement('script')
      script.id = 'jsonld-local-business'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(localBusinessSchema)
      document.head.appendChild(script)
    }

    const existingServicesScript = document.getElementById('jsonld-services')
    if (existingServicesScript) {
      existingServicesScript.textContent = JSON.stringify(serviceListSchema)
    } else {
      const script = document.createElement('script')
      script.id = 'jsonld-services'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(serviceListSchema)
      document.head.appendChild(script)
    }
  }, [settings])

  return null
}
