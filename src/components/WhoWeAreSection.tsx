import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { CHEF_QUOTE, RESTAURANT_INFO } from '../data/restaurantData';
import { PageView } from '../types';

interface WhoWeAreSectionProps {
  onNavigate: (view: PageView) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#EDE7DD] text-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Number Index */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
            01 / IDENTITÀ
          </span>
          <span className="h-px bg-[#0d0f12]/20 flex-1" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9A9184]">
            {RESTAURANT_INFO.borgo}
          </span>
        </div>

        {/* 2-Column Offset Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Image Composition */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#0d0f12]">
              L’eccellenza culinaria immersa nella quiete secolare del Borgo di Mustonate.
            </h2>

            <div className="relative pt-6">
              <div className="relative overflow-hidden aspect-[16/10] bg-[#0d0f12]/10 shadow-2xl">
                <img
                  src="https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/DSC_5708_09_10_11_12_tonemapped_R.jpg"
                  alt="Sale storiche del Ristorante Tana d'Orso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[#EDE7DD]">
                  <p className="font-serif text-lg italic text-[#D1A066]">Le Sale Nobili & Il Camino</p>
                  <p className="text-xs font-sans tracking-wider uppercase text-[#EDE7DD]/80">
                    Travi in legno a vista, camini in pietra e vista sul Borgo
                  </p>
                </div>
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0d0f12] text-[#EDE7DD] p-6 shadow-xl border border-[#D1A066]/30 max-w-xs hidden sm:block">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#D1A066] font-semibold mb-1">
                  Filosofia di cucina
                </p>
                <p className="font-serif text-sm leading-snug">
                  Materia prima d'eccellenza, presidi Slow Food e rispetto dei tempi lenti di cottura.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Overview text & Chef Patron Quote */}
          <div className="lg:col-span-5 space-y-10 lg:pt-8">
            <div className="space-y-4">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A9184] font-medium block">
                PANORAMICA
              </span>
              <p className="font-sans text-base text-[#0d0f12]/80 leading-relaxed font-light">
                Situato nel contesto bucolico delle colline varesine, a pochi passi dalle rive del lago, il Ristorante Tana d'Orso è da oltre vent'anni punto di riferimento per chi ricerca eleganza discreta, sapori autentici e calore autentico.
              </p>
              <p className="font-sans text-base text-[#0d0f12]/80 leading-relaxed font-light">
                La struttura si sviluppa su due livelli: un piano superiore impreziosito dal camino in pietra d'epoca e soffitti con travi in legno, e un piano inferiore che sfocia nella corte verde e nei giardini privati della tenuta.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="border-l-2 border-[#D1A066] pl-6 py-2 space-y-4 bg-white/40 p-6 shadow-sm">
              <Quote className="w-6 h-6 text-[#D1A066]/60 rotate-180" />
              <p className="font-serif italic text-lg text-[#0d0f12]/90 leading-relaxed">
                "{CHEF_QUOTE.text}"
              </p>
              <div className="pt-2">
                <p className="font-serif font-semibold text-base text-[#0d0f12]">{CHEF_QUOTE.author}</p>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#9A9184]">{CHEF_QUOTE.role}</p>
              </div>
            </div>

            {/* Action to About */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0d0f12] hover:text-[#D1A066] transition-colors group cursor-pointer"
              >
                <span>Scopri la nostra storia e il Borgo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
