import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/about';

export const metadata: Metadata = {
  "title": "אודות עילאי פארן",
  "description": "אני מטפל בנוירופונקטורה, מייסד NeuroZen ומנהל את פעילות Neuropuncture בישראל.",
  "alternates": {
    "canonical": "/about"
  },
  "openGraph": {
    "title": "אודות עילאי פארן",
    "description": "אני מטפל בנוירופונקטורה, מייסד NeuroZen ומנהל את פעילות Neuropuncture בישראל.",
    "type": "website",
    "locale": "he_IL",
    "url": "/about"
  }
};

export default function Page() { return <ContentPage content={content} />; }
