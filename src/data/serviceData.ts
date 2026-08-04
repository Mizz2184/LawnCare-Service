export interface DetailedService {
  id: string
  slug: string
  name: string
  tagline: string
  durationMinutes: number
  price: number
  category: string
  shortDescription: string
  fullContent: string
  features: string[]
  processSteps: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  metaDescription: string
  keywords: string[]
}

export const DETAILED_SERVICES: Record<string, DetailedService> = {
  'weekly-lawn-mowing': {
    id: 'demo-mow',
    slug: 'weekly-lawn-mowing',
    name: 'Weekly Lawn Mowing',
    tagline: 'Precision mowing, crisp edging, and spotless driveway cleanup every single week across Chester, Delaware & Montgomery Counties, PA.',
    durationMinutes: 45,
    price: 65,
    category: 'Lawn Maintenance',
    shortDescription: 'Clean, even mowing with crisp edging along walkways and driveways. Clippings cleaned up before we leave.',
    fullContent: `
      Maintaining a pristine, vibrant green lawn requires consistent care tailored to local turf types and seasonal growth cycles. At Landscaping And Moore, our Weekly Lawn Mowing service is designed specifically for Chesterbrook and Main Line homeowners who demand perfection without the hassle. Every visit includes precision rotary or reel mowing adjusted to the optimal grass height, sharp vertical edging along driveways and walkways, line trimming around trees and garden beds, and complete hard-surface blow-cleaning before our service team leaves your property.

      Proper mowing height and clean blade edges are essential for turf health. Cutting grass too short stresses root systems and invites weed growth, while dull blades tear grass blades, causing brown tips and disease susceptibility. Our commercial-grade mowers feature razor-sharp blades replaced daily, and our technicians adjust cutting heights according to turf conditions and seasonal rainfall.

      Whether you have Fine Fescue, Perennial Ryegrass, or Kentucky Bluegrass, our scheduled weekly visits keep your lawn looking manicured, thick, and healthy all season long. We operate on predictable service schedules, send arrival notifications, and back every visit with our 100% satisfaction guarantee.
    `,
    features: [
      'Commercial-grade precision mowing at optimal turf height',
      'Crisp vertical edging along driveways, paths, and patio borders',
      'Detailed line trimming around fence lines, trees, and flower beds',
      'Complete hard-surface cleanup (porches, sidewalks, driveways)',
      'Bagged or finely mulched clippings based on seasonal turf needs',
      'Consistent weekly service day with automated arrival notifications',
    ],
    processSteps: [
      {
        title: '1. Property Inspection',
        description: 'We inspect the yard for debris, toys, or pet hazards before turning on equipment.',
      },
      {
        title: '2. Precision Mowing & Patterning',
        description: 'Mowing in alternating directional patterns to promote upright grass growth and prevent soil compaction.',
      },
      {
        title: '3. Edging & Trimming',
        description: 'Creating razor-sharp borders along hard surfaces and trimming hard-to-reach perimeter areas.',
      },
      {
        title: '4. Debris Cleanup & Quality Check',
        description: 'Blowing off all hard surfaces and inspecting gate latches before securing the property.',
      },
    ],
    faqs: [
      {
        question: 'What day of the week will my lawn be mowed?',
        answer: 'We assign consistent weekly service days by neighborhood across Chester, Delaware, and Montgomery counties to ensure efficiency and reliability.',
      },
      {
        question: 'Do I need to be home during service?',
        answer: 'No, as long as our team has clear access through gates and pets are safely indoors.',
      },
    ],
    metaDescription: 'Professional weekly lawn mowing in Chesterbrook & Main Line PA by Landscaping And Moore. Includes precision mowing, crisp edging, line trimming, and complete cleanup.',
    keywords: ['weekly lawn mowing Chesterbrook', 'lawn care service PA', 'grass cutting Main Line', 'lawn edging Chester County'],
  },

  'full-lawn-maintenance-visit': {
    id: 'demo-maintenance',
    slug: 'full-lawn-maintenance-visit',
    name: 'Full Lawn Maintenance Visit',
    tagline: 'Complete turn-key yard maintenance covering mowing, edging, weed control, and garden bed grooming.',
    durationMinutes: 75,
    price: 110,
    category: 'Full Service Care',
    shortDescription: 'Mow, edge, line-trim, and blow-clean—everything a healthy yard needs in a single visit.',
    fullContent: `
      A great lawn is more than just cut grass; it requires comprehensive attention to borders, flower beds, small weeds, and property cleanliness. Landscaping And Moore provides complete Full Lawn Maintenance visits for residential properties in Chesterbrook, Chester County, Delaware County, and Montgomery County, PA. This comprehensive visit combines our premium weekly mowing with proactive bed weeding, shrub line maintenance, and turf health spot checks.

      Our full maintenance visits are tailored for busy homeowners, rental property owners, and busy families who want a complete, worry-free solution. During each 75-minute visit, our crew handles grass cutting, precision edging, weed removal from mulch beds and pavers, light debris collection, and seasonal turf assessments.

      By combining routine turf care with garden bed maintenance, your outdoor living space stays polished, inviting, and healthy throughout spring, summer, and fall.
    `,
    features: [
      'Full lawn mowing, perimeter trimming, and hard surface edging',
      'Hand-weeding and spot treatment for flower beds and mulch zones',
      'Paver and driveway weed management',
      'Small stick, fallen branch, and turf debris removal',
      'Air-blowing of all outdoor living areas, decks, and walkways',
      'Dedicated account supervisor for quality control',
    ],
    processSteps: [
      {
        title: '1. Full Lawn Mowing & Edging',
        description: 'Complete turf mowing with sharp blades and clean hard-edge definition.',
      },
      {
        title: '2. Garden & Mulch Bed Weeding',
        description: 'Hand-pulling weeds and clearing unwanted vegetation from bed boundaries.',
      },
      {
        title: '3. Perimeter & Debris Sweep',
        description: 'Clearing fallen twigs, leaves, and trash from open lawn spaces.',
      },
      {
        title: '4. Final Property Blow-Down',
        description: 'Thorough cleaning of driveways, entryways, patios, and outdoor seating zones.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between standard mowing and full maintenance?',
        answer: 'Full maintenance includes flower bed weeding, paver weed clearing, and debris pick-up in addition to lawn mowing.',
      },
    ],
    metaDescription: 'Complete full lawn maintenance in Chesterbrook & Main Line PA. Mowing, edging, flower bed weeding, and debris clearing in one visit by Landscaping And Moore.',
    keywords: ['full lawn maintenance Chesterbrook', 'yard care package PA', 'lawn and garden service Main Line', 'property care'],
  },

  'hedge-shrub-trimming': {
    id: 'demo-hedge',
    slug: 'hedge-shrub-trimming',
    name: 'Hedge & Shrub Trimming',
    tagline: 'Expert ornamental pruning and hedge shaping for clean lines and flourishing greenery.',
    durationMinutes: 90,
    price: 135,
    category: 'Pruning & Shaping',
    shortDescription: 'Shape and trim hedges and shrubs to keep your yard looking sharp and well-cared-for.',
    fullContent: `
      Overgrown hedges, untamed bushes, and sprawling shrubs degrade your home's curb appeal and block natural sunlight from reaching lower branches and surrounding plants. Landscaping And Moore offers expert Hedge & Shrub Trimming services across Chester, Delaware, and Montgomery counties in PA, restoring clean architectural lines and supporting long-term plant health.

      Pruning is both an art and a science. Timing and technique matter greatly depending on whether your plants are evergreen hedges, deciduous shrubs, or flowering bushes. Our experienced horticulturists and trim technicians understand optimal pruning windows to promote dense foliage, stimulate healthy growth, and prevent woody interior dieback.

      We utilize commercial hedge trimmers and hand pruners to shape boxwoods, privets, arborvitae, hydrangeas, and ornamental bushes. Every trimming service includes complete removal and hauling of green waste, leaving your landscape beds tidy and pristine.
    `,
    features: [
      'Precision shaping for formal hedges and natural ornamental shrubs',
      'Deadwood removal and health-focused selective pruning',
      'Clearance trimming around windows, walkways, air conditioning units, and rooflines',
      'Specialized care for evergreen and deciduous plant species',
      'Raking, tarp collection, and 100% green waste hauling included',
      'Improves sunlight penetration and airflow throughout foliage',
    ],
    processSteps: [
      {
        title: '1. Plant Assessment',
        description: 'Evaluating plant species, growth structure, and health requirements.',
      },
      {
        title: '2. Precision Shearing & Hand Pruning',
        description: 'Trimming top and sides to achieve clean geometrical or natural contours.',
      },
      {
        title: '3. Deadwood & Sucker Branch Removal',
        description: 'Cutting away diseased branches and unwanted base shoots.',
      },
      {
        title: '4. Green Waste Collection & Cleanup',
        description: 'Raking beds, vacuuming clippings, and hauling all debris offsite.',
      },
    ],
    faqs: [
      {
        question: 'When is the best time to trim hedges in Pennsylvania?',
        answer: 'Late spring and late summer are ideal for most species, though light shaping can be done throughout the growing season.',
      },
    ],
    metaDescription: 'Professional hedge and shrub trimming in Chesterbrook & Main Line PA. Shape bushes, remove deadwood, and elevate curb appeal with Landscaping And Moore.',
    keywords: ['hedge trimming Chesterbrook', 'shrub pruning PA', 'bush shaping Main Line', 'landscape trimming'],
  },

  'seasonal-yard-cleanup': {
    id: 'demo-cleanup',
    slug: 'seasonal-yard-cleanup',
    name: 'Seasonal Yard Cleanup',
    tagline: 'Comprehensive spring and fall yard cleanups to clear leaf accumulation, thatch, and storm debris.',
    durationMinutes: 120,
    price: 180,
    category: 'Seasonal Care',
    shortDescription: 'Leaf removal, debris cleanup, and a thorough refresh to get the yard season-ready.',
    fullContent: `
      Spring thaw and fall leaf drops introduce heavy organic buildup that can smother grass, trap moisture, and foster fungal turf diseases. Landscaping And Moore provides deep Seasonal Yard Cleanup services across Chester, Delaware, and Montgomery counties in PA to prepare your property for optimal growth in spring and protect your root systems through harsh winter months.

      In the Spring, our cleanup removes winter debris, fallen branches, dead perennial growth, and matted leaf layers to let sunlight and oxygen reach dormant grass crowns. In the Fall, our high-velocity leaf blowers and commercial vacuum systems clear heavy autumn leaves from turf, flower beds, window wells, and drain lines.

      Each cleanup visit is custom-scoped to your yard size and foliage density. We cut back spent perennials, clear bed edges, vacuum organic waste, and leave your lawn spotless and ready for the season ahead.
    `,
    features: [
      'Complete leaf vacuuming and leaf rake-out from turf and garden beds',
      'Perennial cutting back and ornamental grass trimming',
      'Debris, branch, and pinecone removal across entire property',
      'Dethatching and lawn surface aeration prep (upon request)',
      'Gutter entry clearing and bed definition touch-ups',
      'Full hauling and eco-friendly composting of all green waste',
    ],
    processSteps: [
      {
        title: '1. Bed & Corner Blow-Out',
        description: 'Blowing accumulated leaves out of fence lines, shrub bases, and flower beds.',
      },
      {
        title: '2. Turf Vacuuming & Raking',
        description: 'Gathering and vacuuming heavy leaf blankets off grass surfaces.',
      },
      {
        title: '3. Plant Cutback & Grooming',
        description: 'Trimming back dead perennial stalks and clearing winter debris.',
      },
      {
        title: '4. Hauling & Final Sweep',
        description: 'Loading all green waste onto our trucks and sweeping hard surfaces clean.',
      },
    ],
    faqs: [
      {
        question: 'Do you haul away all the collected leaves?',
        answer: 'Yes! Full green waste loading and eco-friendly composting offsite is included in our price.',
      },
    ],
    metaDescription: 'Spring & Fall seasonal yard cleanups in Chesterbrook & Main Line PA by Landscaping And Moore. Leaf removal, perennial cutback, and green waste hauling.',
    keywords: ['seasonal yard cleanup Chesterbrook', 'spring yard cleanup PA', 'fall leaf removal Main Line', 'lawn dethatching'],
  },

  'fertilization-visit': {
    id: 'demo-fert',
    slug: 'fertilization-visit',
    name: 'Fertilization & Turf Treatment',
    tagline: 'Customized nutrient applications and weed management for a dense, lush green lawn.',
    durationMinutes: 60,
    price: 95,
    category: 'Turf Care',
    shortDescription: 'Careful, professional turf treatment timed for the season to support healthy, green growth.',
    fullContent: `
      Achieving a vibrant, weed-free lawn requires targeted nutrient applications delivered at precise times during the growing season. Landscaping And Moore provides tailored Fertilization & Turf Treatment programs designed specifically for soil conditions across Chester County, Delaware County, and Montgomery County, PA.

      Our granular and liquid fertilizers supply essential nitrogen, phosphorus, potassium, and micronutrients to strengthen root architecture and improve drought tolerance. Simultaneously, our pre-emergent treatments block broadleaf weeds and crabgrass before they sprout, while post-emergent applications eliminate existing dandelions, clover, and thistles.

      All applications are administered by trained, licensed lawn specialists using calibrated spreading equipment. We provide clear post-treatment instructions (watering schedules, pet safety windows) after every application to maximize results.
    `,
    features: [
      'Custom slow-release nitrogen formulations for steady, long-lasting greening',
      'Pre-emergent crabgrass and broadleaf weed barrier protection',
      'Post-emergent spot treatment for active weeds (dandelions, clover, spurge)',
      'Soil condition assessments and pH balancing options',
      'Child and pet safe application protocols with clear watering instructions',
      'Seasonal multi-step scheduling (Spring, Early Summer, Late Summer, Fall Rooter)',
    ],
    processSteps: [
      {
        title: '1. Turf & Soil Inspection',
        description: 'Checking moisture levels, turf species, and weed density.',
      },
      {
        title: '2. Calibrated Application',
        description: 'Spreading slow-release granular fertilizer evenly across lawn zones.',
      },
      {
        title: '3. Targeted Weed Control',
        description: 'Spot spraying persistent broadleaf weeds with EPA-registered formulas.',
      },
      {
        title: '4. Service Report & Guidance',
        description: 'Leaving clear watering guidelines and safety notes for homeowners.',
      },
    ],
    faqs: [
      {
        question: 'How long should pets stay off the lawn after fertilization?',
        answer: 'We recommend keeping pets and children off treated areas until the application has dried or been watered in (typically 2-4 hours).',
      },
    ],
    metaDescription: 'Custom fertilization & weed control in Chesterbrook & Main Line PA. Professional turf treatment programs by Landscaping And Moore for lush green lawns.',
    keywords: ['lawn fertilization Chesterbrook', 'weed control service PA', 'turf treatment Main Line', 'lawn care program'],
  },

  'landscape-consultation': {
    id: 'demo-consult',
    slug: 'landscape-consultation',
    name: 'Landscape & Yard Consultation',
    tagline: 'Expert on-site consultation to plan curb appeal upgrades, lawn recovery, and custom maintenance routines.',
    durationMinutes: 30,
    price: 0,
    category: 'Consultation',
    shortDescription: 'A walk-through of your yard with our team to plan the right care routine and curb appeal upgrades.',
    fullContent: `
      Unsure which lawn program or landscaping improvement is right for your property? Landscaping And Moore offers complimentary on-site Landscape & Yard Consultations for homeowners in Chesterbrook, Chester County, Delaware County, and Montgomery County, PA. Our lead landscape specialist will meet with you at your property, evaluate your soil condition, turf health, drainage patterns, and plant vitality, and answer all your questions.

      During the 30-minute walk-through, we discuss your goals—whether you need weekly routine mowing, lawn rehabilitation, sod installation, mulch refresh, or seasonal shrub care. You'll receive clear recommendations, an itemized quote with zero pressure, and an action plan tailored to your budget.

      Booking a consultation is 100% free and carries no obligation. Let our local experts help you unlock your yard's true potential.
    `,
    features: [
      'Comprehensive 30-minute property walk-through with a lead specialist',
      'Turf health, weed, and irrigation evaluation',
      'Recommendations for mowing, fertilization, edging, and seasonal care',
      'Transparent, itemized pricing proposal with no hidden fees',
      'Customized care plan tailored to your property goals and budget',
      '100% complimentary service with zero sales pressure',
    ],
    processSteps: [
      {
        title: '1. On-Site Walk-Through',
        description: 'Touring your property together to identify problem areas and opportunities.',
      },
      {
        title: '2. Soil & Vegetation Analysis',
        description: 'Evaluating turf condition, weed species, and shrub health.',
      },
      {
        title: '3. Custom Solution Design',
        description: 'Recommending the ideal combination of recurring and seasonal services.',
      },
      {
        title: '4. Instant Written Estimate',
        description: 'Delivering a detailed digital quote right to your inbox.',
      },
    ],
    faqs: [
      {
        question: 'Is the landscape consultation really free?',
        answer: 'Yes, 100% free with no obligation to purchase any services.',
      },
    ],
    metaDescription: 'Free landscape consultation in Chesterbrook & Main Line PA by Landscaping And Moore. On-site property walk-through and customized lawn care plan.',
    keywords: ['free landscape consultation Chesterbrook', 'lawn evaluation PA', 'landscaping quote Main Line', 'yard consultation'],
  },
}
