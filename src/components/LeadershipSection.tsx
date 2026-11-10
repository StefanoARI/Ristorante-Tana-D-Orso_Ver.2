import React from 'react';
import { Award, HeartHandshake, Utensils } from 'lucide-react';
import { PageView } from '../types';

interface LeadershipSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenReservation: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#EDE7DD] text-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
            05 / LA GUIDA
          </span>
          <span className="h-px bg-[#0d0f12]/20 flex-1" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9A9184]">
            I FONDATORI & L'ANIMA DELLA TANA
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#0d0f12]">
            Passione, maestria e accoglienza quotidiana dal 2005.
          </h2>
        </div>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Chef Francesco Testa */}
          <div className="bg-white p-8 sm:p-10 shadow-lg border border-[#0d0f12]/5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold block mb-1">
                    Cucina d'Autore & Ricerca
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0d0f12]">
                    Francesco Testa
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#9A9184] mt-0.5">
                    Chef Patron & Creatore del Menù
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#D1A066]">
                  <Utensils className="w-5 h-5" />
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0f12]/5 flex items-center justify-center p-4">
                <img
                  src="https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/FRANCESCO-250x300.png"
                  alt="Chef Francesco Testa"
                  className="max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="font-sans text-sm sm:text-base text-[#0d0f12]/80 font-light leading-relaxed">
                Alla guida dei fornelli dal giorno dell'apertura nel 2005, Francesco unisce il rigore per la selezione delle carni La Granda e del riso Acquerello all'intuito creativo per i grandi classici: dal celebre Foie Gras spadellato al classico risotto con midollo arrosto.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0d0f12]/10 flex items-center justify-between text-xs text-[#9A9184]">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D1A066]" />
                Oltre 20 anni di alta ristorazione
              </span>
              <span className="font-serif italic text-[#0d0f12]">Borgo di Mustonate</span>
            </div>
          </div>

          {/* Maitre Veronica */}
          <div className="bg-white p-8 sm:p-10 shadow-lg border border-[#0d0f12]/5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold block mb-1">
                    Accoglienza, Sala & Sommelerie
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0d0f12]">
                    Veronica
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#9A9184] mt-0.5">
                    Maitre di Sala & Responsabile Ospitalità
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#D1A066]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0f12]/5 flex items-center justify-center p-4">
                <img
                  src="https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/VERONICA-250x300.png"
                  alt="Veronica Responsabile Ospitalità"
                  className="max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="font-sans text-sm sm:text-base text-[#0d0f12]/80 font-light leading-relaxed">
                Custode della grazia e della precisione con cui ogni ospite viene accolto. Veronica coordina il servizio impeccabile delle sale nobili e la cura della cantina, accompagnando i commensali nella scelta delle etichette e nella definizione di eventi indimenticabili.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0d0f12]/10 flex items-center justify-between text-xs text-[#9A9184]">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D1A066]" />
                Curatela Cantina & Wedding Planner
              </span>
              <span className="font-serif italic text-[#0d0f12]">Borgo di Mustonate</span>
            </div>
          </div>
        </div>

        {/* Call to reservation banner */}
        <div className="mt-16 p-8 sm:p-12 bg-[#0d0f12] text-[#EDE7DD] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
              PRENOTAZIONE TAVOLI
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE7DD]">
              Vivi l’esperienza della Tana d’Orso
            </h3>
            <p className="font-sans text-sm text-[#EDE7DD]/80 font-light">
              Aperto a pranzo (12:15 - 14:00) e a cena (19:15 - 21:30). Chiuso il martedì e mercoledì.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shadow-lg"
            >
              Prenota il tuo Tavolo
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-4 border border-[#EDE7DD]/30 text-[#EDE7DD] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer"
            >
              Consulta il Menù
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
