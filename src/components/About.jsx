import { Smartphone, Server, Sparkles, ShoppingBag } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Narrative */}
          <div>
            <span className="section-tag">👋 Who I Am</span>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.accentBar}></div>
            <div className={styles.paragraphs}>
              <p>
                I am a passionate <span className={styles.highlightText}>Flutter Developer</span> with 2.8+ years of 
                professional experience crafting responsive, cross-platform mobile apps for Android and iOS. 
                My focus lies in building clean interfaces, optimizing runtime performance, and ensuring a native feel.
              </p>
              <p>
                Beyond frontend mobile applications, I possess strong capabilities in{" "}
                <span className={styles.highlightText}>Backend Development</span> using Node.js, Express.js, and database 
                systems. This enables me to architect and deliver complete, secure, end-to-end applications from database 
                design to App Store and Google Play publication.
              </p>
              <p>
                Having deployed over 10+ live projects and managed accounts with tens of thousands of downloads, 
                I understand the full app lifecycle, store guidelines, and user-centric software design.
              </p>
            </div>
          </div>

          {/* Right Column: Specializations */}
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} shimmer-card`}>
              <div className={styles.iconWrapper}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.featureTitle}>Mobile Architecture</h3>
              <p className={styles.featureDesc}>
                Developing modular, highly-scalable mobile architectures using Bloc, Provider, GetX, and Riverpod.
              </p>
            </div>

            <div className={`${styles.featureCard} shimmer-card`}>
              <div className={styles.iconWrapper}>
                <Server size={24} />
              </div>
              <h3 className={styles.featureTitle}>Backend & REST APIs</h3>
              <p className={styles.featureDesc}>
                Designing lightweight Node.js/Express.js APIs, authentication flows, and real-time Socket communication.
              </p>
            </div>

            <div className={`${styles.featureCard} shimmer-card`}>
              <div className={styles.iconWrapper}>
                <Sparkles size={24} />
              </div>
              <h3 className={styles.featureTitle}>Flawless UI & Animation</h3>
              <p className={styles.featureDesc}>
                Bringing interfaces to life with micro-animations, custom gestures, and fully custom UI layouts.
              </p>
            </div>

            <div className={`${styles.featureCard} shimmer-card`}>
              <div className={styles.iconWrapper}>
                <ShoppingBag size={24} />
              </div>
              <h3 className={styles.featureTitle}>Store Optimization</h3>
              <p className={styles.featureDesc}>
                App Store and Google Play publishing, setting up families policy compliance, and optimizing SEO/ASO listing details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
