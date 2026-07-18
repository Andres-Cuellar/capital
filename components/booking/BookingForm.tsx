"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Lang } from "@/lib/i18n/translations";

const serviceKeys = ["basicPkg", "silverPkg", "goldPkg", "polishPkg"] as const;

export function BookingForm({
  t,
  compact = false,
}: {
  t: Lang;
  compact?: boolean;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    serviceType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-amber text-3xl">✓</span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-silver-light mb-2">
          {t.bookingForm.successTitle}
        </h3>
        <p className="text-silver-dark">{t.bookingForm.successText}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-silver text-sm mb-1.5 tracking-wide">
            {t.bookingForm.fullName}
          </label>
          <input
            type="text" name="fullName" required
            value={formData.fullName} onChange={handleChange}
            className="w-full glass border border-amber/10 text-silver-light px-4 py-3 text-sm focus:border-amber focus:outline-none transition-colors"
            placeholder={t.bookingForm.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-silver text-sm mb-1.5 tracking-wide">
            {t.bookingForm.phone}
          </label>
          <input
            type="tel" name="phone" required
            value={formData.phone} onChange={handleChange}
            className="w-full glass border border-amber/10 text-silver-light px-4 py-3 text-sm focus:border-amber focus:outline-none transition-colors"
            placeholder={t.bookingForm.phonePlaceholder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-silver text-sm mb-1.5 tracking-wide">
            {t.bookingForm.email}
          </label>
          <input
            type="email" name="email" required
            value={formData.email} onChange={handleChange}
            className="w-full glass border border-amber/10 text-silver-light px-4 py-3 text-sm focus:border-amber focus:outline-none transition-colors"
            placeholder={t.bookingForm.emailPlaceholder}
          />
        </div>
        <div>
          <label className="block text-silver text-sm mb-1.5 tracking-wide">
            {t.bookingForm.address}
          </label>
          <input
            type="text" name="address"
            value={formData.address} onChange={handleChange}
            className="w-full glass border border-amber/10 text-silver-light px-4 py-3 text-sm focus:border-amber focus:outline-none transition-colors"
            placeholder={t.bookingForm.addressPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className="block text-silver text-sm mb-3 tracking-wide">
          {t.bookingForm.serviceType}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {serviceKeys.map((key) => (
            <label
              key={key}
              className={`flex items-center justify-center px-4 py-2.5 border cursor-pointer text-sm transition-all duration-300 ${
                formData.serviceType === t.bookingForm[key]
                  ? "border-amber bg-amber/10 text-amber"
                  : "border-black-border text-silver-dark hover:border-silver-dark"
              }`}
            >
              <input
                type="radio" name="serviceType"
                value={t.bookingForm[key]}
                checked={formData.serviceType === t.bookingForm[key]}
                onChange={handleChange}
                className="sr-only"
              />
              {t.bookingForm[key]}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-silver text-sm mb-1.5 tracking-wide">
          {t.bookingForm.notes}
        </label>
        <textarea
          name="notes" rows={compact ? 2 : 4}
          value={formData.notes} onChange={handleChange}
          className="w-full glass border border-amber/10 text-silver-light px-4 py-3 text-sm focus:border-amber focus:outline-none transition-colors resize-none"
          placeholder={t.bookingForm.notesPlaceholder}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-amber text-black font-[family-name:var(--font-accent)] text-xl tracking-wider py-4 hover:bg-amber-light transition-colors duration-300"
      >
        {t.bookingForm.submit}
      </motion.button>
    </form>
  );
}
