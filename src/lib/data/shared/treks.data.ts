import { Trek } from '@/lib/types';

export const TREKS: Record<string, Trek> = {
  'gangkar-puensum-exploratory-trek': {
    id: 1,
    slug: 'gangkar-puensum-exploratory-trek',
    title: 'Gangkar Puensum Exploratory Trek',
    subtitle: 'Journey to the world\'s highest unclimbed peak',
    description:
      'Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters. This legendary high-altitude adventure takes you into the shadow of Gangkar Puensum, where mystical peaks and untouched valleys await.',
    image: {
      src: '/images/dummy/img5.jpg',
      alt: 'Gangkar Puensum Trek',
    },
    info: {
      bestSeason: 'March to May and September to October are the best seasons to visit Bhutan, offering ideal weather, vibrant landscapes, and memorable experiences.',
      altitude: {
        high: '4600m',
        low: '1350m',
      },
      duration: '15 Days on Trek',
      grade: 'Strenuous',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Physical Preparation',
        description:
          'Marvel at Bhutan\'s towering peaks, emerald valleys, and sacred monasteries. Ensure you are in good physical condition and have previous trekking experience at high altitude.',
      },
      {
        id: 2,
        title: 'Gear & Equipment',
        description:
          'Essential trekking gear including warm clothing, quality boots, sleeping bag rated for sub-zero temperatures, and layering system for variable weather conditions.',
      },
      {
        id: 3,
        title: 'Altitude Acclimatization',
        description:
          'Proper acclimatization is crucial. The trek includes rest days to help your body adjust to high altitude and minimize the risk of altitude sickness.',
      },
      {
        id: 4,
        title: 'Permits & Documentation',
        description:
          'Special permits required for restricted areas. Our team handles all necessary documentation, trekking permits, and government authorizations.',
      },
      {
        id: 5,
        title: 'Weather Conditions',
        description:
          'Weather can be unpredictable at high altitude. Be prepared for snow, rain, and rapidly changing conditions. Waterproof and windproof gear essential.',
      },
      {
        id: 6,
        title: 'Camp Facilities',
        description:
          'Professional camping setup with dining tents, toilet tents, and comfortable sleeping arrangements. Our experienced crew ensures your comfort throughout the trek.',
      },
      {
        id: 7,
        title: 'Medical Support',
        description:
          'First aid kit, emergency evacuation plan, and experienced guides trained in wilderness medicine. Comprehensive travel insurance is mandatory.',
      },
      {
        id: 8,
        title: 'Cultural Sensitivity',
        description:
          'Respect local customs, sacred sites, and environmental regulations. Leave no trace principles apply. Photography restrictions at certain monasteries.',
      },
    ],
  },
  'snowman-trek': {
    id: 2,
    slug: 'snowman-trek',
    title: 'The Snowman Trek',
    subtitle: 'One of the world\'s most challenging treks',
    description:
      'Embark on the ultimate Himalayan adventure. The Snowman Trek is considered one of the most difficult treks in the world, traversing 11 high-altitude passes and offering unparalleled views of Bhutan\'s pristine wilderness.',
    image: {
      src: '/images/dummy/img6.jpg',
      alt: 'Snowman Trek',
    },
    info: {
      bestSeason: 'Late September to October, when weather windows are most stable for this extreme trek.',
      altitude: {
        high: '5320m',
        low: '1400m',
      },
      duration: '25 Days on Trek',
      grade: 'Extreme',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Extreme Challenge',
        description:
          'This is one of the world\'s toughest treks. Requires excellent physical fitness, mental resilience, and previous high-altitude trekking experience.',
      },
      {
        id: 2,
        title: 'Technical Preparation',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Preparation includes cardiovascular training, strength building, and altitude simulation if possible.',
      },
      {
        id: 3,
        title: 'Extended Duration',
        description:
          'Nearly a month in remote wilderness. Must be prepared for extended periods without modern amenities, limited communication, and basic facilities.',
      },
      {
        id: 4,
        title: 'Weather Extremes',
        description:
          'Expect snow, freezing temperatures, and harsh conditions. High-quality expedition-grade gear absolutely essential for safety and comfort.',
      },
      {
        id: 5,
        title: 'Isolation',
        description:
          'Trek through some of Bhutan\'s most remote regions. Days away from any village or road. Complete self-sufficiency required.',
      },
      {
        id: 6,
        title: 'Wildlife Encounters',
        description:
          'Potential sightings of blue sheep, snow leopards, and Himalayan wildlife in their natural habitat. Minimal human presence.',
      },
      {
        id: 7,
        title: 'Support Team',
        description:
          'Large expedition team including expert guides, cooks, camp staff, and pack animals to ensure safety and logistics.',
      },
      {
        id: 8,
        title: 'Emergency Protocols',
        description:
          'Comprehensive evacuation plans, satellite communication, and emergency medical supplies. Weather-dependent schedule adjustments.',
      },
    ],
  },
  'druk-path-trek': {
    id: 3,
    slug: 'druk-path-trek',
    title: 'Druk Path Trek',
    subtitle: 'Bhutan\'s classic alpine adventure',
    description:
      'Experience Bhutan\'s most iconic trek, connecting Paro and Thimphu through pristine alpine lakes, rhododendron forests, and remote monasteries. Perfect introduction to Himalayan trekking.',
    image: {
      src: '/images/dummy/img7.jpg',
      alt: 'Druk Path Trek',
    },
    info: {
      bestSeason: 'April to June and September to November, ideal for clear mountain views and comfortable temperatures.',
      altitude: {
        high: '4210m',
        low: '2400m',
      },
      duration: '5 Days on Trek',
      grade: 'Moderate',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Ideal First Trek',
        description:
          'Perfect for those new to high-altitude trekking while still offering authentic Himalayan experience. Moderate difficulty with gradual ascents.',
      },
      {
        id: 2,
        title: 'Scenic Highlights',
        description:
          'Stunning alpine lakes, panoramic mountain views, rhododendron blooms in spring, and encounters with yak herders.',
      },
      {
        id: 3,
        title: 'Cultural Sites',
        description:
          'Visit Jele Dzong and other remote monasteries accessible only by trekking. Deep cultural immersion along the trail.',
      },
      {
        id: 4,
        title: 'Camping Experience',
        description:
          'Professional camping setup beside crystal-clear lakes. Comfortable tents, hot meals, and stunning campsites.',
      },
      {
        id: 5,
        title: 'Fitness Level',
        description:
          'Moderate fitness required. Ability to walk 4-6 hours daily with daypack. Some previous hiking experience beneficial.',
      },
      {
        id: 6,
        title: 'Best Photography',
        description:
          'Outstanding photo opportunities of Mount Everest region, Jichu Drake, and pristine lake reflections.',
      },
      {
        id: 7,
        title: 'Seasonal Variations',
        description:
          'Spring brings wildflowers and rhododendrons. Autumn offers clearest skies and best mountain visibility.',
      },
      {
        id: 8,
        title: 'Connectivity',
        description:
          'Start and end points near Paro and Thimphu make this trek logistically convenient with easier access.',
      },
    ],
  },
  'jomolhari-base-camp-trek': {
    id: 4,
    slug: 'jomolhari-base-camp-trek',
    title: 'Jomolhari Base Camp Trek',
    subtitle: 'To the foot of the sacred mountain',
    description:
      'Trek to the base of Mount Jomolhari, one of Bhutan\'s most sacred and beautiful peaks. Experience alpine meadows, nomadic yak herders, and spectacular mountain scenery.',
    image: {
      src: '/images/dummy/img8.jpg',
      alt: 'Jomolhari Base Camp Trek',
    },
    info: {
      bestSeason: 'April to June for wildflowers, September to November for clear skies and stable weather.',
      altitude: {
        high: '4115m',
        low: '2280m',
      },
      duration: '7 Days on Trek',
      grade: 'Moderate to Challenging',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Sacred Mountain',
        description:
          'Jomolhari is sacred to Bhutanese people. Respect cultural significance and photography restrictions near religious sites.',
      },
      {
        id: 2,
        title: 'Nomadic Encounters',
        description:
          'Meet yak herders living traditional nomadic lifestyles in high-altitude pastures. Unique cultural exchange opportunities.',
      },
      {
        id: 3,
        title: 'Alpine Flora',
        description:
          'Diverse plant life including edelweiss, blue poppies, and primulas. Spring trekking offers spectacular wildflower displays.',
      },
      {
        id: 4,
        title: 'Mountain Views',
        description:
          'Stunning perspectives of Jomolhari (7,314m) and neighboring peaks. Clear autumn skies provide best photographic conditions.',
      },
      {
        id: 5,
        title: 'River Crossings',
        description:
          'Several stream and river crossings. Proper waterproof boots essential. Crossing difficulty varies with season and rainfall.',
      },
      {
        id: 6,
        title: 'Hot Springs',
        description:
          'Natural hot springs at Gasa. Perfect for relaxing tired muscles mid-trek. Cultural bathing practices observed.',
      },
      {
        id: 7,
        title: 'Wildlife Sightings',
        description:
          'Possible encounters with blue sheep, takin (national animal), and rare birds. Binoculars recommended for wildlife watching.',
      },
      {
        id: 8,
        title: 'Trail Conditions',
        description:
          'Well-established trails with some steep sections. Variable terrain from forest to alpine meadows to high passes.',
      },
    ],
  },
  'bumthang-cultural-trek': {
    id: 5,
    slug: 'bumthang-cultural-trek',
    title: 'Bumthang Cultural Trek',
    subtitle: 'Through the spiritual heartland',
    description:
      'Explore central Bhutan\'s sacred valleys, ancient monasteries, and traditional villages. This moderate trek combines cultural immersion with beautiful landscapes.',
    image: {
      src: '/images/dummy/img9.jpg',
      alt: 'Bumthang Cultural Trek',
    },
    info: {
      bestSeason: 'March to May and September to November. Spring and autumn offer comfortable temperatures.',
      altitude: {
        high: '3600m',
        low: '2600m',
      },
      duration: '4 Days on Trek',
      grade: 'Easy to Moderate',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Cultural Immersion',
        description:
          'Visit ancient temples, interact with monks, and experience daily life in remote villages. Deep spiritual and cultural engagement.',
      },
      {
        id: 2,
        title: 'Moderate Altitude',
        description:
          'Lower maximum altitude makes this accessible for most fitness levels. Good acclimatization trek or first Bhutan experience.',
      },
      {
        id: 3,
        title: 'Village Homestays',
        description:
          'Optional homestay experiences in traditional farmhouses. Authentic cultural exchange and home-cooked Bhutanese meals.',
      },
      {
        id: 4,
        title: 'Sacred Sites',
        description:
          'Numerous temples and monasteries along the route. Opportunity for meditation, prayer, and spiritual reflection.',
      },
      {
        id: 5,
        title: 'Craft Centers',
        description:
          'Visit weaving centers and observe traditional Bhutanese crafts. Opportunity to purchase authentic handicrafts directly from artisans.',
      },
      {
        id: 6,
        title: 'Forest Trails',
        description:
          'Walk through pristine blue pine and oak forests. Abundant birdlife and peaceful forest environment.',
      },
      {
        id: 7,
        title: 'Festival Timing',
        description:
          'Trek can be timed with Bumthang festivals for enhanced cultural experience. Colorful masked dances and ceremonies.',
      },
      {
        id: 8,
        title: 'Shorter Duration',
        description:
          'Ideal for those with limited time but seeking authentic trekking experience. Can be combined with other activities.',
      },
    ],
  },
  'dagala-thousand-lakes-trek': {
    id: 6,
    slug: 'dagala-thousand-lakes-trek',
    title: 'Dagala Thousand Lakes Trek',
    subtitle: 'Among countless alpine lakes',
    description:
      'Discover a pristine high-altitude wilderness dotted with countless glacial lakes. This less-traveled trek offers solitude, spectacular views, and unique lake scenery.',
    image: {
      src: '/images/dummy/img10.jpg',
      alt: 'Dagala Thousand Lakes Trek',
    },
    info: {
      bestSeason: 'Late May to September. Summer allows access to highest lakes and passes.',
      altitude: {
        high: '4520m',
        low: '2850m',
      },
      duration: '6 Days on Trek',
      grade: 'Moderate to Challenging',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Countless Lakes',
        description:
          'Trek past numerous alpine lakes reflecting snow-capped peaks. Each campsite near pristine lake setting.',
      },
      {
        id: 2,
        title: 'Off the Beaten Path',
        description:
          'Less crowded than popular treks. Greater sense of wilderness and solitude. Perfect for those seeking tranquility.',
      },
      {
        id: 3,
        title: 'Panoramic Views',
        description:
          'Views of eastern Himalayas including Mount Everest on clear days. 360-degree mountain panoramas from high passes.',
      },
      {
        id: 4,
        title: 'Highland Flora',
        description:
          'Unique high-altitude plant species. Summer brings colorful alpine flowers carpeting meadows around lakes.',
      },
      {
        id: 5,
        title: 'Yak Pastures',
        description:
          'Traverse traditional grazing lands. Possible encounters with herders and their yaks in summer months.',
      },
      {
        id: 6,
        title: 'Changeable Weather',
        description:
          'Prepare for rain, wind, and possible snow even in summer. Weather changes rapidly at high altitude.',
      },
      {
        id: 7,
        title: 'Water Sources',
        description:
          'Abundant freshwater from glacial lakes and streams. Still requires purification before drinking.',
      },
      {
        id: 8,
        title: 'Proximity to Thimphu',
        description:
          'Starting point close to capital city. Excellent option for combining city sightseeing with wilderness trekking.',
      },
    ],
  },
  'laya-gasa-trek': {
    id: 7,
    slug: 'laya-gasa-trek',
    title: 'Laya Gasa Trek',
    subtitle: 'To the land of the Layaps',
    description:
      'Journey to one of Bhutan\'s most remote communities. Experience the unique culture of the Layap people, soak in natural hot springs, and traverse high mountain passes.',
    image: {
      src: '/images/dummy/img11.jpg',
      alt: 'Laya Gasa Trek',
    },
    info: {
      bestSeason: 'September to November for stable weather and clear skies.',
      altitude: {
        high: '4250m',
        low: '1200m',
      },
      duration: '11 Days on Trek',
      grade: 'Challenging',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Layap Culture',
        description:
          'Meet the Layap people known for distinctive conical bamboo hats. Unique dialect, customs, and traditional lifestyle.',
      },
      {
        id: 2,
        title: 'Remote Villages',
        description:
          'Visit isolated communities accessible only by trekking. Authentic cultural immersion in traditional Bhutanese highland life.',
      },
      {
        id: 3,
        title: 'Gasa Hot Springs',
        description:
          'Natural hot springs at trek\'s end. Perfect for muscle recovery and relaxation after challenging high passes.',
      },
      {
        id: 4,
        title: 'Diverse Landscapes',
        description:
          'From subtropical forests to alpine meadows and barren high passes. Dramatic landscape changes along route.',
      },
      {
        id: 5,
        title: 'High Passes',
        description:
          'Multiple challenging passes including Rodophu La. Requires good acclimatization and weather awareness.',
      },
      {
        id: 6,
        title: 'Extended Duration',
        description:
          'Longer trek requiring commitment and preparation. Rewards include deep wilderness experience and cultural insights.',
      },
      {
        id: 7,
        title: 'Yak Transport',
        description:
          'Yaks and horses transport camping equipment and supplies. Traditional mountain transportation methods.',
      },
      {
        id: 8,
        title: 'Local Guides',
        description:
          'Experienced local guides with deep knowledge of area, culture, and traditions. Essential for navigation and cultural interpretation.',
      },
    ],
  },
  'merak-sakteng-trek': {
    id: 8,
    slug: 'merak-sakteng-trek',
    title: 'Merak Sakteng Trek',
    subtitle: 'Discover Bhutan\'s eastern frontier',
    description:
      'Explore eastern Bhutan\'s remote valleys, home to semi-nomadic Brokpa people with unique culture and traditions. This off-the-beaten-path trek offers authentic cultural encounters.',
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Merak Sakteng Trek',
    },
    info: {
      bestSeason: 'April to June and September to November. Avoid monsoon season.',
      altitude: {
        high: '4220m',
        low: '2700m',
      },
      duration: '8 Days on Trek',
      grade: 'Moderate',
    },
    essentialInfo: [
      {
        id: 1,
        title: 'Brokpa Culture',
        description:
          'Encounter the semi-nomadic Brokpa people with distinctive dress, language, and customs. One of Bhutan\'s most unique ethnic groups.',
      },
      {
        id: 2,
        title: 'Eastern Bhutan',
        description:
          'Few tourists visit this region. Authentic cultural experience and genuine local interactions throughout.',
      },
      {
        id: 3,
        title: 'Wildlife Sanctuary',
        description:
          'Trek through Sakteng Wildlife Sanctuary, home to red pandas and rumored habitat of the elusive yeti.',
      },
      {
        id: 4,
        title: 'Traditional Villages',
        description:
          'Visit Merak and Sakteng villages where traditional lifestyles continue largely unchanged. Stone houses and yakherding culture.',
      },
      {
        id: 5,
        title: 'High Passes',
        description:
          'Cross Nachung La pass with panoramic eastern Himalayan views. Moderate altitude but stunning scenery.',
      },
      {
        id: 6,
        title: 'Rhododendron Forests',
        description:
          'Trek through dense rhododendron forests spectacular in spring bloom. Diverse plant and bird species.',
      },
      {
        id: 7,
        title: 'Yak Products',
        description:
          'Experience local yak herding culture. Sample yak cheese, butter, and other traditional dairy products.',
      },
      {
        id: 8,
        title: 'Limited Infrastructure',
        description:
          'Basic facilities reflect remote location. Adds to authentic experience but requires flexibility and preparation.',
      },
    ],
  },
};

// Helper functions
export const getAllTreks = (): Trek[] => {
  return Object.values(TREKS);
};

export const getTrekBySlug = (slug: string): Trek | undefined => {
  return TREKS[slug];
};

export const getTrekById = (id: number): Trek | undefined => {
  return Object.values(TREKS).find((trek) => trek.id === id);
};

export const getTreksByDifficulty = (grade: string): Trek[] => {
  return Object.values(TREKS).filter((trek) => trek.info.grade === grade);
};

export const getTreksByDuration = (minDays: number, maxDays: number): Trek[] => {
  return Object.values(TREKS).filter((trek) => {
    const days = parseInt(trek.info.duration.split(' ')[0]);
    return days >= minDays && days <= maxDays;
  });
};
