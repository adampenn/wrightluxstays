"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to your email service or Guesty contact API
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=85"
          alt="Contact Wright Lux Stays"
          fill
          priority
          className="object-cover object-bottom"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
            We'd Love to Hear From You
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1a1a] mb-4">
                Drop Us a Line
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-gray-600 leading-relaxed mb-10">
                Please reach out below if you have questions about our rentals. We look forward to connecting!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] font-semibold mb-1">Phone</p>
                    <a href="tel:+17075010199" className="font-[family-name:var(--font-inter)] text-[#1a1a1a] hover:text-[#C9A84C] transition-colors text-lg">
                      (707) 501-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] font-semibold mb-1">Email</p>
                    <a href="mailto:amber@wrightluxstays.com" className="font-[family-name:var(--font-inter)] text-[#1a1a1a] hover:text-[#C9A84C] transition-colors">
                      amber@wrightluxstays.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] font-semibold mb-1">Locations</p>
                    <p className="font-[family-name:var(--font-inter)] text-[#1a1a1a]">
                      Sonoma CA · Kansas City · Austin TX · Carmel CA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="https://www.instagram.com/wrightluxstays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61553220984381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-5 text-[#C9A84C]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a1a] mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-gray-600">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a1a] mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase text-gray-500 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className="w-full border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#C9A84C] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase text-gray-500 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className="w-full border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#C9A84C] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase text-gray-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase text-gray-500 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                        placeholder="Tell us about your planned trip, dates, group size..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#C9A84C] hover:bg-[#a8862f] text-white font-[family-name:var(--font-inter)] text-sm font-bold tracking-wider uppercase py-4 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
