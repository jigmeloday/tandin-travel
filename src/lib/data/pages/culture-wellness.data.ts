import { CultureWellnessPageData } from '@/lib/types';

export const CULTURE_WELLNESS_PAGE_DATA: CultureWellnessPageData = {
  hero: {
    title: 'Culture & Wellness',
    subtitle: 'Discover the harmony of Bhutanese culture and wellness traditions',
    backgroundImage: {
      src: '/images/dummy/img5.jpg',
      alt: 'Culture & Wellness in Bhutan',
    },
  },

  bhutanFromAbove: {
    title: 'Bhutan From Above',
    description:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury. Each flight blends adventure, comfort, and breathtaking discovery, turning travel into a transformative, mindful experience where nature, culture, and serenity converge seamlessly.',
    tagline: 'SKIP THE ROADS, CATCH THE VIEWS',
  },

  gridCards: [
    {
      id: 1,
      title: 'Mindful Meditation Retreats',
      subtitle: 'Part of our curated birding experience',
      image: '/images/dummy/img1.jpg',
    },
    {
      id: 2,
      title: 'Traditional Hot Stone Baths',
      subtitle: 'Part of our curated birding experience',
      image: '/images/dummy/img2.jpg',
    },
    {
      id: 3,
      title: 'Yoga in the Himalayas',
      subtitle: 'Part of our curated birding experience',
      image: '/images/dummy/img3.jpg',
    },
  ],

  heroImages: ['/images/dummy/img2.jpg', '/images/dummy/img1.jpg'],

  parallax: {
    title: 'A Journey of Inner Peace',
    description:
      'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
    backgroundImage: '/images/dummy/img8.jpg',
  },

  signatureTours: {
    title: 'Signature Culture & Wellness Tours',
    packageIds: [1, 2, 3],
  },

  freedomSection: {
    title: 'Freedom to Explore',
    description:
      'Experience Bhutan at your own pace with our flexible wellness programs. Choose from guided meditation sessions, cultural immersion activities, or simply relax in the tranquility of the Himalayas.',
    backgroundImage: '/images/dummy/img10.jpg',
    cta: {
      text: 'EXPLORE PROGRAMS',
      href: '/packages',
    },
  },

  letsTalk: {
    image: '/images/dummy/img2.jpg',
    description:
      "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
