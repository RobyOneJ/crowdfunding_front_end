import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import dateFormatter from "../util.js";
import deleteProject from "../api/delete-project.js";
import './ProjectPage.css';

function ProjectPage() {

    // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        if (!confirm("Are you sure you want to delete this project?")) {
            return;
        }
        deleteProject(id).then(() => {
            navigate("/");
        })
    };


    return (
        <div id="project-page-container">
            <h2>{project.title}</h2>
            <h3>Description: {project.description}</h3>
            <h3>Created at: {dateFormatter.format(project.date_created)}</h3>
            <h3>Status: {project.is_open ? "Active" : "Inactive"}</h3>
            <h3>Target amount: ${project.goal}</h3>
            

            {project.owner === auth.userId && <div id="project-management-container"><Link to="/project/edit" state={project}><button>Update project</button></Link><button onClick={handleDelete}>Delete project</button></div>}
            {auth.userId && project.owner !== auth.userId && <Link to={`/pledge/${project.id}`}><button>New pledge</button></Link>}
            <br/>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    const isMyPledge = pledgeData.supporter === auth.username;
                    return (
                        <li key={key}>
                            ${pledgeData.amount} from {pledgeData.is_anonymous ? "anonymous" : `${pledgeData.supporter}`}: {`${pledgeData.comment}`}
                            {isMyPledge && <Link to="/pledge/edit" state={pledgeData}><button>Update pledge</button></Link>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}


export default ProjectPage;