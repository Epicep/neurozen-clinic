"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileHeart,
  FileText,
  MapPin,
  MessageCircle,
  Navigation,
  Shirt,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StepButton {
  label: string;
  href: string;
  icon?: LucideIcon;
  note?: string;
}

interface WelcomeStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  buttons: StepButton[];
}

const steps: WelcomeStep[] = [
  {
    number: 1,
    icon: CreditCard,
    title: "תשלום עבור הפגישה הראשונה",
    description:
      "לאחר תיאום פגישת ההערכה והטיפול הראשון ניתן לעבור למילוי הטפסים.",
    buttons: [
      {
        label: "לתשלום בפייבוקס",
        href: "https://links.payboxapp.com/ku0QMs8aW0b",
      },
    ],
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "מילוי הטפסים",
    description:
      "לפני הפגישה יש למלא הצהרת בריאות וטופס הערכה קלינית. המידע מסייע למפות את התסמינים, להבין את הרקע הרפואי ולהגדיר מטרות טיפוליות.",
    buttons: [
      {
        label: "הצהרת בריאות",
        href: "https://forms.gle/KcHn8kXa7udriYjBA",
        icon: FileHeart,
      },
      {
        label: "טופס הערכה קלינית",
        href: "https://forms.gle/a9ie67rSpjMnzzkQ9",
        icon: FileText,
      },
    ],
  },
  {
    number: 3,
    icon: CalendarDays,
    title: "קביעת מועד ביומן",
    description:
      "לאחר התשלום ומילוי שני הטפסים ניתן לבחור מועד פנוי לפגישה הראשונה.",
    buttons: [
      {
        label: "לקביעת תור ביומן Google",
        href: "https://calendar.app.google/zRWguTHzTw8LPbWw6",
      },
    ],
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO path="/welcome" />

      <header className="border-b border-border/60 bg-background/95">
        <div className="container mx-auto max-w-3xl px-5 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
            חזרה לדף הבית
          </Link>
        </div>
      </header>

      <main id="main-content">
        <section className="bg-accent/20 px-5 py-12 md:py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 text-3xl font-bold text-foreground md:text-5xl"
            >
              תשלום, טפסים וקביעת תור
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              כדי להשלים את ההרשמה לפגישה הראשונה, יש לבצע את שלושת השלבים לפי הסדר.
            </motion.p>
          </div>
        </section>

        <section
          aria-label="שלבי ההרשמה"
          className="container mx-auto max-w-3xl space-y-7 px-5 py-10 md:py-14"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="border-border/70 shadow-card">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground"
                    >
                      {step.number}
                    </span>
                    <step.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                      {step.title}
                    </h2>
                  </div>

                  <p className="mb-6 leading-7 text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="flex flex-col gap-3 sm:items-start">
                    {step.buttons.map((button) => (
                      <div key={button.label} className="w-full">
                        <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
                          <a
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${button.label}, נפתח בחלון חדש`}
                          >
                            {button.icon && (
                              <button.icon aria-hidden="true" className="h-5 w-5" />
                            )}
                            {button.label}
                          </a>
                        </Button>
                        {button.note && (
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {button.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}

          <Card className="border-primary/20 bg-accent/15 shadow-card">
            <CardContent className="space-y-6 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">מידע לקראת ההגעה</h2>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>שאול המלך 39, תל אביב</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>בית הדר דפנה, בניין B, קומה 5, משרד 505</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shirt aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>מומלץ להגיע בבגדים נקיים, נוחים וגמישים.</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="heroOutline">
                  <a
                    href="https://waze.com/ul?q=שאול המלך 39 תל אביב"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ניווט לקליניקה באמצעות Waze, נפתח בחלון חדש"
                  >
                    <Navigation aria-hidden="true" className="h-5 w-5" />
                    ניווט עם Waze
                  </a>
                </Button>
                <Button asChild size="lg" variant="heroOutline">
                  <a
                    href="https://wa.me/972548082487"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="יצירת קשר עם הקליניקה בוואטסאפ, נפתח בחלון חדש"
                  >
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                    יצירת קשר בוואטסאפ
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <aside className="rounded-xl border border-border/70 bg-card p-5 text-sm leading-7 text-muted-foreground">
            התשלום, הטפסים וקביעת התור מתבצעים באמצעות שירותים חיצוניים: PayBox,
            Google Forms ו-Google Calendar. כל שירות פועל בהתאם לתנאי השימוש
            ולמדיניות הפרטיות שלו. מומלץ שלא לשלוח בוואטסאפ מסמכים רפואיים או מידע
            רפואי מפורט; את המידע הנדרש יש למסור בטפסים הייעודיים.
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
