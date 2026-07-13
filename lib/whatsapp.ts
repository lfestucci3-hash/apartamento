// WhatsApp configuration
export const WHATSAPP_NUMBER = "5516992616845"; // TODO: substituir pelo número real

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vi o apartamento no Grand Tropical em Ribeirão Preto e gostaria de saber mais informações."
);

export function getWhatsAppURL(source?: string): string {
  const msg = source
    ? encodeURIComponent(
      `Olá! Vi o apartamento no Grand Tropical em Ribeirão Preto e gostaria de saber mais. (via: ${source})`
    )
    : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
