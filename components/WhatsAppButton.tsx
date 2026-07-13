"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppButtonProps {
  source: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "green" | "outline" | "dark";
  className?: string;
  pulse?: boolean;
}

export function WhatsAppButton({
  source,
  label = "Saber mais pelo WhatsApp",
  size = "md",
  variant = "green",
  className = "",
  pulse = false,
}: WhatsAppButtonProps) {
  const sizeMap = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-base gap-2.5",
    lg: "px-9 py-4.5 text-lg gap-3",
  };

  const variantMap = {
    green:
      "bg-[#25D366] hover:bg-[#1DA850] text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white",
    dark: "bg-[#0D1117] hover:bg-[#1a2332] text-white shadow-lg",
  };

  return (
    <a
      href={getWhatsAppURL(source)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      aria-label={`Entrar em contato pelo WhatsApp - ${label}`}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer",
        sizeMap[size],
        variantMap[variant],
        pulse ? "btn-whatsapp-pulse" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MessageCircle
        size={size === "sm" ? 18 : size === "lg" ? 24 : 20}
        className="flex-shrink-0"
        aria-hidden="true"
      />
      <span>{label}</span>
    </a>
  );
}
