import React from "react";
import certs from "../data/certs";

export default function Certifications(){
  return (
    <section id="certs" className="section container" aria-labelledby="certs-heading">
      <h2 id="certs-heading">CERTIFICATIONS</h2>
      <p style={{color:"var(--muted)"}}>Recognitions & Certifications relevant to AL/ML.</p>

      <div className="cert-grid" style={{marginTop:12}}>
        {certs.map(c => (
          <div className="cert" key={c.id}>
            <div style={{display: "flex", alignItems: "center", gap: 8}}>
              <span style={{fontWeight:800}}>{c.title}</span>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "var(--accent1)",
                    textDecoration: "none",
                    marginLeft: 4
                  }}
                  aria-label={`View certificate for ${c.title}`}
                >
                  {/* Simple link icon SVG */}
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 7.5L17.5 2.5M17.5 2.5V6.5M17.5 2.5H13.5M7.5 12.5L2.5 17.5M2.5 17.5V13.5M2.5 17.5H6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
            </div>
            <div style={{color:"var(--muted)", fontSize:13}}>{c.org} · {c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}