"use client";

import { useState } from "react";
import { ChevronRight, Smartphone, Star, Download, Play, Check } from "lucide-react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    title: "Servyo",
    subtitle: "On-Demand Household Services App",
    category: "On-Demand Services",
    initials: "SV",
    metrics: { downloads: "10K+", rating: "4.8 ★", platform: "iOS & Android" },
    description: "Designed and launched a full-stack mobile app connecting users with vetted household service professionals including drivers, chefs, cleaners, and gardeners.",
    features: [
      "End-to-end booking system with on-demand and scheduled service options",
      "Integrated socket-based real-time chat communication for user-professional interaction",
      "Implemented in-app call routing and customer support call features",
      "Secure payment gateway integration with transparent pricing",
      "Professional vetting workflow, background check, and training verification",
      "Intuitive UI for browsing, reviews, and bookings management"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.servyo.user",
    appStore: "https://apps.apple.com/in/app/servyo/id6746445188"
  },
  {
    title: "Servyo Partner",
    subtitle: "Service Provider App",
    category: "Companion / Business App",
    initials: "SP",
    metrics: { downloads: "5K+", rating: "4.7 ★", platform: "Android" },
    description: "Launched a companion app enabling service professionals to register, manage bookings, track earnings, and grow their business on the Servyo platform.",
    features: [
      "Onboarding flow for service providers across multiple categories",
      "Integrated real-time socket chat for quick communications with active clients",
      "Implemented in-app call connections for direct client contact",
      "Booking management system for flexible job scheduling",
      "Earnings tracking dashboard with complete job history",
      "Ratings and reviews feedback system for build credibility"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.servyo.partner"
  },
  {
    title: "Veroa Crew",
    subtitle: "Photography Booking Platform",
    category: "Creative Booking",
    initials: "VC",
    metrics: { downloads: "1K+", rating: "4.9 ★", platform: "iOS" },
    description: "Designed and developed an end-to-end photography service platform enabling users to discover, book, and manage professional photoshoots seamlessly.",
    features: [
      "Scalable booking system with real-time availability and instant confirmation",
      "Push notifications for updates and schedule changes",
      "Admin chat functionality using socket-based communication",
      "Reminders and coordination for photoshoot schedules"
    ],
    appStore: "https://apps.apple.com/in/app/veroa-crew/id6762200664"
  },
  {
    title: "Pawfect Caring",
    subtitle: "Pet Management App",
    category: "Health & Routine Tracker",
    initials: "PC",
    metrics: { downloads: "5K+", rating: "4.8 ★", platform: "Android" },
    description: "An all-in-one pet care companion app helping pet owners manage daily routines, health tracking, and reminders for multiple pets in one place.",
    features: [
      "Pet profile system with breed, health details, and weight logs",
      "Multi-pet management with separate profiles and schedules",
      "Smart reminder system covering feeding, grooming, and vaccines",
      "Secure OTP-based mobile login"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.techflux.pawfectcaring"
  },
  {
    title: "TinyMinds AI",
    subtitle: "Kids Educational App",
    category: "AI / EdTech",
    initials: "TM",
    metrics: { downloads: "2K+", rating: "4.9 ★", platform: "Android" },
    description: "AI-powered educational app generating dynamic quizzes on core topics using Google Gemini AI in a safe, ad-free environment.",
    features: [
      "Google Gemini AI integration for age-appropriate Math, ABC & Word quizzes",
      "Kid-friendly UI with clean, simple navigation",
      "Google Play Families Policy compliance (no ads, no tracking)",
      "Offline-friendly performance for smooth learning"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.techflux.tinyminds_ai"
  },
  {
    title: "Marathi Biodata Maker",
    subtitle: "Biodata Creator App",
    category: "Utility / Document Creator",
    initials: "BM",
    metrics: { downloads: "50K+", rating: "4.6 ★", platform: "Android" },
    description: "Redesigned and rebuilt a marriage biodata maker scaling to 50K+ downloads with expanded language support and customizable templates.",
    features: [
      "Modern application redevelopment with improved UI and modular design",
      "10+ Indian languages support including Marathi and Hindi",
      "Customizable biodata templates for instant PDF export and sharing",
      "ASO optimization resulting in significant organic install growth"
    ],
    playStore: "https://play.google.com/store/search?q=marathi+marriage+biodata+maker&c=apps"
  },
  {
    title: "Super Catalog Maker",
    subtitle: "Offline Product Catalog App",
    category: "Productivity / Business",
    initials: "SC",
    metrics: { downloads: "5K+", rating: "4.7 ★", platform: "Android" },
    description: "Offline product catalog generator for small businesses and sales reps to create and share professional product lists entirely offline.",
    features: [
      "Product lists with images, prices, descriptions, and category groups",
      "One-tap PDF generation for shareable catalogs",
      "Global currency selector with automatic symbol rendering in exported PDFs",
      "Offline-first architecture (no internet connection required)"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.techflux.supercatalog"
  },
  {
    title: "Image to Image Catalog",
    subtitle: "Visual Catalog App",
    category: "Productivity / Business",
    initials: "IC",
    metrics: { downloads: "2K+", rating: "4.5 ★", platform: "Android" },
    description: "A visual, image-based product catalog app for sales representatives to manage and access product listings on the go.",
    features: [
      "Image-centric product management system supporting up to 50 items",
      "Offline download cache for catalog access without internet",
      "Email-based OTP authentication for login and verification"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.techflux.imagetoimagecatalog"
  },
  {
    title: "Reshimgathi Matrimony",
    subtitle: "Community Matrimony App",
    category: "Social / Community",
    initials: "RM",
    metrics: { downloads: "10K+", rating: "4.6 ★", platform: "Android" },
    description: "Community-focused matrimony app for the Maratha community, enabling users to discover and connect with verified profiles.",
    features: [
      "Advanced profile search engine with filters, favorites, and requests",
      "Integrated secure payment gateways for premium features",
      "Real-time match alerts and push notifications",
      "Manual profile verification system for safety"
    ],
    playStore: "https://play.google.com/store/apps/details?id=dev.probity.reshimgathi"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProj = PROJECTS[activeIndex];

  return (
    <section id="projects" className={`section-padding ${styles.projectsSection}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag">📱 What I Built</span>
          <h2 className={styles.title}>Live Mobile Applications</h2>
          <p className="text-center subtitle">
            Explore a curated portfolio of 10+ live Android & iOS applications, scaling to over 50K+ total downloads.
          </p>
          <div className={styles.accentBar}></div>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Projects List */}
          <div className={styles.projectsList}>
            {PROJECTS.map((proj, idx) => (
              <div key={idx}>
                <div
                  className={`${styles.projectCard} ${
                    activeIndex === idx ? styles.projectCardActive : ""
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className={styles.cardIcon}>{proj.initials}</div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{proj.title}</h3>
                    <p className={styles.cardMeta}>
                      {proj.category} • {proj.metrics.platform}
                    </p>
                  </div>
                  <ChevronRight className={styles.arrowIcon} size={20} />
                </div>

                {/* Mobile Expansion (only visible on mobile layout) */}
                <div className="mobile-only-details" style={{ display: "none" }}>
                  <div style={{ padding: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderTop: "none", borderRadius: "0 0 12px 12px", marginBottom: "16px" }}>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "12px" }}>{proj.description}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", gap: "6px" }}>
                          <span style={{ color: "var(--primary)" }}>✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {proj.playStore && (
                        <a href={proj.playStore} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} style={{ padding: "8px 12px", fontSize: "0.75rem", flexGrow: 1 }}>
                          Play Store
                        </a>
                      )}
                      {proj.appStore && (
                        <a href={proj.appStore} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} style={{ padding: "8px 12px", fontSize: "0.75rem", flexGrow: 1 }}>
                          App Store
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Mockup Device */}
          <div className={styles.mockupContainer}>
            <div className={styles.phoneShell}>
              <div className={styles.phoneNotch}></div>
              
              {/* Mock Status Bar */}
              <div className={styles.statusBar}>
                <span>9:41 AM</span>
                <div className={styles.statusRight}>
                  <Smartphone size={12} />
                  <span>5G</span>
                  <span style={{ border: "1px solid var(--text-secondary)", padding: "1px 3px", borderRadius: "3px", fontSize: "0.55rem" }}>100%</span>
                </div>
              </div>

              {/* Inside Phone Screen */}
              <div className={styles.phoneScreen}>
                <div className={styles.appHeader}>
                  <div className={styles.appIcon}>{activeProj.initials}</div>
                  <div>
                    <h4 className={styles.appTitle}>{activeProj.title}</h4>
                    <span className={styles.appPlatform}>{activeProj.metrics.platform}</span>
                  </div>
                </div>

                <div className={styles.appMetrics}>
                  <div className={styles.metricItem}>
                    <div className={styles.metricValue}>{activeProj.metrics.downloads}</div>
                    <div className={styles.metricLabel}>Downloads</div>
                  </div>
                  <div className={styles.metricItem}>
                    <div className={styles.metricValue}>{activeProj.metrics.rating}</div>
                    <div className={styles.metricLabel}>Rating</div>
                  </div>
                  <div className={styles.metricItem}>
                    <div className={styles.metricValue}>FREE</div>
                    <div className={styles.metricLabel}>License</div>
                  </div>
                </div>

                <p className={styles.appDescription}>{activeProj.description}</p>

                <h5 className={styles.sectionTitle}>Key Features</h5>
                <ul className={styles.featuresList}>
                  {activeProj.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className={styles.bullet}><Check size={12} /></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Download links inside App Info */}
                <div className={styles.storeLinks}>
                  {activeProj.playStore && (
                    <a
                      href={activeProj.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.storeBtn}
                    >
                      <Play size={14} style={{ fill: "currentColor" }} /> Get on Google Play
                    </a>
                  )}
                  {activeProj.appStore && (
                    <a
                      href={activeProj.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.storeBtn}
                    >
                      <Smartphone size={14} /> Get on App Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX to handle responsiveness specifically for mobile expansion show/hide */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .mobile-only-details {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
