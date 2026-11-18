import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/neurology';

export const metadata: Metadata = {
  "title": "נוירולוגיה ושיקום בנוירופונקטורה",
  "description": "נוירופונקטורה בפרקינסון, בשיקום לאחר שבץ, ב־FND ובהפרעות תחושה. מידע על תהליך הטיפול ב־NeuroZen לצד המעקב הרפואי והשיקום.",
  "alternates": {
    "canonical": "/neurology/"
  },
  "openGraph": {
    "title": "נוירולוגיה ושיקום בנוירופונקטורה",
    "description": "נוירופונקטורה בפרקינסון, בשיקום לאחר שבץ, ב־FND ובהפרעות תחושה. מידע על תהליך הטיפול ב־NeuroZen לצד המעקב הרפואי והשיקום.",
    "type": "website",
    "locale": "he_IL",
    "url": "/neurology/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/neurology/" />; }
