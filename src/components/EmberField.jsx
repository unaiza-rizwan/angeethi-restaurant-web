import React from "react";
import { T } from "../theme";

export default function EmberField({ count = 14 }) {
  const embers = Array.from({ length: count });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {embers.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 6;
        const size = 2 + Math.random() * 3;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              bottom: "-10px",
              width: size,
              height: size,
              borderRadius: "50%",
              background: i % 2 === 0 ? T.emberBright : T.gold,
              boxShadow: `0 0 6px 1px ${T.emberBright}`,
              animation: `emberRise ${duration}s ease-in ${delay}s infinite`,
              opacity: 0,
            }}
          />
        );
      })}
    </div>
  );
}
