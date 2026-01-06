// Component Types
export interface HeroSlide {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: any;
  overlay_opacity?: number;
  cta_text?: string;
  cta_href?: string;
}

export interface ProcessStep {
  step_number: number;
  title: string;
  description: string;
  icon_name?: string;
}

export interface GridCard {
  title: string;
  subtitle?: string;
  description: string;
  image: any;
  link?: string;
}

export interface BlogCard {
  title: string;
  image: any;
}

export interface SliderSlide {
  id: number;
  title: string;
  description: string;
  image: any;
}

export interface CuratedSection {
  title: string;
  image: any;
  link: string;
}

export interface ContactInfoCard {
  title: string;
  description: string;
  icon_name: string;
}

export interface MenuItem {
  label: string;
  url: string;
}

export interface TourCard {
  title: string;
  subtitle?: string;
  image: any;
  link: string;
}

export interface DetailedSection {
  title: string;
  subtitle?: string;
  description: string;
  image: any;
}

export interface FreedomSection {
  title: string;
  description: string;
  background_image: any;
  cta_text?: string;
}

export interface CulturalHighlight {
  title: string;
  description: string;
  tagline?: string;
  image: any;
}

export interface EssentialInfo {
  title: string;
  description: string;
}

export interface AlternatingSection {
  title: string;
  description: string;
  tagline?: string;
  image: any;
}

export interface EssentialInfoSection {
  section_type: 'image' | 'text';
  content?: string;
  title?: string;
  description?: string;
  tagline_1?: string;
  tagline_2?: string;
}

export interface RecurringSection {
  section_key: string;
  title: string;
  description: string;
  image: any;
  cta_text?: string;
  cta_href?: string;
}

// Collection Types
export interface Package {
  id: number;
  title: string;
  slug: string;
  subtitle?: string;
  category: string;
  description: string;
  image: any;
  long_description?: string;
  tagline?: string;
  full_image?: any;
  detailed_sections?: DetailedSection[];
  freedom_section?: FreedomSection;
  is_best_selling?: boolean;
  is_flagship?: boolean;
  is_other?: boolean;
}

export interface FlagshipTour {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  hero_images?: any;
  info_when?: string;
  info_price?: string;
  info_duration?: string;
  cultural_highlights?: CulturalHighlight[];
  cultural_connections?: CulturalHighlight[];
}

export interface Trek {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: any;
  best_season?: string;
  altitude_high?: string;
  altitude_low?: string;
  duration?: string;
  grade?: string;
  essential_info?: EssentialInfo[];
}

export interface TeamMember {
  id: number;
  full_name: string;
  position: string;
  bio: string;
  image: any;
  display_order: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
  image?: any;
  source?: string;
  display_order: number;
}

// Single Types (Strapi v5 format - relations are direct arrays, not wrapped in data)
export interface HomePage {
  hero_slides?: HeroSlide[];
  introduction_title?: string;
  introduction_description?: string;
  introduction_tagline?: string;
  tour_types?: TourCard[];
  flagship_title?: string;
  flagship_packages?: Package[];
  process_title?: string;
  process_description?: string;
  process_cta_text?: string;
  process_cta_href?: string;
  process_steps?: ProcessStep[];
  primary_package?: Package;
  grid_packages?: Package[];
  parallax_title?: string;
  parallax_description?: string;
  parallax_background_image?: any;
  promise_title?: string;
  promise_description?: string;
  image_box_packages?: Package[];
  travel_purpose_title?: string;
  travel_purpose_description?: string;
  travel_purpose_image?: any;
  travel_purpose_cta_text?: string;
  travel_purpose_cta_href?: string;
  blog_title?: string;
  blog_subtitle?: string;
  blog_posts?: BlogCard[];
  slider_slides?: SliderSlide[];
  curated_sections?: CuratedSection[];
}

