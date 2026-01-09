const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

interface StrapiAttributes {
  [key: string]: any;
}

// --------------------------------------------------
// MEDIA HELPERS
// --------------------------------------------------

export function getStrapiMedia(media: any): string | null {
  if (!media) return null;

  if (media.data) {
    const item = Array.isArray(media.data) ? media.data[0] : media.data;
    if (!item) return null;

    const url = item.attributes?.url || item.url;
    if (!url) return null;

    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }

  if (media.url) {
    return media.url.startsWith("http")
      ? media.url
      : `${STRAPI_URL}${media.url}`;
  }

  return null;
}

export function getStrapiMediaArray(media: any): string[] {
  if (!media) return [];

  const data = Array.isArray(media) ? media : media.data || [];
  if (!Array.isArray(data)) return [];

  return data
    .map((item: any) => {
      const url = item.attributes?.url || item.url;
      if (!url) return null;
      return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    })
    .filter(Boolean) as string[];
}

// --------------------------------------------------
// FLATTEN RESPONSE
// --------------------------------------------------

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

  for (const key in flattened) {
    if (flattened[key] !== null && typeof flattened[key] === "object") {
      if (flattened[key].data !== undefined) {
        flattened[key] = flattenStrapiResponse(flattened[key].data);
      } else {
        flattened[key] = flattenStrapiResponse(flattened[key]);
      }
    }
  }

  return flattened;
}

// --------------------------------------------------
// GLOBAL FETCH (NO-CACHE VERSION)
// --------------------------------------------------

