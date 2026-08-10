import React from "react";
import { Flame, Users, Award, Leaf } from "lucide-react";
import { T } from "../theme";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";

export default function About({ go }) {
  return (
    <>
      <PageHero eyebrow="Since 2018" title="Our Story" sub="How a family coal-fire came to seat sixty-four." />
      <section style={{ padding: "0 6% 110px" }}>
        <div className="ang-grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, maxWidth: 1150, margin: "0 auto" }}>
          <div>
            <p style={{ color: T.smokeDim, lineHeight: 1.9, fontSize: 15.5, marginBottom: 20 }}>
              Angeethi started in 2018 as a single coal pit and four plastic chairs behind a DHA
              petrol pump. The recipes came from a family kitchen in old Karachi — seekh kebab
              spiced the way it was three generations back, daal left to smoke overnight the way
              nobody has the patience for anymore.
            </p>
            <p style={{ color: T.smokeDim, lineHeight: 1.9, fontSize: 15.5, marginBottom: 20 }}>
              Word travelled before the signage did. By 2021 we'd moved into the current space —
              sixty-four seats, all of them within sight of the grill, because watching the fire
              work is half the meal.
            </p>
            <p style={{ color: T.smokeDim, lineHeight: 1.9, fontSize: 15.5 }}>
              We still use coal, not gas. It's slower, harder to control, and the only way we know
              that actually tastes right.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: Flame, t: "Coal, Always", d: "No gas grills anywhere in the kitchen." },
              { icon: Users, t: "Family Recipes", d: "Every marinade traces back to a home kitchen." },
              { icon: Award, t: "7 Years Running", d: "Same coal pit philosophy since day one." },
              { icon: Leaf, t: "Fresh Daily", d: "Meat and produce sourced each morning." },
            ].map((f) => (
              <div key={f.t} className="ang-card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <f.icon size={22} color={T.emberBright} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="ang-serif" style={{ fontSize: 16.5, marginBottom: 4 }}>{f.t}</div>
                  <div style={{ fontSize: 13.5, color: T.smokeDim, lineHeight: 1.6 }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand go={go} />
    </>
  );
}
