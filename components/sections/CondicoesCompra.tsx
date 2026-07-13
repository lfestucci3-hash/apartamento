"use client";

import { motion } from "framer-motion";
import {
  Home,
  Banknote,
  FileCheck,
  Receipt,
  BadgePercent,
  TrendingDown,
  CheckCircle,
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const conditions = [
  {
    icon: Home,
    title: "Minha Casa Minha Vida",
    desc: "Imóvel enquadrado no programa MCMV. Condições facilitadas e taxas especiais de financiamento.",
    highlight: true,
  },
  {
    icon: Banknote,
    title: "Use seu FGTS",
    desc: "Utilize o saldo do FGTS como entrada ou para abater no saldo devedor. Condições conforme Caixa.",
    highlight: false,
  },
  {
    icon: FileCheck,
    title: "Financiamento Bancário",
    desc: "Documentação 100% regularizada e imóvel apto para financiamento imediato. Sem surpresas.",
    highlight: false,
  },
  {
    icon: Receipt,
    title: "IPTU 2026 Quitado",
    desc: "Não se preocupe com o IPTU deste ano. Já está pago e incluído no negócio.",
    highlight: false,
  },
  {
    icon: BadgePercent,
    title: "50% de desconto no cartório",
    desc: "Para compradores do primeiro imóvel, desconto de 50% nas taxas cartorárias conforme lei vigente.",
    highlight: false,
  },
  {
    icon: TrendingDown,
    title: "Abaixo da avaliação da Caixa",
    desc: "Avaliado em R$ 290.000 pela Caixa Econômica, sendo vendido por R$ 265.000. Economia real de R$ 25.000.",
    highlight: true,
  },
];

export function CondicoesCompra() {
  return (
    <section
      id="condicoes"
      aria-label="Condições de compra"
      className="section-pad"
      style={{ background: "var(--brand-light)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          className="prose-brand"
        >
          <h3>Como comprar?</h3>
          <h2 style={{ marginTop: "0.5rem" }}>Condições facilitadas para você realizar seu sonho</h2>
          <p style={{ color: "var(--brand-muted)", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            O proprietário facilita ao máximo para que a compra seja simples e sem burocracia.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {conditions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.08, 0.4) }}
                style={{
                  background: item.highlight ? "var(--brand-dark)" : "white",
                  border: item.highlight ? "none" : "1px solid var(--brand-border)",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(13,17,23,0.12)" }}
              >
                {item.highlight && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "120px",
                      height: "120px",
                      background: "radial-gradient(circle at top right, rgba(201,168,76,0.15) 0%, transparent 70%)",
                    }}
                  />
                )}
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.875rem",
                    background: item.highlight ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: item.highlight ? "white" : "var(--brand-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: item.highlight ? "rgba(255,255,255,0.65)" : "var(--brand-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Analisa propostas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "2.5rem",
            textAlign: "center",
            background: "white",
            border: "2px solid rgba(37,211,102,0.3)",
            borderRadius: "1rem",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <CheckCircle size={20} style={{ color: "#25D366", flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--brand-dark)" }}>
            O proprietário analisa propostas. Não perca a oportunidade!
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <WhatsAppButton source="condicoes" label="Fazer uma proposta pelo WhatsApp" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
