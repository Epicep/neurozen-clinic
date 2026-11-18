import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/peripheral-neuropathy';

export const metadata: Metadata = {
  "title": "נוירופתיה היקפית: טיפול משלים בנוירופונקטורה",
  "description": "גישה טיפולית המכוונת לאותות עצביים ולכאב נוירופתי, לצד הבירור והטיפול בגורם לנוירופתיה.",
  "alternates": {
    "canonical": "/peripheral-neuropathy/"
  },
  "openGraph": {
    "title": "נוירופתיה היקפית: טיפול משלים בנוירופונקטורה",
    "description": "גישה טיפולית המכוונת לאותות עצביים ולכאב נוירופתי, לצד הבירור והטיפול בגורם לנוירופתיה.",
    "type": "website",
    "locale": "he_IL",
    "url": "/peripheral-neuropathy/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/peripheral-neuropathy/" sectionIds={["condition", "approach", "process", "safety", "faq", "related", "contact"]} parentBreadcrumb={{"title": "כאב כרוני ותסמונות כאב", "path": "/pain/"}} />; }
