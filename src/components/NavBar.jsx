import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import "./NavBar.css";


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
        </div>
    );
}

export default NavBar;
