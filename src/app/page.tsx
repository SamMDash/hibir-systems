import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import AppSection from "./components/AppSection";
import Contact from "./components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isShrunk, setIsShrunk] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (section === "about") {
      setIsShrunk(false); // Expand header back
    } else {
      setIsShrunk(true); // Shrink header
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7f7] to-[#e2e2e2] relative">
      <Header isShrunk={isShrunk} />

      <nav className="flex gap-8 justify-center p-4 bg-white shadow-md z-10 relative">
        <button
          onClick={() => handleSectionChange("about")}
          className={`${
            activeSection === "about" ? "font-bold" : ""
          } text-lg`}
        >
          About Me
        </button>
        <button
          onClick={() => handleSectionChange("services")}
          className={`${
            activeSection === "services" ? "font-bold" : ""
          } text-lg`}
        >
          My Services
        </button>
        <button
          onClick={() => handleSectionChange("technologies")}
          className={`${
            activeSection === "technologies" ? "font-bold" : ""
          } text-lg`}
        >
          Technologies I Use
        </button>
        <button
          onClick={() => handleSectionChange("appsection")}
          className={`${
            activeSection === "appsection" ? "font-bold" : ""
          } text-lg`}
        >
          Hibir Medicos App
        </button>
        <button
          onClick={() => handleSectionChange("contact")}
          className={`${
            activeSection === "contact" ? "font-bold" : ""
          } text-lg`}
        >
          Contact Me
        </button>
      </nav>

      <div className="flex flex-col gap-8 px-8 sm:px-20 text-center sm:text-left pt-24">
        {/* Conditional rendering based on the active section */}
        {activeSection === "about" && (
          <section id="about" className="flex justify-center">
            <AboutMe />
          </section>
        )}
        {activeSection === "services" && (
          <section id="services" className="flex justify-center">
            <Services />
          </section>
        )}
        {activeSection === "technologies" && (
          <section id="technologies" className="flex justify-center">
            <Technologies />
          </section>
        )}
        {activeSection === "appsection" && (
          <section id="appsection" className="flex justify-center">
            <AppSection />
          </section>
        )}
        {activeSection === "contact" && (
          <section id="contact" className="flex justify-center">
            <Contact />
          </section>
        )}
      </div>
    </div>
  );
}
