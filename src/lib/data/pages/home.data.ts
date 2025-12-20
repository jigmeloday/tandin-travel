import { HomePageData } from '@/lib/types';
import { Search, Headphones, Mail, Plane } from 'lucide-react';

export const HOME_PAGE_DATA: HomePageData = {
  hero: {
    slides: [], // Will be populated from HERO_SLIDES in shared data
  },

  introduction: {
    title: 'Where Nature Meets Nirvana',
    description:
      'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters. Each experience unfolds with thoughtful detail—from the first welcome to the quiet moments in nature—creating memories that linger long after you return home and leaving a gentle, positive imprint on the places you visit.',
    tagline: "EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT'S YOURS",
  },

  tourTypes: [1, 2, 3], // IDs from TOUR_TYPES in company.data

  flagshipSection: {
    title: 'Flagship Signature Journey',
    packageIds: [7, 8, 9, 10, 11, 12], // Best-selling package IDs
  },

  processSection: {
    title: 'From Dream to Departure',
    description:
      'Every remarkable journey begins with a single step. Our simple, seamless process ensures your Bhutan experience is perfectly tailored, effortless, and unforgettable—from first inquiry to the moment you depart.',
    steps: [
      {
        id: 1,
        icon: Search,
        title: 'Make an Enquiry',
        description:
          'Submit your travel request online or by phone—let us know your dreams, preferences, and travel dates.',
      },
      {
        id: 2,
        icon: Headphones,
        title: 'Speak to an Expert',
        description:
          'Connect with your dedicated Travel Specialist to discuss your vision, fine-tune details, and craft your personalized itinerary.',
      },
      {
        id: 3,
        icon: Mail,
        title: 'Receive a Quote',
        description:
          'We design your bespoke holiday and provide a detailed quote, ensuring every experience meets your expectations.',
      },
      {
        id: 4,
        icon: Plane,
        title: 'Book Your Trip',
        description:
          'Once everything is perfectly tailored to your wishes, we confirm your booking and prepare you for an unforgettable journey.',
      },
    ],
    cta: {
      text: 'ENQUIRE NOW',
      href: '/contact-us',
      variant: 'primary',
    },
  },

  featuredPackages: {
    primary: 12, // Silent Monks - large featured package
    grid: [13, 14, 16, 7], // Family Legacy, Curated Adventure, Wildside, Her Story
  },

  parallaxSection: {
    title: 'A Journey Beyond Expectations',
    description:
      'Discover Bhutan in ways few travelers ever experience. Our carefully curated journeys reveal hidden valleys, sacred monasteries, and intimate cultural encounters that create lasting memories and meaningful connections to this extraordinary kingdom.',
    backgroundImage: '/images/slide.jpg',
  },

  promiseSection: {
    title: "We don't just promise—we deliver every detail",
    description:
      'Every adventure is led by experts who know the land intimately, granting access to rare moments and authentic encounters. Here, each step creates lasting memories, and every journey deepens your connection to this extraordinary kingdom.',
  },

  imageBoxPackageIds: [1, 2, 3, 4, 5, 6], // Non-best-selling, non-other packages

  travelWithPurpose: {
    title: 'TRAVEL WITH PURPOSE',
    description:
      'At Born Explorer, we believe every journey should enrich both traveler and destination. By embracing sustainable practices, respecting local cultures, and supporting communities, we ensure your Bhutan experience leaves a positive footprint.\n\nTravel consciously, discover authentically, and create memories that honor the land, its people, and its timeless traditions.',
    image: {
      src: '/images/dummy/img4.jpg',
      alt: 'Travel with Purpose',
    },
    cta: {
      text: 'VIEW DETAILS',
      href: '/travel-purpose',
      variant: 'primary',
    },
  },

  blogSection: {
    title: 'Travel Blogs',
    subtitle: 'FRESHLY DISCOVERED, EXCLUSIVELY FOR YOU',
    posts: [
      {
        id: 1,
        slug: 'monastic-serenity',
        title: 'MONASTIC SERENITY',
        subtitle: 'Above the ordinary',
        excerpt: '',
        image: {
          src: '/images/dummy/img6.jpg',
          alt: 'Monastic Serenity',
        },
      },
      {
        id: 2,
        slug: 'festivals-in-color',
        title: 'FESTIVALS IN FULL COLOR',
        subtitle: 'Capture the extraordinary',
        excerpt: '',
        image: {
          src: '/images/dummy/img5.jpg',
          alt: 'Festivals in Full Color',
        },
      },
      {
        id: 3,
        slug: 'hidden-wilderness',
        title: 'HIDDEN WILDERNESS',
        subtitle: 'Savor the sublime',
        excerpt: '',
        image: {
          src: '/images/dummy/img3.jpg',
          alt: 'Hidden Wilderness',
        },
      },
    ],
  },

  curatedBirding: {
    title: 'Curated Adventure & Bhutan Birding',
    description:
      'At Born Explorer, we believe every journey should enrich both traveler and destination. By embracing sustainable practices, respecting local cultures, and supporting communities, we ensure your Bhutan experience leaves a positive footprint.\n\nTravel consciously, discover authentically, and create memories that honor the land, its people, and its timeless traditions.',
    image: {
      src: '/images/birding.jpg',
      alt: 'Bhutan Birding',
    },
    cta: {
      text: 'VIEW DETAILS',
      href: '/curated-bhutan-birding',
      variant: 'primary',
    },
  },

  letsTalk: {
    image: '/images/dummy/img1.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
