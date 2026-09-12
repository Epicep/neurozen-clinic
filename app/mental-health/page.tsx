import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/mental-health';

export const metadata: Metadata = {
  "title": "טיפול בבריאות הנפש דרך מערכת העצבים",
  "description": "חרדה, דיכאון וטראומה יכולים להשפיע על הגוף כולו: על השינה, הנשימה, האנרגיה, הריכוז והיכולת להרגיש נינוחים בתוך היומיום.",
  "alternates": {
    "canonical": "/mental-health"
  },
  "openGraph": {
    "title": "טיפול בבריאות הנפש דרך מערכת העצבים",
    "description": "חרדה, דיכאון וטראומה יכולים להשפיע על הגוף כולו: על השינה, הנשימה, האנרגיה, הריכוז והיכולת להרגיש נינוחים בתוך היומיום.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health"
  }
};

export default function Page() { return <ContentPage content={content} />; }
