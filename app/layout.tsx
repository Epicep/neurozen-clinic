import type { Metadata } from "next";
import "./globals.css";
import "./modern.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "NeuroZen | המרכז לנוירופונקטורה בישראל",
    template: "%s | NeuroZen",
  },
  description:
    "טיפול נוירוביולוגי באמצעות נוירופונקטורה בתל אביב למצבים הקשורים לבריאות הנפש ולמערכת העצבים.",
  metadataBase: new URL("https://neurozen.co.il"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">דלגו לתוכן המרכזי</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
