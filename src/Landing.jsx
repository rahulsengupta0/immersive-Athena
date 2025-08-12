// src/pages/Landing.jsx
import React from "react";

import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievement from "./components/achievement";
import FAQSection from "./components/FAQSection";
import About from "./components/About";

const Landing = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About/>
      <Features />
      <Story />
      <Achievement />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Landing;
