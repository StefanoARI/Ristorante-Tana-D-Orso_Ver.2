import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ReservationSection } from './ReservationSection';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0d0f12] border border-[#D1A066]/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE7DD]/10 bg-[#161a20]">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D1A066] font-semibold">
            Ristorante Tana d’Orso · Prenotazione
          </span>
          <button
            onClick={onClose}
            aria-label="Chiudi finestra di prenotazione"
            className="w-8 h-8 rounded-full border border-[#EDE7DD]/20 flex items-center justify-center text-[#EDE7DD] hover:border-[#D1A066] hover:text-[#D1A066] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          <ReservationSection isModal={true} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
