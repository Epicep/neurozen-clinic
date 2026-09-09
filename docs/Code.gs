function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = {};
  if (e && e.postData && e.postData.contents) {
    try { data = JSON.parse(e.postData.contents); } catch (_) { data = e.parameter || {}; }
  } else if (e) data = e.parameter || {};
  if (sheet.getLastRow() === 0) sheet.appendRow(['תאריך ושעה', 'שם מלא', 'טלפון', 'תסמין עיקרי']);
  sheet.appendRow([new Date(), data.fullName || data.name || '', data.phone || '', data.mainSymptom || data.symptom || '']);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
