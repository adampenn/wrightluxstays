import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { properties, locations } from "@/lib/properties";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} Vacation Rentals | Wright Lux Stays`,
    description: loc.description,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const locationProperties = properties.filter((p) => p.locationSlug === slug);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 w-full pb-14 px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
            {location.tagline}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-white">
            {location.name}
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/80 mt-3 max-w-xl text-lg">
            {location.description}
          </p>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="gold-line mb-4" />
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1a1a]">
                Properties in {location.name}
              </h2>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 hidden md:block">
              {locationProperties.length} {locationProperties.length === 1 ? "property" : "properties"} available
            </p>
          </div>

          {locationProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-[family-name:var(--font-inter)] text-gray-500 text-lg">
                Properties coming soon. <Link href="/contact" className="text-[#C9A84C] hover:underline">Contact us to learn more.</Link>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationProperties.map((property) => (
                <Link
                  key={property.slug}
                  href={`/properties/${property.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md card-hover block"
                >
                  <div className="relative h-64 img-zoom">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a1a1a] mb-1 group-hover:text-[#C9A84C] transition-colors">
                      {property.name}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A84C] mb-3">
                      {property.beds} Bed · {property.baths} Bath
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-gray-600 leading-relaxed">
                      {property.tagline}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-[#C9A84C] font-[family-name:var(--font-inter)] text-sm font-semibold">
                      View &amp; Book
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OTHER LOCATIONS */}
      <section className="py-16 px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a1a] mb-8 text-center">
            Explore Other Destinations
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {locations
              .filter((l) => l.slug !== slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide uppercase px-6 py-3 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
