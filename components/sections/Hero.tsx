"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  TrendingDown,
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const badges = [
  { label: "Aceita Financiamento", icon: CheckCircle },
  { label: "Minha Casa Minha Vida", icon: CheckCircle },
  { label: "FGTS", icon: CheckCircle },
  { label: "Documentação em dia", icon: CheckCircle },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação do imóvel"
      style={{ position: "relative", minHeight: "100svh", overflow: "hidden" }}
    >
      {/* Background image */}
      <Image
        src="/fotos/fachada-da-torre.jpg"
        alt="Fachada do Condomínio Grand Tropical em Ribeirão Preto"
        fill
        priority
        quality={85}
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(6,10,15,0.55) 0%, rgba(6,10,15,0.75) 50%, rgba(6,10,15,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100svh",
          padding: "5rem 1.5rem 3rem",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: "9999px",
            padding: "0.4rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#E8C97A",
            marginBottom: "1.5rem",
          }}
        >
          <Star size={13} aria-hidden="true" />
          Condomínio Grand Tropical · Ribeirão Preto/SP
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "820px",
            marginBottom: "1.25rem",
          }}
        >
          O apartamento que você{" "}
          <span style={{ color: "#E8C97A" }}>sempre quis</span>{" "}
          está esperando por você
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "620px",
            marginBottom: "2rem",
            lineHeight: 1.65,
          }}
        >
          58 m² com 2 quartos, sacada gourmet e condomínio clube completo no
          coração da Zona Leste de Ribeirão Preto. Pronto para morar.
        </motion.p>

        {/* Price block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "1rem",
            padding: "1.25rem 2rem",
            marginBottom: "2rem",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Esta Oportunidade por Apenas:
          </div>
          <div
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "white",
            }}
          >
            R$ 265.000
          </div>
          {/* Savings badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(37,211,102,0.2)",
              border: "1px solid rgba(37,211,102,0.4)",
              borderRadius: "9999px",
              padding: "0.3rem 0.85rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#4DF098",
            }}
          >
            <TrendingDown size={14} aria-hidden="true" />
            R$ 25.000 abaixo da avaliação da Caixa
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
            Avaliação Caixa Econômica: R$ 290.000
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginBottom: "2rem" }}
        >
          <WhatsAppButton
            source="hero"
            label="Saber mais pelo WhatsApp"
            size="lg"
            pulse={true}
          />
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          {badges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                padding: "0.3rem 0.85rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <Icon size={12} aria-hidden="true" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
          }}
          aria-hidden="true"
        >
          <span>Ver mais</span>
          <div className="animate-float">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 13.586L3.707 7.293 2.293 8.707 10 16.414l7.707-7.707-1.414-1.414z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
