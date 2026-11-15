import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/stellate-ganglion';

export const metadata: Metadata = {
  title: 'סטלה גנגליון (הגנגליון הכוכבי) ונוירופונקטורה',
  description: 'על הגנגליון הכוכבי, גירוי באזור במסגרת נוירופונקטורה בקליניקת NeuroZen וההבדל מחסם סטלה בהזרקה.',
  alternates: { canonical: '/stellate-ganglion/' },
  openGraph: {
    title: 'סטלה גנגליון (הגנגליון הכוכבי) ונוירופונקטורה',
    description: 'על הגנגליון הכוכבי, גירוי באזור במסגרת נוירופונקטורה בקליניקת NeuroZen וההבדל מחסם סטלה בהזרקה.',
    type: 'website',
    locale: 'he_IL',
    url: '/stellate-ganglion/',
  },
};

export default function Page() {
  return <ContentPage content={content} />;
}
