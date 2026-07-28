import { Helmet } from "react-helmet-async";

const SITE_URL = "https://neurozen-clinic.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  pageType?: "WebPage" | "AboutPage" | "CollectionPage" | "MedicalWebPage";
  faqItems?: Array<{ question: string; answer: string }>;
  noIndex?: boolean;
}

const serviceNames: Record<string, string> = {
  "/mental-health": "נוירופונקטורה לבריאות הנפש",
  "/anxiety": "נוירופונקטורה למצבי חרדה",
  "/depression": "נוירופונקטורה למצבי דיכאון",
  "/ptsd": "נוירופונקטורה לפוסט-טראומה",
  "/neurological": "נוירופונקטורה למצבים נוירולוגיים",
  "/chronic-pain": "נוירופונקטורה לכאב כרוני",
  "/metabolic": "נוירופונקטורה לאיזון מטבולי",
};

const SEO = ({
  title,
  description,
  path,
  ogType = "website",
  pageType = "WebPage",
  faqItems,
  noIndex = false,
}: SEOProps) => {
  const fullUrl = `${SITE_URL}${path}`;

  // ערכי ברירת מחדל לתגי OG, נדרסים אם מועברים ערכים ספציפיים
  const ogTitle = title || "המרכז לנוירופונקטורה | Neuro•Zen";
  const ogDescription = description || "רפואת נוירופונקטורה ומדעי המוח לטיפול בחרדה, דיכאון וטראומה (PTSD). ללא שיחה וללא תרופות.";
  const ogImage = DEFAULT_OG_IMAGE; // משתמש בתמונת ברירת המחדל המעודכנת
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#clinic`,
      name: "Neuro•Zen — המרכז לנוירופונקטורה בישראל",
      url: SITE_URL,
      image: DEFAULT_OG_IMAGE,
      telephone: "+972-54-808-2487",
      priceRange: "₪₪₪",
      address: {
        "@type": "PostalAddress",
        streetAddress: "שאול המלך 39",
        addressLocality: "תל אביב",
        addressCountry: "IL",
      },
      sameAs: [
        "https://www.instagram.com/neurozen_neuropuncture/",
        "https://www.youtube.com/@neurozenneuropuncture",
      ],
    },
    {
      "@type": pageType,
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: ogTitle,
      description: ogDescription,
      inLanguage: "he-IL",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#clinic` },
    },
  ];

  if (path === "/") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Neuro•Zen",
      inLanguage: "he-IL",
      publisher: { "@id": `${SITE_URL}/#clinic` },
    });
  }

  if (serviceNames[path]) {
    graph.push({
      "@type": "Service",
      "@id": `${fullUrl}#service`,
      name: serviceNames[path],
      description: ogDescription,
      url: fullUrl,
      provider: { "@id": `${SITE_URL}/#clinic` },
      areaServed: { "@type": "City", name: "תל אביב" },
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
      <meta name="description" content={ogDescription} />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
