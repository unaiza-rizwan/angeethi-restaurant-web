import React, { useState } from "react";
import { Flame, Clock, Phone, Users, ChevronRight } from "lucide-react";
import { T } from "../theme";
import PageHero from "../components/PageHero";
import Field from "../components/Field";

export default function Reservations() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Book a Table" title="Reserve Your Seat" sub="We hold every table 15 minutes past reservation time." />
      <section style={{ padding: "0 6% 110px" }}>
        <div className="ang-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
              <Clock size={16} color={T.emberBright} />
              <span style={{ fontSize: 14, color: T.smokeDim }}>Open daily, 1:00 PM – 1:00 AM</span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
              <Phone size={16} color={T.emberBright} />
              <span style={{ fontSize: 14, color: T.smokeDim }}>+92 300 1234567</span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 30 }}>
              <Users size={16} color={T.emberBright} />
              <span style={{ fontSize: 14, color: T.smokeDim }}>Groups over 10 — call ahead for the long table</span>
            </div>
            <div className="ang-card">
              <div className="ang-serif" style={{ fontSize: 17, marginBottom: 10 }}>Tonight's availability</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["7:00 PM", "8:30 PM", "9:30 PM"].map((t) => (
                  <div key={t} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: T.smokeDim, padding: "8px 0", borderBottom: "1px solid rgba(242,236,226,0.06)" }}>
                    <span>{t}</span><span style={{ color: T.gold }}>Open</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="ang-card">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <Flame size={32} color={T.emberBright} style={{ marginBottom: 12 }} />
                <p className="ang-serif" style={{ fontSize: 18, marginBottom: 8 }}>Table requested.</p>
                <p style={{ fontSize: 13, color: T.smokeDim }}>We'll confirm by call within the hour, {form.name || "friend"}.</p>
              </div>
            ) : (
              <>
                <Field label="Full Name">
                  <input className="ang-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </Field>
                <Field label="Phone Number">
                  <input className="ang-input" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX XXXXXXX" />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                  <Field label="Date">
                    <input type="date" className="ang-input" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </Field>
                  <Field label="Guests">
                    <select className="ang-input" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Notes (optional)">
                  <input className="ang-input" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Birthday, window seat, allergies..." />
                </Field>
                <button type="submit" className="ang-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                  Request Table <ChevronRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
