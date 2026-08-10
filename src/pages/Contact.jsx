import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { T } from "../theme";
import PageHero from "../components/PageHero";
import Field from "../components/Field";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Contact Us" sub="Questions, catering, or private events — reach out." />
      <section style={{ padding: "0 6% 110px" }}>
        <div className="ang-grid-2" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 60, maxWidth: 1150, margin: "0 auto" }}>
          <div>
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <MapPin size={17} color={T.emberBright} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14.5, color: T.smokeDim, lineHeight: 1.6 }}>Plot 14, Khayaban-e-Shahbaz, DHA Phase 6, Karachi</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <Phone size={17} color={T.emberBright} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14.5, color: T.smokeDim }}>+92 300 1234567</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <Mail size={17} color={T.emberBright} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14.5, color: T.smokeDim }}>hello@angeethi.pk</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginBottom: 32 }}>
              <Clock size={17} color={T.emberBright} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14.5, color: T.smokeDim }}>1:00 PM – 1:00 AM, daily</span>
            </div>
            <div
              style={{
                height: 220,
                border: "1px solid rgba(242,236,226,0.1)",
                background: T.charcoalDeep,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <MapPin size={24} color={T.gold} />
              <span style={{ fontSize: 12.5, color: T.smokeDim }}>Map embed placeholder</span>
            </div>
          </div>
          <form
            className="ang-card"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <Send size={28} color={T.emberBright} style={{ marginBottom: 12 }} />
                <p className="ang-serif" style={{ fontSize: 18, marginBottom: 8 }}>Message sent.</p>
                <p style={{ fontSize: 13, color: T.smokeDim }}>We'll get back to you within a day.</p>
              </div>
            ) : (
              <>
                <Field label="Name">
                  <input className="ang-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <input type="email" className="ang-input" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                </Field>
                <Field label="Message">
                  <textarea
                    className="ang-input"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    style={{ resize: "vertical", fontFamily: "inherit" }}
                  />
                </Field>
                <button type="submit" className="ang-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                  Send Message <Send size={15} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
