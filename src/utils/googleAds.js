// src/utils/googleAds.js

// WhatsApp Conversion
export const trackWhatsAppConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/WcNqCOH2xdQcEPn1ldZD",
    });
  }
};

// Phone Call Conversion
// ⚠️ Abhi temporary same label use ho raha hai.
// Jab Call Conversion create kar lenge to neeche wala label replace kar dena.
export const trackCallConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/WcNqCOH2xdQcEPn1ldZD",
    });
  }
};

// Email Click (Optional)
export const trackEmailConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/WcNqCOH2xdQcEPn1ldZD",
    });
  }
};
