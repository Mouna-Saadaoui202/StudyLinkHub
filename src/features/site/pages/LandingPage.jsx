import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { articles, languages, siteContent, articleImages } from "../data/siteContent";
import "../styles/landing.css";

const formspreeEndpoints = {
  contact: import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || "https://formspree.io/f/xwvdzvar",
  newsletter: import.meta.env.VITE_FORMSPREE_NEWSLETTER_ENDPOINT || "https://formspree.io/f/mbdvbdqq",
};

const isFormspreeConfigured = (type) => !formspreeEndpoints[type].includes("REPLACE_WITH_YOUR_FORM_ID");

function updateMeta(content, lang) {
  document.documentElement.lang = languages[lang].htmlLang;
  document.title = content.meta.title;

  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }
  description.setAttribute("content", content.meta.description);
}

function joinPath(lang, path = "") {
  return `${languages[lang].pathPrefix}${path}` || "/";
}

function FormMessage({ message }) {
  if (!message) return null;
  return <p className="slh-form-message">{message}</p>;
}

const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/studylink-hub/?viewAsMember=true" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/studylinkhub1?igsh=MWNuMTlyaHFrNGdqZQ%3D%3D" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?id=61576342005417" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@studylinkhub7?_r=1&_t=ZS-97pR0mMtS5v" },
];

const serviceIconKeys = ["student", "program", "calendar"];
const processIconKeys = ["student", "search", "book", "calendar"];

function getContactIcon(label) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("google")) return articleImages.icons.search;
  if (normalizedLabel.includes("email")) return articleImages.icons.email;
  if (normalizedLabel.includes("phone") || normalizedLabel.includes("télé")) return articleImages.icons.phone;
  return articleImages.icons.world;
}

function getContactIconType(label) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("google")) return "google";
  if (normalizedLabel.includes("email")) return "email";
  if (normalizedLabel.includes("phone") || normalizedLabel.includes("télé")) return "phone";
  return "address";
}

function SocialIcon({ name }) {
  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4.75a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68Zm13.9 8.58c0-2.92-1.56-4.58-3.82-4.58-1.76 0-2.55.97-2.99 1.65V8.98H9.39v10.27h3.18v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.53 1.66 2.72v5h3.11v-5.92Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M7.8 3.75h8.4A4.05 4.05 0 0 1 20.25 7.8v8.4a4.05 4.05 0 0 1-4.05 4.05H7.8a4.05 4.05 0 0 1-4.05-4.05V7.8A4.05 4.05 0 0 1 7.8 3.75Zm0 1.8A2.25 2.25 0 0 0 5.55 7.8v8.4a2.25 2.25 0 0 0 2.25 2.25h8.4a2.25 2.25 0 0 0 2.25-2.25V7.8a2.25 2.25 0 0 0-2.25-2.25H7.8Zm4.2 3.05a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Zm0 1.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm4.01-2.85a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68Z" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M15.52 3.75c.34 2.08 1.53 3.35 3.58 3.49v3.02a6.58 6.58 0 0 1-3.53-1.06v5.25c0 3.4-2.06 5.8-5.22 5.8a5.02 5.02 0 0 1-5.2-5.09c0-3.07 2.36-5.22 5.63-5.22.28 0 .54.02.8.07v3.12a3.23 3.23 0 0 0-.86-.12 2.04 2.04 0 0 0-2.22 2.1 2.02 2.02 0 0 0 2.04 2.12c1.22 0 1.96-.72 1.96-2.32V3.75h3.02Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M13.36 20.25v-7.5h2.52l.38-2.92h-2.9V7.97c0-.84.23-1.42 1.45-1.42h1.55V3.94a20.6 20.6 0 0 0-2.26-.12c-2.24 0-3.77 1.37-3.77 3.88v2.13H7.8v2.92h2.53v7.5h3.03Z" />
    </svg>
  );
}

