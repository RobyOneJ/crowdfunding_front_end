import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import postProject from '../api/post-project';
import putProject from '../api/put-project';
import { useLocation } from "react-router-dom";
import './ProjectForm.css';

const ProjectForm = () => {
  const { state } = useLocation();

  const [title, setTitle] = useState(state?.title ?? "");
  const [description, setDescription] = useState(state?.description ?? "");
  const [goal, setGoal] = useState(state?.goal ?? "");
  const [image, setImage] = useState(state?.image ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "" || description === "" || goal === "" || image === "") {
      alert("Please fill in all the fields");
      return;
    };

    setIsSubmitting(true);

    if (state?.id) {
      putProject({
        id: state.id,
        title,
        description,
        goal,
        image
      }).then((project) => {
        navigate(`/project/${project.id}`);
      }).finally(() => setIsSubmitting(false));
    } else {
      const newProject = postProject({
        title,
        description,
        goal,
        image
      });
      newProject.then(project => {
        navigate(`/project/${project.id}`);
      }).finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div id="project-form-container">
      <form onSubmit={handleSubmit} id='project-form'>
        <label htmlFor="projectTitle">Project title: </label>
        <input
          type="text"
          name="title"
          placeholder="Project title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">Project description: </label>
        <textarea
          name="description"
          placeholder="Project description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="goal">Target amount$: </label>
        <input
          type="text"
          name="goal"
          placeholder="Goal $ amount"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        />
        <label htmlFor="image">Upload image: </label>
        <input
          type="text"
          name="image"
          placeholder="Image url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button type="submit" id='new-proj-button' disabled={isSubmitting}>
          {state?.id ? "Update" : "Create"} Project
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ProjectForm;