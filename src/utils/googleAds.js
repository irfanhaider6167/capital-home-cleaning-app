// src/utils/googleAds.js

/**
 * Google Ads Conversion Tracking
 * Account ID: AW-18165889785
 */

// ==============================
// WhatsApp Conversion
// ==============================
export const trackWhatsAppConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/WcNqCOH2xdQcEPn1ldZD",
    });
  }
};

// ==============================
// Phone Call Conversion
// ==============================
export const trackCallConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/vD4SCJmbrdQcEPn1ldZD",
    });
  }
};

// ==============================
// Email Conversion
// ==============================
export const trackEmailConversion = () => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/YcigCOmPyNQcEPn1ldZD",
    });
  }
};
