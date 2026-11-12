import React from 'react';
import { ArrowRight, Calendar, Sparkles, Wine, UtensilsCrossed, Award, Play } from 'lucide-react';
import { PageView } from '../types';

interface HeroSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0d0f12] text-[#EDE7DD] overflow-hidden pt-28 pb-12">
      {/* Background with YouTube Video & Luxury Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base Fallback Image while video streams */}
        <img
          src="https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/DSC_5699_700_701_702_703_tonemapped_R_BANNER.jpg"
          alt="Ristorante Tana d'Orso Borgo di Mustonate"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-40"
          referrerPolicy="no-referrer"
        />

        {/* YouTube Video Background (ID: 1DVY6Rqym0M) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full">
          <iframe
            className="w-full h-full object-cover pointer-events-none scale-110 opacity-75 transition-opacity duration-1000"
            src="https://www.youtube-nocookie.com/embed/1DVY6Rqym0M?autoplay=1&mute=1&loop=1&playlist=1DVY6Rqym0M&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1"
            title="Ristorante Tana d'Orso Video Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
          />
        </div>

        {/* Editorial Gradients for readability & cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/55 to-[#0d0f12]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,15,18,0.8)_100%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto py-12">
        <div className="max-w-4xl space-y-6">
          {/* Editorial Kicker */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#D1A066]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans flex items-center gap-2">
              <span>Borgo di Mustonate · Varese · Dal 2005</span>
            </span>
          </div>

          {/* Large Title - matching video editorial typography */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#EDE7DD]">
            La cucina che dà <br />
            <span className="italic font-light text-[#D1A066]">forma all’emozione.</span>
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#EDE7DD]/80 font-light max-w-2xl leading-relaxed">
            Nel suggestivo borgo rurale di Mustonate, lo Chef Patron Francesco Testa e Veronica accolgono i loro ospiti con una cucina d'autore, i prestigiosi presidi Slow Food e una cantina di oltre duecentocinquanta cru selezionati.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-all duration-300 shadow-lg shadow-[#D1A066]/20 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota un Tavolo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#EDE7DD]/30 text-[#EDE7DD] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#D1A066] hover:text-[#D1A066] transition-all duration-300 backdrop-blur-sm bg-black/20 cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#D1A066]" />
              <span>Esplora il Menù</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Metrics Bar - matching HBA layout bottom strip */}
      <div className="relative z-10 border-t border-[#EDE7DD]/10 bg-[#0d0f12]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#EDE7DD]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#D1A066]">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Capienza</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DD]">150 Coperti</p>
              <p className="text-xs text-[#EDE7DD]/60 font-light">Due piani nobili e giardino</p>
            </div>

            <div className="space-y-1 border-l border-[#EDE7DD]/10 pl-6">
              <div className="flex items-center gap-2 text-[#D1A066]">
                <Wine className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans">La Cantina</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DD]">250+ Etichette</p>
              <p className="text-xs text-[#EDE7DD]/60 font-light">Cru italiani e francesi</p>
            </div>

            <div className="space-y-1 border-l border-[#EDE7DD]/10 pl-6">
              <div className="flex items-center gap-2 text-[#D1A066]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Esclusività</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DD]">1 Matrimonio</p>
              <p className="text-xs text-[#EDE7DD]/60 font-light">Al giorno in totale privacy</p>
            </div>

            <div className="space-y-1 border-l border-[#EDE7DD]/10 pl-6">
              <div className="flex items-center gap-2 text-[#D1A066]">
                <Award className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Eccellenza</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DD]">Slow Food</p>
              <p className="text-xs text-[#EDE7DD]/60 font-light">Fassona La Granda & Acquerello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
