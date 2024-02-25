import { useParams } from "react-router-dom";
import useUser from "../hooks/use-user.js";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";


function UserPage() {

    const { id } = useParams();
    const { auth, setAuth } = useAuth();
    const { user, isLoading, error } = useUser(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
        <div>
            <h2>User Profile Page</h2>
            <h3>{`Username: ${user.username}`}</h3>
            <h3>{`First Name: ${user.first_name}`}</h3>
            <h3>{`Last name: ${user.last_name}`}</h3>
            <h3>{`Email adress: ${user.email}`}</h3>
            <h3>Joined on the: {user.date_joined}</h3>
            {auth.token && <Link to="/account/edit" state={user}><button>Update details</button></Link>}
        </div>
    );

}


export default UserPage;