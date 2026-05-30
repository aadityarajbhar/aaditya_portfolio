import { Check } from "lucide-react";
import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    role: "Flutter Developer",
    company: "Techflux Solutions, Nashik",
    duration: "October 2024 – Present",
    current: true,
    summary: "Building, launching, and managing production-grade, full-stack cross-platform mobile applications for iOS and Android. Handling everything from initial user interface design and client-server integrations to backend logic development and App Store/Play Store deployment.",
    projects: [
      {
        name: "Servyo",
        tag: "App Store & Play Store",
        desc: "Full-stack mobile app connecting users with vetted household service professionals (drivers, chefs, cleaners, gardeners).",
        bullets: [
          "Built end-to-end booking system supporting both on-demand and scheduled slots",
          "Implemented in-app calling features and real-time socket-based chat for service collaboration",
          "Integrated secure payment gateways with transparent fee structures",
          "Designed intuitive customer interfaces for service browsing, scheduling, and management"
        ]
      },
      {
        name: "Servyo Partner",
        tag: "Play Store",
        desc: "Companion app enabling household service professionals to register, accept bookings, and track their businesses.",
        bullets: [
          "Developed registration onboarding workflows for professionals across multiple fields",
          "Integrated real-time socket chat and direct call options for seamless client coordination",
          "Integrated booking calendars and built interactive earnings dashboards",
          "Implemented customer rating/feedback systems to build provider reputations"
        ]
      },
      {
        name: "Veroa Crew",
        tag: "App Store",
        desc: "End-to-end photography booking platform enabling users to discover and book professional photoshoots.",
        bullets: [
          "Developed booking engine with real-time calendar availability checking",
          "Integrated web socket-based instant messages for administrative chat support",
          "Implemented scheduling push-reminders for shoot coordination"
        ]
      },
      {
        name: "TinyMinds AI",
        tag: "Play Store",
        desc: "AI-powered educational application generating age-appropriate learning quizzes for children.",
        bullets: [
          "Integrated Google Gemini AI for runtime quiz creation with high offline-friendly performance",
          "Ensured strict compliance with Google Play Families Policies (ad-free, zero user tracking)"
        ]
      }
    ]
  },
  {
    role: "Flutter Developer",
    company: "Probity IT Solutions, Nashik",
    duration: "January 2024 – October 2024",
    current: false,
    summary: "Specialized in rebuilding legacy mobile products, scaling existing user bases, and introducing offline-first synchronization architectures for business catalog systems.",
    projects: [
      {
        name: "Marathi Marriage Biodata Maker",
        tag: "Play Store • 50K+ Downloads",
        desc: "Rebuilt and redesigned a matrimony profile generator app scaling it to 50K+ downloads.",
        bullets: [
          "Redeveloped user interfaces and restructured state architecture for smooth performance",
          "Implemented 10+ regional Indian languages (Marathi, Hindi, etc.) and PDF export templates",
          "Optimized store SEO resulting in significant organic install growth"
        ]
      },
      {
        name: "Super Catalog Maker",
        tag: "Play Store • Offline First",
        desc: "Catalog creation app for small businesses and sales representatives to manage products offline.",
        bullets: [
          "Built local database models for storing product media, descriptions, and groupings",
          "Integrated multi-currency supports with auto-formatting on exported catalog PDFs"
        ]
      },
      {
        name: "Reshimgathi Maratha Matrimony App",
        tag: "Play Store • 10K+ Downloads",
        desc: "Matrimony application designed for the Maratha community.",
        bullets: [
          "Implemented advanced profile search engines with filters, favorites, and match suggestions",
          "Built premium subscription gateways and profile verification protocols"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`section-padding ${styles.experienceSection}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag">💼 Work History</span>
          <h2 className={styles.title}>Professional Journey</h2>
          <div className={styles.accentBar}></div>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              {/* Pulsing timeline node */}
              <div
                className={`${styles.timelineNode} ${
                  exp.current ? styles.timelineNodeActive : ""
                }`}
              ></div>

              {/* Card Container */}
              <div className={styles.timelineCard}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.dateBadge}>{exp.duration}</span>
                </div>

                <p className={exp.summary ? styles.summary : ""}>{exp.summary}</p>

                {/* Projects inside Card */}
                <div className={styles.projectsGrid}>
                  {exp.projects.map((proj, pIndex) => (
                    <div key={pIndex} className={styles.companyProject}>
                      <h4 className={styles.projectTitle}>
                        {proj.name}{" "}
                        {proj.tag && <span className={styles.projectTag}>{proj.tag}</span>}
                      </h4>
                      <p className={styles.projectText}>{proj.desc}</p>
                      <ul className={styles.bullets}>
                        {proj.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className={styles.bulletItem}>
                            <span className={styles.check}><Check size={12} /></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
