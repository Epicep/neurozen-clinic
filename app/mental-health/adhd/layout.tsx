import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טיפול ב־ADHD באמצעות נוירופונקטורה בתל אביב",
  description:
    "מידע על טיפול נוירופונקטורה ל־ADHD: קשב, התחלת משימות, ויסות, ניהול זמן ומעקב באמצעות שאלון ASRS ומטרות תפקודיות.",
  alternates: { canonical: "/mental-health/adhd" },
  openGraph: {
    title: "טיפול ב־ADHD | NeuroZen",
    description:
      "גישה נוירוביולוגית המכוונת לרשתות הקשב, המוטיבציה והשליטה בדחפים, בקליניקת NeuroZen בתל אביב.",
    type: "website",
    locale: "he_IL",
    url: "/mental-health/adhd",
  },
};

export default function ADHDLayout({ children }: { children: React.ReactNode }) {
  return children;
}
