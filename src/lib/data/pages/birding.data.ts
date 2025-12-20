import { BirdingPageData } from '@/lib/types';

export const BIRDING_PAGE_DATA: BirdingPageData = {
  hero: {
    title: 'Birding in Bhutan',
    subtitle: 'Every journey tells a story – find the one that’s yours',
    backgroundImage: {
      src: '/images/dummy/img5.jpg',
      alt: 'Birding in Bhutan',
    },
  },

  mainContent: {
    title: 'Essential Birding Information',
    description:
      'The Gangkar puensum Trek is one of Bhutan’s most legendary high-altitude adventures. To help you prepare, here are the key things every traveler must know before embarking on this once-in-a-lifetime journey.',
  },

  essentialInfo: {
    sections: [
      {
        id: 1,
        type: 'text',
        content: '/images/dummy/img1.jpg',
        title: 'Best Birding Seasons',
        description:
          'Spring (March-May) and autumn (September-November) offer the best birding opportunities with optimal weather and peak migration periods.',
      },
      {
        id: 2,
        type: 'text',
        content: '/images/dummy/img2.jpg',
        title: 'Endemic Species',
        description:
          'Bhutan is home to several endemic species including the Beautiful Nuthatch, Bhutan Laughingthrush, and White-bellied Heron.',
      },
      {
        id: 3,
        type: 'text',
        content: '/images/dummy/img3.jpg',
        title: 'Birding Locations',
        description:
          'From lowland forests to high-altitude passes, each elevation zone hosts unique bird communities worth exploring.',
      },
      {
        id: 4,
        type: 'text',
        content: '/images/dummy/img4.jpg',
        title: 'Photography Tips',
        description:
          'Bring telephoto lenses, tripods, and be prepared for varying light conditions in mountain environments.',
      },
    ],
  },

  packingList: {
    items: [
      {
        id: 1,
        title: 'Binoculars',
        description: 'High-quality binoculars (8x42 or 10x42) are essential for bird watching.',
      },
      {
        id: 2,
        title: 'Field Guide',
        description: 'Comprehensive field guide to birds of Bhutan and the Eastern Himalayas.',
      },
      {
        id: 3,
        title: 'Camera Equipment',
        description: 'Telephoto lens (400mm+), tripod, and extra batteries for wildlife photography.',
      },
      {
        id: 4,
        title: 'Layered Clothing',
        description: 'Weather can change rapidly; bring layers suitable for various temperatures.',
      },
      {
        id: 5,
        title: 'Notebook',
        description: 'For recording sightings, behaviors, and maintaining your birding checklist.',
      },
      {
        id: 6,
        title: 'Sun Protection',
        description: 'Hat, sunglasses, and sunscreen for high-altitude birding excursions.',
      },
    ],
  },

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
      src: '/images/dummy/img4.jpg',
      alt: 'Travel with purpose',
    },
  },

  nextLevelBirding: {
    title: 'Next-Level Birding Experiences',
    items: [
      {
        id: 1,
        title: 'Guided Birding Tours',
        description:
          'Expert-led tours to prime birding locations with experienced ornithologists.',
        image: '/images/dummy/img1.jpg',
      },
      {
        id: 2,
        title: 'Photography Workshops',
        description:
          'Specialized workshops combining birding with wildlife photography techniques.',
        image: '/images/dummy/img2.jpg',
      },
      {
        id: 3,
        title: 'Conservation Programs',
        description:
          'Participate in citizen science projects and bird conservation initiatives.',
        image: '/images/dummy/img3.jpg',
      },
    ],
  },

  letsTalk: {
    image: '/images/dummy/img2.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
