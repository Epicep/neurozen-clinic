import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/ptsd';

export const metadata: Metadata = {
  "title": "טיפול בפוסט־טראומה וב־PTSD",
  "description": "נוירופונקטורה לפוסט טראומה (PTSD) בתל אביב. איך נראה מפגש ראשון, איך בודקים התאמה ועוקבים אחר שינה, דריכות ותפקוד.",
  "alternates": {
    "canonical": "/mental-health/ptsd/"
  },
  "openGraph": {
    images: [socialImage],
    "title": "טיפול בפוסט־טראומה וב־PTSD",
    "description": "נוירופונקטורה לפוסט טראומה (PTSD) בתל אביב. איך נראה מפגש ראשון, איך בודקים התאמה ועוקבים אחר שינה, דריכות ותפקוד.",
    "type": "website",
    "locale": "he_IL",
    "url": "/mental-health/ptsd/"
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/mental-health/ptsd/" />; }
