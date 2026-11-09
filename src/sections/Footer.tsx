import { useState } from "react";
import { ArrowRight, Star, ShieldCheck, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#070707] border-t border-white/10 text-white pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Newsletter & Brand Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#C8A97E] flex items-center justify-center rotate-45">
                <span className="-rotate-45 text-[#C8A97E] font-serif text-xs font-semibold">A</span>
              </div>
              <span className="font-serif text-2xl uppercase tracking-[0.25em]">AURA</span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              A private collective of secluded world-class sanctuaries where nature's purest splendor converges with uncompromising bespoke luxury.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium block mb-2">
              The Sovereign Gazette
            </span>
            <p className="text-sm font-serif text-white/90 mb-4">
              Receive private invitations to seasonal estate releases, rare cellar debuts, and exclusive member voyages.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#C8A97E] py-3">
                <Check className="w-4 h-4" />
                <span>Your invitation dispatch has been noted with distinction.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your confidential email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#121212] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C8A97E] hover:bg-[#DFC9A8] text-[#0A0A0A] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shrink-0"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10 text-xs">
          <div>
            <h4 className="text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-4 text-[10px]">
              Global Sanctuaries
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">North Malé Atoll, Maldives</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ravello Cliffside, Amalfi Coast</li>
              <li className="hover:text-white transition-colors cursor-pointer">St. Moritz Alpine Palace</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kyoto Arashiyama (2027)</li>
              <li className="hover:text-white transition-colors cursor-pointer">St. Barth Private Cays</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-4 text-[10px]">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li className="hover:text-white transition-colors"><a href="#suites">Presidential Overwater Villa</a></li>
              <li className="hover:text-white transition-colors"><a href="#suites">Royal Oceanfront Penthouse</a></li>
              <li className="hover:text-white transition-colors"><a href="#suites">Lagoon Sanctuary Estate</a></li>
              <li className="hover:text-white transition-colors"><a href="#suites">Cliffside Sovereign Suite</a></li>
              <li className="hover:text-white transition-colors"><a href="#suites">Private Island Buyout</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-4 text-[10px]">
              Experiences & Dining
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li className="hover:text-white transition-colors"><a href="#culinary">L'Ombre (3-Star Michelin)</a></li>
              <li className="hover:text-white transition-colors"><a href="#culinary">Aqua Marina Overwater</a></li>
              <li className="hover:text-white transition-colors"><a href="#culinary">The Imperial Cellar</a></li>
              <li className="hover:text-white transition-colors"><a href="#wellness">Elysian Spa & Thermal Baths</a></li>
              <li className="hover:text-white transition-colors"><a href="#experiences">Riva Superyacht Charters</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-4 text-[10px]">
              Private Office & Legal
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li className="hover:text-white transition-colors"><a href="#concierge">Les Clefs d'Or Concierge</a></li>
              <li className="hover:text-white transition-colors cursor-pointer">Diplomatic Protocol Desk</li>
              <li className="hover:text-white transition-colors cursor-pointer">Environmental Stewardship</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy & Confidentiality</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Residence</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-white/40 font-light gap-4">
          <p>© 2026 AURA Sanctuary & Residences Worldwide. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Verified 5-Star Forbes Hospitality</span>
            <span>•</span>
            <span>Virtuoso Preferred Partner</span>
            <span>•</span>
            <span>Relais & Châteaux Associate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

