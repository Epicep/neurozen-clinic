import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/ocd';

export const metadata: Metadata = {
  "title": "טיפול ב־OCD בגישת נוירופונקטורה",
  "description": "המחשבה חוזרת, עולה צורך לבדוק או לבצע פעולה, ואחריה מגיעה הקלה. לפעמים רק לזמן קצר, עד שהספק מופיע שוב.",
  "alternates": {
    "canonical": "/mental-health/ocd"
  },
  "openGraph": {
    "title": "טיפול ב־OCD בגישת נוירופונקטורה",
    "description": "המחשבה חוזרת, עולה צורך לבדוק או לבצע פעולה, ואחריה מגיעה הקלה. לפעמים רק לזמן קצר, עד שהספק מופיע שוב.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/ocd"
  }
};

export default function Page() { return <ContentPage content={content} />; }
