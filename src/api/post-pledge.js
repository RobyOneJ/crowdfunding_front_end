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

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        const pledge = await response.json();
        alert("Pledge created successfully!");
        return pledge;

    } catch (error) {
        alert('Error creating pledge:' + error);
        throw error;
    }
}

export default postPledge;
