import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/depression';

export const metadata: Metadata = {
  "title": "טיפול בדיכאון באמצעות נוירופונקטורה",
  "description": "נוירופונקטורה בדיכאון בתל אביב. מידע על התאמה, מעקב אחר מצב הרוח והשינה ושילוב הגישה לצד טיפול רפואי או פסיכולוגי.",
  "alternates": {
    "canonical": "/mental-health/depression/"
  },
  "openGraph": {
    images: [socialImage],
    "title": "טיפול בדיכאון באמצעות נוירופונקטורה",
    "description": "נוירופונקטורה בדיכאון בתל אביב. מידע על התאמה, מעקב אחר מצב הרוח והשינה ושילוב הגישה לצד טיפול רפואי או פסיכולוגי.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/depression/"
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/mental-health/depression/" />; }
