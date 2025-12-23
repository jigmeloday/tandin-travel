import { ExquisiteStaysPageData } from '@/lib/types';

export const EXQUISITE_STAYS_PAGE_DATA: ExquisiteStaysPageData = {
  hero: {
    title: 'Six Sense',
    subtitle: 'Exclusive Journeys, Inspired by, Bhutan\'s Spirit',
    backgroundImage: '/images/hotel/h5.jpg',
  },

  twoSquareImages: [
    {
      id: 1,
      src: '/images/hotel/h2.jpg',
      alt: 'Exquisite Stays',
    },
    {
      id: 2,
      src: '/images/hotel/h1.jpg',
      alt: 'Exquisite Stays',
    },
  ],

  horizontalSection: {
    images: [
      '/images/hotel/h4.jpg',
      '/images/hotel/h3.jpg',
    ],
    title: 'Enjoy Your Dream Vacation',
    description:
      'Nestled in Bhutan\'s serene landscapes, Six Senses invites you to relax, explore, and savor every moment of luxurious, mindful living.',
    tagline: 'ESCAPE ORDINARY, ENTER EXTRAORDINARY',
  },

  luxuryExperience: {
    images: [
      '/images/hotel/h4.jpg',
      '/images/hotel/h3.jpg',
    ],
    title: 'Luxury Experience You\'ll, Remember',
    description:
      'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
    tagline: 'YOU ARE BHUTANA AND OTES EHTE',
  },

  letsTalk: {
    image: '/images/dummy/img8.jpg',
    description:
      'We love challenges big and small—what\'s yours? Let\'s craft unique journeys that turn bold ideas into unforgettable travel experiences.',
  },

  parallaxSection: {
    backgroundImage: '/images/dummy/img1.jpg',
  },

  natureSection: {
    title: 'Where Nature Meets Nirvana',
    description:
      'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters. Each experience unfolds with thoughtful detail—from the first welcome to the quiet moments in nature—creating memories that linger long after you return home and leaving a gentle, positive imprint on the places you visit.',
    tagline: 'EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT\'S YOURS',
  },

  imageBoxPackageIds: [1, 2, 3, 4, 5, 6], // Non-best-selling, non-other packages

  flagshipSection: {
    title: 'Flagship Signature Journey',
    packageIds: [7, 8, 9, 10, 11, 12], // Best-selling package IDs
  },
};
