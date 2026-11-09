import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Compass, ChevronDown, ArrowRight, ShieldCheck, Award, Star } from "lucide-react";

interface HeroProps {
  onOpenReservation: (suiteName?: string) => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  const [checkIn, setCheckIn] = useState("2026-06-15");
  const [checkOut, setCheckOut] = useState("2026-06-22");
  const [guests, setGuests] = useState("2 Guests, 1 Suite");
  const [tier, setTier] = useState("Presidential Overwater Villa");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenReservation(tier);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85"
          alt="AURA Luxury Resort Sanctuary Dusk"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,#0A0A0A_85%]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Eyebrow / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
            <span className="text-[#C8A97E] text-xs uppercase tracking-[0.35em] font-medium">
              World’s Best Luxury Sanctuary 2026
            </span>
            <div className="flex items-center text-[#C8A97E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#C8A97E]" />
              ))}
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.1] tracking-tight mb-6"
          >
            Where Timeless Grandeur <br />
            <span className="italic font-light text-[#DFC9A8]">Meets Untouched Serenity</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            Nestled along secluded turquoise lagoons and emerald cliffs, AURA delivers an intimate retreat of private overwater estates, Michelin-starred culinary journeys, and dedicated 24-hour butler artistry.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              onClick={() => onOpenReservation()}
              className="inline-flex items-center gap-3 bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Explore Accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#culinary"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] px-8 py-4 text-xs uppercase tracking-[0.22em] font-light transition-all duration-300 backdrop-blur-sm"
            >
              Discover Fine Dining
            </a>
          </motion.div>
        </div>
      </div>

      {/* Interactive Booking Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full mb-6"
      >
        <div className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 p-4 md:p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check-In Date */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] block font-medium">
                Check-In Date
              </label>
              <div className="relative flex items-center bg-[#1A1A1A] border border-white/10 px-3 py-3 text-white focus-within:border-[#C8A97E] transition-colors">
                <Calendar className="w-4 h-4 text-[#C8A97E] mr-2 shrink-0" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Check-Out Date */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] block font-medium">
                Check-Out Date
              </label>
              <div className="relative flex items-center bg-[#1A1A1A] border border-white/10 px-3 py-3 text-white focus-within:border-[#C8A97E] transition-colors">
                <Calendar className="w-4 h-4 text-[#C8A97E] mr-2 shrink-0" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Suite Selection */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] block font-medium">
                Suite or Villa
              </label>
              <div className="relative flex items-center bg-[#1A1A1A] border border-white/10 px-3 py-3 text-white focus-within:border-[#C8A97E] transition-colors">
                <Compass className="w-4 h-4 text-[#C8A97E] mr-2 shrink-0" />
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer appearance-none pr-4"
                >
                  <option value="Presidential Overwater Villa" className="bg-[#1A1A1A] text-white">
                    Presidential Overwater Villa
                  </option>
                  <option value="Royal Oceanfront Penthouse" className="bg-[#1A1A1A] text-white">
                    Royal Oceanfront Penthouse
                  </option>
                  <option value="Lagoon Sanctuary Estate" className="bg-[#1A1A1A] text-white">
                    Lagoon Sanctuary Estate
                  </option>
                  <option value="Cliffside Sovereign Suite" className="bg-[#1A1A1A] text-white">
                    Cliffside Sovereign Suite
                  </option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] py-3.5 px-6 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Resort Hallmarks strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 text-white/70">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#C8A97E] shrink-0" />
            <div>
              <p className="text-white text-xs font-serif font-semibold">Forbes 5-Star</p>
              <p className="text-[10px] text-white/50 tracking-wider uppercase">Consecutive 6 Years</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C8A97E] shrink-0" />
            <div>
              <p className="text-white text-xs font-serif font-semibold">Dedicated Butler</p>
              <p className="text-[10px] text-white/50 tracking-wider uppercase">24-Hour Personalized</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#C8A97E] shrink-0" />
            <div>
              <p className="text-white text-xs font-serif font-semibold">Private Seaplane</p>
              <p className="text-[10px] text-white/50 tracking-wider uppercase">Direct VIP Transfers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-[#C8A97E] shrink-0" />
            <div>
              <p className="text-white text-xs font-serif font-semibold">3-Star Michelin</p>
              <p className="text-[10px] text-white/50 tracking-wider uppercase">Signature Degustation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

