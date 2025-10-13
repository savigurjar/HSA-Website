import React, { useEffect } from "react";
import "../style/Home.css"; // ✅ Ensure the path is correct

export default function Home() {
  // 👇 Scroll animation for philosophy cards
  useEffect(() => {
    const cards = document.querySelectorAll(".philosophy-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      {/* ================= HERO SECTION ================= */}
      <div className="home">
        <h2>Empowering Athletes for Tomorrow</h2>
        <h1>Himalayan Sports Academy</h1>
        <p>
          At Himalayan Sports Academy, we believe in nurturing talent through
          discipline, passion, and consistency — from grassroots to greatness.
        </p>
      </div>

      {/* ================= MISSION SECTION ================= */}
      <div className="section mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Train with passion, play with purpose — your journey to greatness
            starts here. Every kick, every sprint, every drop of sweat builds
            your future. At Himalayan Sports Academy, we don’t just train
            players — we shape champions. With expert coaching and a winning
            mindset, you’ll rise above limits. From playground dreams to
            national teams — this is your first step. Join us today and become
            the athlete you were born to be.
          </p>
        </div>
      </div>

      <div className="section philosophy-section">
  <div className="container">
    <h2>HSA – The Club Philosophy</h2>
<p className="philosophy-intro">
    Our philosophy reflects the values that define every member of HSA —
    discipline, community, and a commitment to growth.
  </p>
    <div className="philosophy-grid">

      {/* CARD 1 — Discipline */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="/images/discipline.jpg" alt="Discipline" />
            <div className="philosophy-overlay">
              <h3>Discipline</h3>
              <span className="philosophy-tag">Core Value</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Discipline & Dedication</h3>
            <blockquote>“Every rep counts — every day matters.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Show up daily, no excuses</li>
                <li>Respect the process</li>
                <li>Train with intent</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>5+</strong><span>Years of Legacy</span></div>
              <div><strong>98%</strong><span>Consistency Rate</span></div>
            </div>
            <button className="learn-more">Explore Discipline</button>
          </div>
        </div>
      </div>

      {/* CARD 2 — Holistic Development */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="./src/assets/first.JPG" alt="Holistic Development" />
            <div className="philosophy-overlay">
              <h3>Holistic Growth</h3>
              <span className="philosophy-tag">Mind • Body • Spirit</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Holistic Development</h3>
            <blockquote>“Excellence begins when mind and body align.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Mental toughness training</li>
                <li>Emotional balance</li>
                <li>Physical mastery</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>360°</strong><span>Growth Model</span></div>
              <div><strong>3</strong><span>Dimensions of Wellness</span></div>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>

      {/* CARD 3 — Community & Teamwork */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="/images/community.jpg" alt="Community" />
            <div className="philosophy-overlay">
              <h3>Community</h3>
              <span className="philosophy-tag">Together We Rise</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Community & Teamwork</h3>
            <blockquote>“One team. One heartbeat.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Mutual respect</li>
                <li>Collective success</li>
                <li>Support each other</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>200+</strong><span>Active Members</span></div>
              <div><strong>15+</strong><span>Team Events</span></div>
            </div>
            <button className="learn-more">Join the Team</button>
          </div>
        </div>
      </div>

      {/* CARD 4 — Excellence & Innovation */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="/images/innovation.jpg" alt="Innovation" />
            <div className="philosophy-overlay">
              <h3>Innovation</h3>
              <span className="philosophy-tag">Evolve Constantly</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Excellence & Innovation</h3>
            <blockquote>“Greatness is born from curiosity and courage.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Adaptive training modules</li>
                <li>Data-driven feedback</li>
                <li>Creative problem-solving</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>12+</strong><span>New Programs</span></div>
              <div><strong>4.9★</strong><span>Average Rating</span></div>
            </div>
            <button className="learn-more">Discover Innovation</button>
          </div>
        </div>
      </div>

      {/* CARD 5 — Resilience */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="/images/resilience.jpg" alt="Resilience" />
            <div className="philosophy-overlay">
              <h3>Resilience</h3>
              <span className="philosophy-tag">Never Back Down</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Resilience</h3>
            <blockquote>“Fall seven times, stand up eight.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Endure challenges</li>
                <li>Stay mentally strong</li>
                <li>Rise after failure</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>90%</strong><span>Retention Rate</span></div>
              <div><strong>100%</strong><span>Never Quit</span></div>
            </div>
            <button className="learn-more">Build Strength</button>
          </div>
        </div>
      </div>

      {/* CARD 6 — Leadership */}
      <div className="philosophy-card">
        <div className="philosophy-inner">
          <div className="philosophy-front">
            <img src="/images/leadership.jpg" alt="Leadership" />
            <div className="philosophy-overlay">
              <h3>Leadership</h3>
              <span className="philosophy-tag">Lead by Example</span>
            </div>
          </div>
          <div className="philosophy-back">
            <h3>Leadership & Mentorship</h3>
            <blockquote>“Real leaders create more leaders.”</blockquote>
            <div className="philosophy-values">
              <h4>Principles</h4>
              <ul>
                <li>Inspire others</li>
                <li>Own responsibility</li>
                <li>Mentor the next generation</li>
              </ul>
            </div>
            <div className="philosophy-stats">
              <div><strong>20+</strong><span>Certified Mentors</span></div>
              <div><strong>100+</strong><span>Students Guided</span></div>
            </div>
            <button className="learn-more">Meet Our Leaders</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* ================= WHAT WE OFFER SECTION ================= */}
      <div className="section cards-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Youth Programs</h3>
              <p>
                Specialized training for young athletes, focusing on fundamental
                skills, growth, and enjoyment.
              </p>
            </div>

            <div className="card">
              <h3>Elite Coaching</h3>
              <p>
                Access to experienced coaches with proven track records in
                developing top-tier talent.
              </p>
            </div>

            <div className="card">
              <h3>State-of-the-Art Facilities</h3>
              <p>
                Train in modern facilities equipped with the latest technology
                and resources.
              </p>
            </div>

            <div className="card">
              <h3>Nutritional Guidance</h3>
              <p>
                Expert advice and plans to fuel performance and promote overall
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
