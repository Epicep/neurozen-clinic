(function () {
  'use strict';
  if (window.neurozenCampaignPixel) return;
  var path = window.location.pathname.replace(/\/$/, '');
  if (path !== '/landing' && path !== '/thank-you.html') return;
  window.neurozenCampaignPixel = true;
  var pixelId = '1901191164621490';
  var consentKey = 'neurozen-marketing-consent';
  var leadKey = 'neurozen-confirmed-lead';
  var started = false;
  var active = false;
  var sentLead = false;

  function sendLead(lead) {
    if (!active || sentLead || !lead || typeof lead.id !== 'string' || lead.at > Date.now() || Date.now() - lead.at >= 30 * 60 * 1000) return;
    sentLead = true;
    try { window.sessionStorage.removeItem(leadKey); } catch (_) {}
    window.fbq('trackSingle', pixelId, 'Lead', {}, { eventID: lead.id });
  }
  window.addEventListener('neurozen:lead-confirmed', function (event) { sendLead(event.detail); });

  function read(storage, key) {
    try { return storage.getItem(key); } catch (_) { return null; }
  }
  function start() {
    if (started) return;
    started = true;
    active = true;
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('set', 'autoConfig', false, pixelId);
    window.fbq('init', pixelId);
    window.fbq('consent', 'grant');
    window.fbq('trackSingle', pixelId, 'PageView');
    if (path === '/thank-you.html') {
      try {
        var lead = JSON.parse(read(window.sessionStorage, leadKey) || 'null');
        sendLead(lead);
      } catch (_) {}
    }
  }

  var style = document.createElement('style');
  style.textContent = '.nz-consent{position:fixed;bottom:16px;left:16px;right:16px;z-index:10000;max-width:620px;margin:auto;padding:18px;background:#fff;color:#163f35;border:1px solid #c9ddd5;border-radius:14px;box-shadow:0 8px 32px #0002;font-family:inherit;font-size:15px;line-height:1.6;direction:rtl}.nz-consent p{margin:0 0 12px}.nz-consent a{color:#176653;text-decoration:underline}.nz-consent-actions{display:flex;gap:10px;flex-wrap:wrap}.nz-consent button{font:inherit;cursor:pointer;border:1px solid #176653;border-radius:8px;padding:8px 16px;background:#fff;color:#163f35}.nz-consent button:first-child{background:#176653;color:#fff}.nz-consent button:focus-visible,.nz-consent-toggle:focus-visible{outline:3px solid #b68b4c;outline-offset:3px}.nz-consent-toggle{position:fixed;bottom:8px;left:8px;z-index:9999;font:inherit;font-size:12px;background:#fff;color:#163f35;border:1px solid #c9ddd5;border-radius:6px;padding:5px 8px;cursor:pointer}';
  document.head.appendChild(style);
  var panel;
  function showChoices() {
    if (panel) return;
    panel = document.createElement('section');
    panel.className = 'nz-consent';
    panel.setAttribute('aria-label', 'בחירת מדידת פרסום');
    panel.innerHTML = '<p>אפשר לאפשר עוגיות של Meta למדידת צפיות ופניות מהפרסום בפייסבוק ובאינסטגרם. פרטי הטופס אינם מועברים ל־Meta. <a href="/privacy/">מדיניות פרטיות</a></p><div class="nz-consent-actions"><button type="button">אישור מדידת פרסום</button><button type="button">המשך ללא מדידה</button></div>';
    var buttons = panel.querySelectorAll('button');
    buttons[0].onclick = function () { choose('granted'); };
    buttons[1].onclick = function () { choose('denied'); };
    document.body.appendChild(panel);
  }
  function choose(value) {
    try { window.localStorage.setItem(consentKey, value); } catch (_) {}
    panel.remove(); panel = null;
    if (value === 'granted') {
      if (started) { active = true; window.fbq('consent', 'grant'); }
      else start();
    }
    else {
      active = false;
      if (window.fbq) window.fbq('consent', 'revoke');
      try { window.sessionStorage.removeItem(leadKey); } catch (_) {}
    }
  }
  var toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'nz-consent-toggle';
  toggle.textContent = 'העדפות עוגיות'; toggle.onclick = showChoices;
  document.body.appendChild(toggle);
  var consent = read(window.localStorage, consentKey);
  if (consent === 'granted') start();
  else if (consent !== 'denied') showChoices();
}());
