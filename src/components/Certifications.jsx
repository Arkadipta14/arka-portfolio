import React from "react";
import certs from "../data/certs";

export default function Certifications(){
  return (
    <section id="certs" className="section container" aria-labelledby="certs-heading">
      <h2 id="certs-heading">Certifications</h2>
      <p style={{color:"var(--muted)"}}>Recognitions & certificates relevant to ML and cloud.</p>

      <div className="cert-grid" style={{marginTop:12}}>
        {certs.map(c => (
          <div className="cert" key={c.id}>
            <div style={{fontWeight:800}}>{c.title}</div>
            <div style={{color:"var(--muted)", fontSize:13}}>{c.org} · {c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
