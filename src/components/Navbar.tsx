import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Calendar, Menu as MenuIcon, Phone } from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenReservation: () => void;
  onToggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenReservation,
  onToggleMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Il Menù' },
    { id: 'prenota', label: 'Prenota un Tavolo' },
    { id: 'eventi', label: 'Eventi & Nozze' },
    { id: 'gallery', label: 'Galleria' },
    { id: 'about', label: 'La Nostra Storia' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0d0f12]/90 via-[#0d0f12]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo (exclusively from attached HTML, text removed as requested) */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0 py-1"
          aria-label="Ristorante Tana d'Orso"
        >
          <img
            src={RESTAURANT_INFO.logoUrl}
            alt="Ristorante Tana d'Orso"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Zone 2: Navigation Links (single line, no capsules, subtle underline) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.15em] uppercase font-medium text-[#B8AF9F]">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive ? 'text-[#EDE7DD] font-semibold' : 'hover:text-[#EDE7DD]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D1A066] transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Drawer Menu Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#A89E8D] hover:text-[#EDE7DD] transition-colors"
            title="Chiama il ristorante"
          >
            <Phone className="w-3.5 h-3.5 text-[#D1A066]" />
            <span className="hidden xl:inline">{RESTAURANT_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium text-[#111317] bg-[#D1A066] hover:bg-[#E2B37A] rounded-none transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Prenota</span>
          </button>

          <button
            onClick={onToggleMenu}
            className="p-2 text-[#EDE7DD] hover:text-[#D1A066] transition-colors cursor-pointer flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium"
            aria-label="Apri menu di navigazione"
          >
            <MenuIcon className="w-5 h-5" />
            <span className="hidden md:inline">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
