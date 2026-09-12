import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/ptsd';

export const metadata: Metadata = {
  "title": "טיפול בפוסט־טראומה וב־PTSD",
  "description": "צליל, ריח, מגע או זיכרון יכולים לעורר תגובה חזקה. גם כשאתם יודעים שאתם במקום בטוח, הגוף עלול להגיב בבהלה, בכעס, בקיפאון או בצורך להתרחק.",
  "alternates": {
    "canonical": "/mental-health/ptsd"
  },
  "openGraph": {
    "title": "טיפול בפוסט־טראומה וב־PTSD",
    "description": "צליל, ריח, מגע או זיכרון יכולים לעורר תגובה חזקה. גם כשאתם יודעים שאתם במקום בטוח, הגוף עלול להגיב בבהלה, בכעס, בקיפאון או בצורך להתרחק.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/ptsd"
  }
};

export default function Page() { return <ContentPage content={content} />; }
