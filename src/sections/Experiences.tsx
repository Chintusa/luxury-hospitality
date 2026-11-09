import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Ship, Sun, Sparkles, MapPin, ArrowRight } from "lucide-react";

interface ExperiencesProps {
  onOpenReservation: (experienceName?: string) => void;
}

export function Experiences({ onOpenReservation }: ExperiencesProps) {
  const experiences = [
    {
      title: "Private Superyacht Horizon Charter",
      tag: "Maritime Odyssey",
      duration: "4 - 8 Hours",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      description:
        "Embark on a private 98-foot Riva Dolceriva motor yacht. Navigate secret turquoise coves, swim with bioluminescent manta rays, and enjoy chilled vintage champagne as the sun dips below the ocean rim.",
      highlights: ["Private onboard chef & sommelier", "Submersible seabob diving equipment", "Custom sunset itinerary"]
    },
    {
      title: "Archipelago Helicopter Flight & Sandbank Picnic",
      tag: "Aviation Discovery",
      duration: "3 Hours",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Soar over pristine coral atolls in a twin-turbine luxury Airbus helicopter. Touch down on an untouched tidal sandbank where a bespoke shaded pavilion and seafood banquet await.",
      highlights: ["Twin-engine VIP executive transport", "Artisanal caviar & raw bar", "Dedicated marine biologist guide"]
    },
    {
      title: "Private Candlelit Atoll Stargazing Dinner",
      tag: "Culinary Romance",
      duration: "Evening (4 Hours)",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      description:
        "An isolated sand cay illuminated solely by 300 beeswax torches and the celestial vault. Relish a bespoke 6-course tasting menu paired with a resident astronomer’s deep-sky telescope tour.",
      highlights: ["300 glowing torches on sand", "Resident optical astronomer", "Personalized live acoustic harpist"]
    },
    {
      title: "Ancient Heritage Estate & Grand Cru Vaults",
      tag: "Culture & Terroir",
      duration: "Full-Day Journey",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=85",
      description:
        "Chauffeured in an antique Rolls-Royce to private Renaissance villas and historic olive groves. Experience private barrel tastings with centuries-old winemaking dynasties rarely open to the public.",
      highlights: ["Private access to family cellars", "Black truffle hunting with canine masters", "Heirloom olive oil pressings"]
    }
  ];

  return (
    <section id="experiences" className="py-28 bg-[#0A0A0A] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C8A97E]" />
              <span className="text-[#C8A97E] text-xs uppercase tracking-[0.3em] font-medium">
                Unforgettable Memories
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
              Curated Private <span className="italic text-[#DFC9A8]">Pursuits</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md font-light leading-relaxed">
            Tailored itineraries curated exclusively by our Chief Concierge, granting privileged access to the world’s most pristine aquatic and terrestrial wonders.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#121212] border border-white/10 hover:border-[#C8A97E]/50 transition-all duration-500 overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 border border-[#C8A97E]/40 px-3 py-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
                    {exp.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 px-3 py-1 text-white/70 text-xs">
                  {exp.duration}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#DFC9A8] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-light">
                        <Sparkles className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenReservation(`Experience: ${exp.title}`)}
                  className="w-full py-3.5 border border-white/20 hover:border-[#C8A97E] text-white hover:text-[#C8A97E] hover:bg-[#C8A97E]/5 text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer font-light"
                >
                  <span>Inquire Private Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A97E]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

