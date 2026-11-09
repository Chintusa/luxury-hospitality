import { useState } from "react";
import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { Accommodations } from "./sections/Accommodations";
import { Dining } from "./sections/Dining";
import { Wellness } from "./sections/Wellness";
import { Experiences } from "./sections/Experiences";
import { Reviews } from "./sections/Reviews";
import { ContactConcierge } from "./sections/ContactConcierge";
import { Footer } from "./sections/Footer";
import { ReservationModal } from "./sections/ReservationModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const handleOpenReservation = (itemName?: string) => {
    setSelectedItem(itemName);
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
    setSelectedItem(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8A97E] selection:text-[#0A0A0A] font-sans antialiased">
      {/* Top Floating Navigation */}
      <Navigation onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenReservation={handleOpenReservation} />
        <Accommodations onOpenReservation={handleOpenReservation} />
        <Dining onOpenReservation={handleOpenReservation} />
        <Wellness onOpenReservation={handleOpenReservation} />
        <Experiences onOpenReservation={handleOpenReservation} />
        <Reviews />
        <ContactConcierge />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation & VIP Dossier Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseReservation}
        initialSelection={selectedItem}
      />
    </div>
  );
}

