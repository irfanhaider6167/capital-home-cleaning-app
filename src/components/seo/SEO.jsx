import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://capitalcleaning.site/images/logo.png",
}) {
  const location = useLocation();

  // Determine active city based on URL path to optimize Local SEO dynamically
  const isLahore = location.pathname.startsWith("/lahore");

  // Dynamic variables for Local SEO & Schema
  const targetCityName = isLahore ? "Lahore" : "Islamabad & Rawalpindi";
  const schemaAreaServed = isLahore
    ? [{ "@type": "City", name: "Lahore" }]
    : [
        { "@type": "City", name: "Islamabad" },
        { "@type": "City", name: "Rawalpindi" },
      ];

  // Dynamic business contact info based on city
  const businessPhone = isLahore ? "+923117838413" : "+923137332085"; // Replace Lahore number when you have it

  // Extract clean service name from SEO title
  const serviceName = title?.split(" | ")[0] || title;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    description: description,
    url: url,
    image: image,
    serviceType: serviceName,
    areaServed: schemaAreaServed, // Dynamically assigned
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://capitalcleaning.site/#business",
      name: "Capital Cleaning & Maintenance",
      image: "https://capitalcleaning.site/images/logo.png",
      logo: {
        "@type": "ImageObject",
        url: "https://capitalcleaning.site/images/logo.png",
      },
      url: "https://capitalcleaning.site",
      telephone: businessPhone, // Dynamically assigned
      priceRange: "PKR",
      address: {
        "@type": "PostalAddress",
        // Base address set to HQ, you can make this dynamic too if you have a Lahore office address
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
      areaServed: schemaAreaServed, // Dynamically assigned
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}
      <title>{title}</title>
      <meta name="author" content="Capital Cleaning & Maintenance" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />
      <meta name="theme-color" content="#2563eb" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content={targetCityName} />

      {/* =========================
          OPEN GRAPH
      ========================== */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content={`${serviceName} in ${targetCityName}`}
      />
      <meta property="og:site_name" content="Capital Cleaning & Maintenance" />

      {/* =========================
          TWITTER / X
      ========================== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`${serviceName} in ${targetCityName}`}
      />

      {/* =========================
          SERVICE SCHEMA (JSON-LD)
      ========================== */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
