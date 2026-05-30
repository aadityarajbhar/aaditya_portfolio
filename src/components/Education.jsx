import { GraduationCap, Calendar, Award } from "lucide-react";
import styles from "./Education.module.css";

const EDUCATIONS = [
  {
    degree: "Bachelor of Computer Science (BCS)",
    school: "Savitribai Phule Pune University",
    year: "Graduated: 2024",
    scoreType: "CGPA",
    score: "7.5 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bhonsala Military College",
    year: "Year: 2021",
    scoreType: "Percentage",
    score: "75%",
  },
];

export default function Education() {
  return (
    <section id="education" className={`section-padding ${styles.educationSection}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-tag">🎓 Academic Background</span>
          <h2 className={styles.title}>Academic Foundation</h2>
          <div className={styles.accentBar}></div>
        </div>

        <div className={styles.grid}>
          {EDUCATIONS.map((edu, index) => (
            <div key={index} className={`${styles.eduCard} shimmer-card`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <h4 className={styles.school}>{edu.school}</h4>
                </div>
              </div>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Timeline</span>
                  <div className={styles.metaValue} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={14} className="text-muted" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{edu.scoreType}</span>
                  <div className={styles.scoreBadge} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Award size={14} />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
