import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <div className="about-main">

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h2>About Himalayan Sports Academy</h2>
          <h1>Building Athletes. Shaping Character.</h1>
          <p>
            A professional sports academy committed to developing disciplined,
            confident, and high-performing athletes for the future.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="about-section">
        <div className="about-container">
          <h2>Who We Are</h2>
          <p>
            Himalayan Sports Academy (HSA) is a dedicated high-performance sports
            academy focused on nurturing young talent through structured
            training, discipline, and passion for the game.
            <br /><br />
            Our mission is to create not only skilled athletes, but also strong,
            confident individuals who carry the values of sportsmanship,
            leadership, and resilience beyond the field.
          </p>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="about-section dark">
        <div className="about-container">
          <h2>Our Training Philosophy</h2>
          <p>
            At HSA, we believe that sports is more than competition — it is a
            powerful tool for character building, discipline, and
            decision-making.
            <br /><br />
            Our coaching philosophy encourages athletes to think independently,
            make confident decisions on the field, and continuously improve
            through structured guidance and feedback.
          </p>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="about-split">
        <div className="about-content">
          <h2>Structured Athlete Development</h2>
          <p>
            Himalayan Sports Academy offers age-appropriate training programs
            designed to guide athletes from their early introduction to sports
            through competitive and performance-based levels.
          </p>

          <ul className="about-points">
            <li>Age-specific training methodology</li>
            <li>Focus on physical, mental & tactical growth</li>
            <li>Safe and disciplined training environment</li>
            <li>Certified and experienced coaches</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="/images/hsa-training.jpg" alt="HSA Training Session" />
        </div>
      </section>

      {/* ===== ENVIRONMENT ===== */}
      <section className="about-section">
        <div className="about-container">
          <h2>High-Quality Training Environment</h2>
          <p>
            Our training sessions are physically challenging, structured, and
            engaging — designed to push athletes while keeping learning fun and
            safe.
            <br /><br />
            Every session is carefully monitored by expert coaches to ensure
            proper development, injury prevention, and a positive learning
            atmosphere.
          </p>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="about-section dark">
        <div className="about-container">
          <h2>Developing Champions</h2>
          <p>
            Over the years, athletes trained at Himalayan Sports Academy have
            demonstrated excellence in local and competitive tournaments.
            <br /><br />
            While achievements matter, our greatest success is seeing our
            athletes grow into disciplined, confident individuals ready to face
            challenges on and off the field.
          </p>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section className="about-cta">
        <h2>More Than an Academy</h2>
        <p>
          Himalayan Sports Academy is a community built on passion, discipline,
          and growth. Join us and take the first step toward becoming the
          athlete you aspire to be.
        </p>
      </section>

      

    </div>
  );
}
