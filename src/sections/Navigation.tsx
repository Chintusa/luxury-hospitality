import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Calendar } from "lucide-react";

interface NavigationProps {
  onOpenReservation: (suiteName?: string) => void;
}

export function Navigation({ onOpenReservation }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Suites & Villas", href: "#suites" },
    { label: "Culinary", href: "#culinary" },
    { label: "Wellness Spa", href: "#wellness" },
    { label: "Experiences", href: "#experiences" },
    { label: "Accolades", href: "#accolades" },
    { label: "Concierge", href: "#concierge" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-[#C8A97E]/70 flex items-center justify-center rounded-none rotate-45 group-hover:border-[#C8A97E] transition-colors duration-500">
              <span className="-rotate-45 text-[#C8A97E] font-serif text-xs font-semibold tracking-wider">A</span>
            </div>
            <div>
              <span className="font-serif text-white tracking-[0.28em] text-lg md:text-xl uppercase block leading-none">
                AURA
              </span>
              <span className="text-[#C8A97E] text-[8px] uppercase tracking-[0.35em] font-light block mt-1">
                Sanctuary & Residences
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-[#C8A97E] text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 font-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Reservation CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenReservation()}
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A] bg-[#C8A97E] px-7 py-3 hover:bg-[#DFC9A8] transition-all duration-300 font-medium shadow-lg hover:shadow-[#C8A97E]/20 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0A0A0A]" />
              Reserve Sanctuary
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white/90 p-2 hover:text-[#C8A97E] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-white hover:text-[#C8A97E] transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-4 text-center bg-[#C8A97E] text-[#0A0A0A] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#DFC9A8] transition-colors"
              >
                Reserve Sanctuary
              </button>
              <p className="text-white/30 text-center text-[10px] uppercase tracking-widest">
                AURA Luxury Hospitality Group · Worldwide Concierge
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

