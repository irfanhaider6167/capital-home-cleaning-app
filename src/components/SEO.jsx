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

      url: "https://capitalcleaning.site",

      image: image,

      telephone: "+923137332085",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
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
