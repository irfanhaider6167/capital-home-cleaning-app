import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://capitalcleaning.site/images/logo.png",
}) {
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

    areaServed: [
      {
        "@type": "City",
        name: "Islamabad",
      },
      {
        "@type": "City",
        name: "Rawalpindi",
      },
    ],

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

      telephone: "+923137332085",

      priceRange: "PKR",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Islamabad",
        },
        {
          "@type": "City",
          name: "Rawalpindi",
        },
      ],

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
        content={`${serviceName} in Islamabad and Rawalpindi`}
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
        content={`${serviceName} in Islamabad and Rawalpindi`}
      />

      {/* =========================
          SERVICE SCHEMA
      ========================== */}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
