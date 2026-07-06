import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage lang="en" />} />
      <Route path="/blogs" element={<ArticlesPage lang="en" />} />
      <Route path="/blogs/:slug" element={<ArticlePage lang="en" />} />
      <Route path="/articles" element={<Navigate to="/blogs" replace />} />
      <Route path="/articles/:slug" element={<Navigate to="/blogs" replace />} />

      <Route path="/fr" element={<LandingPage lang="fr" />} />
      <Route path="/fr/blogs" element={<ArticlesPage lang="fr" />} />
      <Route path="/fr/blogs/:slug" element={<ArticlePage lang="fr" />} />
      <Route path="/fr/articles" element={<Navigate to="/fr/blogs" replace />} />
      <Route path="/fr/articles/:slug" element={<Navigate to="/fr/blogs" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
