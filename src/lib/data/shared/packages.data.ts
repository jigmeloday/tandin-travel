import { PackageCard } from '@/lib/types';

export const PACKAGES: Record<number, PackageCard> = {
  1: {
    id: 1,
    slug: 'bhutan-in-the-cloud',
    title: 'BHUTAN IN THE CLOUD',
    subtitle: 'Above the ordinary',
    category: 'SCENIC TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img6.jpg',
      alt: 'Bhutan in the Cloud',
    },
  },
  2: {
    id: 2,
    slug: 'bhutan-through-the-lens',
    title: 'BHUTAN THROUGH THE LENS',
    subtitle: 'Capture the extraordinary',
    category: 'PHOTOGRAPHY TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img5.jpg',
      alt: 'Bhutan Through the Lens',
    },
  },
  3: {
    id: 3,
    slug: 'culinary-tapestry',
    title: 'CULINARY TAPESTRY',
    subtitle: 'Savor the sublime',
    category: 'CULINARY TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img3.jpg',
      alt: 'Culinary Tapestry',
    },
  },
  4: {
    id: 4,
    slug: 'river-rafting',
    title: 'RIVER RAFTING',
    subtitle: 'Heritage in full color',
    category: 'ADVENTURE TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img11.jpg',
      alt: 'River Rafting',
    },
  },
  5: {
    id: 5,
    slug: 'education-tour',
    title: 'EDUCATION TOUR',
    subtitle: 'Enrich your journey',
    category: 'EDUCATIONAL TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img2.jpg',
      alt: 'Education Tour',
    },
  },
  6: {
    id: 6,
    slug: 'future-travel',
    title: 'FUTURE TRAVEL',
    subtitle: 'Bhutan, reimagined',
    category: 'INNOVATIVE TOUR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: {
      src: '/images/dummy/img7.jpg',
      alt: 'Future Travel',
    },
  },
  7: {
    id: 7,
    slug: 'her-bhutan-her-story',
    title: 'HER BHUTAN, HER STORY',
    subtitle: undefined,
    category: 'WOMEN ONLY TOUR',
    description:
      "Discover Bhutan through inspiring women's eyes—intimate stories, hidden traditions, and unique encounters that reveal a side of the kingdom rarely seen by travelers.",
    image: {
      src: '/images/dummy/img5.jpg',
      alt: 'Her Bhutan, Her Story',
    },
    isBestSelling: true,
  },
  8: {
    id: 8,
    slug: 'bhutan-soul-walk',
    title: 'Bhutan Soul Walk',
    subtitle: undefined,
    category: 'A GENTLE JOURNEY',
    description:
      "Step into Bhutan's serene landscapes and sacred corners, where every path inspires reflection, every view awakens wonder, and your soul leaves footprints of tranquility.",
    image: {
      src: '/images/dummy/img6.jpg',
      alt: 'Bhutan Soul Walk',
    },
    isBestSelling: true,
  },
  9: {
    id: 9,
    slug: 'mysteries-of-gangkar-puensum',
    title: 'Mysteries of Gangkar Puensum',
    subtitle: undefined,
    category: 'ADVENTURE TOUR',
    description:
      "Venture where few have tread: mystical peaks, untouched valleys, and sacred secrets await in the shadow of Bhutan's enigmatic Gangkar Puensum.",
    image: {
      src: '/images/dummy/img7.jpg',
      alt: 'Mysteries of Gangkar Puensum',
    },
    isBestSelling: true,
  },
  10: {
    id: 10,
    slug: 'tribal-ties-east-to-west',
    title: 'Tribal Ties: East to West',
    subtitle: undefined,
    category: 'NATURE TOUR',
    description:
      "Journey across Bhutan's diverse lands, meeting vibrant tribes, witnessing age-old rituals, and connecting deeply with traditions that span the kingdom's rich tapestry.",
    image: {
      src: '/images/dummy/img8.jpg',
      alt: 'Tribal Ties: East to West',
    },
    isBestSelling: true,
  },
  11: {
    id: 11,
    slug: 'druk-path-awakening',
    title: 'Druk Path Awakening',
    subtitle: undefined,
    category: 'SPIRITUAL TOUR',
    description:
      'Awaken your senses on this iconic trek, where alpine lakes, misty valleys, and ancient monasteries invite awe, adventure, and spiritual reflection at every step.',
    image: {
      src: '/images/dummy/img9.jpg',
      alt: 'Druk Path Awakening',
    },
    isBestSelling: true,
  },
  12: {
    id: 12,
    slug: 'silent-monks',
    title: 'Silent Monks',
    subtitle: 'Whisper, wonder, wander',
    category: 'SPIRITUAL TOUR',
    description:
      "Step into Bhutan's serene sanctuaries, where quiet moments, mindful rituals, and tranquil landscapes invite reflection, wonder, and a gentle escape from the everyday.",
    image: {
      src: '/images/dummy/img9.jpg',
      alt: 'Silent Monks',
    },
    isBestSelling: true,
  },
  13: {
    id: 13,
    slug: 'family-legacy-tour',
    title: 'Family Legacy Tour',
    subtitle: 'Together, every step',
    category: 'FAMILY TOUR',
    description:
      "Forge unforgettable memories exploring Bhutan's culture, nature, and traditions together, crafting shared experiences that delight every generation in elegance and comfort.",
    image: {
      src: '/images/dummy/img10.jpg',
      alt: 'Family Legacy Tour',
    },
    isOther: true,
  },
  14: {
    id: 14,
    slug: 'curated-adventure',
    title: 'Curated Adventure',
    subtitle: 'Thrills, tailored just for you',
    category: 'ADVENTURE TOUR',
    description:
      "Tailored for the discerning thrill-seeker, this journey blends Bhutan's majestic landscapes, hidden trails, and exhilarating activities into a perfectly crafted adventure.",
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Curated Adventure',
    },
    isOther: true,
  },
  15: {
    id: 15,
    slug: 'sacred-symphony',
    title: 'Sacred Symphony',
    subtitle: 'Bhutan\'s heartbeat in harmony',
    category: 'CULTURAL TOUR',
    description:
      "Feel Bhutan's heartbeat through ritual, music, and heritage, where every moment resonates in harmony, crafting an unforgettable journey of culture, spirit, and discovery.",
    image: {
      src: '/images/dummy/img2.jpg',
      alt: 'Sacred Symphony',
    },
    isOther: true,
  },
  16: {
    id: 16,
    slug: 'wildside-bhutan',
    title: 'Wildside Bhutan',
    subtitle: 'Go wild, go Bhutan',
    category: 'WILDLIFE TOUR',
    description:
      "Venture into Bhutan's untamed corners—remote valleys, pristine forests, and rare wildlife—where luxury meets the exhilaration of the kingdom's wild heart.",
    image: {
      src: '/images/dummy/img3.jpg',
      alt: 'Wildside Bhutan',
    },
    isOther: true,
  },
};

// Helper functions
export const getAllPackages = (): PackageCard[] => {
  return Object.values(PACKAGES);
};

export const getPackageById = (id: number): PackageCard | undefined => {
  return PACKAGES[id];
};

export const getPackageBySlug = (slug: string): PackageCard | undefined => {
  return Object.values(PACKAGES).find((pkg) => pkg.slug === slug);
};

export const getBestSellingPackages = (): PackageCard[] => {
  return Object.values(PACKAGES).filter((pkg) => pkg.isBestSelling);
};

export const getFeaturedPackages = (): PackageCard[] => {
  return Object.values(PACKAGES).filter((pkg) => pkg.featured);
};

export const getOtherPackages = (): PackageCard[] => {
  return Object.values(PACKAGES).filter((pkg) => pkg.isOther);
};

export const getImageBoxPackages = (): PackageCard[] => {
  return Object.values(PACKAGES).filter(
    (pkg) => !pkg.isBestSelling && !pkg.isOther
  );
};
