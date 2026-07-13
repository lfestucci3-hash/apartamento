"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O imóvel aceita financiamento bancário?",
    a: "Sim. O imóvel está com documentação 100% regularizada e apto para financiamento bancário imediato, inclusive pela Caixa Econômica Federal.",
  },
  {
    q: "Posso utilizar meu FGTS?",
    a: "Sim. O FGTS pode ser utilizado na entrada ou para abater o saldo devedor, conforme as regras da Caixa Econômica Federal. É necessário verificar o saldo e as condições no momento do financiamento.",
  },
  {
    q: "O imóvel está enquadrado no Minha Casa Minha Vida?",
    a: "Sim. O apartamento está enquadrado no programa Minha Casa Minha Vida, o que garante condições facilitadas de financiamento e taxas de juros reduzidas.",
  },
  {
    q: "A documentação está regularizada?",
    a: "Sim. Toda a documentação está 100% em dia — matrícula, IPTU, condomínio e escritura. O imóvel está pronto para ser transferido sem nenhuma pendência.",
  },
  {
    q: "O IPTU está pago?",
    a: "Sim. O IPTU do ano de 2026 já está completamente quitado pelo atual proprietário.",
  },
  {
    q: "Quantas vagas de garagem o apartamento possui?",
    a: "O apartamento inclui 1 (uma) vaga de garagem coberta, inclusa no valor do imóvel.",
  },
  {
    q: "O condomínio possui elevador?",
    a: "Sim. O Condomínio Grand Tropical conta com dois elevadores — um social e um de serviço.",
  },
  {
    q: "Qual é a infraestrutura de lazer do condomínio?",
    a: "O condomínio possui piscina adulto e infantil (ambas climatizadas), academia equipada, quadra poliesportiva, playground, pista de caminhada, salão de festas gourmet com churrasqueira e mercadinho interno. Portaria funciona 24 horas.",
  },
  {
    q: "O proprietário aceita propostas?",
    a: "Sim. O proprietário está aberto a analisar propostas sérias. Entre em contato pelo WhatsApp para negociar diretamente.",
  },
  {
    q: "Como faço para agendar uma visita?",
    a: "É simples: clique em qualquer botão de WhatsApp nesta página e envie uma mensagem. O agendamento é feito diretamente pelo WhatsApp, sem formulários ou burocracia.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: isOpen ? "rgba(201,168,76,0.4)" : "var(--brand-border)",
        borderRadius: "0.875rem",
        overflow: "hidden",
        background: isOpen ? "rgba(201,168,76,0.04)" : "white",
        transition: "border-color 0.25s, background 0.25s",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "0.975rem",
            color: isOpen ? "var(--brand-dark)" : "var(--brand-dark)",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={20} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-content"
          >
            <div
              style={{
                padding: "0 1.5rem 1.25rem",
                color: "var(--brand-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      className="section-pad"
      style={{ background: "var(--brand-dark)" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem", color: "white" }}
        >
          <p
            style={{
              color: "var(--brand-accent)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Tirando dúvidas
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Perguntas Frequentes
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem", fontSize: "0.95rem" }}>
            Não encontrou sua dúvida? Fale direto pelo WhatsApp.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
