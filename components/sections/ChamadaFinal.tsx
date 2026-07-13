"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, TrendingDown, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const bullets = [
  { icon: CheckCircle, text: "Pronto para morar — sem obras, sem espera" },
  { icon: TrendingDown, text: "R$ 25.000 abaixo da avaliação da Caixa" },
  { icon: CheckCircle, text: "Documentação 100% regularizada" },
  { icon: CheckCircle, text: "IPTU 2026 já quitado" },
  { icon: Clock, text: "Proprietário analisa propostas — oportunidade única" },
];

export function ChamadaFinal() {
  return (
    <section
      id="contato"
      aria-label="Chamada final para contato"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background */}
      <Image
        src="/fotos/decorado/sala-estar-decorada-sofa-e-tv.png"
        alt="Sala de estar decorada do apartamento Grand Tropical"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(6,10,15,0.93) 0%, rgba(6,10,15,0.82) 50%, rgba(13,17,23,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "780px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(37,211,102,0.15)",
            border: "1px solid rgba(37,211,102,0.35)",
            borderRadius: "9999px",
            padding: "0.35rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#4DF098",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          <Clock size={12} aria-hidden="true" />
          Oportunidade por tempo limitado
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Seu novo lar está
          <br />
          <span style={{ color: "#E8C97A" }}>esperando por você</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "580px",
            margin: "0 auto 2rem",
            lineHeight: 1.65,
          }}
        >
          Um apartamento com acabamento de qualidade, condomínio clube e documentação perfeita —
          abaixo do valor de mercado. Não deixe essa oportunidade passar.
        </motion.p>

        {/* Bullet points */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            marginBottom: "2.5rem",
            textAlign: "left",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
          }}
        >
          {bullets.map(({ icon: Icon, text }) => (
            <li
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
              }}
            >
              <Icon size={18} style={{ color: "#4DF098", flexShrink: 0 }} aria-hidden="true" />
              {text}
            </li>
          ))}
        </motion.ul>

        {/* Price reminder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "1rem",
            padding: "1.25rem 2rem",
            marginBottom: "2rem",
            display: "inline-block",
          }}
        >
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
            Valor do imóvel
          </div>
          <div style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            R$ 265.000
          </div>
          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>
            Avaliação Caixa: R$ 290.000 · Economia de R$ 25.000
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <WhatsAppButton
            source="chamada_final"
            label="Quero saber mais pelo WhatsApp"
            size="lg"
            pulse={true}
          />
          <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            Sem compromisso · Resposta rápida · Atendimento personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
}
