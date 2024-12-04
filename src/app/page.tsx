"use client";

import { useState } from "react";
import Image from 'next/image';
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import AppSection from "./components/AppSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsShrunk(section !== "about");
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative transition-all ease-in-out duration-500">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-xl fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] z-20 rounded-xl transition-all ease-in-out duration-500">
        {/* Logo and Links */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex justify-center items-center">
            <Image
              src="images/logo.jpg"
              alt="Hibir Systems"
              className="w-full sm:w-80 rounded-full shadow-lg"
            />
          </div>
          <span className="text-xl font-semibold text-gray-800 dark:text-white">Hibir Systems</span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {["about", "services", "technologies", "appsection", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`text-lg px-6 py-2 rounded-lg transition-colors duration-300 hover:scale-105 ${activeSection === section
                  ? "font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {section === "about" ? "About Me" : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-30 flex justify-center items-start pt-24">
          <div className="bg-white dark:bg-gray-800 w-[80%] rounded-xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-700 dark:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {["about", "services", "technologies", "appsection", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`block w-full text-lg py-3 text-center rounded-lg transition-colors duration-300 hover:scale-105 ${activeSection === section
                    ? "font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                {section === "about" ? "About Me" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}


      {/* Main Content */}
      <main className="pt-24 px-8 sm:px-12 lg:px-20 transition-all ease-in-out duration-300">
        <div className="flex justify-center">
          {activeSection === "about" ? (
            <div className="w-full mb-16">
              <Header isShrunk={isShrunk} />
              <section id="about" className="w-full">
                <AboutMe />
              </section>
            </div>
          ) : (
            <>
              {/* Left 15% Sidebar */}
              <div className="w-[15%] p-4 fixed top-24 left-0 z-10 hidden lg:block bg-gray-100 dark:bg-gray-800 h-[calc(100vh-96px)] rounded-xl shadow-lg overflow-auto">
                <Header isShrunk={isShrunk} />
                {/* <div className="mt-6 text-gray-800 dark:text-gray-300">
                  {activeSection === "services" && <p>Explore our wide range of services to help grow your business!</p>}
                  {activeSection === "technologies" && <p>Technologies we use include React, Node.js, and more!</p>}
                  {activeSection === "appsection" && <p>Our apps are designed to solve real-world problems efficiently.</p>}
                  {activeSection === "contact" && <p>We’d love to hear from you. Get in touch with us!</p>}
                </div> */}
              </div>

              {/* Right 85% Main Content */}
              <div className="w-full lg:w-[85%] ml-[15%] p-4">
                <div className="max-w-7xl mx-auto">
                  {activeSection === "services" && (
                    <section id="services" className="w-full mb-20">
                      <Services />
                    </section>
                  )}
                  {activeSection === "technologies" && (
                    <section id="technologies" className="w-full mb-20">
                      <Technologies />
                    </section>
                  )}
                  {activeSection === "appsection" && (
                    <section id="appsection" className="w-full mb-20">
                      <AppSection />
                    </section>
                  )}
                  {activeSection === "contact" && (
                    <section id="contact" className="w-full mb-20">
                      <Contact />
                    </section>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
