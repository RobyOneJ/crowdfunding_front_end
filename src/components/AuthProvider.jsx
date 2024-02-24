// This is a component that stores the state for us - we will wrap our entire app in it
import { createContext, useState } from "react";

// Here we create the Context and we export it to be used by the components
export const AuthContext = createContext();

// Here we create the component that will wrap our app, this means all its children can access the context using the hook.
export const AuthProvider = (props) => {
    // Using a object for the state here, this way we can add more properties to the state later on like user id.
    const [auth, setAuth] = useState({
        // Here we initialize the context with the token from local storage, this way if the user refreshes the page we can still have the token in memory.
        token: window.localStorage.getItem("token"),
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
};