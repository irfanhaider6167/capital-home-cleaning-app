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
// export const trackCallConversion = () => {
//   if (typeof window !== "undefined" && window.gtag) {
//     window.gtag("event", "conversion", {
//       send_to: "AW-18165889785/vD4SCJmbrdQcEPn1ldZD",
//     });
//   }
// };
export const trackCallConversion = (event) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  const phoneLink = event.currentTarget.href;
  let continued = false;

  const continueToCall = () => {
    if (continued) return;
    continued = true;
    window.location.href = phoneLink;
  };

  window.gtag("event", "conversion", {
    send_to: "AW-18165889785/vD4SCJmbrdQcEPn1ldZD",
    event_callback: continueToCall,
    event_timeout: 1000,
  });

  setTimeout(continueToCall, 1200);
};

// ==============================
// Email Conversion
// ==============================
export const trackEmailConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18165889785/YcigCOmPyNQcEPn1ldZD",
    });
  }
};
