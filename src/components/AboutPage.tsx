import React from 'react';
import { Award, Compass, Heart, Shield, Clock, MapPin, Sparkles, Utensils } from 'lucide-react';
import { RESTAURANT_INFO, CHEF_QUOTE } from '../data/restaurantData';

interface AboutPageProps {
  onOpenReservation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenReservation }) => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#EDE7DD] pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#D1A066]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans">
            La Nostra Storia · Borgo di Mustonate
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE7DD] font-normal leading-tight max-w-4xl">
          Tradizione, quiete e maestria nel cuore delle colline varesine dal 2005.
        </h1>
      </div>

      {/* Hero Visual Collage */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#161a20] shadow-2xl border border-[#EDE7DD]/10">
            <img
              src="https://www.ristorantetanadorso.it/wp-content/uploads/2015/04/DSC_5699_700_701_702_703_tonemapped_R_BANNER.jpg"
              alt="Sale nobili della Tana d'Orso"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-5 space-y-6">
            <div className="border-l-2 border-[#D1A066] pl-6 py-2 space-y-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#EDE7DD] leading-relaxed">
                "{CHEF_QUOTE.text}"
              </p>
              <div>
                <p className="font-serif font-semibold text-[#D1A066]">{CHEF_QUOTE.author}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-[#9A9184]">{CHEF_QUOTE.role}</p>
              </div>
            </div>

            <p className="font-sans text-sm text-[#EDE7DD]/80 font-light leading-relaxed">
              Fondata nel 2005 all'interno del Borgo di Mustonate, la Tana d'Orso nasce dal desiderio di creare un luogo dove il tempo rallenta, e dove il rito della tavola torna ad essere celebrazione del territorio e dei suoi doni più autentici.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Pillars of Philosophy */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-4">
            <Award className="w-8 h-8 text-[#D1A066]" />
            <h3 className="font-serif text-2xl text-[#EDE7DD]">
              I Presidi Slow Food
            </h3>
            <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
              Dalla carne di razza Fassona certificata dall'Associazione La Granda, al riso Carnaroli Acquerello invecchiato e ai formaggi storici come il Bitto DOP, lavoriamo solo materie prime che rispettano il benessere animale e la terra.
            </p>
          </div>

          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-4">
            <Compass className="w-8 h-8 text-[#D1A066]" />
            <h3 className="font-serif text-2xl text-[#EDE7DD]">
              Il Borgo di Mustonate
            </h3>
            <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
              Un antico borgo rurale immerso in oltre 60 ettari di verde, a breve distanza dal Lago di Varese. Un’oasi di tranquillità dove il silenzio della campagna accompagna ogni momento conviviale.
            </p>
          </div>

          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-4">
            <Heart className="w-8 h-8 text-[#D1A066]" />
            <h3 className="font-serif text-2xl text-[#EDE7DD]">
              Accoglienza Esclusiva
            </h3>
            <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
              Per i ricevimenti e i matrimoni la nostra regola è ferrea: un solo evento al giorno. Veronica e tutto lo staff dedicano l'intera giornata e tutti gli spazi esclusivamente a voi e ai vostri ospiti.
            </p>
          </div>
        </div>
      </div>

      {/* The Spaces Architecture */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="bg-[#161a20] border border-[#EDE7DD]/10 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
                L’ARCHITETTURA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE7DD]">
                Due Livelli Nobili e il Giardino Fiorito
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#EDE7DD]/80 font-light leading-relaxed">
                Il piano nobile superiore accoglie la sala principale con il maestoso camino in pietra e le travi lignee originarie, assieme a una saletta privé intima per cene romantiche.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#EDE7DD]/80 font-light leading-relaxed">
                Il piano terra si apre verso la corte interna e il prato fiorito, ideale per aperitivi di benvenuto, matrimoni primaverili ed estivi, e cene sotto il cielo stellato delle Prealpi.
              </p>
            </div>
            <div className="lg:col-span-6">
              <img
                src="https://www.ristorantetanadorso.it/wp-content/gallery/galleria_ristorante/DSC_5699_700_701_702_703_tonemapped_R.jpg"
                alt="Borgo di Mustonate e tenuta Tana d'Orso"
                className="w-full aspect-[4/3] object-cover shadow-xl border border-[#EDE7DD]/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operational Details & CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-6">
        <h3 className="font-serif text-3xl text-[#EDE7DD]">
          Venite a trovarci nel Borgo
        </h3>
        <p className="font-sans text-sm text-[#EDE7DD]/75 font-light max-w-xl mx-auto">
          Saremo lieti di accogliervi per una cena indimenticabile, un pranzo in famiglia o per mostrarvi gli spazi del vostro futuro matrimonio.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shadow-lg shadow-[#D1A066]/20"
          >
            Prenota un Tavolo alla Tana d'Orso
          </button>
        </div>
      </div>
    </div>
  );
};
