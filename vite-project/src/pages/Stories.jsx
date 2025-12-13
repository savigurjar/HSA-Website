import React from "react";
import "../style/Stories.css";

export default function SuccessStories() {
  return (
    <div className="section success-section">
      <div className="container">
        <h2>Our Success Stories</h2>
        <p className="success-intro">
          At Himalayan Sports Academy, we celebrate the achievements of our athletes. From local tournaments to state-level competitions, our players shine with discipline, dedication, and teamwork.
        </p>

        <div className="success-grid">

          {/* Story 1 */}
          <div className="success-card">
            <img src="../assets/success1.jpg" alt="Athlete 1" />
            <div className="success-content">
              <h3>Rohan Sharma</h3>
              <p>
                Secured 1st place in the State-level Football Championship 2024. Exemplifies dedication and sportsmanship.
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="success-card">
            <img src="../assets/success2.jpg" alt="Athlete 2" />
            <div className="success-content">
              <h3>Anjali Verma</h3>
              <p>
                Represented Himachal Pradesh in National Athletics Meet 2023. Inspires younger athletes with her discipline.
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="success-card">
            <img src="../assets/success3.jpg" alt="Athlete 3" />
            <div className="success-content">
              <h3>Vikram Singh</h3>
              <p>
                Young footballer selected for regional team. Demonstrates resilience and consistent training.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