function IndustryIcon({ name }) {
  const paths = {
    engineering: (
      <>
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="M19 12h2M3 12h2M12 3v2M12 19v2M17 5.6l-1.4 1.4M8.4 17l-1.4 1.4M7 7 5.6 5.6M18.4 18.4 17 17" />
      </>
    ),
    business: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 3-4 3 2 4-7" />
      </>
    ),
    health: (
      <>
        <path d="M12 5v14M5 12h14" />
        <path d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" />
      </>
    ),
    technology: (
      <>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3" />
        <path d="m14 6-4 12" />
      </>
    ),
    environment: (
      <>
        <path d="M5 19c9 0 14-6 14-14-8 0-14 5-14 14Z" />
        <path d="M5 19c2-4 5-7 9-9" />
      </>
    ),
    global: (
      <>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9" />
      </>
    ),
    arts: (
      <>
        <path d="m5 19 3.5-1 9-9a2.1 2.1 0 0 0-3-3l-9 9L5 19Z" />
        <path d="m13.5 6.5 3 3" />
      </>
    ),
    science: (
      <>
        <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
        <path d="M8 15h8" />
      </>
    ),
    languages: (
      <>
        <path d="M4 5h9M4 10h7M4 15h5" />
        <path d="M14 19h6l-1.2-3h-3.6L14 19ZM16 16l1-3 1 3" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      {paths[name] || paths.science}
    </svg>
  );
}

function PersonaIcon({ type }) {
  if (type === "student") {
    return (
      <span className="slh-persona-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
          <path d="M7 11v4.2c0 1.6 2.2 2.8 5 2.8s5-1.2 5-2.8V11" />
          <path d="M20 9v5" />
        </svg>
      </span>
    );
  }

  return (
    <span className="slh-persona-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 20c.8-3.8 3.5-6 7.5-6s6.7 2.2 7.5 6" />
      </svg>
    </span>
  );
}

