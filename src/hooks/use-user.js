import { useState, useEffect } from "react";
import getUser from "../api/get-user";

function useUser(userId) {
    
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    
    useEffect(() => {
        getUser(userId).then((user) => {
            setUser({...user, date_joined: user?.date_joined ? Date.parse(user.date_joined): ''});
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    }, [userId])

    return { user, isLoading, error };
}

export default useUser;