import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { PageView } from '../types';

interface PerspectivesSectionProps {
  onNavigate: (view: PageView) => void;
}

export const PerspectivesSection: React.FC<PerspectivesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0d0f12] text-[#EDE7DD] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
            04 / PROSPETTIVE & TESTIMONIANZE
          </span>
          <span className="h-px bg-[#EDE7DD]/10 flex-1" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9A9184]">
            LA VOCE DEGLI OSPITI
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#EDE7DD]">
            L'eco di un'esperienza che resta impressa nel tempo.
          </h2>
        </div>

        {/* 3-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 flex flex-col justify-between hover:border-[#D1A066]/50 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D1A066]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D1A066]" />
                    ))}
                  </div>
                  <span className="font-serif text-xs text-[#9A9184]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D1A066] block">
                    {testimonial.tag}
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-[#EDE7DD]/90 leading-relaxed font-light">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#EDE7DD]/10 mt-8 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#EDE7DD] font-medium">{testimonial.author}</h4>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#9A9184]">{testimonial.subtitle}</p>
                </div>
                <Quote className="w-5 h-5 text-[#D1A066]/30 group-hover:text-[#D1A066] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Link to events & weddings */}
        <div className="mt-14 pt-8 border-t border-[#EDE7DD]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-sm text-[#EDE7DD]/70 font-light">
            Hai festeggiato o vissuto un momento speciale alla Tana d'Orso? Condividi la tua esperienza.
          </p>
          <button
            onClick={() => onNavigate('eventi')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D1A066] hover:text-[#E5B57C] transition-colors cursor-pointer shrink-0"
          >
            <span>Organizza il tuo evento con noi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
