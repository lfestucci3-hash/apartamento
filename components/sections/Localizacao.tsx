"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ShoppingBag, Building2, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const distances = [
  { icon: Building2, label: "Novo Shopping", time: "1 min", color: "#C9A84C" },
  { icon: Zap, label: "Av. Castelo Branco  | Av. Maurílio Biagi", time: "2 min", color: "#C9A84C" },
  { icon: ShoppingBag, label: "Assaí | Paulistão | Tonin", time: "4 min", color: "#C9A84C" },
];

const nearby = [
  "Novo Shopping",
  "Atacadistas como: Assaí | Paulistão | Tonin",
  "Poupatempo",
  "Hospitais",
  "Escolas e Universidades",
  "Fácil acesso as principais avenidas",
  "Comércio local",
  "E muito mais!",
];

export function Localizacao() {
  return (
    <section id="localizacao" aria-label="Localização do imóvel" className="section-pad" style={{ background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          className="prose-brand"
        >
          <h3>Onde fica?</h3>
          <h2 style={{ marginTop: "0.5rem" }}>Localização privilegiada na Zona Leste</h2>
          <p style={{ color: "var(--brand-muted)", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Tudo o que você precisa a poucos minutos do seu novo lar.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
        >
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--brand-border)", boxShadow: "0 4px 24px rgba(13,17,23,0.08)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323.4271953482948!2d-47.76633128515283!3d-21.21222827710527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b8a057e82b55%3A0x78dad3b38bcbd16a!2sMRV%20Parque%20Reino%20da%20Inglaterra!5e1!3m2!1spt-BR!2sbr!4v1792266746511!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Condomínio Parque Reino da Inglaterra, Ribeirão Preto"
              aria-label="Mapa de localização do Condomínio Parque Reino da Inglaterra"
            />
          </motion.div>

          {/* Address + distances */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "var(--brand-dark)",
                borderRadius: "1.25rem",
                padding: "2rem",
                color: "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                <MapPin size={20} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--brand-accent)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Endereço
                </span>
              </div>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.5, marginBottom: "0.5rem" }}>
                Avenida Professora Edul Rangel Rabello, 405
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                Residencial Jequitibá · Ribeirão Preto/SP
              </p>
              <div style={{ marginTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.25rem" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Na vizinhança
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {nearby.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                      <span style={{ width: "5px", height: "5px", background: "var(--brand-accent)", borderRadius: "50%", flexShrink: 0 }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Distance cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {distances.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    style={{
                      background: "var(--brand-light)",
                      border: "1px solid var(--brand-border)",
                      borderRadius: "1rem",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                      <div
                        style={{
                          width: "2.75rem",
                          height: "2.75rem",
                          borderRadius: "0.75rem",
                          background: "rgba(201,168,76,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                      </div>
                      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--brand-dark)" }}>
                        {d.label}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--brand-accent)", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>
                      <Clock size={14} aria-hidden="true" />
                      {d.time}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <WhatsAppButton source="localizacao" label="Agendar visita presencial" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
