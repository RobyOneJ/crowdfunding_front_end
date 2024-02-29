import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postPledge from "../api/post-pledge";
import putPledge from "../api/put-pledge";
import { useLocation } from "react-router-dom";
import './PledgeForm.css';


function PledgeForm() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [pledge, setPledge] = useState({
        amount: state?.amount ?? "",
        comment: state?.comment ?? "",
        isAnonymous: state?.isAnonymous ?? false
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

        if (state?.id) {
            putPledge({
                id: state.id,
                amount: pledge.amount,
                comment: pledge.comment,
                isAnonymous: pledge.isAnonymous
            }).then((project) => {
                navigate(`/project/${state.project}`);
            }).finally(() => setIsSubmitting(false));
        } else {

            const newPledge = postPledge({ ...pledge, project: Number(id) });

            newPledge.then(project => {
                navigate(`/project/${id}`);
            }).finally(() => setIsSubmitting(false));
        }
    };

    return (
        <div id='pledge-form-container'>
            <form id='pledge-form'>
                <div>
                    <label htmlFor="amount">Pledge amount: </label>
                    <input
                        type="number"
                        id="amount"
                        value={pledge.amount}
                        placeholder="$ amount"
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
                    <label id='checkbox' htmlFor="is_anonymous">Anonymous</label>
                    <input
                        type="checkbox"
                        id="isAnonymous"
                        value={pledge.isAnonymous}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" id='pledge-button' onClick={handleSubmit} disabled={isSubmitting}>
                    {state?.id ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default PledgeForm;
