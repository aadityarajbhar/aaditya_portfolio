"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import styles from "./Navbar.module.css";

const SECTIONS = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      let current = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Aaditya<span className={styles.logoDot}>.dev</span>
        </a>

        {/* Nav links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                className={`${styles.navLink} ${active === id ? styles.navLinkActive : ""}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Aaditya_Rajbhar_Resume.pdf"
              download
              onClick={close}
              className={styles.navLink}
              style={{ color: "var(--accent)" }}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="mailto:aadityarajbhar98@gmail.com"
              className={styles.ctaBtn}
              onClick={close}
            >
              Hire Me <ArrowUpRight size={16} style={{ display: "inline", marginLeft: 4 }} />
            </a>
          </li>
        </ul>

        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
