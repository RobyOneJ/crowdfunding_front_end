import { Link } from "react-router-dom";
import "./ProjectCard.css";


function ProjectCard({ projectData }) {

    const projectLink = `project/${projectData.id}`;

    return (
        <div className="project-card">
            <Link to={projectLink}>
                <div className="flippable">
                    <div className="card">
                        <div className="card-back">{projectData.description}</div>
                        <div className="card-front"><img src={projectData.image} alt={'${projectData.title} image'} /></div>
                    </div>
                </div>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );

}
export default ProjectCard;