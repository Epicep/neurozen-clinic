import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/anxiety';

export const metadata: Metadata = {
  "title": "טיפול בחרדה באמצעות נוירופונקטורה בתל אביב",
  "description": "הדאגה חוזרת, הגוף מתוח והשינה אינה רגועה. לפעמים אתם יודעים שאין סכנה מיידית, אבל התחושה אינה משתנה יחד עם ההבנה.",
  "alternates": {
    "canonical": "/mental-health/anxiety"
  },
  "openGraph": {
    "title": "טיפול בחרדה באמצעות נוירופונקטורה בתל אביב",
    "description": "הדאגה חוזרת, הגוף מתוח והשינה אינה רגועה. לפעמים אתם יודעים שאין סכנה מיידית, אבל התחושה אינה משתנה יחד עם ההבנה.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/anxiety"
  }
};

export default function Page() { return <ContentPage content={content} />; }
