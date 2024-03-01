async function putProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectData.id}`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                title: projectData.title,
                description: projectData.description,
                goal: projectData.goal,
                image: projectData.image
            }),
        });

        if (!response.ok) {
            const fallbackError = `Error updating project ${projectData.id}`;
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        const project = await response.json();
        alert("Project updated successfully!");
        return project;

    } catch (error) {
        alert('Error creating project:' + error);
        throw error;
    }
}

export default putProject;
