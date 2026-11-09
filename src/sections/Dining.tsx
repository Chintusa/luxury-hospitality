import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Wine, Clock, Award, ChevronRight, CheckCircle2 } from "lucide-react";

interface DiningProps {
  onOpenReservation: (suiteOrDining?: string) => void;
}

export function Dining({ onOpenReservation }: DiningProps) {
  const [activeVenue, setActiveVenue] = useState(0);

  const venues = [
    {
      name: "L'Ombre",
      badge: "Three Michelin Stars",
      cuisine: "French Avant-Garde & Rare Oceanic Foraging",
      chef: "Chef Jean-Luc Laurent",
      seating: "24 Private Seats Only",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
      description:
        "An avant-garde sanctuary of culinary mastery where rare oceanic treasures meet French classical discipline. Each evening unfolds in a synchronized 12-course narrative, personally introduced by Chef Laurent.",
      menuHighlights: [
        { dish: "Imperial Oscietra Caviar", detail: "Smoked dashi gelée, gold leaf, sea urchin foam" },
        { dish: "Brittany Blue Lobster", detail: "Slow-poached in Meyer lemon butter with sea succulents" },
        { dish: "A5 Miyazaki Wagyu Tenderloin", detail: "Morel reduction, charred shallot embers, Périgord truffle" },
        { dish: "Tahitian Vanilla Eclipse", detail: "Single-origin smoked cacao, crisp feuilletine, salted caramel" }
      ],
      timing: "Dinner: 19:00 – 23:00 (Reservations Essential)",
      dressCode: "Black Tie & Elegant Evening Attire"
    },
    {
      name: "Aqua Marina",
      badge: "Gault & Millau 19.5/20",
      cuisine: "Sun-Drenched Coastal Mediterranean & Crudo",
      chef: "Chef Elena Moriconi",
      seating: "Open Air Overwater Terrace",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      description:
        "Perched directly above the calm reef, Aqua Marina celebrates the vibrant soul of the Mediterranean coastline with wood-fired hearth cooking and daily catches delivered straight by local divers.",
      menuHighlights: [
        { dish: "Wild Mediterranean Branzino", detail: "Salt-crusted, cold-pressed Sicilian olive oil, wild thyme" },
        { dish: "Handmade Tagliolini al Tartufo", detail: "Aged Parmigiano-Reggiano, freshly shaved summer truffles" },
        { dish: "Gambero Rosso di Mazara Crudo", detail: "Finger lime pearls, crushed pistachios, sea salt flakes" },
        { dish: "Capri Meyer Lemon Soufflé", detail: "Limoncello crema, wild honey blossom infusion" }
      ],
      timing: "Lunch: 12:30 – 15:30 | Dinner: 18:30 – 22:30",
      dressCode: "Resort Chic"
    },
    {
      name: "The Imperial Cellar",
      badge: "World’s Best Wine List Award",
      cuisine: "Subterranean Vault & Master Sommelier Tastings",
      chef: "Master Sommelier Pierre Deville",
      seating: "Private Vault Room",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
      description:
        "Home to more than 8,500 coveted bottles spanning rare vintages of Romanée-Conti, Château Petrus, and artisanal grower champagnes, our limestone cellar hosts private sommelier-led vertical tastings.",
      menuHighlights: [
        { dish: "Rare Vintage Vertical Pairings", detail: "Pomerol & Burgundy icons dating back to 1961" },
        { dish: "Artisanal European Affinage", detail: "Hand-aged cheeses cured in cave microclimates" },
        { dish: "Grand Cru Champagne Flight", detail: "Dom Pérignon P2, Krug Clos d’Ambonnay, Salon Le Mesnil" },
        { dish: "Ibérico de Bellota 100% Puro", detail: "5-year cured acorn-fed ham, crystal sourdough" }
      ],
      timing: "Tastings: 17:00 – 23:00 (Private booking only)",
      dressCode: "Smart Casual Elegance"
    }
  ];

  const current = venues[activeVenue];

  return (
    <section id="culinary" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
            <span className="text-[#C8A97E] text-xs uppercase tracking-[0.35em] font-medium">
              Culinary Artistry
            </span>
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Haute Gastronomy & <span className="italic text-[#DFC9A8]">Sommelier Curation</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Every dining experience at AURA is an orchestrated celebration of rare provenance, Michelin-starred craft, and unforgettable atmospheric beauty.
          </p>
        </div>

        {/* Venue Selector Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center border border-white/10 bg-[#121212] p-1.5 gap-1">
            {venues.map((venue, idx) => (
              <button
                key={venue.name}
                onClick={() => setActiveVenue(idx)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  activeVenue === idx
                    ? "bg-[#C8A97E] text-[#0A0A0A] font-medium shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Venue Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#121212] border border-white/10 p-6 md:p-10"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 border border-[#C8A97E]/40 px-3.5 py-1.5 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] font-medium">
                  {current.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-white/70 font-light tracking-wide">{current.cuisine}</p>
                <p className="text-sm font-serif text-[#DFC9A8] mt-0.5">{current.chef}</p>
              </div>
            </div>

            {/* Details & Menu Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#C8A97E] tracking-[0.25em] uppercase mb-2">
                  <span>{current.seating}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                  {current.name}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Degustation Highlights */}
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#C8A97E] font-medium mb-4 flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5" />
                  Degustation Course Highlights
                </h4>
                <div className="space-y-3 mb-8">
                  {current.menuHighlights.map((dish, i) => (
                    <div key={i} className="border-b border-white/5 pb-2.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm text-white font-serif">{dish.dish}</span>
                      </div>
                      <p className="text-xs text-white/50 font-light mt-0.5">{dish.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service info & Booking CTA */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs text-white/60 gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C8A97E]" />
                    <span>{current.timing}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Attire:</span> {current.dressCode}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => onOpenReservation(`Table at ${current.name}`)}
                    className="flex-1 bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center cursor-pointer"
                  >
                    Reserve Table at {current.name}
                  </button>
                  <a
                    href="#concierge"
                    className="border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-light text-center transition-colors"
                  >
                    Custom Wine Pairing Inquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

