import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/pain';

export const metadata: Metadata = {
  "title": "כאב כרוני ועצבי: טיפול בנוירופונקטורה",
  "description": "מידע על נוירופונקטורה לפיברומיאלגיה, נוירופתיה היקפית ונוירלגיה של העצב המשולש בקליניקת NeuroZen בתל אביב.",
  "alternates": {
    "canonical": "/pain/"
  },
  "openGraph": {
    "title": "כאב כרוני ועצבי: טיפול בנוירופונקטורה",
    "description": "מידע על נוירופונקטורה לפיברומיאלגיה, נוירופתיה היקפית ונוירלגיה של העצב המשולש בקליניקת NeuroZen בתל אביב.",
    "type": "website",
    "locale": "he_IL",
    "url": "/pain/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/pain/" />; }
