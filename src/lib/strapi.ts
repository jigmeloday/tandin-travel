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
  if (!media) return null;

  // Handle Strapi v4/v5 wrapped structure
  if (media.data) {
    const item = Array.isArray(media.data) ? media.data[0] : media.data;
    if (!item) return null;

    const url = item.attributes?.url || item.url;
    if (!url) return null;
    
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
  }

  // Handle Strapi v5 flat structure
  if (media.url) {
    return media.url.startsWith('http') ? media.url : `${STRAPI_URL}${media.url}`;
  }

  return null;
}

// Helper to get multiple image URLs
export function getStrapiMediaArray(media: any): string[] {
  if (!media) return [];

  // Handle Strapi v4/v5 wrapped structure vs flat array
  const data = Array.isArray(media) ? media : (media.data || []);

  if (!Array.isArray(data)) return [];

  return data
    .map((item: any) => {
      const url = item.attributes?.url || item.url;
      if (!url) return null;
      return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
    })
    .filter(Boolean) as string[];
}

// Helper to flatten Strapi v4 response (remove attributes wrapper)
function flattenStrapiResponse(data: any): any {
  if (!data) return null;

  if (Array.isArray(data)) {
    return data.map(flattenStrapiResponse);
  }

  let flattened = data;

  if (data.attributes) {
    flattened = {
      id: data.id,
      ...data.attributes,
    };
  }

  // Recursively flatten all properties
  for (const key in flattened) {
    if (flattened[key] !== null && typeof flattened[key] === 'object') {
      // Handle the data wrapper inside relations
      if (flattened[key].data !== undefined) {
        flattened[key] = flattenStrapiResponse(flattened[key].data);
      } else {
        flattened[key] = flattenStrapiResponse(flattened[key]);
      }
    }
  }

  return flattened;
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
    (headers as any)['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
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

// Helper to get specific populate params for each content type
function getPopulateForType(type: string) {
  const commonBgImages = {
    'populate[parallax_background_image]': 'true',
    'populate[travel_purpose_image]': 'true',
  };

  const heroBgHelper = {
      'populate[hero_background_image]': 'true',
  };

  switch (type) {
    case 'home-page':
      return {
        ...commonBgImages,
        'populate[hero_slides][populate]': '*',
        'populate[tour_types][populate]': '*',
        'populate[flagship_packages][populate]': '*',
        'populate[process_steps]': '*',
        'populate[primary_package][populate]': '*',
        'populate[grid_packages][populate]': '*',
        'populate[image_box_packages][populate]': '*',
        'populate[blog_posts][populate]': '*',
        'populate[slider_slides][populate]': '*',
        'populate[curated_sections][populate]': '*',
      };
    case 'about-page':
      return {
        ...heroBgHelper,
        'populate[testimonials][populate]': '*',
        'populate[founder_image]': 'true',
        'populate[team_members][populate]': '*',
        'populate[process_steps]': '*',
      };
    case 'contact-page':
      return {
        ...heroBgHelper,
        'populate[form_image]': 'true',
        'populate[contact_info]': '*',
      };
    case 'bespoke-journey-page':
      return {
        ...heroBgHelper,
        ...commonBgImages, // Has parallax and travel_purpose
        'populate[packages][populate]': '*',
        'populate[grid_cards][populate]': '*',
        'populate[related_packages][populate]': '*',
      };
    case 'exquisite-stays-page':
      return {
        ...heroBgHelper,
        'populate[parallax_background_image]': 'true',
        'populate[square_images]': 'true',
        'populate[horizontal_images]': 'true',
        'populate[luxury_images]': 'true',
        'populate[image_box_packages][populate]': '*',
        'populate[flagship_packages][populate]': '*',
      };
    case 'culture-wellness-page':
      return {
        ...heroBgHelper,
        'populate[parallax_background_image]': 'true',
        'populate[grid_cards][populate]': '*',
        'populate[hero_images]': 'true',
        'populate[signature_tours][populate]': '*',
        'populate[freedom_background_image]': 'true',
      };
    case 'travel-purpose-page':
      return {
        ...heroBgHelper, // Check schema
        'populate[alternating_sections][populate]': '*',
      };
    case 'curated-birding-page':
      return {
        ...heroBgHelper,
        'populate[travel_purpose_image]': 'true',
        'populate[grid_boxes][populate]': '*',
        'populate[treks][populate]': '*',
      };
    case 'birding-detail-page':
      return {
        ...heroBgHelper,
        ...commonBgImages,
        'populate[essential_info]': '*',
        'populate[next_level_items][populate]': '*',
      };
    case 'site-settings':
      return {
        'populate[logo]': 'true',
        'populate[recurring_sections][populate]': '*',
      };
    case 'package':
    case 'packages':
    case 'trek':
    case 'treks':
    case 'team-member':
    case 'team-members':
    case 'testimonial':
    case 'testimonials':
    case 'flagship-tour':
    case 'flagship-tours':
      // For collection types, we generally want everything
      return {
        'populate[image]': 'true',
        'populate[full_image]': 'true',
        'populate[detailed_sections][populate]': '*',
        'populate[freedom_section][populate]': '*',
        'populate[hero_images]': 'true',
        'populate[cultural_highlights][populate]': '*',
        'populate[essential_info]': '*',
        'populate[cultural_connections][populate]': '*',
      };
    default:
      console.warn(`No specific populate map for type: ${type}, returning empty.`);
      return {};
  }
}

// Fetch single type with deep population support (Strapi v5)
export async function fetchSingleType<T = any>(
  contentType: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    let params: Record<string, any> = {};

    if (populate) {
      // For Strapi v5 deep population, use special helper
      if (populate === '*' || populate === 'deep') {
        params = getPopulateForType(contentType);
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

    const response = await fetchStrapi<StrapiResponse<T>>(
      `/${contentType}`,
      params
    );

    // Strapi v5 returns data directly, not in attributes
    // But we are using v4, so we flatten it to maintain v5-style frontend code
    return response.data ? flattenStrapiResponse(response.data) : null;
  } catch (error) {
    console.error(`Error fetching single type ${contentType}:`, error);
    return null;
  }
}

// Fetch collection type (multiple entries) with deep population support (Strapi v5)
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
    let params: Record<string, any> = {};

    if (options?.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        params[`filters[${key}][$eq]`] = value;
      });
    }

    if (options?.populate) {
      // For Strapi v5 deep population
      if (options.populate === '*' || options.populate === 'deep') {
        // Populate all fields based on content type
        params = { ...params, ...getPopulateForType(contentType) };
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
    // But we are using v4, so we flatten it to maintain v5-style frontend code
    return response.data ? flattenStrapiResponse(response.data) : [];
  } catch (error) {
    console.error(`Error fetching collection ${contentType}:`, error);
    return [];
  }
}

// Fetch single entry by slug with deep population support (Strapi v5)
export async function fetchBySlug<T = any>(
  contentType: string,
  slug: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    let params: Record<string, any> = {
      'filters[slug][$eq]': slug,
    };

    if (populate) {
      // For Strapi v5 deep population
      if (populate === '*' || populate === 'deep') {
        // Populate all fields including nested ones
        params = { ...params, ...getPopulateForType(contentType) };
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
