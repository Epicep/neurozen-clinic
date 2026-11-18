import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/trigeminal-neuralgia';

export const metadata: Metadata = {
  "title": "נוירלגיה של העצב המשולש: טיפול משלים בנוירופונקטורה",
  "description": "מרשם נוירופונקטורה מותאם לכאב התקפי בפנים, לצד האבחון והטיפול הנוירולוגי.",
  "alternates": {
    "canonical": "/trigeminal-neuralgia/"
  },
  "openGraph": {
    "title": "נוירלגיה של העצב המשולש: טיפול משלים בנוירופונקטורה",
    "description": "מרשם נוירופונקטורה מותאם לכאב התקפי בפנים, לצד האבחון והטיפול הנוירולוגי.",
    "type": "website",
    "locale": "he_IL",
    "url": "/trigeminal-neuralgia/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/trigeminal-neuralgia/" sectionIds={["condition", "approach", "process", "safety", "faq", "related", "contact"]} parentBreadcrumb={{"title": "כאב כרוני ותסמונות כאב", "path": "/pain/"}} />; }
