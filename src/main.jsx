import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

// ==========================================
// REACT APPLICATION ENTRY POINT
// ==========================================
// 1. StrictMode: Highlights potential problems in an application
// 2. HelmetProvider: Manages dynamic SEO meta tags across pages
// 3. BrowserRouter: Enables client-side routing
// ==========================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
