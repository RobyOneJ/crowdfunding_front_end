import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/project">New Project</Link></li>
                    <li><Link to="/contact">ContactUs</Link></li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <a href="https://www.linkedin.com/in/roberta-de-cecco-837b6a12/" target="_blank" rel="noopener no referrer"><img
                    className="logo" src="src/assets/imges/linkedin.png" alt="LinkedIn icon" /></a>
                <a href="https://github.com/RobyOneJ" target="_blank" rel="noopener no referrer"><img className="logo"
                    src="src/assets/imges/github.png" alt="GitHub icon" /></a>
                <p className="small-text">© 2024 Roberta De Cecco. All rights reserved.</p>
                <p className="small-text">Empowered by<a href="http://shecodes.com.au" target="_blank" rel="noopener no referrer"><img
                    className="shecodeslogo" src="src/assets/imges/She_Codes.png" alt="SheCodes icon" />
                </a></p>
            </footer>
        </div>
    );
}

export default NavBar;
