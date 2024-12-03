"use client"; // Mark the file as client-side component

import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import AppSection from "./components/AppSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f7f7f7] to-[#e2e2e2]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Hibir Systems
            </h1>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#about"
                  onClick={() => handleNavClick("about")}
                  className={`text-lg font-medium ${activeSection === "about" ? "text-green-600" : "text-gray-600"} hover:text-green-600 dark:text-gray-300 dark:hover:text-white`}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleNavClick("services")}
                  className={`text-lg font-medium ${activeSection === "services" ? "text-green-600" : "text-gray-600"} hover:text-green-600 dark:text-gray-300 dark:hover:text-white`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={() => handleNavClick("technologies")}
                  className={`text-lg font-medium ${activeSection === "technologies" ? "text-green-600" : "text-gray-600"} hover:text-green-600 dark:text-gray-300 dark:hover:text-white`}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#app"
                  onClick={() => handleNavClick("app")}
                  className={`text-lg font-medium ${activeSection === "app" ? "text-green-600" : "text-gray-600"} hover:text-green-600 dark:text-gray-300 dark:hover:text-white`}
                >
                  Hibir Medicos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className={`text-lg font-medium ${activeSection === "contact" ? "text-green-600" : "text-gray-600"} hover:text-green-600 dark:text-gray-300 dark:hover:text-white`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24">
        <Header />
        <main className="flex flex-col gap-8 text-center sm:text-left">
          {/* Conditional rendering based on the active section */}
          {activeSection === "about" && <section id="about"><AboutMe /></section>}
          {activeSection === "services" && <section id="services"><Services /></section>}
          {activeSection === "technologies" && <section id="technologies"><Technologies /></section>}
          {activeSection === "app" && <section id="app"><AppSection /></section>}
          {activeSection === "contact" && <section id="contact"><Contact /></section>}
        </main>
        <Footer />
      </div>
    </div>
  );
}
