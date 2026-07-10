import { Helmet } from "react-helmet-async";

const SITE_URL = "https://neurozen-clinic.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}

const SEO = ({ title, description, path, ogType = "website" }: SEOProps) => {
  const fullUrl = `${SITE_URL}${path}`;

  // ערכי ברירת מחדל לתגי OG, נדרסים אם מועברים ערכים ספציפיים
  const ogTitle = title || "המרכז לנוירופונקטורה | Neuro•Zen";
  const ogDescription = description || "רפואת נוירופונקטורה ומדעי המוח לטיפול בחרדה, דיכאון וטראומה (PTSD). ללא שיחה וללא תרופות.";
  const ogImage = DEFAULT_OG_IMAGE; // משתמש בתמונת ברירת המחדל המעודכנת

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={ogDescription} />
      <link rel="canonical" href={fullUrl} />

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
    </Helmet>
  );
};

export default SEO;
