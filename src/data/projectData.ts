export interface ProjectItem {
  id: string
  title: string
  category: 'videos' | 'transformations' | 'design' | 'maintenance'
  type: 'video' | 'image'
  src: string
  poster?: string
  thumbnail?: string
  description: string
  location: string
  datePublished: string
  duration?: string // for videos e.g. "PT0M30S"
  keywords: string[]
  metaDescription: string
}

export const PROJECTS_DATA: ProjectItem[] = [
  // 4 Videos
  {
    id: 'vid-1',
    title: 'Precision Lawn Mowing & Striping Showcase',
    category: 'videos',
    type: 'video',
    src: '/projects/project-video-1.mp4',
    poster: '/projects/project-img-1.webp',
    description: 'On-site video recording showing Landscaping And Moore team delivering clean lawn stripes and vertical edging in Cedar Hills.',
    location: 'Cedar Hills, UT',
    datePublished: '2026-07-20',
    duration: 'PT0M45S',
    keywords: ['lawn mowing video Cedar Hills', 'lawn striping showcase', 'precision edging video'],
    metaDescription: 'Watch Landscaping And Moore perform precision lawn mowing and crisp edge trimming in Cedar Hills.',
  },
  {
    id: 'vid-2',
    title: 'Hedge & Shrub Sculpting Transformation',
    category: 'videos',
    type: 'video',
    src: '/projects/project-video-2.mp4',
    poster: '/projects/project-img-2.webp',
    description: 'Video walkthrough of custom ornamental shrub pruning and evergreen hedge shaping for residential curb appeal.',
    location: 'Highland, UT',
    datePublished: '2026-07-25',
    duration: 'PT0M35S',
    keywords: ['hedge trimming video', 'shrub shaping video Highland', 'ornamental pruning demo'],
    metaDescription: 'See our expert hedge shaping and ornamental shrub trimming process in Highland, UT.',
  },
  {
    id: 'vid-3',
    title: 'Full Seasonal Property Clean Up & Leaf Clearing',
    category: 'videos',
    type: 'video',
    src: '/projects/project-video-3.mp4',
    poster: '/projects/project-img-3.webp',
    description: 'High-velocity leaf clearing, bed blow-outs, and complete yard cleanup video demonstration.',
    location: 'American Fork, UT',
    datePublished: '2026-08-01',
    duration: 'PT0M50S',
    keywords: ['yard cleanup video', 'leaf removal video American Fork', 'seasonal debris clearing'],
    metaDescription: 'Watch our crew clear fallen leaves and refresh garden beds in American Fork.',
  },
  {
    id: 'vid-4',
    title: 'Landscape Design & Yard Rehabilitation Project',
    category: 'videos',
    type: 'video',
    src: '/projects/project-video-4.mp4',
    poster: '/projects/project-img-4.webp',
    description: 'Complete landscape overhaul including mulching, garden bed definition, and turf revitalizing care.',
    location: 'Pleasant Grove, UT',
    datePublished: '2026-08-02',
    duration: 'PT0M40S',
    keywords: ['landscape design video', 'yard rehabilitation Pleasant Grove', 'lawn care transformation'],
    metaDescription: 'Full video walkthrough of a residential landscaping design and turf renovation project.',
  },

  // 6 Enhanced HD Images
  {
    id: 'img-1',
    title: 'Manicured Lawn Estate & Driveway Edging',
    category: 'transformations',
    type: 'image',
    src: '/projects/project-img-1.webp',
    description: 'High-resolution photo of a pristine, green residential lawn with vertical walkway edging and healthy turf.',
    location: 'Cedar Hills, UT',
    datePublished: '2026-07-15',
    keywords: ['manicured lawn photo', 'driveway edging Cedar Hills', 'lush green grass estate'],
    metaDescription: 'High quality photo of manicured lawn care and clean border edging by Landscaping And Moore.',
  },
  {
    id: 'img-2',
    title: 'Architectural Shrub Pruning & Flower Bed Refresh',
    category: 'design',
    type: 'image',
    src: '/projects/project-img-2.webp',
    description: 'High-definition showcase of trimmed ornamental bushes and weed-free dark mulch garden beds.',
    location: 'Highland, UT',
    datePublished: '2026-07-18',
    keywords: ['shrub pruning photo', 'flower bed refresh Highland', 'mulch installation image'],
    metaDescription: 'Enhanced photograph showing architectural shrub shaping and dark mulch bed maintenance.',
  },
  {
    id: 'img-3',
    title: 'Spring Yard Cleanup & Perennial Grooming',
    category: 'maintenance',
    type: 'image',
    src: '/projects/project-img-3.webp',
    description: 'Spotless property grounds after spring leaf removal and organic bed clearing.',
    location: 'American Fork, UT',
    datePublished: '2026-07-22',
    keywords: ['spring cleanup photo', 'yard restoration American Fork', 'leaf clearing gallery'],
    metaDescription: 'Photo gallery of spring yard cleanup and leaf debris clearing in American Fork, UT.',
  },
  {
    id: 'img-4',
    title: 'Custom Stone & Lawn Border Definition',
    category: 'design',
    type: 'image',
    src: '/projects/project-img-4.webp',
    description: 'Enhanced image of clean lawn lines, crisp sod borders, and custom rock landscaping.',
    location: 'Pleasant Grove, UT',
    datePublished: '2026-07-28',
    keywords: ['border definition photo', 'rock landscaping Pleasant Grove', 'sod edging image'],
    metaDescription: 'View our custom stone border definition and lawn edge work in Pleasant Grove.',
  },
  {
    id: 'img-5',
    title: 'Vibrant Green Turf & Lawn Health Treatment',
    category: 'transformations',
    type: 'image',
    src: '/projects/project-img-5.webp',
    description: 'Deep green, weed-free turf after targeted fertilization and soil nutrition application.',
    location: 'Lehi, UT',
    datePublished: '2026-08-01',
    keywords: ['lawn fertilization photo', 'weed free turf Lehi', 'green lawn gallery'],
    metaDescription: 'HD image showing vibrant green turf and weed-free lawn health treatment results in Lehi.',
  },
]
