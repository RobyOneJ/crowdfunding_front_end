import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function UserPage() {

    const { id } = useParams();

    
    //const { user, isLoading, error } = useUser(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
        <div> This is the user page </div>
    );
}


export default UserPage;