function FlagIcon({ name }) {
  if (name === "china") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="32" fill="#de2910" />
        <path fill="#ffde00" d="m9.5 5 1.4 4.2h4.4l-3.6 2.6 1.4 4.2-3.6-2.6L5.9 16l1.4-4.2-3.6-2.6h4.4L9.5 5Z" />
        <circle cx="21" cy="7" r="1.6" fill="#ffde00" />
        <circle cx="25" cy="11" r="1.6" fill="#ffde00" />
        <circle cx="25" cy="17" r="1.6" fill="#ffde00" />
        <circle cx="21" cy="21" r="1.6" fill="#ffde00" />
      </svg>
    );
  }

  if (name === "germany") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="10.67" fill="#000" />
        <rect y="10.67" width="48" height="10.67" fill="#dd0000" />
        <rect y="21.34" width="48" height="10.66" fill="#ffce00" />
      </svg>
    );
  }

  if (name === "russia") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="10.67" fill="#fff" />
        <rect y="10.67" width="48" height="10.67" fill="#0039a6" />
        <rect y="21.34" width="48" height="10.66" fill="#d52b1e" />
      </svg>
    );
  }

  if (name === "greece") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="32" fill="#0d5eaf" />
        {[3.56, 10.67, 17.78, 24.89].map((y) => (
          <rect key={y} y={y} width="48" height="3.56" fill="#fff" />
        ))}
        <rect width="17.78" height="17.78" fill="#0d5eaf" />
        <rect x="7.11" width="3.56" height="17.78" fill="#fff" />
        <rect y="7.11" width="17.78" height="3.56" fill="#fff" />
      </svg>
    );
  }

  if (name === "romania") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="16" height="32" fill="#002b7f" />
        <rect x="16" width="16" height="32" fill="#fcd116" />
        <rect x="32" width="16" height="32" fill="#ce1126" />
      </svg>
    );
  }

  if (name === "morocco") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="32" fill="#c1272d" />
        <path d="m24 9 2.1 6.1h6.4l-5.2 3.8 2 6.1-5.3-3.8-5.3 3.8 2-6.1-5.2-3.8h6.4L24 9Z" fill="none" stroke="#006233" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "uae") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
        <rect width="48" height="32" fill="#fff" />
        <rect x="12" width="36" height="10.67" fill="#009739" />
        <rect x="12" y="21.34" width="36" height="10.66" fill="#000" />
        <rect width="12" height="32" fill="#ef3340" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 32" focusable="false">
      <rect width="48" height="32" rx="4" fill="#fff6f8" />
      <circle cx="24" cy="16" r="10" fill="none" stroke="#980032" strokeWidth="2" />
      <path d="M14 16h20M24 6c3 3 4.5 6.3 4.5 10S27 23 24 26M24 6c-3 3-4.5 6.3-4.5 10S21 23 24 26" fill="none" stroke="#980032" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LandingPage({ lang = "en" }) {
  const content = siteContent[lang];
  const currentArticles = articles[lang];
  const otherLang = lang === "en" ? "fr" : "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllProcessSteps, setShowAllProcessSteps] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [checkerStep, setCheckerStep] = useState(0);
  const [checkerAnswers, setCheckerAnswers] = useState({});

  const featuredArticles = useMemo(() => currentArticles.slice(0, 3), [currentArticles]);
  const industryPreviewCount = isCompactViewport ? 4 : content.industries.length;
  const destinationPreviewCount = isCompactViewport ? 3 : 4;
  const processPreviewCount = isCompactViewport ? 2 : content.process.length;
  const testimonialPreviewCount = isCompactViewport ? 1 : content.testimonials.length;
  const visibleIndustries = showAllIndustries ? content.industries : content.industries.slice(0, industryPreviewCount);
  const visibleDestinations = showAllDestinations ? content.destinations : content.destinations.slice(0, destinationPreviewCount);
  const visibleProcessSteps = showAllProcessSteps ? content.process : content.process.slice(0, processPreviewCount);
  const visibleTestimonials = showAllTestimonials ? content.testimonials : content.testimonials.slice(0, testimonialPreviewCount);
  const checkerFields = useMemo(
    () => [
      {
        label: lang === "fr" ? "Destination cible" : "Target country",
        name: "target_country",
        options: [
          ...content.destinations.slice(0, 6).map((destination) => destination.name),
          lang === "fr" ? "Autre" : "Other",
        ],
        freeTextLabel: lang === "fr" ? "Autre pays" : "Other country",
        freeTextName: "other_country",
      },
      {
        label: lang === "fr" ? "Spécialité souhaitée" : "Preferred specialty",
        name: "specialty",
        options:
          lang === "fr"
            ? ["Ingénierie", "Business", "Médecine", "Informatique", "Langues", "Autre"]
            : ["Engineering", "Business", "Medicine", "Computer Science", "Languages", "Other"],
        freeTextLabel: lang === "fr" ? "Autre spécialité" : "Other specialty",
        freeTextName: "other_specialty",
      },
      {
        label: lang === "fr" ? "Niveau actuel" : "Current education level",
        name: "education_level",
        options: lang === "fr" ? ["Bac", "Licence", "Master", "Autre"] : ["High school", "Bachelor", "Master", "Other"],
      },
      {
        label: lang === "fr" ? "Test de langue" : "Language test",
        name: "language_test",
        options: lang === "fr" ? ["IELTS/TOEFL", "Prévu bientôt", "Pas encore"] : ["IELTS/TOEFL", "Planned soon", "Not yet"],
      },
    ],
    [content.destinations, lang]
  );
  const currentCheckerField = checkerFields[checkerStep];
  const shouldShowFreeText =
    currentCheckerField.freeTextName &&
    (checkerAnswers[currentCheckerField.name] === "Other" || checkerAnswers[currentCheckerField.name] === "Autre");

  useEffect(() => {
    updateMeta(content, lang);
  }, [content, lang]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [lang]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  async function sendToFormspree(event, type) {
    event.preventDefault();
    const form = event.currentTarget;
    const setMessage = type === "newsletter" ? setNewsletterMessage : setContactMessage;

    if (!isFormspreeConfigured(type)) {
      setMessage(content.contact.missingConfig);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(form);
    formData.append("form_type", type);
    formData.append("language", lang);
    if (type === "contact") {
      Object.entries(checkerAnswers).forEach(([key, value]) => {
        if (value) {
          formData.set(key, value);
        }
      });
    }

    try {
      const response = await fetch(formspreeEndpoints[type], {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = "Formspree request failed";
        try {
          const payload = await response.json();
          errorMessage = payload?.errors?.[0]?.message || payload?.error || errorMessage;
        } catch {
          errorMessage = `${errorMessage} (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      form.reset();
      if (type === "contact") {
        setCheckerAnswers({});
        setCheckerStep(0);
      }
      setMessage(type === "newsletter" ? content.newsletter.success : content.contact.success);
    } catch (error) {
      console.error("Formspree submission failed:", error);
      setMessage(
        lang === "fr"
          ? `L'envoi a échoué. ${error.message || "Vérifiez la configuration Formspree."}`
          : `Sending failed. ${error.message || "Check the Formspree configuration."}`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="slh-page">
      <header className="slh-header">
        <Link
          to={joinPath(lang)}
          className="slh-brand"
          aria-label="Study Link Hub"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={articleImages.logo} alt="" />
        </Link>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`slh-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`slh-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#top" onClick={() => setIsMenuOpen(false)}>{content.nav.home}</a>
          <a href="#scholarships" onClick={() => setIsMenuOpen(false)}>{content.nav.scholarships}</a>
          <a href="#destinations" onClick={() => setIsMenuOpen(false)}>{content.nav.destinations}</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)}>{content.nav.process}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{content.nav.contact}</a>
        </nav>

        <div className="slh-header-actions">
          <a className="slh-header-cta" href="#contact">
            {content.hero.primaryCta}
          </a>
          <div className="slh-socials slh-header-socials" aria-label="Social media">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
          <Link className="slh-language" to={joinPath(otherLang)}>
            {languages[otherLang].label}
          </Link>
        </div>
      </header>

      <main>
        <section className="slh-hero" id="top">
          <img className="slh-asset-shape slh-asset-shape-one" src={articleImages.shapes.contactOne} alt="" />
          <img className="slh-asset-shape slh-asset-shape-two" src={articleImages.shapes.contactTwo} alt="" />
          <div className="slh-hero-copy">
            <p className="slh-eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.text}</p>
            <div className="slh-student-tags" aria-label={lang === "fr" ? "Services étudiants" : "Student services"}>
              <span>{lang === "fr" ? "Bourses" : "Scholarships"}</span>
              <span>{lang === "fr" ? "Admissions" : "Admissions"}</span>
              <span>{lang === "fr" ? "Documents" : "Documents"}</span>
              <span>{lang === "fr" ? "Destinations" : "Destinations"}</span>
            </div>
            <div className="slh-hero-actions">
              <a className="slh-button" href="#contact">
                {content.hero.primaryCta}
              </a>
              <a className="slh-button slh-button-secondary" href="#destinations">
                {content.hero.secondaryCta}
              </a>
            </div>
            <div className="slh-hero-destinations" aria-label={lang === "fr" ? "Destinations populaires" : "Popular destinations"}>
              {content.destinations.slice(0, 4).map((destination) => (
                <a href="#destinations" key={destination.name}>
                  <FlagIcon name={destination.flagCode} />
                  <span>{destination.name}</span>
                </a>
              ))}
            </div>
            <div className="slh-stats">
              {content.hero.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="slh-hero-photo">
              <img src={articleImages.student} alt={lang === "fr" ? "Étudiante préparant son projet d'études" : "Student preparing a study abroad application"} />
              <span>
                {lang === "fr"
                  ? "Un accompagnement simple pour choisir, préparer et avancer."
                  : "Simple guidance to choose, prepare, and move forward."}
              </span>
            </div>
            <div className="slh-hero-collage" aria-label={lang === "fr" ? "Parcours étudiant" : "Student journey"}>
              <figure>
                <img src={articleImages.docs} alt="" />
                <figcaption>{lang === "fr" ? "Dossier clair" : "Clear documents"}</figcaption>
              </figure>
              <figure>
                <img src={articleImages.scholarship} alt="" />
                <figcaption>{lang === "fr" ? "Bourses" : "Scholarships"}</figcaption>
              </figure>
              <figure>
                <img src={articleImages.trust} alt="" />
                <figcaption>{lang === "fr" ? "Conseil" : "Advisor call"}</figcaption>
              </figure>
            </div>
          </div>
          <form className="slh-quick-form slh-checker" onSubmit={(event) => sendToFormspree(event, "contact")}>
            <span className="slh-form-kicker">{lang === "fr" ? "Éligibilité rapide" : "Quick eligibility check"}</span>
            <div>
              <p className="slh-eyebrow">{content.nav.contact}</p>
              <h2>{content.sections.checkerTitle}</h2>
            </div>
            <div className="slh-checker-progress" aria-label={lang === "fr" ? "Progression" : "Progress"}>
              {checkerFields.map((field, index) => (
                <button
                  aria-label={field.label}
                  className={index === checkerStep ? "is-active" : ""}
                  key={field.name}
                  onClick={() => setCheckerStep(index)}
                  type="button"
                />
              ))}
            </div>
            <fieldset className="slh-checker-step">
              <legend>{currentCheckerField.label}</legend>
              <div>
                {currentCheckerField.options.map((option) => (
                  <label key={option}>
                    <input
                      checked={checkerAnswers[currentCheckerField.name] === option}
                      name={currentCheckerField.name}
                      onChange={() =>
                        setCheckerAnswers((answers) => ({
                          ...answers,
                          [currentCheckerField.name]: option,
                        }))
                      }
                      type="radio"
                      value={option}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {shouldShowFreeText ? (
                <label className="slh-checker-free-text">
                  {currentCheckerField.freeTextLabel}
                  <input
                    name={currentCheckerField.freeTextName}
                    placeholder={
                      currentCheckerField.freeTextName === "other_country"
                        ? lang === "fr"
                          ? "Écrivez le pays ici"
                          : "Type the country here"
                        : lang === "fr"
                          ? "Écrivez la spécialité ici"
                          : "Type the specialty here"
                    }
                    type="text"
                  />
                </label>
              ) : null}
            </fieldset>
            <div className="slh-checker-actions">
              <button
                className="slh-mini-button"
                disabled={checkerStep === 0}
                onClick={() => setCheckerStep((step) => Math.max(0, step - 1))}
                type="button"
              >
                {lang === "fr" ? "Retour" : "Back"}
              </button>
              <button
                className="slh-mini-button"
                disabled={checkerStep === checkerFields.length - 1}
                onClick={() => setCheckerStep((step) => Math.min(checkerFields.length - 1, step + 1))}
                type="button"
              >
                {lang === "fr" ? "Suivant" : "Next"}
              </button>
            </div>
            <div className="slh-checker-contact">
              <label>
                {content.contact.name}
                <input name="name" type="text" required />
              </label>
              <label>
                {content.contact.email}
                <input name="email" type="email" required />
              </label>
              <label>
                {content.contact.phone}
                <input name="phone" type="tel" required />
              </label>
            </div>
            <input name="message" type="hidden" value={lang === "fr" ? "Demande depuis le vérificateur d'éligibilité." : "Request from the eligibility checker."} />
            <button className="slh-button" type="submit" disabled={isSubmitting}>
              {lang === "fr" ? "Voir ma prochaine étape" : "See my next step"}
            </button>
            <p className="slh-privacy-note">
              {lang === "fr"
                ? "Vos informations servent uniquement à répondre à votre demande."
                : "Your information is only used to respond to your request."}
            </p>
            <FormMessage message={contactMessage} />
          </form>
        </section>

        <section className="slh-proof-strip" aria-label="Study Link Hub strengths">
          {content.proof.map((item, index) => (
            <span key={item}>
              <strong>0{index + 1}</strong>
              {item}
            </span>
          ))}
        </section>

        <section className="slh-persona-section" id="about">
          <div className="slh-persona-grid">
            {content.personas.map((persona, index) => (
              <article className="slh-persona-card" key={persona.title}>
                <PersonaIcon type={index === 0 ? "student" : "parent"} />
                <div>
                  <h2>{persona.title}</h2>
                  <p>{persona.text}</p>
                  <ul>
                    {persona.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="slh-success-matrix">
            {content.successMetrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="slh-section slh-industries-section" id="scholarships">
          <div className="slh-section-heading slh-inline-heading">
            <div>
              <p className="slh-eyebrow">{content.sections.industriesEyebrow}</p>
              <h2>{content.sections.industriesTitle}</h2>
              <p>{content.sections.industriesText}</p>
            </div>
            <a className="slh-text-link" href="#contact">
              {content.sections.industriesCta}
            </a>
          </div>
          <div className={`slh-industries-grid ${showAllIndustries ? "is-expanded" : ""}`}>
            {visibleIndustries.map((industry) => (
              <article className="slh-industry-card" key={industry.title}>
                <span aria-hidden="true">
                  <IndustryIcon name={industry.icon} />
                </span>
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            className="slh-show-more slh-show-more-industries"
            type="button"
            onClick={() => setShowAllIndustries((current) => !current)}
          >
            {showAllIndustries
              ? lang === "fr"
                ? "Voir moins"
                : "Show less"
              : lang === "fr"
                ? "Voir plus de domaines"
                : "Show more fields"}
          </button>
        </section>

        <section className="slh-section slh-band" id="destinations">
          <div className="slh-section-heading">
            <p className="slh-eyebrow">{content.nav.destinations}</p>
            <h2>{content.sections.destinationsTitle}</h2>
          </div>
          <div className={`slh-card-grid slh-four slh-destinations-grid ${showAllDestinations ? "is-expanded" : ""}`}>
            {visibleDestinations.map((destination) => (
              <article className="slh-destination" key={destination.name}>
                <span className="slh-destination-mark" aria-hidden="true">
                  <FlagIcon name={destination.flagCode} />
                </span>
                <div>
                  <h3>{destination.name}</h3>
                  <span className="slh-best-for">{destination.bestFor}</span>
                  <p>{destination.text}</p>
                  <a href="#contact" className="slh-destination-link">
                    {lang === "fr" ? "Demander cette destination" : "Ask about this destination"}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <button
            className="slh-show-more"
            type="button"
            onClick={() => setShowAllDestinations((current) => !current)}
          >
            {showAllDestinations
              ? lang === "fr"
                ? "Voir moins"
                : "Show less"
              : lang === "fr"
                ? "Voir plus de destinations"
                : "Show more destinations"}
          </button>
        </section>

        <section className="slh-section slh-testimonials">
          <div className="slh-section-heading">
            <p className="slh-eyebrow">{lang === "fr" ? "Avis" : "Testimonials"}</p>
            <h2>{content.sections.testimonialsTitle}</h2>
          </div>
          <div className="slh-card-grid slh-three">
            {visibleTestimonials.map((testimonial) => (
              <figure className="slh-testimonial" key={testimonial.name}>
                <span aria-hidden="true">
                  <img src={articleImages.icons.student} alt="" />
                </span>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <button
            className="slh-show-more slh-show-more-testimonials"
            type="button"
            onClick={() => setShowAllTestimonials((current) => !current)}
          >
            {showAllTestimonials
              ? lang === "fr"
                ? "Voir moins"
                : "Show less"
              : lang === "fr"
                ? "Voir plus d'avis"
                : "Show more testimonials"}
          </button>
        </section>

        <section className="slh-section slh-faq-section" id="faq">
          <div className="slh-section-heading">
            <p className="slh-eyebrow">{content.nav.faq}</p>
            <h2>{content.sections.faqTitle}</h2>
          </div>
          <div className="slh-faq-list">
            {content.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="slh-section slh-short-path" id="process">
          <div className="slh-section-heading">
            <p className="slh-eyebrow">{content.nav.process}</p>
            <h2>{content.sections.processTitle}</h2>
            <p>{content.sections.promiseText}</p>
          </div>
          <ol className="slh-process">
            {visibleProcessSteps.map((step, index) => (
              <li key={step.title}>
                <img src={articleImages.icons[processIconKeys[index % processIconKeys.length]]} alt="" />
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <button
            className="slh-show-more slh-show-more-process"
            type="button"
            onClick={() => setShowAllProcessSteps((current) => !current)}
          >
            {showAllProcessSteps
              ? lang === "fr"
                ? "Voir moins"
                : "Show less"
              : lang === "fr"
                ? "Voir toutes les étapes"
                : "Show all steps"}
          </button>
        </section>

        <section className="slh-section" id="blogs">
          <div className="slh-section-heading slh-inline-heading">
            <div>
              <p className="slh-eyebrow">{content.nav.articles}</p>
              <h2>{content.sections.articlesTitle}</h2>
            </div>
            <Link className="slh-text-link" to={joinPath(lang, "/blogs")}>
              {content.nav.articles}
            </Link>
          </div>
          <div className="slh-card-grid slh-three">
            {featuredArticles.map((article) => (
              <Link className="slh-article-card" to={joinPath(lang, `/blogs/${article.slug}`)} key={article.slug}>
                <img src={article.image} alt="" />
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="slh-section slh-contact-section" id="contact">
          <div className="slh-contact-copy">
            <p className="slh-eyebrow">{content.nav.contact}</p>
            <h2>{content.sections.ctaTitle}</h2>
            <p>{content.sections.ctaText}</p>

            <div className="slh-contact-info">
              {content.contactInfo.map((item) => (
                <a
                  className={`slh-contact-card slh-contact-card-${getContactIconType(item.label)}`}
                  href={item.href}
                  key={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <img src={getContactIcon(item.label)} alt="" />
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </a>
              ))}
            </div>
            <a className="slh-contact-main-cta" href="#top">
              {lang === "fr" ? "Vérifier mon projet" : "Check my study plan"}
            </a>
          </div>
          <div className="slh-contact-visual" aria-hidden="true">
            <img src={articleImages.success} alt="" />
          </div>
        </section>

        <section className="slh-newsletter-section">
          <div>
            <p className="slh-eyebrow">{lang === "fr" ? "Newsletter" : "Newsletter"}</p>
            <h2>{content.sections.newsletterTitle}</h2>
            <p>{content.newsletter.text}</p>
          </div>
          <form className="slh-newsletter" onSubmit={(event) => sendToFormspree(event, "newsletter")}>
            <label className="sr-only" htmlFor={`newsletter-${lang}`}>{content.sections.newsletterTitle}</label>
            <div>
              <input id={`newsletter-${lang}`} name="email" type="email" placeholder={content.newsletter.email} required />
              <button type="submit" disabled={isSubmitting}>{content.newsletter.submit}</button>
            </div>
            <FormMessage message={newsletterMessage} />
          </form>
        </section>
      </main>
      <footer className="slh-footer">
        <div className="slh-footer-reminder">
          <strong>{lang === "fr" ? "Vous hésitez encore ?" : "Still not sure?"}</strong>
          <span>{lang === "fr" ? "Remplissez le formulaire de 60 secondes et recevez la prochaine étape." : "Fill the 60-second study plan checker and get your next step."}</span>
          <a href="#top">{lang === "fr" ? "Vérifier mon projet" : "Check my study plan"}</a>
        </div>
        <div>
          <Link
            to={joinPath(lang)}
            aria-label="Study Link Hub home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={articleImages.logo} alt="Study Link Hub" />
          </Link>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label={lang === "fr" ? "Navigation du pied de page" : "Footer navigation"}>
          <a href="#about">{content.nav.about}</a>
          <a href="#contact">{content.nav.contact}</a>
        </nav>
        <div className="slh-footer-socials">
          {socialLinks.map((social) => (
            <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
              <SocialIcon name={social.icon} />
            </a>
          ))}
          <small>© {new Date().getFullYear()} Study Link Hub. {content.footer.copyright}</small>
        </div>
      </footer>
    </div>
  );
}
