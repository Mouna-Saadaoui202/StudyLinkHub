import { useEffect } from "react";
import { Link } from "react-router-dom";
import { articleImages, articles, languages, siteContent } from "../data/siteContent";
import "../assets/css/landing.css";

function joinPath(lang, path = "") {
  return `${languages[lang].pathPrefix}${path}` || "/";
}

function setArticlesMeta(lang) {
  const content = siteContent[lang];
  document.documentElement.lang = languages[lang].htmlLang;
  document.title =
    lang === "fr"
      ? `Blogs | ${content.meta.title}`
      : `Blogs | ${content.meta.title}`;
}

export function ArticlesPage({ lang = "en" }) {
  const content = siteContent[lang];
  const currentArticles = articles[lang];
  const otherLang = lang === "en" ? "fr" : "en";

  useEffect(() => {
    setArticlesMeta(lang);
  }, [lang]);

  return (
    <div className="slh-page">
      <header className="slh-header">
        <Link to={joinPath(lang)} className="slh-brand" aria-label="Study Link Hub">
          <img src={articleImages.logo} alt="" />
        </Link>
        <nav className="slh-nav" aria-label="Blog navigation">
          <Link to={joinPath(lang)}>{lang === "fr" ? "Accueil" : "Home"}</Link>
          <Link to={joinPath(lang, "/blogs")}>{content.nav.articles}</Link>
        </nav>
        <Link className="slh-language" to={joinPath(otherLang, "/blogs")}>
          {languages[otherLang].label}
        </Link>
      </header>

      <main className="slh-article-page">
        <section className="slh-section slh-article-hero">
          <p className="slh-eyebrow">{content.nav.articles}</p>
          <h1>{content.sections.articlesTitle}</h1>
          <p>
            {lang === "fr"
              ? "Des guides courts pour mieux comprendre les destinations, documents, délais et décisions importantes."
              : "Short blog posts to understand destinations, documents, timelines, and important decisions before applying."}
          </p>
        </section>

        <section className="slh-section">
          <div className="slh-card-grid slh-three">
            {currentArticles.map((article) => (
              <Link className="slh-article-card" to={joinPath(lang, `/blogs/${article.slug}`)} key={article.slug}>
                <img src={article.image} alt="" />
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
