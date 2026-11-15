export const siteOrigin = 'https://neurozen-clinic.com';

export const socialImage = {
  url: '/neurozen-social.jpg',
  width: 1200,
  height: 630,
  alt: 'עילאי פארן בקליניקת NeuroZen',
};

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c'),
  }} />;
}

export function BreadcrumbData({ title, path }: { title: string; path: string }) {
  return <StructuredData data={{
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'דף הבית', item: siteOrigin + '/' },
      { '@type': 'ListItem', position: 2, name: title, item: siteOrigin + path },
    ],
  }} />;
}
