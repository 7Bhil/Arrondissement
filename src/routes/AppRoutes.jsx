import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Apropos from "../pages/Apropos";
import Conseils from "../pages/Conseils";
import Culture from "../pages/Culture";

// Composant pour gérer le scroll automatique
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          {/**<Route path="/actualites" element={<News />} />*/}
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
