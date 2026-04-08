import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Wright Lux Stays",
  description: "Learn about the Wright family and the story behind Wright Lux Stays — luxury vacation rentals in Sonoma, Kansas City, Austin & Carmel.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85"
          alt="Wright Lux Stays — Our Story"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold">
            A Little About Us
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1a1a] mb-6">
                Born From a Love of Wine Country
              </h2>
              <div className="space-y-5 font-[family-name:var(--font-inter)] text-gray-600 leading-relaxed">
                <p>
                  Hi there! We're so glad you're here. Wright Lux Stays and our Sonoma-based management company,{" "}
                  <a href="https://www.staylegendarywithus.com/" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">
                    Legendary Stays
                  </a>
                  , were born out of a love for Wine Country and a dream to create unforgettable stays in the places closest to our hearts.
                </p>
                <p>
                  Our journey into vacation rentals began in Sonoma, California, where we were married at the beautiful{" "}
                  <strong className="text-[#1a1a1a]">Cornerstone Gardens</strong> — a must-visit if you're planning a stay in Sonoma!
                  From the moment we stepped onto what is now The Acacia Farmhouse, we knew we'd found something special.
                  Not only did we fall in love with the property, but we also made lifelong friends with neighbors in the community.
                  That's when the dream of sharing this magical place with guests began — and soon, we expanded into more homes
                  throughout Sonoma Valley.
                </p>
                <p>
                  Our reach also extends to Kansas City, where Amber grew up. With family still there, it was important to have
                  a home base to gather and share with loved ones — and now, with our guests!
                </p>
                <p>
                  Whether you're sipping wine in Sonoma, walking the streets of Carmel, exploring Kansas City, or visiting Austin —
                  we hope our homes feel like a home away from home. We put our hearts into every property, and we can't wait to
                  welcome you.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=900&q=85"
                  alt="The Wright Family"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Decorative gold border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C9A84C] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1a1a]">
              What We Believe In
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Authentic Connection",
                desc: "We're not a faceless corporation — we're a family who cares deeply about your experience and the communities we're part of.",
              },
              {
                number: "02",
                title: "Thoughtful Luxury",
                desc: "True luxury isn't just about high thread counts. It's about anticipating your needs, the perfect local restaurant tip, and a home that feels lived-in and loved.",
              },
              {
                number: "03",
                title: "Community First",
                desc: "We invest in the neighborhoods where we operate, building real relationships with our neighbors and supporting local businesses.",
              },
            ].map((v) => (
              <div key={v.number} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#C9A84C]/25 mb-3">
                  {v.number}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a1a1a] mb-3">
                  {v.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1a1a] mb-6">
            Our Locations
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-gray-600 text-lg leading-relaxed mb-12">
            From the vineyards of Sonoma to the coasts of Carmel, the jazz clubs of Kansas City to the live music of Austin —
            we've hand-picked the best of each destination so you can focus on making memories.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: "Sonoma, CA", href: "/locations/sonoma" },
              { name: "Kansas City", href: "/locations/kansas-city" },
              { name: "Austin, TX", href: "/locations/austin" },
              { name: "Carmel, CA", href: "/locations/carmel" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide uppercase px-6 py-3 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Stay?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-gray-400 mb-8">
            We'd love to help you find the perfect property for your next escape.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] hover:bg-[#a8862f] text-white font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider uppercase px-10 py-4 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
