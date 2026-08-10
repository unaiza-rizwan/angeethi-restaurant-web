import React, { useState, useEffect } from "react";
import { T, PAGES } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

const PAGE_COMPONENTS = {
  home: Home,
  menu: Menu,
  gallery: Gallery,
  about: About,
  reservations: Reservations,
  contact: Contact,
};

function getInitialPage() {
  const h = (typeof window !== "undefined" && window.location.hash.replace("#", "")) || "home";
  return PAGES.some((p) => p.id === h) ? h : "home";
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    if (typeof window !== "undefined") window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onHash = () => setPage(getInitialPage());
    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const PageComponent = PAGE_COMPONENTS[page];

  return (
    <div style={{ background: T.charcoal, color: T.smoke, minHeight: "100vh" }}>
      <Navbar page={page} go={go} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <PageComponent go={go} />
      <Footer go={go} />
    </div>
  );
}
