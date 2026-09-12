import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/depression';

export const metadata: Metadata = {
  "title": "טיפול בדיכאון באמצעות נוירופונקטורה",
  "description": "לפעמים הדיכאון מורגש כעצב. לפעמים ככבדות, חוסר עניין או קושי להתחיל את היום. אפשר לדעת מה רוצים לעשות, ובכל זאת להרגיש שאין כוח להגיע לשם.",
  "alternates": {
    "canonical": "/mental-health/depression"
  },
  "openGraph": {
    "title": "טיפול בדיכאון באמצעות נוירופונקטורה",
    "description": "לפעמים הדיכאון מורגש כעצב. לפעמים ככבדות, חוסר עניין או קושי להתחיל את היום. אפשר לדעת מה רוצים לעשות, ובכל זאת להרגיש שאין כוח להגיע לשם.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/depression"
  }
};

export default function Page() { return <ContentPage content={content} />; }
