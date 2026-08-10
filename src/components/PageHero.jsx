import React from "react";
import { T } from "../theme";
import EmberField from "./EmberField";
import SectionTag from "./SectionTag";

export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section
      style={{
        padding: "150px 6% 70px",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 0%, rgba(193,68,14,0.16), transparent 60%), ${T.charcoal}`,
      }}
    >
      <EmberField count={8} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
        <SectionTag>{eyebrow}</SectionTag>
        <h1 className="ang-display" style={{ fontSize: "clamp(38px, 6vw, 68px)", lineHeight: 1, margin: "16px 0" }}>
          {title}
        </h1>
        {sub && (
          <p className="ang-serif" style={{ fontSize: 17, color: T.smokeDim, maxWidth: 540, fontStyle: "italic", lineHeight: 1.6 }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
