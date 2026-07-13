"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Waves,
  Dumbbell,
  Trophy,
  Footprints,
  Baby,
  PartyPopper,
  Flame,
  ShoppingCart,
  Shield,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Piscinas Climatizadas",
    desc: "Adulto e infantil — abertas o ano todo",
    img: "/fotos/piscina-01.jpeg",
  },
  {
    icon: Dumbbell,
    title: "Academia Equipada",
    desc: "Equipamentos modernos sem sair de casa",
    img: "/fotos/academia.jpeg",
  },
  {
    icon: Trophy,
    title: "Quadra Poliesportiva",
    desc: "Futebol, basquete e muito esporte",
    img: "/fotos/quadra-poliesportiva.jpeg",
  },
  {
    icon: Baby,
    title: "Playground",
    desc: "Área segura e divertida para as crianças",
    img: "/fotos/playground.jpeg",
  },
  {
    icon: Flame,
    title: "Churrasqueira",
    desc: "Para os melhores momentos em família",
    img: "/fotos/churrasqueira.jpeg",
  },
  {
    icon: PartyPopper,
    title: "Salão de Festas Gourmet",
    desc: "Espaço elegante para suas comemorações",
    img: "/fotos/salao-de-festas.jpeg",
  },
];

const extras = [
  { icon: Footprints, label: "Pista de Caminhada" },
  { icon: ShoppingCart, label: "Mercadinho Interno" },
  { icon: Shield, label: "Portaria 24 horas" },
  { icon: ElevatorIcon, label: "2 Elevadores" },
];

// Elevator icon (not available in lucide)
function ElevatorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={props.width ?? 20} height={props.height ?? 20} style={props.style}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 9l3-3 3 3M9 15l3 3 3-3" />
    </svg>
  );
}

export function Condominio() {
  return (
    <section id="condominio" aria-label="Estrutura de lazer do condomínio" className="section-pad" style={{ background: "var(--brand-light)" }}>
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
          <h3>Condomínio Grand Tropical</h3>
          <h2 style={{ marginTop: "0.5rem" }}>
            Um clube dentro do seu condomínio
          </h2>
          <p style={{ color: "var(--brand-muted)", marginTop: "1rem", maxWidth: "540px", margin: "1rem auto 0" }}>
            Lazer, conveniência e segurança — tudo o que você precisa, a poucos passos da sua porta.
          </p>
        </motion.div>

        {/* Amenity cards with photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.08, 0.4) }}
                style={{
                  background: "white",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(13,17,23,0.04)",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(13,17,23,0.1)" }}
              >
                {/* Photo */}
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Content */}
                <div style={{ padding: "1.25rem", display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.625rem",
                      background: "rgba(201,168,76,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-dark)", marginBottom: "0.25rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--brand-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra amenities row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {extras.map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "white",
                border: "1px solid var(--brand-border)",
                borderRadius: "9999px",
                padding: "0.6rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--brand-dark)",
              }}
            >
              <Icon size={16} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
