async function putUser({userId,first_name, last_name, email}) {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email
            }),
        });

        if (!response.ok) {
            const fallbackError = 'Error updating user account';
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        const user = await response.json();
        console.log("User updated successfully!");
        return user;

    } catch (error) {
        console.error('Error updating user account:', error);
        throw error;
    }
}

export default putUser;