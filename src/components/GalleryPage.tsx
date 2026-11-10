import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sale' | 'cucina' | 'eventi' | 'borgo'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'Tutti gli Scatti' },
    { key: 'sale', label: 'Le Sale Nobili & Il Camino' },
    { key: 'cucina', label: 'I Piatti & La Cucina' },
    { key: 'eventi', label: 'Matrimoni & Ricevimenti' },
    { key: 'borgo', label: 'Il Borgo di Mustonate' },
  ];

  const handlePrev = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#EDE7DD] pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#D1A066]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans">
            Archivio Fotografico
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE7DD] font-normal leading-tight">
          Scorci, Atmosfere e Creazioni
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#EDE7DD]/70 font-light mt-3 max-w-2xl">
          Esplora l'atmosfera calda delle nostre sale con camino, la corte verde del Borgo settecentesco e l'arte gastronomica dello Chef Francesco Testa.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EDE7DD]/10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key as any);
                setActivePhotoIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'border-b-2 border-[#D1A066] text-[#D1A066]'
                  : 'text-[#EDE7DD]/60 hover:text-[#EDE7DD]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Photos */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative aspect-[4/3] bg-[#161a20] overflow-hidden border border-[#EDE7DD]/10 cursor-pointer"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1A066] font-semibold">
                  {photo.category}
                </span>
                <h3 className="font-serif text-lg text-[#EDE7DD] mt-0.5">{photo.title}</h3>
                {photo.caption && (
                  <p className="font-sans text-xs text-[#EDE7DD]/80 font-light mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-3 text-xs text-[#D1A066]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ingrandisci</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-[#EDE7DD] max-w-7xl mx-auto w-full">
            <span className="font-serif text-sm tracking-widest text-[#D1A066]">
              {activePhotoIndex + 1} / {filteredPhotos.length}
            </span>
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4">
            <button
              onClick={handlePrev}
              aria-label="Precedente"
              className="absolute left-2 sm:-left-12 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={filteredPhotos[activePhotoIndex].imageUrl}
              alt={filteredPhotos[activePhotoIndex].title}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={handleNext}
              aria-label="Successiva"
              className="absolute right-2 sm:-right-12 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center max-w-2xl mx-auto text-[#EDE7DD]">
            <h4 className="font-serif text-xl text-[#EDE7DD]">
              {filteredPhotos[activePhotoIndex].title}
            </h4>
            {filteredPhotos[activePhotoIndex].caption && (
              <p className="font-sans text-xs sm:text-sm text-[#EDE7DD]/70 font-light mt-1">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
