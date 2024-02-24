import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import "./NavBar.css";
import githuburl from "../assets/imges/github.png"
import shecodesurl from "../assets/imges/She_Codes.png"
import linkedinurl from "../assets/imges/linkedin.png"

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    {auth.token ? (<li><Link to="/" onClick={handleLogout}>Logout</Link></li>) : (<li><Link to="/login">Login</Link></li>)}
                    {auth.token && <li><Link to="/project">New Project</Link></li>}
                    {auth.token ? (<li><Link to="/account/10">My Account</Link></li>) : (<li><Link to="/account">New Account</Link></li>)}

                </ul>
            </nav>
            <Outlet />
            <footer>
                <a href="https://www.linkedin.com/in/roberta-de-cecco-837b6a12/" target="_blank" rel="noopener no referrer"><img
                    className="logo" src={linkedinurl} alt="LinkedIn icon" /></a>
                <a href="https://github.com/RobyOneJ" target="_blank" rel="noopener no referrer"><img className="logo"
                    src={githuburl} alt="GitHub icon" /></a>
                <p className="small-text">© 2024 Roberta De Cecco. All rights reserved.</p>
                <p className="small-text">Empowered by<a href="http://shecodes.com.au" target="_blank" rel="noopener no referrer"><img
                    className="shecodeslogo" src={shecodesurl} alt="SheCodes icon" />
                </a></p>
            </footer>
        </div>
    );
}

export default NavBar;
