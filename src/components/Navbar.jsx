import React, { useState, useEffect } from "react";
// import resumePdf from '../assets/Arvind-CV.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active nav logic
      const secs = document.querySelectorAll("section[id]");
      let cur = "";
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) {
          cur = s.id;
        }
      });
      setActiveSection(cur);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a className="nav-logo" href="#hero">
          <em>Arvind</em>
          <span>.</span>
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <button
            onClick={toggleTheme}
            className="nav-hire"
            style={{
              background: "transparent",
              color: "var(--ink)",
              border: "1.5px solid var(--border)",
              padding: "9px 12px",
            }}
            aria-label="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          {/* <a href={resumePdf} download="Arvind-CV.pdf" className="nav-hire" style={{ background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--border)' }}>Resume</a> */}
          <a
            href={
              "https://drive.google.com/file/d/1W5SqkqWoFdt4BHc1sUgWtjt90W8F_-vH/view"
            }
            download="Arvind-CV.pdf"
            className="nav-hire"
            style={{
              background: "transparent",
              color: "var(--ink)",
              border: "1.5px solid var(--border)",
            }}
          >
            Resume
          </a>
          <a href="mailto:arvindlodhi850@gmail.com" className="nav-hire">
            Hire Me
          </a>
          <button
            className="nav-ham"
            id="hamBtn"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "",
                transition: "transform .3s, opacity .3s",
              }}
            ></span>
            <span
              style={{
                opacity: menuOpen ? "0" : "1",
                transition: "transform .3s, opacity .3s",
              }}
            ></span>
            <span
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "",
                transition: "transform .3s, opacity .3s",
              }}
            ></span>
          </button>
        </div>
      </nav>
      <div className={`nav-mobile ${menuOpen ? "open" : ""}`} id="navMobile">
        <a href="#about" className="mob-link" onClick={closeMenu}>
          About
        </a>
        <a href="#experience" className="mob-link" onClick={closeMenu}>
          Experience
        </a>
        <a href="#skills" className="mob-link" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" className="mob-link" onClick={closeMenu}>
          Projects
        </a>
        <a href="#education" className="mob-link" onClick={closeMenu}>
          Education
        </a>
        <a href="#contact" className="mob-link" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
