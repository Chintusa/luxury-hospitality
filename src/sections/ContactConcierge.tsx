import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, MessageSquare, CheckCircle2 } from "lucide-react";

export function ContactConcierge() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sanctuary: "AURA North Malé Atoll, Maldives",
    arrival: "",
    guests: "2 Guests",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="concierge" className="py-28 bg-[#0A0A0A] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Concierge Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#C8A97E]" />
                <span className="text-[#C8A97E] text-xs uppercase tracking-[0.3em] font-medium">
                  Les Clefs d'Or Concierge
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-6">
                Your Personal <br />
                <span className="italic text-[#DFC9A8]">Curator of Desires</span>
              </h2>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                Prior to your arrival, our Chief Concierge will coordinate every dimension of your journey—from direct tarmac seaplane transfers and personalized wine preferences to bespoke offshore island expeditions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Direct International Desk</p>
                    <p className="font-serif text-base text-white">+1 (800) 882-AURA</p>
                    <p className="text-xs text-white/60">+39 089 932 4000 (Mediterranean Bureau)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Private Correspondence</p>
                    <p className="font-serif text-base text-white">concierge@auraresidences.luxury</p>
                    <p className="text-xs text-white/60">Response guaranteed within 30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Primary Port & Sanctuary</p>
                    <p className="font-serif text-base text-white">North Malé Atoll, Republic of Maldives</p>
                    <p className="text-xs text-white/60">GPS: 4°11'38.2"N 73°30'41.1"E</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Service Availability</p>
                    <p className="font-serif text-base text-white">24 Hours / 365 Days</p>
                    <p className="text-xs text-[#C8A97E]">Continuous VIP Dispatch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 text-xs text-white/60">
              <ShieldCheck className="w-5 h-5 text-[#C8A97E] shrink-0" />
              <span>Strict non-disclosure agreements honored for all VIP and diplomatic entourages.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 sm:p-12 relative">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-none border border-[#C8A97E] flex items-center justify-center rotate-45 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#C8A97E] -rotate-45" />
                </div>
                <h3 className="font-serif text-3xl text-white">Inquiry Received with Honor</h3>
                <p className="text-white/70 text-sm max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {formData.name || "valued guest"}. Your dedicated Chief Concierge has received your dossier and will reach out via confidential contact shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 border border-white/20 hover:border-[#C8A97E] text-white px-6 py-3 text-xs uppercase tracking-widest transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-1">Confidential Concierge Inquiry</h3>
                  <p className="text-xs text-white/50 font-light">
                    Direct access to our senior reservation desk and personal travel directors.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Full Title & Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lord Julian Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Confidential Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="julian@sterlingholdings.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Direct Telephone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Preferred Sanctuary Location
                    </label>
                    <select
                      value={formData.sanctuary}
                      onChange={(e) => setFormData({ ...formData, sanctuary: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    >
                      <option value="AURA North Malé Atoll, Maldives">AURA North Malé Atoll, Maldives</option>
                      <option value="AURA Ravello Cliffside, Amalfi Coast">AURA Ravello Cliffside, Amalfi Coast</option>
                      <option value="AURA St. Moritz Alpine Palace, Switzerland">AURA St. Moritz Alpine Palace, Switzerland</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Desired Arrival Window
                    </label>
                    <input
                      type="date"
                      value={formData.arrival}
                      onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                      Party Composition
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    >
                      <option value="1 Guest (Solo Retreat)">1 Guest (Solo Retreat)</option>
                      <option value="2 Guests (Couples Sanctuary)">2 Guests (Couples Sanctuary)</option>
                      <option value="4 Guests (Family Villa)">4 Guests (Family Villa)</option>
                      <option value="6-10 Guests (Private Estate Compound)">6-10 Guests (Private Estate Compound)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] block">
                    Special Requests & Bespoke Preferences
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Private helicopter apron arrival, sommelier preferences, hypoallergenic bedding, yacht charters..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5 text-[#0A0A0A]" />
                  <span>Transmit Confidential Dossier</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

