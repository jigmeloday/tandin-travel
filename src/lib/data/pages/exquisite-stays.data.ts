import { ExquisiteStaysPageData } from '@/lib/types';

export const EXQUISITE_STAYS_PAGE_DATA: ExquisiteStaysPageData = {
  hero: {
    title: 'Exquisite Stays',
    subtitle: 'Where elegance feels effortless',
    backgroundImage: '/images/dummy/img1.jpg',
  },

  imageGrid: [
    { id: 1, src: '/images/dummy/img1.jpg', alt: 'Luxury Room' },
    { id: 2, src: '/images/dummy/img2.jpg', alt: 'Mountain View' },
    { id: 3, src: '/images/dummy/img3.jpg', alt: 'Resort Exterior' },
    { id: 4, src: '/images/dummy/img5.jpg', alt: 'Pool Side' },
  ],

  horizontalSection: {
    images: ['/images/dummy/img1.jpg', '/images/dummy/img2.jpg'],
    title: 'Luxury Experience',
    tagline: 'You’ll Remember',
    description: 'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
  },

  luxuryExperience: {
    images: ['/images/dummy/img6.jpg', '/images/dummy/img7.jpg', '/images/dummy/img8.jpg'],
    description: 'Experience the pinnacle of Bhutanese hospitality in our handpicked collection of luxury stays, where traditional architecture meets modern comfort.',
  },

  imageBoxPackageIds: [5, 6, 7],
  flagshipPackageIds: [1, 2, 3],

  letsTalk: {
    image: '/images/dummy/img1.jpg',
    description: "For decades, our team has been crafting journeys that go beyond the ordinary. Share your dream destination and your passions with us, and we'll design a one-of-a-kind adventure that's truly yours—a journey you'll remember for a lifetime.",
  },
};
