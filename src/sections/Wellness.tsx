import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartPulse, Droplets, Moon, Check, ArrowRight } from "lucide-react";

interface WellnessProps {
  onOpenReservation: (treatmentName?: string) => void;
}

export function Wellness({ onOpenReservation }: WellnessProps) {
  const [selectedRitual, setSelectedRitual] = useState<string>("The Golden Aura Cellular Ritual");

  const rituals = [
    {
      title: "The Golden Aura Cellular Ritual",
      duration: "120 Minutes",
      price: "$650",
      focus: "Rejuvenation & Radiance",
      description:
        "Infused with 24-karat bio-available gold leaves, rare cold-pressed Moroccan neroli oils, and diamond dust micro-exfoliation to restore luminous cellular vitality."
    },
    {
      title: "Deep Marine Hydro-Detox Sanctuary",
      duration: "90 Minutes",
      price: "$480",
      focus: "Detoxification & Muscle Recovery",
      description:
        "Harvested oceanic algae wrap followed by warm sea-salt Vichy hydrotherapy and targeted neuromuscular alignment under rhythmic warm rainfall."
    },
    {
      title: "Tibetan Resonance & Sound Bath",
      duration: "75 Minutes",
      price: "$390",
      focus: "Mental Clarity & Emotional Balance",
      description:
        "Master practitioner-led vibrational frequency tuning utilizing hand-hammered 7-metal singing bowls, accompanied by warm frankincense temple oil anointing."
    },
    {
      title: "Circadian Reset & Sleep Restoration",
      duration: "90 Minutes",
      price: "$450",
      focus: "Deep REM Induction",
      description:
        "Formulated for international travelers navigating time zone transitions. Combines lavender steam inhalation, cranial acupressure, and magnesium bath infusion."
    }
  ];

  const pillars = [
    {
      icon: Droplets,
      title: "Thermal Hydrotherapy Circuit",
      desc: "Finnish cedar saunas, Himalayan pink crystal salt caves, and cold-plunge pools at 10°C."
    },
    {
      icon: Sparkles,
      title: "Swiss Cellular Science",
      desc: "Exclusive regional residency with Valmont & Biologique Recherche anti-aging protocols."
    },
    {
      icon: Moon,
      title: "Open-Air Water Pavilions",
      desc: "Suspended massage salas over calm turquoise lagoons with real-time acoustic tide therapy."
    },
    {
      icon: HeartPulse,
      title: "Longevity & Ayurvedic Alchemy",
      desc: "One-on-one diagnostic body constitution profiling and daily dawn yoga sessions."
    }
  ];

  return (
    <section id="wellness" className="py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C8A97E]" />
            <span className="text-[#C8A97E] text-xs uppercase tracking-[0.3em] font-medium">
              Sanctuary of Vitality
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Elysian Spa & <span className="italic text-[#DFC9A8]">Hydrotherapy Sanctuary</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
            A serene refuge crafted to harmonize the spirit, rejuvenate the body, and awaken transcendental tranquility through ancient botanical secrets and cutting-edge cellular rejuvenation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#C8A97E]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 border border-[#C8A97E]/40 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#C8A97E]" />
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Treatment Menu Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#121212] border border-white/10 p-6 md:p-12 items-center">
          {/* Ritual List */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] text-[#C8A97E] uppercase tracking-[0.3em] font-semibold block mb-2">
              Signature Spa Menu
            </span>
            <div className="space-y-4">
              {rituals.map((ritual) => {
                const isSelected = selectedRitual === ritual.title;
                return (
                  <div
                    key={ritual.title}
                    onClick={() => setSelectedRitual(ritual.title)}
                    className={`p-5 border transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#C8A97E] bg-[#1A1A1A]"
                        : "border-white/10 bg-transparent hover:border-white/30"
                    }`}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-serif text-lg text-white">{ritual.title}</h4>
                      <span className="font-serif text-base text-[#C8A97E]">{ritual.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-white/50 tracking-wider uppercase mb-2">
                      <span>{ritual.duration}</span>
                      <span>•</span>
                      <span className="text-[#DFC9A8]">{ritual.focus}</span>
                    </div>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {ritual.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Spa Imagery & Direct Booking */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Spa Sanctuary Therapy Ritual"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium block">
                  Private Lagoon Sala
                </span>
                <p className="font-serif text-lg text-white">Holistic Aromatherapy & Hot River Stones</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 border border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-1">
                Selected Experience
              </span>
              <h5 className="font-serif text-xl text-white mb-2">{selectedRitual}</h5>
              <p className="text-xs text-white/60 mb-6 font-light">
                Complimentary pre-treatment thermal hydrotherapy and vitality tea ceremony included.
              </p>
              <button
                onClick={() => onOpenReservation(`Spa: ${selectedRitual}`)}
                className="w-full bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Spa Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

