import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/functional-neurological-disorder';

export const metadata: Metadata = {
  "title": "הפרעה נוירולוגית תפקודית (FND): טיפול משלים בנוירופונקטורה",
  "description": "טיפול משלים שמכוון למערכת העצבים, לצד האבחון והשיקום של הפרעה נוירולוגית תפקודית.",
  "alternates": {
    "canonical": "/functional-neurological-disorder/"
  },
  "openGraph": {
    "title": "הפרעה נוירולוגית תפקודית (FND): טיפול משלים בנוירופונקטורה",
    "description": "טיפול משלים שמכוון למערכת העצבים, לצד האבחון והשיקום של הפרעה נוירולוגית תפקודית.",
    "type": "website",
    "locale": "he_IL",
    "url": "/functional-neurological-disorder/",
    "images": [
      {
        "url": "/neurozen-social.jpg",
        "width": 1200,
        "height": 630,
        "alt": "עילאי פארן בקליניקת NeuroZen"
      }
    ]
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/functional-neurological-disorder/" sectionIds={["condition", "mechanism", "approach", "process", "safety", "faq", "related", "contact"]} parentBreadcrumb={{"title": "נוירולוגיה ושיקום", "path": "/neurology/"}} />; }
