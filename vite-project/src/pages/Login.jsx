import React, { useState } from "react";
import { Link, useNavigate } from "react-router";  // <-- FIXED
import "../style/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "123456") {
      alert("Login successful!");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>

      <form onSubmit={handleSubmit} className="login-form">

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="login-btn" type="submit">Login</button>
      </form>

      <p className="login-footer">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
