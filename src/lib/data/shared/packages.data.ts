import { PackageCard } from '@/lib/types';

export const PACKAGES: Record<number, PackageCard> = {
  1: {
    id: 1,
    slug: 'bhutan-in-the-cloud',
    title: 'BHUTAN IN THE CLOUD',
    subtitle: 'Above the ordinary',
    category: 'SCENIC TOUR',
    description:
      'Experience Bhutan from breathtaking heights, soaring above sacred valleys and ancient monasteries in unparalleled luxury.',
    image: {
      src: '/images/dummy/img6.jpg',
      alt: 'Bhutan in the Cloud',
    },
    longDescription:
      'Experience Bhutan like never before with premium helicopter journeys. Soar above sacred valleys, majestic mountains, and hidden monasteries in unrivaled luxury. Each flight blends adventure, comfort, and breathtaking discovery, turning travel into a transformative, mindful experience where nature, culture, and serenity converge seamlessly.',
    tagline: 'SKIP THE ROADS, CATCH THE VIEWS',
    fullImage: '/images/dummy/img1.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Sky-High Serenity',
        subtitle: 'Luxury aerial tours',
        description:
          'Embark on exclusive helicopter tours that reveal Bhutan\'s hidden gems from above. Witness the grandeur of Tiger\'s Nest Monastery, pristine glacial lakes, and remote dzongs accessible only from the sky.',
        image: 'img6.jpg',
      },
      {
        id: 2,
        title: 'Sacred Valleys Below',
        subtitle: 'Panoramic perspectives',
        description:
          'Glide over sacred valleys where ancient traditions thrive. Experience the unique perspective of Bhutan\'s spiritual landscape, from prayer flag-adorned mountain passes to secluded meditation retreats.',
        image: 'img7.jpg',
      },
      {
        id: 3,
        title: 'Mountaintop Moments',
        subtitle: 'Unforgettable views',
        description:
          'Touch down on pristine mountain meadows for intimate picnics with panoramic Himalayan views. Each landing site is carefully selected for its natural beauty and spiritual significance.',
        image: 'img8.jpg',
      },
      {
        id: 4,
        title: 'Pilot Perspectives',
        subtitle: 'Expert navigation',
        description:
          'Fly with experienced pilots who share fascinating stories about Bhutan\'s geography, weather patterns, and hidden landmarks. Learn about the technical challenges of Himalayan aviation.',
        image: 'img4.jpg',
      },
      {
        id: 5,
        title: 'Exclusive Access',
        subtitle: 'Private adventures',
        description:
          'Reach remote locations inaccessible by road. Visit private monasteries, pristine lakes, and untouched valleys reserved for helicopter access only.',
        image: 'img5.jpg',
      },
      {
        id: 6,
        title: 'Bespoke Itineraries',
        subtitle: 'Your journey, your way',
        description:
          'Customize every aspect of your aerial adventure. Choose landing sites, duration, and timing to match your preferences and capture perfect photographic moments.',
        image: 'img9.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Connect Now – We\'ll throw in enlightenment',
    },
  },
  2: {
    id: 2,
    slug: 'bhutan-through-the-lens',
    title: 'BHUTAN THROUGH THE LENS',
    subtitle: 'Capture the extraordinary',
    category: 'PHOTOGRAPHY TOUR',
    description:
      'A photographer\'s dream journey through Bhutan\'s most photogenic landscapes, festivals, and cultural moments.',
    image: {
      src: '/images/dummy/img5.jpg',
      alt: 'Bhutan Through the Lens',
    },
    longDescription:
      'Capture Bhutan\'s essence through your lens on this specially curated photography expedition. From vibrant festivals to misty mountain dawns, every moment is a masterpiece waiting to be framed. Led by expert photographers who know the best angles, lighting, and cultural moments.',
    tagline: 'FRAME YOUR BHUTAN STORY',
    fullImage: '/images/dummy/img2.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Festival Magic',
        subtitle: 'Vibrant celebrations',
        description:
          'Capture the explosive colors and dynamic movements of Bhutan\'s sacred festivals. Gain exclusive access to rare ceremonies and behind-the-scenes moments with masked dancers.',
        image: 'img5.jpg',
      },
      {
        id: 2,
        title: 'Golden Hour Monasteries',
        subtitle: 'Architectural wonders',
        description:
          'Photograph ancient dzongs and monasteries bathed in golden light. We\'ll position you at the perfect vantage points during optimal lighting conditions.',
        image: 'img1.jpg',
      },
      {
        id: 3,
        title: 'Portrait of a Kingdom',
        subtitle: 'People and culture',
        description:
          'Connect with local artisans, monks, and farmers for authentic portrait opportunities. Learn the art of respectful cultural photography from our guides.',
        image: 'img3.jpg',
      },
      {
        id: 4,
        title: 'Landscape Masterclass',
        subtitle: 'Natural beauty',
        description:
          'Trek to pristine locations for landscape photography workshops. Learn composition, long exposure techniques, and how to capture Bhutan\'s dramatic terrain.',
        image: 'img6.jpg',
      },
      {
        id: 5,
        title: 'Wildlife Encounters',
        subtitle: 'Rare species',
        description:
          'Photograph rare Himalayan wildlife including takin, red pandas, and black-necked cranes with expert naturalist guides who know the best viewing spots.',
        image: 'img8.jpg',
      },
      {
        id: 6,
        title: 'Post-Processing Sessions',
        subtitle: 'Professional editing',
        description:
          'Daily evening sessions to review and edit your captures. Learn advanced techniques from professional photographers to bring out the best in your images.',
        image: 'img10.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Travel at your own pace with flexible itineraries designed around the best photographic opportunities, from sunrise to golden hour.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Start Your Visual Journey',
    },
  },
  3: {
    id: 3,
    slug: 'culinary-tapestry',
    title: 'CULINARY TAPESTRY',
    subtitle: 'Savor the sublime',
    category: 'CULINARY TOUR',
    description:
      'Embark on a gastronomic journey through Bhutan\'s rich culinary heritage, from street food to royal cuisine.',
    image: {
      src: '/images/dummy/img3.jpg',
      alt: 'Culinary Tapestry',
    },
    longDescription:
      'Discover Bhutan\'s culinary soul through immersive food experiences. From fiery ema datshi to delicate momos, explore the kingdom\'s unique flavors while learning traditional cooking techniques from local chefs and home cooks.',
    tagline: 'TASTE THE SPIRIT OF BHUTAN',
    fullImage: '/images/dummy/img3.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Farm to Table',
        subtitle: 'Organic ingredients',
        description:
          'Visit organic farms and learn about Bhutan\'s commitment to natural agriculture. Harvest fresh produce and herbs that will become part of your evening meal.',
        image: 'img2.jpg',
      },
      {
        id: 2,
        title: 'Monastery Kitchen',
        subtitle: 'Sacred flavors',
        description:
          'Experience the art of Buddhist vegetarian cooking in a monastery kitchen. Participate in preparing traditional meals served to monks.',
        image: 'img4.jpg',
      },
      {
        id: 3,
        title: 'Royal Feast',
        subtitle: 'Heritage recipes',
        description:
          'Enjoy an exclusive dining experience featuring recipes from the royal kitchen, prepared using centuries-old techniques and rare local ingredients.',
        image: 'img1.jpg',
      },
      {
        id: 4,
        title: 'Market Discoveries',
        subtitle: 'Local flavors',
        description:
          'Explore bustling weekend markets with a chef guide. Learn to identify local ingredients, spices, and seasonal produce used in traditional Bhutanese cooking.',
        image: 'img5.jpg',
      },
      {
        id: 5,
        title: 'Home-Cooked Traditions',
        subtitle: 'Family recipes',
        description:
          'Join local families in their homes to prepare traditional dishes passed down through generations. Share stories over tea while learning authentic cooking methods.',
        image: 'img7.jpg',
      },
      {
        id: 6,
        title: 'Cheese and Chili Experience',
        subtitle: 'Signature dishes',
        description:
          'Master the art of making ema datshi, Bhutan\'s national dish. Visit cheese-making cooperatives and learn about the varieties of chilies used in Bhutanese cuisine.',
        image: 'img9.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Customize your culinary journey with cooking classes, market tours, and private dining experiences tailored to your tastes and dietary preferences.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Book Your Culinary Adventure',
    },
  },
  4: {
    id: 4,
    slug: 'river-rafting',
    title: 'RIVER RAFTING',
    subtitle: 'Heritage in full color',
    category: 'ADVENTURE TOUR',
    description:
      'Feel the adrenaline as you navigate the pristine rivers of Bhutan, blending adventure with breathtaking natural scenery.',
    image: {
      src: '/images/dummy/img11.jpg',
      alt: 'River Rafting',
    },
    longDescription:
      'Navigate Bhutan\'s crystal-clear rivers on an exhilarating rafting adventure. From gentle floats to thrilling rapids, experience the kingdom\'s waterways while surrounded by pristine forests and ancient monasteries perched on riverbanks.',
    tagline: 'RIDE THE WILD RIVERS',
    fullImage: '/images/dummy/img11.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Mo Chhu Rapids',
        subtitle: 'Thrilling waters',
        description:
          'Tackle the exciting Grade III rapids of the Mo Chhu river. Perfect for adventure seekers, this route offers thrilling drops and calm pools for recovery.',
        image: 'img11.jpg',
      },
      {
        id: 2,
        title: 'Pho Chhu Serenity',
        subtitle: 'Gentle journey',
        description:
          'Float peacefully along the Pho Chhu river, ideal for families and first-timers. Enjoy spectacular valley views and opportunities to spot rare birds.',
        image: 'img2.jpg',
      },
      {
        id: 3,
        title: 'Riverside Camping',
        subtitle: 'Night under stars',
        description:
          'Camp on pristine riverbanks under starlit skies. Enjoy campfire stories and traditional hot stone baths to soothe tired muscles.',
        image: 'img3.jpg',
      },
      {
        id: 4,
        title: 'Safety First',
        subtitle: 'Expert guides',
        description:
          'Raft with internationally certified guides using top-quality equipment. Comprehensive safety briefings and support kayakers ensure a secure adventure.',
        image: 'img5.jpg',
      },
      {
        id: 5,
        title: 'Cultural Stops',
        subtitle: 'Riverside monasteries',
        description:
          'Stop at riverside temples and villages accessible only by water. Learn about communities that have lived along these rivers for centuries.',
        image: 'img6.jpg',
      },
      {
        id: 6,
        title: 'Multi-Day Expeditions',
        subtitle: 'Extended adventures',
        description:
          'Embark on multi-day rafting journeys through remote valleys. Combine rafting with trekking, fishing, and cultural immersion for the ultimate adventure.',
        image: 'img9.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Choose your adventure level with routes ranging from family-friendly floats to adrenaline-pumping rapids, all with expert safety guidance.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Dive Into Adventure',
    },
  },
  5: {
    id: 5,
    slug: 'education-tour',
    title: 'EDUCATION TOUR',
    subtitle: 'Enrich your journey',
    category: 'EDUCATIONAL TOUR',
    description:
      'An educational journey through Bhutan\'s history, culture, and environmental conservation efforts, perfect for lifelong learners.',
    image: {
      src: '/images/dummy/img2.jpg',
      alt: 'Education Tour',
    },
    longDescription:
      'Immerse yourself in Bhutan\'s unique approach to development and sustainability. Learn about Gross National Happiness, traditional medicine, conservation efforts, and the kingdom\'s education system through workshops, lectures, and hands-on experiences.',
    tagline: 'LEARN FROM THE LAND OF HAPPINESS',
    fullImage: '/images/dummy/img4.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'GNH Philosophy',
        subtitle: 'Happiness economics',
        description:
          'Attend seminars on Gross National Happiness with policy experts. Understand how Bhutan measures progress beyond GDP through sustainable development.',
        image: 'img6.jpg',
      },
      {
        id: 2,
        title: 'Traditional Medicine',
        subtitle: 'Ancient healing',
        description:
          'Visit the National Institute of Traditional Medicine. Learn about herbal remedies, diagnostic techniques, and the integration of Buddhist healing practices.',
        image: 'img7.jpg',
      },
      {
        id: 3,
        title: 'Conservation Success',
        subtitle: 'Environmental leadership',
        description:
          'Explore protected forests and meet conservation leaders. Discover how Bhutan remains carbon negative while supporting community livelihoods.',
        image: 'img8.jpg',
      },
      {
        id: 4,
        title: 'Textile Arts',
        subtitle: 'Weaving traditions',
        description:
          'Learn about Bhutan\'s intricate textile heritage. Visit weaving centers and understand the cultural significance of traditional patterns and natural dyes.',
        image: 'img1.jpg',
      },
      {
        id: 5,
        title: 'Archery Culture',
        subtitle: 'National sport',
        description:
          'Try your hand at Bhutan\'s national sport. Learn about the ritual and social significance of archery in Bhutanese culture.',
        image: 'img4.jpg',
      },
      {
        id: 6,
        title: 'Buddhist Studies',
        subtitle: 'Spiritual wisdom',
        description:
          'Participate in meditation sessions and dharma talks with monks. Understand the profound influence of Buddhism on Bhutanese society and governance.',
        image: 'img10.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Customize your learning journey with academic workshops, field studies, and interactions with experts in your areas of interest.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Expand Your Horizons',
    },
  },
  6: {
    id: 6,
    slug: 'future-travel',
    title: 'FUTURE TRAVEL',
    subtitle: 'Bhutan, reimagined',
    category: 'INNOVATIVE TOUR',
    description:
      'Explore the future of travel in Bhutan, focusing on innovative sustainability and high-value, low-volume tourism experiences.',
    image: {
      src: '/images/dummy/img7.jpg',
      alt: 'Future Travel',
    },
    longDescription:
      'Experience Bhutan\'s vision for sustainable tourism. Stay in eco-luxury lodges powered by renewable energy, participate in community projects, and learn about innovative conservation technologies protecting the Himalayas.',
    tagline: 'TRAVEL TOMORROW, TODAY',
    fullImage: '/images/dummy/img7.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Carbon Neutral Stays',
        subtitle: 'Sustainable luxury',
        description:
          'Lodge in cutting-edge eco-resorts that set new standards for sustainable hospitality. Solar-powered, locally sourced, and carbon negative.',
        image: 'img9.jpg',
      },
      {
        id: 2,
        title: 'Community Tourism',
        subtitle: 'Shared prosperity',
        description:
          'Engage with innovative community tourism projects. See how locals benefit directly from tourism while preserving their traditions.',
        image: 'img10.jpg',
      },
      {
        id: 3,
        title: 'Tech Meets Tradition',
        subtitle: 'Innovation in harmony',
        description:
          'Discover how Bhutan uses technology to protect its heritage. From digital archives of ancient texts to AI-powered wildlife monitoring.',
        image: 'img1.jpg',
      },
      {
        id: 4,
        title: 'Renewable Energy',
        subtitle: 'Green power',
        description:
          'Tour hydroelectric facilities and solar farms. Learn how Bhutan generates clean energy while exporting power to neighboring countries.',
        image: 'img3.jpg',
      },
      {
        id: 5,
        title: 'Waste Innovation',
        subtitle: 'Zero waste goals',
        description:
          'Visit pioneering recycling centers and organic waste programs. See how communities are eliminating plastic and achieving zero-waste targets.',
        image: 'img5.jpg',
      },
      {
        id: 6,
        title: 'Digital Nomad Life',
        subtitle: 'Work from Bhutan',
        description:
          'Experience Bhutan\'s emerging digital nomad infrastructure. High-speed connectivity meets Himalayan tranquility for the ultimate work-life balance.',
        image: 'img7.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Design your future-focused journey with visits to sustainable projects, renewable energy sites, and innovative conservation initiatives.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Join The Future',
    },
  },
  7: {
    id: 7,
    slug: 'her-bhutan-her-story',
    title: 'HER BHUTAN, HER STORY',
    subtitle: 'Empower your journey',
    category: 'WOMEN ONLY TOUR',
    description:
      'Discover Bhutan through inspiring women\'s eyes—intimate stories, hidden traditions, and unique encounters that reveal a side of the kingdom rarely seen by travelers.',
    image: {
      src: '/images/dummy/img5.jpg',
      alt: 'Her Bhutan, Her Story',
    },
    isBestSelling: true,
    longDescription:
      'Join a transformative journey celebrating women\'s voices in Bhutan. Meet female entrepreneurs, artists, and spiritual leaders. Share stories, learn traditional crafts, and explore women\'s roles in this evolving kingdom.',
    tagline: 'CELEBRATE WOMEN, CULTURE, AND CONNECTION',
    fullImage: '/images/dummy/img5.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Women Entrepreneurs',
        subtitle: 'Business and tradition',
        description:
          'Meet successful female business owners preserving traditional crafts while building modern enterprises. Learn from their experiences balancing innovation and heritage.',
        image: 'img5.jpg',
      },
      {
        id: 2,
        title: 'Spiritual Leaders',
        subtitle: 'Sacred feminine',
        description:
          'Connect with female monks and spiritual practitioners. Participate in meditation sessions and learn about women\'s growing role in Buddhist practice.',
        image: 'img6.jpg',
      },
      {
        id: 3,
        title: 'Artisan Circles',
        subtitle: 'Creative heritage',
        description:
          'Join women weavers, painters, and sculptors in their studios. Learn traditional techniques passed down through generations of women.',
        image: 'img2.jpg',
      },
      {
        id: 4,
        title: 'Queens and Goddesses',
        subtitle: 'Historical perspectives',
        description:
          'Explore stories of powerful women in Bhutanese history. Visit sites associated with queens, warriors, and female deities.',
        image: 'img3.jpg',
      },
      {
        id: 5,
        title: 'Modern Changemakers',
        subtitle: 'Contemporary voices',
        description:
          'Meet women driving change in politics, education, and environmental conservation. Hear their visions for Bhutan\'s future.',
        image: 'img9.jpg',
      },
      {
        id: 6,
        title: 'Sisterhood Sessions',
        subtitle: 'Shared experiences',
        description:
          'Daily evening circles for reflection, sharing, and connection. Build lasting friendships with fellow travelers and local women.',
        image: 'img11.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Travel with like-minded women in a supportive environment. Share experiences, build connections, and explore Bhutan at your own pace.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Join Our Sisterhood',
    },
  },
  8: {
    id: 8,
    slug: 'bhutan-soul-walk',
    title: 'Bhutan Soul Walk',
    subtitle: 'A gentle journey',
    category: 'WELLNESS TOUR',
    description:
      'Step into Bhutan\'s serene landscapes and sacred corners, where every path inspires reflection, every view awakens wonder, and your soul leaves footprints of tranquility.',
    image: {
      src: '/images/dummy/img6.jpg',
      alt: 'Bhutan Soul Walk',
    },
    isBestSelling: true,
    longDescription:
      'Walk gently through Bhutan\'s sacred landscapes on peaceful trails connecting monasteries, villages, and meditation sites. This soul-nourishing journey emphasizes mindful walking, meditation, and deep connection with nature.',
    tagline: 'WALK SLOWLY, SEE DEEPLY',
    fullImage: '/images/dummy/img6.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Meditation Walks',
        subtitle: 'Mindful movement',
        description:
          'Practice walking meditation on forest trails with experienced guides. Learn to find peace in motion and clarity in each step.',
        image: 'img7.jpg',
      },
      {
        id: 2,
        title: 'Sacred Sites',
        subtitle: 'Spiritual connection',
        description:
          'Visit hidden meditation caves and sacred springs. Receive blessings from high lamas and participate in private meditation sessions.',
        image: 'img8.jpg',
      },
      {
        id: 3,
        title: 'Nature Immersion',
        subtitle: 'Forest bathing',
        description:
          'Experience Bhutanese forest therapy in pristine blue pine forests. Connect with nature through all five senses in guided sessions.',
        image: 'img9.jpg',
      },
      {
        id: 4,
        title: 'Wellness Practices',
        subtitle: 'Traditional healing',
        description:
          'Learn Bhutanese wellness traditions including hot stone baths, herbal remedies, and energy balancing techniques.',
        image: 'img4.jpg',
      },
      {
        id: 5,
        title: 'Contemplative Photography',
        subtitle: 'Mindful seeing',
        description:
          'Combine gentle walks with contemplative photography practice. Learn to see the world with fresh eyes and capture moments mindfully.',
        image: 'img1.jpg',
      },
      {
        id: 6,
        title: 'Evening Reflection',
        subtitle: 'Inner journey',
        description:
          'Daily sunset sessions for journaling, guided reflection, and group sharing. Process your experiences and insights in a supportive environment.',
        image: 'img10.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Walk at your own pace with flexible daily itineraries. Rest when needed, walk when inspired, always supported by mindful guides.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Begin Your Soul Walk',
    },
  },
  9: {
    id: 9,
    slug: 'mysteries-of-gangkar-puensum',
    title: 'Mysteries of Gangkar Puensum',
    subtitle: 'Unclimbed peaks',
    category: 'ADVENTURE TOUR',
    description:
      'Venture where few have tread: mystical peaks, untouched valleys, and sacred secrets await in the shadow of Bhutan\'s enigmatic Gangkar Puensum.',
    image: {
      src: '/images/dummy/img7.jpg',
      alt: 'Mysteries of Gangkar Puensum',
    },
    isBestSelling: true,
    longDescription:
      'Explore the region surrounding the world\'s highest unclimbed mountain. Trek through remote valleys, encounter nomadic yak herders, and discover why this sacred peak remains untouched out of respect for local beliefs.',
    tagline: 'WHERE MOUNTAINS TOUCH THE SACRED',
    fullImage: '/images/dummy/img7.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Remote Valleys',
        subtitle: 'Untouched wilderness',
        description:
          'Trek through pristine valleys rarely visited by outsiders. Camp under star-filled skies with views of the mysterious unclimbed peak.',
        image: 'img1.jpg',
      },
      {
        id: 2,
        title: 'Nomadic Encounters',
        subtitle: 'High-altitude culture',
        description:
          'Meet yak herders in their seasonal camps. Learn about life at extreme altitudes and the traditional practices of mountain people.',
        image: 'img2.jpg',
      },
      {
        id: 3,
        title: 'Sacred Legends',
        subtitle: 'Mountain spirits',
        description:
          'Hear ancient stories of mountain deities and understand why some peaks remain unclimbed. Visit shrines where offerings are made to protect the mountains.',
        image: 'img3.jpg',
      },
      {
        id: 4,
        title: 'Alpine Expedition',
        subtitle: 'High camp experience',
        description:
          'Establish base camps at extreme altitudes. Learn mountaineering skills and acclimatization techniques from expert guides.',
        image: 'img6.jpg',
      },
      {
        id: 5,
        title: 'Flora and Fauna',
        subtitle: 'Rare ecosystems',
        description:
          'Discover unique high-altitude species found nowhere else. Photograph rare plants and possibly spot blue sheep on rocky slopes.',
        image: 'img9.jpg',
      },
      {
        id: 6,
        title: 'Cultural Immersion',
        subtitle: 'Mountain traditions',
        description:
          'Experience authentic mountain culture through homestays with herding families. Share butter tea and stories around the fire.',
        image: 'img11.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Choose your adventure level with various trek durations and difficulty levels, all exploring this mystical region with expert mountain guides.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Explore The Unknown',
    },
  },
  10: {
    id: 10,
    slug: 'tribal-ties-east-to-west',
    title: 'Tribal Ties: East to West',
    subtitle: 'Cultural diversity',
    category: 'CULTURAL TOUR',
    description:
      'Journey across Bhutan\'s diverse lands, meeting vibrant tribes, witnessing age-old rituals, and connecting deeply with traditions that span the kingdom\'s rich tapestry.',
    image: {
      src: '/images/dummy/img8.jpg',
      alt: 'Tribal Ties: East to West',
    },
    isBestSelling: true,
    longDescription:
      'Traverse Bhutan from east to west, experiencing the remarkable cultural diversity of its tribes and communities. Each region reveals unique languages, traditions, textiles, and ways of life preserved for centuries.',
    tagline: 'ONE KINGDOM, MANY STORIES',
    fullImage: '/images/dummy/img8.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Eastern Tribes',
        subtitle: 'Ancient traditions',
        description:
          'Visit the Brokpas and Merak-Sakteng communities. Experience their distinct semi-nomadic lifestyle, unique dress, and yak-based economy.',
        image: 'img4.jpg',
      },
      {
        id: 2,
        title: 'Central Valleys',
        subtitle: 'Cultural heartland',
        description:
          'Explore the cultural core where Dzongkha thrives. Witness traditional festivals and crafts that have flourished for generations.',
        image: 'img5.jpg',
      },
      {
        id: 3,
        title: 'Western Communities',
        subtitle: 'Living heritage',
        description:
          'Connect with communities preserving unique dialects and traditions. Participate in local ceremonies and learn traditional dances.',
        image: 'img6.jpg',
      },
      {
        id: 4,
        title: 'Language Learning',
        subtitle: 'Linguistic diversity',
        description:
          'Learn basic phrases in different regional languages. Understand how language reflects unique cultural identities across the kingdom.',
        image: 'img1.jpg',
      },
      {
        id: 5,
        title: 'Textile Traditions',
        subtitle: 'Weaving heritage',
        description:
          'Compare weaving techniques and patterns across regions. Each area has distinct textile styles reflecting local identity and history.',
        image: 'img8.jpg',
      },
      {
        id: 6,
        title: 'Festival Participation',
        subtitle: 'Regional celebrations',
        description:
          'Time your journey to experience different regional festivals. Compare how each community celebrates with unique dances, masks, and rituals.',
        image: 'img10.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Customize your cultural journey with extended stays in communities that interest you most, learning languages, crafts, and traditions.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Discover Cultural Riches',
    },
  },
  11: {
    id: 11,
    slug: 'druk-path-awakening',
    title: 'Druk Path Awakening',
    subtitle: 'Classic trek',
    category: 'TREKKING TOUR',
    description:
      'Awaken your senses on this iconic trek, where alpine lakes, misty valleys, and ancient monasteries invite awe, adventure, and spiritual reflection at every step.',
    image: {
      src: '/images/dummy/img9.jpg',
      alt: 'Druk Path Awakening',
    },
    isBestSelling: true,
    longDescription:
      'Embark on Bhutan\'s most celebrated trek. This 6-day journey connects Paro and Thimphu through high mountain passes, pristine lakes, and spectacular ridgeline trails offering panoramic Himalayan views.',
    tagline: 'WALK THE DRAGON\'S PATH',
    fullImage: '/images/dummy/img9.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Alpine Lakes',
        subtitle: 'Sacred waters',
        description:
          'Camp beside crystal-clear alpine lakes that reflect snow peaks. These sacred waters are believed to be blessed by protective deities.',
        image: 'img7.jpg',
      },
      {
        id: 2,
        title: 'Ridgeline Views',
        subtitle: 'Himalayan panorama',
        description:
          'Trek along dramatic ridgelines with 360-degree mountain views. On clear days, see Mount Everest and other Himalayan giants.',
        image: 'img8.jpg',
      },
      {
        id: 3,
        title: 'Mountain Monasteries',
        subtitle: 'Spiritual encounters',
        description:
          'Visit remote monasteries accessible only by foot. Receive blessings from mountain monks and witness ancient rituals.',
        image: 'img1.jpg',
      },
      {
        id: 4,
        title: 'Rhododendron Forests',
        subtitle: 'Blooming trails',
        description:
          'Trek through ancient rhododendron forests ablaze with color in spring. These magical forests feel straight out of a fairytale.',
        image: 'img3.jpg',
      },
      {
        id: 5,
        title: 'Yak Herder Camps',
        subtitle: 'High pasture life',
        description:
          'Visit seasonal yak herder camps along the trail. Learn about traditional cheese-making and the nomadic lifestyle.',
        image: 'img5.jpg',
      },
      {
        id: 6,
        title: 'Stargazing Nights',
        subtitle: 'Celestial beauty',
        description:
          'Experience pristine night skies at high altitude. Far from light pollution, the Milky Way stretches brilliantly overhead.',
        image: 'img9.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Trek with experienced guides and porters who handle all logistics. Focus on the journey while we manage camps, meals, and permits.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Start Your Trek',
    },
  },
  12: {
    id: 12,
    slug: 'silent-monks',
    title: 'Silent Monks',
    subtitle: 'Whisper, wonder, wander',
    category: 'SPIRITUAL TOUR',
    description:
      'Step into Bhutan\'s serene sanctuaries, where quiet moments, mindful rituals, and tranquil landscapes invite reflection, wonder, and a gentle escape from the everyday.',
    image: {
      src: '/images/slide.jpg',
      alt: 'Silent Monks',
    },
    isBestSelling: true,
    longDescription:
      'Immerse yourself in the contemplative world of Bhutanese monastic life. Spend time in meditation retreats, learn from silent monks, and discover the power of stillness in some of the world\'s most peaceful settings.',
    tagline: 'FIND PEACE IN SILENCE',
    fullImage: '/images/slide.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Monastery Retreats',
        subtitle: 'Silence and solitude',
        description:
          'Stay in traditional monasteries observing noble silence. Participate in early morning prayers and meditation sessions with monks.',
        image: 'img2.jpg',
      },
      {
        id: 2,
        title: 'Meditation Caves',
        subtitle: 'Ancient practice',
        description:
          'Visit sacred caves where great masters meditated for years. Practice meditation in these powerful spaces with guidance from experienced teachers.',
        image: 'img3.jpg',
      },
      {
        id: 3,
        title: 'Silent Walks',
        subtitle: 'Mindful movement',
        description:
          'Practice walking meditation through monastery gardens and forest trails. Experience the profound peace that comes from silent communion with nature.',
        image: 'img4.jpg',
      },
      {
        id: 4,
        title: 'Immersive Experiences',
        subtitle: 'Monastic life',
        description:
          'Experience daily routines of monastic life. Join monks for simple meals, chanting sessions, and periods of contemplative silence.',
        image: 'img6.jpg',
      },
      {
        id: 5,
        title: 'Education',
        subtitle: 'Buddhist teachings',
        description:
          'Attend dharma talks and Buddhist philosophy sessions. Learn meditation techniques from experienced teachers in intimate settings.',
        image: 'img8.jpg',
      },
      {
        id: 6,
        title: 'Conservation',
        subtitle: 'Environmental mindfulness',
        description:
          'Participate in monastery conservation projects. Help maintain sacred sites and learn about Buddhist approaches to environmental stewardship.',
        image: 'img11.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Choose your level of engagement with monastic life. Options range from observer to full participant in daily rituals and practices.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Enter The Silence',
    },
  },
  13: {
    id: 13,
    slug: 'family-legacy-tour',
    title: 'Family Legacy Tour',
    subtitle: 'Together, every step',
    category: 'FAMILY TOUR',
    description:
      'Forge unforgettable memories exploring Bhutan\'s culture, nature, and traditions together, crafting shared experiences that delight every generation in elegance and comfort.',
    image: {
      src: '/images/dummy/img10.jpg',
      alt: 'Family Legacy Tour',
    },
    isOther: true,
    longDescription:
      'Create lasting family memories on a journey designed for all ages. From gentle nature walks to interactive cultural experiences, every activity brings generations together while discovering Bhutan\'s wonders.',
    tagline: 'MEMORIES FOR ALL GENERATIONS',
    fullImage: '/images/dummy/img10.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Family Festivals',
        subtitle: 'Cultural celebrations',
        description:
          'Experience colorful festivals together. Kids love the masked dances while adults appreciate the cultural significance. Perfect photo opportunities for the family album.',
        image: 'img5.jpg',
      },
      {
        id: 2,
        title: 'Nature Adventures',
        subtitle: 'Outdoor fun',
        description:
          'Enjoy family-friendly hikes, picnics by mountain streams, and wildlife spotting. Age-appropriate activities ensure everyone stays engaged and excited.',
        image: 'img6.jpg',
      },
      {
        id: 3,
        title: 'Cultural Workshops',
        subtitle: 'Hands-on learning',
        description:
          'Learn archery, try your hand at painting, or make traditional paper together. Interactive workshops create shared achievements and lasting skills.',
        image: 'img7.jpg',
      },
      {
        id: 4,
        title: 'Family Homestays',
        subtitle: 'Local connections',
        description:
          'Stay with Bhutanese families and experience daily life. Kids make friends with local children while adults learn about traditions firsthand.',
        image: 'img2.jpg',
      },
      {
        id: 5,
        title: 'Temple Visits',
        subtitle: 'Spiritual discovery',
        description:
          'Explore magnificent dzongs and temples with guides who make history come alive for children. Spin prayer wheels and light butter lamps together.',
        image: 'img8.jpg',
      },
      {
        id: 6,
        title: 'Farmhouse Meals',
        subtitle: 'Culinary experiences',
        description:
          'Cook traditional dishes together at farmhouses. Kids love making momos while learning about Bhutanese cuisine and organic farming practices.',
        image: 'img11.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Flexible schedules accommodate different energy levels and interests. Rest time for little ones, adventure for teens, culture for adults.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Plan Your Family Journey',
    },
  },
  14: {
    id: 14,
    slug: 'curated-adventure',
    title: 'Curated Adventure',
    subtitle: 'Thrills, tailored just for you',
    category: 'ADVENTURE TOUR',
    description:
      'Tailored for the discerning thrill-seeker, this journey blends Bhutan\'s majestic landscapes, hidden trails, and exhilarating activities into a perfectly crafted adventure.',
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Curated Adventure',
    },
    isOther: true,
    longDescription:
      'Experience Bhutan\'s wild side with a custom adventure designed for thrill-seekers. Combine trekking, mountain biking, rafting, and rock climbing in an adrenaline-packed journey through stunning landscapes.',
    tagline: 'ADVENTURE ON YOUR TERMS',
    fullImage: '/images/dummy/img1.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Mountain Biking',
        subtitle: 'Downhill thrills',
        description:
          'Ride epic downhill trails from high passes to valley floors. Technical singletracks and flowing descents through pristine forests.',
        image: 'img8.jpg',
      },
      {
        id: 2,
        title: 'Rock Climbing',
        subtitle: 'Vertical challenges',
        description:
          'Scale Bhutan\'s granite cliffs with expert guides. Routes for all skill levels in spectacular settings with mountain vistas.',
        image: 'img9.jpg',
      },
      {
        id: 3,
        title: 'Multi-Sport Days',
        subtitle: 'Ultimate adventure',
        description:
          'Combine activities for maximum adrenaline: morning trek, afternoon bike ride, evening rafting. Every day brings new challenges.',
        image: 'img10.jpg',
      },
      {
        id: 4,
        title: 'Kayaking Expeditions',
        subtitle: 'Water adventures',
        description:
          'Paddle pristine rivers and hidden lakes. From gentle floats to technical rapids, explore Bhutan\'s waterways from a unique perspective.',
        image: 'img2.jpg',
      },
      {
        id: 5,
        title: 'Via Ferrata Routes',
        subtitle: 'Cliff walking',
        description:
          'Traverse dramatic cliff faces on protected via ferrata routes. Experience the thrill of exposed climbing with maximum safety.',
        image: 'img5.jpg',
      },
      {
        id: 6,
        title: 'Backcountry Camping',
        subtitle: 'Wilderness nights',
        description:
          'Camp in remote valleys accessible only by adventurous routes. Fall asleep to mountain silence under brilliant stars.',
        image: 'img7.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Build your perfect adventure mix. Choose activities, difficulty levels, and pace. Safety-first approach with expert guides and top equipment.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Craft Your Adventure',
    },
  },
  15: {
    id: 15,
    slug: 'sacred-symphony',
    title: 'Sacred Symphony',
    subtitle: 'Bhutan\'s heartbeat in harmony',
    category: 'CULTURAL TOUR',
    description:
      'Feel Bhutan\'s heartbeat through ritual, music, and heritage, where every moment resonates in harmony, crafting an unforgettable journey of culture, spirit, and discovery.',
    image: {
      src: '/images/dummy/img2.jpg',
      alt: 'Sacred Symphony',
    },
    isOther: true,
    longDescription:
      'Immerse yourself in Bhutan\'s living musical heritage. From monastic chants to folk songs, experience how music and ritual intertwine in daily life, festivals, and spiritual practice.',
    tagline: 'HEAR THE SOUL OF BHUTAN',
    fullImage: '/images/dummy/img2.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Monastic Music',
        subtitle: 'Sacred sounds',
        description:
          'Attend morning prayers where monks create powerful soundscapes with horns, drums, and chanting. Learn about the spiritual significance of sacred music.',
        image: 'img11.jpg',
      },
      {
        id: 2,
        title: 'Folk Traditions',
        subtitle: 'Village melodies',
        description:
          'Join villagers in traditional songs and dances. Learn the stories behind ancient melodies passed down through generations.',
        image: 'img1.jpg',
      },
      {
        id: 3,
        title: 'Festival Performances',
        subtitle: 'Cultural celebration',
        description:
          'Experience elaborate festival performances where music, dance, and drama tell sacred stories. VIP seating for the best views and photo opportunities.',
        image: 'img2.jpg',
      },
      {
        id: 4,
        title: 'Instrument Making',
        subtitle: 'Craft traditions',
        description:
          'Visit workshops where traditional instruments are handcrafted. Try making simple instruments and understand the artistry behind sacred sounds.',
        image: 'img6.jpg',
      },
      {
        id: 5,
        title: 'Music Workshops',
        subtitle: 'Learn to play',
        description:
          'Take lessons in traditional instruments like the dramyin or yangchen. Learn simple folk melodies you can take home.',
        image: 'img9.jpg',
      },
      {
        id: 6,
        title: 'Recording Sessions',
        subtitle: 'Preserve memories',
        description:
          'Document your journey with professional recordings of traditional performances. Create a unique musical souvenir of your Bhutan experience.',
        image: 'img4.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Explore Bhutan\'s musical heritage at your own rhythm. Optional workshops in traditional instruments and singing for the musically inclined.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Join The Symphony',
    },
  },
  16: {
    id: 16,
    slug: 'wildside-bhutan',
    title: 'Wildside Bhutan',
    subtitle: 'Go wild, go Bhutan',
    category: 'WILDLIFE TOUR',
    description:
      'Venture into Bhutan\'s untamed corners—remote valleys, pristine forests, and rare wildlife—where luxury meets the exhilaration of the kingdom\'s wild heart.',
    image: {
      src: '/images/dummy/img3.jpg',
      alt: 'Wildside Bhutan',
    },
    isOther: true,
    longDescription:
      'Explore Bhutan\'s incredible biodiversity in protected forests and remote valleys. Track rare species like takin, red pandas, and black-necked cranes with expert naturalists who know the best viewing spots.',
    tagline: 'WHERE WILD THINGS ROAM FREE',
    fullImage: '/images/dummy/img3.jpg',
    detailedSections: [
      {
        id: 1,
        title: 'Takin Sanctuary',
        subtitle: 'National animal',
        description:
          'Visit reserves protecting Bhutan\'s unique takin. Learn about conservation efforts for this bizarre and wonderful creature found nowhere else.',
        image: 'img3.jpg',
      },
      {
        id: 2,
        title: 'Red Panda Trails',
        subtitle: 'Forest dwellers',
        description:
          'Trek through bamboo forests searching for elusive red pandas. Dawn and dusk are best for spotting these adorable endangered animals.',
        image: 'img4.jpg',
      },
      {
        id: 3,
        title: 'Black-Necked Cranes',
        subtitle: 'Sacred birds',
        description:
          'Visit Phobjikha Valley in winter when endangered black-necked cranes migrate from Tibet. These sacred birds are celebrated in local festivals.',
        image: 'img5.jpg',
      },
      {
        id: 4,
        title: 'Birding Hotspots',
        subtitle: 'Avian diversity',
        description:
          'Explore prime birding locations with over 700 species recorded. Spot rare Himalayan monals, blood pheasants, and ward\'s trogons.',
        image: 'img7.jpg',
      },
      {
        id: 5,
        title: 'Tiger Territory',
        subtitle: 'Big cat conservation',
        description:
          'Visit tiger conservation zones and learn about Bhutan\'s success in protecting these apex predators. Camera trap footage shows thriving populations.',
        image: 'img9.jpg',
      },
      {
        id: 6,
        title: 'Photography Blinds',
        subtitle: 'Wildlife photography',
        description:
          'Use professional photography blinds for close wildlife encounters. Capture stunning images with guidance from expert wildlife photographers.',
        image: 'img11.jpg',
      },
    ],
    freedomSection: {
      title: 'Freedom and Independence',
      description:
        'Customize your wildlife journey based on seasons and species of interest. Professional naturalist guides maximize sighting opportunities.',
      backgroundImage: '/images/slide.jpg',
      cta: 'Discover Wild Bhutan',
    },
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
