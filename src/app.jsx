import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeaderBanner from "./components/HeaderBanner";
import githuburl from "./assets/imges/github.png"
import linkedinurl from "./assets/imges/linkedin.png"
import shecodesurl from "./assets/imges/She_Codes.png"
import "./app.css";

const App = () => {
    return (
        <div>
            <HeaderBanner />
            <NavBar />
            <Outlet />
            <div>
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
        </div>
    );
};

export default App;