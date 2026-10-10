/* Jacho GA4 — one shared loader for standalone HTML and Next.js routes.
 * Only report the canonical production hostname; do not pollute GA4 from Vercel previews or localhost.
 * GA4 automatically emits initial page_view and, if enabled in Enhanced Measurement,
 * Next.js history navigation page_view events. Do not add manual page_view calls.
 * Never attach client or counseling-session data to analytics events.
 */
(function () {
  "use strict";
  if (window.location.hostname !== "jacho.vercel.app") return;
  if (window.__jachoGa4Initialized) return;
  window.__jachoGa4Initialized = true;

  var measurementId = "G-JSNFQ308SQ";
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(tag);
})();
