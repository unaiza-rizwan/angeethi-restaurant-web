import React, { useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import { T } from "../theme";
import { menuData } from "../data/menuData";
import PageHero from "../components/PageHero";

export default function Menu() {
  const [active, setActive] = useState("All");
  const cats = ["All", ...menuData.map((m) => m.category)];
  const visible = active === "All" ? menuData : menuData.filter((m) => m.category === active);

  return (
    <>
      <PageHero eyebrow="What's Cooking" title="The Full Menu" sub="38 dishes, one flame. Prices are per plate unless noted." />
      <section style={{ padding: "0 6% 110px" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 56 }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="ang-pill"
              style={{
                background: active === c ? T.emberBright : "transparent",
                borderColor: active === c ? T.emberBright : "rgba(242,236,226,0.2)",
                color: active === c ? T.charcoalDeep : T.smokeDim,
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="ang-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, maxWidth: 1200, margin: "0 auto" }}>
          {visible.map((section) => (
            <div key={section.category}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <UtensilsCrossed size={16} color={T.emberBright} />
                <h3 className="ang-display" style={{ fontSize: 17, margin: 0 }}>{section.category.toUpperCase()}</h3>
              </div>
              {section.items.map((item) => (
                <div key={item.name} className="ang-menu-item">
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <span className="ang-serif" style={{ fontSize: 16.5 }}>{item.name}</span>
                    <span style={{ color: T.gold, fontSize: 14, whiteSpace: "nowrap" }}>{item.price}</span>
                  </div>
                  <p style={{ color: T.smokeDim, fontSize: 13, marginTop: 4 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
