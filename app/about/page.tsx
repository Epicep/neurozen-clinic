import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/about';

export const metadata: Metadata = {
  "title": "אודות עילאי פארן",
  "description": "עילאי פארן, מטפל מוסמך בנוירופונקטורה, חוקר קליני, מייסד קליניקת NeuroZen בתל אביב ומנהל פעילות Neuropuncture בישראל.",
  "alternates": {
    "canonical": "/about/"
  },
  "openGraph": {
    images: [socialImage],
    "title": "אודות עילאי פארן",
    "description": "עילאי פארן, מטפל מוסמך בנוירופונקטורה, חוקר קליני, מייסד קליניקת NeuroZen בתל אביב ומנהל פעילות Neuropuncture בישראל.",
    "type": "website",
    "locale": "he_IL",
    "url": "/about/"
  }
};

export default function Page() { return <ContentPage content={content} canonicalPath="/about/" showPractitionerPortrait />; }
