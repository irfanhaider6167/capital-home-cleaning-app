import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://capitalcleaning.site/images/logo.png",
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: title,
    description: description,
    url: url,

    provider: {
      "@type": "LocalBusiness",

      name: "Capital Cleaning & Maintenance",

      image: "https://capitalcleaning.site/images/logo.png",

      logo: "https://capitalcleaning.site/images/logo.png",

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

      openingHoursSpecification: {
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

      sameAs: ["https://www.facebook.com/"],
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

    serviceType: title,
  };

  return (
    <Helmet>
      {/* Basic SEO */}

      <title>{title}</title>

      <meta name="author" content="Capital Cleaning & Maintenance" />

      <meta name="theme-color" content="#2563eb" />

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      <meta property="og:site_name" content="Capital Cleaning & Maintenance" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      {/* Schema */}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
