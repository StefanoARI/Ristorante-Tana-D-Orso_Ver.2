import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { SHOWCASE_CHAPTERS } from '../data/restaurantData';
import { PageView } from '../types';

interface ShowcaseSliderProps {
  onNavigate: (view: PageView) => void;
}

export const ShowcaseSlider: React.FC<ShowcaseSliderProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChapter = SHOWCASE_CHAPTERS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_CHAPTERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_CHAPTERS.length) % SHOWCASE_CHAPTERS.length);
  };

  const handleExplore = () => {
    if (currentChapter.id === 'chapter-cucina' || currentChapter.id === 'chapter-cantina') {
      onNavigate('menu');
    } else if (currentChapter.id === 'chapter-matrimoni') {
      onNavigate('eventi');
    } else {
      onNavigate('gallery');
    }
  };

  return (
    <section className="py-24 bg-[#0d0f12] text-[#EDE7DD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Bar with Chapter Tracker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 border-b border-[#EDE7DD]/10 pb-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
              02 / ESPERIENZE & AMBIENTI
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE7DD] mt-1">
              I Quattro Capitoli della Tana d'Orso
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-6">
            <span className="font-serif text-lg tracking-widest text-[#EDE7DD]/80">
              <span className="text-[#D1A066] font-semibold">{currentChapter.number}</span>
              <span className="mx-2 text-[#9A9184]">/</span>
              <span>0{SHOWCASE_CHAPTERS.length}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Capitolo precedente"
                className="w-11 h-11 border border-[#EDE7DD]/20 rounded-full flex items-center justify-center hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Capitolo successivo"
                className="w-11 h-11 border border-[#EDE7DD]/20 rounded-full flex items-center justify-center hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Chapter Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative group overflow-hidden aspect-[16/10] bg-[#161a20]">
            <img
              key={currentChapter.id}
              src={currentChapter.image}
              alt={currentChapter.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans tracking-widest uppercase text-[#EDE7DD]/90">
              <span>{currentChapter.location}</span>
              <span className="text-[#D1A066]">{currentChapter.highlight}</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D1A066] font-medium">
                {currentChapter.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#EDE7DD] leading-tight">
                {currentChapter.title}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#9A9184]">
                {currentChapter.subtitle}
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#EDE7DD]/80 font-light leading-relaxed">
              {currentChapter.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentChapter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-sans tracking-wider px-3 py-1 bg-[#1a1e24] text-[#EDE7DD]/90 border border-[#EDE7DD]/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-all cursor-pointer shadow-md"
              >
                <span>Approfondisci Capitolo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Chapter Selector Pills at Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#EDE7DD]/10">
          {SHOWCASE_CHAPTERS.map((chapter, idx) => (
            <button
              key={chapter.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-left p-4 transition-all duration-300 border-l-2 cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#D1A066] bg-[#161a20]'
                  : 'border-[#EDE7DD]/10 hover:border-[#EDE7DD]/40 bg-transparent'
              }`}
            >
              <span className={`text-xs font-serif block ${currentIndex === idx ? 'text-[#D1A066]' : 'text-[#9A9184]'}`}>
                {chapter.number}
              </span>
              <span className="text-sm font-sans font-medium text-[#EDE7DD] block truncate mt-1">
                {chapter.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
