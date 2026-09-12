import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/home';

export const metadata: Metadata = {
  "title": "נוירופונקטורה בתל אביב | טיפול ממוקד במערכת העצבים",
  "description": "בקליניקת NeuroZen אנו מטפלים באנשים המתמודדים עם חרדה, דיכאון, טראומה וקשיי שינה, באמצעות גירוי חשמלי עדין ומבוקר.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "נוירופונקטורה בתל אביב | טיפול ממוקד במערכת העצבים",
    "description": "בקליניקת NeuroZen אנו מטפלים באנשים המתמודדים עם חרדה, דיכאון, טראומה וקשיי שינה, באמצעות גירוי חשמלי עדין ומבוקר.",
    "type": "website",
    "locale": "he_IL",
    "url": "/"
  }
};

export default function Page() { return <ContentPage content={content} home />; }
