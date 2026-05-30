import { Code, Layers, Database, Wrench, BookOpen } from "lucide-react";
import styles from "./Skills.module.css";

const SKILL_CATEGORIES = [
  {
    title: "Languages & Frameworks",
    icon: <Code size={22} />,
    skills: ["Dart", "Flutter", "Node.js", "Express.js", "C", "C++"],
  },
  {
    title: "State Management",
    icon: <Layers size={22} />,
    skills: ["Bloc", "Riverpod", "Provider", "GetX"],
  },
  {
    title: "Backend & Integrations",
    icon: <Database size={22} />,
    skills: ["REST APIs", "Firebase Auth", "Firestore", "Cloud Functions", "Push Notifications", "WebSockets"],
  },
  {
    title: "Storage & Dev Tools",
    icon: <Wrench size={22} />,
    skills: ["Hive", "SharedPreferences", "Git", "GitHub", "Google Play Console"],
  },
  {
    title: "Core Competencies",
    icon: <BookOpen size={22} />,
    skills: ["Data Structures & Algorithms", "Operating Systems", "Database Management (DBMS)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">⚡ What I Know</span>
          <h2 className={styles.title}>Technical Expertise</h2>
          <div className={styles.accentBar}></div>
        </div>

        <div className={styles.grid}>
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className={`${styles.categoryCard} shimmer-card`}>
              <div className={styles.header}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
