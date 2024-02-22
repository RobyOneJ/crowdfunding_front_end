async function postUser({username, password, first_name, last_name, email}) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                first_name,
                last_name,
                email,
                date_joined: new Date().toISOString()
            }),
        });

        if (!response.ok) {
            const fallbackError = 'Error creating user account';
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        const user = await response.json();
        console.log("User account created successfully!");
        return user;

    } catch (error) {
        console.error('Error creating user account:', error);
        throw error;
    }
}

export default postUser;