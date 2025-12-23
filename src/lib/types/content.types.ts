import { LucideIcon } from 'lucide-react';

// Base types
export interface ImageReference {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface HeroSection {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: ImageReference;
  cta?: CTAButton;
}

export interface ContentSection {
  id?: string;
  title?: string;
  subtitle?: string;
  description: string;
  tagline?: string;
  image?: ImageReference;
  cta?: CTAButton;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PackageCard {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  image: ImageReference;
  featured?: boolean;
  isBestSelling?: boolean;
  isOther?: boolean;
  pricing?: {
    from: number;
    currency: string;
    perPerson: boolean;
    basedOn?: string;
  };
  duration?: {
    nights: number;
    days?: number;
  };
  season?: string[];
  // Package detail page fields
  longDescription?: string;
  tagline?: string;
  fullImage?: string;
  detailedSections?: Array<{
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }>;
  freedomSection?: {
    title: string;
    description: string;
    backgroundImage: string;
    cta: string;
  };
}

export interface TourType {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: ImageReference;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: ImageReference;
}

export interface ContactInfo {
  title: string;
  description: string;
  icon: LucideIcon;
  value?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
  image?: ImageReference;
  source?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  image: ImageReference;
  category?: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  image: string;
  overlayOpacity?: number;
  subtitle?: string;
  description?: string;
  cta?: string;
}

export interface OtherPackage {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TrekInfo {
  bestSeason: string;
  altitude: {
    high: string;
    low: string;
  };
  duration: string;
  grade: string;
}

export interface Trek {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: ImageReference;
  info: TrekInfo;
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    activities?: string[];
    accommodation?: string;
    meals?: string[];
  }>;
  essentialInfo: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export interface FlagshipTour {
  id: number;
  slug: string;
  packageId: number;
  title: string;
  subtitle?: string;
  description: string;
  hero: {
    images: string[];
  };
  info: {
    when: string;
    price: string;
    duration: string;
  };
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    activities?: string[];
    accommodation?: string;
    meals?: string[];
  }>;
  included?: string[];
  excluded?: string[];
  culturalConnections: Array<{
    id: number;
    image: string;
    title: string;
    tagline: string;
    description: string;
  }>;
}
