import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

/* App is a single-page with anchor navigation */
export default function App() {
  return (
    <div className="app">
      <div className="bg-aurora" aria-hidden="true" />
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
