import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, ChevronLeft, ChevronRight } from "lucide-react";

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "A sanctuary of extraordinary distinction. The level of bespoke butler intuition and discretion is something rarely encountered even across the globe's finest historic palazzos. AURA has elevated hospitality into fine art.",
      author: "Lady Charlotte Montgomery",
      location: "London, United Kingdom",
      stay: "Presidential Overwater Villa · 14-Night Stay"
    },
    {
      quote:
        "From touching down via private seaplane right upon the emerald lagoon to the transcendent 12-course dining at L’Ombre, AURA defines modern luxury in its purest, most sincere expression.",
      author: "Harrison Vance",
      location: "San Francisco, USA",
      stay: "Royal Oceanfront Penthouse · 7-Night Stay"
    },
    {
      quote:
        "The silence, the architectural purity, and the gentle scent of white lotus in the overwater spa pavilion. It completely restored our spirit and renewed our pace of life.",
      author: "Dr. Kenzo & Mei Takahashi",
      location: "Tokyo, Japan",
      stay: "Lagoon Sanctuary Estate · 10-Night Stay"
    }
  ];

  const accolades = [
    {
      pub: "Forbes Travel Guide",
      award: "Double Five-Star Hotel & Spa Award",
      year: "2024 – 2026 Consecutive"
    },
    {
      pub: "Condé Nast Traveler",
      award: "The Gold List — #1 Worldwide Luxury Resort",
      year: "Readers’ Choice Winner"
    },
    {
      pub: "Architectural Digest",
      award: "Masterwork of Coastal Biophilic Architecture",
      year: "Design Excellence Award"
    },
    {
      pub: "World’s 50 Best Hotels",
      award: "Ranked No. 3 Worldwide & Best in Island Hospitality",
      year: "Global Classification"
    }
  ];

  return (
    <section id="accolades" className="py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
            <span className="text-[#C8A97E] text-xs uppercase tracking-[0.3em] font-medium">
              Global Acclaim
            </span>
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Critical Accolades & <span className="italic text-[#DFC9A8]">Guest Chronicles</span>
          </h2>
          <div className="flex justify-center items-center gap-1 text-[#C8A97E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C8A97E]" />
            ))}
          </div>
        </div>

        {/* Accolades Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {accolades.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#C8A97E]/40 transition-colors"
            >
              <Award className="w-6 h-6 text-[#C8A97E] mb-4" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-1">
                  {item.pub}
                </span>
                <h4 className="font-serif text-base text-white leading-snug mb-2">{item.award}</h4>
                <p className="text-[11px] text-[#C8A97E] font-light">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto bg-[#121212] border border-[#C8A97E]/30 p-8 sm:p-14 relative">
          <Quote className="w-12 h-12 text-[#C8A97E]/20 absolute top-8 left-8" />

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <p className="font-serif text-xl sm:text-2xl text-white/90 italic font-light leading-relaxed mb-8">
              "{testimonials[currentSlide].quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between pt-6 border-t border-white/10 gap-4">
              <div>
                <p className="font-serif text-lg text-[#DFC9A8]">
                  {testimonials[currentSlide].author}
                </p>
                <p className="text-xs text-white/50 tracking-wider">
                  {testimonials[currentSlide].location}
                </p>
                <p className="text-[11px] text-[#C8A97E] mt-1 font-light tracking-wide">
                  {testimonials[currentSlide].stay}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  }
                  className="w-10 h-10 border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  }
                  className="w-10 h-10 border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resort Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20 pt-12 border-t border-white/10">
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#C8A97E] mb-1">99.6%</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Guest Return & Referral</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#C8A97E] mb-1">2 : 1</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Staff-to-Guest Ratio</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#C8A97E] mb-1">100%</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Solar & Desalination Powered</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#C8A97E] mb-1">24 / 7</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Bespoke Butler Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

