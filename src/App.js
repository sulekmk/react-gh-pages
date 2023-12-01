import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Cetifications";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <hr class="dashed" />

      <Projects />
      <hr class="dashed" />

      <Skills />
      <hr class="dashed" />

      <Testimonials />
      <hr class="dashed" />

      <Certifications />
      <hr class="dashed" />

      <Contact />
    </main>
  );
}