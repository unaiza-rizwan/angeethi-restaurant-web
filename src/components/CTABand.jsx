import React from "react";
import { Flame, ChevronRight } from "lucide-react";
import { T } from "../theme";

export default function CTABand({ go }) {
  return (
    <section style={{ padding: "90px 6%", textAlign: "center", background: `linear-gradient(135deg, ${T.ember}22, ${T.charcoal})` }}>
      <Flame size={30} color={T.emberBright} style={{ marginBottom: 18 }} />
      <h2 className="ang-serif" style={{ fontSize: "clamp(26px, 4vw, 40px)", marginBottom: 24, fontWeight: 500 }}>
        Come sit by the fire.
      </h2>
      <button onClick={() => go("reservations")} className="ang-btn-primary">
        Reserve a Table <ChevronRight size={16} />
      </button>
    </section>
  );
}
