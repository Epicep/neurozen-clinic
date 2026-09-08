import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/faq';

export const metadata: Metadata = {
  "title": "שאלות ותשובות על הטיפול",
  "description": "הטיפול נעשה באמצעות מחטים דקות וגירוי חשמלי עדין ומבוקר. נקודות הטיפול והגירוי נבחרים בהתאם לתמונה האישית ולמטרות שהוגדרו.",
  "alternates": {
    "canonical": "/faq"
  },
  "openGraph": {
    "title": "שאלות ותשובות על הטיפול",
    "description": "הטיפול נעשה באמצעות מחטים דקות וגירוי חשמלי עדין ומבוקר. נקודות הטיפול והגירוי נבחרים בהתאם לתמונה האישית ולמטרות שהוגדרו.",
    "type": "website",
    "locale": "he_IL",
    "url": "/faq"
  }
};

export default function Page() { return <ContentPage content={content} faq />; }
