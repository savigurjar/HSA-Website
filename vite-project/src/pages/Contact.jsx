import React from "react";
import "../style/Contact.css";

export default function Contact() {
  return (
    <div className="contact-main">

      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h2>Get In Touch</h2>
          <h1>Contact Himalayan Sports Academy</h1>
          <p>
            Ready to train at high altitude and high standards?
            Reach out to us and begin your journey with HSA.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO ===== */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">

            <div className="contact-card">
              <h3>Academy Location</h3>
              <p>
                Himalayan Sports Academy <br />
                Himachal Pradesh, India
              </p>
            </div>

            <div className="contact-card">
              <h3>Phone</h3>
              <p>
                +91 XXXXX XXXXX <br />
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="contact-card email">
              <h3>Email</h3>
              <p>
                info@himalayansportsacademy.com <br />
                admissions@himalayansportsacademy.com
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="contact-form-section">
        <div className="contact-container">
          <h2>Send Us a Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="contact-cta">
        <h2>Train in the Himalayas</h2>
        <p>
          Experience elite training, discipline, and growth in the heart of
          Himachal Pradesh — where champions are forged.
        </p>
      </section>

    </div>
  );
}
