import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Users, Bed, Eye, ArrowUpRight, Sparkles, Check, X } from "lucide-react";

interface AccommodationsProps {
  onOpenReservation: (suiteName?: string) => void;
}

interface Suite {
  id: string;
  name: string;
  category: "all" | "overwater" | "penthouse" | "beachfront";
  headline: string;
  sqm: number;
  sqft: number;
  guests: string;
  beds: string;
  view: string;
  rate: number;
  image: string;
  amenities: string[];
  description: string;
}

const SUITES: Suite[] = [
  {
    id: "presidential-overwater",
    name: "Presidential Overwater Villa",
    category: "overwater",
    headline: "Suspended above crystalline turquoise waters with an infinite sunset horizon.",
    sqm: 520,
    sqft: 5600,
    guests: "6 Guests",
    beds: "3 King Bedrooms",
    view: "Direct Lagoon & Coral Reef",
    rate: 4850,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
    amenities: [
      "Private 25m cantilevered infinity pool",
      "Direct glass-floor lagoon staircase",
      "Dedicated British Butler Institute attendant",
      "Private yacht tender dock & mooring",
      "Sub-Zero sommelier wine repository",
      "Custom Dyson & Bulgari bespoke toiletries"
    ],
    description:
      "Engineered with marine-grade architectural minimalism, the Presidential Overwater Villa spans over 5,600 square feet of indoor-outdoor living. Floor-to-ceiling retractable glass opens directly onto your private plunge pool and sun deck, where personalized starlit dining is orchestrated nightly by your personal butler."
  },
  {
    id: "royal-oceanfront-penthouse",
    name: "Royal Oceanfront Penthouse",
    category: "penthouse",
    headline: "Commanding crowning heights with an unobstructed 360° panorama.",
    sqm: 410,
    sqft: 4410,
    guests: "4 Guests",
    beds: "2 Emperor Master Suites",
    view: "360° Ocean & Archipelago",
    rate: 3900,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    amenities: [
      "Wraparound rooftop terrace with heated hydrotherapy spa",
      "Private in-residence chef finishing kitchen",
      "Steinway & Sons grand piano salon",
      "Automated Lutron circadian architectural illumination",
      "Private direct-access keycard elevator",
      "Bang & Olufsen bespoke acoustic installation"
    ],
    description:
      "Perched atop the sanctuary’s highest point, the Royal Oceanfront Penthouse captures dramatic twilight vistas over the open ocean. Hand-finished travertine, warm walnut joinery, and curated modern sculptures reflect timeless European luxury combined with tropical serenity."
  },
  {
    id: "lagoon-sanctuary-estate",
    name: "Lagoon Sanctuary Estate",
    category: "beachfront",
    headline: "An ultra-private compound framed by lush palm groves and private white sand.",
    sqm: 680,
    sqft: 7320,
    guests: "8 Guests",
    beds: "4 King Suites + Pavilion",
    view: "Private Beach Cove",
    rate: 6500,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
    amenities: [
      "Exclusive private white-sand beach cove",
      "Dual thermal mineral plunge pools",
      "Open-air cinema pavilion under the stars",
      "Dedicated culinary team and mixologist",
      "Rolls-Royce Cullinan resort transfers",
      "Private fitness studio & wellness deck"
    ],
    description:
      "The premier estate in our global portfolio, designed for multi-generational families or dignitaries requiring the pinnacle of discretion and indulgence. Features three independent master guest villas connected by manicured stone walkways surrounding a central open-air dining pavilion."
  },
  {
    id: "cliffside-sovereign-suite",
    name: "Cliffside Sovereign Suite",
    category: "overwater",
    headline: "Dramatic architectural drama perched upon ancient cliffside stone.",
    sqm: 340,
    sqft: 3660,
    guests: "2 Guests",
    beds: "1 Grand King Suite",
    view: "Amalfi Coastal Waves",
    rate: 2950,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    amenities: [
      "Cantilevered sea-view glass soaking tub",
      "Outdoor rain shower overlooking the bay",
      "Complimentary Dom Pérignon vintage welcome",
      "Daily 90-minute in-suite spa massage rituals",
      "Private sun lounger cliff perch",
      "Fireplace salon and library"
    ],
    description:
      "Carved subtly into the natural coastal rock, the Cliffside Sovereign Suite offers an extraordinarily romantic haven. Awaken to the rhythmic cadence of azure waves and savor artisanal breakfasts served on your private cantilever terrace as the morning mist lifts."
  }
];

