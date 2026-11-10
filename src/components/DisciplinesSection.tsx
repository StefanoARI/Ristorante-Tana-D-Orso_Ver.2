import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DISCIPLINES } from '../data/restaurantData';
import { PageView } from '../types';

interface DisciplinesSectionProps {
  onNavigate: (view: PageView) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState(DISCIPLINES[0].id);

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[0];

  const handleAction = () => {
    if (activeDiscipline.id === 'matrimoni' || activeDiscipline.id === 'eventi') {
      onNavigate('eventi');
    } else {
      onNavigate('menu');
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#EDE7DD] text-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
            03 / LE DISCIPLINE DELLA TANA
          </span>
          <span className="h-px bg-[#0d0f12]/20 flex-1" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9A9184]">
            REPERTORIO & SPECIALITÀ
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#0d0f12]">
            Dalla terra al piatto: la maestria artigianale declinata in sette espressioni.
          </h2>
        </div>

        {/* Vertical Taxonomy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Vertical List of Disciplines */}
          <div className="lg:col-span-5 space-y-2">
            {DISCIPLINES.map((discipline, index) => {
              const isActive = discipline.id === activeId;
              return (
                <button
                  key={discipline.id}
                  onClick={() => setActiveId(discipline.id)}
                  onMouseEnter={() => setActiveId(discipline.id)}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center justify-between group cursor-pointer border-b ${
                    isActive
                      ? 'border-[#D1A066] bg-white shadow-md'
                      : 'border-[#0d0f12]/10 hover:border-[#0d0f12]/30 hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-serif text-xs tracking-widest ${
                        isActive ? 'text-[#D1A066] font-semibold' : 'text-[#9A9184]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`font-serif text-lg sm:text-xl transition-colors ${
                        isActive ? 'text-[#0d0f12] font-semibold pl-2' : 'text-[#0d0f12]/70 group-hover:text-[#0d0f12]'
                      }`}
                    >
                      {discipline.name}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? 'text-[#D1A066] translate-x-1'
                        : 'text-[#0d0f12]/20 group-hover:text-[#0d0f12]/60 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Dynamic Showcase Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 shadow-xl border border-[#0d0f12]/5 space-y-6">
            {/* Visual Header */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0f12]/10">
              <img
                key={activeDiscipline.id}
                src={activeDiscipline.image}
                alt={activeDiscipline.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 pt-2">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
                {activeDiscipline.name}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0d0f12] leading-snug">
                {activeDiscipline.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#0d0f12]/75 font-light leading-relaxed">
                {activeDiscipline.description}
              </p>

              {/* Bullet highlights */}
              <div className="space-y-2 pt-2 border-t border-[#0d0f12]/10">
                {activeDiscipline.keyPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-xs sm:text-sm text-[#0d0f12]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#D1A066] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={handleAction}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0d0f12] text-[#EDE7DD] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D1A066] hover:text-[#0d0f12] transition-colors cursor-pointer shadow-md"
                >
                  <span>{activeDiscipline.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
