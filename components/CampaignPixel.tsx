'use client';

import { useEffect } from 'react';

export default function CampaignPixel() {
  useEffect(() => {
    if (document.getElementById('neurozen-campaign-pixel')) return;
    const script = document.createElement('script');
    script.id = 'neurozen-campaign-pixel';
    script.src = '/campaign-pixel.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return null;
}
