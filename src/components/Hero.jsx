"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, ArrowRight, Download } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./Hero.module.css";

const WORDS = ["Flutter Developer", "Mobile Architect", "Node.js Developer", "End-to-End Creator"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const activeWord = WORDS[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        if (currentText === activeWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      {/* Dot grid overlay */}
      <div className="dot-grid" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.grid}>
          {/* ── Text Column ────────────────────────────────────── */}
          <div className={styles.textContent}>
            {/* "Open to Work" badge */}
            <div>
              <span className="open-badge">
                <span className="open-badge-dot" />
                Open to Work
              </span>
            </div>

            <span className={styles.greeting}>Welcome to my space</span>
            <h1 className={styles.name}>
              Hi, I&apos;m Aaditya <br />
              <span className="gradient-text">Rajbhar</span>
            </h1>

            <div className={styles.subtitle}>
              I&apos;m a&nbsp;
              <span className={styles.typingWord}>{currentText}</span>
            </div>

            <p className={styles.description}>
              Flutter Developer with 2.5+ years of experience building and deploying
              production-grade, scalable cross-platform mobile apps for iOS and Android. With
              10+ live apps on the App Store and Google Play Store, I specialize in crafting
              flawless mobile experiences and robust Node.js backends.
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#projects" className="glow-btn">
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="/Aaditya_Rajbhar_Resume.pdf"
                download
                className="secondary-btn"
                title="Download Resume"
              >
                Download CV <Download size={18} />
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className={styles.socials}>
              <a
                href="https://linkedin.com/in/aadityarajbhar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:aadityarajbhar98@gmail.com" className={styles.socialIcon} title="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+919765885182" className={styles.socialIcon} title="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* ── Photo Column ────────────────────────────────────── */}
          <div className={styles.imageContent}>
            <div className={styles.profileFrame}>
              <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Aaditya Rajbhar Portrait" className={styles.profileImage} />
              </div>
            </div>
          </div>

          {/* ── Animated Stats Row ──────────────────────────────── */}
          <div className={styles.statsContainer}>
            <div className={`${styles.statCard} shimmer-card`}>
              <div className={styles.statValue}>
                <AnimatedCounter target={2.5} suffix="+" />
              </div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={`${styles.statCard} shimmer-card`}>
              <div className={styles.statValue}>
                <AnimatedCounter target={10} suffix="+" />
              </div>
              <div className={styles.statLabel}>Live Store Apps</div>
            </div>
            <div className={`${styles.statCard} shimmer-card`}>
              <div className={styles.statValue}>
                <AnimatedCounter target={50} suffix="K+" />
              </div>
              <div className={styles.statLabel}>Total Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
