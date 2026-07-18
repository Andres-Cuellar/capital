"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "@/lib/i18n/translations";
import { BookingForm } from "./BookingForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Lang;
}

export function BookingModal({ isOpen, onClose, t }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="glass-amber rounded-lg max-w-2xl w-full my-8 relative">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.3em] uppercase block mb-1">
                      {t.bookingModal.eyebrow}
                    </span>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl text-silver-light">
                      {t.bookingModal.title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-silver-dark hover:text-silver-light transition-colors text-2xl leading-none p-2"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <BookingForm t={t} compact />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
