import React from 'react';
import { PageView } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { X, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FullMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenReservation: () => void;
}

export const FullMenuDrawer: React.FC<FullMenuDrawerProps> = ({
  isOpen,
  onClose,
  currentView,
  onNavigate,
  onOpenReservation,
}) => {
  if (!isOpen) return null;

  const links: { id: PageView; num: string; label: string; desc: string }[] = [
    {
      id: 'home',
      num: '01',
      label: 'Home',
      desc: 'La visione, il borgo secolare e l’accoglienza d’autore.',
    },
    {
      id: 'menu',
      num: '02',
      label: 'Il Menù del Mese',
      desc: 'Antipasti, risotti Acquerello, carni piemontesi e specialità al Foie Gras.',
    },
    {
      id: 'prenota',
      num: '03',
      label: 'Prenotazione Tavoli',
      desc: 'Riserva il tuo tavolo per pranzo o cena con conferma immediata.',
    },
    {
      id: 'eventi',
      num: '04',
      label: 'Matrimoni & Ricevimenti',
      desc: 'Unico matrimonio al giorno, sala convegni multimediale da 150 coperti.',
    },
    {
      id: 'gallery',
      num: '05',
      label: 'Galleria Fotografica',
      desc: 'Scorci delle sale nobili, del giardino e i piatti iconici dello chef.',
    },
    {
      id: 'about',
      num: '06',
      label: 'La Nostra Storia',
      desc: 'Francesco Testa & Veronica: vent’anni di passione culinaria dal 2005.',
    },
  ];

  const handleLinkClick = (id: PageView) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0a0c0f]/98 backdrop-blur-xl text-[#EDE7DD] overflow-y-auto animate-fadeIn"
    >
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-white/10">
        <div className="py-1">
          <img
            src={RESTAURANT_INFO.logoUrl}
            alt="Ristorante Tana d'Orso"
            className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-95"
            referrerPolicy="no-referrer"
          />
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#EDE7DD] hover:text-[#D1A066] transition-colors cursor-pointer py-2 px-3 border border-white/15 hover:border-[#D1A066]"
        >
          <span>Chiudi</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Drawer Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Navigation Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D1A066] block font-sans">
            Navigazione Principale
          </span>

          <nav className="divide-y divide-white/10">
            {links.map((link) => {
              const isCurrent = currentView === link.id;
              return (
                <div
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="group py-4 sm:py-5 flex items-start justify-between cursor-pointer transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-[#8C8375] tracking-wider">
                        {link.num}
                      </span>
                      <h2
                        className={`font-serif text-2xl sm:text-3xl lg:text-4xl transition-colors ${
                          isCurrent
                            ? 'text-[#D1A066]'
                            : 'text-[#EDE7DD] group-hover:text-[#D1A066]'
                        }`}
                      >
                        {link.label}
                      </h2>
                    </div>
                    <p className="text-xs text-[#9E9587] font-sans pl-8 max-w-md hidden sm:block">
                      {link.desc}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 text-[#8C8375] transition-transform group-hover:translate-x-2 group-hover:text-[#D1A066] mt-2 ${
                      isCurrent ? 'text-[#D1A066]' : ''
                    }`}
                  />
                </div>
              );
            })}
          </nav>
        </div>

        {/* Info & Fast Reservation Column */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 space-y-8">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D1A066] block font-sans">
              Informazioni & Contatti
            </span>

            <div className="space-y-4 text-xs font-sans text-[#EDE7DD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D1A066] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{RESTAURANT_INFO.name}</p>
                  <p className="text-[#9E9587]">{RESTAURANT_INFO.address}</p>
                  <p className="text-[#9E9587]">Presso il suggestivo Lago di Varese</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D1A066] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-[#D1A066] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D1A066] shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="hover:text-[#D1A066] transition-colors"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#D1A066] shrink-0 mt-0.5" />
                <div className="text-[#9E9587] leading-relaxed">
                  <p className="text-[#EDE7DD] font-medium">Orari di Servizio:</p>
                  <p>Pranzo: 12:15 – 14:00 · Cena: 19:15 – 21:30</p>
                  <p className="text-[#E07A5F]">Chiuso Martedì e Mercoledì</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Booking Callout Box */}
          <div className="p-6 bg-white/[0.03] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl text-[#EDE7DD]">
              Vivi l’Esperienza alla Tana
            </h3>
            <p className="text-xs text-[#9E9587] leading-relaxed">
              Assapora la cucina dello Chef Francesco Testa e le oltre 250 etichette della cantina in una location fuori dal tempo.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full mt-2 py-3 bg-[#D1A066] text-[#0d0f12] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#E2B37A] transition-colors cursor-pointer"
            >
              Prenota un Tavolo Online
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-[#787063] flex justify-between items-center">
            <span>{RESTAURANT_INFO.company}</span>
            <span>{RESTAURANT_INFO.vat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
