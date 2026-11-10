import React, { useState } from 'react';
import { Calendar, Users, CheckCircle2, Shield, Sparkles, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface EventsPageProps {
  onOpenReservation: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenReservation }) => {
  const [eventType, setEventType] = useState<'matrimonio' | 'aziendale' | 'privato'>('matrimonio');
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '80',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#EDE7DD] pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#D1A066]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans">
            Ricevimenti d’Autore & Convegni
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE7DD] font-normal leading-tight max-w-4xl">
          Matrimoni ed Eventi Esclusivi nel Borgo di Mustonate
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#EDE7DD]/80 font-light mt-4 max-w-3xl leading-relaxed">
          La nostra promessa fondamentale agli sposi e ai nostri clienti: <strong className="text-[#D1A066] font-medium">accogliamo un unico matrimonio al giorno</strong>. Questo assicura tranquillità totale, la completa disponibilità di tutte le sale e della corte esterna, e l’attenzione assoluta dello staff.
        </p>
      </div>

      {/* Main Feature: Wedding Garden Showcase */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#161a20] shadow-2xl border border-[#EDE7DD]/10">
          <img
            src="https://www.ristorantetanadorso.it/wp-content/uploads/2017/03/IMG_2128.jpg"
            alt="Matrimonio all'aperto alla Tana d'Orso Borgo di Mustonate"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
                Esclusività Assoluta
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE7DD]">
                La Cornice del Borgo di Mustonate
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE7DD]/80 max-w-lg">
                Fino a 150 ospiti per banchetto placé, cucina espressa gestita direttamente dalla nostra brigata interna.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('richiesta-eventi');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer self-start md:self-auto"
            >
              Richiedi Disponibilità
            </button>
          </div>
        </div>
      </div>

      {/* 3 Columns: Matrimoni, Meeting Aziendali, Feste Private */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Matrimoni */}
          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D1A066] font-semibold block">
                01 / MATRIMONI
              </span>
              <h3 className="font-serif text-2xl text-[#EDE7DD]">
                Il Tuo Giorno Unico
              </h3>
              <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
                Nessun limite di orario rigido né fretta di liberare la sala per altri ricevimenti. Dalla cerimonia con vista collinare all’aperitivo nella corte fiorita e al taglio torta serale illuminato da lanterne.
              </p>
              <ul className="space-y-2 text-xs text-[#EDE7DD]/80 pt-2 border-t border-[#EDE7DD]/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Un solo matrimonio al giorno garantito</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Cucina interna espressa dello Chef Francesco Testa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Parco secolare per servizio fotografico</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setEventType('matrimonio');
                document.getElementById('richiesta-eventi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.15em] text-[#D1A066] hover:text-[#EDE7DD] flex items-center gap-2 font-medium cursor-pointer"
            >
              <span>Seleziona Matrimonio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Meeting & Convegni */}
          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D1A066] font-semibold block">
                02 / AZIENDE & BUSINESS
              </span>
              <h3 className="font-serif text-2xl text-[#EDE7DD]">
                Meeting & Cene di Gala
              </h3>
              <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
                Sale polivalenti dotate di impianti audio-video e schermi per presentazioni, congressi o cene aziendali di prestigio. Due ampi parcheggi riservati adiacenti per la massima comodità dei partecipanti.
              </p>
              <ul className="space-y-2 text-xs text-[#EDE7DD]/80 pt-2 border-t border-[#EDE7DD]/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Capienza fino a 150 persone a platea</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Coffee break e colazioni di lavoro gourmet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Due parcheggi privati riservati</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setEventType('aziendale');
                document.getElementById('richiesta-eventi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.15em] text-[#D1A066] hover:text-[#EDE7DD] flex items-center gap-2 font-medium cursor-pointer"
            >
              <span>Seleziona Evento Aziendale</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Raduni & Feste */}
          <div className="bg-[#14171d] border border-[#EDE7DD]/10 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D1A066] font-semibold block">
                03 / RADUNI & PRIVÉ
              </span>
              <h3 className="font-serif text-2xl text-[#EDE7DD]">
                Raduni d'Auto & Ricorrenze
              </h3>
              <p className="font-sans text-sm text-[#EDE7DD]/75 font-light leading-relaxed">
                Tappe privilegiate per raduni di auto e moto d'epoca che attraversano la terra dei laghi, oltre a battesimi, cresime, anniversari e feste di laurea con menù concordati ad hoc.
              </p>
              <ul className="space-y-2 text-xs text-[#EDE7DD]/80 pt-2 border-t border-[#EDE7DD]/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Spazi ampi per esposizione veicoli storici</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Menù degustazione e abbinamento vini</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D1A066]" />
                  <span>Pasticceria interna personalizzabile</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setEventType('privato');
                document.getElementById('richiesta-eventi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.15em] text-[#D1A066] hover:text-[#EDE7DD] flex items-center gap-2 font-medium cursor-pointer"
            >
              <span>Seleziona Ricorrenza</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div id="richiesta-eventi" className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-[#14171d] border border-[#D1A066]/30 p-8 sm:p-12 shadow-2xl">
          {formSent ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D1A066]/20 border border-[#D1A066] flex items-center justify-center mx-auto text-[#D1A066]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-[#EDE7DD]">
                Richiesta Ricevuta con Successo!
              </h3>
              <p className="font-sans text-sm text-[#EDE7DD]/80 max-w-lg mx-auto font-light leading-relaxed">
                Grazie {formData.name}, la Maitre Veronica e lo staff della Tana d’Orso verificheranno la disponibilità della data per la tipologia <strong>{eventType}</strong> e vi ricontatteranno entro 24 ore lavorative.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-4 px-6 py-3 border border-[#EDE7DD]/30 text-xs uppercase tracking-wider text-[#EDE7DD] hover:border-[#D1A066]"
              >
                Invia un’altra richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold block">
                  CONTATTO DIRETTO EVENTI
                </span>
                <h3 className="font-serif text-3xl text-[#EDE7DD]">
                  Richiedi un Preventivo o un Sopralluogo nel Borgo
                </h3>
                <p className="font-sans text-sm text-[#EDE7DD]/70 font-light">
                  Compilate i campi sottostanti per verificare la disponibilità delle sale e ricevere la brochure dettagliata.
                </p>
              </div>

              {/* Event Type selector */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'matrimonio', label: 'Matrimonio Esclusivo' },
                  { key: 'aziendale', label: 'Meeting / Aziendale' },
                  { key: 'privato', label: 'Ricorrenza Privata' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setEventType(item.key as any)}
                    className={`py-3 text-xs uppercase tracking-wider font-medium cursor-pointer border ${
                      eventType === item.key
                        ? 'bg-[#D1A066] text-[#0d0f12] border-[#D1A066] font-semibold'
                        : 'bg-[#1b1f26] text-[#EDE7DD]/70 border-[#EDE7DD]/10 hover:border-[#D1A066]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Nome e Cognome *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Mario Rossi"
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mario.rossi@example.com"
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Telefono *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+39 340 1234567"
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Data orientativa</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Numero di Ospiti Stimato</label>
                  <input
                    type="number"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    min="10"
                    max="160"
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Dettagli sull’evento & Desideri</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Descrivete il tipo di evento, preferenze di menù, orari o richieste particolari per allestimento..."
                  className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-2.5 text-sm focus:outline-none focus:border-[#D1A066]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#9A9184]">
                  Rispondiamo entro 24 ore dal lunedì alla domenica.
                </span>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shadow-lg"
                >
                  Invia Richiesta Preventivo
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
