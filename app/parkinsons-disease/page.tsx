import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/parkinsons-disease';

export const metadata: Metadata = {
  "title": "מחלת פרקינסון: טיפול משלים בנוירופונקטורה",
  "description": "נוירופונקטורה בפרקינסון בקליניקת NeuroZen: תנועה, נוקשות, שינה ותפקוד יומיומי, עם מטרות אישיות ומעקב לצד התרופות והשיקום.",
  "alternates": {
    "canonical": "/parkinsons-disease/"
  },
  "openGraph": {
    "title": "מחלת פרקינסון: טיפול משלים בנוירופונקטורה",
    "description": "נוירופונקטורה בפרקינסון בקליניקת NeuroZen: תנועה, נוקשות, שינה ותפקוד יומיומי, עם מטרות אישיות ומעקב לצד התרופות והשיקום.",
    "type": "website",
    "locale": "he_IL",
    "url": "/parkinsons-disease/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/parkinsons-disease/" parentBreadcrumb={{"title": "נוירולוגיה ושיקום", "path": "/neurology/"}} />; }
