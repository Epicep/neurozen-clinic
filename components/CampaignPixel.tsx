'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CampaignPixel() {
  const pathname = usePathname();
  useEffect(() => {
    if (document.getElementById('neurozen-site-tracking')) return;
    const script = document.createElement('script');
    script.id = 'neurozen-site-tracking';
    script.src = '/site-preferences.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    if (window.neurozenTracking) window.dispatchEvent(new Event('neurozen:route-change'));
  }, [pathname]);
  return null;
}
