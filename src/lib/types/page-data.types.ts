import {
  HeroSection,
  ContentSection,
  ProcessStep,
  CTAButton,
  BlogPost,
  TeamMember,
  ContactInfo,
  HeroSlide,
} from './content.types';

export interface HomePageData {
  hero: {
    slides: HeroSlide[];
  };
  introduction: {
    title: string;
    description: string;
    tagline: string;
  };
  tourTypes: number[]; // IDs referencing TOUR_TYPES
  flagshipSection: {
    title: string;
    packageIds: number[]; // Package IDs for best-selling
  };
  processSection: {
    title: string;
    description: string;
    steps: ProcessStep[];
    cta: CTAButton;
  };
  featuredPackages: {
    primary: number; // Package ID for "Silent Monks"
    grid: number[]; // Package IDs for grid layout
  };
  parallaxSection: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  promiseSection: {
    title: string;
    description: string;
  };
  imageBoxPackageIds: number[]; // IDs from packages (non-best_sell, non-other)
  travelWithPurpose: ContentSection;
  blogSection: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
  curatedBirding: ContentSection;
  letsTalk: {
    image: string;
    description: string;
  };
  sliderSection: {
    slides: HeroSlide[];
  };
}

export interface AboutPageData {
  hero: HeroSection;
  introduction: {
    title: string;
    paragraphs: string[];
  };
  testimonialSection: {
    title: string;
    testimonialIds: number[];
  };
  founder: {
    name: string;
    role: string;
    bio: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  video: {
    title: string;
    url: string;
  };
  cta: {
    title: string;
    linkText: string;
    href: string;
  };
  letsTalk: {
    image: string;
    description: string;
  };
}

export interface ContactPageData {
  hero: HeroSection;
  form: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  contactInfo: ContactInfo[];
}

export interface BespokeJourneyPageData {
  hero: HeroSection;
  packages: number[]; // Package IDs
  gridCards: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
  parallax: {
    backgroundImage: string;
  };
  travelWithPurpose: ContentSection;
  relatedAdventures: {
    title: string;
    tagline: string;
    description: string;
    packageIds: number[];
  };
  letsTalk: {
    image: string;
    description: string;
  };
}

export interface CultureWellnessPageData {
  hero: HeroSection;
  bhutanFromAbove: {
    title: string;
    description: string;
    tagline: string;
  };
  gridCards: Array<{
    id: number;
    title: string;
    subtitle: string;
    image: string;
  }>;
  heroImages: string[];
  parallax: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  signatureTours: {
    title: string;
    packageIds: number[];
  };
  freedomSection: {
    title: string;
    description: string;
    backgroundImage: string;
    images: string[];
    cta: CTAButton;
  };
  letsTalk: {
    image: string;
    description: string;
  };
}

export interface ExquisiteStaysPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  imageGrid: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  horizontalSection: {
    images: string[];
    title: string;
    tagline: string;
    description: string;
  };
  luxuryExperience: {
    images: string[];
    description: string;
  };
  imageBoxPackageIds: number[];
  flagshipPackageIds: number[];
  letsTalk: {
    image: string;
    description: string;
  };
}

export interface TravelPurposePageData {
  hero: HeroSection;
  mainSection: {
    title: string;
    description: string;
    subtitle?: string;
  };
  alternatingContent: Array<{
    id: number;
    image: string;
    title: string;
    tagline: string;
    description?: string;
  }>;
  movementSection: {
    title: string;
    items: string[];
    tagline: string;
  };
}

export interface CuratedBirdingPageData {
  hero: {
    title: string;
    backgroundImage: string;
  };
  mainContent: {
    title: string;
    subtitle: string;
    ctaText?: string;
  };
  gridBoxes: Array<{
    id: number;
    title: string;
    description: string;
    image?: string;
  }>;
  getaways: {
    title: string;
    trekIds: number[];
    description?: string;
  };
  travelWithPurpose: ContentSection;
  letsTalk: {
    image: string;
    description: string;
  };
}

export interface BirdingPageData {
  hero: HeroSection;
  mainContent: {
    title: string;
    description: string;
  };
  essentialInfo: {
    sections: Array<{
      id: number;
      type: 'image' | 'text';
      content: string;
      title?: string;
      description?: string;
      tagline1?: string;
      tagline2?: string;
    }>;
  };
  packingList: {
    items: Array<{
      id: number;
      title: string;
      description: string;
    }>;
  };
  parallax: {
    backgroundImage: string;
  };
  travelWithPurpose: ContentSection;
  nextLevelBirding: {
    title: string;
    description?: string;
    items: Array<{
      id: number;
      title: string;
      description: string;
      image?: string;
    }>;
  };
  letsTalk: {
    image: string;
    description: string;
  };
}
