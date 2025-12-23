import { AboutPageData } from '@/lib/types';
import { Search, Headphones, Mail, Plane } from 'lucide-react';

export const ABOUT_PAGE_DATA: AboutPageData = {
  hero: {
    title: 'About Us',
    backgroundImage: {
      src: '/images/dummy/img5.jpg',
      alt: 'About Us',
    },
  },

  introduction: {
    title: 'Genuinely next-level travel & events',
    paragraphs: [
      'We deliver truly next-level travel experiences, from discovering unknown Roman shipwrecks and a new species of orca as part of family yacht trips to organising epic celebrations in bespoke luxury camps and thought leadership events focused on transformative wellness.',
      'Founded by polar explorer Henry Cookson, we apply the same standards of expedition excellence and innovation that saw him break Antarctic world records to every trip we deliver. Everything is hyper-personalised to you, built from the ground up by our team of in-house experts and their network of global experts, from regional authorities and leading scientists to international DJs.',
      'We only work on a small volume of projects each year, which means we can dedicate unrivalled attention and resources to every trip.',
    ],
  },

  testimonialSection: {
    title: 'We create stories that are talked about',
    testimonialIds: [1, 2],
  },

  founder: {
    name: 'Founder Name',
    role: 'Founder & Chairman',
    bio: [
      'After a past life guiding horseback safaris in Kenya, Henry\'s start in polar exploration began in 2005, winning the Polar Challenge race to the Magnetic North Pole.',
      'Since then, he\'s set a world record as part of the very first team to reach the South Pole of Inaccessibility without mechanical means and gone on to guide the Walking With The Wounded charity expedition to the North Pole with HRH Prince Harry.',
      'It\'s these expeditions that served as inspiration in founding Cookson Adventures, bringing the same standards of ground-breaking excellence to the world of private travel. That\'s whether working with remote tribes in Africa or organising Alaska\'s most complex charter operations.',
    ],
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Founder Profile',
    },
  },

  team: {
    title: 'A few of the team',
    subtitle:
      'Our in-house experts build all of our adventures from the ground up, drawing on a global network of contacts – from biologists and conservationists to archaeologists.',
    members: [
      {
        id: 1,
        name: 'Alexandra Thompson',
        role: 'Senior Travel Curator',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
      {
        id: 2,
        name: 'James Mitchell',
        role: 'Expedition Specialist',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
      {
        id: 3,
        name: 'Sophia Chen',
        role: 'Cultural Liaison',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
      {
        id: 4,
        name: 'Oliver Reed',
        role: 'Luxury Accommodations',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
      {
        id: 5,
        name: 'Emma Patel',
        role: 'Sustainability Director',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
      {
        id: 6,
        name: 'Marcus Williams',
        role: 'Photography Guide',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        image: {
          src: '/images/dummy/img1.jpg',
          alt: 'Team Member',
        },
      },
    ],
  },

  process: {
    title: 'How it works',
    steps: [
      {
        id: 1,
        title: 'Enquiry',
        description:
          'From global event planners to submersible specialists, our in-house team of experts make authoritative recommendations and facilitate your interests from the first conversation.',
        icon: Search,
      },
      {
        id: 2,
        title: 'Planning stage',
        description:
          'After identifying a project together, an initial deposit lets us mobilise the resources for a dedicated project manager and the consultation of world-leading authorities to conceptualise your perfect trip with you.',
        icon: Headphones,
      },
      {
        id: 3,
        title: 'Recce and detailing',
        description:
          'Dance floors in the African bush, desert-island access and world-first wildlife encounters – on-the-ground recces and the engagement of global or local bodies let us fine-tune truly unique experiences, all tailored to you.',
        icon: Mail,
      },
      {
        id: 4,
        title: 'On-trip',
        description:
          'Backed by our full support team in London, on-the-ground experts and specialist guides will guarantee the seamless delivery of your project, able to adapt on the fly to your preferences.',
        icon: Plane,
      },
    ],
  },

  video: {
    title: 'Footage shot entirely on our adventures',
    url: 'https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=0&mute=0&rel=0',
  },

  cta: {
    title: 'Contact our expert team today and see where it takes you.',
    linkText: 'BEGIN YOUR ADVENTURE',
    href: '/',
  },

  letsTalk: {
    image: '/images/dummy/img1.jpg',
    description:
      "We love challenges big and small—what's yours? Let's craft unique journeys that turn bold ideas into unforgettable travel experiences.",
  },
};
