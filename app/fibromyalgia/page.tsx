import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/fibromyalgia';

export const metadata: Metadata = {
  "title": "פיברומיאלגיה: טיפול בנוירופונקטורה",
  "description": "גישה טיפולית המכוונת לוויסות פעילות מערכת העצבים, כחלק מהתמודדות עם כאב מפושט, הפרעות שינה ופגיעה בתפקוד היומיומי.",
  "alternates": {
    "canonical": "/fibromyalgia/"
  },
  "openGraph": {
    "title": "פיברומיאלגיה: טיפול בנוירופונקטורה",
    "description": "גישה טיפולית המכוונת לוויסות פעילות מערכת העצבים, כחלק מהתמודדות עם כאב מפושט, הפרעות שינה ופגיעה בתפקוד היומיומי.",
    "type": "website",
    "locale": "he_IL",
    "url": "/fibromyalgia/",
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

export default function Page() { return <ContentPage content={content} canonicalPath="/fibromyalgia/" sectionIds={["condition", "fit", "approach", "process", "whole-plan", "safety", "faq", "further-reading", "contact"]} parentBreadcrumb={{"title": "כאב כרוני ותסמונות כאב", "path": "/pain/"}} />; }
