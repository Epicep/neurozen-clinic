(function () {
  'use strict';
  if (window.neurozenTracking) return;
  window.neurozenTracking = true;
  var gaId = 'G-81NVR5QKFE';
  var metaId = '1901191164621490';
  var gaKey = 'neurozen-analytics-consent';
  var metaKey = 'neurozen-marketing-consent';
  var leadKey = 'neurozen-confirmed-lead';
  var gaStarted = false, metaStarted = false, gaActive = false, metaActive = false;
  var gaLeadSent = false, metaLeadSent = false, gaLastPage = '', metaLastPage = '';
  var panel;
  function read(store, key) { try { return store.getItem(key); } catch (_) { return null; } }
  function write(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  function path() { return location.pathname.replace(/\/$/, '') || '/'; }
  function isMetaPage() { return path() === '/landing' || path() === '/thank-you.html'; }
  function safeUrl() {
    var original = new URL(location.href), clean = new URL(original.pathname, original.origin);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (key) {
      var value = original.searchParams.get(key);
      if (value && value.length <= 100) clean.searchParams.set(key, value);
    });
    return clean.href;
  }
  function pageView() {
    var url = safeUrl();
    if (gaActive && gaLastPage !== url) {
      gaLastPage = url;
      gtag('event', 'page_view', { send_to: gaId, page_location: url, page_title: document.title });
    }
    if (metaActive && isMetaPage() && metaLastPage !== url) {
      metaLastPage = url;
      fbq('trackSingle', metaId, 'PageView');
    }
  }
  function lead(confirmed) {
    if (!confirmed || typeof confirmed.id !== 'string' || typeof confirmed.at !== 'number' ||
        confirmed.at > Date.now() || Date.now() - confirmed.at >= 30 * 60 * 1000) return;
    if (gaActive && !gaLeadSent) {
      gaLeadSent = true;
      gtag('event', 'generate_lead', { send_to: gaId });
    }
    if (metaActive && isMetaPage() && !metaLeadSent) {
      metaLeadSent = true;
      fbq('trackSingle', metaId, 'Lead', {}, { eventID: confirmed.id });
    }
    if (gaLeadSent || metaLeadSent) {
      try { sessionStorage.removeItem(leadKey); } catch (_) {}
    }
  }
  function storedLead() {
    if (path() !== '/thank-you.html') return;
    try { lead(JSON.parse(read(sessionStorage, leadKey) || 'null')); } catch (_) {}
  }
  addEventListener('neurozen:lead-confirmed', function (event) { lead(event.detail); });
  document.addEventListener('click', function (event) {
    if (!gaActive || !event.target || typeof event.target.closest !== 'function') return;
    var link = event.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var method = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href) ? 'whatsapp' :
      /^tel:/i.test(href) ? 'phone' : null;
    if (method) gtag('event', 'contact_click', { send_to: gaId, contact_method: method });
  });
  function startGA() {
    if (gaStarted) { gaActive = true; pageView(); return; }
    gaStarted = gaActive = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', gaId, { send_page_view: false, page_location: safeUrl(),
      allow_google_signals: false, allow_ad_personalization_signals: false });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);
    pageView();
  }
  function startMeta() {
    if (!isMetaPage()) return;
    if (metaStarted) { metaActive = true; fbq('consent', 'grant'); pageView(); return; }
    metaStarted = metaActive = true;
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('set', 'autoConfig', false, metaId);
    fbq('init', metaId); fbq('consent', 'grant');
    pageView();
  }
  addEventListener('neurozen:route-change', function () {
    if (read(localStorage, metaKey) === 'granted') startMeta();
    if (!isMetaPage()) metaLastPage = '';
    if (isMetaPage() && !read(localStorage, metaKey)) showChoices();
    pageView(); storedLead();
  });

  var style = document.createElement('style');
  style.textContent = '.nz-consent{position:fixed;bottom:16px;left:16px;right:16px;z-index:10000;max-width:620px;margin:auto;padding:18px;background:#fff;color:#163f35;border:1px solid #c9ddd5;border-radius:14px;box-shadow:0 8px 32px #0002;font-family:inherit;font-size:15px;line-height:1.6;direction:rtl}.nz-consent p{margin:0 0 12px}.nz-consent a{color:#176653;text-decoration:underline}.nz-consent label{display:flex;align-items:start;gap:9px;margin:8px 0;cursor:pointer}.nz-consent input{margin-top:5px;accent-color:#176653}.nz-consent-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}.nz-consent button{font:inherit;cursor:pointer;border:1px solid #176653;border-radius:8px;padding:8px 16px;background:#fff;color:#163f35}.nz-consent button:first-child{background:#176653;color:#fff}.nz-consent button:focus-visible,.nz-consent-toggle:focus-visible,.nz-consent input:focus-visible{outline:3px solid #b68b4c;outline-offset:3px}.nz-consent-toggle{position:fixed;bottom:8px;left:8px;z-index:9999;font:inherit;font-size:12px;background:#fff;color:#163f35;border:1px solid #c9ddd5;border-radius:6px;padding:5px 8px;cursor:pointer}';
  document.head.appendChild(style);
  function choose(ga, meta) {
    write(gaKey, ga ? 'granted' : 'denied');
    if (meta !== null) write(metaKey, meta ? 'granted' : 'denied');
    panel.remove(); panel = null;
    if (ga) startGA();
    else {
      gaActive = false;
      if (gaStarted) { location.reload(); return; }
    }
    if (meta === true) startMeta();
    if (meta === false) { metaActive = false; if (window.fbq) fbq('consent', 'revoke'); }
    storedLead();
    if (!ga && meta !== true) { try { sessionStorage.removeItem(leadKey); } catch (_) {} }
  }
  function showChoices() {
    if (panel) return;
    panel = document.createElement('section');
    panel.className = 'nz-consent';
    panel.setAttribute('aria-label', 'העדפות מדידה ועוגיות');
    panel.innerHTML = '<p>אפשר לבחור אם לאפשר מדידת ביקורים ופניות. המדידה מופעלת רק לאחר אישורכם. שמות, טלפונים ותוכן הטופס אינם נשלחים לכלי המדידה. <a href="/privacy/">מדיניות פרטיות</a></p><label><input type="checkbox" name="analytics"> מדידת ביקורים ופניות ב־Google Analytics</label>' + (isMetaPage() ? '<label><input type="checkbox" name="meta"> מדידת פרסום ב־Meta בדף הנחיתה ובדף התודה</label>' : '') + '<div class="nz-consent-actions"><button type="button">שמירת הבחירה</button><button type="button">המשך ללא מדידה</button></div>';
    var gaBox = panel.querySelector('input[name="analytics"]');
    var metaBox = panel.querySelector('input[name="meta"]');
    gaBox.checked = read(localStorage, gaKey) === 'granted';
    if (metaBox) metaBox.checked = read(localStorage, metaKey) === 'granted';
    var buttons = panel.querySelectorAll('button');
    buttons[0].onclick = function () { choose(gaBox.checked, metaBox ? metaBox.checked : null); };
    buttons[1].onclick = function () { choose(false, metaBox ? false : null); };
    document.body.appendChild(panel);
  }
  var toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'nz-consent-toggle';
  toggle.textContent = 'העדפות עוגיות'; toggle.onclick = showChoices;
  document.body.appendChild(toggle);
  var gaConsent = read(localStorage, gaKey), metaConsent = read(localStorage, metaKey);
  if (gaConsent === 'granted') startGA();
  if (metaConsent === 'granted') startMeta();
  storedLead();
  if (!gaConsent || (isMetaPage() && !metaConsent)) showChoices();
}());
