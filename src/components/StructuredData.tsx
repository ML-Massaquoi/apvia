export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "APVIA Ltd",
    alternateName: [
      "African Projects Ventures Investments and Advancement Limited",
      "Apvia",
      "apvia",
      "APVIA",
      "Apvia Ltd",
      "Apvia Sierra Leone",
    ],
    url: "https://www.apvia-sl.com",
    logo: "https://www.apvia-sl.com/Apvia_logo.jpeg",
    description:
      "A diversified multi-sectoral holding company headquartered in Freetown, Sierra Leone, driving sustainable economic development across West Africa through mining, agriculture, construction, logistics, and trade.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "91 Fort Street",
      addressLocality: "Freetown",
      addressCountry: "SL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+232-73-88-66-22",
      contactType: "customer service",
      email: "info@apvia-sl.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/in/apvia-sl-446918433/",
      "https://www.facebook.com/profile.php?id=61594107118933",
      "https://www.instagram.com/apviasierraleone/",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Sierra Leone",
      },
      {
        "@type": "Country",
        name: "West Africa",
      },
    ],
    knowsAbout: [
      "Investment in Sierra Leone",
      "Sierra Leone mining",
      "Sierra Leone agriculture",
      "Sierra Leone construction",
      "West Africa trade",
      "Sierra Leone logistics",
      "Sierra Leone infrastructure",
    ],
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 100,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "APVIA Ltd",
    alternateName: ["APVIA Sierra Leone", "Apvia", "apvia"],
    url: "https://www.apvia-sl.com",
    description:
      "Sierra Leone's leading investment company. Discover profitable opportunities in mining, agriculture, construction, logistics, and trade.",
    publisher: {
      "@type": "Organization",
      name: "APVIA Ltd",
      logo: "https://www.apvia-sl.com/Apvia_logo.jpeg",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.apvia-sl.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "APVIA Ltd",
    image: "https://www.apvia-sl.com/Apvia_logo.jpeg",
    url: "https://www.apvia-sl.com",
    telephone: "+232-73-88-66-22",
    address: {
      "@type": "PostalAddress",
      streetAddress: "91 Fort Street",
      addressLocality: "Freetown",
      addressCountry: "SL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4841,
      longitude: -13.2317,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
    </>
  );
}
