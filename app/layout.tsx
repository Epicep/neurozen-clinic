import type { Metadata } from "next";
import "./globals.css";
import "./modern.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CampaignPixel from "@/components/CampaignPixel";
import { siteOrigin, socialImage, StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "NeuroZen | המרכז לנוירופונקטורה בישראל",
    template: "%s | NeuroZen",
  },
  description:
    "טיפול נוירוביולוגי באמצעות נוירופונקטורה בתל אביב למצבים הקשורים לבריאות הנפש ולמערכת העצבים.",
  metadataBase: new URL(siteOrigin),
  openGraph: { type: 'website', locale: 'he_IL', siteName: 'NeuroZen', images: [socialImage] },
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">דלגו לתוכן המרכזי</a>
        <StructuredData data={{ '@graph': [
          {
            '@type': 'LocalBusiness', '@id': siteOrigin + '/#clinic',
            name: 'NeuroZen', url: siteOrigin + '/',
            image: siteOrigin + '/ilay-paran-clinic.webp', telephone: '+972548082487',
            address: { '@type': 'PostalAddress', streetAddress: 'שאול המלך 39, בית הדר דפנה', addressLocality: 'תל אביב', addressCountry: 'IL' },
            founder: { '@id': siteOrigin + '/about/#ilay-paran' },
          },
          {
            '@type': 'Person', '@id': siteOrigin + '/about/#ilay-paran',
            name: 'עילאי פארן', jobTitle: 'מטפל מוסמך בנוירופונקטורה וחוקר קליני',
            url: siteOrigin + '/about/', worksFor: { '@id': siteOrigin + '/#clinic' },
          },
        ] }} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CampaignPixel />
      </body>
    </html>
  );
}
