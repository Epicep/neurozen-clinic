const LEADS_SHEET_NAME = 'לידים';
const CRM_SPREADSHEET_ID = '14Ye-pJJF9njuUoaiCUSRRs8IHQmXHUmF-Kzg2QTo1qI';

function doGet() {
  return jsonResponse_({ ok: true, service: 'NeuroZen CRM' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = readRequest_(e);

    // Hidden field: bots often fill it, people never see it.
    if (clean_(data.website)) return jsonResponse_({ ok: true });

    const fullName = safeCell_(data.fullName || data.name, 120);
    const phone = safeCell_(data.phone, 40);
    const symptom = safeCell_(data.mainSymptom || data.symptom, 180);

    if (!fullName || !phone) {
      return jsonResponse_({ ok: false, error: 'missing_required_fields' });
    }

    const sheet = SpreadsheetApp.openById(CRM_SPREADSHEET_ID).getSheetByName(LEADS_SHEET_NAME);
    if (!sheet) throw new Error('Missing sheet: ' + LEADS_SHEET_NAME);

    const row = new Array(33).fill('');
    row[1] = new Date();                         // B: תאריך ושעת כניסה
    row[2] = fullName;                           // C: שם מלא
    row[3] = phone;                              // D: טלפון
    row[4] = mapArea_(symptom);                  // E: תחום / סיבת פנייה
    row[5] = symptom;                            // F: תיאור קצר של הפנייה
    row[6] = safeCell_(data.landingPage, 300) || 'דף נחיתה';
    row[7] = safeCell_(data.utmSource, 120);      // H: UTM Source
    row[8] = safeCell_(data.utmMedium, 120);      // I: UTM Medium
    row[9] = safeCell_(data.utmCampaign, 180);   // J: UTM Campaign
    row[10] = safeCell_(data.utmContent, 180);   // K: UTM Content
    row[11] = safeCell_(data.utmTerm, 180);      // L: UTM Term
    row[12] = safeCell_(data.adId, 120);          // M: Ad ID
    row[13] = 'חדש';                              // N: סטטוס נוכחי

    // Template formulas may contain invisible values far below the visible table.
    // Use the first visually empty name cell so new leads stay at the top.
    const names = sheet.getRange(2, 3, sheet.getMaxRows() - 1, 1).getDisplayValues();
    const firstEmpty = names.findIndex(function (value) { return clean_(value[0]) === ''; });
    const nextRow = firstEmpty === -1 ? sheet.getMaxRows() + 1 : firstEmpty + 2;
    if (nextRow > sheet.getMaxRows()) sheet.insertRowAfter(sheet.getMaxRows());
    sheet.getRange(nextRow, 2, 1, 13).setValues([row.slice(1, 14)]);
    sheet.getRange(nextRow, 2).setNumberFormat('dd/MM/yyyy HH:mm');
    SpreadsheetApp.flush();

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: 'server_error' });
  } finally {
    lock.releaseLock();
  }
}

function readRequest_(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents && /application\/json/i.test(e.postData.type || '')) {
    try { return JSON.parse(e.postData.contents); } catch (_) {}
  }
  return e.parameter || {};
}

function mapArea_(symptom) {
  if (/שינה/i.test(symptom)) return 'שינה';
  if (/מחשבות|טורדניות|לופים/i.test(symptom)) return 'OCD';
  if (/דפיקות|דריכות|חרדה/i.test(symptom)) return 'חרדה';
  return 'אחר';
}

function clean_(value) {
  return String(value || '').trim();
}

function safeCell_(value, maxLength) {
  let text = clean_(value).slice(0, maxLength || 500);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
