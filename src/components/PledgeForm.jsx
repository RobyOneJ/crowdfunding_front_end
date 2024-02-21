import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postPledge from "../api/post-pledge";


function PledgeForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [pledge, setPledge] = useState({
        amount: "",
        comment: "",
        isAnonymous: false
    });

    const handleChange = (event) => {
        const { id, value, checked } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: id === 'isAnonymous' ? checked : value 
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        const newPledge = postPledge({ ...pledge, project: Number(id) });

        newPledge.then(project => {
            navigate(`/project/${id}`);
        }).finally(() => setIsSubmitting(false)); ;
    };

    return (
        <form>
            <div>
                <label htmlFor="amount">$ amount: </label>
                <input
                    type="number"
                    id="amount"
                    value={pledge.amount}
                    placeholder="Enter $ amount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="comment">Leave a comment: </label>
                <textarea
                    id="comment"
                    value={pledge.comment}
                    placeholder="Leave a comment"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="is_anonymous">Anonymous</label>
                <input
                    type="checkbox"
                    id="isAnonymous"
                    value={pledge.isAnonymous}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>Submit Pledge</button>
        </form>
    );
}

export default PledgeForm;
