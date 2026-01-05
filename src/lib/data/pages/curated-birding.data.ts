import { CuratedBirdingPageData } from '@/lib/types';

export const CURATED_BIRDING_PAGE_DATA: CuratedBirdingPageData = {
  hero: {
    title: 'Curated Bhutan Birding',
    backgroundImage: '/images/dummy/img5.jpg',
  },

  mainContent: {
    title: "Discover Bhutan's Avian Paradise",
    subtitle:
      'Experience world-class birding in the Eastern Himalayas, home to over 700 species including rare and endemic birds found nowhere else on Earth.',
    ctaText: 'SPEAK TO AN EXPERT',
  },

  gridBoxes: [
    {
      id: 1,
      title: 'Endemic Species',
      description:
        'Spot rare endemic species like the Black-necked Crane, White-bellied Heron, and Beautiful Nuthatch in their natural habitats.',
      image: '/images/dummy/img1.jpg',
    },
    {
      id: 2,
      title: 'Expert Guides',
      description:
        "Our experienced birding guides know the best locations and times to observe Bhutan's incredible avian diversity.",
      image: '/images/dummy/img2.jpg',
    },
    {
      id: 3,
      title: 'Pristine Habitats',
      description:
        'Explore diverse ecosystems from subtropical forests to alpine meadows, each hosting unique bird communities.',
      image: '/images/dummy/img3.jpg',
    },
  ],

  getaways: {
    title: 'Birding Getaways & Treks',
    description:
      'Exclusive itineraries thoughtfully designed to immerse you in unique experiences, local culture, and unforgettable adventures, creating memories that last forever.',
    trekIds: [1, 2, 3, 4, 5],
  },

  travelWithPurpose: {
    title: 'Travel with purpose',
    description:
      'At Born Explorer, we believe every journey should enrich both traveler and destination. By embracing sustainable practices, respecting local cultures, and supporting communities, we ensure your Bhutan experience leaves a positive footprint.\n\nTravel consciously, discover authentically, and create memories that honor the land, its people, and its timeless traditions.',
    cta: {
      text: 'VIEW DETAILS',
      href: '/travel-purpose',
    },
    image: {
      src: '/images/dummy/img4.jpg',
      alt: 'Travel with purpose',
    },
  },

  letsTalk: {
    image: '/images/dummy/img2.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
