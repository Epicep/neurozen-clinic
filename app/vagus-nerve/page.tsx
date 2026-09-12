import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/vagus-nerve';

export const metadata: Metadata = {
  "title": "עצב הוואגוס ומערכת העצבים",
  "description": "עצב הוואגוס וגירוי אוזני באמצעות דיקור חשמלי: אופן הטיפול בקליניקה, שימושים, מחקרים וההבדלים בין שיטות הגירוי.",
  "alternates": {
    "canonical": "/vagus-nerve"
  },
  "openGraph": {
    "title": "עצב הוואגוס ומערכת העצבים",
    "description": "עצב הוואגוס וגירוי אוזני באמצעות דיקור חשמלי: אופן הטיפול בקליניקה, שימושים, מחקרים וההבדלים בין שיטות הגירוי.",
    "type": "website",
    "locale": "he_IL",
    "url": "/vagus-nerve"
  }
};

export default function Page() { return <ContentPage content={content} sectionIds={['vagus', 'ear-brain', 'treatment', 'uses', 'research', 'terminology', 'tracking', 'questions', 'contact']} />; }
