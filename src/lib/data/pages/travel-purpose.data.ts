import { TravelPurposePageData } from '@/lib/types';

export const TRAVEL_PURPOSE_PAGE_DATA: TravelPurposePageData = {
  hero: {
    backgroundImage: {
      src: '/images/hotel/h5.jpg',
      alt: 'Travel with Purpose',
    },
    title: 'Where Nature Meets Nirvana',
  },

  mainSection: {
    title: 'Where Nature Meets Nirvana',
    description:
      'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters. Each experience unfolds with thoughtful detail—from the first welcome to the quiet moments in nature—creating memories that linger long after you return home and leaving a gentle, positive imprint on the places you visit.',
  },

  alternatingContent: [
    {
      id: 1,
      image: '/images/dummy/img1.jpg',
      title: 'Cultural Connection',
      tagline: 'Where culture isn’t watched — it’s lived',
    },
    {
      id: 2,
      image: '/images/dummy/img2.jpg',
      title: 'Sustainable Luxury',
      tagline: 'Elegance that honors the earth',
    },
    {
      id: 3,
      image: '/images/dummy/img3.jpg',
      title: 'Mindful Adventure',
      tagline: 'Journey deeper, wander further',
    },
    {
      id: 4,
      image: '/images/dummy/img5.jpg',
      title: 'Local Impact',
      tagline: 'Empowering communities through travel',
    },
    {
      id: 5,
      image: '/images/dummy/img6.jpg',
      title: 'Conservation Focus',
      tagline: 'Protecting Bhutan’s pristine wilderness',
    },
    {
      id: 6,
      image: '/images/dummy/img7.jpg',
      title: 'Meaningful Encounters',
      tagline: 'Heart-to-heart with the kingdom',
    },
  ],

  movementSection: {
    title: 'JOIN THE MOVEMENT',
    items: [
      'Travel that restores balance',
      'Travel that listens to nature',
      'Travel that leaves the world better',
    ],
    tagline: 'Born Explorer — where every journey has a purpose',
  },
};
