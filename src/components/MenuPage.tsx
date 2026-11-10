import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Award, Wine, UtensilsCrossed, Calendar, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, WINE_COLLECTION, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuPageProps {
  onOpenReservation: () => void;
}

type MenuCategoryTab = 'tutti' | 'antipasti' | 'zuppe' | 'primi' | 'secondi' | 'extra' | 'dessert' | 'vini';

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReservation }) => {
  const [selectedTab, setSelectedTab] = useState<MenuCategoryTab>('tutti');
  const [searchQuery, setSearchQuery] = useState('');
  const [slowFoodOnly, setSlowFoodOnly] = useState(false);

  const filteredDishes = useMemo(() => {
    if (selectedTab === 'vini') return [];

    return MENU_ITEMS.filter((item) => {
      const matchesTab = selectedTab === 'tutti' ? true : item.category === selectedTab;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesSlowFood = !slowFoodOnly || item.slowFoodPresidium;

      return matchesTab && matchesSearch && matchesSlowFood;
    });
  }, [selectedTab, searchQuery, slowFoodOnly]);

  const filteredWines = useMemo(() => {
    if (selectedTab !== 'vini' && selectedTab !== 'tutti') return [];
    if (searchQuery === '') return WINE_COLLECTION;
    return WINE_COLLECTION.filter(
      (wine) =>
        wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wine.notes.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedTab, searchQuery]);

  const tabs: { key: MenuCategoryTab; label: string; count?: number }[] = [
    { key: 'tutti', label: 'Tutte le Creazioni' },
    { key: 'antipasti', label: 'Antipasti' },
    { key: 'zuppe', label: 'Zuppe & Creme' },
    { key: 'primi', label: 'Primi Piatti' },
    { key: 'secondi', label: 'Secondi Piatti' },
    { key: 'extra', label: 'Specialità Foie Gras' },
    { key: 'dessert', label: 'Dessert' },
    { key: 'vini', label: 'La Carta dei Vini' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#EDE7DD] pt-32 pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#D1A066]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans">
            La Carta Gastronomica · Stagionale
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#EDE7DD]/10">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE7DD] font-normal leading-tight">
              Il Menù della Tana d’Orso
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#EDE7DD]/70 font-light mt-3 max-w-2xl">
              Ogni portata nasce dalla selezione di materie prime purissime: carni piemontesi di razza Fassona certificate La Granda, riso Carnaroli Acquerello invecchiato e sapori autentici delle valli varesine.
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#D1A066]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Prenota un Tavolo</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#9A9184] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cerca piatti, tartufo, Fassona, Acquerello..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161a20] border border-[#EDE7DD]/15 text-[#EDE7DD] text-sm pl-11 pr-4 py-3 focus:outline-none focus:border-[#D1A066] placeholder:text-[#9A9184] transition-colors"
            />
          </div>

          {/* Slow Food Filter Toggle */}
          <button
            onClick={() => setSlowFoodOnly(!slowFoodOnly)}
            className={`inline-flex items-center gap-2 px-5 py-3 border text-xs tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
              slowFoodOnly
                ? 'bg-[#D1A066] border-[#D1A066] text-[#0d0f12] font-semibold'
                : 'border-[#EDE7DD]/20 text-[#EDE7DD]/80 hover:border-[#D1A066]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Solo Presidi Slow Food</span>
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EDE7DD]/10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedTab === tab.key
                  ? 'border-b-2 border-[#D1A066] text-[#D1A066]'
                  : 'text-[#EDE7DD]/60 hover:text-[#EDE7DD]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dishes Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {selectedTab !== 'vini' && (
          <div className="space-y-12">
            {filteredDishes.length === 0 ? (
              <div className="text-center py-20 bg-[#14171d] border border-[#EDE7DD]/10 p-10">
                <UtensilsCrossed className="w-10 h-10 text-[#9A9184] mx-auto mb-4" />
                <h3 className="font-serif text-xl text-[#EDE7DD]">Nessun piatto trovato</h3>
                <p className="text-sm text-[#EDE7DD]/60 mt-1">
                  Prova a modificare i filtri o la ricerca.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="bg-[#14171d] border border-[#EDE7DD]/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D1A066]/40 transition-all duration-300 group"
                  >
                    <div>
                      {/* Optional Dish Image */}
                      {dish.image && (
                        <div className="relative aspect-[16/9] mb-5 overflow-hidden bg-black/40">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Header with Title and Price */}
                      <div className="flex items-baseline justify-between gap-4 border-b border-[#EDE7DD]/10 pb-3 mb-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {dish.slowFoodPresidium && (
                              <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#D1A066]/20 text-[#D1A066] border border-[#D1A066]/40">
                                Presidio Slow Food
                              </span>
                            )}
                            {dish.isSpecialty && (
                              <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#EDE7DD]/10 text-[#EDE7DD] border border-[#EDE7DD]/20">
                                Specialità dello Chef
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-xl sm:text-2xl text-[#EDE7DD] font-normal leading-snug">
                            {dish.name}
                          </h3>
                        </div>
                        {dish.price && (
                          <span className="font-serif text-xl sm:text-2xl text-[#D1A066] font-semibold whitespace-nowrap">
                            {dish.price}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-[#EDE7DD]/80 font-light leading-relaxed mb-4">
                        {dish.description}
                      </p>

                      {/* Ingredients */}
                      {dish.ingredients && dish.ingredients.length > 0 && (
                        <div className="pt-2">
                          <p className="text-[11px] font-sans tracking-wider uppercase text-[#9A9184] mb-1">
                            Ingredienti chiave:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {dish.ingredients.map((ing) => (
                              <span
                                key={ing}
                                className="text-xs text-[#EDE7DD]/70 bg-[#1b1f26] px-2.5 py-0.5"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Wine Pairing */}
                    {dish.pairing && (
                      <div className="pt-4 mt-4 border-t border-[#EDE7DD]/10 flex items-center gap-2 text-xs text-[#D1A066]">
                        <Wine className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-sans font-light">
                          <strong className="font-medium text-[#EDE7DD]">Abbinamento consigliato:</strong> {dish.pairing}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Wine Collection Section */}
        {(selectedTab === 'vini' || selectedTab === 'tutti') && (
          <div className="mt-16 pt-12 border-t border-[#EDE7DD]/10">
            <div className="mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans block mb-2">
                Oltre 250 Cru in Cantina
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE7DD]">
                Selezione dalla Carta dei Vini
              </h2>
              <p className="font-sans text-sm text-[#EDE7DD]/70 font-light mt-2 max-w-2xl">
                Dalle bollicine della Franciacorta ai nobili Nebbiolo di Langhe e Valtellina, fino alle perle francesi di Borgogna e Sauternes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWines.map((wine) => (
                <div
                  key={wine.id}
                  className="bg-[#14171d] border border-[#EDE7DD]/10 p-6 flex flex-col justify-between hover:border-[#D1A066]/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D1A066] font-semibold">
                        {wine.type}
                      </span>
                      {wine.vintage && (
                        <span className="font-serif text-xs text-[#9A9184]">
                          Annata {wine.vintage}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-xl text-[#EDE7DD] leading-snug">
                      {wine.name}
                    </h4>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#9A9184]">
                      {wine.region}
                    </p>

                    <p className="font-sans text-xs text-[#EDE7DD]/75 font-light leading-relaxed pt-1">
                      {wine.notes}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EDE7DD]/10 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-wider text-[#9A9184] block">Bottiglia</span>
                      <span className="font-serif text-lg text-[#D1A066] font-medium">{wine.bottlePrice}</span>
                    </div>
                    {wine.glassPrice && (
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-sans tracking-wider text-[#9A9184] block">Al Calice</span>
                        <span className="font-serif text-sm text-[#EDE7DD]">{wine.glassPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fast Booking CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#161a20] border border-[#D1A066]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE7DD]">
              Desideri assaporare queste creazioni?
            </h3>
            <p className="font-sans text-sm text-[#EDE7DD]/75 font-light">
              Prenota il tuo tavolo e comunicaci eventuali intolleranze o desideri gastronomici per un servizio su misura.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shrink-0 shadow-lg"
          >
            Prenota Ora il Tuo Tavolo
          </button>
        </div>
      </div>
    </div>
  );
};
