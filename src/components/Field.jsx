import React from "react";

export default function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label className="ang-label">{label}</label>
      {children}
    </div>
  );
}
