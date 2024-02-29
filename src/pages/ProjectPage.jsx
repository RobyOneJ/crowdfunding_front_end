import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project"
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import dateFormatter from "../util.js";
import './ProjectPage.css';

function ProjectPage() {

    // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    const { auth, setAuth } = useAuth();

    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
        <div id="project-page-container">
            <h2>{project.title}</h2>
            <h3>Created at: {dateFormatter.format(project.date_created)}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            {project.owner === auth.userId && <Link to="/project/edit" state={project}><button>Update project</button></Link>}
            {auth.userId && project.owner !== auth.userId && <Link to={`/pledge/${project.id}`}><button>New pledge</button></Link>}
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