// Analytics events for GA4 / GTM
// Assumes window.dataLayer is available (GTM) or window.gtag (GA4 direct)

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Record<string, string | number | boolean>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  // GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
  // GA4 direct
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackWhatsAppClick(source: string) {
  pushEvent("whatsapp_click", { button_location: source });
}

export function trackPageView() {
  pushEvent("page_view", { page_title: "Grand Tropical - Apartamento à Venda" });
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  pushEvent("scroll_depth", { percent_scrolled: depth });
}

export function trackTimeOnPage(seconds: number) {
  pushEvent("time_on_page", { seconds_on_page: seconds });
}

export function trackGalleryOpen(photoIndex: number) {
  pushEvent("gallery_open", { photo_index: photoIndex });
}

export function trackGalleryNavigate(photoIndex: number) {
  pushEvent("gallery_navigate", { photo_index: photoIndex });
}
