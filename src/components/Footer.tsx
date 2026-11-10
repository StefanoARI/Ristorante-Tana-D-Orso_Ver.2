import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUp, UtensilsCrossed, Wine, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  // Current day check
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 2 is Tuesday, 3 is Wednesday
  const isClosedToday = currentDayIndex === 2 || currentDayIndex === 3;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-[#EDE7DD] border-t border-[#EDE7DD]/10 relative">
      {/* Upper Footer: Status Bar */}
      <div className="border-b border-[#EDE7DD]/10 bg-[#0d0f12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isClosedToday ? 'bg-amber-500 animate-pulse' : 'bg-emerald-400 animate-pulse'
              }`}
            />
            <span className="text-xs uppercase tracking-widest font-sans font-medium">
              {isClosedToday ? (
                <span className="text-[#EDE7DD]/80">
                  Oggi il ristorante è <strong className="text-amber-400">CHIUSO</strong> (Riposo settimanale martedì/mercoledì)
                </span>
              ) : (
                <span className="text-[#EDE7DD]/80">
                  Oggi <strong className="text-emerald-400">APERTO</strong> · Pranzo 12:15 - 14:00 · Cena 19:15 - 21:30
                </span>
              )}
            </span>
          </div>

          <button
            onClick={onOpenReservation}
            className="text-xs uppercase tracking-[0.2em] text-[#D1A066] hover:text-[#E5B57C] transition-colors font-semibold flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Prenota Online 24/7</span>
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Narrative with authentic logo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <img
                src={RESTAURANT_INFO.footerLogoUrl}
                alt="Ristorante Tana d'Orso"
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D1A066] font-semibold block">
                Borgo di Mustonate · Varese dal 2005
              </span>
            </div>
            <p className="font-sans text-sm text-[#EDE7DD]/70 font-light leading-relaxed">
              Cucina che dà forma all’emozione. Fondato nel 2005 da Chef Francesco Testa e Veronica: eccellenza delle carni Fassona La Granda, riso Acquerello, foie gras e una cantina con oltre 250 cru.
            </p>
            <p className="text-xs text-[#9A9184]">
              {RESTAURANT_INFO.company} · {RESTAURANT_INFO.vat}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D1A066] font-semibold block">
              Navigazione
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#EDE7DD]/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Il Menù & I Vini
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prenota')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Prenota un Tavolo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eventi')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Matrimoni & Ricevimenti
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Galleria Fotografica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D1A066] transition-colors cursor-pointer text-left"
                >
                  Chi Siamo & Borgo
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D1A066] font-semibold block">
              Orari di Apertura
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#EDE7DD]/80 font-light">
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5">
                <span>Lunedì</span>
                <span className="text-[#EDE7DD]">12:15-14 · 19:15-21:30</span>
              </li>
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5 text-[#9A9184]">
                <span>Martedì</span>
                <span className="text-amber-400 font-medium">CHIUSO</span>
              </li>
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5 text-[#9A9184]">
                <span>Mercoledì</span>
                <span className="text-amber-400 font-medium">CHIUSO</span>
              </li>
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5">
                <span>Giovedì</span>
                <span className="text-[#EDE7DD]">12:15-14 · 19:15-21:30</span>
              </li>
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5">
                <span>Venerdì</span>
                <span className="text-[#EDE7DD]">12:15-14 · 19:15-21:30</span>
              </li>
              <li className="flex justify-between border-b border-[#EDE7DD]/10 pb-1.5">
                <span>Sabato</span>
                <span className="text-[#EDE7DD]">12:15-14 · 19:15-21:30</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Domenica</span>
                <span className="text-[#EDE7DD]">12:15-14 · 19:15-21:30</span>
              </li>
            </ul>
          </div>

          {/* Contacts & Location */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D1A066] font-semibold block">
              Contatti & Sede
            </span>
            <div className="space-y-3 text-xs text-[#EDE7DD]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D1A066] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address}
                  <br />
                  <span className="text-[#9A9184]">Due ampi parcheggi riservati per gli ospiti</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D1A066] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#D1A066] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D1A066] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#D1A066] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-3 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer text-center"
              >
                Prenota un Tavolo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EDE7DD]/10 py-6 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9184]">
          <p>© {new Date().getFullYear()} Ristorante Tana d’Orso - Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <span>Design editoriale ispirato a Borgo di Mustonate</span>
            <button
              onClick={scrollToTop}
              aria-label="Torna all'inizio"
              className="flex items-center gap-2 text-[#EDE7DD] hover:text-[#D1A066] transition-colors cursor-pointer"
            >
              <span>Inizio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
