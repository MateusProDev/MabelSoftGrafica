interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd({
  name,
  url,
  logo,
  description,
  address,
  phone,
  email,
  openingHours,
  latitude,
  longitude,
}: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    street: string;
    number?: string;
    neighborhood?: string;
    city: string;
    state: string;
    zip: string;
  };
  phone?: string;
  email?: string;
  openingHours?: string;
  latitude?: string;
  longitude?: string;
}) {
  const streetAddress = address
    ? [[address.street, address.number].filter(Boolean).join(", "), address.neighborhood]
        .filter(Boolean)
        .join(" - ")
    : undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    url,
    ...(logo && { logo, image: logo }),
    ...(description && { description }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...(streetAddress && { streetAddress }),
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: "BR",
      },
    }),
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    ...(openingHours && {
      openingHours,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    }),
    ...(latitude &&
      longitude && {
        geo: { "@type": "GeoCoordinates", latitude, longitude },
      }),
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Pix, Dinheiro, Cartão",
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    ...(description && { description }),
    inLanguage: "pt-BR",
  };

  return <JsonLd data={data} />;
}

export function FAQJsonLd({
  questions,
}: {
  questions: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  url,
  providerName,
  providerUrl,
  areaServed = "Fortaleza",
}: {
  name: string;
  description: string;
  url: string;
  providerName: string;
  providerUrl: string;
  areaServed?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    areaServed: { "@type": "City", name: areaServed },
    provider: { "@type": "LocalBusiness", name: providerName, url: providerUrl },
  };

  return <JsonLd data={data} />;
}
