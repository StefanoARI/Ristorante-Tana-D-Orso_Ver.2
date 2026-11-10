/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { FullMenuDrawer } from './components/FullMenuDrawer';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { ShowcaseSlider } from './components/ShowcaseSlider';
import { DisciplinesSection } from './components/DisciplinesSection';
import { PerspectivesSection } from './components/PerspectivesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { MenuPage } from './components/MenuPage';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { EventsPage } from './components/EventsPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
    setIsDrawerOpen(false);
  };

  // Keep window title aligned with current view
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: "Ristorante Tana d'Orso - Borgo di Mustonate, Varese",
      menu: "Il Menù & La Cantina - Ristorante Tana d'Orso",
      prenota: "Prenota un Tavolo - Ristorante Tana d'Orso",
      eventi: "Matrimoni & Ricevimenti Esclusivi - Ristorante Tana d'Orso",
      gallery: "Galleria Fotografica - Ristorante Tana d'Orso",
      about: "Chi Siamo & Il Borgo - Ristorante Tana d'Orso",
    };
    document.title = titles[currentView] || "Ristorante Tana d'Orso";
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#EDE7DD] selection:bg-[#D1A066] selection:text-[#0d0f12]">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
        onToggleMenu={() => setIsDrawerOpen(true)}
      />

      {/* Full Screen Menu Drawer - matching the video overlay */}
      <FullMenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

      {/* Main View Router */}
      <main>
        {currentView === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenReservation={handleOpenReservation}
            />
            <WhoWeAreSection onNavigate={handleNavigate} />
            <ShowcaseSlider onNavigate={handleNavigate} />
            <DisciplinesSection onNavigate={handleNavigate} />
            <PerspectivesSection onNavigate={handleNavigate} />
            <LeadershipSection
              onNavigate={handleNavigate}
              onOpenReservation={handleOpenReservation}
            />
          </>
        )}

        {currentView === 'menu' && (
          <MenuPage onOpenReservation={handleOpenReservation} />
        )}

        {currentView === 'prenota' && (
          <div className="pt-24 min-h-screen bg-[#0d0f12]">
            <ReservationSection isModal={false} />
          </div>
        )}

        {currentView === 'eventi' && (
          <EventsPage onOpenReservation={handleOpenReservation} />
        )}

        {currentView === 'gallery' && (
          <GalleryPage />
        )}

        {currentView === 'about' && (
          <AboutPage onOpenReservation={handleOpenReservation} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />
    </div>
  );
}
