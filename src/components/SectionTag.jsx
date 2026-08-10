import React from "react";
import { T } from "../theme";

export default function SectionTag({ children }) {
  return (
    <span style={{ fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: T.gold }}>
      {children}
    </span>
  );
}
