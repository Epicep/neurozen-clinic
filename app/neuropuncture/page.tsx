import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/neuropuncture';

export const metadata: Metadata = {
  "title": "נוירופונקטורה — להכיר את הטיפול",
  "description": "נוירופונקטורה היא גישה טיפולית המחברת בין מחטים וגירוי חשמלי מבוקר לבין ידע באנטומיה, בפיזיולוגיה ובמערכת העצבים.",
  "alternates": {
    "canonical": "/neuropuncture"
  },
  "openGraph": {
    "title": "נוירופונקטורה — להכיר את הטיפול",
    "description": "נוירופונקטורה היא גישה טיפולית המחברת בין מחטים וגירוי חשמלי מבוקר לבין ידע באנטומיה, בפיזיולוגיה ובמערכת העצבים.",
    "type": "website",
    "locale": "he_IL",
    "url": "/neuropuncture"
  }
};

export default function Page() { return <ContentPage content={content} />; }
