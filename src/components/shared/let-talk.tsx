import Link from 'next/link';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { SiteSettings } from '@/types/strapi';

export default async function LetsTalk() {
  // Fetch site settings with recurring sections
  const siteSettings = await fetchSingleType<SiteSettings>('site-settings', '*');

  // Find the "lets-talk" recurring section
  const letsTalkSection = siteSettings?.recurring_sections?.find(
    (section) => section.section_key === 'lets-talk'
  );

  // Fallback if section not found
  if (!letsTalkSection) {
    return null;
  }

  const backgroundImage = getStrapiMedia(letsTalkSection.image);

  return (
    <div
      className="w-full h-full relative flex items-center justify-end px-[32px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slide content */}
      <div className="flex flex-col items-center justify-center relative border-t-4 border-red-700 bg-white text-black lg:max-w-[32%] p-4 shadow-lg h-[80%]">
        <h3 className="my-4">{letsTalkSection.title}</h3>
        <p className="text-gray-700 mb-6 text-[14px] lg:text-[16px] text-center">
          {letsTalkSection.description}
        </p>
        <Link href={letsTalkSection.cta_href || '/contact-us'} className="uppercase text-sm font-bold border-b-2 border-red-700 inline-block text-[16px] pb-2">
          {letsTalkSection.cta_text || 'SPEAK TO AN EXPERT'}
        </Link>
      </div>
    </div>
  );
}
