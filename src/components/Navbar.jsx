import React from "react";
import { Flame, Menu as MenuIcon, X } from "lucide-react";
import { T, PAGES } from "../theme";

export default function Navbar({ page, go, scrolled, menuOpen, setMenuOpen }) {
  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "16px 6%" : "24px 6%",
          background: scrolled || menuOpen ? "rgba(15,12,10,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(10px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(242,236,226,0.08)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <button onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
          <Flame size={22} color={T.emberBright} />
          <span className="ang-display" style={{ fontSize: 20, letterSpacing: "0.08em", color: T.smoke }}>
            ANGEETHI
          </span>
        </button>
        <div className="ang-hide-mobile" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {PAGES.map((p) => (
            <button key={p.id} onClick={() => go(p.id)} className={`ang-navlink ${page === p.id ? "active" : ""}`}>
              {p.label}
            </button>
          ))}
        </div>
        <button
          className="ang-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: T.smoke, cursor: "pointer" }}
        >
          {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "sticky", top: 0, zIndex: 49, background: T.charcoalDeep, borderBottom: "1px solid rgba(242,236,226,0.08)", padding: "0 6% 16px" }}>
          {PAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => go(p.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(242,236,226,0.06)",
                color: page === p.id ? T.emberBright : T.smokeDim,
                padding: "14px 0",
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                cursor: "pointer",
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
