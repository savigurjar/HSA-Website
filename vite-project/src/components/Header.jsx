import { Link } from "react-router";
import "../style/Header.css";
import clogo from "../assets/image.png"


function Header() {
    return (
        <nav className="navbar">
            {/* Top navigation */}
            <div className="first-nav">
                <h1>Himalayan Sports Academy</h1>
                <ul className="log-sign">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>

            {/* Bottom navigation */}
            <div className="second-nav">
                <div className="logo">
                    <img src={clogo} alt="Club Logo" />

                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stories">Success Stories</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/partner">Our Partner</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
