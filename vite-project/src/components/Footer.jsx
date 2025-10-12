import React from "react";
import "../style/Footer.css";
import logo from "../assets/image.png";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Footer() {
  return (
    <footer className="hfc-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Himalayan FC" />
          <span>Himalayan Sports Academy</span>
        </div>

        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/himalayansportsacademy/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>GET IN TOUCH</h4>
          <p>
            <strong>Email:</strong> himalayanfckinnaur@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Reckong Peo, Kinnaur, Himachal Pradesh,
            172107
          </p>
          <p>
            <strong>Call Us:</strong> +91 7697722419
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Himalayan FC Kinnaur. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