export async function fetchStrapi<T = any>(
  path: string,
  params?: Record<string, any>,
  options?: RequestInit & { cache?: RequestCache; revalidate?: number }
): Promise<T> {
  const queryString = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
          if (value !== undefined && value !== null)
            acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString()
    : "";

  const url = `${STRAPI_URL}/api${path}${queryString}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  if (STRAPI_API_TOKEN) {
    (headers as any)["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      cache: "no-store",          // 🔥 disable caching
      next: { revalidate: 0 },     // 🔥 always revalidate
    });

    if (!response.ok) {
      throw new Error(
        `Strapi request failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching from Strapi (${url}):`, error);
    throw error;
  }
}

// --------------------------------------------------
// POPULATE MAP
// --------------------------------------------------

function getPopulateForType(type: string) {
  const commonBgImages = {
    "populate[parallax_background_image]": "true",
    "populate[travel_purpose_image]": "true",
  };

  const heroBgHelper = {
    "populate[hero_background_image]": "true",
  };

  switch (type) {
    case "home-page":
      return {
        ...commonBgImages,
        "populate[hero_slides][populate]": "*",
        "populate[tour_types][populate]": "*",
        "populate[flagship_packages][populate]": "*",
        "populate[process_steps]": "*",
        "populate[primary_package][populate]": "*",
        "populate[grid_packages][populate]": "*",
        "populate[image_box_packages][populate]": "*",
        "populate[blog_posts][populate]": "*",
        "populate[slider_slides][populate]": "*",
        "populate[curated_sections][populate]": "*",
      };

    case "about-page":
      return {
        ...heroBgHelper,
        "populate[testimonials][populate]": "*",
        "populate[founder_image]": "true",
        "populate[team_members][populate]": "*",
        "populate[process_steps]": "*",
      };

    case "contact-page":
      return {
        ...heroBgHelper,
        "populate[form_image]": "true",
        "populate[contact_info]": "*",
      };

    case "bespoke-journey-page":
      return {
        ...heroBgHelper,
        ...commonBgImages,
        "populate[packages][populate]": "*",
        "populate[grid_cards][populate]": "*",
        "populate[related_packages][populate]": "*",
      };

    case "exquisite-stays-page":
      return {
        ...heroBgHelper,
        "populate[parallax_background_image]": "true",
        "populate[square_images]": "true",
        "populate[horizontal_images]": "true",
        "populate[luxury_images]": "true",
        "populate[image_box_packages][populate]": "*",
        "populate[flagship_packages][populate]": "*",
      };

    case "culture-wellness-page":
      return {
        ...heroBgHelper,
        "populate[parallax_background_image]": "true",
        "populate[grid_cards][populate]": "*",
        "populate[hero_images]": "true",
        "populate[signature_tours][populate]": "*",
        "populate[freedom_background_image]": "true",
      };

    case "travel-purpose-page":
      return {
        ...heroBgHelper,
        "populate[alternating_sections][populate]": "*",
      };

    case "curated-birding-page":
      return {
        ...heroBgHelper,
        "populate[travel_purpose_image]": "true",
        "populate[grid_boxes][populate]": "*",
        "populate[treks][populate]": "*",
      };

    case "birding-detail-page":
      return {
        ...heroBgHelper,
        ...commonBgImages,
        "populate[essential_info]": "*",
        "populate[next_level_items][populate]": "*",
      };

    case "site-settings":
      return {
        "populate[logo]": "true",
        "populate[recurring_sections][populate]": "*",
      };

    default:
      return {};
  }
}

// --------------------------------------------------
// SINGLE TYPE
// --------------------------------------------------

export async function fetchSingleType<T = any>(
  contentType: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    let params: Record<string, any> = {};

    if (populate === "*" || populate === "deep") {
      params = getPopulateForType(contentType);
    }

    const response = await fetchStrapi<StrapiResponse<T>>(
      `/${contentType}`,
      params
    );

    return response.data ? flattenStrapiResponse(response.data) : null;
  } catch (error) {
    console.error(`Error fetching single type ${contentType}:`, error);
    return null;
  }
}

// --------------------------------------------------
// COLLECTION TYPE
// --------------------------------------------------

export async function fetchCollection<T = any>(
  contentType: string,
  options?: {
    filters?: Record<string, any>;
    populate?: string | string[] | Record<string, any>;
    sort?: string | string[];
    pagination?: { page?: number; pageSize?: number };
  }
): Promise<T[]> {
  try {
    let params: Record<string, any> = {};

    if (options?.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        params[`filters[${key}][$eq]`] = value;
      });
    }

    if (options?.populate === "*" || options?.populate === "deep") {
      params = { ...params, ...getPopulateForType(contentType) };
    }

    if (options?.sort) {
      params.sort = Array.isArray(options.sort)
        ? options.sort.join(",")
        : options.sort;
    }

    if (options?.pagination) {
      if (options.pagination.page)
        params["pagination[page]"] = options.pagination.page;
      if (options.pagination.pageSize)
        params["pagination[pageSize]"] = options.pagination.pageSize;
    }

    const response = await fetchStrapi<StrapiResponse<T[]>>(
      `/${contentType}`,
      params
    );

    return response.data ? flattenStrapiResponse(response.data) : [];
  } catch (error) {
    console.error(`Error fetching collection ${contentType}:`, error);
    return [];
  }
}

// --------------------------------------------------
// BY SLUG
// --------------------------------------------------

export async function fetchBySlug<T = any>(
  contentType: string,
  slug: string,
  populate?: string | string[] | Record<string, any>
): Promise<T | null> {
  try {
    let params: Record<string, any> = {
      "filters[slug][$eq]": slug,
    };

    if (populate === "*" || populate === "deep") {
      params = { ...params, ...getPopulateForType(contentType) };
    }

    const response = await fetchStrapi<StrapiResponse<T[]>>(
      `/${contentType}`,
      params
    );

    return response.data?.[0]
      ? flattenStrapiResponse(response.data[0])
      : null;
  } catch (error) {
    console.error(`Error fetching ${contentType} by slug ${slug}:`, error);
    return null;
  }
}

// --------------------------------------------------
// FETCH ALL SLUGS
// --------------------------------------------------

export async function fetchAllSlugs(contentType: string): Promise<string[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<any[]>>(
      `/${contentType}`,
      { fields: "slug" }
    );

    return (
      response.data
        ?.map((item) => item.attributes?.slug || item.slug)
        .filter(Boolean) || []
    );
  } catch (error) {
    console.error(`Error fetching slugs for ${contentType}:`, error);
    return [];
  }
}

// --------------------------------------------------
// SITE SETTINGS
// --------------------------------------------------

export async function fetchSiteSettings() {
  return fetchSingleType("site-settings", "*");
}

// --------------------------------------------------
// PAGES
// --------------------------------------------------

export const fetchPages = {
  home: () => fetchSingleType("home-page", "*"),
  about: () => fetchSingleType("about-page", "*"),
  contact: () => fetchSingleType("contact-page", "*"),
  bespokeJourney: () => fetchSingleType("bespoke-journey-page", "*"),
  exquisiteStays: () => fetchSingleType("exquisite-stays-page", "*"),
  cultureWellness: () => fetchSingleType("culture-wellness-page", "*"),
  travelPurpose: () => fetchSingleType("travel-purpose-page", "*"),
  curatedBirding: () => fetchSingleType("curated-birding-page", "*"),
  birdingDetail: () => fetchSingleType("birding-detail-page", "*"),
};

// --------------------------------------------------
// PACKAGES
// --------------------------------------------------

export const fetchPackages = {
  all: () => fetchCollection("packages", { populate: "*" }),
  bestSelling: () =>
    fetchCollection("packages", {
      filters: { is_best_selling: true },
      populate: "*",
    }),
  flagship: () =>
    fetchCollection("packages", {
      filters: { is_flagship: true },
      populate: "*",
    }),
  other: () =>
    fetchCollection("packages", {
      filters: { is_other: true },
      populate: "*",
    }),
  bySlug: (slug: string) => fetchBySlug("packages", slug, "*"),
};

// --------------------------------------------------
// TREKS
// --------------------------------------------------

export const fetchTreks = {
  all: () => fetchCollection("trek", { populate: "*" }),
  bySlug: (slug: string) => fetchBySlug("trek", slug, "*"),
};

// --------------------------------------------------
// TEAM
// --------------------------------------------------

export async function fetchTeamMembers() {
  return fetchCollection("team-member", {
    populate: "*",
    sort: "display_order:asc",
  });
}

// --------------------------------------------------
// TESTIMONIALS
// --------------------------------------------------

export async function fetchTestimonials() {
  return fetchCollection("testimonial", {
    populate: "*",
    sort: "display_order:asc",
  });
}
