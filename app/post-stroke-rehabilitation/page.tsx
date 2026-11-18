import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/post-stroke-rehabilitation';

export const metadata: Metadata = {
  "title": "שיקום נוירולוגי לאחר שבץ: טיפול משלים בנוירופונקטורה",
  "description": "טיפול משלים שמכוון למערכת העצבים ומשתלב בתוכנית השיקום שנבנתה לאחר שבץ.",
  "alternates": {
    "canonical": "/post-stroke-rehabilitation/"
  },
  "openGraph": {
    "title": "שיקום נוירולוגי לאחר שבץ: טיפול משלים בנוירופונקטורה",
    "description": "טיפול משלים שמכוון למערכת העצבים ומשתלב בתוכנית השיקום שנבנתה לאחר שבץ.",
    "type": "website",
    "locale": "he_IL",
    "url": "/post-stroke-rehabilitation/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/post-stroke-rehabilitation/" sectionIds={["condition", "approach", "process", "safety", "faq", "related", "contact"]} parentBreadcrumb={{"title": "נוירולוגיה ושיקום", "path": "/neurology/"}} />; }
