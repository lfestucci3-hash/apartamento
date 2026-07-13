"use client";

import { MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--brand-darker)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 1.5rem",
        color: "rgba(255,255,255,0.55)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {/* Logo / Name */}
        <div>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: "0.35rem",
            }}
          >
            Grand Tropical
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem", fontSize: "0.85rem" }}>
            <MapPin size={13} style={{ color: "var(--brand-accent)" }} aria-hidden="true" />
            Rua Olivia Maria de Jesus, 1900 · Parque dos Lagos · Ribeirão Preto/SP
          </div>
        </div>

        {/* CTA */}
        <WhatsAppButton
          source="footer"
          label="Falar pelo WhatsApp"
          size="md"
          variant="green"
        />

        {/* Nav links */}
        <nav aria-label="Navegação do rodapé">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              fontSize: "0.85rem",
            }}
          >
            {[
              ["Início", "#hero"],
              ["Galeria", "#galeria"],
              ["Diferenciais", "#diferenciais"],
              ["Ficha Técnica", "#ficha-tecnica"],
              ["Condomínio", "#condominio"],
              ["Localização", "#localizacao"],
              ["FAQ", "#faq"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--brand-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
          © {year} Condomínio Grand Tropical · Ribeirão Preto/SP · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
