async function putPledge(pledgeData) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/${pledgeData.id}`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                amount: pledgeData.amount,
                comment: pledgeData.comment,
                is_anonymous: pledgeData.isAnonymous
            }),
        });

        if (!response.ok) {
            const fallbackError = `Error updating pledge ${pledgeData.id}`;
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const message = Object.getOwnPropertyNames(errorData)
                .map(name => `${name}: ${errorData[name]}`)
                .join('\n');
            throw new Error(message);
        }

        const pledge = await response.json();
        alert("Pledge updated successfully!");
        return pledge;

    } catch (error) {
        alert('Error updating pledge:\n' + error.message);
        throw error;
    }
}

export default putPledge;
