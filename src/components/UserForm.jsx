import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postUser from "../api/post-user.js";
import useAuth from "../hooks/use-auth.js";
import { useLocation } from "react-router-dom";
import putUser from "../api/put-user.js";
import './UserForm.css';


function UserForm() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();


    const [details, setDetails] = useState({
        username: "",
        password: "",
        first_name: state?.first_name ?? "",
        last_name: state?.last_name ?? "",
        email: state?.email ?? ""
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (details.first_name === "" || details.last_name === "" || details.email === "") {
            alert("Please fill in all the fields");
            return;
        };

        if (auth.userId) {
            putUser({
                userId: auth.userId,
                first_name: details.first_name,
                last_name: details.last_name,
                email: details.email
            }).then(() => {
                navigate(`/account/${auth.userId}`);
            });
        }
        else if (details.username && details.password) {
            postUser({
                username: details.username,
                password: details.password,
                first_name: details.first_name,
                last_name: details.last_name,
                email: details.email
            }).then(() => {
                navigate("/login");
            });
        }
    };

    return (
        <div id="user-form-container">
            <form id="user-form">
                {!auth.userId &&
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter a Username"
                            autoComplete="new-username"
                            onChange={handleChange}
                        />
                    </div>
                }
                {!auth.userId &&
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter a Password"
                            autoComplete="new-password"
                            onChange={handleChange}
                        />
                    </div>
                }
                <div>
                    <label htmlFor="firstname">First name: </label>
                    <input
                        type="text"
                        id="first_name"
                        value={details.first_name}
                        placeholder="Enter your first name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last name: </label>
                    <input
                        type="text"
                        id="last_name"
                        value={details.last_name}
                        placeholder="Enter your last name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Valid email: </label>
                    <input
                        type="text"
                        id="email"
                        value={details.email}
                        placeholder="Enter a valid email address"
                        onChange={handleChange}
                    />
                </div>
                <button id='user-button-submit' onClick={handleSubmit}>
                    {auth.userId ? "Update" : "Signup"}
                </button>
            </form>
        </div>
    );
}

export default UserForm;