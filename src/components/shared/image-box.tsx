import Image from 'next/image';
import Link from 'next/link';

function ImageBox({
  id,
  image,
  label,
  subtitle
}: {
  id: string | number
  image: string;
  label: string;
  subtitle?: string;
}) {
  return (
    <Link href={`/packages/${id}`} className="relative border aspect-square overflow-hidden group cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt="image"
        height={500}
        width={500}
        className="object-cover h-full w-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 hover:bg-black/80 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
        <div className="text-center border-b-2 border-transparent group-hover:border-white transition-all duration-300">
          <span className="text-white text-[32px] font-bold">{label}</span>
          <p className="text-primary font-bold text-[24px]">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default ImageBox;
