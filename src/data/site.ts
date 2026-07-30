export type PageType = "WebPage" | "AboutPage" | "CollectionPage" | "MedicalWebPage";

export interface PageMetadata {
  title: string;
  description: string;
  pageType?: PageType;
  serviceName?: string;
  noIndex?: boolean;
}

export const siteConfig = {
  name: "Neuro•Zen",
  legalName: "Neuro•Zen — המרכז לנוירופונקטורה בישראל",
  url: "https://neurozen-clinic.com",
  ogImagePath: "/og-image.jpg",
  phone: {
    display: "054-808-2487",
    international: "+972-54-808-2487",
    whatsapp: "https://wa.me/972548082487",
  },
  address: {
    street: "שאול המלך 39",
    city: "תל אביב",
    country: "IL",
  },
  social: {
    instagram: "https://www.instagram.com/neurozen_neuropuncture/",
    youtube: "https://www.youtube.com/@neurozenneuropuncture",
  },
} as const;

export const pageMetadata = {
  "/": {
    title: "Neuro•Zen — נוירופונקטורה בישראל | עילאי פארן",
    description:
      "קליניקה לנוירופונקטורה ומדעי המוח בתל אביב. טיפול בחרדה, דיכאון, פוסט-טראומה וכאב כרוני באמצעות דיקור חשמלי מדעי וגירוי עצב הוואגוס.",
  },
  "/about": {
    title: "אודות עילאי פארן — מטפל הנוירופונקטורה הראשי",
    description:
      "עילאי פארן, מטפל מוסמך בשיטת הנוירופונקטורה של ד״ר מייקל קוראדינו. רקע, הכשרה ופילוסופיה טיפולית במרכז Neuro•Zen בתל אביב.",
    pageType: "AboutPage",
  },
  "/anxiety": {
    title: "טיפול בחרדה ללא תרופות | Neuro•Zen",
    description:
      "טיפול טבעי בחרדה מבוסס מדע קשיח בעזרת נוירופונקטורה. איפוס מערכת האזעקה הפנימית ללא תופעות לוואי. תל אביב.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה למצבי חרדה",
  },
  "/cases": {
    title: "מקרי טיפול ותוצאות קליניות | המרכז לנוירופונקטורה",
    description:
      "תוצאות מדידות של מטופלים במרכז לנוירופונקטורה: שיפור משמעותי בחרדה, דיכאון, פוסט-טראומה ושינה.",
  },
  "/chronic-pain": {
    title: "טיפול בכאב כרוני בנוירופונקטורה | Neuro•Zen",
    description:
      "טיפול ביולוגי בכאב כרוני באמצעות דיקור חשמלי מדעי. מנגנון מודולציה עצבית להפחתת פיברומיאלגיה, מיגרנות וכאבי גב כרוניים בתל אביב.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה לכאב כרוני",
  },
  "/depression": {
    title: "טיפול בדיכאון ללא תרופות | Neuro•Zen",
    description:
      "אלטרנטיבה קלינית מבוססת מדע לצאת מדיכאון ללא כדורים – שפעול מוליכים עצביים ונוירופלסטיות בעזרת נוירופונקטורה בתל אביב.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה למצבי דיכאון",
  },
  "/legal": {
    title: "פרטיות ותנאי שימוש | Neuro•Zen",
    description:
      "מדיניות פרטיות, אבטחת מידע ותנאי שימוש של קליניקת Neuro•Zen — נוירופונקטורה בתל אביב בניהול עילאי פארן.",
  },
  "/mental-health": {
    title: "טיפול בחרדה, דיכאון ו-PTSD | Neuro•Zen",
    description:
      "גישה ביולוגית Bottom-Up לטיפול בחרדה, דיכאון ופוסט-טראומה דרך מערכת העצבים. נוירופונקטורה ודיקור חשמלי מדעי בתל אביב.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה לבריאות הנפש",
  },
  "/metabolic": {
    title: "איזון מטבולי בנוירופונקטורה | Neuro•Zen",
    description:
      "טיפול באיזון מטבולי, סוכרת, השמנה ותסמונת מטבולית באמצעות גירוי עצבי מדעי וגירוי עצב הוואגוס במרכז Neuro•Zen בתל אביב.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה לאיזון מטבולי",
  },
  "/method": {
    title: "שיטת הנוירופונקטורה | Neuro•Zen",
    description:
      "Neuropuncture — שיטה רפואית של ד״ר מייקל קוראדינו המשלבת דיקור חשמלי מדעי, מדעי המוח ומרשמים קליניים מבוססי ראיות.",
  },
  "/neurological": {
    title: "טיפול נוירולוגי בנוירופונקטורה | Neuro•Zen",
    description:
      "טיפול נוירולוגי באמצעות נוירופונקטורה: פרקינסון, טרשת נפוצה, נוירופתיה ושיקום מוחי בתל אביב במרכז Neuro•Zen.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה למצבים נוירולוגיים",
  },
  "/privacy": {
    title: "מדיניות פרטיות | Neuro•Zen",
    description:
      "מדיניות פרטיות של המרכז הישראלי לנוירופונקטורה בניהול עילאי פארן, בהתאם לחוק הגנת הפרטיות התשמ״א-1981 ותקנות אבטחת מידע התשע״ז-2017.",
  },
  "/ptsd": {
    title: "טיפול בפוסט טראומה (PTSD) ללא תרופות | Neuro•Zen",
    description:
      "שיטת נוירופונקטורה מתקדמת המשקמת את המוח ומחזירה את מערכת העצבים להומאוסטזיס – טיפול טבעי בפוסט טראומה ללא מילים וללא תרופות.",
    pageType: "MedicalWebPage",
    serviceName: "נוירופונקטורה לפוסט-טראומה",
  },
  "/science": {
    title: "המדע והמחקר מאחורי נוירופונקטורה | Neuro•Zen",
    description:
      "סקירת מנגנונים ומקורות מחקריים בנושאי דיקור חשמלי, נוירופלסטיות, עצב הוואגוס, כאב ושיקום נוירולוגי.",
    pageType: "CollectionPage",
  },
  "/welcome": {
    title: "טופס קליטה למטופלים | Neuro•Zen",
    description:
      "טופס Welcome לאבחון ובניית מרשם טיפולי מותאם אישית במרכז Neuro•Zen לנוירופונקטורה בתל אביב.",
  },
  "/404": {
    title: "הדף לא נמצא | Neuro•Zen",
    description:
      "הדף שחיפשת אינו קיים. חזרו לדף הבית של Neuro•Zen — נוירופונקטורה בישראל בניהול עילאי פארן.",
    noIndex: true,
  },
} satisfies Record<string, PageMetadata>;

export type PagePath = keyof typeof pageMetadata;
