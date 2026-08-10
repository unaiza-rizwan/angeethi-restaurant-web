import React from "react";
import { Flame } from "lucide-react";
import { T } from "../theme";
import { galleryItems } from "../data/menuData";
import PageHero from "../components/PageHero";

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Inside Angeethi" title="Gallery" sub="A look at the grill, the plates, and the room." />
      <section style={{ padding: "0 6% 110px" }}>
        <div className="ang-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
          {galleryItems.map((g, i) => (
            <div
              key={g.title}
              style={{
                aspectRatio: "4/3",
                position: "relative",
                overflow: "hidden",
                background:
                  i % 3 === 0
                    ? `linear-gradient(145deg, ${T.ember}, ${T.charcoalDeep})`
                    : i % 3 === 1
                    ? `linear-gradient(145deg, ${T.charcoalDeep}, #2a1f18)`
                    : `linear-gradient(145deg, ${T.gold}22, ${T.charcoalDeep})`,
                border: "1px solid rgba(242,236,226,0.08)",
                display: "flex",
                alignItems: "flex-end",
                padding: 20,
              }}
            >
              <Flame size={60} color="rgba(242,236,226,0.06)" style={{ position: "absolute", top: 20, right: 20 }} />
              <div>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: T.gold }}>{g.tag}</span>
                <div className="ang-serif" style={{ fontSize: 18, marginTop: 4 }}>{g.title}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: T.smokeDim, fontSize: 13, marginTop: 40 }}>
          Photography placeholders — swap in real shots of the space and plates.
        </p>
      </section>
    </>
  );
}
