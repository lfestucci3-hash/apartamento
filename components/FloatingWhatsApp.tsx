"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="whatsapp-float" role="complementary" aria-label="Botão flutuante WhatsApp">
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            right: "calc(100% + 0.75rem)",
            bottom: "50%",
            transform: "translateY(50%)",
            background: "#0D1117",
            color: "white",
            padding: "0.6rem 1rem",
            borderRadius: "0.75rem",
            fontSize: "0.82rem",
            fontWeight: 500,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          👋 Tire suas dúvidas agora!
          <div
            style={{
              position: "absolute",
              right: "-6px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "6px solid #0D1117",
            }}
          />
        </div>
      )}

      <a
        href={getWhatsAppURL("floating_button")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        aria-label="Falar pelo WhatsApp"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "9999px",
          background: "#25D366",
          color: "white",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        className="btn-whatsapp-pulse hover:scale-110"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </a>
    </div>
  );
}
