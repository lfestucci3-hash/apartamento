"use client";

import { motion } from "framer-motion";
import {
  Home,
  Wind,
  Lightbulb,
  ChefHat,
  Bath,
  Layers,
  Shield,
  MapPin,
  Building2,
  Car,
  Trees,
  CheckCircle,
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const diferenciais = [
  {
    icon: Home,
    title: "Planta bem distribuída",
    desc: "43 m² aproveitados com inteligência. Sala integrada, dois quartos e banheiro.",
  },
  {
    icon: Layers,
    title: "Piso porcelanato",
    desc: "Piso porcelanato na sala e cozinha.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação em LED",
    desc: "Apartamento todo em LED. Economia garantida.",
  },
  {
    icon: ChefHat,
    title: "Armários planejados",
    desc: "Cozinha e lavanderia com armários planejados. Mudança mais simples e lar organizado.",
  },
  {
    icon: Bath,
    title: "Banheiro completo",
    desc: "Banheiro com box de vidro e armário aéreo. Conforto para toda a família.",
  },
  {
    icon: Building2,
    title: "2º andar com privacidade",
    desc: "Segurança e privacidade.",
  },
  {
    icon: Car,
    title: "1 vaga de garagem",
    desc: "Vaga exclusiva com cobertura. Segurança e proteção para o seu veículo.",
  },
  {
    icon: Shield,
    title: "Pronto para morar",
    desc: "Imóvel em excelente estado. Documentação 100% regularizada. IPTU 2026 pago. Financiamento imediato.",
  },
  {
    icon: Trees,
    title: "Condomínio clube completo",
    desc: "Piscina adulto e infantil, academia completa, quadra, playground, pista de caminhada, mercadinho, salão de festas e muito mais.",
  },
  {
    icon: MapPin,
    title: "Excelente Localização",
    desc: "Ao lado do Novo Shopping e de bairros nobres da cidade: Ribeirânia, City Ribeirão, Jardim Botânico. Próximo de atacadistas, hospitais, escolas e acesso rápido para as principais avenidas.",
  },
  {
    icon: CheckCircle,
    title: "Aceita FGTS e MCMV",
    desc: "Enquadrado no Minha Casa Minha Vida. Use seu FGTS na entrada e reduza as parcelas.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" aria-label="Diferenciais do imóvel" className="section-pad" style={{ background: "white" }}>
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
          <h3>Por que escolher este apartamento?</h3>
          <h2 style={{ marginTop: "0.5rem" }}>Diferenciais que fazem a diferença</h2>
          <p style={{ color: "var(--brand-muted)", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Cada detalhe foi pensado para proporcionar conforto, economia e qualidade de vida.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {diferenciais.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.5) }}
                style={{
                  background: "var(--brand-light)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(13,17,23,0.08)" }}
              >
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
                  <Icon size={22} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--brand-dark)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--brand-muted)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <WhatsAppButton source="diferenciais" label="Quero conhecer este apartamento" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
