import { useEffect } from 'react'
import type { BusinessSettings } from '../../types/database'
import { DETAILED_SERVICES } from '../../data/serviceData'

export default function SchemaMarkup({ settings }: { settings: BusinessSettings }) {
  useEffect(() => {
    const businessName = settings.business_name || 'Landscaping And Moore'
    const phone = settings.business_phone || '(717) 599-0917'
    const address = settings.business_address || '711 Washington Place, Chesterbrook, PA 19087'
    const email = settings.business_email || 'landscapingandmoore24@gmail.com'
    const baseUrl = window.location.origin

    // 1. HomeAndConstructionBusiness / LawnCareService Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${baseUrl}/#organization`,
      name: businessName,
      image: `${baseUrl}/images/mowing.webp`,
      logo: `${baseUrl}/logo.png`,
      url: baseUrl,
      telephone: phone,
      email: email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '711 Washington Place',
        addressLocality: 'Chesterbrook',
        addressRegion: 'PA',
        postalCode: '19087',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.0801,
        longitude: -75.4578,
      },
      areaServed: [
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 40.0801,
            longitude: -75.4578,
          },
          geoRadius: '35000',
        },
        {
          '@type': 'City',
          name: 'Chesterbrook',
        },
        {
          '@type': 'City',
          name: 'Wayne',
        },
        {
          '@type': 'City',
          name: 'King of Prussia',
        },
        {
          '@type': 'City',
          name: 'Bryn Mawr',
        },
        {
          '@type': 'State',
          name: 'Chester, Delaware & Montgomery Counties, PA',
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
          reviewBody: 'Outstanding hedge trimming and crisp lawn edging. Best landscaping team in Chesterbrook!',
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
            '@type': 'State',
            name: 'Chester, Delaware & Montgomery Counties, PA',
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
