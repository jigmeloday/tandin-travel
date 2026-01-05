import { BespokeJourneyPageData } from '@/lib/types';

export const BESPOKE_JOURNEY_PAGE_DATA: BespokeJourneyPageData = {
  hero: {
    title: 'Bespoke Journey',
    backgroundImage: {
      src: '/images/dummy/img5.jpg',
      alt: 'Bespoke Journey',
    },
  },

  packages: [1, 2, 3],

  gridCards: [
    {
      id: 1,
      title: 'Her Bhutan; Her Story',
      description:
        'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
      image: '/images/dummy/img1.jpg',
    },
    {
      id: 2,
      title: 'Mystery of Gangkar Puensum',
      description:
        'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
      image: '/images/dummy/img2.jpg',
    },
    {
      id: 3,
      title: 'Cultural Immersion Experience',
      description:
        'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
      image: '/images/dummy/img3.jpg',
    },
  ],

  parallax: {
    backgroundImage: '/images/dummy/img8.jpg',
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
      src: '/images/dummy/img11.jpg',
      alt: 'Travel with purpose',
    },
  },

  relatedAdventures: {
    title: 'Other Related Adventures',
    tagline: 'SKIP THE ROADS, CATCH THE VIEWS',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury. Each flight blends adventure, comfort, and breathtaking discovery, turning travel into a transformative, mindful experience where nature, culture, and serenity converge seamlessly.',
    packageIds: [1, 2, 3, 4, 5],
  },

  letsTalk: {
    image: '/images/dummy/img2.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
