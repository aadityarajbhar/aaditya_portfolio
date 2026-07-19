"use client";

import { useState } from "react";
import { ChevronRight, Smartphone, Star, Download, Play, Check } from "lucide-react";
import styles from "./Projects.module.css";

const PROJECTS = [

  {
    title: "Servyo",
    subtitle: "On-Demand Household Services App",
    category: "On-Demand Services",
    themeColor: "#6366f1",
    initials: "SV",
    icon: "/icons/Service-Provider-User-App-.png",
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
    themeColor: "#8b5cf6",
    initials: "SP",
    icon: "/icons/Service-Provider-Partner-App.png",
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
    themeColor: "#14b8a6",
    initials: "VC",
    icon: "/icons/veroa_logo.png",
    metrics: { downloads: "1K+", rating: "4.9 ★", platform: "iOS & Android" },
    description: "Designed and developed an end-to-end photography service platform enabling users to discover, book, and manage professional photoshoots seamlessly.",
    features: [
      "Scalable booking system with real-time availability and instant confirmation",
      "Push notifications for updates and schedule changes",
      "Admin chat functionality using socket-based communication",
      "Reminders and coordination for photoshoot schedules"
    ],
    appStore: "https://apps.apple.com/in/app/veroa-crew/id6762200664",
    playStore: "https://play.google.com/store/apps/details?id=com.veroastudioz.crew"
  },
  {
    title: "Pawfect Caring",
    subtitle: "Pet Management App",
    category: "Health & Routine Tracker",
    themeColor: "#f59e0b",
    initials: "PC",
    icon: "/icons/pawfect_caring_app.png",
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
    title: "Hire Roofer",
    subtitle: "Roofing Professionals Marketplace",
    category: "Marketplace / Business",
    themeColor: "#ef4444",
    initials: "HR",
    icon: "/icons/Hire_roofer_app_flutter.png",
    metrics: { downloads: "1K+", rating: "4.9 ★", platform: "iOS & Android" },
    description: "A dedicated marketplace that connects homeowners, businesses, contractors, and professional roofers in one platform across Australia.",
    features: [
      "Job posting, multiple quote management, and roofer profile comparisons",
      "Real-time messaging, notifications, and interactive map-based job discovery",
      "Document, certification, and project lead management tools",
      "Google Sign-In, Apple Sign-In, OTP authentication, and secure payments"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.hireroofer.app",
    appStore: "https://apps.apple.com/au/app/hire-roofer/id6776122240"
  },
  {
    title: "Marathi Biodata Maker",
    subtitle: "Biodata Creator App",
    category: "Utility / Document Creator",
    themeColor: "#ec4899",
    initials: "BM",
    icon: "/icons/biodata_new_app_15_2_25.png",
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
    themeColor: "#3b82f6",
    initials: "SC",
    icon: "/icons/super_catalog_app.png",
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
    themeColor: "#10b981",
    initials: "IC",
    icon: "/icons/Image_to_image_catalog_app-main.png",
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
    themeColor: "#f43f5e",
    initials: "RM",
    icon: "/icons/reshimgathi_logo.png",
    metrics: { downloads: "10K+", rating: "4.6 ★", platform: "Android" },
    description: "Community-focused matrimony app for the Maratha community, enabling users to discover and connect with verified profiles.",
    features: [
      "Advanced profile search engine with filters, favorites, and requests",
      "Integrated secure payment gateways for premium features",
      "Real-time match alerts and push notifications",
      "Manual profile verification system for safety"
    ],
    playStore: "https://play.google.com/store/apps/details?id=dev.probity.reshimgathi"
  },
  {
    title: "DineRight",
    subtitle: "Restaurant Discovery & Booking App",
    category: "Food & Dining",
    themeColor: "#f97316",
    initials: "DR",
    icon: "/icons/Dine-Right-Generated.png",
    metrics: { downloads: "Coming Soon", rating: "N/A", platform: "iOS & Android" },
    description: "A comprehensive restaurant discovery platform built with Flutter. It utilizes Provider for state management, connects to a REST API backend, and follows a clean MVC architecture.",
    features: [
      "Location-based restaurant search with GPS for nearby recommendations",
      "Real-time table booking and comprehensive menu exploration",
      "Secure OTP authentication and seamless payment processing via Razorpay",
      "Currently pending live release on App Store and Google Play"
    ]
  }
];

export default function Projects() {
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
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className={styles.projectCard}
              style={{ "--item-color": proj.themeColor }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} style={{ background: `linear-gradient(135deg, ${proj.themeColor}, #000000)` }}>
                  {proj.icon ? (
                    <img src={proj.icon} alt={`${proj.title} icon`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                  ) : (
                    proj.initials
                  )}
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                  <span className={styles.cardPlatform} style={{ color: proj.themeColor }}>{proj.metrics.platform}</span>
                </div>
              </div>


              <p className={styles.cardDescription}>{proj.description}</p>

              <div className={styles.featuresContainer}>
                {proj.features.map((feat, fIdx) => (
                  <div key={fIdx} className={styles.featureItem}>
                    <Check size={14} className={styles.checkIcon} style={{ color: proj.themeColor }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.storeLinks}>
                {proj.playStore && (
                  <a href={proj.playStore} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} style={{ background: proj.themeColor }}>
                    <Play size={16} style={{ fill: "currentColor" }} /> Google Play
                  </a>
                )}
                {proj.appStore && (
                  <a href={proj.appStore} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} style={{ background: proj.themeColor }}>
                    <Smartphone size={16} /> App Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
