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
    </div>  
    );
}

export default NavBar;
