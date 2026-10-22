"use client";
// components/sections/Booking.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { BOOKING_SERVICES, SITE } from "@/lib/content";

interface BookingProps {
  selectedService?: string;
}

export default function Booking({ selectedService }: BookingProps) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    service: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pre-select service from parent
  useEffect(() => {
    if (selectedService) {
      setForm((f) => ({ ...f, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())     e.name = "Ce champ est requis.";
    if (!form.whatsapp.trim()) e.whatsapp = "Ce champ est requis.";
    else if (!/^\+?\d{7,15}$/.test(form.whatsapp.replace(/\s/g, "")))
      e.whatsapp = "Numéro invalide (ex. +22890000000)";
    if (!form.service)         e.service = "Veuillez sélectionner un service.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    const message = `Bonjour Top Pressing 👋\n\n*Nom / Structure :* ${form.name}\n*Service :* ${form.service}\n*Détails :* ${form.details || "—"}`;
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      window.open(
        `https://wa.me/${SITE.whatsappEnv}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 600);
  };

  const Field = ({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral mb-1.5">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-error text-xs mt-1">
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section id="reservation" className="py-20 sm:py-28 bg-base-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Réservation"
          title="Projet Pressing ?"
          subtitle="Décrivez votre projet et nous vous recontactons sur WhatsApp."
        />

        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-white/60">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle2 size={64} className="text-success mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-primary mb-2">Message envoyé !</h3>
                <p className="text-neutral/70 mb-6">Nous avons ouvert WhatsApp avec votre message. Notre équipe vous répondra rapidement.</p>
                <button onClick={() => setSuccess(false)} className="btn btn-outline btn-primary rounded-2xl">
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Nom / Structure" id="booking-name" error={errors.name}>
                    <input
                      id="booking-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ex. Pressing Royal"
                      className={`input input-bordered w-full rounded-xl ${errors.name ? "input-error" : ""}`}
                    />
                  </Field>
                  <Field label="Numéro WhatsApp" id="booking-whatsapp" error={errors.whatsapp}>
                    <input
                      id="booking-whatsapp"
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+228 90 00 00 00"
                      className={`input input-bordered w-full rounded-xl ${errors.whatsapp ? "input-error" : ""}`}
                    />
                  </Field>
                </div>

                <Field label="Service souhaité" id="booking-service" error={errors.service}>
                  <select
                    id="booking-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`select select-bordered w-full rounded-xl ${errors.service ? "select-error" : ""}`}
                  >
                    <option value="">— Sélectionner un service —</option>
                    {BOOKING_SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Détails du service" id="booking-details">
                  <textarea
                    id="booking-details"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    rows={4}
                    placeholder="Décrivez votre projet, vos besoins, votre budget estimé..."
                    className="textarea textarea-bordered w-full rounded-xl resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-accent w-full rounded-2xl text-white font-bold text-base py-4 h-auto gap-3 shadow-lg hover:shadow-xl transition-shadow"
                  id="booking-submit"
                >
                  {loading ? (
                    <><Loader2 size={20} className="animate-spin" /> Envoi en cours…</>
                  ) : (
                    <><MessageCircle size={20} /> Valider & Envoyer sur WhatsApp</>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
