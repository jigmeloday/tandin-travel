import { FlagshipTour } from '@/lib/types';

export const FLAGSHIP_TOURS: Record<string, FlagshipTour> = {
  'her-bhutan-her-story': {
    id: 1,
    slug: 'her-bhutan-her-story',
    packageId: 7,
    title: 'Her Bhutan, Her Story',
    subtitle: 'A journey of empowerment and discovery',
    description:
      "Discover Bhutan through inspiring women's eyes—intimate stories, hidden traditions, and unique encounters that reveal a side of the kingdom rarely seen by travelers.",
    hero: {
      images: [
        '/images/dummy/img5.jpg',
        '/images/dummy/img6.jpg',
        '/images/dummy/img7.jpg',
        '/images/dummy/img8.jpg',
        '/images/dummy/img9.jpg',
      ],
    },
    info: {
      when: 'February - June & September - November',
      price: 'From £4,615pp excl. flights (based on 2 people sharing)',
      duration: '5 nights ideal length',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        activities: ['Airport transfer', 'Welcome dinner', 'Orientation'],
        accommodation: 'Luxury Hotel Paro',
        meals: ['Dinner'],
      },
      {
        day: 2,
        title: 'Paro Valley Exploration',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        activities: ['Visit local women artisans', 'Traditional weaving workshop', 'Cultural evening'],
        accommodation: 'Luxury Hotel Paro',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
      },
    ],
    included: [
      'Luxury accommodation',
      'All meals as specified',
      'Private guided tours',
      'Airport transfers',
      'All entrance fees',
    ],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Gratuities'],
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img1.jpg',
        title: 'Cultural Connection',
        tagline: "Where culture isn't watched — it's lived",
        description:
          'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
      },
      {
        id: 2,
        image: '/images/dummy/img2.jpg',
        title: 'Authentic Encounters',
        tagline: 'Meet the women who shape Bhutan',
        description:
          'Connect with female artisans, monks, and community leaders who preserve Bhutan\'s ancient traditions while paving the way for future generations.',
      },
      {
        id: 3,
        image: '/images/dummy/img3.jpg',
        title: 'Spiritual Awakening',
        tagline: 'Find your inner peace',
        description:
          'Participate in meditation sessions led by female practitioners, visit sacred sites, and discover the profound spirituality that defines Bhutan.',
      },
      {
        id: 4,
        image: '/images/dummy/img4.jpg',
        title: 'Natural Wonders',
        tagline: 'Where nature meets nirvana',
        description:
          'Explore pristine valleys, alpine meadows, and ancient forests that have remained unchanged for centuries, experiencing Bhutan\'s commitment to environmental preservation.',
      },
    ],
  },
  'bhutan-soul-walk': {
    id: 2,
    slug: 'bhutan-soul-walk',
    packageId: 8,
    title: 'Bhutan Soul Walk',
    subtitle: 'A gentle journey through sacred landscapes',
    description:
      "Step into Bhutan's serene landscapes and sacred corners, where every path inspires reflection, every view awakens wonder, and your soul leaves footprints of tranquility.",
    hero: {
      images: [
        '/images/dummy/img6.jpg',
        '/images/dummy/img7.jpg',
        '/images/dummy/img8.jpg',
      ],
    },
    info: {
      when: 'March - May & September - November',
      price: 'From £3,950pp excl. flights (based on 2 people sharing)',
      duration: '7 nights recommended',
    },
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img5.jpg',
        title: 'Meditative Walks',
        tagline: 'Every step is a prayer',
        description:
          'Experience Bhutan at a gentle pace, walking ancient pilgrimage routes and forest trails that have been sacred to Buddhists for centuries.',
      },
      {
        id: 2,
        image: '/images/dummy/img6.jpg',
        title: 'Monastery Visits',
        tagline: 'Where silence speaks volumes',
        description:
          'Visit remote monasteries, participate in prayer ceremonies, and spend time with monks who have dedicated their lives to spiritual practice.',
      },
      {
        id: 3,
        image: '/images/dummy/img7.jpg',
        title: 'Wellness Retreats',
        tagline: 'Restore your inner balance',
        description:
          'Enjoy yoga sessions, traditional hot stone baths, and Ayurvedic treatments in settings that nurture both body and spirit.',
      },
      {
        id: 4,
        image: '/images/dummy/img8.jpg',
        title: 'Cultural Immersion',
        tagline: 'Live like a local',
        description:
          'Stay in traditional farmhouses, share meals with local families, and learn about daily life in the Land of the Thunder Dragon.',
      },
    ],
  },
  'mysteries-of-gangkar-puensum': {
    id: 3,
    slug: 'mysteries-of-gangkar-puensum',
    packageId: 9,
    title: 'Mysteries of Gangkar Puensum',
    subtitle: "Explore the world's highest unclimbed mountain",
    description:
      "Venture where few have tread: mystical peaks, untouched valleys, and sacred secrets await in the shadow of Bhutan's enigmatic Gangkar Puensum.",
    hero: {
      images: [
        '/images/dummy/img7.jpg',
        '/images/dummy/img8.jpg',
        '/images/dummy/img9.jpg',
      ],
    },
    info: {
      when: 'April - June & September - October',
      price: 'From £6,250pp excl. flights (based on 2 people sharing)',
      duration: '10 nights adventure',
    },
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img10.jpg',
        title: 'Mountain Mysticism',
        tagline: 'Where earth touches sky',
        description:
          'Journey to the base regions of Gangkar Puensum, the world\'s highest unclimbed mountain, considered too sacred to summit by the Bhutanese.',
      },
      {
        id: 2,
        image: '/images/dummy/img11.jpg',
        title: 'Remote Valleys',
        tagline: 'Untouched by time',
        description:
          'Explore isolated valleys where yak herders maintain centuries-old traditions, and ancient Buddhist practices remain unchanged.',
      },
      {
        id: 3,
        image: '/images/dummy/img1.jpg',
        title: 'Wildlife Encounters',
        tagline: 'In the realm of the snow leopard',
        description:
          'Trek through pristine forests and alpine meadows, home to rare wildlife including blue sheep, red pandas, and the elusive snow leopard.',
      },
      {
        id: 4,
        image: '/images/dummy/img2.jpg',
        title: 'Sacred Sites',
        tagline: 'Legends written in stone',
        description:
          'Discover hidden temples, meditation caves, and prayer sites that hold the spiritual essence of Bhutan\'s deepest mysteries.',
      },
    ],
  },
  'tribal-ties-east-to-west': {
    id: 4,
    slug: 'tribal-ties-east-to-west',
    packageId: 10,
    title: 'Tribal Ties: East to West',
    subtitle: "A journey across Bhutan's diverse cultures",
    description:
      "Journey across Bhutan's diverse lands, meeting vibrant tribes, witnessing age-old rituals, and connecting deeply with traditions that span the kingdom's rich tapestry.",
    hero: {
      images: [
        '/images/dummy/img8.jpg',
        '/images/dummy/img9.jpg',
        '/images/dummy/img10.jpg',
      ],
    },
    info: {
      when: 'Year-round (best: March - May, September - November)',
      price: 'From £5,800pp excl. flights (based on 2 people sharing)',
      duration: '12 nights comprehensive journey',
    },
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img3.jpg',
        title: 'Eastern Traditions',
        tagline: 'Where ancient customs thrive',
        description:
          'Begin in eastern Bhutan, meeting the Brokpa and Merak Sakteng communities, nomadic people with unique dress, customs, and dialects.',
      },
      {
        id: 2,
        image: '/images/dummy/img4.jpg',
        title: 'Central Heritage',
        tagline: 'The heart of Bhutan',
        description:
          'Experience the cultural heart in Bumthang and Trongsa, where Bhutan\'s spiritual and historical legacy is most deeply felt.',
      },
      {
        id: 3,
        image: '/images/dummy/img5.jpg',
        title: 'Western Wonders',
        tagline: 'Between tradition and progress',
        description:
          'Conclude in western Bhutan, witnessing how communities balance modernization with the preservation of timeless traditions.',
      },
      {
        id: 4,
        image: '/images/dummy/img6.jpg',
        title: 'Festival Celebrations',
        tagline: 'Culture in full color',
        description:
          'If timing allows, participate in regional festivals (tshechus) where masked dances, traditional music, and vibrant costumes create unforgettable spectacles.',
      },
    ],
  },
  'druk-path-awakening': {
    id: 5,
    slug: 'druk-path-awakening',
    packageId: 11,
    title: 'Druk Path Awakening',
    subtitle: 'The classic trek redefined',
    description:
      'Awaken your senses on this iconic trek, where alpine lakes, misty valleys, and ancient monasteries invite awe, adventure, and spiritual reflection at every step.',
    hero: {
      images: [
        '/images/dummy/img9.jpg',
        '/images/dummy/img10.jpg',
        '/images/dummy/img11.jpg',
      ],
    },
    info: {
      when: 'April - June & September - November',
      price: 'From £4,200pp excl. flights (based on 2 people sharing)',
      duration: '8 nights (5 days trekking)',
    },
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img7.jpg',
        title: 'Alpine Paradise',
        tagline: 'Above the clouds',
        description:
          'Trek through rhododendron forests and alpine meadows, camping beside pristine high-altitude lakes that mirror the surrounding peaks.',
      },
      {
        id: 2,
        image: '/images/dummy/img8.jpg',
        title: 'Monastery Encounters',
        tagline: 'Where monks greet the dawn',
        description:
          'Visit remote monasteries accessible only by foot, sharing meals and conversations with monks living in sublime isolation.',
      },
      {
        id: 3,
        image: '/images/dummy/img9.jpg',
        title: 'Panoramic Vistas',
        tagline: 'Himalayan majesty revealed',
        description:
          'Witness breathtaking views of the Himalayan range, including Bhutan\'s sacred peaks that define the kingdom\'s northern border.',
      },
      {
        id: 4,
        image: '/images/dummy/img10.jpg',
        title: 'Spiritual Reflection',
        tagline: 'Find yourself in nature',
        description:
          'Experience the meditative rhythm of trekking, where each day\'s journey brings both physical challenge and spiritual reward.',
      },
    ],
  },
  'silent-monks': {
    id: 6,
    slug: 'silent-monks',
    packageId: 12,
    title: 'Silent Monks',
    subtitle: 'Whisper, wonder, wander',
    description:
      "Step into Bhutan's serene sanctuaries, where quiet moments, mindful rituals, and tranquil landscapes invite reflection, wonder, and a gentle escape from the everyday.",
    hero: {
      images: [
        '/images/dummy/img9.jpg',
        '/images/dummy/img10.jpg',
        '/images/dummy/img1.jpg',
      ],
    },
    info: {
      when: 'February - June & September - November',
      price: 'From £4,615pp excl. flights (based on 2 people sharing)',
      duration: '5 nights ideal length',
    },
    culturalConnections: [
      {
        id: 1,
        image: '/images/dummy/img1.jpg',
        title: 'Monastic Life',
        tagline: 'Where silence is sacred',
        description:
          'Spend time in meditation centers and monasteries, learning from monks who have embraced a life of contemplation and spiritual practice.',
      },
      {
        id: 2,
        image: '/images/dummy/img2.jpg',
        title: 'Mindful Practices',
        tagline: 'The art of being present',
        description:
          'Participate in guided meditation sessions, mindfulness practices, and silent walking meditations in Bhutan\'s most tranquil settings.',
      },
      {
        id: 3,
        image: '/images/dummy/img3.jpg',
        title: 'Serene Landscapes',
        tagline: 'Nature\'s quiet wisdom',
        description:
          'Visit peaceful valleys, hidden temples, and sacred sites where the natural beauty enhances the contemplative atmosphere.',
      },
      {
        id: 4,
        image: '/images/dummy/img4.jpg',
        title: 'Inner Journey',
        tagline: 'Discover your true self',
        description:
          'Through silence, simplicity, and spiritual guidance, embark on a journey inward that complements the outer exploration of Bhutan.',
      },
    ],
  },
};

// Helper functions
export const getFlagshipTourBySlug = (slug: string): FlagshipTour | undefined => {
  return FLAGSHIP_TOURS[slug];
};

export const getAllFlagshipTours = (): FlagshipTour[] => {
  return Object.values(FLAGSHIP_TOURS);
};

export const getFlagshipTourByPackageId = (packageId: number): FlagshipTour | undefined => {
  return Object.values(FLAGSHIP_TOURS).find((tour) => tour.packageId === packageId);
};
