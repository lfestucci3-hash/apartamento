"use client";

import { motion } from "framer-motion";
import {
  Maximize2,
  BedDouble,
  Bath,
  Car,
  Building,
  Layers,
  Lightbulb,
  PackageCheck,
  ChefHat,
  Wind,
} from "lucide-react";

const specs = [
  { icon: Maximize2, label: "Área privativa", value: "58 m²" },
  { icon: BedDouble, label: "Dormitórios", value: "2 quartos" },
  { icon: Bath, label: "Banheiros", value: "2 banheiros" },
  { icon: Car, label: "Garagem", value: "1 vaga exclusiva" },
  { icon: Building, label: "Andar", value: "4º andar" },
  { icon: PackageCheck, label: "Condomínio", value: "R$ 372/mês" },
];

const acabamentos = [
  { icon: Layers, label: "Piso porcelanato em todos os ambientes" },
  { icon: Lightbulb, label: "Iluminação 100% em LED" },
  { icon: ChefHat, label: "Armários planejados na cozinha" },
  { icon: ChefHat, label: "Armários planejados na lavanderia" },
  { icon: Bath, label: "Banheiros com box de vidro" },
  { icon: Bath, label: "Banheiros com armários aéreos" },
  { icon: Wind, label: "Sacada gourmet ampla com pia" },
  { icon: PackageCheck, label: "Excelente padrão de acabamento" },
];

export function FichaTecnica() {
  return (
    <section
      id="ficha-tecnica"
      aria-label="Ficha técnica do apartamento"
      className="section-pad"
      style={{ background: "var(--brand-dark)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem", color: "white" }}
        >
          <p style={{ color: "var(--brand-accent)", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Especificações técnicas
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Ficha Técnica
          </h2>
        </motion.div>

        {/* Specs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  textAlign: "center",
                  transition: "border-color 0.25s",
                }}
                whileHover={{ borderColor: "rgba(201,168,76,0.4)" }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.75rem",
                    background: "rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>
                    {spec.label}
                  </div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "white" }}>
                    {spec.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "3rem" }} />

        {/* Acabamentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Acabamentos inclusos
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {acabamentos.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.75rem",
                    padding: "0.875rem 1rem",
                  }}
                >
                  <Icon size={16} style={{ color: "var(--brand-accent)", flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
