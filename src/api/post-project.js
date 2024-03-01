async function postProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = `Token ${window.localStorage.getItem("token")}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                title: projectData.title,
                description: projectData.description,
                goal: projectData.goal,
                image: projectData.image,
                is_open: true,
                date_created: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            const fallbackError = 'Error creating project';
            const errorData = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = errorData?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        const project = await response.json();
        alert("Project created successfully!");
        return project;

    } catch (error) {
        alert('Error creating project:' + error);
        throw error;
    }
}

export default postProject;
