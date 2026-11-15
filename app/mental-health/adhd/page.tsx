import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/adhd';

export const metadata: Metadata = {
  "title": "הפרעת קשב וריכוז (ADHD) ונוירופונקטורה",
  "description": "נוירופונקטורה והפרעת קשב וריכוז (ADHD) בתל אביב. מידע על הערכה אישית ומעקב אחר קשב, התארגנות ותפקוד בחיי היומיום.",
  "alternates": {
    "canonical": "/mental-health/adhd/"
  },
  "openGraph": {
    images: [socialImage],
    "title": "הפרעת קשב וריכוז (ADHD) ונוירופונקטורה",
    "description": "נוירופונקטורה והפרעת קשב וריכוז (ADHD) בתל אביב. מידע על הערכה אישית ומעקב אחר קשב, התארגנות ותפקוד בחיי היומיום.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/adhd/"
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/mental-health/adhd/" />; }
