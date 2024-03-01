async function putUser({ userId, first_name, last_name, email }) {
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
            const fallbackError = `Error updating user account ${userId}`;
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });
            const message = Object.getOwnPropertyNames(errorData)
                .map(name => `${name}: ${errorData[name]}`)
                .join('\n');
            throw new Error(message);
        }

        const user = await response.json();
        alert("User updated successfully!");
        return user;

    } catch (error) {
        alert('Error updating user account:\n' + error.message);
        throw error;
    }
}

export default putUser;