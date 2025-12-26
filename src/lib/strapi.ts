const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

interface StrapiAttributes {
  [key: string]: any;
}

interface StrapiData<T = StrapiAttributes> {
  id: number;
  attributes: T;
}

// Helper to get image URL from Strapi media
export function getStrapiMedia(media: any): string | null {
  if (!media?.data) return null;

  const imageUrl = media.data.attributes?.url;
  if (!imageUrl) return null;

  // If URL is already absolute, return it
  if (imageUrl.startsWith('http')) return imageUrl;

  // Otherwise, prepend Strapi URL
  return `${STRAPI_URL}${imageUrl}`;
}

// Helper to get multiple image URLs
export function getStrapiMediaArray(media: any): string[] {
  if (!media?.data || !Array.isArray(media.data)) return [];

  return media.data
    .map((item: any) => {
      const url = item.attributes?.url;
      if (!url) return null;
      return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
    })
    .filter(Boolean) as string[];
}

// Generic fetch function for Strapi with Next.js caching
export async function fetchStrapi<T = any>(
  path: string,
  params?: Record<string, any>,
  options?: RequestInit & { cache?: RequestCache; revalidate?: number }
): Promise<T> {
  const queryString = params
    ? '?' + new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
          if (value !== undefined && value !== null) {
            acc[key] = String(value);
          }
          return acc;
        }, {} as Record<string, string>)
      ).toString()
    : '';

  const url = `${STRAPI_URL}/api${path}${queryString}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      // Default to force-cache for static generation, can be overridden
      cache: options?.cache || 'force-cache',
      // Optional revalidation period (ISR)
      next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
    });

    if (!response.ok) {
      throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from Strapi (${url}):`, error);
    throw error;
  }
}

// Fetch single type with deep population support
export async function fetchSingleType<T = any>(
  contentType: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    const params: Record<string, any> = {};

    if (populate) {
      // Support for deep population using 'deep' keyword
      if (populate === 'deep') {
        params.populate = 'deep';
      }
      // Support for custom populate object
      else if (typeof populate === 'object' && !Array.isArray(populate)) {
        Object.entries(populate).forEach(([key, value]) => {
          params[`populate[${key}]`] = value;
        });
      }
      // Legacy support for array/string (though not recommended for deep population)
      else {
        params.populate = Array.isArray(populate) ? populate.join(',') : populate;
      }
    }

    const response = await fetchStrapi<StrapiResponse<T>>(
      `/${contentType}`,
      params
    );

    // Strapi v5 returns data directly, not in attributes
    return response.data || null;
  } catch (error) {
    console.error(`Error fetching single type ${contentType}:`, error);
    return null;
  }
}

// Fetch collection type (multiple entries) with deep population support
export async function fetchCollection<T = any>(
  contentType: string,
  options?: {
    filters?: Record<string, any>;
    populate?: string | string[] | Record<string, any>;
    sort?: string | string[];
    pagination?: {
      page?: number;
      pageSize?: number;
    };
  }
): Promise<T[]> {
  try {
    const params: Record<string, any> = {};

    if (options?.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        params[`filters[${key}][$eq]`] = value;
      });
    }

    if (options?.populate) {
      // Support for deep population using 'deep' keyword
      if (options.populate === 'deep') {
        params.populate = 'deep';
      }
      // Support for custom populate object
      else if (typeof options.populate === 'object' && !Array.isArray(options.populate)) {
        Object.entries(options.populate).forEach(([key, value]) => {
          params[`populate[${key}]`] = value;
        });
      }
      // Legacy support for array/string
      else {
        params.populate = Array.isArray(options.populate)
          ? options.populate.join(',')
          : options.populate;
      }
    }

    if (options?.sort) {
      params.sort = Array.isArray(options.sort)
        ? options.sort.join(',')
        : options.sort;
    }

    if (options?.pagination) {
      if (options.pagination.page) params['pagination[page]'] = options.pagination.page;
      if (options.pagination.pageSize) params['pagination[pageSize]'] = options.pagination.pageSize;
    }

    const response = await fetchStrapi<StrapiResponse<T[]>>(
      `/${contentType}`,
      params
    );

    // Strapi v5 returns data directly, not in attributes
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching collection ${contentType}:`, error);
    return [];
  }
}

// Fetch single entry by slug with deep population support
export async function fetchBySlug<T = any>(
  contentType: string,
  slug: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    const params: Record<string, any> = {
      'filters[slug][$eq]': slug,
    };

    if (populate) {
      // Support for deep population using 'deep' keyword
      if (populate === 'deep') {
        params.populate = 'deep';
      }
      // Support for custom populate object
      else if (typeof populate === 'object' && !Array.isArray(populate)) {
        Object.entries(populate).forEach(([key, value]) => {
          params[`populate[${key}]`] = value;
        });
      }
      // Legacy support for array/string
      else {
        params.populate = Array.isArray(populate) ? populate.join(',') : populate;
      }
    }

    const response = await fetchStrapi<StrapiResponse<T[]>>(
      `/${contentType}`,
      params
    );

    // Strapi v5 returns data directly, not in attributes
    return response.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching ${contentType} by slug ${slug}:`, error);
    return null;
  }
}

// Fetch all slugs for a collection (for static generation)
export async function fetchAllSlugs(contentType: string): Promise<string[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<{ slug: string }[]>>(
      `/${contentType}`,
      { fields: 'slug' }
    );

    // Strapi v5 returns data directly, not in attributes
    return response.data?.map((item) => item.slug).filter(Boolean) || [];
  } catch (error) {
    console.error(`Error fetching slugs for ${contentType}:`, error);
    return [];
  }
}

// Helper function to fetch site settings
export async function fetchSiteSettings() {
  return fetchSingleType('site-settings', '*');
}

// Helper function to fetch all pages with deep population
export const fetchPages = {
  home: () => fetchSingleType('home-page', '*'),
  about: () => fetchSingleType('about-page', '*'),
  contact: () => fetchSingleType('contact-page', '*'),
  bespokeJourney: () => fetchSingleType('bespoke-journey-page', '*'),
  exquisiteStays: () => fetchSingleType('exquisite-stays-page', '*'),
  cultureWellness: () => fetchSingleType('culture-wellness-page', '*'),
  travelPurpose: () => fetchSingleType('travel-purpose-page', '*'),
  curatedBirding: () => fetchSingleType('curated-birding-page', '*'),
  birdingDetail: () => fetchSingleType('birding-detail-page', '*'),
};

// Helper function to fetch packages by type
export const fetchPackages = {
  all: () => fetchCollection('package', { populate: '*' }),
  bestSelling: () => fetchCollection('package', {
    filters: { is_best_selling: true },
    populate: '*'
  }),
  flagship: () => fetchCollection('package', {
    filters: { is_flagship: true },
    populate: '*'
  }),
  other: () => fetchCollection('package', {
    filters: { is_other: true },
    populate: '*'
  }),
  bySlug: (slug: string) => fetchBySlug('package', slug, '*'),
};

// Helper function to fetch treks
export const fetchTreks = {
  all: () => fetchCollection('trek', { populate: '*' }),
  bySlug: (slug: string) => fetchBySlug('trek', slug, '*'),
};

// Helper function to fetch team members
export async function fetchTeamMembers() {
  return fetchCollection('team-member', {
    populate: '*',
    sort: 'display_order:asc'
  });
}

// Helper function to fetch testimonials
export async function fetchTestimonials() {
  return fetchCollection('testimonial', {
    populate: '*',
    sort: 'display_order:asc'
  });
}
