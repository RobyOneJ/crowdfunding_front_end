import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postUser from "../api/post-user.js";
import './UserForm.css';



function UserForm() {
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
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
        if (details.username && details.password) {
            postUser({
                username: details.username,
                password: details.password,
                first_name: details.first_name,
                last_name: details.last_name,
                email: details.email
            }).then((response) => {
                navigate("/login");
            });
        }
    };

    return (
        <div id="user-form-container">
            <form id="user-form">
                <div>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter a Username"
                        autoComplete="new-username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter a Password"
                        autoComplete="new-password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="first_name"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="last_name"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter a valid email address"
                        onChange={handleChange}
                    />
                </div>
                <button id='user-button-submit' onClick={handleSubmit}>
                    Create User Account
                </button>
            </form>
        </div>
    );
}

export default UserForm;