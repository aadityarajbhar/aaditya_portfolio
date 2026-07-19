import styles from "./TechStack.module.css";
import ScrollReveal from "./ScrollReveal";

/* SVG brand icons inline - no external dependency needed */
const TECHS = [
  {
    name: "Flutter",
    color: "#54C5F8",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
      </svg>
    ),
  },
  {
    name: "Dart",
    color: "#0175C2",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.316 3.1 3.1 0 0 1 2.19.918L22.5 7.996c.526.526.794 1.213.794 1.9v.048c0 .688-.268 1.375-.794 1.9L12.4 21.944a3.1 3.1 0 0 1-2.19.918 3.1 3.1 0 0 1-2.19-.918L1.5 15.417a3.1 3.1 0 0 1-.794-1.9V6.805a3.1 3.1 0 0 1 .794-1.9zm7.6 1.52L6.3 11.025l5.404 5.406 5.403-5.406L11.705 5.625z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.672zm16.794 3.38L18.28 5.653a.542.542 0 0 0-.538-.481.542.542 0 0 0-.476.298L2.17 19.052l7.462 4.197a1.55 1.55 0 0 0 1.536 0l9.514-4.197zM14.901 5.645L13.098 2.08a.54.54 0 0 0-.972 0L3.907 17.77l10.994-12.125z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998.001a1.008 1.008 0 0 0-.501.132L2.01 5.57a1.003 1.003 0 0 0-.506.87v10.878c0 .36.194.692.506.87l9.487 5.437a1.003 1.003 0 0 0 1.004 0l9.487-5.437a1.003 1.003 0 0 0 .507-.87V6.44a1.003 1.003 0 0 0-.507-.87L12.5.133a1.01 1.01 0 0 0-.502-.132zm-.001 2.018l8.484 4.858v9.246l-8.484 4.86-8.484-4.86V6.877L11.997 2.02z" />
      </svg>
    ),
  },
  {
    name: "Express",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.83a1.435 1.435 0 0 1 1.788-.668L21.708 7.87l-2.522 3.283 3.573 4.712a1.573 1.573 0 0 1 1.241 2.723zM15.18 7.373H.908A.907.907 0 0 0 0 8.28v.018a.907.907 0 0 0 .908.908h14.27a.907.907 0 0 0 .907-.908V8.28a.907.907 0 0 0-.907-.907zm0 4.636H.908A.907.907 0 0 0 0 12.916v.018a.907.907 0 0 0 .908.908h14.27a.907.907 0 0 0 .907-.908v-.018a.907.907 0 0 0-.907-.907zm0 4.635H.908A.907.907 0 0 0 0 17.552v.017a.907.907 0 0 0 .908.908h14.27a.907.907 0 0 0 .907-.908v-.017a.907.907 0 0 0-.907-.908z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  {
    name: "REST API",
    color: "#6366f1",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Socket.io",
    color: "#010101",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2C6.4 2 2 6.4 2 11.9c0 5.5 4.4 9.9 9.9 9.9 5.5 0 9.9-4.4 9.9-9.9C21.8 6.4 17.4 2 11.9 2zm0 17.6c-4.3 0-7.7-3.5-7.7-7.7 0-4.2 3.5-7.7 7.7-7.7 4.2 0 7.7 3.5 7.7 7.7 0 4.2-3.5 7.7-7.7 7.7zm-1-8.8l4.5-5.1-5.4 5.7L6.4 8.9l4.5 4.9z" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <p className={styles.label}>Technologies I work with</p>
        </ScrollReveal>
        <div className={styles.track}>
          <div className={styles.marquee}>
            {[...TECHS, ...TECHS].map((tech, i) => (
              <div key={i} className={styles.techItem} style={{ "--tech-color": tech.color }}>
                <div className={styles.techIcon} style={{ color: tech.color }}>
                  {tech.svg}
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
