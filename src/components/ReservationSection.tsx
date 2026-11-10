import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle2, AlertCircle, Phone, Mail, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ isModal = false, onClose }) => {
  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState<string>(today);
  const [service, setService] = useState<'pranzo' | 'cena'>('cena');
  const [time, setTime] = useState<string>('20:00');
  const [guests, setGuests] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<string>('Sala Principale Camino');
  const [occasion, setOccasion] = useState<string>('Cena Gourmet');
  const [dietary, setDietary] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  // Check if chosen day is Tuesday (2) or Wednesday (3)
  const isClosedDay = (dateStr: string) => {
    if (!dateStr) return false;
    const day = new Date(dateStr).getUTCDay();
    return day === 2 || day === 3; // Tue or Wed
  };

  const dayClosed = isClosedDay(date);

  const lunchSlots = ['12:15', '12:30', '12:45', '13:00', '13:15', '13:30'];
  const dinnerSlots = ['19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00'];

  const seatingAreas = [
    { id: 'camino', name: 'Sala Principale Camino', desc: 'Piano superiore nobile con travi in legno' },
    { id: 'prive', name: 'Saletta Privé Romantica', desc: 'Tavolo riservato a lume di candela' },
    { id: 'corte', name: 'Corte nel Borgo', desc: 'Affaccio sui giardini e sulla corte fiorita' },
    { id: 'qualsiasi', name: 'Nessuna preferenza', desc: 'Miglior tavolo disponibile' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dayClosed) return;

    const reservationId = `TDO-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReservation: ReservationData = {
      id: reservationId,
      date,
      time,
      service,
      guests,
      seatingArea,
      occasion,
      dietaryRestrictions: dietary,
      specialRequests,
      name,
      surname,
      email,
      phone,
      createdAt: new Date().toISOString(),
      status: 'confermata'
    };

    setConfirmedReservation(newReservation);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setConfirmedReservation(null);
  };

  return (
    <div className={`text-[#EDE7DD] ${isModal ? 'p-6 sm:p-8' : 'py-24 bg-[#0d0f12]'}`}>
      <div className={`${isModal ? 'max-w-2xl mx-auto' : 'max-w-4xl mx-auto px-6 lg:px-12'}`}>
        {/* Header */}
        {!isSubmitted && (
          <div className="mb-10 text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[#D1A066]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#D1A066] font-medium font-sans">
                Prenotazione Tavolo · Servizio Espresso
              </span>
              <span className="w-8 h-px bg-[#D1A066]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE7DD] font-normal">
              Riserva la tua esperienza alla Tana d’Orso
            </h2>

            <p className="font-sans text-sm text-[#EDE7DD]/70 font-light max-w-xl mx-auto">
              Per garantire un servizio impeccabile e il massimo del relax, vi preghiamo di compilare il form. La conferma della prenotazione è istantanea.
            </p>
          </div>
        )}

        {/* Confirmation Screen */}
        {isSubmitted && confirmedReservation ? (
          <div className="bg-[#14171d] border border-[#D1A066] p-8 sm:p-10 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#D1A066]/20 border border-[#D1A066] flex items-center justify-center mx-auto text-[#D1A066]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D1A066] font-semibold block">
                PRENOTAZIONE CONFERMATA
              </span>
              <h3 className="font-serif text-3xl text-[#EDE7DD]">
                Grazie, {confirmedReservation.name}!
              </h3>
              <p className="font-sans text-sm text-[#EDE7DD]/80 font-light">
                Abbiamo riservato il vostro tavolo per <strong className="text-[#D1A066]">{confirmedReservation.guests} persone</strong> il giorno <strong className="text-[#EDE7DD]">{confirmedReservation.date}</strong> alle ore <strong className="text-[#EDE7DD]">{confirmedReservation.time}</strong>.
              </p>
            </div>

            {/* Reservation Summary Card */}
            <div className="bg-[#1a1e26] border border-[#EDE7DD]/10 p-6 text-left space-y-3 text-xs sm:text-sm font-sans">
              <div className="flex justify-between border-b border-[#EDE7DD]/10 pb-2">
                <span className="text-[#9A9184]">Codice Prenotazione:</span>
                <span className="font-serif font-bold text-[#D1A066] tracking-wider">{confirmedReservation.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#EDE7DD]/10 pb-2">
                <span className="text-[#9A9184]">Zona del Ristorante:</span>
                <span className="text-[#EDE7DD]">{confirmedReservation.seatingArea}</span>
              </div>
              <div className="flex justify-between border-b border-[#EDE7DD]/10 pb-2">
                <span className="text-[#9A9184]">Occasione:</span>
                <span className="text-[#EDE7DD]">{confirmedReservation.occasion}</span>
              </div>
              {confirmedReservation.dietaryRestrictions && (
                <div className="flex justify-between border-b border-[#EDE7DD]/10 pb-2">
                  <span className="text-[#9A9184]">Segnalazioni / Diete:</span>
                  <span className="text-[#EDE7DD]">{confirmedReservation.dietaryRestrictions}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-[#EDE7DD]/10 pb-2">
                <span className="text-[#9A9184]">Contatti:</span>
                <span className="text-[#EDE7DD]">{confirmedReservation.email} · {confirmedReservation.phone}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#9A9184]">Indirizzo:</span>
                <span className="text-[#EDE7DD]">{RESTAURANT_INFO.address}</span>
              </div>
            </div>

            {/* Note & Direct contact */}
            <div className="p-4 bg-[#D1A066]/10 border border-[#D1A066]/30 text-xs text-[#EDE7DD]/90 text-left flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D1A066] shrink-0 mt-0.5" />
              <p>
                Una copia di riepilogo è stata generata. In caso di ritardi o variazioni, potete contattare la Maitre Veronica direttamente al telefono <strong className="text-[#EDE7DD]">{RESTAURANT_INFO.phone}</strong>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-[#EDE7DD]/30 text-xs uppercase tracking-[0.15em] text-[#EDE7DD] hover:border-[#D1A066] transition-colors cursor-pointer"
              >
                Nuova Prenotazione
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer"
                >
                  Chiudi Schermata
                </button>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#14171d] border border-[#EDE7DD]/10 p-6 sm:p-10 space-y-8 shadow-2xl">
            {/* Step 1: Date & Service */}
            <div className="space-y-4">
              <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold">
                1. Data e Servizio
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Data desiderata</label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Servizio</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setService('pranzo');
                        setTime('12:30');
                      }}
                      className={`py-3 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer border ${
                        service === 'pranzo'
                          ? 'bg-[#D1A066] text-[#0d0f12] border-[#D1A066] font-semibold'
                          : 'bg-[#1b1f26] text-[#EDE7DD]/70 border-[#EDE7DD]/10 hover:border-[#D1A066]'
                      }`}
                    >
                      Pranzo (12:15-14)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setService('cena');
                        setTime('20:00');
                      }}
                      className={`py-3 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer border ${
                        service === 'cena'
                          ? 'bg-[#D1A066] text-[#0d0f12] border-[#D1A066] font-semibold'
                          : 'bg-[#1b1f26] text-[#EDE7DD]/70 border-[#EDE7DD]/10 hover:border-[#D1A066]'
                      }`}
                    >
                      Cena (19:15-21:30)
                    </button>
                  </div>
                </div>
              </div>

              {/* Closed day alert */}
              {dayClosed && (
                <div className="p-4 bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>
                    Il ristorante è <strong>chiuso il Martedì e Mercoledì</strong>. Vi invitiamo a selezionare un altro giorno (Lunedì, Giovedì, Venerdì, Sabato o Domenica).
                  </span>
                </div>
              )}
            </div>

            {/* Step 2: Time & Number of Guests */}
            <div className="space-y-4 pt-4 border-t border-[#EDE7DD]/10">
              <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold">
                2. Orario & Numero di Ospiti
              </label>

              <div className="space-y-3">
                <label className="block text-xs text-[#EDE7DD]/70">Orario di arrivo</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {(service === 'pranzo' ? lunchSlots : dinnerSlots).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={dayClosed}
                      onClick={() => setTime(slot)}
                      className={`py-2.5 text-xs font-sans font-medium transition-colors cursor-pointer border ${
                        time === slot
                          ? 'bg-[#D1A066] text-[#0d0f12] border-[#D1A066] font-semibold'
                          : 'bg-[#1b1f26] text-[#EDE7DD]/80 border-[#EDE7DD]/10 hover:border-[#D1A066]'
                      } ${dayClosed ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs text-[#EDE7DD]/70 mb-2">Numero di coperti</label>
                <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-10 h-10 shrink-0 text-xs font-serif font-medium transition-colors cursor-pointer border ${
                        guests === num
                          ? 'bg-[#D1A066] text-[#0d0f12] border-[#D1A066] font-semibold'
                          : 'bg-[#1b1f26] text-[#EDE7DD]/80 border-[#EDE7DD]/10 hover:border-[#D1A066]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-xs text-[#9A9184] pl-2 whitespace-nowrap">
                    (Per gruppi superiori a 12 persone: evento privato)
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3: Seating Preference & Occasion */}
            <div className="space-y-4 pt-4 border-t border-[#EDE7DD]/10">
              <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold">
                3. Ambiente & Occasione
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seatingAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSeatingArea(area.name)}
                    className={`text-left p-4 transition-all duration-200 border cursor-pointer ${
                      seatingArea === area.name
                        ? 'bg-[#1b1f26] border-[#D1A066] shadow-sm'
                        : 'bg-[#1b1f26]/60 border-[#EDE7DD]/10 hover:border-[#EDE7DD]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif text-[#EDE7DD]">{area.name}</span>
                      {seatingArea === area.name && <CheckCircle2 className="w-4 h-4 text-[#D1A066]" />}
                    </div>
                    <span className="text-xs text-[#9A9184] font-light block mt-0.5">{area.desc}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Occasione</label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  >
                    <option value="Cena Gourmet">Cena Gourmet</option>
                    <option value="Cena Romantica / Anniversario">Cena Romantica / Anniversario</option>
                    <option value="Pranzo di Famiglia">Pranzo di Famiglia</option>
                    <option value="Incontro di Lavoro">Incontro di Lavoro</option>
                    <option value="Compleanno / Festa">Compleanno / Festa Privata</option>
                    <option value="Degustazione Vini">Degustazione Vini & Foie Gras</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Allergie / Intolleranze</label>
                  <input
                    type="text"
                    placeholder="Es. Celiachia, no crostacei, vegetariano..."
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors placeholder:text-[#9A9184]"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="space-y-4 pt-4 border-t border-[#EDE7DD]/10">
              <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#D1A066] font-semibold">
                4. Dati di Contatto
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Es. Mario"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Cognome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Es. Rossi"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="mario.rossi@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Telefono Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 340 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-3 text-sm focus:outline-none focus:border-[#D1A066] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#EDE7DD]/70 mb-1.5">Richieste speciali per lo Chef</label>
                <textarea
                  rows={2}
                  placeholder="Segnalazioni per la mise en place, torta personalizzata, tavolo vicino al camino..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#1b1f26] border border-[#EDE7DD]/20 text-[#EDE7DD] px-4 py-2.5 text-sm focus:outline-none focus:border-[#D1A066] transition-colors placeholder:text-[#9A9184]"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#EDE7DD]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#9A9184]">
                <ShieldCheck className="w-4 h-4 text-[#D1A066]" />
                <span>Nessuna carta di credito richiesta</span>
              </div>

              <button
                type="submit"
                disabled={dayClosed}
                className={`w-full sm:w-auto px-10 py-4 bg-[#D1A066] text-[#0d0f12] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E5B57C] transition-colors cursor-pointer shadow-lg shadow-[#D1A066]/20 ${
                  dayClosed ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                Conferma Prenotazione
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
