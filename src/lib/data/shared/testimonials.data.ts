import { Testimonial } from '@/lib/types';

export const TESTIMONIALS: Record<number, Testimonial> = {
  1: {
    id: 1,
    quote:
      'An extraordinary journey that exceeded all expectations. The attention to detail and deep cultural immersion made this trip truly unforgettable.',
    author: 'Robb Report',
    role: 'Travel Magazine',
    source: 'Robb Report',
  },
  2: {
    id: 2,
    quote:
      'The perfect blend of luxury and authentic cultural experience. Every moment was thoughtfully curated, from private monastery visits to exquisite accommodations.',
    author: 'Forbes Travel',
    role: 'Luxury Travel',
    source: 'Forbes',
  },
};

export const getTestimonialById = (id: number): Testimonial | undefined => {
  return TESTIMONIALS[id];
};

export const getAllTestimonials = (): Testimonial[] => {
  return Object.values(TESTIMONIALS);
};