export interface AboutPage {
  hero_title?: string;
  hero_background_image?: any;
  intro_title?: string;
  intro_paragraphs?: string;
  testimonial_title?: string;
  testimonials?: Testimonial[];
  founder_name?: string;
  founder_role?: string;
  founder_bio?: string;
  founder_image?: any;
  team_title?: string;
  team_subtitle?: string;
  team_members?: TeamMember[];
  process_title?: string;
  process_steps?: ProcessStep[];
  video_title?: string;
  video_url?: string;
  cta_title?: string;
  cta_link_text?: string;
  cta_link_href?: string;
}

export interface ContactPage {
  hero_title?: string;
  hero_background_image?: any;
  form_title?: string;
  form_description?: string;
  form_image?: any;
  contact_info?: ContactInfoCard[];
}

export interface BespokeJourneyPage {
  hero_title?: string;
  hero_subtitle?: string;
  hero_background_image?: any;
  packages?: Package[];
  grid_cards?: GridCard[];
  parallax_background_image?: any;
  travel_purpose_title?: string;
  travel_purpose_description?: string;
  travel_purpose_image?: any;
  travel_purpose_cta_text?: string;
  travel_purpose_cta_href?: string;
  related_title?: string;
  related_tagline?: string;
  related_description?: string;
  related_packages?: Package[];
}

export interface ExquisiteStaysPage {
  hero_title?: string;
  hero_subtitle?: string;
  hero_background_image?: any;
  square_images?: any;
  horizontal_title?: string;
  horizontal_description?: string;
  horizontal_tagline?: string;
  horizontal_images?: any;
  luxury_title?: string;
  luxury_description?: string;
  luxury_tagline?: string;
  luxury_images?: any;
  parallax_background_image?: any;
  nature_title?: string;
  nature_description?: string;
  nature_tagline?: string;
  image_box_packages?: Package[];
  flagship_title?: string;
  flagship_packages?: Package[];
}

export interface CultureWellnessPage {
  hero_title?: string;
  hero_background_image?: any;
  from_above_title?: string;
  from_above_description?: string;
  from_above_tagline?: string;
  grid_title?: string;
  grid_cards?: GridCard[];
  hero_images_title?: string;
  hero_images_description?: string;
  hero_images_tagline?: string;
  hero_images?: any;
  parallax_background_image?: any;
  signature_title?: string;
  signature_description?: string;
  signature_tours?: TourCard[];
  freedom_title?: string;
  freedom_description?: string;
  freedom_background_image?: any;
  freedom_cta_text?: string;
}

export interface TravelPurposePage {
  hero_background_image?: any;
  main_title?: string;
  main_description?: string;
  main_subtitle?: string;
  alternating_sections?: AlternatingSection[];
  movement_title?: string;
  movement_tagline?: string;
  movement_items?: string;
}

export interface CuratedBirdingPage {
  hero_title?: string;
  hero_background_image?: any;
  main_title?: string;
  main_subtitle?: string;
  main_cta_text?: string;
  grid_boxes?: GridCard[];
  getaways_title?: string;
  getaways_description?: string;
  treks?: Trek[];
  travel_purpose_title?: string;
  travel_purpose_description?: string;
  travel_purpose_image?: any;
  travel_purpose_cta_text?: string;
  travel_purpose_cta_href?: string;
}

export interface BirdingDetailPage {
  hero_title?: string;
  hero_subtitle?: string;
  hero_background_image?: any;
  main_title?: string;
  main_description?: string;
  essential_info?: EssentialInfoSection[];
  parallax_background_image?: any;
  travel_purpose_title?: string;
  travel_purpose_description?: string;
  travel_purpose_image?: any;
  travel_purpose_cta_text?: string;
  travel_purpose_cta_href?: string;
  next_level_title?: string;
  next_level_description?: string;
  next_level_items?: GridCard[];
}

export interface SiteSettings {
  company_name?: string;
  logo?: any;
  recurring_sections?: RecurringSection[];
}
