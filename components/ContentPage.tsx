import Link from 'next/link';
import type { ReactNode } from 'react';

// A small, deliberately limited renderer for the clinic's reviewed copy.
// Content stays in plain text; HTML from content is never interpreted.
function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <Link key={i} href={link[2]}>{link[1]}</Link>;
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2,-2)}</strong>;
    return part;
  });
}

function prose(text: string) {
  return text.trim().split(/\n\s*\n/).filter(Boolean).map((block, i) => {
    const lines = block.split('\n');
    if (block.startsWith('**פרטי המחקר:**')) return <details key={i} className="research-details"><summary>פרטי המחקר והמתודולוגיה</summary><p>{inline(block.slice('**פרטי המחקר:**'.length).trim())}</p></details>;
    if (block.startsWith('**פרטי המקור:**')) return <details key={i} className="research-details"><summary>פרטי המקור</summary><p>{inline(block.slice('**פרטי המקור:**'.length).trim())}</p></details>;
    if (lines.every(line => line.startsWith('- '))) return <ul key={i}>{lines.map((line,j)=><li key={j}>{inline(line.slice(2))}</li>)}</ul>;
    if (lines.every(line => /^\[.+\]\(.+\)$/.test(line))) return <div key={i} className="copy-links">{lines.map((line,j)=><span key={j}>{inline(line)}</span>)}</div>;
    return <p key={i}>{inline(block)}</p>;
  });
}

function sectionBody(text: string, faq = false, cards = false) {
  const [main, after = ''] = text.split('\n:::after\n');
  const chunks = main.split(/^### /m);
  return <>{prose(chunks[0])}<div className={faq ? 'editorial-faq-list' : cards ? 'copy-card-grid' : 'copy-subsections'}>{chunks.slice(1).map((chunk,i)=>{
    const newline = chunk.indexOf('\n');
    const title = chunk.slice(0,newline).trim();
    const body = chunk.slice(newline+1);
    return faq ? <details key={i}><summary>{title}<span aria-hidden="true">+</span></summary><div className="copy-faq-answer">{prose(body)}</div></details> : <article key={i}><h3>{title}</h3>{prose(body)}</article>;
  })}</div>{prose(after)}</>;
}

export default function ContentPage({ content, home = false, faq = false, comingSoon = false, sectionIds = [] }: {content:string; home?:boolean; faq?:boolean; comingSoon?:boolean; sectionIds?:string[]}) {
  const sections = content.trim().split(/^## /m);
  const hero = sections[0];
  const titleMatch = hero.match(/^# (.+)$/m);
  const title = titleMatch?.[1] ?? '';
  const [eyebrow, intro = ''] = titleMatch ? hero.split(titleMatch[0]) : ['', hero];
  return <main id="main-content" className={`editorial-home reviewed-copy${home ? ' copy-home' : ''}${sectionIds.length ? ' copy-research' : ''}`}>
    <section className={home ? 'editorial-hero' : 'copy-page-hero'}>
      <div className={home ? 'editorial-hero-inner' : 'editorial-shell copy-page-heading'}>
        <div className={home ? 'editorial-hero-content' : ''}>
          {!home && <nav className="copy-breadcrumb" aria-label="פירורי לחם"><Link href="/">דף הבית</Link><span aria-hidden="true"> / </span><span>{title}</span></nav>}
          {eyebrow.trim() && <p className="editorial-eyebrow">{eyebrow.trim()}</p>}
          <h1>{title}</h1>
          {comingSoon && <p className="coming-soon-status">העמוד בבנייה</p>}
          <div className="copy-intro">{faq ? sectionBody(intro,true) : prose(intro)}</div>
          {comingSoon && <figure className="copy-coming-soon-image"><img src="/synapse-placeholder.png" alt="איור מופשט של סינפסה והסתעפויות עצביות" /></figure>}
        </div>
        {home && <figure className="editorial-hero-media"><img src="/production-hero.png" width="1024" height="1536" fetchPriority="high" alt="איור אנטומי של המוח, עמוד השדרה ומערכת העצבים"/><figcaption><span>NEUROZEN</span><span>הקשבה לאדם. הבנה של מערכת העצבים.</span></figcaption></figure>}
      </div>
    </section>
    {sections.slice(1).map((section,i)=>{
      const newline=section.indexOf('\n');
      const heading=section.slice(0,newline).trim();
      const body=section.slice(newline+1);
      const isFaq=faq || heading.includes('שאלות') || heading==='לפני שמתחילים';
      const isProcess=/תהליך|התהליך|נבחר הטיפול/.test(heading);
      const cards=!isFaq && (/תחומי הטיפול|מה מעסיק|מצבים נוירולוגיים נוספים|חמישה תחומים/.test(heading) || isProcess);
      const isCta=i===sections.length-2 && body.includes('https://wa.me/');
      const id=sectionIds[i] ?? (home && heading==='תחומי הטיפול בקליניקה' ? 'treatments' : home && isProcess ? 'process' : `section-${i+1}`);
      const layout = home ? ['understanding', 'domains', 'journey', 'method', 'practitioner', 'questions', 'conversation'][i] : undefined;
      return <section key={heading} id={id} className={`copy-section${isCta?' copy-cta':''}${isFaq?' copy-faq-section':''}${layout?` home-${layout}`:''}${isProcess?' copy-process':''}`}>
        <div className={`editorial-shell ${cards?'':'copy-reading-width'}`}><div className="copy-section-heading">{home && <span className="section-kicker">{['עבודה ישירה עם מערכת העצבים','תחומי הטיפול','צעד אחר צעד','הגישה הטיפולית','האדם שמאחורי הטיפול','טוב לדעת','בואו נדבר'][i]}</span>}<h2>{heading}</h2>{layout === 'practitioner' && <figure className="practitioner-photo-slot" aria-label="מקום שמור לתמונה של עילאי פארן"><span>התמונה של עילאי תתווסף כאן</span></figure>}</div><div className="copy-section-content">{sectionBody(body,isFaq,cards)}</div></div>
      </section>;
    })}
  </main>;
}
