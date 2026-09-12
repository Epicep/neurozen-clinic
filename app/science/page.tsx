import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/science';

export const metadata: Metadata = {
  "title": "הבסיס המחקרי של הטיפול",
  "description": "מחקרים נבחרים על דיקור חשמלי, גירוי אוזני של עצב הוואגוס, טראומה, דיכאון, שינה וגמישות עצבית — והממצאים שמנחים את העבודה ב־NeuroZen.",
  "alternates": {
    "canonical": "/science"
  },
  "openGraph": {
    "title": "הבסיס המחקרי של הטיפול",
    "description": "מחקרים נבחרים על דיקור חשמלי, גירוי אוזני של עצב הוואגוס, טראומה, דיכאון, שינה וגמישות עצבית — והממצאים שמנחים את העבודה ב־NeuroZen.",
    "type": "website",
    "locale": "he_IL",
    "url": "/science"
  }
};

export default function Page() { return <ContentPage content={content} sectionIds={['reading', 'clinical', 'neuropuncture-evidence', 'auricular', 'bdnf', 'clinic', 'israel-ptsd', 'contact']} />; }
