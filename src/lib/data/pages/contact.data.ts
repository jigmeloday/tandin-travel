import { ContactPageData } from '@/lib/types';
import { MailOpen, MapPin, Phone } from 'lucide-react';

export const CONTACT_PAGE_DATA: ContactPageData = {
  hero: {
    title: 'Contact Us',
    backgroundImage: {
      src: '/images/dummy/img5.jpg',
      alt: 'Contact Us',
    },
  },

  form: {
    title: 'Start the Conversation',
    description:
      "Every remarkable journey begins with a simple hello — share your thoughts, dreams, or travel inspirations with us, and we'll gracefully guide you forward, transforming your vision into an unforgettable journey woven with meaning, beauty, and lasting memories.",
    image: {
      src: '/images/dummy/img1.jpg',
      alt: 'Contact Form',
    },
  },

  contactInfo: [
    {
      title: 'Head Office',
      description: 'Every great journey begins with a simple hello.',
      icon: MapPin,
      value: undefined, // Add actual address when available
    },
    {
      title: 'Email Address',
      description: 'Every great journey begins with a simple hello.',
      icon: MailOpen,
      value: undefined, // Add actual email when available
    },
    {
      title: 'Phone Call',
      description: 'Every great journey begins with a simple hello.',
      icon: Phone,
      value: undefined, // Add actual phone when available
    },
  ],
};
