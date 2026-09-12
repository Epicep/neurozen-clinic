import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טיפול ב־OCD באמצעות נוירופונקטורה בתל אביב",
  description:
    "טיפול ב־OCD והפרעה טורדנית־כפייתית בגישת נוירופונקטורה: מחשבות טורדניות, קומפולסיות, מעגלי הבקרה במוח, שילוב עם ERP ותהליך הטיפול.",
  keywords: [
    "טיפול ב־OCD",
    "טיפול בהפרעה טורדנית כפייתית",
    "מחשבות טורדניות",
    "קומפולסיות",
    "OCD מחשבתי",
    "טיפול ב־OCD בתל אביב",
    "נוירופונקטורה",
  ],
  alternates: { canonical: "/mental-health/ocd" },
  openGraph: {
    title: "טיפול ב־OCD בגישת נוירופונקטורה | NeuroZen",
    description:
      "גישה נוירוביולוגית המכוונת למעגלי הבקרה, ההרגלים והעוררות המעורבים ב־OCD, בקליניקת NeuroZen בתל אביב.",
    type: "website",
    locale: "he_IL",
    url: "/mental-health/ocd",
  },
};

export default function OCDLayout({ children }: { children: React.ReactNode }) {
  return children;
}
