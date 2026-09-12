import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/neurology';

export const metadata: Metadata = {
  "title": "נוירופונקטורה בפרקינסון ובמצבים נוירולוגיים",
  "description": "לקום מכיסא, להתחיל ללכת, להשתמש בידיים או לישון טוב יותר. במצבים נוירולוגיים, שינוי בתפקוד היומיומי יכול להיות משמעותי מאוד.",
  "alternates": {
    "canonical": "/neurology"
  },
  "openGraph": {
    "title": "נוירופונקטורה בפרקינסון ובמצבים נוירולוגיים",
    "description": "לקום מכיסא, להתחיל ללכת, להשתמש בידיים או לישון טוב יותר. במצבים נוירולוגיים, שינוי בתפקוד היומיומי יכול להיות משמעותי מאוד.",
    "type": "website",
    "locale": "he_IL",
    "url": "/neurology"
  }
};

export default function Page() { return <ContentPage content={content} />; }
