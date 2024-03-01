import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
    const { projects, isLoading, error } = useProjects();

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    };

    return (
        <div>
            <div id='homepage-heading'><b>EDUKidz</b> is a platform that empowers individuals to crowdfund initiatives for underprivileged children, enabling them to access education and pursue their dreams.
                These children, filled with aspirations for themselves, their families, and their communities, often face financial barriers or geographic limitations that prevent them from attending school. 
                <p><b>EDUKidz</b> bridges this gap by providing the tools and resources they need to unlock their full potential.</p>
                <p>Explore the projects below, donate to a project or create a new one.</p>
            </div>
            <div id="project-list">
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div >
    );
}

export default HomePage;
