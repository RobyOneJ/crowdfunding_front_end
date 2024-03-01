async function postUser({ username, password, first_name, last_name, email }) {
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

            const message = Object.getOwnPropertyNames(errorData)
                .map(name => `${name}: ${errorData[name]}`)
                .join('\n');
            throw new Error(message);
        }

        const user = await response.json();
        alert("User account created successfully!");
        return user;

    } catch (error) {
        alert('Error creating user account:\n' + error.message);
        throw error;
    }
}

export default postUser;