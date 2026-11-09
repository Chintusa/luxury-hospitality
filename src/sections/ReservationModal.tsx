import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Sparkles, Check, ArrowRight, ShieldCheck, CreditCard, ChevronRight } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}

export function ReservationModal({ isOpen, onClose, initialSelection }: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selection, setSelection] = useState(initialSelection || "Presidential Overwater Villa");
  const [checkIn, setCheckIn] = useState("2026-06-15");
  const [checkOut, setCheckOut] = useState("2026-06-22");
  const [guests, setGuests] = useState("2 Adults");
  
  // Bespoke VIP Add-ons
  const [addons, setAddons] = useState({
    seaplane: true,
    domPerignon: true,
    privateChef: false,
    spaPass: true
  });

  // Guest Details
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    email: "",
    phone: "",
    requests: ""
  });

  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (initialSelection) {
      setSelection(initialSelection);
    }
  }, [initialSelection]);

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "AURA-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(4);
  };

  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return isNaN(diffDays) || diffDays <= 0 ? 7 : diffDays;
    } catch {
      return 7;
    }
  };

  const getBaseNightlyRate = () => {
    if (selection.includes("Presidential Overwater")) return 4850;
    if (selection.includes("Royal Oceanfront")) return 3900;
    if (selection.includes("Lagoon Sanctuary")) return 6500;
    if (selection.includes("Cliffside Sovereign")) return 2950;
    return 3500;
  };

  const nights = calculateNights();
  const baseRate = getBaseNightlyRate();
  const suiteTotal = nights * baseRate;
  const addonTotal =
    (addons.seaplane ? 1200 : 0) +
    (addons.domPerignon ? 450 : 0) +
    (addons.privateChef ? nights * 800 : 0) +
    (addons.spaPass ? 1100 : 0);
  const grandTotal = suiteTotal + addonTotal;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-full max-w-3xl bg-[#121212] border border-[#C8A97E]/30 shadow-2xl p-6 sm:p-10 my-auto text-white overflow-hidden max-h-[92vh] flex flex-col justify-between"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-[#C8A97E] rotate-45 flex items-center justify-center">
                  <span className="-rotate-45 text-[9px] text-[#C8A97E] font-serif font-bold">A</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium">
                  AURA Sanctuary Reservation
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white mt-1">
                {step === 4 ? "Sanctuary Reserved" : "Curate Your Stay"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Stepper Indicator */}
          {step !== 4 && (
            <div className="grid grid-cols-3 gap-2 py-4 border-b border-white/5 text-[10px] uppercase tracking-wider text-center shrink-0">
              <div
                className={`py-1.5 border-b-2 transition-colors ${
                  step >= 1 ? "border-[#C8A97E] text-[#C8A97E]" : "border-white/10 text-white/30"
                }`}
              >
                1. Sanctuary & Dates
              </div>
              <div
                className={`py-1.5 border-b-2 transition-colors ${
                  step >= 2 ? "border-[#C8A97E] text-[#C8A97E]" : "border-white/10 text-white/30"
                }`}
              >
                2. Bespoke VIP Additions
              </div>
              <div
                className={`py-1.5 border-b-2 transition-colors ${
                  step >= 3 ? "border-[#C8A97E] text-[#C8A97E]" : "border-white/10 text-white/30"
                }`}
              >
                3. Guest Dossier
              </div>
            </div>
          )}

          {/* Step 1: Selection & Dates */}
          {step === 1 && (
            <div className="py-6 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">
                  Sanctuary Accommodation / Experience
                </label>
                <select
                  value={selection}
                  onChange={(e) => setSelection(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                >
                  <option value="Presidential Overwater Villa">Presidential Overwater Villa ($4,850/nt)</option>
                  <option value="Royal Oceanfront Penthouse">Royal Oceanfront Penthouse ($3,900/nt)</option>
                  <option value="Lagoon Sanctuary Estate">Lagoon Sanctuary Estate ($6,500/nt)</option>
                  <option value="Cliffside Sovereign Suite">Cliffside Sovereign Suite ($2,950/nt)</option>
                  <option value="Fine Dining: L'Ombre 12-Course Degustation">Fine Dining: L'Ombre 12-Course Degustation</option>
                  <option value="Wellness: The Golden Aura Cellular Ritual">Wellness: The Golden Aura Cellular Ritual</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Arrival Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Departure Date</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Party Size</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="3-4 Adults">3 - 4 Adults</option>
                  <option value="Family (2 Adults, 2 Children)">Family (2 Adults, 2 Children)</option>
                  <option value="Private Entourage (5+ Guests)">Private Entourage (5+ Guests)</option>
                </select>
              </div>

              <div className="p-4 bg-[#1A1A1A] border border-white/5 flex justify-between items-center text-xs">
                <span className="text-white/60">Estimated Stay: {nights} Nights</span>
                <span className="font-serif text-[#C8A97E] text-base">${suiteTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Continue to Add-Ons</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: VIP Add-ons */}
          {step === 2 && (
            <div className="py-6 space-y-6 overflow-y-auto">
              <div className="space-y-3">
                <div
                  onClick={() => setAddons({ ...addons, seaplane: !addons.seaplane })}
                  className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                    addons.seaplane ? "border-[#C8A97E] bg-[#1A1A1A]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="font-serif text-sm text-white">VIP Direct Seaplane / Jet Transfer</p>
                    <p className="text-xs text-white/50">Private twin-otter direct tarmac transfer + lounge</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#C8A97E] font-serif block">+$1,200</span>
                    <span className="text-[10px] text-white/40">{addons.seaplane ? "Included" : "Add"}</span>
                  </div>
                </div>

                <div
                  onClick={() => setAddons({ ...addons, domPerignon: !addons.domPerignon })}
                  className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                    addons.domPerignon ? "border-[#C8A97E] bg-[#1A1A1A]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="font-serif text-sm text-white">Vintage Dom Pérignon P2 Welcome</p>
                    <p className="text-xs text-white/50">Chilled in-suite with Beluga caviar canapés</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#C8A97E] font-serif block">+$450</span>
                    <span className="text-[10px] text-white/40">{addons.domPerignon ? "Included" : "Add"}</span>
                  </div>
                </div>

                <div
                  onClick={() => setAddons({ ...addons, privateChef: !addons.privateChef })}
                  className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                    addons.privateChef ? "border-[#C8A97E] bg-[#1A1A1A]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="font-serif text-sm text-white">Dedicated In-Villa Master Chef</p>
                    <p className="text-xs text-white/50">Daily bespoke breakfasts and multi-course sunset dinners</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#C8A97E] font-serif block">+$800 / night</span>
                    <span className="text-[10px] text-white/40">{addons.privateChef ? "Included" : "Add"}</span>
                  </div>
                </div>

                <div
                  onClick={() => setAddons({ ...addons, spaPass: !addons.spaPass })}
                  className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                    addons.spaPass ? "border-[#C8A97E] bg-[#1A1A1A]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="font-serif text-sm text-white">Unlimited Elysian Spa & Hydrotherapy Access</p>
                    <p className="text-xs text-white/50">Daily private thermal circuits and custom botanical steam</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#C8A97E] font-serif block">+$1,100</span>
                    <span className="text-[10px] text-white/40">{addons.spaPass ? "Included" : "Add"}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-white/60 hover:text-white text-xs uppercase tracking-wider"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Continue to Guest Dossier</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Guest Dossier Form */}
          {step === 3 && (
            <form onSubmit={handleCompleteBooking} className="py-6 space-y-4 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Julian Sterling"
                    value={guestDetails.name}
                    onChange={(e) => setGuestDetails({ ...guestDetails, name: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="julian@sterling.com"
                    value={guestDetails.email}
                    onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">Contact Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={guestDetails.phone}
                  onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">
                  Dietary & In-Suite Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Gluten-free preferences, extra feather-free pillows, champagne chilling temp..."
                  value={guestDetails.requests}
                  onChange={(e) => setGuestDetails({ ...guestDetails, requests: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A97E] resize-none"
                />
              </div>

              {/* Total Calculation breakdown */}
              <div className="bg-[#1A1A1A] p-4 border border-[#C8A97E]/30 space-y-1 text-xs">
                <div className="flex justify-between text-white/60">
                  <span>Sanctuary ({nights} Nights):</span>
                  <span>${suiteTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Curated VIP Additions:</span>
                  <span>${addonTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white font-serif text-base pt-2 border-t border-white/10">
                  <span>Estimated Total:</span>
                  <span className="text-[#C8A97E]">${grandTotal.toLocaleString()} USD</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-white/60 hover:text-white text-xs uppercase tracking-wider"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
                >
                  Confirm & Transmit Reservation
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation Screen */}
          {step === 4 && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto border border-[#C8A97E] flex items-center justify-center rotate-45 mb-4">
                <Check className="w-8 h-8 text-[#C8A97E] -rotate-45" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] font-medium">
                Dossier Registered
              </span>
              <h4 className="font-serif text-3xl text-white">We Await Your Arrival</h4>
              <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                Your reservation dossier has been assigned to your dedicated private butler. A confidential itinerary confirmation has been dispatched to {guestDetails.email || "your email"}.
              </p>

              <div className="inline-block bg-[#1A1A1A] border border-white/10 px-6 py-3 my-4">
                <span className="text-[10px] uppercase tracking-widest text-white/40 block">Dossier Reference</span>
                <span className="font-mono text-sm text-[#C8A97E] tracking-wider font-semibold">{bookingRef}</span>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

