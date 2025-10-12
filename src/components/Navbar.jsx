import React from "react";

const NavLink = ({ href, children }) => (
  <a href={href} onClick={(e)=>{ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:"smooth"})}} >
    {children}
  </a>
);

export default function Navbar(){
  return (
    <header className="nav container" role="banner">
      <div className="brand">
      <div className="logo">
        <img src="./profile.JPG" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}/>
      </div>
        <div>
          <div style={{fontSize:14}}>Arkadipta Paul</div>
          <div style={{fontSize:12,color:"var(--muted)"}}>AI Engineer</div>
        </div>
      </div>

      <nav className="nav-links" role="navigation" aria-label="Main">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#certs">Certifications</NavLink>
        <a href="#contact" onClick={(e)=>{ e.preventDefault(); window.scrollTo({top:document.body.scrollHeight, behavior:"smooth"})}}>Contact</a>
      </nav>
    </header>
  );
}
