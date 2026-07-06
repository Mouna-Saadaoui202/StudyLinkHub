import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { articleImages, articles, languages, siteContent } from "../data/siteContent";
import "../assets/css/landing.css";

function joinPath(lang, path = "") {
  return `${languages[lang].pathPrefix}${path}` || "/";
}

export function ArticlePage({ lang = "en" }) {
  const { slug } = useParams();
  const article = articles[lang].find((item) => item.slug === slug);
  const otherLang = lang === "en" ? "fr" : "en";

  useEffect(() => {
    if (!article) return;
    document.documentElement.lang = languages[lang].htmlLang;
    document.title = `${article.title} | Study Link Hub`;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", article.excerpt);
  }, [article, lang]);

  if (!article) {
    return <Navigate to={joinPath(lang, "/blogs")} replace />;
  }

  return (
    <div className="slh-page">
      <header className="slh-header">
        <Link to={joinPath(lang)} className="slh-brand" aria-label="Study Link Hub">
          <img src={articleImages.logo} alt="" />
        </Link>
        <nav className="slh-nav" aria-label="Blog navigation">
          <Link to={joinPath(lang)}>{lang === "fr" ? "Accueil" : "Home"}</Link>
          <Link to={joinPath(lang, "/blogs")}>{siteContent[lang].nav.articles}</Link>
        </nav>
        <Link className="slh-language" to={joinPath(otherLang, "/blogs")}>
          {languages[otherLang].label}
        </Link>
      </header>

      <main className="slh-article-page">
        <article className="slh-article-detail">
          <Link className="slh-text-link" to={joinPath(lang, "/blogs")}>
            {lang === "fr" ? "Retour aux blogs" : "Back to blogs"}
          </Link>
          <p className="slh-eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="slh-article-date">{article.date}</p>
          <img src={article.image} alt="" />
          <div className="slh-article-body">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
