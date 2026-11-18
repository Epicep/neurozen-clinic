# Expanded condition pages: editorial and integration review

Prepared locally on 2026-11-17. Not committed, pushed or deployed by this task.

## Structure

- `/pain/`: pain hub; fibromyalgia, peripheral neuropathy, trigeminal neuralgia.
- `/neurology/`: neurology and rehabilitation hub; Parkinson's, post-stroke rehabilitation, FND, and a cross-link to peripheral neuropathy. Existing multiple sclerosis and other movement-disorder summaries retained.
- `/parkinsons-disease/`: the detailed Parkinson's material formerly on `/neurology/`, combined with the supplied draft's practical treatment framing.
- All six condition URLs remain flat, as supplied. Their navigation paths identify the parent hub; visible navigation and structured breadcrumbs agree.
- Existing eye-health URL remains separate. Existing mental-health URLs are unchanged.
- Home pain placeholder now links to the pain hub. Footer, sitemap, static route list and the Parkinson's research-page link updated.
- Existing global typography and editorial components reused. No additional fonts, CSS bundles or visual libraries introduced.

## Editorial decisions

1. Fibromyalgia and trigeminal neuralgia: supplied substantive copy preserved; markup adapted to existing components.
2. Peripheral neuropathy: electrical-parameter paragraph shortened. Preserved intentional adjustment of amplitude, frequency and pulse width with reference to fiber types and symptoms. No unverified exclusivity claim or promise of exclusively activating a single fiber type.
3. Parkinson's: retained motor/non-motor symptoms, medication-timed monitoring, UPDRS, clinical observations and DBS policy. Separated the clinic's observations from a two-patient publication. Removed the animal-derived GDNF/neuroprotection discussion from this patient-facing page instead of presenting it as human evidence.
4. Added the human Parkinson's/depression study referenced on PDF page 206 of the three-day workshop: 60 randomized participants, three-month follow-up, depression and serum BDNF outcomes. Clearly distinguishes serum measurement, disease progression and the clinic's full prescription. Primary source checked: https://pubmed.ncbi.nlm.nih.gov/23301468/
5. Stroke: explicitly describes stimulation during practice, as confirmed by the practitioner. Retained stable medical status and concurrent rehabilitation.
6. FND: focuses on movement and sensory presentations, including involuntary movements. Does not rename functional seizures as involuntary movements. Positive clinical diagnosis and existing specialist rehabilitation retained.

## Workshop review: additions proposed, not yet applied

Sources are private educational reference PDFs supplied by the practitioner; they have not been copied into public assets.

- Two-day advanced workshop: PDF pages 47 (fiber recruitment), 53–54 and 91–92 (stellate/vagus), 124–138 (ophthalmology). Reviewed relevant extracted text and visual slides.
- Three-day workshop: PDF page 70 (sensory symptoms and pulse width), 192–208 and 218–219 (Parkinson's material), particularly page 206 and its human-study references.

### Stellate ganglion

The existing page already describes combined use with auricular vagus stimulation and distinguishes electrical stimulation from an injected SGB. The workshop supports this as a description of the technique taught, not as standalone clinical proof of efficacy for all conditions listed on its slides.

Useful optional addition: a concise paragraph explaining why two autonomic approaches may be considered within an individual prescription, and a practical FAQ about choosing one or combining them based on symptoms and follow-up. Avoid a promise of a direct amygdala effect, universal autonomic reset, or evidence borrowed from injected SGB trials.

Practitioner answered: **do not add procedural details at present**. No ultrasound claim, guidance method or procedural parameters added. Existing page unchanged.

Suggested copy:

> עצב הוואגוס והגנגליון הכוכבי משתתפים במסלולים שונים של מערכת העצבים האוטונומית. בתוכנית נוירופונקטורה אישית אפשר לשקול עבודה עם שניהם, בהתאם לתסמינים ולרקע הרפואי. המעקב מתמקד במה שמפריע לכם בפועל: דריכות, שינה, מתח גופני והתפקוד לאורך היום.

### Eye health

The workshop's ophthalmology section describes microcurrent-based treatment and educational anatomy, with technique illustrations and a proposed schedule. It does not supply a controlled clinical trial establishing retinal repair, optic-nerve regeneration or restoration of lost vision with this particular prescription. Do not publish those mechanisms as demonstrated clinical outcomes or turn the workshop schedule into a guaranteed treatment duration.

The existing page already distinguishes AMD from glaucoma, describes treatment outside the eyeball and preserves ophthalmologist-led treatment and measurements. Most useful additions are a patient-oriented monitoring checklist and the everyday goals selected at baseline. No images or technique instructions from the workshop are needed.

Suggested copy:

> בתחילת הדרך בוחרים קושי יומיומי שחשוב לכם לעקוב אחריו, למשל קריאה, זיהוי פנים או הבחנה בפרטים. לצד הדיווח האישי משווים את תוצאות בדיקות המעקב אצל רופא העיניים, בהתאם לאבחנה ולבדיקות שהוא קובע. תחושה של שיפור אינה סיבה לדחות בדיקה, זריקה או טיפול שנקבעו.

Additional practical FAQ worth considering: which existing test reports to bring (visual acuity, OCT or visual-field reports where available). No extra tests prescribed by the website. Public medical background checked against the existing NEI glaucoma source: https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma

## Validation

- Production build: 27 static routes generated successfully.
- TypeScript validation of site pages, components and content passed. Repository-wide validation separately found existing missing Cloudflare worker types in `db/index.ts` and `worker/index.ts`; those unrelated backend files were not modified.
- `node --test tests/expanded-pages.test.mjs`: passed. Checks internal destinations and anchors, generated assets, canonicals, sitemap entries, hub navigation, three-level structured breadcrumbs and selected content requirements.
- Google verification file unchanged; 3D brain prototype remains local and excluded from the generated release.
- Browser verified navigation from the neurology hub to Parkinson's. The initial production-preview server did not serve CSS correctly; it was replaced by a static preview server on port 3006. The subsequent browser visual check was blocked by the automatic-review usage limit, so visual desktop/mobile verification is still outstanding.
