import BestSelling from "@/components/landing-component/best-selling";
import HeroSwapper from "@/components/landing-component/hero-swapper";
import SliderComponent from "@/components/landing-component/slider";
import ImageBox from "@/components/shared/image-box";
import LetsTalk from "@/components/shared/let-talk";
import { fetchSingleType, getStrapiMedia } from "@/lib/strapi";
import { HomePage as HomePageType } from "@/types/strapi";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

// Helper function to convert kebab-case to PascalCase for Lucide icon names
function kebabToPascal(str: string): string {
	return str
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
}

export default async function Home() {
	// Fetch home page data from Strapi
	// Using wildcard to populate all relations and media fields
	const homeData = await fetchSingleType<HomePageType>("home-page", "*");

	if (!homeData) {
		return <div>Error loading home page data</div>;
	}

	// Extract packages from relations (Strapi v5 format)
	// Relations are returned as arrays directly, not in data.attributes
	const flagshipPackages = Array.isArray(homeData.flagship_packages)
		? homeData.flagship_packages
		: [];

	const primaryPackage = homeData.primary_package || null;

	const gridPackages = Array.isArray(homeData.grid_packages)
		? homeData.grid_packages
		: [];

	const imageBoxPackages = Array.isArray(homeData.image_box_packages)
		? homeData.image_box_packages
		: [];

	return (
		<main>
			{/* Hero Section */}
			<section className="h-screen w-full overflow-hidden">
				<HeroSwapper
					slides={
						homeData.hero_slides?.map((slide) => ({
							id: slide.id,
							title: slide.title,
							subtitle: slide.subtitle || "",
							description: slide.description || "",
							image: getStrapiMedia(slide.image) || "",
							overlayOpacity: slide.overlay_opacity || 0.3,
							cta: slide.cta_text || "Explore",
						})) || []
					}
				/>
			</section>

			{/* Introduction Section */}
			<section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[90px]">
				<div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
				<div className="flex flex-col items-center text-center">
					<div className="w-full lg:w-[740px]">
						<h1>{homeData.introduction_title}</h1>
					</div>
					<div className="lg:w-[920px]">
						<p className="text-center my-[24px]">
							{homeData.introduction_description}
						</p>
					</div>
					<div className="lg:min-w-[250px]">
						<span className="font-bold">{homeData.introduction_tagline}</span>
					</div>
				</div>
				<div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
			</section>

			{/* Tour Types Section */}
			<section className="px-[32px] mb-[90px]">
				<div className="grid lg:grid-cols-3 lg:gap-2 gap-3 w-full mb-5">
					{homeData.tour_types?.map((tourType, idx) => (
						<Link
							href={tourType.link}
							key={idx}
							className="relative w-full aspect-square text-center overflow-hidden group cursor-pointer"
						>
							<Image
								src={getStrapiMedia(tourType.image) || ""}
								alt={tourType.title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
								<h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
									{tourType.title}
								</h4>
								<span className="text-[14px] lg:text-[16px] text-white">
									{tourType.subtitle}
								</span>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Flagship Section */}
			<section className="flex flex-col justify-center items-center text-center mb-[90px]">
				<h1 className="mb-8">{homeData.flagship_title}</h1>
				<BestSelling
					packages={flagshipPackages.map((pkg: any) => ({
						...pkg,
						image: {
							src: getStrapiMedia(pkg.image) || "",
							alt: pkg.title,
						},
					}))}
				/>
			</section>

			{/* Process Section */}
			<section className="flex flex-col justify-center items-center text-center px-[16px] lg:px-[32px] scrollbar-hide mb-[90px]">
				<div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
				<h1>{homeData.process_title}</h1>
				<div className="md:w-[840px]">
					<p>{homeData.process_description}</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 items-start justify-center my-[40px] gap-4">
					{homeData.process_steps?.map((step) => {
						// Convert kebab-case icon name to PascalCase for Lucide icons
						const iconName = kebabToPascal(step.icon_name?.trim() || '');
						const IconComponent =
							LucideIcons[
								iconName as keyof typeof LucideIcons
							] as React.ComponentType<{ className?: string }>;

						return (
							<div
								key={step.step_number}
								className="flex flex-col items-center justify-center"
							>
								<div className="flex items-center justify-center size-[60px] rounded-full bg-primary">
									{IconComponent && <IconComponent className="text-white" />}
								</div>
								<p className="mt-4 text-[16px] text-primary font-bold">
									0{step.step_number}. {step.title}
								</p>
								<div className="md:w-[300px]">
									<p>{step.description}</p>
								</div>
							</div>
						);
					})}
				</div>
				<Link
					href={homeData.process_cta_href || "/contact"}
					className="px-[24px] py-[12px] bg-primary text-white text-2xl cursor-pointer"
				>
					{homeData.process_cta_text}
				</Link>
				<div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
			</section>

			{/* Featured Packages Grid */}
			<section className="px-[16px] lg:px-[32px] mb-[90px]">
				{primaryPackage && (
					<div className="flex flex-col lg:flex-row w-full mt-[40px] mb-2 h-[550px]">
						<div className="lg:flex-3">
							<Image
								src={getStrapiMedia(primaryPackage.image) || ""}
								alt={primaryPackage.title}
								height={1000}
								width={1000}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="flex flex-col justify-between flex-1 px-[24px] py-[42px] text-white bg-[#111820]">
							<div>
								<span className="font-extrabold text-[18px]">
									{primaryPackage.title}
								</span>
								<h3>{primaryPackage.subtitle}</h3>
								<span className="text-[14px] lg:text-[16px]">
									{primaryPackage.description}
								</span>
							</div>
							<Link
								href={`/packages/${primaryPackage.slug}`}
								className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer"
							>
								VIEW DETAILS
							</Link>
						</div>
					</div>
				)}
				<div className="space-y-2">
					<div className="flex flex-col lg:flex-row gap-2 items-stretch">
						{gridPackages.slice(0, 2).map((pkg: any, idx: number) => (
							<div
								key={pkg.id}
								className={`border w-full ${
									idx === 0 ? "lg:flex-[1]" : "lg:flex-[2]"
								} flex flex-col`}
							>
								<div className="h-[70vh]">
									<Image
										src={getStrapiMedia(pkg.image) || ""}
										alt={pkg.title}
										height={1000}
										width={1000}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
									<p className="font-extrabold text-[18px]">{pkg.category}</p>
									<h3>{pkg.subtitle || pkg.title}</h3>
									<p className="text-[16px]">{pkg.description}</p>
									<Link
										href={`/packages/${pkg.slug}`}
										className="py-2 px-4 bg-primary mt-6 w-fit"
									>
										VIEW DETAILS
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="flex flex-col lg:flex-row gap-2 items-stretch">
						{gridPackages.slice(2, 4).map((pkg: any, idx: number) => (
							<div
								key={pkg.id}
								className={`border w-full ${
									idx === 0 ? "lg:flex-[2]" : "lg:flex-[1]"
								} flex flex-col`}
							>
								<div className="h-[70vh]">
									<Image
										src={getStrapiMedia(pkg.image) || ""}
										alt={pkg.title}
										height={1000}
										width={1000}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
									<p className="font-extrabold text-[18px]">{pkg.category}</p>
									<h3 className="text-2xl lg:text-3xl font-extrabold">
										{pkg.subtitle || pkg.title}
									</h3>
									<p className="text-[16px]">{pkg.description}</p>
									<Link
										href={`/packages/${pkg.slug}`}
										className="py-2 px-4 bg-primary mt-6 w-fit"
									>
										VIEW DETAILS
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Parallax Section */}
			{homeData.parallax_background_image && (
				<section className="relative w-full h-[80vh] hidden lg:block mb-[90px] border">
					<div
						className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
						style={{
							backgroundImage: `url('${getStrapiMedia(homeData.parallax_background_image)}')`,
							backgroundAttachment: "fixed",
						}}
					/>
					<div className="absolute inset-0 bg-black/40 z-10" />
					<div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
						<h1 className="text-white">{homeData.parallax_title}</h1>
						<p className="px-[112px] text-center font-bold">
							{homeData.parallax_description}
						</p>
					</div>
				</section>
			)}

			{/* Promise Section */}
			<section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
				<div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
				<div className="flex flex-col items-center text-center">
					<div className="w-full lg:w-[780px]">
						<h1>{homeData.promise_title}</h1>
					</div>
					<div className="lg:w-[900px]">
						<p className="text-[14px] lg:text-[16px] text-center my-[24px]">
							{homeData.promise_description}
						</p>
					</div>
				</div>
				<div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
			</section>

			{/* Image Box Packages */}
			<section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-2 mb-[90px]">
				{imageBoxPackages.map((pkg: any) => (
					<ImageBox
						id={pkg.slug}
						key={pkg.id}
						image={getStrapiMedia(pkg.image) || ""}
						label={pkg.title || ""}
						subtitle={pkg.subtitle}
					/>
				))}
			</section>

			{/* Travel With Purpose Section */}
			{homeData.travel_purpose_title && (
				<section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-2">
					<div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] bg-black/70">
						<Image
							src={getStrapiMedia(homeData.travel_purpose_image) || ""}
							alt={homeData.travel_purpose_title}
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
						<div>
							<h2>{homeData.travel_purpose_title}</h2>
							{homeData.travel_purpose_description
								?.split("\n\n")
								.map((para, idx) => (
									<p key={idx} className="text-white text-[16px] mt-[32px]">
										{para}
									</p>
								))}
						</div>
						<div className="mt-[32px] flex">
							<Link
								className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
								href={homeData.travel_purpose_cta_href || "/travel-purpose"}
							>
								{homeData.travel_purpose_cta_text || "VIEW DETAILS"}
							</Link>
						</div>
					</div>
				</section>
			)}

			{/* Slider Section */}
			{homeData.slider_slides && homeData.slider_slides.length > 0 && (
				<section className="my-[42px] px-[16px] lg:px-[32px]">
					<SliderComponent
						slides={homeData.slider_slides.map((slide) => ({
							id: slide.id,
							title: slide.title,
							description: slide.description,
							image: getStrapiMedia(slide.image) || "",
							subtitle: "Discover", // Fallback
							cta: "Learn More", // Fallback
						}))}
					/>
				</section>
			)}

			{/* Blog Section */}
			{homeData.blog_posts && homeData.blog_posts.length > 0 && (
				<section className="flex flex-col items-center justify-center my-[90px] lg:px-[32px] px-[16px]">
					<h1 className="text-3xl font-bold">{homeData.blog_title}</h1>
					<p className="font-bold mt-2">{homeData.blog_subtitle}</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 mt-[40px]">
						{homeData.blog_posts.map((post, idx) => (
							<div
								key={idx}
								className="relative w-full aspect-square flex items-center justify-center overflow-hidden group cursor-pointer"
								style={{
									backgroundImage: `url(${getStrapiMedia(post.image)})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
								<div className="relative text-center text-white">
									<h4 className="text-xl font-bold text-white relative inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:mx-auto after:transition-all after:duration-500 delay-75 group-hover:after:w-full">
										{post.title}
									</h4>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Curated Sections */}
			{homeData.curated_sections && homeData.curated_sections.length > 0 && (
				<section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-2 h-[80vh]">
					{homeData.curated_sections.map((section, idx) => (
						<Link
							key={idx}
							href={section.link}
							className="w-[50%] border relative flex items-center justify-center"
						>
							<Image
								src={getStrapiMedia(section.image) || ""}
								alt={section.title}
								width={400}
								height={400}
								className="h-full w-full object-cover absolute"
							/>
							<div className="w-full h-full absolute hover:opacity-50 bg-black transition-all duration-300 ease-in-out opacity-20" />
							<h2 className="z-40 text-white">{section.title}</h2>
						</Link>
					))}
				</section>
			)}

			{/* Let's Talk Section */}
			<section className="mb-[90px] px-[32px]">
				<div className="h-[84vh]">
					<LetsTalk />
				</div>
			</section>
		</main>
	);
}
