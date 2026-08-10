import React from "react";
import { ChevronRight, UtensilsCrossed, Star } from "lucide-react";
import { T } from "../theme";
import { menuData, testimonials } from "../data/menuData";
import EmberField from "../components/EmberField";
import SectionTag from "../components/SectionTag";
import CTABand from "../components/CTABand";

export default function Home({ go }) {
  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6%",
          overflow: "hidden",
          background: `radial-gradient(ellipse at 50% 100%, rgba(193,68,14,0.18), transparent 60%), ${T.charcoal}`,
        }}
      >
        <EmberField />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 40, height: 1, background: T.gold }} />
            <SectionTag>Live Coal, Since 2018 · Karachi</SectionTag>
          </div>
          <h1 className="ang-display ang-flicker ang-hero-title" style={{ fontSize: "clamp(48px, 9vw, 118px)", lineHeight: 0.95, margin: "0 0 24px 0" }}>
            FIRE. SMOKE.<br /><span style={{ color: T.emberBright }}>FLAVOUR.</span>
          </h1>
          <p className="ang-serif" style={{ fontSize: 19, color: T.smokeDim, maxWidth: 480, lineHeight: 1.6, marginBottom: 36, fontStyle: "italic" }}>
            Every kebab here is cooked the way it was in our grandfather's dhaba — over real coal, no shortcuts.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => go("reservations")} className="ang-btn-primary">Reserve a Table <ChevronRight size={16} /></button>
            <button onClick={() => go("menu")} className="ang-btn-outline">View Menu</button>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 6%", background: T.charcoalDeep }}>
        <div className="ang-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <SectionTag>Our Story</SectionTag>
            <h2 className="ang-serif" style={{ fontSize: "clamp(28px, 4vw, 42px)", margin: "16px 0 24px 0", fontWeight: 500 }}>
              A hearth, not a kitchen.
            </h2>
            <p style={{ color: T.smokeDim, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>
              "Angeethi" means the coal hearth that once sat in the centre of every Karachi courtyard —
              the place families gathered before dinner reached the table. One open flame, visible
              from every seat, doing the cooking exactly the way it's always been done.
            </p>
            <button onClick={() => go("about")} className="ang-link-btn">Read our full story <ChevronRight size={14} /></button>
          </div>
          <div className="ang-grid-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ v: "7+", l: "Years of Coal-Fire" }, { v: "38", l: "Dishes on Menu" }, { v: "64", l: "Seats by the Grill" }, { v: "7", l: "Days Open a Week" }].map((s) => (
              <div key={s.l} className="ang-card">
                <div className="ang-display" style={{ fontSize: 40, color: T.emberBright }}>{s.v}</div>
                <div style={{ fontSize: 13, color: T.smokeDim, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 6%" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionTag>Signature Picks</SectionTag>
          <h2 className="ang-serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", margin: "16px 0 0 0", fontWeight: 500 }}>From the Angeethi</h2>
        </div>
        <div className="ang-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {menuData[1].items.slice(0, 3).map((item) => (
            <div key={item.name} className="ang-card">
              <UtensilsCrossed size={18} color={T.emberBright} style={{ marginBottom: 14 }} />
              <h3 className="ang-serif" style={{ fontSize: 19, margin: "0 0 8px 0" }}>{item.name}</h3>
              <p style={{ color: T.smokeDim, fontSize: 14, marginBottom: 14, lineHeight: 1.6 }}>{item.desc}</p>
              <span style={{ color: T.gold, fontSize: 14 }}>{item.price}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button onClick={() => go("menu")} className="ang-btn-outline">See Full Menu</button>
        </div>
      </section>

      <section style={{ padding: "100px 6%", background: T.charcoalDeep }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionTag>Word on the Street</SectionTag>
          <h2 className="ang-serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", margin: "16px 0 0 0", fontWeight: 500 }}>What Guests Say</h2>
        </div>
        <div className="ang-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {testimonials.map((t) => (
            <div key={t.name} className="ang-card">
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill={T.gold} color={T.gold} />)}
              </div>
              <p className="ang-serif" style={{ fontSize: 15.5, lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>"{t.note}"</p>
              <span style={{ fontSize: 13, color: T.smokeDim, textTransform: "uppercase", letterSpacing: "0.04em" }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABand go={go} />
    </>
  );
}
