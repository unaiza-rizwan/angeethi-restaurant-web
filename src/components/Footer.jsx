import React from "react";
import { Flame, MapPin, Instagram, Facebook } from "lucide-react";
import { T, PAGES } from "../theme";

export default function Footer({ go }) {
  return (
    <footer style={{ padding: "70px 6% 40px", background: T.charcoalDeep, borderTop: "1px solid rgba(242,236,226,0.08)" }}>
      <div className="ang-grid-3" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 40, maxWidth: 1200, margin: "0 auto 50px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Flame size={20} color={T.emberBright} />
            <span className="ang-display" style={{ fontSize: 18, letterSpacing: "0.08em" }}>ANGEETHI</span>
          </div>
          <p style={{ color: T.smokeDim, fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
            Coal-fire grill house in the heart of Karachi. One flame, no shortcuts.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: T.gold, marginBottom: 16 }}>Explore</h4>
          {PAGES.map((p) => (
            <div key={p.id}>
              <button onClick={() => go(p.id)} style={{ background: "none", border: "none", color: T.smokeDim, cursor: "pointer", fontSize: 14, padding: "6px 0", fontFamily: "'Work Sans', sans-serif" }}>
                {p.label}
              </button>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: T.gold, marginBottom: 16 }}>Visit</h4>
          <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            <MapPin size={15} color={T.smokeDim} style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 14, color: T.smokeDim }}>DHA Phase 6, Karachi</span>
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 16 }}>
            <Instagram size={18} color={T.smokeDim} />
            <Facebook size={18} color={T.smokeDim} />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: 12.5, color: "rgba(242,236,226,0.35)", borderTop: "1px solid rgba(242,236,226,0.06)", paddingTop: 24 }}>
        © 2026 Angeethi Grill House · Demo design by Unaiza Rizwan Ali
      </div>
    </footer>
  );
}
