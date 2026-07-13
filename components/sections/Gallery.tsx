"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { trackGalleryOpen, trackGalleryNavigate } from "@/lib/analytics";

const photos = [
  // Ambiente real
  { src: "/fotos/sacada-gourmet-com-pia.jpg", alt: "Sacada gourmet com pia" },
  { src: "/fotos/sala-estar-e-sala-jantar-vazias-01.jpg", alt: "Sala de estar e jantar" },
  { src: "/fotos/sala-estar-e-sala-jantar-vazias-02.jpg", alt: "Vista da sala integrada" },
  { src: "/fotos/cozinha-armarios-01.jpg", alt: "Cozinha com armários planejados" },
  { src: "/fotos/cozinha-armarios-02.jpg", alt: "Cozinha – vista lateral" },
  { src: "/fotos/quarto-suite-vazio-01.jpg", alt: "Suíte" },
  { src: "/fotos/quarto-suite-vazio-02.jpg", alt: "Suíte – ângulo 2" },
  { src: "/fotos/quarto-solteiro-vazio.jpg", alt: "Segundo dormitório" },
  { src: "/fotos/banheiro-suite-box-armario.jpg", alt: "Banheiro da suíte com box e armário" },
  { src: "/fotos/banheiro-social-box-armario.jpg", alt: "Banheiro social com box e armário" },
  { src: "/fotos/lavanderia-com-armario.jpg", alt: "Lavanderia com armário planejado" },
  // Decorado primeiro (mais impactante)
  { src: "/fotos/decorado/sala-estar-decorada-sofa-e-tv.png", alt: "Sala de estar decorada com sofá e TV" },
  { src: "/fotos/decorado/sala-jantar-decorada.png", alt: "Sala de jantar decorada" },
  { src: "/fotos/decorado/sacada-decorada.png", alt: "Sacada gourmet decorada" },
  { src: "/fotos/decorado/quarto-suite-decorado.png", alt: "Suíte decorada" },
  { src: "/fotos/decorado/quarto-solteiro-cama-casal-decorado.png", alt: "Quarto decorado com cama casal" },
  { src: "/fotos/decorado/quarto-solteiro-cama-solteiro-escritorio-decorado.png", alt: "Quarto decorado como escritório" },
  // Condomínio
  { src: "/fotos/piscina-01.jpeg", alt: "Piscina adulto climatizada" },
  { src: "/fotos/piscina-02.jpeg", alt: "Piscina – área de lazer" },
  { src: "/fotos/academia.jpeg", alt: "Academia equipada" },
  { src: "/fotos/quadra-poliesportiva.jpeg", alt: "Quadra poliesportiva" },
  { src: "/fotos/playground.jpeg", alt: "Playground" },
  { src: "/fotos/churrasqueira.jpeg", alt: "Churrasqueira" },
  { src: "/fotos/salao-de-festas.jpeg", alt: "Salão de festas gourmet" },
  { src: "/fotos/fachada-do-condominio.webp", alt: "Fachada do Condomínio Grand Tropical" },
  { src: "/fotos/fachada-da-torre.jpg", alt: "Torre do condomínio" },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    trackGalleryOpen(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next = (lightboxIndex + dir + photos.length) % photos.length;
      setLightboxIndex(next);
      trackGalleryNavigate(next);
    },
    [lightboxIndex]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    },
    [closeLightbox, navigate]
  );

  return (
    <section id="galeria" aria-label="Galeria de fotos do apartamento" className="section-pad" style={{ background: "var(--brand-light)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
          className="prose-brand"
        >
          <h3>Galeria</h3>
          <h2 style={{ marginTop: "0.5rem" }}>
            Veja cada detalhe do seu futuro lar
          </h2>
          <p style={{ color: "var(--brand-muted)", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            {photos.length} fotos do apartamento e do condomínio. Clique para ampliar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
              onClick={() => openLightbox(idx)}
              aria-label={`Ampliar foto: ${photo.alt}`}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "0.75rem",
                overflow: "hidden",
                cursor: "pointer",
                border: "none",
                padding: 0,
                background: "#e5e3de",
                display: "block",
                width: "100%",
              }}
              className="group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                className="group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(13,17,23,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s",
                }}
                className="group-hover:bg-[rgba(13,17,23,0.45)]"
              >
                <ZoomIn
                  size={28}
                  style={{ color: "white", opacity: 0, transition: "opacity 0.3s" }}
                  className="group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "3rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              color: "var(--brand-muted)",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <Play size={16} aria-hidden="true" />
            Tour completo em vídeo
          </div>
          <div style={{ maxWidth: "380px", margin: "0 auto", aspectRatio: "9/16", position: "relative" }}>
            <video
              controls
              preload="metadata"
              poster="/fotos/fachada-da-torre.jpg"
              aria-label="Vídeo tour do apartamento Grand Tropical"
              style={{ borderRadius: "1rem", width: "100%", height: "100%", objectFit: "cover", boxShadow: "0 8px 32px rgba(13,17,23,0.15)" }}
            >
              <source src="/video/video-do-apartamento.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </motion.div>

        {/* CTA after gallery */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}
        >
          <WhatsAppButton source="gallery" label="Agendar visita pelo WhatsApp" size="lg" />
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de foto"
            tabIndex={-1}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Fechar galeria"
              style={{
                position: "fixed",
                top: "1.25rem",
                right: "1.25rem",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "9999px",
                padding: "0.6rem",
                color: "white",
                cursor: "pointer",
                zIndex: 1100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Foto anterior"
              style={{
                position: "fixed",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "9999px",
                padding: "0.75rem",
                color: "white",
                cursor: "pointer",
                zIndex: 1100,
                display: "flex",
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(92vw, 1100px)",
                height: "min(82vh, 750px)",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="92vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Próxima foto"
              style={{
                position: "fixed",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "9999px",
                padding: "0.75rem",
                color: "white",
                cursor: "pointer",
                zIndex: 1100,
                display: "flex",
              }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Caption */}
            <div
              style={{
                position: "fixed",
                bottom: "1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.85rem",
                textAlign: "center",
              }}
            >
              {photos[lightboxIndex].alt} — {lightboxIndex + 1}/{photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
