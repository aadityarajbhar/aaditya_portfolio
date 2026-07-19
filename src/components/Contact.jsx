"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c6fefa82-f9da-470f-a35f-0f4ee9727fde",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Error submitting form:", result);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <span className="section-tag">📨 Get In Touch</span>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className="text-center subtitle">
          Have an exciting project or want to collaborate? Reach out directly or send a message.
        </p>
        <div className={styles.accentBar}></div>

        <div className={styles.grid}>
          {/* Left: Info Card */}
          <div className={styles.infoColumn}>
            <p className={styles.infoIntro}>
              I'm always looking for opportunities to build cutting-edge applications, 
              integrate Gemini AI systems, and collaborate on scalable architectures.
            </p>

            <div className={styles.infoList}>
              <a href="mailto:aadityarajbhar98@gmail.com" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Email Me</span>
                  <span className={styles.infoValue}>aadityarajbhar98@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919765885182" className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Call Me</span>
                  <span className={styles.infoValue}>+91 9765885182</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aadityarajbhar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>LinkedIn Profile</span>
                  <span className={styles.infoValue}>linkedin.com/in/aadityarajbhar</span>
                </div>
              </a>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Nashik, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.inputLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.inputField}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.inputField}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.inputLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={styles.inputField}
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                Message Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={`${styles.inputField} ${styles.textareaField}`}
                placeholder="Hey Aaditya, let's discuss this mobile app..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`glow-btn ${styles.submitBtn}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              <Send size={16} style={{ marginLeft: 4 }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
