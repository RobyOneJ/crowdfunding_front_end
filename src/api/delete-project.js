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

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }
        alert(`Project id ${projectId} deleted successfully!`);
        return response;
        

    } catch (error) {
        alert('Error deleting project:', error);
        throw error;
    }
}

export default deleteProject;
