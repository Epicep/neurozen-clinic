import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טיפול בחרדה באמצעות נוירופונקטורה בתל אביב",
  description:
    "מידע על טיפול בחרדה באמצעות נוירופונקטורה, עם התייחסות לעוררות, לתחושות הגוף, לשינה, למחשבות ולתפקוד היומיומי.",
  alternates: { canonical: "/mental-health/anxiety" },
  openGraph: {
    title: "טיפול בחרדה באמצעות נוירופונקטורה | NeuroZen",
    description:
      "גישה נוירוביולוגית המכוונת למסלולים הקשורים לעוררות ולתגובת הדחק, בקליניקת NeuroZen בתל אביב.",
    type: "website",
    locale: "he_IL",
    url: "/mental-health/anxiety",
  },
};

export default function AnxietyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
