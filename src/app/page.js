import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />

        {/* Tech stack marquee directly below hero */}
        <TechStack />

        <hr className="gradient-divider" />
        <ScrollReveal>
          <About />
        </ScrollReveal>

        <hr className="gradient-divider" />
        <ScrollReveal direction="up" delay={80}>
          <Skills />
        </ScrollReveal>

        <hr className="gradient-divider" />
        <ScrollReveal direction="up" delay={80}>
          <Projects />
        </ScrollReveal>

        <hr className="gradient-divider" />
        <ScrollReveal direction="up" delay={80}>
          <Experience />
        </ScrollReveal>

        <hr className="gradient-divider" />
        <ScrollReveal direction="up" delay={80}>
          <Education />
        </ScrollReveal>

        <hr className="gradient-divider" />
        <ScrollReveal direction="up" delay={80}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-color)",
          padding: "48px 0 32px",
          textAlign: "center",
        }}
      >
        <div className="container">
          {/* Logo */}
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            Aaditya<span style={{ color: "var(--accent)" }}>.dev</span>
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "24px" }}>
            Flutter Developer · Node.js · Full-Stack Mobile Engineer
          </p>

          {/* Links */}
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap", marginBottom: "28px" }}>
            {["home", "about", "skills", "projects", "experience", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "capitalize" }}
                className="footer-link"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Social row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "28px" }}>
            <a href="https://linkedin.com/in/aadityarajbhar" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.85rem", color: "var(--text-muted)" }} className="footer-link">
              LinkedIn
            </a>
            <a href="mailto:aadityarajbhar98@gmail.com"
              style={{ fontSize: "0.85rem", color: "var(--text-muted)" }} className="footer-link">
              Email
            </a>
            <a href="tel:+919765885182"
              style={{ fontSize: "0.85rem", color: "var(--text-muted)" }} className="footer-link">
              Phone
            </a>
            <a href="/Aaditya_Flutter_Developer.pdf" download
              style={{ fontSize: "0.85rem", color: "var(--accent)" }} className="footer-link">
              Download CV
            </a>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", opacity: 0.6 }}>
            © {new Date().getFullYear()} Aaditya Rajbhar · All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
