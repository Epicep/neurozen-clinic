import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  imageSrc?: string;
};

export default function ComingSoonPage({
  eyebrow,
  title,
  description,
  detail,
  imageSrc = "/synapse-placeholder.png",
}: ComingSoonPageProps) {
  return (
    <main id="main-content" className="coming-soon-page">
      <section className="coming-soon-shell" aria-labelledby="coming-soon-title">
        <div className="coming-soon-copy">
          <p className="editorial-eyebrow">{eyebrow}</p>
          <span className="coming-soon-status">העמוד בבנייה</span>
          <h1 id="coming-soon-title">{title}</h1>
          <p className="coming-soon-lead">{description}</p>
          <p className="coming-soon-detail">{detail}</p>
          <div className="coming-soon-actions">
            <Link href="/" className="editorial-secondary-button">
              חזרה לדף הבית <span aria-hidden="true">←</span>
            </Link>
            <a
              href="https://wa.me/972548082487"
              target="_blank"
              rel="noreferrer"
              className="editorial-primary-button"
            >
              שיחת התאמה בוואטסאפ
            </a>
          </div>
        </div>

        <figure className="coming-soon-visual">
          <img
            src={imageSrc}
            alt="איור מופשט של סינפסה והסתעפויות עצביות"
          />
          <figcaption aria-hidden="true">
            NEURAL CONNECTIONS <b>IN DEVELOPMENT</b>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
