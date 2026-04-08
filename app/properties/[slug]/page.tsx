import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: `${property.name} | Wright Lux Stays`,
    description: property.tagline,
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const relatedProperties = properties
    .filter((p) => p.locationSlug === property.locationSlug && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 lg:left-8 z-10">
          <div className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/locations/${property.locationSlug}`} className="hover:text-white transition-colors">{property.location}</Link>
            <span>/</span>
            <span className="text-white">{property.name}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
          <div className="inline-block bg-[#C9A84C] text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 mb-4 font-[family-name:var(--font-inter)]">
            {property.location}
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-2">
            {property.name}
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/80 text-lg">
            {property.beds} Bed · {property.baths} Bath
            {property.address && (
              <> · <span className="text-white/60">{property.address}</span></>
            )}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column — Details */}
            <div className="lg:col-span-2">
              <span className="gold-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1a1a] mb-2">
                {property.tagline}
              </h2>
              <div className="h-px bg-gray-100 my-6" />
              <p className="font-[family-name:var(--font-inter)] text-gray-600 leading-relaxed text-lg mb-8">
                {property.description}
              </p>

              {/* Features */}
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a1a] mb-5">
                Property Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A84C]/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-[family-name:var(--font-inter)] text-sm text-gray-700 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Photo gallery */}
              {property.images.length > 1 && (
                <>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a1a] mb-5">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.images.map((img, i) => (
                      <div key={i} className={`relative rounded-lg overflow-hidden img-zoom ${i === 0 ? "col-span-2 h-56" : "h-40"}`}>
                        <Image
                          src={img}
                          alt={`${property.name} — photo ${i + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right column — Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#1a1a1a] px-6 py-5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                      Check Availability
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm mt-1">
                      Powered by Guesty
                    </p>
                  </div>

                  {/*
                    ============================================================
                    TODO: GUESTY BOOKING WIDGET INTEGRATION
                    ============================================================
                    Replace the placeholder below with your actual Guesty
                    booking widget for this property.

                    Steps:
                    1. Log in to your Guesty account at app.guesty.com
                    2. Navigate to the property listing
                    3. Find the "Booking Website" or "Widgets" section
                    4. Copy the embed code or direct booking URL
                    5. Replace the iframe src below with your actual Guesty
                       widget URL for this property.

                    Example:
                    <iframe
                      src="https://app.guesty.com/booking-widget/YOUR_LISTING_ID"
                      width="100%"
                      height="600"
                      frameBorder="0"
                    />

                    The guestyBookingUrl for this property is:
                    {property.guestyBookingUrl}
                    ============================================================
                  */}
                  <div className="p-6">
                    <div className="bg-[#faf8f5] rounded-xl p-6 text-center border-2 border-dashed border-[#C9A84C]/40">
                      <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 mb-4">
                        Booking widget integration coming soon. Contact us directly to check availability and book your stay.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-block w-full bg-[#C9A84C] hover:bg-[#a8862f] text-white font-[family-name:var(--font-inter)] text-sm font-bold tracking-wider uppercase px-6 py-3.5 transition-colors text-center"
                      >
                        Request a Booking
                      </Link>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                      <a
                        href="tel:+17075010199"
                        className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm text-gray-600 hover:text-[#C9A84C] transition-colors"
                      >
                        <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (707) 501-0199
                      </a>
                      <a
                        href="mailto:amber@wrightluxstays.com"
                        className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm text-gray-600 hover:text-[#C9A84C] transition-colors"
                      >
                        <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        amber@wrightluxstays.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {relatedProperties.length > 0 && (
        <section className="py-20 px-6 lg:px-8 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1a1a] mb-10 text-center">
              More Stays in {property.location}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProperties.map((related) => (
                <Link
                  key={related.slug}
                  href={`/properties/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md card-hover block"
                >
                  <div className="relative h-52 img-zoom">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1a1a1a] group-hover:text-[#C9A84C] transition-colors">
                      {related.name}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A84C]">
                      {related.beds} Bed · {related.baths} Bath
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
