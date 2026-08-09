"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
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
            role="dialog"
            aria-modal="true"
          >
            <div className="glass-amber rounded-lg max-w-2xl w-full max-h-[90vh] my-8 relative flex flex-col overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 text-silver-dark hover:text-silver-light transition-colors text-2xl leading-none p-2"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="overflow-hidden h-[520px] md:h-[640px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/1d5zYuYpGFcnK0oin0wY"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Booking form"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
