import { useState, useEffect } from "react";
import getProject from "../api/get-project";

function useProject(projectId) {
    
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    
    useEffect(() => {
        getProject(projectId).then((project) => {
            setProject({...project, date_created: project?.date_created ? Date.parse(project.date_created): ''});
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    }, [projectId])

    return { project, isLoading, error };
}

export default useProject;