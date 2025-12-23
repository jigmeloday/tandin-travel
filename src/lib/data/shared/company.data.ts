import { TourType, OtherPackage } from '@/lib/types';

// Tour Types (main platform categories)
export const TOUR_TYPES: TourType[] = [
  {
    id: 1,
    slug: 'bespoke-journey',
    title: 'BESPOKE JOURNEYS',
    subtitle: '(Your story, perfectly tailored)',
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Bespoke Journeys',
    },
    link: '/bespoke-journey',
  },
  {
    id: 2,
    slug: 'exquisite-stays',
    title: 'EXQUISITE STAYS',
    subtitle: '(Where elegance feels effortless)',
    image: {
      src: '/images/dummy/img2.jpg',
      alt: 'Exquisite Stays',
    },
    link: '/exquisite-stays',
  },
  {
    id: 3,
    slug: 'culture-wellness',
    title: 'CULTURE & WELLNESS',
    subtitle: '(Revive, connect, and awaken)',
    image: {
      src: '/images/dummy/img3.jpg',
      alt: 'Culture & Wellness',
    },
    link: '/culture-wellness',
  },
];

// Other Packages (experience categories)
export const OTHER_PACKAGES: OtherPackage[] = [
  {
    id: 1,
    img: 'img1.jpg',
    title: 'Immersive experiences',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
  {
    id: 2,
    img: 'img2.jpg',
    title: 'Education',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
  {
    id: 3,
    img: 'img3.jpg',
    title: 'Conservation',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
  {
    id: 4,
    img: 'img8.jpg',
    title: 'Real skills',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
  {
    id: 5,
    img: 'img5.jpg',
    title: 'Unique treasure hunts',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
  {
    id: 6,
    img: 'img6.jpg',
    title: 'Custom collateral',
    subtitle: 'STEPPING INTO ANOTHER WORLD',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury.',
  },
];

// Company Info
export const COMPANY_INFO = {
  name: 'Born Explorer',
  tagline: 'Where Nature Meets Nirvana',
  description:
    'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters.',
};

// Recurring Content (used across multiple pages)
export const RECURRING_CONTENT = {
  whereNatureMeetsNirvana: {
    title: 'Where Nature Meets Nirvana',
    description:
      'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters. Each experience unfolds with thoughtful detail—from the first welcome to the quiet moments in nature—creating memories that linger long after you return home and leaving a gentle, positive imprint on the places you visit.',
    tagline: "EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT'S YOURS",
  },
  travelWithPurpose: {
    title: 'TRAVEL WITH PURPOSE',
    description:
      'At Born Explorer, we believe every journey should enrich both traveler and destination. By embracing sustainable practices, respecting local cultures, and supporting communities, we ensure your Bhutan experience leaves a positive footprint.\n\nTravel consciously, discover authentically, and create memories that honor the land, its people, and its timeless traditions.',
    image: '/images/dummy/img4.jpg',
    cta: {
      text: 'VIEW DETAILS',
      href: '/travel-purpose',
    },
  },
  letsTalk: {
    image: '/images/dummy/img1.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
  contactForm: {
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    submitButton: 'SUBMIT',
  },
  trekking: {
    bestSeason: 'Best Season',
    altitude: 'Alt.m',
    altitudeHigh: 'High:',
    altitudeLow: 'Low:',
    onTrek: 'On Trek',
    grade: 'Grade',
    essentialInfoTitle: 'Essential Information for the Trek',
    nextLevelAdventuresTitle: 'Next-Level Adventures & More',
    nextLevelAdventuresDescription:
      "Continue your exploration with our other related adventures, each crafted to showcase Bhutan's rugged beauty, cultural depth, and pristine wilderness—perfect for trekkers seeking powerful experiences, breathtaking landscapes, and meaningful moments beyond the main journey.",
    viewDetails: 'View Details',
  },
};