export function Accommodations({ onOpenReservation }: AccommodationsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "overwater" | "penthouse" | "beachfront">("all");
  const [selectedSuite, setSelectedSuite] = useState<Suite | null>(null);

  const filteredSuites =
    activeTab === "all" ? SUITES : SUITES.filter((s) => s.category === activeTab);

  return (
    <section id="suites" className="py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C8A97E]" />
              <span className="text-[#C8A97E] text-xs uppercase tracking-[0.3em] font-medium">
                Sanctuary Residences
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
              Suites, Villas & <span className="italic text-[#DFC9A8]">Estates</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border border-white/10 p-1 bg-[#121212]">
            {(
              [
                { label: "All Sanctuaries", value: "all" },
                { label: "Overwater Villas", value: "overwater" },
                { label: "Penthouses", value: "penthouse" },
                { label: "Beach Estates", value: "beachfront" }
              ] as const
            ).map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? "bg-[#C8A97E] text-[#0A0A0A] font-medium"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredSuites.map((suite) => (
            <motion.div
              layout
              key={suite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group bg-[#121212] border border-white/10 hover:border-[#C8A97E]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

                {/* Price Badge */}
                <div className="absolute top-5 right-5 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 px-4 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 block">From</span>
                  <span className="font-serif text-lg text-[#C8A97E] font-medium">
                    ${suite.rate.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-white/50 tracking-wider"> / night</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-5 left-5 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C8A97E]/30 px-3 py-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A97E]">
                    {suite.category}
                  </span>
                </div>
              </div>

              {/* Suite Details Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#DFC9A8] transition-colors">
                    {suite.name}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                    {suite.headline}
                  </p>

                  {/* Specification Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 border-y border-white/10 mb-6 text-white/70">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span className="text-xs font-light">{suite.sqft.toLocaleString()} sq ft ({suite.sqm} m²)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span className="text-xs font-light">{suite.guests}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                      <Bed className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span className="text-xs font-light">{suite.beds}</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-8">
                    {suite.amenities.slice(0, 3).map((amenity, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80 font-light">
                        <Check className="w-3.5 h-3.5 text-[#C8A97E] mt-0.5 shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Bar */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenReservation(suite.name)}
                    className="flex-1 bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                  >
                    Reserve Sanctuary
                  </button>
                  <button
                    onClick={() => setSelectedSuite(suite)}
                    className="border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] p-3.5 transition-colors cursor-pointer flex items-center gap-1.5 text-xs uppercase tracking-wider"
                    title="View Details & Amenities"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Suite Details */}
      <AnimatePresence>
        {selectedSuite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#121212] border border-[#C8A97E]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedSuite(null)}
                className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full mb-6 overflow-hidden">
                <img
                  src={selectedSuite.image}
                  alt={selectedSuite.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[#C8A97E] text-[10px] uppercase tracking-[0.3em] font-semibold">
                Private Sanctuary Portfolio
              </span>
              <h3 className="font-serif text-3xl text-white mt-1 mb-3">{selectedSuite.name}</h3>

              <div className="flex items-center gap-6 text-white/70 text-xs py-3 border-y border-white/10 mb-4">
                <span>{selectedSuite.sqft} sq ft</span>
                <span>•</span>
                <span>{selectedSuite.guests}</span>
                <span>•</span>
                <span>{selectedSuite.view}</span>
              </div>

              <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                {selectedSuite.description}
              </p>

              <h4 className="text-[#C8A97E] text-xs uppercase tracking-[0.25em] font-medium mb-3">
                Curated Suite Amenities & Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {selectedSuite.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider block">Nightly Rate</span>
                  <span className="font-serif text-2xl text-[#C8A97E] font-medium">
                    ${selectedSuite.rate.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const suite = selectedSuite.name;
                    setSelectedSuite(null);
                    onOpenReservation(suite);
                  }}
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  Proceed to Reserve
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

