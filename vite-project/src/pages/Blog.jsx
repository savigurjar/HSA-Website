import React from "react";
import "../style/Blog.css";

export default function Blogs() {
  return (
    <div className="section blogs-section">
      <div className="container">
        <h2>Latest Blogs</h2>
        <p className="blogs-intro">
          Stay updated with training tips, success stories, and academy news. Our blogs inspire young athletes and keep parents informed.
        </p>

        <div className="blogs-grid">

          {/* Blog 1 */}
          <div className="blog-card">
            <img src="../assets/blog1.jpg" alt="Blog 1" />
            <div className="blog-content">
              <h3>Top 5 Football Drills for Young Players</h3>
              <p>
                Discover fun and effective drills that help children improve agility, ball control, and teamwork.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="blog-card">
            <img src="../assets/blog2.jpg" alt="Blog 2" />
            <div className="blog-content">
              <h3>Nutrition Tips for Young Athletes</h3>
              <p>
                Learn how proper nutrition can enhance performance, recovery, and overall growth for young players.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="blog-card">
            <img src="../assets/blog3.jpg" alt="Blog 3" />
            <div className="blog-content">
              <h3>Himalayan Sports Academy Updates</h3>
              <p>
                Read about our latest tournaments, achievements, and upcoming training programs.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
