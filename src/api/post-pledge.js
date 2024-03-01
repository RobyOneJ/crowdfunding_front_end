async function postPledge(pledgeData) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                amount: pledgeData.amount,
                comment: pledgeData.comment,
                is_anonymous: pledgeData.isAnonymous,
                project: pledgeData.project
            }),
        });

        if (!response.ok) {
            const fallbackError = 'Error creating pledge';
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const message = Object.getOwnPropertyNames(errorData)
                .map(name => `${name}: ${errorData[name]}`)
                .join('\n');
            throw new Error(message);
        }

        const pledge = await response.json();
        alert("Pledge created successfully!");
        return pledge;

    } catch (error) {
        alert('Error creating pledge:\n' + error.message);
        throw error;
    }
}

export default postPledge;
