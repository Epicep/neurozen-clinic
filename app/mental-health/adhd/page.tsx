import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/adhd';

export const metadata: Metadata = {
  "title": "טיפול ב־ADHD בגישת נוירופונקטורה",
  "description": "אתם יודעים מה צריך לעשות, אבל קשה להתחיל. פותחים משימה, עוברים לאחרת ומגלים שהזמן נעלם. לפעמים רק הלחץ של הרגע האחרון מצליח להניע.",
  "alternates": {
    "canonical": "/mental-health/adhd"
  },
  "openGraph": {
    "title": "טיפול ב־ADHD בגישת נוירופונקטורה",
    "description": "אתם יודעים מה צריך לעשות, אבל קשה להתחיל. פותחים משימה, עוברים לאחרת ומגלים שהזמן נעלם. לפעמים רק הלחץ של הרגע האחרון מצליח להניע.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/adhd"
  }
};

export default function Page() { return <ContentPage content={content} />; }
