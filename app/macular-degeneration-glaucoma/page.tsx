import { socialImage } from '@/components/StructuredData';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import content from '@/content/macular-degeneration-glaucoma';

export const metadata: Metadata = {
  title: 'ניוון מקולרי וגלאוקומה | בריאות העיניים',
  description: 'בירור התאמה לנוירופונקטורה כטיפול משלים בניוון מקולרי תלוי גיל ובגלאוקומה, לצד הטיפול והמעקב של רופא העיניים.',
  alternates: { canonical: '/macular-degeneration-glaucoma/' },
  openGraph: {
    images: [socialImage],
    title: 'ניוון מקולרי וגלאוקומה | בריאות העיניים',
    description: 'בירור התאמה לנוירופונקטורה כטיפול משלים בניוון מקולרי תלוי גיל ובגלאוקומה, לצד הטיפול והמעקב של רופא העיניים.',
    type: 'website',
    locale: 'he_IL',
    url: '/macular-degeneration-glaucoma/',
  },
};

export default function Page() {
  return <ContentPage content={content} canonicalPath="/macular-degeneration-glaucoma/" />;
}
