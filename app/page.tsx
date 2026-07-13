import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { FichaTecnica } from "@/components/sections/FichaTecnica";
import { Condominio } from "@/components/sections/Condominio";
import { Localizacao } from "@/components/sections/Localizacao";
import { CondicoesCompra } from "@/components/sections/CondicoesCompra";
import { FAQ } from "@/components/sections/FAQ";
import { ChamadaFinal } from "@/components/sections/ChamadaFinal";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollTracker } from "@/components/ScrollTracker";

export default function HomePage() {
  return (
    <main>
      <ScrollTracker />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Galeria */}
      <Gallery />

      {/* 3. Diferenciais */}
      <Diferenciais />

      {/* 4. Ficha Técnica */}
      <FichaTecnica />

      {/* 5. Condomínio */}
      <Condominio />

      {/* 6. Localização */}
      <Localizacao />

      {/* 7. Condições de Compra */}
      <CondicoesCompra />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Chamada Final */}
      <ChamadaFinal />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
