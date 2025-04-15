import React from "react";
import ThemeProvider from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Works from "../components/Works";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Works />
          <Contact />
        </main>
        <footer className="py-6 bg-secondary text-center text-sm text-muted-foreground">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Ayush Deuja. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
