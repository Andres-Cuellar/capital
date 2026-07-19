"use client";

import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
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
              <div className="p-2 md:p-4">
                <button
                  onClick={onClose}
                  className="text-silver-dark hover:text-silver-light transition-colors text-2xl leading-none p-2 float-right"
                  aria-label="Close"
                >
                  ✕
                </button>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/1d5zYuYpGFcnK0oin0wY"
                  style={{ width: "100%", border: "none", overflow: "auto" }}
                  className="min-h-[800px] md:min-h-[600px]"
                />
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
