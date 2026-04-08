import Link from "next/link";
import Image from "next/image";
import { properties, locations } from "@/lib/properties";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
          alt="Luxury vacation rental — Wright Lux Stays"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
            Luxury Vacation Rentals
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stay Somewhere
            <br />
            <em className="text-[#C9A84C]">Extraordinary</em>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Handpicked luxury homes in Sonoma, Kansas City, Austin &amp; Carmel — curated with love by the Wright family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations/sonoma"
              className="inline-block bg-[#C9A84C] hover:bg-[#a8862f] text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-[#1a1a1a] font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* LOCATIONS STRIP */}
      <section className="bg-[#1a1a1a] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-[#C9A84C] transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="gold-line mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            Luxury Stays, Personal Touch
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-lg text-gray-600 leading-relaxed">
            Wright Lux Stays was born out of a love for Wine Country and a dream to create unforgettable
            experiences in the places closest to our hearts. Every home in our collection is personally
            curated — thoughtfully designed, meticulously maintained, and ready to welcome you like family.
          </p>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="pb-24 px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Featured Properties
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              Our Most Loved Stays
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
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
                  <div className="absolute top-4 left-4 bg-[#C9A84C] text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 font-[family-name:var(--font-inter)]">
                    {property.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a1a1a] mb-1 group-hover:text-[#C9A84C] transition-colors">
                    {property.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A84C] mb-3">
                    {property.beds} Bed · {property.baths} Bath
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {property.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-[#C9A84C] font-[family-name:var(--font-inter)] text-sm font-semibold">
                    View Property
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/locations/sonoma"
              className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Where We Stay
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              Our Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className={`relative overflow-hidden rounded-xl group img-zoom ${
                  i === 0 ? "md:col-span-2 h-80" : "h-64"
                }`}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-1">
                    {loc.tagline}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
                    {loc.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-white/80 mt-2 max-w-md">
                    {loc.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-[#1a1a1a] py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
            As Featured On
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Staycation Wine &amp; Dine
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-gray-400 text-lg leading-relaxed mb-10">
            Wright Lux Stays has been featured by top travel media for our exceptional Wine Country experiences and dedication to luxury hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-block bg-[#C9A84C] hover:bg-[#a8862f] text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gray-600 text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              The Wright Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Personally Curated",
                desc: "Every property in our collection has been personally selected and loved by the Wright family — you'll feel the difference.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Luxury Standards",
                desc: "From high-end linens to designer kitchens, we set the bar high. Every detail is considered so you can just relax and enjoy.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "5-Star Support",
                desc: "We're real people who care deeply about your experience. Reach us anytime — before, during, and after your stay.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-5 text-[#C9A84C]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="py-20 px-6 lg:px-8 bg-[#C9A84C]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Club
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/90 mb-8">
            Join our email list and get access to special offers exclusive only to our subscribers!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 text-[#1a1a1a] bg-white font-[family-name:var(--font-inter)] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white font-[family-name:var(--font-inter)] text-sm font-bold tracking-wider uppercase px-6 py-3.5 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
