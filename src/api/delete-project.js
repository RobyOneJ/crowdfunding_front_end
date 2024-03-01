async function deleteProject(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });

        if (!response.ok) {
            const fallbackError = `Error deleting project with id ${projectId}`;
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const message = Object.getOwnPropertyNames(errorData)
                .map(name => `${name}: ${errorData[name]}`)
                .join('\n');
            throw new Error(message);
        }
        alert(`Project id ${projectId} deleted successfully!`);
        return response;


    } catch (error) {
        alert('Error deleting project:\n', error.message);
        throw error;
    }
}

export default deleteProject;
