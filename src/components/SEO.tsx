import { Helmet } from "react-helmet-async";
import { pageMetadata, siteConfig, type PageMetadata, type PagePath, type PageType } from "@/data/site";

interface SEOProps {
  path: PagePath;
  ogType?: "website" | "article";
  faqItems?: Array<{ question: string; answer: string }>;
}

const SEO = ({
  path,
  ogType = "website",
  faqItems,
}: SEOProps) => {
  const metadata: PageMetadata = pageMetadata[path];
  const title = metadata.title;
  const description = metadata.description;
  const pageType: PageType = metadata.pageType ?? "WebPage";
  const fullUrl = `${siteConfig.url}${path}`;
  const defaultOgImage = `${siteConfig.url}${siteConfig.ogImagePath}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}/#clinic`,
      name: siteConfig.legalName,
      url: siteConfig.url,
      image: defaultOgImage,
      telephone: siteConfig.phone.international,
      priceRange: "₪₪₪",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country,
      },
      sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
    },
    {
      "@type": pageType,
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: title,
      description,
      inLanguage: "he-IL",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#clinic` },
    },
  ];

  if (path === "/") {
    graph.push({
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "he-IL",
      publisher: { "@id": `${siteConfig.url}/#clinic` },
    });
  }

  if (metadata.serviceName) {
    graph.push({
      "@type": "Service",
      "@id": `${fullUrl}#service`,
      name: metadata.serviceName,
      description,
      url: fullUrl,
      provider: { "@id": `${siteConfig.url}/#clinic` },
      areaServed: { "@type": "City", name: siteConfig.address.city },
    });
  }

  if (faqItems?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${fullUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {metadata.noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={defaultOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
