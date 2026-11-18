import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/anxiety';

export const metadata: Metadata = {
  "title": "טיפול בחרדה באמצעות נוירופונקטורה בתל אביב",
  "description": "טיפול בחרדה בקליניקת NeuroZen בתל אביב. איך נראה מפגש נוירופונקטורה, איך בודקים התאמה ולפי אילו מדדים עוקבים אחר הדריכות, השינה והתפקוד.",
  "alternates": {
    "canonical": "/mental-health/anxiety/"
  },
  "openGraph": {
    images: [socialImage],
    "title": "טיפול בחרדה באמצעות נוירופונקטורה בתל אביב",
    "description": "טיפול בחרדה בקליניקת NeuroZen בתל אביב. איך נראה מפגש נוירופונקטורה, איך בודקים התאמה ולפי אילו מדדים עוקבים אחר הדריכות, השינה והתפקוד.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/anxiety/"
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/mental-health/anxiety/" />; }
