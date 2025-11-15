import React, { useState } from "react";
import { Link } from "react-router";   // <-- FIXED
import "../style/Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setError("Please fill all fields");
      return;
    }

    alert("Signup successful!");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create Account</h1>

      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="signup-btn" type="submit">Sign Up</button>
      </form>

      <p className="signup-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
